Java.perform()
{
    console.log("执行香蕉脚本")
    let ResourcesFlusher = Java.use("androidx.appcompat.app.ResourcesFlusher");
    ResourcesFlusher["RC4Base"].implementation = function (bArr, str) {
        console.log('RC4Base is called' + ', ' + 'bArr: ' + bArr + ', ' + 'str: ' + str);
        let ret = this.RC4Base(bArr, str);
        console.log('RC4Base ret value is ' + ret);
        return ret;
    };

}
//-h, --help            show this help message and exit
//   -D ID, --device ID    connect to device with the given ID
//   -U, --usb             connect to USB device
//   -R, --remote          connect to remote frida-server
//   -H HOST, --host HOST  connect to remote frida-server on HOST
//   --certificate CERTIFICATE
//                         speak TLS with HOST, expecting CERTIFICATE
//   --origin ORIGIN       connect to remote server with “Origin” header set to ORIGIN
//   --token TOKEN         authenticate with HOST using TOKEN
//   --keepalive-interval INTERVAL
//                         set keepalive interval in seconds, or 0 to disable (defaults to -1 to auto-select based on transport)
//   --p2p                 establish a peer-to-peer connection with target
//   --stun-server ADDRESS
//                         set STUN server ADDRESS to use with --p2p
//   --relay address,username,password,turn-{udp,tcp,tls}
//                         add relay to use with --p2p
//   -f TARGET, --file TARGET
//                         spawn FILE
//   -F, --attach-frontmost
//                         attach to frontmost application
//   -n NAME, --attach-name NAME
//                         attach to NAME
//   -N IDENTIFIER, --attach-identifier IDENTIFIER
//                         attach to IDENTIFIER
//   -p PID, --attach-pid PID
//                         attach to PID
//   -W PATTERN, --await PATTERN
//                         await spawn matching PATTERN
//   --stdio {inherit,pipe}
//                         stdio behavior when spawning (defaults to “inherit”)
//   --aux option          set aux option when spawning, such as “uid=(int)42” (supported types are: string, bool, int)
//   --realm {native,emulated}
//                         realm to attach in
//   --runtime {qjs,v8}    script runtime to use
//   --debug               enable the Node.js compatible script debugger
//   --squelch-crash       if enabled, will not dump crash report to console
//   -O FILE, --options-file FILE
//                         text file containing additional command line options
//   --version             show program's version number and exit
//   -l SCRIPT, --load SCRIPT
//                         load SCRIPT
//   -P PARAMETERS_JSON, --parameters PARAMETERS_JSON
//                         parameters as JSON, same as Gadget
//   -C USER_CMODULE, --cmodule USER_CMODULE
//                         load CMODULE
//   --toolchain {any,internal,external}
//                         CModule toolchain to use when compiling from source code
//   -c CODESHARE_URI, --codeshare CODESHARE_URI
//                         load CODESHARE_URI
//   -e CODE, --eval CODE  evaluate CODE
//   -q                    quiet mode (no prompt) and quit after -l and -e
//   -t TIMEOUT, --timeout TIMEOUT
//                         seconds to wait before terminating in quiet mode
//   --no-pause            automatically start main thread after startup
//   -o LOGFILE, --output LOGFILE