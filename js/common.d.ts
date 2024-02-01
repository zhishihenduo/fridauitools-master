
import Members = common.Members;
import Wrapper = common.Wrapper;


declare function importClass<T extends Members<T> = {}>(className: any): Wrapper<T>;


declare namespace common {
    interface HookedMethod {
        /**
         * Detaches all previously attached listeners.
         */
        onHookedMethod(param: MethodHookParam): void;

    }

    interface MethodHookParam {
        getResult?: (events: ArrayBuffer) => void;
        thisObject?;
        method?;
        args?;
        result?;

        // getResult
        // param.getResult();
        // param.thisObject;
        // param.method;
        // param.args
    }


    type MethodImplementation<This extends Members<This> = {}> = (this: Wrapper<This>, ...params: any[]) => any;


    // tslint:disable-next-line:no-const-enum
    const enum MethodType {
        Constructor = 1,
        Static = 2,
        Instance = 3,
    }

    // const enum CallFrame {
    //     method,
    //     thisObject,
    //     args,
    //     result,
    //
    // }


    interface Type {
        /**
         * VM type name. For example `I` for `int`.
         */
        name: string;

        /**
         * Frida type name. For example `pointer` for a handle.
         */
        type: string;

        /**
         * Size in words.
         */
        size: number;

        /**
         * Size in bytes.
         */
        byteSize: number;

        /**
         * Class name, if applicable.
         */
        className?: string;

        /**
         * Checks whether a given JavaScript `value` is compatible.
         */
        isCompatible: (value: any) => boolean;

        /**
         * Converts `value` from a JNI value to a JavaScript value.
         */
        fromJni?: (value: any) => any;

        /**
         * Converts `value` from a JavaScript value to a JNI value.
         */
        toJni?: (value: any) => any;

    }


    // tslint:disable-next-line:no-const-enum
    const enum FieldType {
        Static = 1,
        Instance = 2,
    }

    interface Field<Value = any, Holder extends Members<Holder> = {}> {
        /**
         * Current value of this field. Assign to update the field's value.
         */
        value: Value;

        /**
         * Class that this field belongs to.
         */
        holder: Wrapper<Holder>;

        /**
         * What kind of field this is, i.e. static vs instance.
         */
        fieldType: FieldType;

        /**
         * Type of value.
         */
        fieldReturnType: Type;
    }

    type LoadPackageParam = {
        packageName;
    }

    /**
     * Dynamically generated wrapper for any Java class, instance, or interface.
     */
    type Wrapper<T extends Members<T> = {}> = {
        /**
         * Automatically inject holder's type to all fields and methods
         */
        [K in keyof T]: T[K] extends Field<infer Value> ? Field<Value, T> : MethodDispatcher<T>
    } & {
        /**
         * Allocates and initializes a new instance of the given class.
         *
         * Use this to create a new instance.
         */
        $new: MethodDispatcher<T>;

        /**
         * Allocates a new instance without initializing it.
         *
         * Call `$init()` to initialize it.
         */
        $alloc: MethodDispatcher<T>;

        /**
         * Initializes an instance that was allocated but not yet initialized.
         * This wraps the constructor(s).
         *
         * Replace the `implementation` property to hook a given constructor.
         */
        $init: MethodDispatcher<T>;

        /**
         * Retrieves a `java.lang.Class` wrapper for the current class.
         */
        class: Wrapper;

        /**
         * Canonical name of class being wrapped.
         */
        $className: string;

        /**
         * Instance used for chaining up to super-class method implementations.
         */
        $super: Wrapper;

        /**
         * Methods and fields.
         */
        [name: string]: any;
    };


    interface Method<Holder extends Members<Holder> = {}> {
        (...params: any[]): any;

        /**
         * Name of this method.
         */
        methodName: string;

        /**
         * Class that this method belongs to.
         */
        holder: Wrapper<Holder>;

        /**
         * What kind of method this is, i.e. constructor vs static vs instance.
         */
        type: MethodType;


        /**
         * Implementation. Assign a new implementation to this property to
         * replace the original implementation. Assign `null` at a future point
         * to revert back to the original implementation.
         */
        implementation: MethodImplementation<Holder> | null;

        /**
         * Method return type.
         */
        returnType: Type;

        /**
         * Method argument types.
         */
        argumentTypes: Type[];

        /**
         * Queries whether the method may be invoked with a given argument list.
         */
        canInvokeWith: (...args: any[]) => boolean;


    }

    interface MethodDispatcher<Holder extends Members<Holder> = {}> extends Method<Holder> {
        /**
         * Available overloads.
         */
        overloads: Array<Method<Holder>>;

        /**
         * Obtains a specific overload.
         *
         * @param args Signature of the overload to obtain.
         *             For example: `"java.lang.String", "int"`.
         */
        overload(...args: string[]): Method<Holder>;
    }

    type Members<T> = Record<keyof T, MethodDispatcher | Field>;


    /**
     * Whether the current process has a Java runtime loaded. Do not invoke any other Java properties or
     * methods unless this is the case.
     */
    const available: boolean;


    /**
     * Ensures that the current thread is attached to the VM and calls `fn`.
     * (This isn't necessary in callbacks from Java.)
     *
     * Will defer calling `fn` if the app's class loader is not available yet.
     * Use `Java.performNow()` if access to the app's classes is not needed.
     *
     * @param fn Function to run while attached to the VM.
     */
    function use<T extends Members<T> = {}>(className: string): Wrapper<T>;


    /**
     * Ensures that the current thread is attached to the VM and calls `fn`.
     * (This isn't necessary in callbacks from Java.)
     *
     * Will defer calling `fn` if the app's class loader is not available yet.
     * Use `Java.performNow()` if access to the app's classes is not needed.
     *
     * @param fn Function to run while attached to the VM.
     */
    function log<T extends Members<T> = {}>(className: string): Wrapper<T>;

    function toJson<T extends Members<T> = {}>(className: any): Wrapper<T>;

    function toast<T extends Members<T> = {}>(className: any): Wrapper<T>;

    function runOnThread<T extends Members<T> = {}>(fn): Wrapper<T>;

    function runOnUiThread<T extends Members<T> = {}>(fn, delay): Wrapper<T>;

    function getlpparam<T extends Members<T> = {}>(): LoadPackageParam;

    function getCurrentActivity<T extends Members<T> = {}>(): any;

    function findAndHookMethod<T extends Members<T> = {}>(
        className: string,
        methodName: string,
        classTypes: string[],
        xcHook: HookedMethod
    ): Wrapper<T>;

    function findAndHookMethod<T extends Members<T> = {}>(
        className: string,
        methodName: string,
        xcHook: HookedMethod
    ): Wrapper<T>;


    function callStaticMethod(className,methodMame,paramTypes);

    function hookAllMethods<T extends Members<T> = {}>(
        className: string,
        methodName: string,
        xcHook: HookedMethod
    ): Wrapper<T>;


    function thisMethod(param);

    function importClass(cls: string): string

    function getAllClassFromClassLoader(): string

    // common.findAndHookMethod(
    //     "com.virjar.sekiro.demo.handlers.RhinoHandler",
    //     "sayHello",
    //     ['java.lang.String', 'int'],
    //     function (param) {
    //         common.log("say hello 啦");
    //         var act = param.thisObject;
    //         common.log(" 当前对象" + act);
    //     }
    // );


}

