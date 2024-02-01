!function (t, e) {
    "function" == typeof define && define.amd ? define(function () {
        return e(t)
    }) : e(t)
}(this, function (t) {
    var e = function () {
        function e(t) {
            return null == t ? t + "" : W[Y.call(t)] || "object"
        }

        function n(t) {
            return "function" == e(t)
        }

        function r(t) {
            return null != t && t == t.window
        }

        function i(t) {
            return null != t && t.nodeType == t.DOCUMENT_NODE
        }

        function o(t) {
            return "object" == e(t)
        }

        function a(t) {
            return o(t) && !r(t) && Object.getPrototypeOf(t) == Object.prototype
        }

        function s(t) {
            var e = !!t && "length" in t && t.length, n = C.type(t);
            return "function" != n && !r(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function u(t) {
            return L.call(t, function (t) {
                return null != t
            })
        }

        function c(t) {
            return t.length > 0 ? C.fn.concat.apply([], t) : t
        }

        function l(t) {
            return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function f(t) {
            return t in k ? k[t] : k[t] = RegExp("(^|\\s)" + t + "(\\s|$)")
        }

        function h(t, e) {
            return "number" != typeof e || Z[l(t)] ? e : e + "px"
        }

        function p(t) {
            var e, n;
            return F[t] || (e = $.createElement(t), $.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), F[t] = n), F[t]
        }

        function d(t) {
            return "children" in t ? D.call(t.children) : C.map(t.childNodes, function (t) {
                return 1 == t.nodeType ? t : void 0
            })
        }

        function m(t, e) {
            var n, r = t ? t.length : 0;
            for (n = 0; r > n; n++) this[n] = t[n];
            this.length = r, this.selector = e || ""
        }

        function g(t, e, n) {
            for (w in e) n && (a(e[w]) || te(e[w])) ? (a(e[w]) && !a(t[w]) && (t[w] = {}), te(e[w]) && !te(t[w]) && (t[w] = []), g(t[w], e[w], n)) : e[w] !== j && (t[w] = e[w])
        }

        function v(t, e) {
            return null == e ? C(t) : C(t).filter(e)
        }

        function y(t, e, r, i) {
            return n(e) ? e.call(t, r, i) : e
        }

        function x(t, e, n) {
            null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
        }

        function b(t, e) {
            var n = t.className || "", r = n && n.baseVal !== j;
            return e === j ? r ? n.baseVal : n : void (r ? n.baseVal = e : t.className = e)
        }

        function E(t) {
            try {
                return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? C.parseJSON(t) : t) : t
            } catch (e) {
                return t
            }
        }

        function T(t, e) {
            e(t);
            for (var n = 0, r = t.childNodes.length; r > n; n++) T(t.childNodes[n], e)
        }

        var j, w, C, S, N, O, P = [], A = P.concat, L = P.filter, D = P.slice, $ = t.document, F = {}, k = {},
            Z = {"column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1},
            M = /^\s*<(\w+|!)[^>]*>/, z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, q = /^(?:body|html)$/i,
            _ = /([A-Z])/g, I = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            H = ["after", "prepend", "before", "append"], V = $.createElement("table"), B = $.createElement("tr"),
            X = {tr: $.createElement("tbody"), tbody: V, thead: V, tfoot: V, td: B, th: B, "*": $.createElement("div")},
            U = /complete|loaded|interactive/, J = /^[\w-]*$/, W = {}, Y = W.toString, G = {},
            K = $.createElement("div"), Q = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, te = Array.isArray || function (t) {
                return t instanceof Array
            };
        return G.matches = function (t, e) {
            if (!e || !t || 1 !== t.nodeType) return !1;
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
            if (n) return n.call(t, e);
            var r, i = t.parentNode, o = !i;
            return o && (i = K).appendChild(t), r = ~G.qsa(i, e).indexOf(t), o && K.removeChild(t), r
        }, N = function (t) {
            return t.replace(/-+(.)?/g, function (t, e) {
                return e ? e.toUpperCase() : ""
            })
        }, O = function (t) {
            return L.call(t, function (e, n) {
                return t.indexOf(e) == n
            })
        }, G.fragment = function (t, e, n) {
            var r, i, o;
            return z.test(t) && (r = C($.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(R, "<$1></$2>")), e === j && (e = M.test(t) && RegExp.$1), e in X || (e = "*"), o = X[e], o.innerHTML = "" + t, r = C.each(D.call(o.childNodes), function () {
                o.removeChild(this)
            })), a(n) && (i = C(r), C.each(n, function (t, e) {
                I.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
            })), r
        }, G.Z = function (t, e) {
            return new m(t, e)
        }, G.isZ = function (t) {
            return t instanceof G.Z
        }, G.init = function (t, e) {
            var r;
            if (!t) return G.Z();
            if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && M.test(t)) r = G.fragment(t, RegExp.$1, e), t = null; else {
                if (e !== j) return C(e).find(t);
                r = G.qsa($, t)
            } else {
                if (n(t)) return C($).ready(t);
                if (G.isZ(t)) return t;
                if (te(t)) r = u(t); else if (o(t)) r = [t], t = null; else if (M.test(t)) r = G.fragment(t.trim(), RegExp.$1, e), t = null; else {
                    if (e !== j) return C(e).find(t);
                    r = G.qsa($, t)
                }
            }
            return G.Z(r, t)
        }, C = function (t, e) {
            return G.init(t, e)
        }, C.extend = function (t) {
            var e, n = D.call(arguments, 1);
            return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
                g(t, n, e)
            }), t
        }, G.qsa = function (t, e) {
            var n, r = "#" == e[0], i = !r && "." == e[0], o = r || i ? e.slice(1) : e, a = J.test(o);
            return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : D.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
        }, C.contains = $.documentElement.contains ? function (t, e) {
            return t !== e && t.contains(e)
        } : function (t, e) {
            for (; e && (e = e.parentNode);) if (e === t) return !0;
            return !1
        }, C.type = e, C.isFunction = n, C.isWindow = r, C.isArray = te, C.isPlainObject = a, C.isEmptyObject = function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, C.isNumeric = function (t) {
            var e = +t, n = typeof t;
            return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
        }, C.inArray = function (t, e, n) {
            return P.indexOf.call(e, t, n)
        }, C.camelCase = N, C.trim = function (t) {
            return null == t ? "" : String.prototype.trim.call(t)
        }, C.uuid = 0, C.support = {}, C.expr = {}, C.noop = function () {
        }, C.map = function (t, e) {
            var n, r, i, o = [];
            if (s(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && o.push(n); else for (i in t) n = e(t[i], i), null != n && o.push(n);
            return c(o)
        }, C.each = function (t, e) {
            var n, r;
            if (s(t)) {
                for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
            } else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t;
            return t
        }, C.grep = function (t, e) {
            return L.call(t, e)
        }, t.JSON && (C.parseJSON = JSON.parse), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            W["[object " + e + "]"] = e.toLowerCase()
        }), C.fn = {
            constructor: G.Z,
            length: 0,
            forEach: P.forEach,
            reduce: P.reduce,
            push: P.push,
            sort: P.sort,
            splice: P.splice,
            indexOf: P.indexOf,
            concat: function () {
                var t, e, n = [];
                for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e;
                return A.apply(G.isZ(this) ? this.toArray() : this, n)
            },
            map: function (t) {
                return C(C.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function () {
                return C(D.apply(this, arguments))
            },
            ready: function (t) {
                return U.test($.readyState) && $.body ? t(C) : $.addEventListener("DOMContentLoaded", function () {
                    t(C)
                }, !1), this
            },
            get: function (t) {
                return t === j ? D.call(this) : this[0 > t ? t + this.length : t]
            },
            toArray: function () {
                return this.get()
            },
            size: function () {
                return this.length
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function (t) {
                return P.every.call(this, function (e, n) {
                    return t.call(e, n, e) !== !1
                }), this
            },
            filter: function (t) {
                return n(t) ? this.not(this.not(t)) : C(L.call(this, function (e) {
                    return G.matches(e, t)
                }))
            },
            add: function (t, e) {
                return C(O(this.concat(C(t, e))))
            },
            is: function (t) {
                return this.length > 0 && G.matches(this[0], t)
            },
            not: function (t) {
                var e = [];
                if (n(t) && t.call !== j) this.each(function (n) {
                    t.call(this, n) || e.push(this)
                }); else {
                    var r = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? D.call(t) : C(t);
                    this.forEach(function (t) {
                        r.indexOf(t) < 0 && e.push(t)
                    })
                }
                return C(e)
            },
            has: function (t) {
                return this.filter(function () {
                    return o(t) ? C.contains(this, t) : C(this).find(t).size()
                })
            },
            eq: function (t) {
                return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
            },
            first: function () {
                var t = this[0];
                return t && !o(t) ? t : C(t)
            },
            last: function () {
                var t = this[this.length - 1];
                return t && !o(t) ? t : C(t)
            },
            find: function (t) {
                var e, n = this;
                return e = t ? "object" == typeof t ? C(t).filter(function () {
                    var t = this;
                    return P.some.call(n, function (e) {
                        return C.contains(e, t)
                    })
                }) : 1 == this.length ? C(G.qsa(this[0], t)) : this.map(function () {
                    return G.qsa(this, t)
                }) : C()
            },
            closest: function (t, e) {
                var n = [], r = "object" == typeof t && C(t);
                return this.each(function (o, a) {
                    for (; a && !(r ? r.indexOf(a) >= 0 : G.matches(a, t));) a = a !== e && !i(a) && a.parentNode;
                    a && n.indexOf(a) < 0 && n.push(a)
                }), C(n)
            },
            parents: function (t) {
                for (var e = [], n = this; n.length > 0;) n = C.map(n, function (t) {
                    return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                });
                return v(e, t)
            },
            parent: function (t) {
                return v(O(this.pluck("parentNode")), t)
            },
            children: function (t) {
                return v(this.map(function () {
                    return d(this)
                }), t)
            },
            contents: function () {
                return this.map(function () {
                    return this.contentDocument || D.call(this.childNodes)
                })
            },
            siblings: function (t) {
                return v(this.map(function (t, e) {
                    return L.call(d(e.parentNode), function (t) {
                        return t !== e
                    })
                }), t)
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            },
            pluck: function (t) {
                return C.map(this, function (e) {
                    return e[t]
                })
            },
            show: function () {
                return this.each(function () {
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
                })
            },
            replaceWith: function (t) {
                return this.before(t).remove()
            },
            wrap: function (t) {
                var e = n(t);
                if (this[0] && !e) var r = C(t).get(0), i = r.parentNode || this.length > 1;
                return this.each(function (n) {
                    C(this).wrapAll(e ? t.call(this, n) : i ? r.cloneNode(!0) : r)
                })
            },
            wrapAll: function (t) {
                if (this[0]) {
                    C(this[0]).before(t = C(t));
                    for (var e; (e = t.children()).length;) t = e.first();
                    C(t).append(this)
                }
                return this
            },
            wrapInner: function (t) {
                var e = n(t);
                return this.each(function (n) {
                    var r = C(this), i = r.contents(), o = e ? t.call(this, n) : t;
                    i.length ? i.wrapAll(o) : r.append(o)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    C(this).replaceWith(C(this).children())
                }), this
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            },
            hide: function () {
                return this.css("display", "none")
            },
            toggle: function (t) {
                return this.each(function () {
                    var e = C(this);
                    (t === j ? "none" == e.css("display") : t) ? e.show() : e.hide()
                })
            },
            prev: function (t) {
                return C(this.pluck("previousElementSibling")).filter(t || "*")
            },
            next: function (t) {
                return C(this.pluck("nextElementSibling")).filter(t || "*")
            },
            html: function (t) {
                return 0 in arguments ? this.each(function (e) {
                    var n = this.innerHTML;
                    C(this).empty().append(y(this, t, e, n))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function (t) {
                return 0 in arguments ? this.each(function (e) {
                    var n = y(this, t, e, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this.pluck("textContent").join("") : null
            },
            attr: function (t, e) {
                var n;
                return "string" != typeof t || 1 in arguments ? this.each(function (n) {
                    if (1 === this.nodeType) if (o(t)) for (w in t) x(this, w, t[w]); else x(this, t, y(this, e, n, this.getAttribute(t)))
                }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(t)) ? n : j
            },
            removeAttr: function (t) {
                return this.each(function () {
                    1 === this.nodeType && t.split(" ").forEach(function (t) {
                        x(this, t)
                    }, this)
                })
            },
            prop: function (t, e) {
                return t = Q[t] || t, 1 in arguments ? this.each(function (n) {
                    this[t] = y(this, e, n, this[t])
                }) : this[0] && this[0][t]
            },
            removeProp: function (t) {
                return t = Q[t] || t, this.each(function () {
                    delete this[t]
                })
            },
            data: function (t, e) {
                var n = "data-" + t.replace(_, "-$1").toLowerCase(),
                    r = 1 in arguments ? this.attr(n, e) : this.attr(n);
                return null !== r ? E(r) : j
            },
            val: function (t) {
                return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
                    this.value = y(this, t, e, this.value)
                })) : this[0] && (this[0].multiple ? C(this[0]).find("option").filter(function () {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function (e) {
                if (e) return this.each(function (t) {
                    var n = C(this), r = y(this, e, t, n.offset()), i = n.offsetParent().offset(),
                        o = {top: r.top - i.top, left: r.left - i.left};
                    "static" == n.css("position") && (o.position = "relative"), n.css(o)
                });
                if (!this.length) return null;
                if ($.documentElement !== this[0] && !C.contains($.documentElement, this[0])) return {top: 0, left: 0};
                var n = this[0].getBoundingClientRect();
                return {
                    left: n.left + t.pageXOffset,
                    top: n.top + t.pageYOffset,
                    width: Math.round(n.width),
                    height: Math.round(n.height)
                }
            },
            css: function (t, n) {
                if (arguments.length < 2) {
                    var r = this[0];
                    if ("string" == typeof t) {
                        if (!r) return;
                        return r.style[N(t)] || getComputedStyle(r, "").getPropertyValue(t)
                    }
                    if (te(t)) {
                        if (!r) return;
                        var i = {}, o = getComputedStyle(r, "");
                        return C.each(t, function (t, e) {
                            i[e] = r.style[N(e)] || o.getPropertyValue(e)
                        }), i
                    }
                }
                var a = "";
                if ("string" == e(t)) n || 0 === n ? a = l(t) + ":" + h(t, n) : this.each(function () {
                    this.style.removeProperty(l(t))
                }); else for (w in t) t[w] || 0 === t[w] ? a += l(w) + ":" + h(w, t[w]) + ";" : this.each(function () {
                    this.style.removeProperty(l(w))
                });
                return this.each(function () {
                    this.style.cssText += ";" + a
                })
            },
            index: function (t) {
                return t ? this.indexOf(C(t)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function (t) {
                return t ? P.some.call(this, function (t) {
                    return this.test(b(t))
                }, f(t)) : !1
            },
            addClass: function (t) {
                return t ? this.each(function (e) {
                    if ("className" in this) {
                        S = [];
                        var n = b(this), r = y(this, t, e, n);
                        r.split(/\s+/g).forEach(function (t) {
                            C(this).hasClass(t) || S.push(t)
                        }, this), S.length && b(this, n + (n ? " " : "") + S.join(" "))
                    }
                }) : this
            },
            removeClass: function (t) {
                return this.each(function (e) {
                    if ("className" in this) {
                        if (t === j) return b(this, "");
                        S = b(this), y(this, t, e, S).split(/\s+/g).forEach(function (t) {
                            S = S.replace(f(t), " ")
                        }), b(this, S.trim())
                    }
                })
            },
            toggleClass: function (t, e) {
                return t ? this.each(function (n) {
                    var r = C(this), i = y(this, t, n, b(this));
                    i.split(/\s+/g).forEach(function (t) {
                        (e === j ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
                    })
                }) : this
            },
            scrollTop: function (t) {
                if (this.length) {
                    var e = "scrollTop" in this[0];
                    return t === j ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                        this.scrollTop = t
                    } : function () {
                        this.scrollTo(this.scrollX, t)
                    })
                }
            },
            scrollLeft: function (t) {
                if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return t === j ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
                        this.scrollLeft = t
                    } : function () {
                        this.scrollTo(t, this.scrollY)
                    })
                }
            },
            position: function () {
                if (this.length) {
                    var t = this[0], e = this.offsetParent(), n = this.offset(),
                        r = q.test(e[0].nodeName) ? {top: 0, left: 0} : e.offset();
                    return n.top -= parseFloat(C(t).css("margin-top")) || 0, n.left -= parseFloat(C(t).css("margin-left")) || 0, r.top += parseFloat(C(e[0]).css("border-top-width")) || 0, r.left += parseFloat(C(e[0]).css("border-left-width")) || 0, {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || $.body; t && !q.test(t.nodeName) && "static" == C(t).css("position");) t = t.offsetParent;
                    return t
                })
            }
        }, C.fn.detach = C.fn.remove, ["width", "height"].forEach(function (t) {
            var e = t.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
            C.fn[t] = function (n) {
                var o, a = this[0];
                return n === j ? r(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
                    a = C(this), a.css(t, y(this, n, e, a[t]()))
                })
            }
        }), H.forEach(function (n, r) {
            var i = r % 2;
            C.fn[n] = function () {
                var n, o, a = C.map(arguments, function (t) {
                    var r = [];
                    return n = e(t), "array" == n ? (t.forEach(function (t) {
                        return t.nodeType !== j ? r.push(t) : C.zepto.isZ(t) ? r = r.concat(t.get()) : void (r = r.concat(G.fragment(t)))
                    }), r) : "object" == n || null == t ? t : G.fragment(t)
                }), s = this.length > 1;
                return a.length < 1 ? this : this.each(function (e, n) {
                    o = i ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
                    var u = C.contains($.documentElement, o);
                    a.forEach(function (e) {
                        if (s) e = e.cloneNode(!0); else if (!o) return C(e).remove();
                        o.insertBefore(e, n), u && T(e, function (e) {
                            if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
                                n.eval.call(n, e.innerHTML)
                            }
                        })
                    })
                })
            }, C.fn[i ? n + "To" : "insert" + (r ? "Before" : "After")] = function (t) {
                return C(t)[n](this), this
            }
        }), G.Z.prototype = m.prototype = C.fn, G.uniq = O, G.deserializeValue = E, C.zepto = G, C
    }();
    return t.Zepto = e, void 0 === t.$ && (t.$ = e), function (e) {
        function n(t) {
            return t._zid || (t._zid = p++)
        }

        function r(t, e, r, a) {
            if (e = i(e), e.ns) var s = o(e.ns);
            return (v[n(t)] || []).filter(function (t) {
                return !(!t || e.e && t.e != e.e || e.ns && !s.test(t.ns) || r && n(t.fn) !== n(r) || a && t.sel != a)
            })
        }

        function i(t) {
            var e = ("" + t).split(".");
            return {e: e[0], ns: e.slice(1).sort().join(" ")}
        }

        function o(t) {
            return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function a(t, e) {
            return t.del && !x && t.e in b || !!e
        }

        function s(t) {
            return E[t] || x && b[t] || t
        }

        function u(t, r, o, u, c, f, p) {
            var d = n(t), m = v[d] || (v[d] = []);
            r.split(/\s/).forEach(function (n) {
                if ("ready" == n) return e(document).ready(o);
                var r = i(n);
                r.fn = o, r.sel = c, r.e in E && (o = function (t) {
                    var n = t.relatedTarget;
                    return !n || n !== this && !e.contains(this, n) ? r.fn.apply(this, arguments) : void 0
                }), r.del = f;
                var d = f || o;
                r.proxy = function (e) {
                    if (e = l(e), !e.isImmediatePropagationStopped()) {
                        e.data = u;
                        var n = d.apply(t, e._args == h ? [e] : [e].concat(e._args));
                        return n === !1 && (e.preventDefault(), e.stopPropagation()), n
                    }
                }, r.i = m.length, m.push(r), "addEventListener" in t && t.addEventListener(s(r.e), r.proxy, a(r, p))
            })
        }

        function c(t, e, i, o, u) {
            var c = n(t);
            (e || "").split(/\s/).forEach(function (e) {
                r(t, e, i, o).forEach(function (e) {
                    delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, a(e, u))
                })
            })
        }

        function l(t, n) {
            return (n || !t.isDefaultPrevented) && (n || (n = t), e.each(C, function (e, r) {
                var i = n[e];
                t[e] = function () {
                    return this[r] = T, i && i.apply(n, arguments)
                }, t[r] = j
            }), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = T)), t
        }

        function f(t) {
            var e, n = {originalEvent: t};
            for (e in t) w.test(e) || t[e] === h || (n[e] = t[e]);
            return l(n, t)
        }

        var h, p = 1, d = Array.prototype.slice, m = e.isFunction, g = function (t) {
                return "string" == typeof t
            }, v = {}, y = {}, x = "onfocusin" in t, b = {focus: "focusin", blur: "focusout"},
            E = {mouseenter: "mouseover", mouseleave: "mouseout"};
        y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", e.event = {
            add: u,
            remove: c
        }, e.proxy = function (t, r) {
            var i = 2 in arguments && d.call(arguments, 2);
            if (m(t)) {
                var o = function () {
                    return t.apply(r, i ? i.concat(d.call(arguments)) : arguments)
                };
                return o._zid = n(t), o
            }
            if (g(r)) return i ? (i.unshift(t[r], t), e.proxy.apply(null, i)) : e.proxy(t[r], t);
            throw new TypeError("expected function")
        }, e.fn.bind = function (t, e, n) {
            return this.on(t, e, n)
        }, e.fn.unbind = function (t, e) {
            return this.off(t, e)
        }, e.fn.one = function (t, e, n, r) {
            return this.on(t, e, n, r, 1)
        };
        var T = function () {
            return !0
        }, j = function () {
            return !1
        }, w = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, C = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        e.fn.delegate = function (t, e, n) {
            return this.on(e, t, n)
        }, e.fn.undelegate = function (t, e, n) {
            return this.off(e, t, n)
        }, e.fn.live = function (t, n) {
            return e(document.body).delegate(this.selector, t, n), this
        }, e.fn.die = function (t, n) {
            return e(document.body).undelegate(this.selector, t, n), this
        }, e.fn.on = function (t, n, r, i, o) {
            var a, s, l = this;
            return t && !g(t) ? (e.each(t, function (t, e) {
                l.on(t, n, r, e, o)
            }), l) : (g(n) || m(i) || i === !1 || (i = r, r = n, n = h), (i === h || r === !1) && (i = r, r = h), i === !1 && (i = j), l.each(function (l, h) {
                o && (a = function (t) {
                    return c(h, t.type, i), i.apply(this, arguments)
                }), n && (s = function (t) {
                    var r, o = e(t.target).closest(n, h).get(0);
                    return o && o !== h ? (r = e.extend(f(t), {
                        currentTarget: o,
                        liveFired: h
                    }), (a || i).apply(o, [r].concat(d.call(arguments, 1)))) : void 0
                }), u(h, t, i, r, n, s || a)
            }))
        }, e.fn.off = function (t, n, r) {
            var i = this;
            return t && !g(t) ? (e.each(t, function (t, e) {
                i.off(t, n, e)
            }), i) : (g(n) || m(r) || r === !1 || (r = n, n = h), r === !1 && (r = j), i.each(function () {
                c(this, t, r, n)
            }))
        }, e.fn.trigger = function (t, n) {
            return t = g(t) || e.isPlainObject(t) ? e.Event(t) : l(t), t._args = n, this.each(function () {
                t.type in b && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
            })
        }, e.fn.triggerHandler = function (t, n) {
            var i, o;
            return this.each(function (a, s) {
                i = f(g(t) ? e.Event(t) : t), i._args = n, i.target = s, e.each(r(s, t.type || t), function (t, e) {
                    return o = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
                })
            }), o
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
            e.fn[t] = function (e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t)
            }
        }), e.Event = function (t, e) {
            g(t) || (e = t, t = e.type);
            var n = document.createEvent(y[t] || "Events"), r = !0;
            if (e) for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
            return n.initEvent(t, r, !0), l(n)
        }
    }(e), function (e) {
        function n(t, n, r) {
            var i = e.Event(n);
            return e(t).trigger(i, r), !i.isDefaultPrevented()
        }

        function r(t, e, r, i) {
            return t.global ? n(e || b, r, i) : void 0
        }

        function i(t) {
            t.global && 0 === e.active++ && r(t, null, "ajaxStart")
        }

        function o(t) {
            t.global && !--e.active && r(t, null, "ajaxStop")
        }

        function a(t, e) {
            var n = e.context;
            return e.beforeSend.call(n, t, e) === !1 || r(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void r(e, n, "ajaxSend", [t, e])
        }

        function s(t, e, n, i) {
            var o = n.context, a = "success";
            n.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), r(n, o, "ajaxSuccess", [e, n, t]), c(a, e, n)
        }

        function u(t, e, n, i, o) {
            var a = i.context;
            i.error.call(a, n, e, t), o && o.rejectWith(a, [n, e, t]), r(i, a, "ajaxError", [n, i, t || e]), c(e, n, i)
        }

        function c(t, e, n) {
            var i = n.context;
            n.complete.call(i, e, t), r(n, i, "ajaxComplete", [e, n]), o(n)
        }

        function l(t, e, n) {
            if (n.dataFilter == f) return t;
            var r = n.context;
            return n.dataFilter.call(r, t, e)
        }

        function f() {
        }

        function h(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == C ? "html" : t == w ? "json" : T.test(t) ? "script" : j.test(t) && "xml") || "text"
        }

        function p(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        function d(t) {
            t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = p(t.url, t.data), t.data = void 0)
        }

        function m(t, n, r, i) {
            return e.isFunction(n) && (i = r, r = n, n = void 0), e.isFunction(r) || (i = r, r = void 0), {
                url: t,
                data: n,
                success: r,
                dataType: i
            }
        }

        function g(t, n, r, i) {
            var o, a = e.isArray(n), s = e.isPlainObject(n);
            e.each(n, function (n, u) {
                o = e.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? g(t, u, r, n) : t.add(n, u)
            })
        }

        var v, y, x = +new Date, b = t.document, E = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            T = /^(?:text|application)\/javascript/i, j = /^(?:text|application)\/xml/i, w = "application/json",
            C = "text/html", S = /^\s*$/, N = b.createElement("a");
        N.href = t.location.href, e.active = 0, e.ajaxJSONP = function (n, r) {
            if (!("type" in n)) return e.ajax(n);
            var i, o, c = n.jsonpCallback, l = (e.isFunction(c) ? c() : c) || "Zepto" + x++,
                f = b.createElement("script"), h = t[l], p = function (t) {
                    e(f).triggerHandler("error", t || "abort")
                }, d = {abort: p};
            return r && r.promise(d), e(f).on("load error", function (a, c) {
                clearTimeout(o), e(f).off().remove(), "error" != a.type && i ? s(i[0], d, n, r) : u(null, c || "error", d, n, r), t[l] = h, i && e.isFunction(h) && h(i[0]), h = i = void 0
            }), a(d, n) === !1 ? (p("abort"), d) : (t[l] = function () {
                i = arguments
            }, f.src = n.url.replace(/\?(.+)=\?/, "?$1=" + l), b.head.appendChild(f), n.timeout > 0 && (o = setTimeout(function () {
                p("timeout")
            }, n.timeout)), d)
        }, e.ajaxSettings = {
            type: "GET",
            beforeSend: f,
            success: f,
            error: f,
            complete: f,
            context: null,
            global: !0,
            xhr: function () {
                return new t.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: w,
                xml: "application/xml, text/xml",
                html: C,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0,
            dataFilter: f
        }, e.ajax = function (n) {
            var r, o, c = e.extend({}, n || {}), m = e.Deferred && e.Deferred();
            for (v in e.ajaxSettings) void 0 === c[v] && (c[v] = e.ajaxSettings[v]);
            i(c), c.crossDomain || (r = b.createElement("a"), r.href = c.url, r.href = r.href, c.crossDomain = N.protocol + "//" + N.host != r.protocol + "//" + r.host), c.url || (c.url = "" + t.location), (o = c.url.indexOf("#")) > -1 && (c.url = c.url.slice(0, o)), d(c);
            var g = c.dataType, x = /\?.+=\?/.test(c.url);
            if (x && (g = "jsonp"), c.cache !== !1 && (n && n.cache === !0 || "script" != g && "jsonp" != g) || (c.url = p(c.url, "_=" + Date.now())), "jsonp" == g) return x || (c.url = p(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(c, m);
            var E, T = c.accepts[g], j = {}, w = function (t, e) {
                j[t.toLowerCase()] = [t, e]
            }, C = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : t.location.protocol, O = c.xhr(), P = O.setRequestHeader;
            if (m && m.promise(O), c.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", T || "*/*"), (T = c.mimeType || T) && (T.indexOf(",") > -1 && (T = T.split(",", 2)[0]), O.overrideMimeType && O.overrideMimeType(T)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && w("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers) for (y in c.headers) w(y, c.headers[y]);
            if (O.setRequestHeader = w, O.onreadystatechange = function () {
                if (4 == O.readyState) {
                    O.onreadystatechange = f, clearTimeout(E);
                    var t, n = !1;
                    if (O.status >= 200 && O.status < 300 || 304 == O.status || 0 == O.status && "file:" == C) {
                        if (g = g || h(c.mimeType || O.getResponseHeader("content-type")), "arraybuffer" == O.responseType || "blob" == O.responseType) t = O.response; else {
                            t = O.responseText;
                            try {
                                t = l(t, g, c), "script" == g ? (1, eval)(t) : "xml" == g ? t = O.responseXML : "json" == g && (t = S.test(t) ? null : e.parseJSON(t))
                            } catch (r) {
                                n = r
                            }
                            if (n) return u(n, "parsererror", O, c, m)
                        }
                        s(t, O, c, m)
                    } else u(O.statusText || null, O.status ? "error" : "abort", O, c, m)
                }
            }, a(O, c) === !1) return O.abort(), u(null, "abort", O, c, m), O;
            var A = "async" in c ? c.async : !0;
            if (O.open(c.type, c.url, A, c.username, c.password), c.xhrFields) for (y in c.xhrFields) O[y] = c.xhrFields[y];
            for (y in j) P.apply(O, j[y]);
            return c.timeout > 0 && (E = setTimeout(function () {
                O.onreadystatechange = f, O.abort(), u(null, "timeout", O, c, m)
            }, c.timeout)), O.send(c.data ? c.data : null), O
        }, e.get = function () {
            return e.ajax(m.apply(null, arguments))
        }, e.post = function () {
            var t = m.apply(null, arguments);
            return t.type = "POST", e.ajax(t)
        }, e.getJSON = function () {
            var t = m.apply(null, arguments);
            return t.dataType = "json", e.ajax(t)
        }, e.fn.load = function (t, n, r) {
            if (!this.length) return this;
            var i, o = this, a = t.split(/\s/), s = m(t, n, r), u = s.success;
            return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function (t) {
                o.html(i ? e("<div>").html(t.replace(E, "")).find(i) : t), u && u.apply(o, arguments)
            }, e.ajax(s), this
        };
        var O = encodeURIComponent;
        e.param = function (t, n) {
            var r = [];
            return r.add = function (t, n) {
                e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(O(t) + "=" + O(n))
            }, g(r, t, n), r.join("&").replace(/%20/g, "+")
        }
    }(e), function (t) {
        t.fn.serializeArray = function () {
            var e, n, r = [], i = function (t) {
                return t.forEach ? t.forEach(i) : void r.push({name: e, value: t})
            };
            return this[0] && t.each(this[0].elements, function (r, o) {
                n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val())
            }), r
        }, t.fn.serialize = function () {
            var t = [];
            return this.serializeArray().forEach(function (e) {
                t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
            }), t.join("&")
        }, t.fn.submit = function (e) {
            if (0 in arguments) this.bind("submit", e); else if (this.length) {
                var n = t.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(e), function () {
        try {
            getComputedStyle(void 0)
        } catch (e) {
            var n = getComputedStyle;
            t.getComputedStyle = function (t, e) {
                try {
                    return n(t, e)
                } catch (r) {
                    return null
                }
            }
        }
    }(), e
}), function (t, e) {
    function n(t) {
        return t.replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function r(t) {
        return i ? i + t : t.toLowerCase()
    }

    var i, o, a, s, u, c, l, f, h, p, d = "", m = {Webkit: "webkit", Moz: "", O: "o"},
        g = document.createElement("div"),
        v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, y = {};
    g.style.transform === e && t.each(m, function (t, n) {
        return g.style[t + "TransitionProperty"] !== e ? (d = "-" + t.toLowerCase() + "-", i = n, !1) : e
    }), o = d + "transform", y[a = d + "transition-property"] = y[s = d + "transition-duration"] = y[c = d + "transition-delay"] = y[u = d + "transition-timing-function"] = y[l = d + "animation-name"] = y[f = d + "animation-duration"] = y[p = d + "animation-delay"] = y[h = d + "animation-timing-function"] = "", t.fx = {
        off: i === e && g.style.transitionProperty === e,
        speeds: {_default: 400, fast: 200, slow: 600},
        cssPrefix: d,
        transitionEnd: r("TransitionEnd"),
        animationEnd: r("AnimationEnd")
    }, t.fn.animate = function (n, r, i, o, a) {
        return t.isFunction(r) && (o = r, i = e, r = e), t.isFunction(i) && (o = i, i = e), t.isPlainObject(r) && (i = r.easing, o = r.complete, a = r.delay, r = r.duration), r && (r = ("number" == typeof r ? r : t.fx.speeds[r] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, r, i, o, a)
    }, t.fn.anim = function (r, i, d, m, g) {
        var x, b, E, T = {}, j = "", w = this, C = t.fx.transitionEnd, S = !1;
        if (i === e && (i = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (i = 0), "string" == typeof r) T[l] = r, T[f] = i + "s", T[p] = g + "s", T[h] = d || "linear", C = t.fx.animationEnd; else {
            b = [];
            for (x in r) v.test(x) ? j += x + "(" + r[x] + ") " : (T[x] = r[x], b.push(n(x)));
            j && (T[o] = j, b.push(o)), i > 0 && "object" == typeof r && (T[a] = b.join(", "), T[s] = i + "s", T[c] = g + "s", T[u] = d || "linear")
        }
        return E = function (n) {
            if (e !== n) {
                if (n.target !== n.currentTarget) return;
                t(n.target).unbind(C, E)
            } else t(this).unbind(C, E);
            S = !0, t(this).css(y), m && m.call(this)
        }, i > 0 && (this.bind(C, E), setTimeout(function () {
            S || E.call(w)
        }, 1e3 * (i + g) + 25)), this.size() && this.get(0).clientLeft, this.css(T), i > 0 || setTimeout(function () {
            w.each(function () {
                E.call(this)
            })
        }, 0), this
    }, g = null
}(Zepto), function (t, e) {
    function n(n, r, i, o, a) {
        "function" != typeof r || a || (a = r, r = e);
        var s = {opacity: i};
        return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, r, null, a)
    }

    function r(e, r, i, o) {
        return n(e, r, 0, i, function () {
            a.call(t(this)), o && o.call(this)
        })
    }

    var i = window.document, o = (i.documentElement, t.fn.show), a = t.fn.hide, s = t.fn.toggle;
    t.fn.show = function (t, r) {
        return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "", r)
    }, t.fn.hide = function (t, n) {
        return t === e ? a.call(this) : r(this, t, "0,0", n)
    }, t.fn.toggle = function (n, r) {
        return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function () {
            var e = t(this);
            e["none" == e.css("display") ? "show" : "hide"](n, r)
        })
    }, t.fn.fadeTo = function (t, e, r) {
        return n(this, t, e, null, r)
    }, t.fn.fadeIn = function (t, e) {
        var n = this.css("opacity");
        return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
    }, t.fn.fadeOut = function (t, e) {
        return r(this, t, null, e)
    }, t.fn.fadeToggle = function (e, n) {
        return this.each(function () {
            var r = t(this);
            r[0 == r.css("opacity") || "none" == r.css("display") ? "fadeIn" : "fadeOut"](e, n)
        })
    }
}(Zepto);
(function (d) {
    var e = {}, g = d.fn.data, b = d.camelCase, c = d.expando = "Zepto" + (+new Date()), i = [];

    function f(m, k) {
        var n = m[c], j = n && e[n];
        if (k === undefined) {
            return j || h(m)
        } else {
            if (j) {
                if (k in j) {
                    return j[k]
                }
                var l = b(k);
                if (l in j) {
                    return j[l]
                }
            }
            return g.call(d(m), k)
        }
    }

    function h(l, k, m) {
        var n = l[c] || (l[c] = ++d.uuid), j = e[n] || (e[n] = a(l));
        if (k !== undefined) {
            j[b(k)] = m
        }
        return j
    }

    function a(k) {
        var j = {};
        d.each(k.attributes || i, function (m, l) {
            if (l.name.indexOf("data-") == 0) {
                j[b(l.name.replace("data-", ""))] = d.zepto.deserializeValue(l.value)
            }
        });
        return j
    }

    d.fn.data = function (j, k) {
        return k === undefined ? d.isPlainObject(j) ? this.each(function (l, m) {
            d.each(j, function (n, o) {
                h(m, n, o)
            })
        }) : (0 in this ? f(this[0], j) : undefined) : this.each(function () {
            h(this, j, k)
        })
    };
    d.data = function (k, j, l) {
        return d(k).data(j, l)
    };
    d.hasData = function (k) {
        var l = k[c], j = l && e[l];
        return j ? !d.isEmptyObject(j) : false
    };
    d.fn.removeData = function (j) {
        if (typeof j == "string") {
            j = j.split(/\s+/)
        }
        return this.each(function () {
            var l = this[c], k = l && e[l];
            if (k) {
                d.each(j || k, function (m) {
                    delete k[j ? b(this) : m]
                })
            }
        })
    };
    ["remove", "empty"].forEach(function (j) {
        var k = d.fn[j];
        d.fn[j] = function () {
            var l = this.find("*");
            if (j === "remove") {
                l = l.add(this)
            }
            l.removeData();
            return k.call(this)
        }
    })
})(Zepto);
/*selector*/
!function (t) {
    function n(n) {
        return n = t(n), !(!n.width() && !n.height()) && "none" !== n.css("display")
    }

    function e(t, n) {
        t = t.replace(/=#\]/g, '="#"]');
        var e, r, i = s.exec(t);
        if (i && i[2] in o && (e = o[i[2]], r = i[3], t = i[1], r)) {
            var u = Number(r);
            r = isNaN(u) ? r.replace(/^["']|["']$/g, "") : u
        }
        return n(t, e, r)
    }

    var r = t.zepto, i = r.qsa, u = r.matches, o = t.expr[":"] = {
        visible: function () {
            return n(this) ? this : void 0
        }, hidden: function () {
            return n(this) ? void 0 : this
        }, selected: function () {
            return this.selected ? this : void 0
        }, checked: function () {
            return this.checked ? this : void 0
        }, parent: function () {
            return this.parentNode
        }, first: function (t) {
            return 0 === t ? this : void 0
        }, last: function (t, n) {
            return t === n.length - 1 ? this : void 0
        }, eq: function (t, n, e) {
            return t === e ? this : void 0
        }, contains: function (n, e, r) {
            return t(this).text().indexOf(r) > -1 ? this : void 0
        }, has: function (t, n, e) {
            return r.qsa(this, e).length ? this : void 0
        }
    }, s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), c = /^\s*>/, a = "Zepto" + +new Date;
    r.qsa = function (n, u) {
        return e(u, function (e, o, s) {
            try {
                var h;
                !e && o ? e = "*" : c.test(e) && (h = t(n).addClass(a), e = "." + a + " " + e);
                var f = i(n, e)
            } catch (d) {
                throw console.error("error performing selector: %o", u), d
            } finally {
                h && h.removeClass(a)
            }
            return o ? r.uniq(t.map(f, function (t, n) {
                return o.call(t, n, f, s)
            })) : f
        })
    }, r.matches = function (t, n) {
        return e(n, function (n, e, r) {
            return !(n && !u(t, n) || e && e.call(t, null, r) !== t)
        })
    }
}(Zepto);
/*手势*/
!function (t) {
    function e(t) {
        return "tagName" in t ? t : t.parentNode
    }

    function n(t, e, n, i) {
        var o = Math.abs(t - e), r = Math.abs(n - i);
        return o >= r ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
    }

    function i() {
        d = null, u.last && (u.el.trigger("longTap"), u = {})
    }

    function o() {
        d && clearTimeout(d), d = null
    }

    function r() {
        a && clearTimeout(a), s && clearTimeout(s), c && clearTimeout(c), d && clearTimeout(d), a = s = c = d = null, u = {}
    }

    var a, s, c, d, u = {}, l = 750;
    t(document).ready(function () {
        var f, h;
        t(document.body).bind("touchstart", function (n) {
            f = Date.now(), h = f - (u.last || f), u.el = t(e(n.touches[0].target)), a && clearTimeout(a), u.x1 = n.touches[0].pageX, u.y1 = n.touches[0].pageY, h > 0 && 250 >= h && (u.isDoubleTap = !0), u.last = f, d = setTimeout(i, l)
        }).bind("touchmove", function (t) {
            o(), u.x2 = t.touches[0].pageX, u.y2 = t.touches[0].pageY, Math.abs(u.x1 - u.x2) > 10 && t.preventDefault()
        }).bind("touchend", function () {
            o(), u.x2 && Math.abs(u.x1 - u.x2) > 30 || u.y2 && Math.abs(u.y1 - u.y2) > 30 ? c = setTimeout(function () {
                u.el.trigger("swipe"), u.el.trigger("swipe" + n(u.x1, u.x2, u.y1, u.y2)), u = {}
            }, 0) : "last" in u && (s = setTimeout(function () {
                var e = t.Event("tap");
                e.cancelTouch = r, u.el.trigger(e), u.isDoubleTap ? (u.el.trigger("doubleTap"), u = {}) : a = setTimeout(function () {
                    a = null, u.el.trigger("singleTap"), u = {}
                }, 250)
            }, 0))
        }).bind("touchcancel", r), t(window).bind("scroll", r)
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
        t.fn[e] = function (t) {
            return this.bind(e, t)
        }
    })
}(Zepto);
//copy
!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Clipboard = e()
    }
}(function () {
    var e, t, n;
    return function e(t, n, i) {
        function o(a, c) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!c && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                }
                var u = n[a] = {exports: {}};
                t[a][0].call(u.exports, function (e) {
                    var n = t[a][1][e];
                    return o(n ? n : e)
                }, u, u.exports, e, t, n, i)
            }
            return n[a].exports
        }

        for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
        return o
    }({
        1: [function (e, t, n) {
            function i(e, t) {
                for (; e && e.nodeType !== o;) {
                    if (e.matches(t)) return e;
                    e = e.parentNode
                }
            }

            var o = 9;
            if (Element && !Element.prototype.matches) {
                var r = Element.prototype;
                r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
            }
            t.exports = i
        }, {}], 2: [function (e, t, n) {
            function i(e, t, n, i, r) {
                var a = o.apply(this, arguments);
                return e.addEventListener(n, a, r), {
                    destroy: function () {
                        e.removeEventListener(n, a, r)
                    }
                }
            }

            function o(e, t, n, i) {
                return function (n) {
                    n.delegateTarget = r(n.target, t), n.delegateTarget && i.call(e, n)
                }
            }

            var r = e("./closest");
            t.exports = i
        }, {"./closest": 1}], 3: [function (e, t, n) {
            n.node = function (e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function (e) {
                var t = Object.prototype.toString.call(e);
                return "[object Function]" === t
            }
        }, {}], 4: [function (e, t, n) {
            function i(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!c.string(t)) throw new TypeError("Second argument must be a String");
                if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
                if (c.node(e)) return o(e, t, n);
                if (c.nodeList(e)) return r(e, t, n);
                if (c.string(e)) return a(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function o(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function () {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function r(e, t, n) {
                return Array.prototype.forEach.call(e, function (e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(e, function (e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function a(e, t, n) {
                return l(document.body, e, t, n)
            }

            var c = e("./is"), l = e("delegate");
            t.exports = i
        }, {"./is": 3, delegate: 2}], 5: [function (e, t, n) {
            function i(e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value; else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var n = window.getSelection(), i = document.createRange();
                    i.selectNodeContents(e), n.removeAllRanges(), n.addRange(i), t = n.toString()
                }
                return t
            }

            t.exports = i
        }, {}], 6: [function (e, t, n) {
            function i() {
            }

            i.prototype = {
                on: function (e, t, n) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({fn: t, ctx: n}), this
                }, once: function (e, t, n) {
                    function i() {
                        o.off(e, i), t.apply(n, arguments)
                    }

                    var o = this;
                    return i._ = t, this.on(e, i, n)
                }, emit: function (e) {
                    var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0,
                        o = n.length;
                    for (i; i < o; i++) n[i].fn.apply(n[i].ctx, t);
                    return this
                }, off: function (e, t) {
                    var n = this.e || (this.e = {}), i = n[e], o = [];
                    if (i && t) for (var r = 0, a = i.length; r < a; r++) i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
                    return o.length ? n[e] = o : delete n[e], this
                }
            }, t.exports = i
        }, {}], 7: [function (t, n, i) {
            !function (o, r) {
                if ("function" == typeof e && e.amd) e(["module", "select"], r); else if ("undefined" != typeof i) r(n, t("select")); else {
                    var a = {exports: {}};
                    r(a, o.select), o.clipboardAction = a.exports
                }
            }(this, function (e, t) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var o = n(t), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(), c = function () {
                    function e(t) {
                        i(this, e), this.resolveOptions(t), this.initSelection()
                    }

                    return a(e, [{
                        key: "resolveOptions", value: function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = t.action, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection", value: function e() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake", value: function e() {
                            var t = this, n = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function () {
                                return t.removeFake()
                            }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
                            var i = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.addEventListener("focus", window.scrollTo(0, i)), this.fakeElem.style.top = i + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake", value: function e() {
                            this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget", value: function e() {
                            this.selectedText = (0, o.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText", value: function e() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult", value: function e(t) {
                            this.emitter.emit(t ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection", value: function e() {
                            this.target && this.target.blur(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy", value: function e() {
                            this.removeFake()
                        }
                    }, {
                        key: "action", set: function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function e() {
                            return this._action
                        }
                    }, {
                        key: "target", set: function e(t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== ("undefined" == typeof t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = t
                            }
                        }, get: function e() {
                            return this._target
                        }
                    }]), e
                }();
                e.exports = c
            })
        }, {select: 5}], 8: [function (t, n, i) {
            !function (o, r) {
                if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r); else if ("undefined" != typeof i) r(n, t("./clipboard-action"), t("tiny-emitter"), t("good-listener")); else {
                    var a = {exports: {}};
                    r(a, o.clipboardAction, o.tinyEmitter, o.goodListener), o.clipboard = a.exports
                }
            }(this, function (e, t, n, i) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function c(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function l(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }

                var s = o(t), u = o(n), f = o(i), d = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(), h = function (e) {
                    function t(e, n) {
                        r(this, t);
                        var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return i.resolveOptions(n), i.listenClick(e), i
                    }

                    return c(t, e), d(t, [{
                        key: "resolveOptions", value: function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText
                        }
                    }, {
                        key: "listenClick", value: function e(t) {
                            var n = this;
                            this.listener = (0, f.default)(t, "click", function (e) {
                                return n.onClick(e)
                            })
                        }
                    }, {
                        key: "onClick", value: function e(t) {
                            var n = t.delegateTarget || t.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
                                action: this.action(n),
                                target: this.target(n),
                                text: this.text(n),
                                trigger: n,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction", value: function e(t) {
                            return l("action", t)
                        }
                    }, {
                        key: "defaultTarget", value: function e(t) {
                            var n = l("target", t);
                            if (n) return document.querySelector(n)
                        }
                    }, {
                        key: "defaultText", value: function e(t) {
                            return l("text", t)
                        }
                    }, {
                        key: "destroy", value: function e() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }]), t
                }(u.default);
                e.exports = h
            })
        }, {"./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6}]
    }, {}, [8])(8)
});
;(function ($) {
    "use strict";

    $.fn.transitionEnd = function (callback) {
        var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i, dom = this;

        function fireCallBack(e) {
            /*jshint validthis:true */
            if (e.target !== this) return;
            callback.call(this, e);
            for (i = 0; i < events.length; i++) {
                dom.off(events[i], fireCallBack);
            }
        }

        if (callback) {
            for (i = 0; i < events.length; i++) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    };

    $.support = (function () {
        var support = {
            touch: !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch)
        };
        return support;
    })();

    $.touchEvents = {
        start: $.support.touch ? 'touchstart' : 'mousedown',
        move: $.support.touch ? 'touchmove' : 'mousemove',
        end: $.support.touch ? 'touchend' : 'mouseup'
    };

    $.getTouchPosition = function (e) {
        e = e.originalEvent || e; //jquery wrap the originevent
        if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend') {
            return {
                x: e.targetTouches[0].pageX,
                y: e.targetTouches[0].pageY
            };
        } else {
            return {
                x: e.pageX,
                y: e.pageY
            };
        }
    };

    $.fn.scrollHeight = function () {
        return this[0].scrollHeight;
    };

    $.fn.transform = function (transform) {
        for (var i = 0; i < this.length; i++) {
            var elStyle = this[i].style;
            elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
        }
        return this;
    };
    $.fn.transition = function (duration) {
        if (typeof duration !== 'string') {
            duration = duration + 'ms';
        }
        for (var i = 0; i < this.length; i++) {
            var elStyle = this[i].style;
            elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
        }
        return this;
    };

    $.getTranslate = function (el, axis) {
        var matrix, curTransform, curStyle, transformMatrix;

        // automatic axis detection
        if (typeof axis === 'undefined') {
            axis = 'x';
        }

        curStyle = window.getComputedStyle(el, null);
        if (window.WebKitCSSMatrix) {
            // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
            transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
            //Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix)
                curTransform = transformMatrix.m41;
            //Crazy IE10 Matrix
            else if (matrix.length === 16)
                curTransform = parseFloat(matrix[12]);
            //Normal Browsers
            else
                curTransform = parseFloat(matrix[4]);
        }
        if (axis === 'y') {
            //Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix)
                curTransform = transformMatrix.m42;
            //Crazy IE10 Matrix
            else if (matrix.length === 16)
                curTransform = parseFloat(matrix[13]);
            //Normal Browsers
            else
                curTransform = parseFloat(matrix[5]);
        }

        return curTransform || 0;
    };
    $.requestAnimationFrame = function (callback) {
        if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
        else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);
        else if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame(callback);
        else {
            return window.setTimeout(callback, 1000 / 60);
        }
    };

    $.cancelAnimationFrame = function (id) {
        if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);
        else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);
        else if (window.mozCancelAnimationFrame) return window.mozCancelAnimationFrame(id);
        else {
            return window.clearTimeout(id);
        }
    };

    $.fn.join = function (arg) {
        return this.toArray().join(arg);
    }
})($);

/*===========================
  Template7 Template engine
  ===========================*/
/* global $:true */
/* jshint unused:false */
/* jshint forin:false */
+function ($) {
    "use strict";
    $.Template7 = $.t7 = (function () {
        function isArray(arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        }

        function isObject(obj) {
            return obj instanceof Object;
        }

        function isFunction(func) {
            return typeof func === 'function';
        }

        var cache = {};

        function helperToSlices(string) {
            var helperParts = string.replace(/[{}#}]/g, '').split(' ');
            var slices = [];
            var shiftIndex, i, j;
            for (i = 0; i < helperParts.length; i++) {
                var part = helperParts[i];
                if (i === 0) slices.push(part);
                else {
                    if (part.indexOf('"') === 0) {
                        // Plain String
                        if (part.match(/"/g).length === 2) {
                            // One word string
                            slices.push(part);
                        } else {
                            // Find closed Index
                            shiftIndex = 0;
                            for (j = i + 1; j < helperParts.length; j++) {
                                part += ' ' + helperParts[j];
                                if (helperParts[j].indexOf('"') >= 0) {
                                    shiftIndex = j;
                                    slices.push(part);
                                    break;
                                }
                            }
                            if (shiftIndex) i = shiftIndex;
                        }
                    } else {
                        if (part.indexOf('=') > 0) {
                            // Hash
                            var hashParts = part.split('=');
                            var hashName = hashParts[0];
                            var hashContent = hashParts[1];
                            if (hashContent.match(/"/g).length !== 2) {
                                shiftIndex = 0;
                                for (j = i + 1; j < helperParts.length; j++) {
                                    hashContent += ' ' + helperParts[j];
                                    if (helperParts[j].indexOf('"') >= 0) {
                                        shiftIndex = j;
                                        break;
                                    }
                                }
                                if (shiftIndex) i = shiftIndex;
                            }
                            var hash = [hashName, hashContent.replace(/"/g, '')];
                            slices.push(hash);
                        } else {
                            // Plain variable
                            slices.push(part);
                        }
                    }
                }
            }
            return slices;
        }

        function stringToBlocks(string) {
            var blocks = [], i, j, k;
            if (!string) return [];
            var _blocks = string.split(/({{[^{^}]*}})/);
            for (i = 0; i < _blocks.length; i++) {
                var block = _blocks[i];
                if (block === '') continue;
                if (block.indexOf('{{') < 0) {
                    blocks.push({
                        type: 'plain',
                        content: block
                    });
                } else {
                    if (block.indexOf('{/') >= 0) {
                        continue;
                    }
                    if (block.indexOf('{#') < 0 && block.indexOf(' ') < 0 && block.indexOf('else') < 0) {
                        // Simple variable
                        blocks.push({
                            type: 'variable',
                            contextName: block.replace(/[{}]/g, '')
                        });
                        continue;
                    }
                    // Helpers
                    var helperSlices = helperToSlices(block);
                    var helperName = helperSlices[0];
                    var helperContext = [];
                    var helperHash = {};
                    for (j = 1; j < helperSlices.length; j++) {
                        var slice = helperSlices[j];
                        if (isArray(slice)) {
                            // Hash
                            helperHash[slice[0]] = slice[1] === 'false' ? false : slice[1];
                        } else {
                            helperContext.push(slice);
                        }
                    }

                    if (block.indexOf('{#') >= 0) {
                        // Condition/Helper
                        var helperStartIndex = i;
                        var helperContent = '';
                        var elseContent = '';
                        var toSkip = 0;
                        var shiftIndex;
                        var foundClosed = false, foundElse = false, foundClosedElse = false, depth = 0;
                        for (j = i + 1; j < _blocks.length; j++) {
                            if (_blocks[j].indexOf('{{#') >= 0) {
                                depth++;
                            }
                            if (_blocks[j].indexOf('{{/') >= 0) {
                                depth--;
                            }
                            if (_blocks[j].indexOf('{{#' + helperName) >= 0) {
                                helperContent += _blocks[j];
                                if (foundElse) elseContent += _blocks[j];
                                toSkip++;
                            } else if (_blocks[j].indexOf('{{/' + helperName) >= 0) {
                                if (toSkip > 0) {
                                    toSkip--;
                                    helperContent += _blocks[j];
                                    if (foundElse) elseContent += _blocks[j];
                                } else {
                                    shiftIndex = j;
                                    foundClosed = true;
                                    break;
                                }
                            } else if (_blocks[j].indexOf('else') >= 0 && depth === 0) {
                                foundElse = true;
                            } else {
                                if (!foundElse) helperContent += _blocks[j];
                                if (foundElse) elseContent += _blocks[j];
                            }

                        }
                        if (foundClosed) {
                            if (shiftIndex) i = shiftIndex;
                            blocks.push({
                                type: 'helper',
                                helperName: helperName,
                                contextName: helperContext,
                                content: helperContent,
                                inverseContent: elseContent,
                                hash: helperHash
                            });
                        }
                    } else if (block.indexOf(' ') > 0) {
                        blocks.push({
                            type: 'helper',
                            helperName: helperName,
                            contextName: helperContext,
                            hash: helperHash
                        });
                    }
                }
            }
            return blocks;
        }

        var Template7 = function (template) {
            var t = this;
            t.template = template;

            function getCompileFn(block, depth) {
                if (block.content) return compile(block.content, depth);
                else return function () {
                    return '';
                };
            }

            function getCompileInverse(block, depth) {
                if (block.inverseContent) return compile(block.inverseContent, depth);
                else return function () {
                    return '';
                };
            }

            function getCompileVar(name, ctx) {
                var variable, parts, levelsUp = 0, initialCtx = ctx;
                if (name.indexOf('../') === 0) {
                    levelsUp = name.split('../').length - 1;
                    var newDepth = ctx.split('_')[1] - levelsUp;
                    ctx = 'ctx_' + (newDepth >= 1 ? newDepth : 1);
                    parts = name.split('../')[levelsUp].split('.');
                } else if (name.indexOf('@global') === 0) {
                    ctx = '$.Template7.global';
                    parts = name.split('@global.')[1].split('.');
                } else if (name.indexOf('@root') === 0) {
                    ctx = 'ctx_1';
                    parts = name.split('@root.')[1].split('.');
                } else {
                    parts = name.split('.');
                }
                variable = ctx;
                for (var i = 0; i < parts.length; i++) {
                    var part = parts[i];
                    if (part.indexOf('@') === 0) {
                        if (i > 0) {
                            variable += '[(data && data.' + part.replace('@', '') + ')]';
                        } else {
                            variable = '(data && data.' + name.replace('@', '') + ')';
                        }
                    } else {
                        if (isFinite(part)) {
                            variable += '[' + part + ']';
                        } else {
                            if (part.indexOf('this') === 0) {
                                variable = part.replace('this', ctx);
                            } else {
                                variable += '.' + part;
                            }
                        }
                    }
                }

                return variable;
            }

            function getCompiledArguments(contextArray, ctx) {
                var arr = [];
                for (var i = 0; i < contextArray.length; i++) {
                    if (contextArray[i].indexOf('"') === 0) arr.push(contextArray[i]);
                    else {
                        arr.push(getCompileVar(contextArray[i], ctx));
                    }
                }
                return arr.join(', ');
            }

            function compile(template, depth) {
                depth = depth || 1;
                template = template || t.template;
                if (typeof template !== 'string') {
                    throw new Error('Template7: Template must be a string');
                }
                var blocks = stringToBlocks(template);
                if (blocks.length === 0) {
                    return function () {
                        return '';
                    };
                }
                var ctx = 'ctx_' + depth;
                var resultString = '(function (' + ctx + ', data) {\n';
                if (depth === 1) {
                    resultString += 'function isArray(arr){return Object.prototype.toString.apply(arr) === \'[object Array]\';}\n';
                    resultString += 'function isFunction(func){return (typeof func === \'function\');}\n';
                    resultString += 'function c(val, ctx) {if (typeof val !== "undefined") {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n';
                }
                resultString += 'var r = \'\';\n';
                var i, j, context;
                for (i = 0; i < blocks.length; i++) {
                    var block = blocks[i];
                    // Plain block
                    if (block.type === 'plain') {
                        resultString += 'r +=\'' + (block.content).replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/'/g, '\\' + '\'') + '\';';
                        continue;
                    }
                    var variable, compiledArguments;
                    // Variable block
                    if (block.type === 'variable') {
                        variable = getCompileVar(block.contextName, ctx);
                        resultString += 'r += c(' + variable + ', ' + ctx + ');';
                    }
                    // Helpers block
                    if (block.type === 'helper') {
                        if (block.helperName in t.helpers) {
                            compiledArguments = getCompiledArguments(block.contextName, ctx);
                            resultString += 'r += ($.Template7.helpers.' + block.helperName + ').call(' + ctx + ', ' + (compiledArguments && (compiledArguments + ', ')) + '{hash:' + JSON.stringify(block.hash) + ', data: data || {}, fn: ' + getCompileFn(block, depth + 1) + ', inverse: ' + getCompileInverse(block, depth + 1) + ', root: ctx_1});';
                        } else {
                            if (block.contextName.length > 0) {
                                throw new Error('Template7: Missing helper: "' + block.helperName + '"');
                            } else {
                                variable = getCompileVar(block.helperName, ctx);
                                resultString += 'if (' + variable + ') {';
                                resultString += 'if (isArray(' + variable + ')) {';
                                resultString += 'r += ($.Template7.helpers.each).call(' + ctx + ', ' + variable + ', {hash:' + JSON.stringify(block.hash) + ', data: data || {}, fn: ' + getCompileFn(block, depth + 1) + ', inverse: ' + getCompileInverse(block, depth + 1) + ', root: ctx_1});';
                                resultString += '}else {';
                                resultString += 'r += ($.Template7.helpers.with).call(' + ctx + ', ' + variable + ', {hash:' + JSON.stringify(block.hash) + ', data: data || {}, fn: ' + getCompileFn(block, depth + 1) + ', inverse: ' + getCompileInverse(block, depth + 1) + ', root: ctx_1});';
                                resultString += '}}';
                            }
                        }
                    }
                }
                resultString += '\nreturn r;})';
                return eval.call(window, resultString);
            }

            t.compile = function (template) {
                if (!t.compiled) {
                    t.compiled = compile(template);
                }
                return t.compiled;
            };
        };
        Template7.prototype = {
            options: {},
            helpers: {
                'if': function (context, options) {
                    if (isFunction(context)) {
                        context = context.call(this);
                    }
                    if (context) {
                        return options.fn(this, options.data);
                    } else {
                        return options.inverse(this, options.data);
                    }
                },
                'unless': function (context, options) {
                    if (isFunction(context)) {
                        context = context.call(this);
                    }
                    if (!context) {
                        return options.fn(this, options.data);
                    } else {
                        return options.inverse(this, options.data);
                    }
                },
                'each': function (context, options) {
                    var ret = '', i = 0;
                    if (isFunction(context)) {
                        context = context.call(this);
                    }
                    if (isArray(context)) {
                        if (options.hash.reverse) {
                            context = context.reverse();
                        }
                        for (i = 0; i < context.length; i++) {
                            ret += options.fn(context[i], {first: i === 0, last: i === context.length - 1, index: i});
                        }
                        if (options.hash.reverse) {
                            context = context.reverse();
                        }
                    } else {
                        for (var key in context) {
                            i++;
                            ret += options.fn(context[key], {key: key});
                        }
                    }
                    if (i > 0) return ret;
                    else return options.inverse(this);
                },
                'with': function (context, options) {
                    if (isFunction(context)) {
                        context = context.call(this);
                    }
                    return options.fn(context);
                },
                'join': function (context, options) {
                    if (isFunction(context)) {
                        context = context.call(this);
                    }
                    return context.join(options.hash.delimiter || options.hash.delimeter);
                },
                'js': function (expression, options) {
                    var func;
                    if (expression.indexOf('return') >= 0) {
                        func = '(function(){' + expression + '})';
                    } else {
                        func = '(function(){return (' + expression + ')})';
                    }
                    return eval.call(this, func).call(this);
                },
                'js_compare': function (expression, options) {
                    var func;
                    if (expression.indexOf('return') >= 0) {
                        func = '(function(){' + expression + '})';
                    } else {
                        func = '(function(){return (' + expression + ')})';
                    }
                    var condition = eval.call(this, func).call(this);
                    if (condition) {
                        return options.fn(this, options.data);
                    } else {
                        return options.inverse(this, options.data);
                    }
                }
            }
        };
        var t7 = function (template, data) {
            if (arguments.length === 2) {
                var instance = new Template7(template);
                var rendered = instance.compile()(data);
                instance = null;
                return (rendered);
            } else return new Template7(template);
        };
        t7.registerHelper = function (name, fn) {
            Template7.prototype.helpers[name] = fn;
        };
        t7.unregisterHelper = function (name) {
            Template7.prototype.helpers[name] = undefined;
            delete Template7.prototype.helpers[name];
        };

        t7.compile = function (template, options) {
            var instance = new Template7(template, options);
            return instance.compile();
        };

        t7.options = Template7.prototype.options;
        t7.helpers = Template7.prototype.helpers;
        return t7;
    })();
}($);

+function ($) {
    "use strict";

    var defaults;

    $.modal = function (params, onOpen) {
        params = $.extend({}, defaults, params);


        var buttons = params.buttons;

        var buttonsHtml = buttons.map(function (d, i) {
            return '<a href="javascript:;" class="weui-dialog__btn ' + (d.className || "") + '">' + d.text + '</a>';
        }).join("");

        var tpl = '<div class="weui-dialog">' +
            '<div class="weui-dialog__hd"><strong class="weui-dialog__title">' + params.title + '</strong></div>' +
            (params.text ? '<div class="weui-dialog__bd">' + params.text + '</div>' : '') +
            '<div class="weui-dialog__ft">' + buttonsHtml + '</div>' +
            '</div>';

        var dialog = $.openModal(tpl, onOpen);

        dialog.find(".weui-dialog__btn").each(function (i, e) {
            var el = $(e);
            el.click(function () {
                //先关闭对话框，再调用回调函数
                if (params.autoClose) $.closeModal();

                if (buttons[i].onClick) {
                    buttons[i].onClick.call(dialog);
                }
            });
        });

        return dialog;
    };

    $.openModal = function (tpl, onOpen) {
        var mask = $("<div class='weui-mask'></div>").appendTo(document.body);
        mask.show();

        var dialog = $(tpl).appendTo(document.body);

        if (onOpen) {
            dialog.transitionEnd(function () {
                onOpen.call(dialog);
            });
        }

        dialog.show();
        mask.addClass("weui-mask--visible");
        dialog.addClass("weui-dialog--visible");


        return dialog;
    }

    $.closeModal = function () {
        $(".weui-mask--visible").removeClass("weui-mask--visible").transitionEnd(function () {
            $(this).remove();
        });
        $(".weui-dialog--visible").removeClass("weui-dialog--visible").transitionEnd(function () {
            $(this).remove();
        });
    };

    $.alert = function (text, title, onOK) {
        var config;
        if (typeof text === 'object') {
            config = text;
        } else {
            if (typeof title === 'function') {
                onOK = arguments[1];
                title = undefined;
            }

            config = {
                text: text,
                title: title,
                onOK: onOK
            }
        }
        return $.modal({
            text: config.text,
            title: config.title,
            buttons: [{
                text: defaults.buttonOK,
                className: "primary",
                onClick: config.onOK
            }]
        });
    }

    $.confirm = function (text, title, onOK, onCancel) {
        var config;
        if (typeof text === 'object') {
            config = text
        } else {
            if (typeof title === 'function') {
                onCancel = arguments[2];
                onOK = arguments[1];
                title = undefined;
            }

            config = {
                text: text,
                title: title,
                onOK: onOK,
                onCancel: onCancel
            }
        }
        return $.modal({
            text: config.text,
            title: config.title,
            buttons: [
                {
                    text: defaults.buttonCancel,
                    className: "default",
                    onClick: config.onCancel
                },
                {
                    text: defaults.buttonOK,
                    className: "primary",
                    onClick: config.onOK
                }]
        });
    };

    //如果参数过多，建议通过 config 对象进行配置，而不是传入多个参数。
    $.prompt = function (text, title, onOK, onCancel, input) {
        var config;
        if (typeof text === 'object') {
            config = text;
        } else {
            if (typeof title === 'function') {
                input = arguments[3];
                onCancel = arguments[2];
                onOK = arguments[1];
                title = undefined;
            }
            config = {
                text: text,
                title: title,
                input: input,
                onOK: onOK,
                onCancel: onCancel,
                empty: false  //allow empty
            }
        }

        var modal = $.modal({
            text: '<p class="weui-prompt-text">' + (config.text || '') + '</p><input type="text" class="weui-input weui-prompt-input" id="weui-prompt-input" value="' + (config.input || '') + '" />',
            title: config.title,
            autoClose: false,
            buttons: [
                {
                    text: defaults.buttonCancel,
                    className: "default",
                    onClick: function () {
                        $.closeModal();
                        config.onCancel && config.onCancel.call(modal);
                    }
                },
                {
                    text: defaults.buttonOK,
                    className: "primary",
                    onClick: function () {
                        var input = $("#weui-prompt-input").val();
                        if (!config.empty && (input === "" || input === null)) {
                            modal.find('.weui-prompt-input').focus()[0].select();
                            return false;
                        }
                        $.closeModal();
                        config.onOK && config.onOK.call(modal, input);
                    }
                }]
        }, function () {
            this.find('.weui-prompt-input').focus()[0].select();
        });

        return modal;
    };

    //如果参数过多，建议通过 config 对象进行配置，而不是传入多个参数。
    $.login = function (text, title, onOK, onCancel, username, password) {
        var config;
        if (typeof text === 'object') {
            config = text;
        } else {
            if (typeof title === 'function') {
                password = arguments[4];
                username = arguments[3];
                onCancel = arguments[2];
                onOK = arguments[1];
                title = undefined;
            }
            config = {
                text: text,
                title: title,
                username: username,
                password: password,
                onOK: onOK,
                onCancel: onCancel
            }
        }

        var modal = $.modal({
            text: '<p class="weui-prompt-text">' + (config.text || '') + '</p>' +
                '<input type="text" class="weui-input weui-prompt-input" id="weui-prompt-username" value="' + (config.username || '') + '" placeholder="输入用户名" />' +
                '<input type="password" class="weui-input weui-prompt-input" id="weui-prompt-password" value="' + (config.password || '') + '" placeholder="输入密码" />',
            title: config.title,
            autoClose: false,
            buttons: [
                {
                    text: defaults.buttonCancel,
                    className: "default",
                    onClick: function () {
                        $.closeModal();
                        config.onCancel && config.onCancel.call(modal);
                    }
                }, {
                    text: defaults.buttonOK,
                    className: "primary",
                    onClick: function () {
                        var username = $("#weui-prompt-username").val();
                        var password = $("#weui-prompt-password").val();
                        if (!config.empty && (username === "" || username === null)) {
                            modal.find('#weui-prompt-username').focus()[0].select();
                            return false;
                        }
                        if (!config.empty && (password === "" || password === null)) {
                            modal.find('#weui-prompt-password').focus()[0].select();
                            return false;
                        }
                        $.closeModal();
                        config.onOK && config.onOK.call(modal, username, password);
                    }
                }]
        }, function () {
            this.find('#weui-prompt-username').focus()[0].select();
        });

        return modal;
    };

    defaults = $.modal.prototype.defaults = {
        title: _TIPS_,
        text: undefined,
        buttonOK: _CONFIRM_,
        buttonCancel: _CANCEL_,
        buttons: [{
            text: _CONFIRM_,
            className: "primary"
        }],
        autoClose: true //点击按钮自动关闭对话框，如果你不希望点击按钮就关闭对话框，可以把这个设置为false
    };

}($);

+function ($) {
    "use strict";

    var defaults;

    var show = function (html, className) {
        className = className || "";
        var mask = $("<div class='weui-mask_transparent'></div>").appendTo(document.body);

        var tpl = '<div class="weui-toast ' + className + '">' + html + '</div>';
        var dialog = $(tpl).appendTo(document.body);

        dialog.addClass("weui-toast--visible");
        dialog.show();
    };

    var hide = function (callback) {
        $(".weui-mask_transparent").remove();
        $(".weui-toast--visible").removeClass("weui-toast--visible").transitionEnd(function () {
            var $this = $(this);
            $this.remove();
            callback && callback($this);
        });
    }

    $.toast = function (text, style, callback) {
        if (typeof style === "function") {
            callback = style;
        }
        var className, iconClassName = 'weui-icon-success-no-circle';
        var duration = toastDefaults.duration;
        if (style == "cancel") {
            className = "weui-toast_cancel";
            iconClassName = 'weui-icon-cancel'
        } else if (style == "forbidden") {
            className = "weui-toast--forbidden";
            iconClassName = 'weui-icon-warn'
        } else if (style == "text") {
            className = "weui-toast--text";
        } else if (typeof style === typeof 1) {
            duration = style
        }
        show('<i class="' + iconClassName + ' weui-icon_toast"></i><p class="weui-toast_content">' + (text || "已经完成") + '</p>', className);

        setTimeout(function () {
            hide(callback);
        }, duration);
    }

    $.showLoading = function (text) {
        var html = '<div class="weui_loading">';
        html += '<i class="weui-loading weui-icon_toast"></i>';
        html += '</div>';
        html += '<p class="weui-toast_content">' + (text || "数据加载中") + '</p>';
        show(html, 'weui_loading_toast');
    }

    $.hideLoading = function () {
        hide();
    }

    var toastDefaults = $.toast.prototype.defaults = {
        duration: 1000
    }

}($);

+function ($) {
    "use strict";

    var defaults;

    var show = function (params) {

        var mask = $("<div class='weui-mask weui-actions_mask'></div>").appendTo(document.body);

        var actions = params.actions || [];

        var actionsHtml = actions.map(function (d, i) {
            return '<div class="weui-actionsheet__cell ' + (d.className || "") + '">' + d.text + '</div>';
        }).join("");

        var titleHtml = "";

        if (params.title) {
            titleHtml = '<div class="weui-actionsheet__title"><p class="weui-actionsheet__title-text">' + params.title + '</p></div>';
        }

        var tpl = '<div class="weui-actionsheet " id="weui-actionsheet">' +
            titleHtml +
            '<div class="weui-actionsheet__menu">' +
            actionsHtml +
            '</div>' +
            '<div class="weui-actionsheet__action">' +
            '<div class="weui-actionsheet__cell weui-actionsheet_cancel">' + _CANCEL_ + '</div>' +
            '</div>' +
            '</div>';
        var dialog = $(tpl).appendTo(document.body);

        dialog.find(".weui-actionsheet__menu .weui-actionsheet__cell, .weui-actionsheet__action .weui-actionsheet__cell").each(function (i, e) {
            $(e).click(function () {
                $.closeActions();
                params.onClose && params.onClose();
                if (actions[i] && actions[i].onClick) {
                    actions[i].onClick();
                }
            })
        });

        mask.show();
        dialog.show();
        mask.addClass("weui-mask--visible");
        dialog.addClass("weui-actionsheet_toggle");
    };

    var hide = function () {
        $(".weui-mask").removeClass("weui-mask--visible").transitionEnd(function () {
            $(this).remove();
        });
        $(".weui-actionsheet").removeClass("weui-actionsheet_toggle").transitionEnd(function () {
            $(this).remove();
        });
    }

    $.actions = function (params) {
        params = $.extend({}, defaults, params);
        show(params);
    }

    $.closeActions = function () {
        hide();
    }

    $(document).on("click", ".weui-actions_mask", function () {
        $.closeActions();
    });

    var defaults = $.actions.prototype.defaults = {
        title: undefined,
        onClose: undefined,
        /*actions: [{
      text: "菜单",
      className: "color-danger",
      onClick: function() {
        console.log(1);
      }
    },{
      text: "菜单2",
      className: "color-success",
      onClick: function() {
        console.log(2);
      }
    }]*/
    }

}($);

/* ===============================================================================
************   Pull to refreh ************
=============================================================================== */
/* global $:true */

+function ($) {
    "use strict";

    var PTR = function (el, opt) {
        if (typeof opt === typeof function () {
        }) {
            opt = {
                onRefresh: opt
            }
        }
        if (typeof opt === typeof 'a') {
            opt = undefined
        }
        this.opt = $.extend(PTR.defaults, opt || {});
        this.container = $(el);
        this.attachEvents();
    }

    PTR.defaults = {
        distance: 50,
        onRefresh: undefined,
        onPull: undefined
    }

    PTR.prototype.touchStart = function (e) {
        if (this.container.hasClass("refreshing")) return;
        var p = $.getTouchPosition(e);
        this.start = p;
        this.diffX = this.diffY = 0;
    };

    PTR.prototype.touchMove = function (e) {
        if (this.container.hasClass("refreshing")) return;
        if (!this.start) return false;
        if (this.container.scrollTop() > 0) return;
        var p = $.getTouchPosition(e);
        this.diffX = p.x - this.start.x;
        this.diffY = p.y - this.start.y;
        if (Math.abs(this.diffX) > Math.abs(this.diffY)) return true; // 说明是左右方向的拖动
        if (this.diffY < 0) return;
        this.container.addClass("touching");
        e.preventDefault();
        e.stopPropagation();
        this.diffY = Math.pow(this.diffY, 0.75);
        this.container.css("transform", "translate3d(0, " + this.diffY + "px, 0)");
        this.triggerPull(this.diffY)
    };
    PTR.prototype.touchEnd = function () {
        this.start = false;
        if (this.diffY <= 0 || this.container.hasClass("refreshing")) return;
        this.container.removeClass("touching");
        this.container.removeClass("pull-down pull-up");
        this.container.css("transform", "");
        if (Math.abs(this.diffY) <= this.opt.distance) {
        } else {
            this.triggerPullToRefresh();
        }
    };

    PTR.prototype.triggerPullToRefresh = function () {
        this.triggerPull(this.opt.distance)
        this.container.removeClass('pull-up').addClass("refreshing");
        if (this.opt.onRefresh) {
            this.opt.onRefresh.call(this)
        }
        this.container.trigger("pull-to-refresh");
    }

    PTR.prototype.triggerPull = function (diffY) {

        if (diffY < this.opt.distance) {
            this.container.removeClass("pull-up").addClass("pull-down");
        } else {
            this.container.removeClass("pull-down").addClass("pull-up");
        }

        if (this.opt.onPull) {
            this.opt.onPull.call(this, Math.floor(diffY / this.opt.distance * 100))
        }
        this.container.trigger("pull");
    }

    PTR.prototype.pullToRefreshDone = function () {
        this.container.removeClass("refreshing");
    }

    PTR.prototype.attachEvents = function () {
        var el = this.container;
        el.addClass("weui-pull-to-refresh");
        el.on($.touchEvents.start, $.proxy(this.touchStart, this));
        el.on($.touchEvents.move, $.proxy(this.touchMove, this));
        el.on($.touchEvents.end, $.proxy(this.touchEnd, this));
    };

    var pullToRefreshDone = function (el) {
        $(el).removeClass("refreshing");
    }

    $.fn.pullToRefresh = function (opt) {
        return this.each(function () {
            var $this = $(this)
            var ptr = $this.data('ptr')
            if (!ptr) $this.data('ptr', ptr = new PTR(this, opt))
            if (typeof opt === typeof 'a') {
                ptr[opt].call(ptr)
            }
        });
    }

    $.fn.pullToRefreshDone = function () {
        return this.each(function () {
            pullToRefreshDone(this);
        });
    }

}($);

/* ===============================================================================
************   Infinite ************
=============================================================================== */
/* global $:true */
+function ($) {
    "use strict";

    // fix https://github.com/lihongxun945/jquery-weui/issues/442
    // chrome will always return 0, when use document.body.scrollTop
    // https://stackoverflow.com/questions/43717316/google-chrome-document-body-scrolltop-always-returns-0
    var getOffset = function (container) {
        var tagName = container[0].tagName.toUpperCase()
        var scrollTop
        if (tagName === 'BODY' || tagName === 'HTML') {
            scrollTop = container.scrollTop() || $(window).scrollTop()
        } else {
            scrollTop = container.scrollTop()
        }
        var offset = container.scrollHeight() - ($(window).height() + scrollTop)
        console.log(offset)
        return offset
    }

    var Infinite = function (el, distance) {
        this.container = $(el);
        this.container.data("infinite", this);
        this.distance = distance || 50;
        this.attachEvents();
    }

    Infinite.prototype.scroll = function () {
        var container = this.container;
        this._check();
    }

    Infinite.prototype.attachEvents = function (off) {
        var el = this.container;
        var scrollContainer = (el[0].tagName.toUpperCase() === "BODY" ? $(document) : el);
        scrollContainer[off ? "off" : "on"]("scroll", $.proxy(this.scroll, this));
    };
    Infinite.prototype.detachEvents = function (off) {
        this.attachEvents(true);
    }
    Infinite.prototype._check = function () {
        var offset = getOffset(this.container);
        if (Math.abs(offset) <= this.distance) {
            this.container.trigger("infinite");
        }
    }

    var infinite = function (el) {
        attachEvents(el);
    }

    $.fn.infinite = function (distance) {
        return this.each(function () {
            new Infinite(this, distance);
        });
    }
    $.fn.destroyInfinite = function () {
        return this.each(function () {
            var infinite = $(this).data("infinite");
            if (infinite && infinite.detachEvents) infinite.detachEvents();
        });
    }

}($);

/* global $:true */
+function ($) {
    "use strict";

    var ITEM_ON = "weui-bar__item--on";

    var showTab = function (a) {
        var $a = $(a);
        if ($a.hasClass(ITEM_ON)) return;
        var href = $a.attr("href");

        if (!/^#/.test(href)) return;

        $a.parent().find("." + ITEM_ON).removeClass(ITEM_ON);
        $a.addClass(ITEM_ON);

        var bd = $a.parents(".weui-tab").find(".weui-tab__bd");

        bd.find(".weui-tab__bd-item--active").removeClass("weui-tab__bd-item--active");

        $(href).addClass("weui-tab__bd-item--active");
    }

    $.showTab = showTab;

    $(document).on("click", ".weui-navbar__item, .weui-tabbar__item", function (e) {
        var $a = $(e.currentTarget);
        var href = $a.attr("href");
        if ($a.hasClass(ITEM_ON)) return;
        if (!/^#/.test(href)) return;

        e.preventDefault();

        showTab($a);
    });

}($);

/* global $:true */
+function ($) {
    "use strict";

    $(document).on("click touchstart", ".weui-search-bar__label", function (e) {
        $(e.target).parents(".weui-search-bar").addClass("weui-search-bar_focusing").find('input').focus();
    })

        .on("click", ".weui-search-bar__cancel-btn", function (e) {
            var $input = $(e.target).parents(".weui-search-bar").removeClass("weui-search-bar_focusing").find(".weui-search-bar__input").val("").blur();
        })
        .on("click", ".weui-icon-clear", function (e) {
            var $input = $(e.target).parents(".weui-search-bar").find(".weui-search-bar__input").val("").focus();
        });

}($);

/*===========================
Device/OS Detection
===========================*/
/* global $:true */
;(function ($) {
    "use strict";
    var device = {};
    var ua = navigator.userAgent;

    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

    device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false;

    // Android
    if (android) {
        device.os = 'android';
        device.osVersion = android[2];
        device.android = true;
        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
        device.osVersion = iphone[2].replace(/_/g, '.');
        device.iphone = true;
    }
    if (ipad) {
        device.osVersion = ipad[2].replace(/_/g, '.');
        device.ipad = true;
    }
    if (ipod) {
        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
        device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
        if (device.osVersion.split('.')[0] === '10') {
            device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
        }
    }

    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

    // Minimal UI
    if (device.os && device.os === 'ios') {
        var osVersionArr = device.osVersion.split('.');
        device.minimalUi = !device.webView &&
            (ipod || iphone) &&
            (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
            $('meta[name="viewport"]').length > 0 && $('meta[name="viewport"]').attr('content').indexOf('minimal-ui') >= 0;
    }

    // Check for status bar and fullscreen app mode
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    device.statusBar = false;
    if (device.webView && (windowWidth * windowHeight === screen.width * screen.height)) {
        device.statusBar = true;
    } else {
        device.statusBar = false;
    }

    // Classes
    var classNames = [];

    // Pixel Ratio
    device.pixelRatio = window.devicePixelRatio || 1;
    classNames.push('pixel-ratio-' + Math.floor(device.pixelRatio));
    if (device.pixelRatio >= 2) {
        classNames.push('retina');
    }

    // OS classes
    if (device.os) {
        classNames.push(device.os, device.os + '-' + device.osVersion.split('.')[0], device.os + '-' + device.osVersion.replace(/\./g, '-'));
        if (device.os === 'ios') {
            var major = parseInt(device.osVersion.split('.')[0], 10);
            for (var i = major - 1; i >= 6; i--) {
                classNames.push('ios-gt-' + i);
            }
        }

    }
    // Status bar classes
    if (device.statusBar) {
        classNames.push('with-statusbar-overlay');
    } else {
        $('html').removeClass('with-statusbar-overlay');
    }

    // Add html classes
    if (classNames.length > 0) $('html').addClass(classNames.join(' '));

    $.device = device;
})($);

/*======================================================
************   Picker   ************
======================================================*/
/* global $:true */
/* jshint unused:false */
/* jshint multistr:true */
+function ($) {
    "use strict";
    var Picker = function (params) {
        var p = this;
        var defaults = {
            updateValuesOnMomentum: false,
            updateValuesOnTouchmove: true,
            rotateEffect: false,
            momentumRatio: 7,
            freeMode: false,
            // Common settings
            scrollToInput: true,
            inputReadOnly: true,
            toolbar: true,
            toolbarCloseText: '完成',
            title: '请选择',
            toolbarTemplate: '<div class="toolbar">\
          <div class="toolbar-inner">\
          <a href="javascript:;" class="picker-button close-picker">{{closeText}}</a>\
          <h1 class="title">{{title}}</h1>\
          </div>\
          </div>',
        };
        params = params || {};
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
        }
        p.params = params;
        p.cols = [];
        p.initialized = false;

        // Inline flag
        p.inline = p.params.container ? true : false;

        // 3D Transforms origin bug, only on safari
        var originBug = $.device.ios || (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') < 0) && !$.device.android;

        // Should be converted to popover
        function isPopover() {
            var toPopover = false;
            if (!p.params.convertToPopover && !p.params.onlyInPopover) return toPopover;
            if (!p.inline && p.params.input) {
                if (p.params.onlyInPopover) toPopover = true;
                else {
                    if ($.device.ios) {
                        toPopover = $.device.ipad ? true : false;
                    } else {
                        if ($(window).width() >= 768) toPopover = true;
                    }
                }
            }
            return toPopover;
        }

        function inPopover() {
            if (p.opened && p.container && p.container.length > 0 && p.container.parents('.popover').length > 0) return true;
            else return false;
        }

        // Value
        p.setValue = function (arrValues, transition) {
            var valueIndex = 0;
            for (var i = 0; i < p.cols.length; i++) {
                if (p.cols[i] && !p.cols[i].divider) {
                    p.cols[i].setValue(arrValues[valueIndex], transition);
                    valueIndex++;
                }
            }
        };
        p.updateValue = function () {
            var newValue = [];
            var newDisplayValue = [];
            for (var i = 0; i < p.cols.length; i++) {
                if (!p.cols[i].divider) {
                    newValue.push(p.cols[i].value);
                    newDisplayValue.push(p.cols[i].displayValue);
                }
            }
            if (newValue.indexOf(undefined) >= 0) {
                return;
            }
            p.value = newValue;
            p.displayValue = newDisplayValue;
            if (p.params.onChange) {
                p.params.onChange(p, p.value, p.displayValue);
            }
            if (p.input && p.input.length > 0) {
                $(p.input).val(p.params.formatValue ? p.params.formatValue(p, p.value, p.displayValue) : p.value.join(' '));
                $(p.input).trigger('change');
            }
        };

        // Columns Handlers
        p.initPickerCol = function (colElement, updateItems) {
            var colContainer = $(colElement);
            var colIndex = colContainer.index();
            var col = p.cols[colIndex];
            if (col.divider) return;
            col.container = colContainer;
            col.wrapper = col.container.find('.picker-items-col-wrapper');
            col.items = col.wrapper.find('.picker-item');

            var i, j;
            var wrapperHeight, itemHeight, itemsHeight, minTranslate, maxTranslate;
            col.replaceValues = function (values, displayValues) {
                col.destroyEvents();
                col.values = values;
                col.displayValues = displayValues;
                var newItemsHTML = p.columnHTML(col, true);
                col.wrapper.html(newItemsHTML);
                col.items = col.wrapper.find('.picker-item');
                col.calcSize();
                col.setValue(col.values[0] || '', 0, true);
                col.initEvents();
            };
            col.calcSize = function () {
                if (!col.values.length) return;
                if (p.params.rotateEffect) {
                    col.container.removeClass('picker-items-col-absolute');
                    if (!col.width) col.container.css({width: ''});
                }
                var colWidth, colHeight;
                colWidth = 0;
                colHeight = col.container[0].offsetHeight;
                wrapperHeight = col.wrapper[0].offsetHeight;
                itemHeight = col.items[0].offsetHeight;
                itemsHeight = itemHeight * col.items.length;
                minTranslate = colHeight / 2 - itemsHeight + itemHeight / 2;
                maxTranslate = colHeight / 2 - itemHeight / 2;
                if (col.width) {
                    colWidth = col.width;
                    if (parseInt(colWidth, 10) === colWidth) colWidth = colWidth + 'px';
                    col.container.css({width: colWidth});
                }
                if (p.params.rotateEffect) {
                    if (!col.width) {
                        col.items.each(function () {
                            var item = $(this);
                            item.css({width: 'auto'});
                            colWidth = Math.max(colWidth, item[0].offsetWidth);
                            item.css({width: ''});
                        });
                        col.container.css({width: (colWidth + 2) + 'px'});
                    }
                    col.container.addClass('picker-items-col-absolute');
                }
            };
            col.calcSize();

            col.wrapper.transform('translate3d(0,' + maxTranslate + 'px,0)').transition(0);


            var activeIndex = 0;
            var animationFrameId;

            // Set Value Function
            col.setValue = function (newValue, transition, valueCallbacks) {
                if (typeof transition === 'undefined') transition = '';
                var newActiveIndex = col.wrapper.find('.picker-item[data-picker-value="' + newValue + '"]').index();
                if (typeof newActiveIndex === 'undefined' || newActiveIndex === -1) {
                    col.value = col.displayValue = newValue;
                    return;
                }
                var newTranslate = -newActiveIndex * itemHeight + maxTranslate;
                // Update wrapper
                col.wrapper.transition(transition);
                col.wrapper.transform('translate3d(0,' + (newTranslate) + 'px,0)');

                // Watch items
                if (p.params.updateValuesOnMomentum && col.activeIndex && col.activeIndex !== newActiveIndex) {
                    $.cancelAnimationFrame(animationFrameId);
                    col.wrapper.transitionEnd(function () {
                        $.cancelAnimationFrame(animationFrameId);
                    });
                    updateDuringScroll();
                }

                // Update items
                col.updateItems(newActiveIndex, newTranslate, transition, valueCallbacks);
            };

            col.updateItems = function (activeIndex, translate, transition, valueCallbacks) {
                if (typeof translate === 'undefined') {
                    translate = $.getTranslate(col.wrapper[0], 'y');
                }
                if (typeof activeIndex === 'undefined') activeIndex = -Math.round((translate - maxTranslate) / itemHeight);
                if (activeIndex < 0) activeIndex = 0;
                if (activeIndex >= col.items.length) activeIndex = col.items.length - 1;
                var previousActiveIndex = col.activeIndex;
                col.activeIndex = activeIndex;

                //去掉 .picker-after-selected, .picker-before-selected 以提高性能
                col.wrapper.find('.picker-selected').removeClass('picker-selected');
                if (p.params.rotateEffect) {
                    col.items.transition(transition);
                }
                var selectedItem = col.items.eq(activeIndex).addClass('picker-selected').transform('');

                if (valueCallbacks || typeof valueCallbacks === 'undefined') {
                    // Update values
                    col.value = selectedItem.attr('data-picker-value');
                    col.displayValue = col.displayValues ? col.displayValues[activeIndex] : col.value;
                    // On change callback
                    if (previousActiveIndex !== activeIndex) {
                        if (col.onChange) {
                            col.onChange(p, col.value, col.displayValue);
                        }
                        p.updateValue();
                    }
                }

                // Set 3D rotate effect
                if (!p.params.rotateEffect) {
                    return;
                }
                var percentage = (translate - (Math.floor((translate - maxTranslate) / itemHeight) * itemHeight + maxTranslate)) / itemHeight;

                col.items.each(function () {
                    var item = $(this);
                    var itemOffsetTop = item.index() * itemHeight;
                    var translateOffset = maxTranslate - translate;
                    var itemOffset = itemOffsetTop - translateOffset;
                    var percentage = itemOffset / itemHeight;

                    var itemsFit = Math.ceil(col.height / itemHeight / 2) + 1;

                    var angle = (-18 * percentage);
                    if (angle > 180) angle = 180;
                    if (angle < -180) angle = -180;
                    // Far class
                    if (Math.abs(percentage) > itemsFit) item.addClass('picker-item-far');
                    else item.removeClass('picker-item-far');
                    // Set transform
                    item.transform('translate3d(0, ' + (-translate + maxTranslate) + 'px, ' + (originBug ? -110 : 0) + 'px) rotateX(' + angle + 'deg)');
                });
            };

            function updateDuringScroll() {
                animationFrameId = $.requestAnimationFrame(function () {
                    col.updateItems(undefined, undefined, 0);
                    updateDuringScroll();
                });
            }

            // Update items on init
            if (updateItems) col.updateItems(0, maxTranslate, 0);

            var allowItemClick = true;
            var isTouched, isMoved, touchStartY, touchCurrentY, touchStartTime, touchEndTime, startTranslate, returnTo,
                currentTranslate, prevTranslate, velocityTranslate, velocityTime;

            function handleTouchStart(e) {
                if (isMoved || isTouched) return;
                e.preventDefault();
                isTouched = true;
                var position = $.getTouchPosition(e);
                touchStartY = touchCurrentY = position.y;
                touchStartTime = (new Date()).getTime();

                allowItemClick = true;
                startTranslate = currentTranslate = $.getTranslate(col.wrapper[0], 'y');
            }

            function handleTouchMove(e) {
                if (!isTouched) return;
                e.preventDefault();
                allowItemClick = false;
                var position = $.getTouchPosition(e);
                touchCurrentY = position.y;
                if (!isMoved) {
                    // First move
                    $.cancelAnimationFrame(animationFrameId);
                    isMoved = true;
                    startTranslate = currentTranslate = $.getTranslate(col.wrapper[0], 'y');
                    col.wrapper.transition(0);
                }
                e.preventDefault();

                var diff = touchCurrentY - touchStartY;
                currentTranslate = startTranslate + diff;
                returnTo = undefined;

                // Normalize translate
                if (currentTranslate < minTranslate) {
                    currentTranslate = minTranslate - Math.pow(minTranslate - currentTranslate, 0.8);
                    returnTo = 'min';
                }
                if (currentTranslate > maxTranslate) {
                    currentTranslate = maxTranslate + Math.pow(currentTranslate - maxTranslate, 0.8);
                    returnTo = 'max';
                }
                // Transform wrapper
                col.wrapper.transform('translate3d(0,' + currentTranslate + 'px,0)');

                // Update items
                col.updateItems(undefined, currentTranslate, 0, p.params.updateValuesOnTouchmove);

                // Calc velocity
                velocityTranslate = currentTranslate - prevTranslate || currentTranslate;
                velocityTime = (new Date()).getTime();
                prevTranslate = currentTranslate;
            }

            function handleTouchEnd(e) {
                if (!isTouched || !isMoved) {
                    isTouched = isMoved = false;
                    return;
                }
                isTouched = isMoved = false;
                col.wrapper.transition('');
                if (returnTo) {
                    if (returnTo === 'min') {
                        col.wrapper.transform('translate3d(0,' + minTranslate + 'px,0)');
                    } else col.wrapper.transform('translate3d(0,' + maxTranslate + 'px,0)');
                }
                touchEndTime = new Date().getTime();
                var velocity, newTranslate;
                if (touchEndTime - touchStartTime > 300) {
                    newTranslate = currentTranslate;
                } else {
                    velocity = Math.abs(velocityTranslate / (touchEndTime - velocityTime));
                    newTranslate = currentTranslate + velocityTranslate * p.params.momentumRatio;
                }

                newTranslate = Math.max(Math.min(newTranslate, maxTranslate), minTranslate);

                // Active Index
                var activeIndex = -Math.floor((newTranslate - maxTranslate) / itemHeight);

                // Normalize translate
                if (!p.params.freeMode) newTranslate = -activeIndex * itemHeight + maxTranslate;

                // Transform wrapper
                col.wrapper.transform('translate3d(0,' + (parseInt(newTranslate, 10)) + 'px,0)');

                // Update items
                col.updateItems(activeIndex, newTranslate, '', true);

                // Watch items
                if (p.params.updateValuesOnMomentum) {
                    updateDuringScroll();
                    col.wrapper.transitionEnd(function () {
                        $.cancelAnimationFrame(animationFrameId);
                    });
                }

                // Allow click
                setTimeout(function () {
                    allowItemClick = true;
                }, 100);
            }

            function handleClick(e) {
                if (!allowItemClick) return;
                $.cancelAnimationFrame(animationFrameId);
                /*jshint validthis:true */
                var value = $(this).attr('data-picker-value');
                col.setValue(value);
            }

            col.initEvents = function (detach) {
                var method = detach ? 'off' : 'on';
                col.container[method]($.touchEvents.start, handleTouchStart);
                col.container[method]($.touchEvents.move, handleTouchMove);
                col.container[method]($.touchEvents.end, handleTouchEnd);
                col.items[method]('click', handleClick);
            };
            col.destroyEvents = function () {
                col.initEvents(true);
            };

            col.container[0].f7DestroyPickerCol = function () {
                col.destroyEvents();
            };

            col.initEvents();

        };
        p.destroyPickerCol = function (colContainer) {
            colContainer = $(colContainer);
            if ('f7DestroyPickerCol' in colContainer[0]) colContainer[0].f7DestroyPickerCol();
        };

        // Resize cols
        function resizeCols() {
            if (!p.opened) return;
            for (var i = 0; i < p.cols.length; i++) {
                if (!p.cols[i].divider) {
                    p.cols[i].calcSize();
                    p.cols[i].setValue(p.cols[i].value, 0, false);
                }
            }
        }

        $(window).on('resize', resizeCols);

        // HTML Layout
        p.columnHTML = function (col, onlyItems) {
            var columnItemsHTML = '';
            var columnHTML = '';
            if (col.divider) {
                columnHTML += '<div class="picker-items-col picker-items-col-divider ' + (col.textAlign ? 'picker-items-col-' + col.textAlign : '') + ' ' + (col.cssClass || '') + '">' + col.content + '</div>';
            } else {
                for (var j = 0; j < col.values.length; j++) {
                    columnItemsHTML += '<div class="picker-item" data-picker-value="' + col.values[j] + '">' + (col.displayValues ? col.displayValues[j] : col.values[j]) + '</div>';
                }
                columnHTML += '<div class="picker-items-col ' + (col.textAlign ? 'picker-items-col-' + col.textAlign : '') + ' ' + (col.cssClass || '') + '"><div class="picker-items-col-wrapper">' + columnItemsHTML + '</div></div>';
            }
            return onlyItems ? columnItemsHTML : columnHTML;
        };
        p.layout = function () {
            var pickerHTML = '';
            var pickerClass = '';
            var i;
            p.cols = [];
            var colsHTML = '';
            for (i = 0; i < p.params.cols.length; i++) {
                var col = p.params.cols[i];
                colsHTML += p.columnHTML(p.params.cols[i]);
                p.cols.push(col);
            }
            pickerClass = 'weui-picker-modal picker-columns ' + (p.params.cssClass || '') + (p.params.rotateEffect ? ' picker-3d' : '') + (p.params.cols.length === 1 ? ' picker-columns-single' : '');
            pickerHTML =
                '<div class="' + (pickerClass) + '">' +
                (p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText).replace(/{{title}}/g, p.params.title) : '') +
                '<div class="picker-modal-inner picker-items">' +
                colsHTML +
                '<div class="picker-center-highlight"></div>' +
                '</div>' +
                '</div>';

            p.pickerHTML = pickerHTML;
        };

        // Input Events
        function openOnInput(e) {
            e.preventDefault();
            if (p.opened) return;
            p.open();
            if (p.params.scrollToInput && !isPopover()) {
                var pageContent = p.input.parents('.content');
                if (pageContent.length === 0) return;

                var paddingTop = parseInt(pageContent.css('padding-top'), 10),
                    paddingBottom = parseInt(pageContent.css('padding-bottom'), 10),
                    pageHeight = pageContent[0].offsetHeight - paddingTop - p.container.height(),
                    pageScrollHeight = pageContent[0].scrollHeight - paddingTop - p.container.height(),
                    newPaddingBottom;
                var inputTop = p.input.offset().top - paddingTop + p.input[0].offsetHeight;
                if (inputTop > pageHeight) {
                    var scrollTop = pageContent.scrollTop() + inputTop - pageHeight;
                    if (scrollTop + pageHeight > pageScrollHeight) {
                        newPaddingBottom = scrollTop + pageHeight - pageScrollHeight + paddingBottom;
                        if (pageHeight === pageScrollHeight) {
                            newPaddingBottom = p.container.height();
                        }
                        pageContent.css({'padding-bottom': (newPaddingBottom) + 'px'});
                    }
                    pageContent.scrollTop(scrollTop, 300);
                }
            }
        }

        function closeOnHTMLClick(e) {
            if (inPopover()) return;
            if (p.input && p.input.length > 0) {
                if (e.target !== p.input[0] && $(e.target).parents('.weui-picker-modal').length === 0) p.close();
            } else {
                if ($(e.target).parents('.weui-picker-modal').length === 0) p.close();
            }
        }

        if (p.params.input) {
            p.input = $(p.params.input);
            if (p.input.length > 0) {
                if (p.params.inputReadOnly) p.input.prop('readOnly', true);
                if (!p.inline) {
                    p.input.on('click', openOnInput);
                }
                if (p.params.inputReadOnly) {
                    p.input.on('focus mousedown', function (e) {
                        e.preventDefault();
                    });
                }
            }

        }

        if (!p.inline) $('html').on('click', closeOnHTMLClick);

        // Open
        function onPickerClose() {
            p.opened = false;
            if (p.input && p.input.length > 0) p.input.parents('.page-content').css({'padding-bottom': ''});
            if (p.params.onClose) p.params.onClose(p);

            // Destroy events
            p.container.find('.picker-items-col').each(function () {
                p.destroyPickerCol(this);
            });
        }

        p.opened = false;
        p.open = function () {
            var toPopover = isPopover();

            if (!p.opened) {

                // Layout
                p.layout();

                // Append
                if (toPopover) {
                    p.pickerHTML = '<div class="popover popover-picker-columns"><div class="popover-inner">' + p.pickerHTML + '</div></div>';
                    p.popover = $.popover(p.pickerHTML, p.params.input, true);
                    p.container = $(p.popover).find('.weui-picker-modal');
                    $(p.popover).on('close', function () {
                        onPickerClose();
                    });
                } else if (p.inline) {
                    p.container = $(p.pickerHTML);
                    p.container.addClass('picker-modal-inline');
                    $(p.params.container).append(p.container);
                } else {
                    p.container = $($.openPicker(p.pickerHTML));
                    $(p.container)
                        .on('close', function () {
                            onPickerClose();
                        });
                }

                // Store picker instance
                p.container[0].f7Picker = p;

                // Init Events
                p.container.find('.picker-items-col').each(function () {
                    var updateItems = true;
                    if ((!p.initialized && p.params.value) || (p.initialized && p.value)) updateItems = false;
                    p.initPickerCol(this, updateItems);
                });

                // Set value
                if (!p.initialized) {
                    if (p.params.value) {
                        p.setValue(p.params.value, 0);
                    }
                } else {
                    if (p.value) p.setValue(p.value, 0);
                }
            }

            // Set flag
            p.opened = true;
            p.initialized = true;

            if (p.params.onOpen) p.params.onOpen(p);
        };

        // Close
        p.close = function (force) {
            if (!p.opened || p.inline) return;
            if (inPopover()) {
                $.closePicker(p.popover);
                return;
            } else {
                $.closePicker(p.container);
                return;
            }
        };

        // Destroy
        p.destroy = function () {
            p.close();
            if (p.params.input && p.input.length > 0) {
                p.input.off('click focus', openOnInput);
                $(p.input).data('picker', null);
            }
            $('html').off('click', closeOnHTMLClick);
            $(window).off('resize', resizeCols);
        };

        if (p.inline) {
            p.open();
        }

        return p;
    };

    $(document).on("click", ".close-picker", function () {
        var pickerToClose = $('.weui-picker-modal.weui-picker-modal-visible');
        if (pickerToClose.length > 0) {
            $.closePicker(pickerToClose);
        }
    });

    //修复picker会滚动页面的bug
    $(document).on($.touchEvents.move, ".picker-modal-inner", function (e) {
        e.preventDefault();
    });


    $.openPicker = function (tpl, className, callback) {

        if (typeof className === "function") {
            callback = className;
            className = undefined;
        }

        $.closePicker();

        var container = $("<div class='weui-picker-container " + (className || "") + "'></div>").appendTo(document.body);
        container.show();

        container.addClass("weui-picker-container-visible");

        //关于布局的问题，如果直接放在body上，则做动画的时候会撑开body高度而导致滚动条变化。
        var dialog = $(tpl).appendTo(container);

        dialog.width(); //通过取一次CSS值，强制浏览器不能把上下两行代码合并执行，因为合并之后会导致无法出现动画。

        dialog.addClass("weui-picker-modal-visible");

        callback && container.on("close", callback);

        return dialog;
    }

    $.updatePicker = function (tpl) {
        var container = $(".weui-picker-container-visible");
        if (!container[0]) return false;

        container.html("");

        var dialog = $(tpl).appendTo(container);

        dialog.addClass("weui-picker-modal-visible");

        return dialog;
    }

    $.closePicker = function (container, callback) {
        if (typeof container === "function") callback = container;
        $(".weui-picker-modal-visible").removeClass("weui-picker-modal-visible").transitionEnd(function () {
            $(this).parent().remove();
            callback && callback();
        }).trigger("close");
    };

    $.fn.picker = function (params) {
        var args = arguments;
        return this.each(function () {
            if (!this) return;
            var $this = $(this);

            var picker = $this.data("picker");
            if (!picker) {
                params = $.extend({input: this}, params || {}) // https://github.com/lihongxun945/jquery-weui/issues/432
                var inputValue = $this.val();
                if (params.value === undefined && inputValue !== "") {
                    params.value = (params.cols && params.cols.length > 1) ? inputValue.split(" ") : [inputValue];
                }
                var p = $.extend({input: this}, params);
                picker = new Picker(p);
                $this.data("picker", picker);
            }
            if (typeof params === typeof "a") {
                picker[params].apply(picker, Array.prototype.slice.call(args, 1));
            }
        });
    };
}($);

/* global $:true */
+function ($) {
    "use strict";

    var defaults;

    var selects = [];

    var Select = function (input, config) {

        var self = this;
        this.config = config;

        //init empty data
        this.data = {
            values: '',
            titles: '',
            origins: [],
            length: 0
        };

        this.$input = $(input);
        this.$input.prop("readOnly", true);

        this.initConfig();

        config = this.config;

        this.$input.click($.proxy(this.open, this));
        selects.push(this)
    }

    Select.prototype.initConfig = function () {
        this.config = $.extend({}, defaults, this.config);

        var config = this.config;

        if (!config.items || !config.items.length) return;

        config.items = config.items.map(function (d, i) {
            if (typeof d == typeof "a") {
                return {
                    title: d,
                    value: d
                };
            }

            return d;
        });


        this.tpl = $.t7.compile("<div class='weui-picker-modal weui-select-modal'>" + config.toolbarTemplate + (config.multi ? config.checkboxTemplate : config.radioTemplate) + "</div>");

        if (config.input !== undefined) this.$input.val(config.input);

        this.parseInitValue();

        this._init = true;
    }

    Select.prototype.updateInputValue = function (values, titles) {
        var v, t;
        if (this.config.multi) {
            v = values.join(this.config.split);
            t = titles.join(this.config.split);
        } else {
            v = values[0];
            t = titles[0];
        }

        //caculate origin data
        var origins = [];

        this.config.items.forEach(function (d) {
            values.each(function (i, dd) {
                if (d.value == dd) origins.push(d);
            });
        });

        this.$input.val(t).data("values", v);
        this.$input.attr("value", t).attr("data-values", v);

        var data = {
            values: v,
            titles: t,
            valuesArray: values,
            titlesArray: titles,
            origins: origins,
            length: origins.length
        };
        this.data = data;
        this.$input.trigger("change", data);
        this.config.onChange && this.config.onChange.call(this, data);
    }

    Select.prototype.parseInitValue = function () {
        var value = this.$input.val();
        var items = this.config.items;

        //如果input为空，只有在第一次初始化的时候才保留默认选择。因为后来就是用户自己取消了全部选择，不能再为他选中默认值。
        if (!this._init && (value === undefined || value == null || value === "")) return;

        var titles = this.config.multi ? value.split(this.config.split) : [value];
        for (var i = 0; i < items.length; i++) {
            items[i].checked = false;
            for (var j = 0; j < titles.length; j++) {
                if (items[i].title === titles[j]) {
                    items[i].checked = true;
                }
            }
        }
    }

    Select.prototype._bind = function (dialog) {
        var self = this,
            config = this.config;
        dialog.on("change", function (e) {
            var checked = dialog.find("input:checked");
            var values = checked.map(function () {
                return $(this).val();
            });
            var titles = checked.map(function () {
                return $(this).data("title");
            });
            self.updateInputValue(values, titles);

            if (config.autoClose && !config.multi) self.close();
        })
            .on("click", ".close-select", function () {
                self.close();
            });
    }

    //更新数据
    Select.prototype.update = function (config) {
        this.config = $.extend({}, this.config, config);
        this.initConfig();
        if (this._open) {
            this._bind($.updatePicker(this.getHTML()));
        }
    }

    Select.prototype.open = function (values, titles) {

        if (this._open) return;

        // open picker 会默认关掉其他的，但是 onClose 不会被调用，所以这里先关掉其他select
        for (var i = 0; i < selects.length; i++) {
            var s = selects[i];
            if (s === this) continue;
            if (s._open) {
                if (!s.close()) return false; // 其他的select由于某些条件限制关闭失败。
            }
        }

        this.parseInitValue();

        var config = this.config;

        var dialog = this.dialog = $.openPicker(this.getHTML());

        this._bind(dialog);

        this._open = true;
        if (config.onOpen) config.onOpen(this);
    }

    Select.prototype.close = function (callback, force) {
        if (!this._open) return false;
        var self = this,
            beforeClose = this.config.beforeClose;

        if (typeof callback === typeof true) {
            force === callback;
        }
        if (!force) {
            if (beforeClose && typeof beforeClose === 'function' && beforeClose.call(this, this.data.values, this.data.titles) === false) {
                return false
            }
            if (this.config.multi) {
                if (this.config.min !== undefined && this.data.length < this.config.min) {
                    $.toast("请至少选择" + this.config.min + "个", "text");
                    return false
                }
                if (this.config.max !== undefined && this.data.length > this.config.max) {
                    $.toast("最多只能选择" + this.config.max + "个", "text");
                    return false
                }
            }
        }
        $.closePicker(function () {
            self.onClose();
            callback && callback();
        });

        return true
    }

    Select.prototype.onClose = function () {
        this._open = false;
        if (this.config.onClose) this.config.onClose(this);
    }

    Select.prototype.getHTML = function (callback) {
        var config = this.config;
        return this.tpl({
            items: config.items,
            title: config.title,
            closeText: config.closeText
        })
    }


    $.fn.select = function (params, args) {

        return this.each(function () {
            var $this = $(this);
            if (!$this.data("weui-select")) $this.data("weui-select", new Select(this, params));

            var select = $this.data("weui-select");

            if (typeof params === typeof "a") select[params].call(select, args);

            return select;
        });
    }

    defaults = $.fn.select.prototype.defaults = {
        items: [],
        input: undefined, //输入框的初始值
        title: _PLEASE_SELECT_,
        multi: false,
        closeText: _CONFIRM_,
        autoClose: true, //是否选择完成后自动关闭，只有单选模式下才有效
        onChange: undefined, //function
        beforeClose: undefined, // function 关闭之前，如果返回false则阻止关闭
        onClose: undefined, //function
        onOpen: undefined, //function
        split: ",",  //多选模式下的分隔符
        min: undefined, //多选模式下可用，最少选择数
        max: undefined, //单选模式下可用，最多选择数
        toolbarTemplate: '<div class="toolbar">\
      <div class="toolbar-inner">\
      <a href="javascript:;" class="picker-button close-select">{{closeText}}</a>\
      <h1 class="title">{{title}}</h1>\
      </div>\
      </div>',
        radioTemplate:
            '<div class="weui-cells weui-cells_radio">\
              {{#items}}\
              <label class="weui-cell weui-check_label" for="weui-select-id-{{this.title}}">\
                <div class="weui-cell__bd weui-cell_primary">\
                  <p>{{this.title}}</p>\
                </div>\
                <div class="weui-cell__ft">\
                  <input type="radio" class="weui-check" name="weui-select" id="weui-select-id-{{this.title}}" value="{{this.value}}" {{#if this.checked}}checked="checked"{{/if}} data-title="{{this.title}}">\
                  <span class="weui-icon-checked"></span>\
                </div>\
              </label>\
              {{/items}}\
            </div>',
        checkboxTemplate:
            '<div class="weui-cells weui-cells_checkbox">\
              {{#items}}\
              <label class="weui-cell weui-check_label" for="weui-select-id-{{this.title}}">\
                <div class="weui-cell__bd weui-cell_primary">\
                  <p>{{this.title}}</p>\
                </div>\
                <div class="weui-cell__ft">\
                  <input type="checkbox" class="weui-check" name="weui-select" id="weui-select-id-{{this.title}}" value="{{this.value}}" {{#if this.checked}}checked="checked"{{/if}} data-title="{{this.title}}" >\
                  <span class="weui-icon-checked"></span>\
                </div>\
              </label>\
              {{/items}}\
            </div>',
    }

}($);

/*======================================================
************   Calendar   ************
======================================================*/
/* global $:true */
/*jshint unused: false*/
+function ($) {
    "use strict";
    var rtl = false;
    var defaults;
    var isSameDate = function (a, b) {
        var a = new Date(a),
            b = new Date(b);
        return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
    }
    var Calendar = function (params) {
        var p = this;
        params = params || {};
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
        }
        p.params = params;
        p.initialized = false;

        // Inline flag
        p.inline = p.params.container ? true : false;

        // Is horizontal
        p.isH = p.params.direction === 'horizontal';

        // RTL inverter
        var inverter = p.isH ? (rtl ? -1 : 1) : 1;

        // Animating flag
        p.animating = false;

        // Should be converted to popover
        function isPopover() {
            var toPopover = false;
            if (!p.params.convertToPopover && !p.params.onlyInPopover) return toPopover;
            if (!p.inline && p.params.input) {
                if (p.params.onlyInPopover) toPopover = true;
                else {
                    if ($.device.ios) {
                        toPopover = $.device.ipad ? true : false;
                    } else {
                        if ($(window).width() >= 768) toPopover = true;
                    }
                }
            }
            return toPopover;
        }

        function inPopover() {
            if (p.opened && p.container && p.container.length > 0 && p.container.parents('.popover').length > 0) return true;
            else return false;
        }

        // Format date
        function formatDate(date) {
            date = new Date(date);
            var year = date.getFullYear();
            var month = date.getMonth();
            var month1 = month + 1;
            var day = date.getDate();
            var weekDay = date.getDay();
            return p.params.dateFormat
                .replace(/yyyy/g, year)
                .replace(/yy/g, (year + '').substring(2))
                .replace(/mm/g, month1 < 10 ? '0' + month1 : month1)
                .replace(/m/g, month1)
                .replace(/MM/g, p.params.monthNames[month])
                .replace(/M/g, p.params.monthNamesShort[month])
                .replace(/dd/g, day < 10 ? '0' + day : day)
                .replace(/d/g, day)
                .replace(/DD/g, p.params.dayNames[weekDay])
                .replace(/D/g, p.params.dayNamesShort[weekDay]);
        }


        // Value
        p.addValue = function (value) {
            if (p.params.multiple) {
                if (!p.value) p.value = [];
                var inValuesIndex;
                for (var i = 0; i < p.value.length; i++) {
                    if (isSameDate(value, p.value[i])) {
                        inValuesIndex = i;
                    }
                }
                if (typeof inValuesIndex === 'undefined') {
                    p.value.push(value);
                } else {
                    p.value.splice(inValuesIndex, 1);
                }
                p.updateValue();
            } else {
                p.value = [value];
                p.updateValue();
            }
        };
        p.setValue = function (arrValues) {
            var date = new Date(arrValues[0]);
            p.setYearMonth(date.getFullYear(), date.getMonth());
            p.addValue(+date);
        };
        p.updateValue = function () {
            p.wrapper.find('.picker-calendar-day-selected').removeClass('picker-calendar-day-selected');
            var i, inputValue;
            for (i = 0; i < p.value.length; i++) {
                var valueDate = new Date(p.value[i]);
                p.wrapper.find('.picker-calendar-day[data-date="' + valueDate.getFullYear() + '-' + valueDate.getMonth() + '-' + valueDate.getDate() + '"]').addClass('picker-calendar-day-selected');
            }
            if (p.params.onChange) {
                p.params.onChange(p, p.value.map(formatDate), p.value.map(function (d) {
                    return +new Date(typeof d === typeof 'a' ? d.split(/\D/).filter(function (a) {
                        return !!a;
                    }).join("-") : d);
                }));
            }
            if (p.input && p.input.length > 0) {
                if (p.params.formatValue) inputValue = p.params.formatValue(p, p.value);
                else {
                    inputValue = [];
                    for (i = 0; i < p.value.length; i++) {
                        inputValue.push(formatDate(p.value[i]));
                    }
                    inputValue = inputValue.join(', ');
                }
                $(p.input).val(inputValue);
                $(p.input).trigger('change');
            }
        };

        // Columns Handlers
        p.initCalendarEvents = function () {
            var col;
            var allowItemClick = true;
            var isTouched, isMoved, touchStartX, touchStartY, touchCurrentX, touchCurrentY, touchStartTime,
                touchEndTime, startTranslate, currentTranslate, wrapperWidth, wrapperHeight, percentage, touchesDiff,
                isScrolling;

            function handleTouchStart(e) {
                if (isMoved || isTouched) return;
                // e.preventDefault();
                isTouched = true;
                var position = $.getTouchPosition(e);
                touchStartX = touchCurrentY = position.x;
                touchStartY = touchCurrentY = position.y;
                touchStartTime = (new Date()).getTime();
                percentage = 0;
                allowItemClick = true;
                isScrolling = undefined;
                startTranslate = currentTranslate = p.monthsTranslate;
            }

            function handleTouchMove(e) {
                if (!isTouched) return;
                var position = $.getTouchPosition(e);
                touchCurrentX = position.x;
                touchCurrentY = position.y;
                if (typeof isScrolling === 'undefined') {
                    isScrolling = !!(isScrolling || Math.abs(touchCurrentY - touchStartY) > Math.abs(touchCurrentX - touchStartX));
                }
                if (p.isH && isScrolling) {
                    isTouched = false;
                    return;
                }
                e.preventDefault();
                if (p.animating) {
                    isTouched = false;
                    return;
                }
                allowItemClick = false;
                if (!isMoved) {
                    // First move
                    isMoved = true;
                    wrapperWidth = p.wrapper[0].offsetWidth;
                    wrapperHeight = p.wrapper[0].offsetHeight;
                    p.wrapper.transition(0);
                }
                e.preventDefault();

                touchesDiff = p.isH ? touchCurrentX - touchStartX : touchCurrentY - touchStartY;
                percentage = touchesDiff / (p.isH ? wrapperWidth : wrapperHeight);
                currentTranslate = (p.monthsTranslate * inverter + percentage) * 100;

                // Transform wrapper
                p.wrapper.transform('translate3d(' + (p.isH ? currentTranslate : 0) + '%, ' + (p.isH ? 0 : currentTranslate) + '%, 0)');

            }

            function handleTouchEnd(e) {
                if (!isTouched || !isMoved) {
                    isTouched = isMoved = false;
                    return;
                }
                isTouched = isMoved = false;

                touchEndTime = new Date().getTime();
                if (touchEndTime - touchStartTime < 300) {
                    if (Math.abs(touchesDiff) < 10) {
                        p.resetMonth();
                    } else if (touchesDiff >= 10) {
                        if (rtl) p.nextMonth();
                        else p.prevMonth();
                    } else {
                        if (rtl) p.prevMonth();
                        else p.nextMonth();
                    }
                } else {
                    if (percentage <= -0.5) {
                        if (rtl) p.prevMonth();
                        else p.nextMonth();
                    } else if (percentage >= 0.5) {
                        if (rtl) p.nextMonth();
                        else p.prevMonth();
                    } else {
                        p.resetMonth();
                    }
                }

                // Allow click
                setTimeout(function () {
                    allowItemClick = true;
                }, 100);
            }

            function handleDayClick(e) {
                if (!allowItemClick) return;
                var day = $(e.target).parents('.picker-calendar-day');
                if (day.length === 0 && $(e.target).hasClass('picker-calendar-day')) {
                    day = $(e.target);
                }
                if (day.length === 0) return;
                // if (day.hasClass('picker-calendar-day-selected') && !p.params.multiple) return;
                if (day.hasClass('picker-calendar-day-disabled')) return;
                if (day.hasClass('picker-calendar-day-next')) p.nextMonth();
                if (day.hasClass('picker-calendar-day-prev')) p.prevMonth();
                var dateYear = day.attr('data-year');
                var dateMonth = day.attr('data-month');
                var dateDay = day.attr('data-day');
                if (p.params.onDayClick) {
                    p.params.onDayClick(p, day[0], dateYear, dateMonth, dateDay);
                }
                p.addValue(new Date(dateYear, dateMonth, dateDay).getTime());
                if (p.params.closeOnSelect && !p.params.multiple) p.close();
            }

            p.container.find('.picker-calendar-prev-month').on('click', p.prevMonth);
            p.container.find('.picker-calendar-next-month').on('click', p.nextMonth);
            p.container.find('.picker-calendar-prev-year').on('click', p.prevYear);
            p.container.find('.picker-calendar-next-year').on('click', p.nextYear);
            p.wrapper.on('click', handleDayClick);
            if (p.params.touchMove) {
                p.wrapper.on($.touchEvents.start, handleTouchStart);
                p.wrapper.on($.touchEvents.move, handleTouchMove);
                p.wrapper.on($.touchEvents.end, handleTouchEnd);
            }

            p.container[0].f7DestroyCalendarEvents = function () {
                p.container.find('.picker-calendar-prev-month').off('click', p.prevMonth);
                p.container.find('.picker-calendar-next-month').off('click', p.nextMonth);
                p.container.find('.picker-calendar-prev-year').off('click', p.prevYear);
                p.container.find('.picker-calendar-next-year').off('click', p.nextYear);
                p.wrapper.off('click', handleDayClick);
                if (p.params.touchMove) {
                    p.wrapper.off($.touchEvents.start, handleTouchStart);
                    p.wrapper.off($.touchEvents.move, handleTouchMove);
                    p.wrapper.off($.touchEvents.end, handleTouchEnd);
                }
            };


        };
        p.destroyCalendarEvents = function (colContainer) {
            if ('f7DestroyCalendarEvents' in p.container[0]) p.container[0].f7DestroyCalendarEvents();
        };

        // Calendar Methods
        p.daysInMonth = function (date) {
            var d = new Date(date);
            return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        };
        p.monthHTML = function (date, offset) {
            date = new Date(date);
            var year = date.getFullYear(),
                month = date.getMonth(),
                day = date.getDate();
            if (offset === 'next') {
                if (month === 11) date = new Date(year + 1, 0);
                else date = new Date(year, month + 1, 1);
            }
            if (offset === 'prev') {
                if (month === 0) date = new Date(year - 1, 11);
                else date = new Date(year, month - 1, 1);
            }
            if (offset === 'next' || offset === 'prev') {
                month = date.getMonth();
                year = date.getFullYear();
            }
            var daysInPrevMonth = p.daysInMonth(new Date(date.getFullYear(), date.getMonth()).getTime() - 10 * 24 * 60 * 60 * 1000),
                daysInMonth = p.daysInMonth(date),
                firstDayOfMonthIndex = new Date(date.getFullYear(), date.getMonth()).getDay();
            if (firstDayOfMonthIndex === 0) firstDayOfMonthIndex = 7;

            var dayDate, currentValues = [], i, j,
                rows = 6, cols = 7,
                monthHTML = '',
                dayIndex = 0 + (p.params.firstDay - 1),
                today = new Date().setHours(0, 0, 0, 0),
                minDate = p.params.minDate ? new Date(p.params.minDate).getTime() : null,
                maxDate = p.params.maxDate ? new Date(p.params.maxDate).getTime() : null;

            if (p.value && p.value.length) {
                for (i = 0; i < p.value.length; i++) {
                    currentValues.push(new Date(p.value[i]).setHours(0, 0, 0, 0));
                }
            }

            for (i = 1; i <= rows; i++) {
                var rowHTML = '';
                var row = i;
                for (j = 1; j <= cols; j++) {
                    var col = j;
                    dayIndex++;
                    var dayNumber = dayIndex - firstDayOfMonthIndex;
                    var addClass = '';
                    if (dayNumber < 0) {
                        dayNumber = daysInPrevMonth + dayNumber + 1;
                        addClass += ' picker-calendar-day-prev';
                        dayDate = new Date(month - 1 < 0 ? year - 1 : year, month - 1 < 0 ? 11 : month - 1, dayNumber).getTime();
                    } else {
                        dayNumber = dayNumber + 1;
                        if (dayNumber > daysInMonth) {
                            dayNumber = dayNumber - daysInMonth;
                            addClass += ' picker-calendar-day-next';
                            dayDate = new Date(month + 1 > 11 ? year + 1 : year, month + 1 > 11 ? 0 : month + 1, dayNumber).getTime();
                        } else {
                            dayDate = new Date(year, month, dayNumber).getTime();
                        }
                    }
                    // Today
                    if (dayDate === today) addClass += ' picker-calendar-day-today';
                    // Selected
                    if (currentValues.indexOf(dayDate) >= 0) addClass += ' picker-calendar-day-selected';
                    // Weekend
                    if (p.params.weekendDays.indexOf(col - 1) >= 0) {
                        addClass += ' picker-calendar-day-weekend';
                    }
                    // Disabled
                    if ((minDate && dayDate < minDate) || (maxDate && dayDate > maxDate)) {
                        addClass += ' picker-calendar-day-disabled';
                    }

                    dayDate = new Date(dayDate);
                    var dayYear = dayDate.getFullYear();
                    var dayMonth = dayDate.getMonth();
                    rowHTML += '<div data-year="' + dayYear + '" data-month="' + dayMonth + '" data-day="' + dayNumber + '" class="picker-calendar-day' + (addClass) + '" data-date="' + (dayYear + '-' + dayMonth + '-' + dayNumber) + '"><span>' + dayNumber + '</span></div>';
                }
                monthHTML += '<div class="picker-calendar-row">' + rowHTML + '</div>';
            }
            monthHTML = '<div class="picker-calendar-month" data-year="' + year + '" data-month="' + month + '">' + monthHTML + '</div>';
            return monthHTML;
        };
        p.animating = false;
        p.updateCurrentMonthYear = function (dir) {
            if (typeof dir === 'undefined') {
                p.currentMonth = parseInt(p.months.eq(1).attr('data-month'), 10);
                p.currentYear = parseInt(p.months.eq(1).attr('data-year'), 10);
            } else {
                p.currentMonth = parseInt(p.months.eq(dir === 'next' ? (p.months.length - 1) : 0).attr('data-month'), 10);
                p.currentYear = parseInt(p.months.eq(dir === 'next' ? (p.months.length - 1) : 0).attr('data-year'), 10);
            }
            p.container.find('.current-month-value').text(p.params.monthNames[p.currentMonth]);
            p.container.find('.current-year-value').text(p.currentYear);

        };
        p.onMonthChangeStart = function (dir) {
            p.updateCurrentMonthYear(dir);
            p.months.removeClass('picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next');
            var currentIndex = dir === 'next' ? p.months.length - 1 : 0;

            p.months.eq(currentIndex).addClass('picker-calendar-month-current');
            p.months.eq(dir === 'next' ? currentIndex - 1 : currentIndex + 1).addClass(dir === 'next' ? 'picker-calendar-month-prev' : 'picker-calendar-month-next');

            if (p.params.onMonthYearChangeStart) {
                p.params.onMonthYearChangeStart(p, p.currentYear, p.currentMonth);
            }
        };
        p.onMonthChangeEnd = function (dir, rebuildBoth) {
            p.animating = false;
            var nextMonthHTML, prevMonthHTML, newMonthHTML;
            p.wrapper.find('.picker-calendar-month:not(.picker-calendar-month-prev):not(.picker-calendar-month-current):not(.picker-calendar-month-next)').remove();

            if (typeof dir === 'undefined') {
                dir = 'next';
                rebuildBoth = true;
            }
            if (!rebuildBoth) {
                newMonthHTML = p.monthHTML(new Date(p.currentYear, p.currentMonth), dir);
            } else {
                p.wrapper.find('.picker-calendar-month-next, .picker-calendar-month-prev').remove();
                prevMonthHTML = p.monthHTML(new Date(p.currentYear, p.currentMonth), 'prev');
                nextMonthHTML = p.monthHTML(new Date(p.currentYear, p.currentMonth), 'next');
            }
            if (dir === 'next' || rebuildBoth) {
                p.wrapper.append(newMonthHTML || nextMonthHTML);
            }
            if (dir === 'prev' || rebuildBoth) {
                p.wrapper.prepend(newMonthHTML || prevMonthHTML);
            }
            p.months = p.wrapper.find('.picker-calendar-month');
            p.setMonthsTranslate(p.monthsTranslate);
            if (p.params.onMonthAdd) {
                p.params.onMonthAdd(p, dir === 'next' ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]);
            }
            if (p.params.onMonthYearChangeEnd) {
                p.params.onMonthYearChangeEnd(p, p.currentYear, p.currentMonth);
            }
        };
        p.setMonthsTranslate = function (translate) {
            translate = translate || p.monthsTranslate || 0;
            if (typeof p.monthsTranslate === 'undefined') p.monthsTranslate = translate;
            p.months.removeClass('picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next');
            var prevMonthTranslate = -(translate + 1) * 100 * inverter;
            var currentMonthTranslate = -translate * 100 * inverter;
            var nextMonthTranslate = -(translate - 1) * 100 * inverter;
            p.months.eq(0).transform('translate3d(' + (p.isH ? prevMonthTranslate : 0) + '%, ' + (p.isH ? 0 : prevMonthTranslate) + '%, 0)').addClass('picker-calendar-month-prev');
            p.months.eq(1).transform('translate3d(' + (p.isH ? currentMonthTranslate : 0) + '%, ' + (p.isH ? 0 : currentMonthTranslate) + '%, 0)').addClass('picker-calendar-month-current');
            p.months.eq(2).transform('translate3d(' + (p.isH ? nextMonthTranslate : 0) + '%, ' + (p.isH ? 0 : nextMonthTranslate) + '%, 0)').addClass('picker-calendar-month-next');
        };
        p.nextMonth = function (transition) {
            if (typeof transition === 'undefined' || typeof transition === 'object') {
                transition = '';
                if (!p.params.animate) transition = 0;
            }
            var nextMonth = parseInt(p.months.eq(p.months.length - 1).attr('data-month'), 10);
            var nextYear = parseInt(p.months.eq(p.months.length - 1).attr('data-year'), 10);
            var nextDate = new Date(nextYear, nextMonth);
            var nextDateTime = nextDate.getTime();
            var transitionEndCallback = p.animating ? false : true;
            if (p.params.maxDate) {
                if (nextDateTime > new Date(p.params.maxDate).getTime()) {
                    return p.resetMonth();
                }
            }
            p.monthsTranslate--;
            if (nextMonth === p.currentMonth) {
                var nextMonthTranslate = -(p.monthsTranslate) * 100 * inverter;
                var nextMonthHTML = $(p.monthHTML(nextDateTime, 'next')).transform('translate3d(' + (p.isH ? nextMonthTranslate : 0) + '%, ' + (p.isH ? 0 : nextMonthTranslate) + '%, 0)').addClass('picker-calendar-month-next');
                p.wrapper.append(nextMonthHTML[0]);
                p.months = p.wrapper.find('.picker-calendar-month');
                if (p.params.onMonthAdd) {
                    p.params.onMonthAdd(p, p.months.eq(p.months.length - 1)[0]);
                }
            }
            p.animating = true;
            p.onMonthChangeStart('next');
            var translate = (p.monthsTranslate * 100) * inverter;

            p.wrapper.transition(transition).transform('translate3d(' + (p.isH ? translate : 0) + '%, ' + (p.isH ? 0 : translate) + '%, 0)');
            if (transitionEndCallback) {
                p.wrapper.transitionEnd(function () {
                    p.onMonthChangeEnd('next');
                });
            }
            if (!p.params.animate) {
                p.onMonthChangeEnd('next');
            }
        };
        p.prevMonth = function (transition) {
            if (typeof transition === 'undefined' || typeof transition === 'object') {
                transition = '';
                if (!p.params.animate) transition = 0;
            }
            var prevMonth = parseInt(p.months.eq(0).attr('data-month'), 10);
            var prevYear = parseInt(p.months.eq(0).attr('data-year'), 10);
            var prevDate = new Date(prevYear, prevMonth + 1, -1);
            var prevDateTime = prevDate.getTime();
            var transitionEndCallback = p.animating ? false : true;
            if (p.params.minDate) {
                if (prevDateTime < new Date(p.params.minDate).getTime()) {
                    return p.resetMonth();
                }
            }
            p.monthsTranslate++;
            if (prevMonth === p.currentMonth) {
                var prevMonthTranslate = -(p.monthsTranslate) * 100 * inverter;
                var prevMonthHTML = $(p.monthHTML(prevDateTime, 'prev')).transform('translate3d(' + (p.isH ? prevMonthTranslate : 0) + '%, ' + (p.isH ? 0 : prevMonthTranslate) + '%, 0)').addClass('picker-calendar-month-prev');
                p.wrapper.prepend(prevMonthHTML[0]);
                p.months = p.wrapper.find('.picker-calendar-month');
                if (p.params.onMonthAdd) {
                    p.params.onMonthAdd(p, p.months.eq(0)[0]);
                }
            }
            p.animating = true;
            p.onMonthChangeStart('prev');
            var translate = (p.monthsTranslate * 100) * inverter;
            p.wrapper.transition(transition).transform('translate3d(' + (p.isH ? translate : 0) + '%, ' + (p.isH ? 0 : translate) + '%, 0)');
            if (transitionEndCallback) {
                p.wrapper.transitionEnd(function () {
                    p.onMonthChangeEnd('prev');
                });
            }
            if (!p.params.animate) {
                p.onMonthChangeEnd('prev');
            }
        };
        p.resetMonth = function (transition) {
            if (typeof transition === 'undefined') transition = '';
            var translate = (p.monthsTranslate * 100) * inverter;
            p.wrapper.transition(transition).transform('translate3d(' + (p.isH ? translate : 0) + '%, ' + (p.isH ? 0 : translate) + '%, 0)');
        };
        p.setYearMonth = function (year, month, transition) {
            if (typeof year === 'undefined') year = p.currentYear;
            if (typeof month === 'undefined') month = p.currentMonth;
            if (typeof transition === 'undefined' || typeof transition === 'object') {
                transition = '';
                if (!p.params.animate) transition = 0;
            }
            var targetDate;
            if (year < p.currentYear) {
                targetDate = new Date(year, month + 1, -1).getTime();
            } else {
                targetDate = new Date(year, month).getTime();
            }
            if (p.params.maxDate && targetDate > new Date(p.params.maxDate).getTime()) {
                return false;
            }
            if (p.params.minDate && targetDate < new Date(p.params.minDate).getTime()) {
                return false;
            }
            var currentDate = new Date(p.currentYear, p.currentMonth).getTime();
            var dir = targetDate > currentDate ? 'next' : 'prev';
            var newMonthHTML = p.monthHTML(new Date(year, month));
            p.monthsTranslate = p.monthsTranslate || 0;
            var prevTranslate = p.monthsTranslate;
            var monthTranslate, wrapperTranslate;
            var transitionEndCallback = p.animating ? false : true;
            if (targetDate > currentDate) {
                // To next
                p.monthsTranslate--;
                if (!p.animating) p.months.eq(p.months.length - 1).remove();
                p.wrapper.append(newMonthHTML);
                p.months = p.wrapper.find('.picker-calendar-month');
                monthTranslate = -(prevTranslate - 1) * 100 * inverter;
                p.months.eq(p.months.length - 1).transform('translate3d(' + (p.isH ? monthTranslate : 0) + '%, ' + (p.isH ? 0 : monthTranslate) + '%, 0)').addClass('picker-calendar-month-next');
            } else {
                // To prev
                p.monthsTranslate++;
                if (!p.animating) p.months.eq(0).remove();
                p.wrapper.prepend(newMonthHTML);
                p.months = p.wrapper.find('.picker-calendar-month');
                monthTranslate = -(prevTranslate + 1) * 100 * inverter;
                p.months.eq(0).transform('translate3d(' + (p.isH ? monthTranslate : 0) + '%, ' + (p.isH ? 0 : monthTranslate) + '%, 0)').addClass('picker-calendar-month-prev');
            }
            if (p.params.onMonthAdd) {
                p.params.onMonthAdd(p, dir === 'next' ? p.months.eq(p.months.length - 1)[0] : p.months.eq(0)[0]);
            }
            p.animating = true;
            p.onMonthChangeStart(dir);
            wrapperTranslate = (p.monthsTranslate * 100) * inverter;
            p.wrapper.transition(transition).transform('translate3d(' + (p.isH ? wrapperTranslate : 0) + '%, ' + (p.isH ? 0 : wrapperTranslate) + '%, 0)');
            if (transitionEndCallback) {
                p.wrapper.transitionEnd(function () {
                    p.onMonthChangeEnd(dir, true);
                });
            }
            if (!p.params.animate) {
                p.onMonthChangeEnd(dir);
            }
        };
        p.nextYear = function () {
            p.setYearMonth(p.currentYear + 1);
        };
        p.prevYear = function () {
            p.setYearMonth(p.currentYear - 1);
        };


        // HTML Layout
        p.layout = function () {
            var pickerHTML = '';
            var pickerClass = '';
            var i;

            var layoutDate = p.value && p.value.length ? p.value[0] : new Date().setHours(0, 0, 0, 0);
            var prevMonthHTML = p.monthHTML(layoutDate, 'prev');
            var currentMonthHTML = p.monthHTML(layoutDate);
            var nextMonthHTML = p.monthHTML(layoutDate, 'next');
            var monthsHTML = '<div class="picker-calendar-months"><div class="picker-calendar-months-wrapper">' + (prevMonthHTML + currentMonthHTML + nextMonthHTML) + '</div></div>';
            // Week days header
            var weekHeaderHTML = '';
            if (p.params.weekHeader) {
                for (i = 0; i < 7; i++) {
                    var weekDayIndex = (i + p.params.firstDay > 6) ? (i - 7 + p.params.firstDay) : (i + p.params.firstDay);
                    var dayName = p.params.dayNamesShort[weekDayIndex];
                    weekHeaderHTML += '<div class="picker-calendar-week-day ' + ((p.params.weekendDays.indexOf(weekDayIndex) >= 0) ? 'picker-calendar-week-day-weekend' : '') + '"> ' + dayName + '</div>';

                }
                weekHeaderHTML = '<div class="picker-calendar-week-days">' + weekHeaderHTML + '</div>';
            }
            pickerClass = 'weui-picker-calendar ' + (p.params.cssClass || '');
            if (!p.inline) pickerClass = 'weui-picker-modal ' + pickerClass;
            var toolbarHTML = p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : '';
            if (p.params.toolbar) {
                toolbarHTML = p.params.toolbarTemplate
                    .replace(/{{closeText}}/g, p.params.toolbarCloseText)
                    .replace(/{{monthPicker}}/g, (p.params.monthPicker ? p.params.monthPickerTemplate : ''))
                    .replace(/{{yearPicker}}/g, (p.params.yearPicker ? p.params.yearPickerTemplate : ''));
            }

            pickerHTML =
                '<div class="' + (pickerClass) + '">' +
                toolbarHTML +
                '<div class="picker-modal-inner">' +
                weekHeaderHTML +
                monthsHTML +
                '</div>' +
                '</div>';


            p.pickerHTML = pickerHTML;
        };

        // Input Events
        function openOnInput(e) {
            e.preventDefault();
            if (p.opened) return;
            p.open();
            if (p.params.scrollToInput && !isPopover()) {
                var pageContent = p.input.parents('.page-content');
                if (pageContent.length === 0) return;

                var paddingTop = parseInt(pageContent.css('padding-top'), 10),
                    paddingBottom = parseInt(pageContent.css('padding-bottom'), 10),
                    pageHeight = pageContent[0].offsetHeight - paddingTop - p.container.height(),
                    pageScrollHeight = pageContent[0].scrollHeight - paddingTop - p.container.height(),
                    newPaddingBottom;

                var inputTop = p.input.offset().top - paddingTop + p.input[0].offsetHeight;
                if (inputTop > pageHeight) {
                    var scrollTop = pageContent.scrollTop() + inputTop - pageHeight;
                    if (scrollTop + pageHeight > pageScrollHeight) {
                        newPaddingBottom = scrollTop + pageHeight - pageScrollHeight + paddingBottom;
                        if (pageHeight === pageScrollHeight) {
                            newPaddingBottom = p.container.height();
                        }
                        pageContent.css({'padding-bottom': (newPaddingBottom) + 'px'});
                    }
                    pageContent.scrollTop(scrollTop, 300);
                }
            }
        }

        function closeOnHTMLClick(e) {
            if (inPopover()) return;
            if (p.input && p.input.length > 0) {
                if (e.target !== p.input[0] && $(e.target).parents('.weui-picker-modal').length === 0) p.close();
            } else {
                if ($(e.target).parents('.weui-picker-modal').length === 0) p.close();
            }
        }

        if (p.params.input) {
            p.input = $(p.params.input);
            if (p.input.length > 0) {
                if (p.params.inputReadOnly) p.input.prop('readOnly', true);
                if (!p.inline) {
                    p.input.on('click', openOnInput);
                }
                if (p.params.inputReadOnly) {
                    p.input.on('focus mousedown', function (e) {
                        e.preventDefault();
                    });
                }
            }

        }

        //iphone 上无法正确触发 click，会导致点击外面无法关闭
        if (!p.inline) $(document).on('click touchend', closeOnHTMLClick);

        // Open
        function onPickerClose() {
            p.opened = false;
            if (p.input && p.input.length > 0) p.input.parents('.page-content').css({'padding-bottom': ''});
            if (p.params.onClose) p.params.onClose(p);

            // Destroy events
            p.destroyCalendarEvents();
        }

        p.opened = false;
        p.open = function () {
            var toPopover = isPopover() && false;
            var updateValue = false;
            if (!p.opened) {
                // Set date value
                if (!p.value) {
                    if (p.params.value) {
                        p.value = p.params.value;
                        updateValue = true;
                    }
                }

                // Layout
                p.layout();

                // Append
                if (toPopover) {
                    p.pickerHTML = '<div class="popover popover-picker-calendar"><div class="popover-inner">' + p.pickerHTML + '</div></div>';
                    p.popover = $.popover(p.pickerHTML, p.params.input, true);
                    p.container = $(p.popover).find('.weui-picker-modal');
                    $(p.popover).on('close', function () {
                        onPickerClose();
                    });
                } else if (p.inline) {
                    p.container = $(p.pickerHTML);
                    p.container.addClass('picker-modal-inline');
                    $(p.params.container).append(p.container);
                } else {
                    p.container = $($.openPicker(p.pickerHTML));
                    $(p.container)
                        .on('close', function () {
                            onPickerClose();
                        });
                }

                // Store calendar instance
                p.container[0].f7Calendar = p;
                p.wrapper = p.container.find('.picker-calendar-months-wrapper');

                // Months
                p.months = p.wrapper.find('.picker-calendar-month');

                // Update current month and year
                p.updateCurrentMonthYear();

                // Set initial translate
                p.monthsTranslate = 0;
                p.setMonthsTranslate();

                // Init events
                p.initCalendarEvents();

                // Update input value
                if (updateValue) p.updateValue();

            }

            // Set flag
            p.opened = true;
            p.initialized = true;
            if (p.params.onMonthAdd) {
                p.months.each(function () {
                    p.params.onMonthAdd(p, this);
                });
            }
            if (p.params.onOpen) p.params.onOpen(p);
        };

        // Close
        p.close = function () {
            if (!p.opened || p.inline) return;
            p.animating = false;  //有可能还有动画没做完，因此animating设置还没改。
            if (inPopover()) {
                $.closePicker(p.popover);
                return;
            } else {
                $.closePicker(p.container);
                return;
            }
        };

        // Destroy
        p.destroy = function () {
            p.close();
            if (p.params.input && p.input.length > 0) {
                p.input.off('click focus', openOnInput);
                p.input.data("calendar", null);
            }
            $('html').off('click', closeOnHTMLClick);
        };

        if (p.inline) {
            p.open();
        }

        return p;
    };

    var format = function (d) {
        return d < 10 ? "0" + d : d;
    }


    $.fn.calendar = function (params, args) {
        params = params || {};
        return this.each(function () {
            var $this = $(this);
            if (!$this[0]) return;
            var p = {};
            if ($this[0].tagName.toUpperCase() === "INPUT") {
                p.input = $this;
            } else {
                p.container = $this;
            }

            var calendar = $this.data("calendar");

            if (!calendar) {
                if (typeof params === typeof "a") {
                } else {
                    if (!params.value && $this.val()) params.value = [$this.val()];
                    //默认显示今天
                    if (!params.value) {
                        var today = new Date();
                        params.value = [today.getFullYear() + "/" + format(today.getMonth() + 1) + "/" + format(today.getDate())];
                    }
                    calendar = $this.data("calendar", new Calendar($.extend(p, params)));
                }
            }

            if (typeof params === typeof "a") {
                calendar[params].call(calendar, args);
            }
        });
    };

    defaults = $.fn.calendar.prototype.defaults = {
        value: undefined, // 通过JS赋值，注意是数组
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        firstDay: 1, // First day of the week, Monday
        weekendDays: [0, 6], // Sunday and Saturday
        multiple: false,
        dateFormat: 'yyyy/mm/dd',
        direction: 'horizontal', // or 'vertical'
        minDate: null,
        maxDate: null,
        touchMove: true,
        animate: true,
        closeOnSelect: true,
        monthPicker: true,
        monthPickerTemplate:
            '<div class="picker-calendar-month-picker">' +
            '<a href="javascript:;" class="link icon-only picker-calendar-prev-month"><i class="icon icon-prev"></i></a>' +
            '<div class="current-month-value"></div>' +
            '<a href="javascript:;" class="link icon-only picker-calendar-next-month"><i class="icon icon-next"></i></a>' +
            '</div>',
        yearPicker: true,
        yearPickerTemplate:
            '<div class="picker-calendar-year-picker">' +
            '<a href="javascript:;" class="link icon-only picker-calendar-prev-year"><i class="icon icon-prev"></i></a>' +
            '<span class="current-year-value"></span>' +
            '<a href="javascript:;" class="link icon-only picker-calendar-next-year"><i class="icon icon-next"></i></a>' +
            '</div>',
        weekHeader: true,
        // Common settings
        scrollToInput: true,
        inputReadOnly: true,
        convertToPopover: true,
        onlyInPopover: false,
        toolbar: true,
        toolbarCloseText: 'Done',
        toolbarTemplate:
            '<div class="toolbar">' +
            '<div class="toolbar-inner">' +
            '{{yearPicker}}' +
            '{{monthPicker}}' +
            // '<a href="#" class="link close-picker">{{closeText}}</a>' +
            '</div>' +
            '</div>',
        /* Callbacks
    onMonthAdd
    onChange
    onOpen
    onClose
    onDayClick
    onMonthYearChangeStart
    onMonthYearChangeEnd
    */
    };

}($);

/* global $:true */
/* jshint unused:false*/

+function ($) {
    "use strict";


    var defaults;

    var formatNumber = function (n) {
        return n < 10 ? "0" + n : n;
    }

    var Datetime = function (input, params) {
        this.input = $(input);
        this.params = params || {};

        this.initMonthes = params.monthes

        this.initYears = params.years

        var p = $.extend({}, params, this.getConfig());
        $(this.input).picker(p);
    }

    Datetime.prototype = {
        getDays: function (max) {
            var days = [];
            for (var i = 1; i <= (max || 31); i++) {
                days.push(i < 10 ? "0" + i : i);
            }
            return days;
        },

        getDaysByMonthAndYear: function (month, year) {
            var int_d = new Date(year, parseInt(month) + 1 - 1, 1);
            var d = new Date(int_d - 1);
            return this.getDays(d.getDate());
        },
        getConfig: function () {
            var today = new Date(),
                params = this.params,
                self = this,
                lastValidValues;

            var config = {
                rotateEffect: false,  //为了性能
                cssClass: 'datetime-picker',

                value: [today.getFullYear(), formatNumber(today.getMonth() + 1), formatNumber(today.getDate()), formatNumber(today.getHours()), (formatNumber(today.getMinutes()))],

                onChange: function (picker, values, displayValues) {
                    var cols = picker.cols;
                    var days = self.getDaysByMonthAndYear(values[1], values[0]);
                    var currentValue = values[2];
                    if (currentValue > days.length) currentValue = days.length;
                    picker.cols[4].setValue(currentValue);

                    //check min and max
                    var current = new Date(values[0] + '-' + values[1] + '-' + values[2]);
                    var valid = true;
                    if (params.min) {
                        var min = new Date(typeof params.min === "function" ? params.min() : params.min);

                        if (current < +min) {
                            picker.setValue(lastValidValues);
                            valid = false;
                        }
                    }
                    if (params.max) {
                        var max = new Date(typeof params.max === "function" ? params.max() : params.max);
                        if (current > +max) {
                            picker.setValue(lastValidValues);
                            valid = false;
                        }
                    }

                    valid && (lastValidValues = values);

                    if (self.params.onChange) {
                        self.params.onChange.apply(this, arguments);
                    }
                },

                formatValue: function (p, values, displayValues) {
                    return self.params.format(p, values, displayValues);
                },

                cols: [
                    {
                        values: this.initYears
                    },
                    {
                        divider: true,  // 这是一个分隔符
                        content: params.yearSplit
                    },
                    {
                        values: this.initMonthes
                    },
                    {
                        divider: true,  // 这是一个分隔符
                        content: params.monthSplit
                    },
                    {
                        values: (function () {
                            var dates = [];
                            for (var i = 1; i <= 31; i++) dates.push(formatNumber(i));
                            return dates;
                        })()
                    },

                ]
            }

            if (params.dateSplit) {
                config.cols.push({
                    divider: true,
                    content: params.dateSplit
                })
            }

            config.cols.push({
                divider: true,
                content: params.datetimeSplit
            })

            var times = self.params.times();
            if (times && times.length) {
                config.cols = config.cols.concat(times);
            }

            var inputValue = this.input.val();
            if (inputValue) config.value = params.parse(inputValue);
            if (this.params.value) {
                this.input.val(this.params.value);
                config.value = params.parse(this.params.value);
            }

            return config;
        }
    }

    $.fn.datetimePicker = function (params) {
        params = $.extend({}, defaults, params);
        return this.each(function () {
            if (!this) return;
            var $this = $(this);
            var datetime = $this.data("datetime");
            if (!datetime) $this.data("datetime", new Datetime(this, params));
            return datetime;
        });
    };

    defaults = $.fn.datetimePicker.prototype.defaults = {
        input: undefined, // 默认值
        min: undefined, // YYYY-MM-DD 最大最小值只比较年月日，不比较时分秒
        max: undefined,  // YYYY-MM-DD
        yearSplit: '-',
        monthSplit: '-',
        dateSplit: '',  // 默认为空
        datetimeSplit: ' ',  // 日期和时间之间的分隔符，不可为空
        monthes: ('01 02 03 04 05 06 07 08 09 10 11 12').split(' '),
        years: (function () {
            var arr = [];
            for (var i = 1930; i <= 2080; i++) {
                arr.push(i);
            }
            return arr;
        })(),
        times: function () {
            return [  // 自定义的时间
                {
                    values: (function () {
                        var hours = [];
                        for (var i = 0; i < 24; i++) hours.push(formatNumber(i));
                        return hours;
                    })()
                },
                {
                    divider: true,  // 这是一个分隔符
                    content: ':'
                },
                {
                    values: (function () {
                        var minutes = [];
                        for (var i = 0; i < 60; i++) minutes.push(formatNumber(i));
                        return minutes;
                    })()
                }
            ];
        },
        format: function (p, values) { // 数组转换成字符串
            return p.cols.map(function (col) {
                return col.value || col.content;
            }).join('');
        },
        parse: function (str) {
            // 把字符串转换成数组，用来解析初始值
            // 如果你的定制的初始值格式无法被这个默认函数解析，请自定义这个函数。比如你的时间是 '子时' 那么默认情况这个'时'会被当做分隔符而导致错误，所以你需要自己定义parse函数
            // 默认兼容的分隔符
            var t = str.split(this.datetimeSplit);

            return t[0].split(/\D/).concat(t[1].split(/:|时|分|秒/)).filter(function (d) {
                return !!d;
            })
        }
    }

}($);

/*======================================================
************   Picker   ************
======================================================*/
/* global $:true */

+function ($) {
    "use strict";


    //Popup 和 picker 之类的不要共用一个弹出方法，因为这样会导致 在 popup 中再弹出 picker 的时候会有问题。

    $.openPopup = function (popup, className) {

        $.closePopup();

        popup = $(popup);
        popup.show();
        popup.width();
        popup.addClass("weui-popup__container--visible");
        var modal = popup.find(".weui-popup__modal");
        modal.width();
        modal.transitionEnd(function () {
            modal.trigger("open");
        });
    }


    $.closePopup = function (container, remove) {
        container = $(container || ".weui-popup__container--visible");
        container.find('.weui-popup__modal').transitionEnd(function () {
            var $this = $(this);
            $this.trigger("close");
            container.hide();
            remove && container.remove();
        })
        container.removeClass("weui-popup__container--visible")
    };


    $(document).on("click", ".close-popup, .weui-popup__overlay", function () {
        $.closePopup();
    })
        .on("click", ".open-popup", function () {
            $($(this).data("target")).popup();
        })
        .on("click", ".weui-popup__container", function (e) {
            if ($(e.target).hasClass("weui-popup__container")) $.closePopup();
        })

    $.fn.popup = function () {
        return this.each(function () {
            $.openPopup(this);
        });
    };

}($);

/* ===============================================================================
************   Notification ************
=============================================================================== */
/* global $:true */
+function ($) {
    "use strict";

    var noti, defaults, timeout, start, diffX, diffY;

    var touchStart = function (e) {
        var p = $.getTouchPosition(e);
        start = p;
        diffX = diffY = 0;
        noti.addClass("touching");
    };
    var touchMove = function (e) {
        if (!start) return false;
        e.preventDefault();
        e.stopPropagation();
        var p = $.getTouchPosition(e);
        diffX = p.x - start.x;
        diffY = p.y - start.y;
        if (diffY > 0) {
            diffY = Math.sqrt(diffY);
        }

        noti.css("transform", "translate3d(0, " + diffY + "px, 0)");
    };
    var touchEnd = function () {
        noti.removeClass("touching");
        noti.attr("style", "");
        if (diffY < 0 && (Math.abs(diffY) > noti.height() * 0.38)) {
            $.closeNotification();
        }

        if (Math.abs(diffX) <= 1 && Math.abs(diffY) <= 1) {
            noti.trigger("noti-click");
        }

        start = false;
    };

    var attachEvents = function (el) {
        el.on($.touchEvents.start, touchStart);
        el.on($.touchEvents.move, touchMove);
        el.on($.touchEvents.end, touchEnd);
    };

    $.notification = $.noti = function (params) {
        params = $.extend({}, defaults, params);
        noti = $(".weui-notification");
        if (!noti[0]) { // create a new notification
            noti = $('<div class="weui-notification"></div>').appendTo(document.body);
            attachEvents(noti);
        }

        noti.off("noti-click"); //the click event is not correct sometime: it will trigger when user is draging.
        if (params.onClick) noti.on("noti-click", function () {
            params.onClick(params.data);
        });

        noti.html($.t7.compile(params.tpl)(params));

        noti.show();

        noti.addClass("weui-notification--in");
        noti.data("params", params);

        var startTimeout = function () {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }

            timeout = setTimeout(function () {
                if (noti.hasClass("weui-notification--touching")) {
                    startTimeout();
                } else {
                    $.closeNotification();
                }
            }, params.time);
        };

        startTimeout();

    };

    $.closeNotification = function () {
        timeout && clearTimeout(timeout);
        timeout = null;
        var noti = $(".weui-notification").removeClass("weui-notification--in").transitionEnd(function () {
            $(this).remove();
        });

        if (noti[0]) {
            var params = $(".weui-notification").data("params");
            if (params && params.onClose) {
                params.onClose(params.data);
            }
        }
    };

    defaults = $.noti.prototype.defaults = {
        title: undefined,
        text: undefined,
        media: undefined,
        time: 4000,
        onClick: undefined,
        onClose: undefined,
        data: undefined,
        tpl: '<div class="weui-notification__inner">' +
            '{{#if media}}<div class="weui-notification__media">{{media}}</div>{{/if}}' +
            '<div class="weui-notification__content">' +
            '{{#if title}}<div class="weui-notification__title">{{title}}</div>{{/if}}' +
            '{{#if text}}<div class="weui-notification__text">{{text}}</div>{{/if}}' +
            '</div>' +
            '<div class="weui-notification__handle-bar"></div>' +
            '</div>'
    };

}($);

+function ($) {
    "use strict";

    var timeout;

    $.toptip = function (text, duration, type) {
        if (!text) return;
        if (typeof duration === typeof "a") {
            type = duration;
            duration = undefined;
        }
        duration = duration || 3000;
        var className = type ? 'bg-' + type : 'bg-danger';
        var $t = $('.weui-toptips').remove();
        $t = $('<div class="weui-toptips"></div>').appendTo(document.body);
        $t.html(text);
        $t[0].className = 'weui-toptips ' + className

        clearTimeout(timeout);

        if (!$t.hasClass('weui-toptips_visible')) {
            $t.show().width();
            $t.addClass('weui-toptips_visible');
        }

        timeout = setTimeout(function () {

            $(".weui-toptips_visible").remove();

        }, duration);
    }
}($);

/* ===============================================================================
************   Swipeout ************
=============================================================================== */
/* global $:true */

+function ($) {
    "use strict";

    var cache = [];
    var TOUCHING = 'swipeout-touching'

    var Swipeout = function (el) {
        this.container = $(el);
        this.mover = this.container.find('>.weui-cell__bd')
        this.attachEvents();
        cache.push(this)
    }

    Swipeout.prototype.touchStart = function (e) {
        var p = $.getTouchPosition(e);
        this.container.addClass(TOUCHING);
        this.start = p;
        this.startX = 0;
        this.startTime = +new Date;
        var transform = this.mover.css('transform').match(/-?[\d\.]+/g)
        if (transform && transform.length) this.startX = parseInt(transform[4])
        this.diffX = this.diffY = 0;
        this._closeOthers()
        this.limit = this.container.find('>.weui-cell__ft').width() || 68; // 因为有的时候初始化的时候元素是隐藏的（比如在对话框内），所以在touchstart的时候计算宽度而不是初始化的时候
    };

    Swipeout.prototype.touchMove = function (e) {
        if (!this.start) return true;
        var p = $.getTouchPosition(e);
        this.diffX = p.x - this.start.x;
        this.diffY = p.y - this.start.y;
        if (Math.abs(this.diffX) < Math.abs(this.diffY)) { // 说明是上下方向在拖动
            this.close()
            this.start = false
            return true;
        }
        e.preventDefault();
        e.stopPropagation();
        var x = this.diffX + this.startX
        if (x > 0) x = 0;
        if (Math.abs(x) > this.limit) x = -(Math.pow(-(x + this.limit), .7) + this.limit)
        this.mover.css("transform", "translate3d(" + x + "px, 0, 0)");
    };
    Swipeout.prototype.touchEnd = function () {
        if (!this.start) return true;
        this.start = false;
        var x = this.diffX + this.startX
        var t = new Date - this.startTime;
        if (this.diffX < -5 && t < 200) { // 向左快速滑动，则打开
            this.open()
        } else if (this.diffX >= 0 && t < 200) { // 向右快速滑动，或者单击,则关闭
            this.close()
        } else if (x > 0 || -x <= this.limit / 2) {
            this.close()
        } else {
            this.open()
        }
    };


    Swipeout.prototype.close = function () {
        this.container.removeClass(TOUCHING);
        this.mover.css("transform", "translate3d(0, 0, 0)");
        this.container.trigger('swipeout-close');
    }

    Swipeout.prototype.open = function () {
        this.container.removeClass(TOUCHING);
        this._closeOthers()
        this.mover.css("transform", "translate3d(" + (-this.limit) + "px, 0, 0)");
        this.container.trigger('swipeout-open');
    }

    Swipeout.prototype.attachEvents = function () {
        var el = this.mover;
        el.on($.touchEvents.start, $.proxy(this.touchStart, this));
        el.on($.touchEvents.move, $.proxy(this.touchMove, this));
        el.on($.touchEvents.end, $.proxy(this.touchEnd, this));
    }
    Swipeout.prototype._closeOthers = function () {
        //close others
        var self = this
        cache.forEach(function (s) {
            if (s !== self) s.close()
        })
    }

    var swipeout = function (el) {
        return new Swipeout(el);
    };

    $.fn.swipeout = function (arg) {
        return this.each(function () {
            var $this = $(this)
            var s = $this.data('swipeout') || swipeout(this);
            $this.data('swipeout', s);

            if (typeof arg === typeof 'a') {
                s[arg]()
            }
        });
    }

    $('.weui-cell_swiped').swipeout() // auto init
}($);
//tab
(function ($) {
    var oldFnTab = $.fn.tab;
    $.fn.tab = function (options) {
        options = $.extend({defaultIndex: 0, activeClass: 'weui-bar__item_on', onToggle: $.noop}, options);
        const $tabbarItems = this.find('.weui-tabbar__item, .weui-navbar__item');
        const $tabBdItems = this.find('.weui-tab__content');
        this.toggle = function (index) {
            const $defaultTabbarItem = $tabbarItems.eq(index);
            $defaultTabbarItem.addClass(options.activeClass).siblings().removeClass(options.activeClass);
            const $defaultTabBdItem = $tabBdItems.eq(index);
            $defaultTabBdItem.show().siblings().hide();
            options.onToggle(index);
        };
        const self = this;
        this.on('click', '.weui-tabbar__item, .weui-navbar__item', function (e) {
            const index = $(this).index();
            self.toggle(index);
        });
        this.toggle(options.defaultIndex);
        return this;
    };
    $.fn.tab.noConflict = function () {
        return oldFnTab;
    };
})($);

function share() {
    var sharetpl = '<div class="weui-share" onclick="$(this).remove();">\n' +
        '<div class="weui-share-box">\n' +
        '点击右上角发送给指定朋友或分享到朋友圈 <i></i>\n' +
        '</div>\n' +
        '</div>';
    var sharetpl = $.t7.compile(sharetpl);
    $("body").append(sharetpl());

}

$(function () {
    var weixinimg = [];
    var weixinsrc = [];
    weixinimg = $('.weixin');
    for (var i = 0; i < weixinimg.length; i++) {
        weixinsrc[i] = weixinimg[i].src;
    }
    ;$('.weixin').click(function () {
        var index = $('.weixin').index(this);
        wx.previewImage({current: weixinsrc[index], urls: weixinsrc});
    });
});

function noshare() {
    var e = function () {
        WeixinJSBridge.call("hideOptionMenu")
    };
    "undefined" == typeof WeixinJSBridge && (document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", e, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", e), document.attachEvent("onWeixinJSBridgeReady", e)))
}

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}

function b64_md5(s) {
    return binl2b64(core_md5(str2binl(s), s.length * chrsz));
}

function str_md5(s) {
    return binl2str(core_md5(str2binl(s), s.length * chrsz));
}

function hex_hmac_md5(key, data) {
    return binl2hex(core_hmac_md5(key, data));
}

function b64_hmac_md5(key, data) {
    return binl2b64(core_hmac_md5(key, data));
}

function str_hmac_md5(key, data) {
    return binl2str(core_hmac_md5(key, data));
}

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;

        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}

function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data) {
    var bkey = str2binl(key);
    if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

    var ipad = Array(16), opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }

    var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
    return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
    return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin) {
    var str = "";
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += chrsz)
        str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
    return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
            hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
    }
    return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i += 3) {
        var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
            | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
            | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
            else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
        }
    }
    return str;
}/*! echo-js v1.7.3 | (c) 2016 @toddmotto 图片懒加载| https://github.com/toddmotto/echo */
!function (t, e) {
    "function" == typeof define && define.amd ? define(function () {
        return e(t)
    }) : "object" == typeof exports ? module.exports = e : t.echo = e(t)
}(this, function (t) {
    "use strict";
    var e, n, o, r, c, a = {}, u = function () {
    }, d = function (t) {
        return null === t.offsetParent
    }, l = function (t, e) {
        if (d(t)) return !1;
        var n = t.getBoundingClientRect();
        return n.right >= e.l && n.bottom >= e.t && n.left <= e.r && n.top <= e.b
    }, i = function () {
        (r || !n) && (clearTimeout(n), n = setTimeout(function () {
            a.render(), n = null
        }, o))
    };
    return a.init = function (n) {
        n = n || {};
        var d = n.offset || 0, l = n.offsetVertical || d, f = n.offsetHorizontal || d, s = function (t, e) {
            return parseInt(t || e, 10)
        };
        e = {
            t: s(n.offsetTop, l),
            b: s(n.offsetBottom, l),
            l: s(n.offsetLeft, f),
            r: s(n.offsetRight, f)
        }, o = s(n.throttle, 250), r = n.debounce !== !1, c = !!n.unload, u = n.callback || u, a.render(), document.addEventListener ? (t.addEventListener("scroll", i, !1), t.addEventListener("load", i, !1)) : (t.attachEvent("onscroll", i), t.attachEvent("onload", i))
    }, a.render = function (n) {
        for (var o, r, d = (n || document).querySelectorAll("[data-echo], [data-echo-background]"), i = d.length, f = {
            l: 0 - e.l,
            t: 0 - e.t,
            b: (t.innerHeight || document.documentElement.clientHeight) + e.b,
            r: (t.innerWidth || document.documentElement.clientWidth) + e.r
        }, s = 0; i > s; s++) r = d[s], l(r, f) ? (c && r.setAttribute("data-echo-placeholder", r.src), null !== r.getAttribute("data-echo-background") ? r.style.backgroundImage = "url(" + r.getAttribute("data-echo-background") + ")" : r.src !== (o = r.getAttribute("data-echo")) && (r.src = o), c || (r.removeAttribute("data-echo"), r.removeAttribute("data-echo-background")), u(r, "load")) : c && (o = r.getAttribute("data-echo-placeholder")) && (null !== r.getAttribute("data-echo-background") ? r.style.backgroundImage = "url(" + o + ")" : r.src = o, r.removeAttribute("data-echo-placeholder"), u(r, "unload"));
        i || a.detach()
    }, a.detach = function () {
        document.removeEventListener ? t.removeEventListener("scroll", i) : t.detachEvent("onscroll", i), clearTimeout(n)
    }, a
});

/**
 *
 * @returns 返回10位时间戳
 */
function time() {
    return Math.floor((new Date).getTime() / 1e3)
}

/**
 *
 * @param n 格式化样式Y-m-d H:i:s返回带0 Y-n-j不带0 z一年中第几天要+1才正确 w星期0是周日 N 7是周日D三个字母星期 l英语星期 W周 F月份英语 L闰年判断 c带时区日期时间 r英文形式
 * @param t 时间戳
 * @returns 格式化时间
 */
function date(n, t) {
    var e, r,
        u = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        o = /\\?(.?)/gi, i = function (n, t) {
            return r[n] ? r[n]() : t
        }, c = function (n, t) {
            for (n = String(n); n.length < t;) n = "0" + n;
            return n
        };
    r = {
        d: function () {
            return c(r.j(), 2)
        }, D: function () {
            return r.l().slice(0, 3)
        }, j: function () {
            return e.getDate()
        }, l: function () {
            return u[r.w()] + "day"
        }, N: function () {
            return r.w() || 7
        }, S: function () {
            var n = r.j(), t = n % 10;
            return t <= 3 && 1 === parseInt(n % 100 / 10, 10) && (t = 0), ["st", "nd", "rd"][t - 1] || "th"
        }, w: function () {
            return e.getDay()
        }, z: function () {
            var n = new Date(r.Y(), r.n() - 1, r.j()), t = new Date(r.Y(), 0, 1);
            return Math.round((n - t) / 864e5)
        }, W: function () {
            var n = new Date(r.Y(), r.n() - 1, r.j() - r.N() + 3), t = new Date(n.getFullYear(), 0, 4);
            return c(1 + Math.round((n - t) / 864e5 / 7), 2)
        }, F: function () {
            return u[6 + r.n()]
        }, m: function () {
            return c(r.n(), 2)
        }, M: function () {
            return r.F().slice(0, 3)
        }, n: function () {
            return e.getMonth() + 1
        }, t: function () {
            return new Date(r.Y(), r.n(), 0).getDate()
        }, L: function () {
            var n = r.Y();
            return n % 4 == 0 & n % 100 != 0 | n % 400 == 0
        }, o: function () {
            var n = r.n(), t = r.W();
            return r.Y() + (12 === n && t < 9 ? 1 : 1 === n && t > 9 ? -1 : 0)
        }, Y: function () {
            return e.getFullYear()
        }, y: function () {
            return r.Y().toString().slice(-2)
        }, a: function () {
            return e.getHours() > 11 ? "pm" : "am"
        }, A: function () {
            return r.a().toUpperCase()
        }, B: function () {
            var n = 3600 * e.getUTCHours(), t = 60 * e.getUTCMinutes(), r = e.getUTCSeconds();
            return c(Math.floor((n + t + r + 3600) / 86.4) % 1e3, 3)
        }, g: function () {
            return r.G() % 12 || 12
        }, G: function () {
            return e.getHours()
        }, h: function () {
            return c(r.g(), 2)
        }, H: function () {
            return c(r.G(), 2)
        }, i: function () {
            return c(e.getMinutes(), 2)
        }, s: function () {
            return c(e.getSeconds(), 2)
        }, u: function () {
            return c(1e3 * e.getMilliseconds(), 6)
        }, e: function () {
            throw new Error("Not supported (see source code of date() for timezone on how to add support)")
        }, I: function () {
            return new Date(r.Y(), 0) - Date.UTC(r.Y(), 0) != new Date(r.Y(), 6) - Date.UTC(r.Y(), 6) ? 1 : 0
        }, O: function () {
            var n = e.getTimezoneOffset(), t = Math.abs(n);
            return (n > 0 ? "-" : "+") + c(100 * Math.floor(t / 60) + t % 60, 4)
        }, P: function () {
            var n = r.O();
            return n.substr(0, 3) + ":" + n.substr(3, 2)
        }, T: function () {
            return "UTC"
        }, Z: function () {
            return 60 * -e.getTimezoneOffset()
        }, c: function () {
            return "Y-m-d\\TH:i:sP".replace(o, i)
        }, r: function () {
            return "D, d M Y H:i:s O".replace(o, i)
        }, U: function () {
            return e / 1e3 | 0
        }
    };
    return function (n, t) {
        return e = void 0 === t ? new Date : t instanceof Date ? new Date(t) : new Date(1e3 * t), n.replace(o, i)
    }(n, t)
}

/**
 *
 * @param text 转换参数now +-1 day +- 2 days +-1 week
 * @param now 默认当前时间戳
 * @returns 字符串转换时间戳
 */
function strtotime(text, now) {
    var parsed, match, today, year, date, days, ranges, len, times, regex, i, fail = false;
    if (!text) {
        return fail
    }
    text = text.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ").replace(/[\t\r\n]/g, "").toLowerCase();
    match = text.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/);
    if (match && match[2] === match[4]) {
        if (match[1] > 1901) {
            switch (match[2]) {
                case"-":
                    if (match[3] > 12 || match[5] > 31) {
                        return fail
                    }
                    return new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
                case".":
                    return fail;
                case"/":
                    if (match[3] > 12 || match[5] > 31) {
                        return fail
                    }
                    return new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
            }
        } else {
            if (match[5] > 1901) {
                switch (match[2]) {
                    case"-":
                        if (match[3] > 12 || match[1] > 31) {
                            return fail
                        }
                        return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
                    case".":
                        if (match[3] > 12 || match[1] > 31) {
                            return fail
                        }
                        return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
                    case"/":
                        if (match[1] > 12 || match[3] > 31) {
                            return fail
                        }
                        return new Date(match[5], parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
                }
            } else {
                switch (match[2]) {
                    case"-":
                        if (match[3] > 12 || match[5] > 31 || (match[1] < 70 && match[1] > 38)) {
                            return fail
                        }
                        year = match[1] >= 0 && match[1] <= 38 ? +match[1] + 2000 : match[1];
                        return new Date(year, parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
                    case".":
                        if (match[5] >= 70) {
                            if (match[3] > 12 || match[1] > 31) {
                                return fail
                            }
                            return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000
                        }
                        if (match[5] < 60 && !match[6]) {
                            if (match[1] > 23 || match[3] > 59) {
                                return fail
                            }
                            today = new Date();
                            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0, match[9] || 0) / 1000
                        }
                        return fail;
                    case"/":
                        if (match[1] > 12 || match[3] > 31 || (match[5] < 70 && match[5] > 38)) {
                            return fail
                        }
                        year = match[5] >= 0 && match[5] <= 38 ? +match[5] + 2000 : match[5];
                        return new Date(year, parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
                    case":":
                        if (match[1] > 23 || match[3] > 59 || match[5] > 59) {
                            return fail
                        }
                        today = new Date();
                        return new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0) / 1000
                }
            }
        }
    }
    if (text === "now") {
        return now === null || isNaN(now) ? new Date().getTime() / 1000 | 0 : now | 0
    }
    if (!isNaN(parsed = Date.parse(text))) {
        return parsed / 1000 | 0
    }
    date = now ? new Date(now * 1000) : new Date();
    days = {"sun": 0, "mon": 1, "tue": 2, "wed": 3, "thu": 4, "fri": 5, "sat": 6};
    ranges = {"yea": "FullYear", "mon": "Month", "day": "Date", "hou": "Hours", "min": "Minutes", "sec": "Seconds"};

    function lastNext(type, range, modifier) {
        var diff, day = days[range];
        if (typeof day !== "undefined") {
            diff = day - date.getDay();
            if (diff === 0) {
                diff = 7 * modifier
            } else {
                if (diff > 0 && type === "last") {
                    diff -= 7
                } else {
                    if (diff < 0 && type === "next") {
                        diff += 7
                    }
                }
            }
            date.setDate(date.getDate() + diff)
        }
    }

    function process(val) {
        var splt = val.split(" "), type = splt[0], range = splt[1].substring(0, 3), typeIsNumber = /\d+/.test(type),
            ago = splt[2] === "ago", num = (type === "last" ? -1 : 1) * (ago ? -1 : 1);
        if (typeIsNumber) {
            num *= parseInt(type, 10)
        }
        if (ranges.hasOwnProperty(range) && !splt[1].match(/^mon(day|\.)?$/i)) {
            return date["set" + ranges[range]](date["get" + ranges[range]]() + num)
        }
        if (range === "wee") {
            return date.setDate(date.getDate() + (num * 7))
        }
        if (type === "next" || type === "last") {
            lastNext(type, range, num)
        } else {
            if (!typeIsNumber) {
                return false
            }
        }
        return true
    }

    times = "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec" + "|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?" + "|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)";
    regex = "([+-]?\\d+\\s" + times + "|" + "(last|next)\\s" + times + ")(\\sago)?";
    match = text.match(new RegExp(regex, "gi"));
    if (!match) {
        return fail
    }
    for (i = 0, len = match.length; i < len; i++) {
        if (!process(match[i])) {
            return fail
        }
    }
    return (date.getTime() / 1000)
};

/**
 * 用字符分割microtime().split(" ")[1]
 * @returns 返回微秒
 */
function microtime(e) {
    var n, r;
    return "undefined" != typeof performance && performance.now ? (r = (performance.now() + performance.timing.navigationStart) / 1e3, e ? r : (n = 0 | r, Math.round(1e6 * (r - n)) / 1e6 + " " + n)) : (r = (Date.now ? Date.now() : (new Date).getTime()) / 1e3, e ? r : (n = 0 | r, Math.round(1e3 * (r - n)) / 1e3 + " " + n))
}

/**
 * 参数格式 时,分,秒,月,日,年
 * @returns 返回日期时间戳
 */
function mktime() {
    var e = new Date, t = arguments, r = 0, n = ["Hours", "Minutes", "Seconds", "Month", "Date", "FullYear"];
    for (r = 0; r < n.length; r++) if (void 0 === t[r]) t[r] = e["get" + n[r]](), t[r] += 3 === r; else if (t[r] = parseInt(t[r], 10), isNaN(t[r])) return !1;
    t[5] += t[5] >= 0 ? t[5] <= 69 ? 2e3 : t[5] <= 100 ? 1900 : 0 : 0, e.setFullYear(t[5], t[3] - 1, t[4]), e.setHours(t[0], t[1], t[2]);
    var s = e.getTime();
    return (s / 1e3 >> 0) - (s < 0)
}

/**
 *array_column(arr=[{"id":1,"name":"中国"},{"id":2,"name":"中国1"}],value="name",key="id")
 * @param r 数组
 * @param t 值
 * @param 指定key
 * @returns 返回数组中指定列
 */
function array_column(r, t) {
    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null !== r && ("object" === (void 0 === r ? "undefined" : _typeof(r)) || Array.isArray(r))) {
        var e = [];
        if ("object" === (void 0 === r ? "undefined" : _typeof(r))) {
            var n = [], y = !0, i = !1, a = void 0;
            try {
                for (var f, l = Object.keys(r)[Symbol.iterator](); !(y = (f = l.next()).done); y = !0) {
                    var u = f.value;
                    n.push(r[u])
                }
            } catch (r) {
                i = !0, a = r
            } finally {
                try {
                    !y && l.return && l.return()
                } finally {
                    if (i) throw a
                }
            }
            r = n
        }
        if (Array.isArray(r)) {
            var c = !0, v = !1, s = void 0;
            try {
                for (var b, p = r.keys()[Symbol.iterator](); !(c = (b = p.next()).done); c = !0) {
                    var d = b.value;
                    o && r[d][o] ? e[r[d][o]] = t ? r[d][t] : r[d] : t ? e.push(r[d][t]) : e.push(r[d])
                }
            } catch (r) {
                v = !0, s = r
            } finally {
                try {
                    !c && p.return && p.return()
                } finally {
                    if (v) throw s
                }
            }
        }
        return Object.assign({}, e)
    }
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (r) {
    return typeof r
} : function (r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
};

/**
 *array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
 * @param 数组
 * @returns 返回数组中key
 */
function array_keys(r, n, a) {
    var e = void 0 !== n, o = [], t = !!a, i = !0, y = "";
    for (y in r) r.hasOwnProperty(y) && (i = !0, e && (t && r[y] !== n ? i = !1 : r[y] !== n && (i = !1)), i && (o[o.length] = y));
    return o
}

/**
 * array_values( {firstname: 'Kevin', surname: 'van Zonneveld'} );
 * @param 数组
 * @returns 返回数组中值
 */
function array_values(r) {
    var n = [], a = "";
    for (a in r) n[n.length] = r[a];
    return n
}

/**
 * 取一个是字符串,多个是数组,取出的是key
 * @param 数组
 * @param 取出单元个数
 * @returns 随机取出数组单元key
 */
function array_rand(r, a) {
    var n = Object.keys(r);
    if (a = void 0 === a || null === a ? 1 : +a, isNaN(a) || a < 1 || a > n.length) return null;
    for (var l = n.length - 1; l > 0; l--) {
        var t = Math.floor(Math.random() * (l + 1)), e = n[t];
        n[t] = n[l], n[l] = e
    }
    return 1 === a ? n[0] : n.slice(0, a)
}

/**
 *array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'})
 * @param 数组
 * @returns 去除数组重复
 */
function array_unique(r) {
    var n = "", t = {}, u = "";
    for (n in r) r.hasOwnProperty(n) && (u = r[n], !1 === function (r, n) {
        var t = "";
        for (t in n) if (n.hasOwnProperty(t) && n[t] + "" == r + "") return t;
        return !1
    }(u, t) && (t[n] = u));
    return t
}

/**
 * array_slice(["a", "b", "c", "d", "e"], 2, -1, true);
 * @param 数组
 * @param 开始位置
 * @param 取出个数
 * @param 是否重排
 * @returns 截取数组
 */
function array_slice(r, i, e, t) {
    var o = "";
    if ("[object Array]" !== Object.prototype.toString.call(r) || t && 0 !== i) {
        var a = 0, c = {};
        for (o in r) a += 1, c[o] = r[o];
        r = c, i = i < 0 ? a + i : i, e = void 0 === e ? a : e < 0 ? a + e - i : e;
        var n = {}, l = !1, f = -1, s = 0, v = 0;
        for (o in r) {
            if (++f, s >= e) break;
            f === i && (l = !0), l && (++s, is_int(o) && !t ? n[v++] = r[o] : n[o] = r[o])
        }
        return n
    }
    return void 0 === e ? r.slice(i) : e >= 0 ? r.slice(i, i + e) : r.slice(i, e)
}

/**
 *array_search('e',["a", "b", "c", "d", "e"])
 * @param 要查找的值
 * @param 数组
 * @returns 数组中搜索指定值返回键
 */
function array_search(r, e, t) {
    var n = !!t, i = "";
    if ("object" == typeof r && r.exec) {
        if (!n) {
            var o = "i" + (r.global ? "g" : "") + (r.multiline ? "m" : "") + (r.sticky ? "y" : "");
            r = new RegExp(r.source, o)
        }
        for (i in e) if (e.hasOwnProperty(i) && r.test(e[i])) return i;
        return !1
    }
    for (i in e) if (e.hasOwnProperty(i) && (n && e[i] === r || !n && e[i] == r)) return i;
    return !1
}

/**
 *  参数是数组
 * @returns 合并多个数组
 */
function array_merge() {
    var r, e = Array.prototype.slice.call(arguments), t = e.length, o = {}, a = "", n = 0, c = 0, l = 0, f = 0,
        i = Object.prototype.toString, y = !0;
    for (l = 0; l < t; l++) if ("[object Array]" !== i.call(e[l])) {
        y = !1;
        break
    }
    if (y) {
        for (y = [], l = 0; l < t; l++) y = y.concat(e[l]);
        return y
    }
    for (l = 0, f = 0; l < t; l++) if (r = e[l], "[object Array]" === i.call(r)) for (c = 0, n = r.length; c < n; c++) o[f++] = r[c]; else for (a in r) r.hasOwnProperty(a) && (parseInt(a, 10) + "" === a ? o[f++] = r[a] : o[a] = r[a]);
    return o
}

/**
 *
 * @param 数组
 * @param 参数1时候递归统计多维数组
 * @returns 计算数组个数
 */
function count(r, t) {
    var n, o = 0;
    if (null === r || void 0 === r) return 0;
    if (r.constructor !== Array && r.constructor !== Object) return 1;
    "COUNT_RECURSIVE" === t && (t = 1), 1 !== t && (t = 0);
    for (n in r) r.hasOwnProperty(n) && (o++, 1 !== t || !r[n] || r[n].constructor !== Array && r[n].constructor !== Object || (o += count(r[n], 1)));
    return o
}

/**
 *
 * @param 值
 * @param 数组
 * @returns 判断元素是否在数组中bool
 */
function in_array(r, n, i) {
    var f = "";
    if (!i) {
        for (f in n) if (n[f] == r) return !0
    } else for (f in n) if (n[f] === r) return !0;
    return !1
}

/**
 *
 * @param 数组或数组对象
 * @returns 对象转换数组会丢掉key
 */
function obj2arr(array) {
    if (is_object(array)) {
        var arr = []
        for (var i in array) {
            arr.push(array[i]);
        }
        array = arr;
    }
    if (is_array(array)) {
        foreach(array, function (key, value) {
            array[key] = obj2arr(value);
        })
    }
    return array;
}

/**
 * range('a','z') range(1,10) range('A','Z')
 * @param 开始
 * @param 结束
 * @param 步长
 * @returns 生成数组
 */
function range(r, a, N) {
    var i, o, s = [], e = N || 1, f = !1;
    if (isNaN(r) || isNaN(a) ? isNaN(r) && isNaN(a) ? (f = !0, i = r.charCodeAt(0), o = a.charCodeAt(0)) : (i = isNaN(r) ? 0 : r, o = isNaN(a) ? 0 : a) : (i = r, o = a), !(i > o)) for (; i <= o;) s.push(f ? String.fromCharCode(i) : i), i += e; else for (; i >= o;) s.push(f ? String.fromCharCode(i) : i), i -= e;
    return s
}

/**
 *@returns 删除变量或数组传入字符串
 */
function unset() {
    var i = 0, arg = "", win = "", winRef = /^(?:this)?window[.[]/, arr = [], accessor = "",
        bracket = /\[['"]?(\d+)['"]?\]$/;
    for (i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        winRef.lastIndex = 0, bracket.lastIndex = 0;
        win = winRef.test(arg) ? "" : "this.window.";
        if (bracket.test(arg)) {
            accessor = arg.match(bracket)[1];
            arr = eval(win + arg.replace(bracket, ""));
            arr.splice(accessor, 1)
        } else {
            eval("delete " + win + arg)
        }
    }
};

/**
 * 正数字符1大于字符2,负数小于0
 * @param 字符1
 * @param 字符2
 * @returns 字符串比较
 */
function strcmp(b, a) {
    return ((b == a) ? 0 : ((b > a) ? 1 : -1))
};

function strnatcmp(g, f, d) {
    var b = 0;
    if (d == undefined) {
        d = false
    }
    var e = function (p) {
        var n = [];
        var o = "";
        var r = "";
        var q = 0, m = 0;
        var s = true;
        m = p.length;
        for (q = 0; q < m; q++) {
            r = p.substring(q, q + 1);
            if (r.match(/\d/)) {
                if (s) {
                    if (o.length > 0) {
                        n[n.length] = o;
                        o = ""
                    }
                    s = false
                }
                o += r
            } else {
                if ((s == false) && (r === ".") && (q < (p.length - 1)) && (p.substring(q + 1, q + 2).match(/\d/))) {
                    n[n.length] = o;
                    o = ""
                } else {
                    if (s == false) {
                        if (o.length > 0) {
                            n[n.length] = parseInt(o, 10);
                            o = ""
                        }
                        s = true
                    }
                    o += r
                }
            }
        }
        if (o.length > 0) {
            if (s) {
                n[n.length] = o
            } else {
                n[n.length] = parseInt(o, 10)
            }
        }
        return n
    };
    var l = e(g + "");
    var j = e(f + "");
    var c = l.length;
    var h = true;
    var k = -1;
    var a = 0;
    if (c > j.length) {
        c = j.length;
        k = 1
    }
    for (b = 0; b < c; b++) {
        if (isNaN(l[b])) {
            if (isNaN(j[b])) {
                h = true;
                if ((a = strcmp(l[b], j[b])) != 0) {
                    return a
                }
            } else {
                if (h) {
                    return 1
                } else {
                    return -1
                }
            }
        } else {
            if (isNaN(j[b])) {
                if (h) {
                    return -1
                } else {
                    return 1
                }
            } else {
                if (h || d) {
                    if ((a = (l[b] - j[b])) != 0) {
                        return a
                    }
                } else {
                    if ((a = strcmp(l[b].toString(), j[b].toString())) != 0) {
                        return a
                    }
                }
                h = false
            }
        }
    }
    return k
};

/**
 *sort(["a","b"],"SORT_STRING",true)
 * @param 数组
 * @param SORT_STRING|SORT_NUMERIC 排序类型
 * @param 默认true只排序不输出,false输出
 * @returns 数组排序
 */
function sort(inputArr, sort_flags, strictForIn) {
    var valArr = [], keyArr = [], k = '', i = 0, sorter = false, populateArr = [];
    switch (sort_flags) {
        case'SORT_STRING':
            sorter = function (a, b) {
                return strnatcmp(a, b);
            };
            break;
        case'SORT_NUMERIC':
            sorter = function (a, b) {
                return (a - b);
            };
            break;
        default:
            sorter = function (a, b) {
                var aFloat = parseFloat(a), bFloat = parseFloat(b), aNumeric = aFloat + '' === a,
                    bNumeric = bFloat + '' === b;
                if (aNumeric && bNumeric) {
                    return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                } else if (aNumeric && !bNumeric) {
                    return 1;
                } else if (!aNumeric && bNumeric) {
                    return -1;
                }
                return a > b ? 1 : a < b ? -1 : 0;
            };
            break;
    }
    populateArr = strictForIn ? inputArr : populateArr;
    for (k in inputArr) {
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }
    valArr.sort(sorter);
    for (i = 0; i < valArr.length; i++) {
        populateArr[i] = valArr[i];
    }
    return strictForIn || populateArr;
}

/**
 *
 * @param 数组
 * @param 类型SORT_STRING|SORT_NUMERIC
 * @returns 关联数组排序返回数组
 */
function ksort(inputArr, sort_flags) {
    return sort(inputArr, sort_flags, false);
};

/**
 *
 * @param 字符
 * @returns 是否整数判断
 */
function is_int(i) {
    return i === +i && isFinite(i) && !(i % 1)
}

/**
 *
 * @param 字符
 * @returns 是否浮点数判断
 */
function is_float(i) {
    return !(+i !== i || isFinite(i) && !(i % 1))
}

/**
 *
 * @param 变量
 * @returns 是否数组判断
 */
function is_array(t) {
    if (!t || "object" != typeof t) return !1;
    if (function (t) {
        if (!t || "object" != typeof t || "number" != typeof t.length) return !1;
        var e = t.length;
        return t[t.length] = "bogus", e !== t.length ? (t.length -= 1, !0) : (delete t[t.length], !1)
    }(t)) return !0;
    var e = Object.prototype.toString.call(t), n = function (t) {
        var e = /\W*function\s+([\w$]+)\s*\(/.exec(t);
        return e ? e[1] : "(Anonymous)"
    }(t.constructor);
    return "[object Object]" === e && "Object" === n
}

/**
 *
 * @param 变量
 * @returns 是否对象判断
 */
function is_object(t) {
    return "[object Array]" !== Object.prototype.toString.call(t) && (null !== t && "object" == typeof t)
}

/**
 *  @param 函数名字符串
 * @returns 判断函数是否存在
 */
function function_exists(n) {
    var o = "undefined" != typeof window ? window : global;
    return "string" == typeof n && (n = o[n]), "function" == typeof n
}

/**
 *
 * @param 数组或对象
 * @returns 序列化
 */
function serialize(r) {
    var e, t, a, n = "", o = 0, i = function (r) {
        var e, t, a, n, o = typeof r;
        if ("object" === o && !r) return "null";
        if ("object" === o) {
            if (!r.constructor) return "object";
            a = r.constructor.toString(), e = a.match(/(\w+)\(/), e && (a = e[1].toLowerCase()), n = ["boolean", "number", "string", "array"];
            for (t in n) if (a == n[t]) {
                o = n[t];
                break
            }
        }
        return o
    }, c = i(r);
    switch (c) {
        case"function":
            e = "";
            break;
        case"boolean":
            e = "b:" + (r ? "1" : "0");
            break;
        case"number":
            e = (Math.round(r) == r ? "i" : "d") + ":" + r;
            break;
        case"string":
            e = "s:" + function (r) {
                var e = 0, t = 0, a = r.length, n = "";
                for (t = 0; t < a; t++) n = r.charCodeAt(t), e += n < 128 ? 1 : n < 2048 ? 2 : 3;
                return e
            }(r) + ':"' + r + '"';
            break;
        case"array":
        case"object":
            e = "a";
            for (t in r) if (r.hasOwnProperty(t)) {
                if ("function" === i(r[t])) continue;
                a = t.match(/^[0-9]+$/) ? parseInt(t, 10) : t, n += this.serialize(a) + this.serialize(r[t]), o++
            }
            e += ":" + o + ":{" + n + "}";
            break;
        case"undefined":
        default:
            e = "N"
    }
    return "object" !== c && "array" !== c && (e += ";"), e
}

/**
 *
 * @param 字符串
 * @returns 解码序列化
 */
function unserialize(r) {
    var e = this, n = function (r) {
        var e = r.charCodeAt(0);
        return e < 128 ? 0 : e < 2048 ? 1 : 2
    };
    return error = function (r, n, a, t) {
        throw new e.window[r](n, a, t)
    }, read_until = function (r, e, n) {
        for (var a = 2, t = [], i = r.slice(e, e + 1); i != n;) a + e > r.length && error("Error", "Invalid"), t.push(i), i = r.slice(e + (a - 1), e + a), a += 1;
        return [t.length, t.join("")]
    }, read_chrs = function (r, e, a) {
        var t, i, u;
        for (u = [], t = 0; t < a; t++) i = r.slice(e + (t - 1), e + t), u.push(i), a -= n(i);
        return [u.length, u.join("")]
    }, _unserialize = function (r, e) {
        var n, a, t, i, u, s, o, l, c, d, f, h, _, p, w, b, k, g, v = 0, I = function (r) {
            return r
        };
        switch (e || (e = 0), n = r.slice(e, e + 1).toLowerCase(), a = e + 2, n) {
            case"i":
                I = function (r) {
                    return parseInt(r, 10)
                }, c = read_until(r, a, ";"), v = c[0], l = c[1], a += v + 1;
                break;
            case"b":
                I = function (r) {
                    return 0 !== parseInt(r, 10)
                }, c = read_until(r, a, ";"), v = c[0], l = c[1], a += v + 1;
                break;
            case"d":
                I = function (r) {
                    return parseFloat(r)
                }, c = read_until(r, a, ";"), v = c[0], l = c[1], a += v + 1;
                break;
            case"n":
                l = null;
                break;
            case"s":
                d = read_until(r, a, ":"), v = d[0], f = d[1], a += v + 2, c = read_chrs(r, a + 1, parseInt(f, 10)), v = c[0], l = c[1], a += v + 2, v != parseInt(f, 10) && v != l.length && error("SyntaxError", "String length mismatch");
                break;
            case"a":
                for (l = {}, t = read_until(r, a, ":"), v = t[0], i = t[1], a += v + 2, s = parseInt(i, 10), u = !0, h = 0; h < s; h++) p = _unserialize(r, a), w = p[1], _ = p[2], a += w, b = _unserialize(r, a), k = b[1], g = b[2], a += k, _ !== h && (u = !1), l[_] = g;
                if (u) {
                    for (o = new Array(s), h = 0; h < s; h++) o[h] = l[h];
                    l = o
                }
                a += 1;
                break;
            default:
                error("SyntaxError", "Unknown / Unhandled data type(s): " + n)
        }
        return [n, a - e, I(l)]
    }, _unserialize(r + "", 0)[2]
}

/**
 * uniqid('',true)长度23 默认13
 * @param 前缀
 * @param 是否增加长度
 * @returns 生成唯一id
 */
function uniqid(n, e) {
    void 0 === n && (n = "");
    var t, i = function (n, e) {
        return n = parseInt(n, 10).toString(16), e < n.length ? n.slice(n.length - e) : e > n.length ? Array(e - n.length + 1).join("0") + n : n
    }, o = "undefined" != typeof window ? window : global;
    o.$locutus = o.$locutus || {};
    var d = o.$locutus;
    return d.php = d.php || {}, d.php.uniqidSeed || (d.php.uniqidSeed = Math.floor(123456789 * Math.random())), d.php.uniqidSeed++, t = n, t += i(parseInt((new Date).getTime() / 1e3, 10), 8), t += i(d.php.uniqidSeed, 5), e && (t += (10 * Math.random()).toFixed(8).toString()), t
}

/**
 *
 * @param 设置变量
 * @param 变量值,数组会被转换成字符串
 * @param 过期时间戳
 * @returns 设置cookie
 */
function setcookie(name, value, expires, path, domain, secure) {
    if (typeof expires === 'string' && (/^\d+$/).test(expires)) {
        expires = parseInt(expires, 10);
    }
    if (expires instanceof Date) {
        expires = expires.toGMTString();
    } else if (typeof expires === 'number') {
        expires = (new Date(expires * 1e3)).toGMTString();
    }
    var r = [name + '=' + value], s = {}, i = '';
    s = {expires: expires, path: path, domain: domain};
    for (i in s) {
        if (s.hasOwnProperty(i)) {
            s[i] && r.push(i + '=' + s[i]);
        }
    }
    return secure && r.push('secure'), this.window.document.cookie = r.join(';'), true;
}

/**
 *
 * @param 变量
 * @returns 判断变量是否为空
 */
function empty(r) {
    var n, t, e, f = [void 0, null, !1, ""];
    for (t = 0, e = f.length; t < e; t++) if (r === f[t]) return !0;
    if ("object" == typeof r) {
        for (n in r) if (r.hasOwnProperty(n)) return !1;
        return !0
    }
    return !1
}

/**
 *
 * @returns 判断变量是否存在
 */
function isset() {
    var r = arguments, t = r.length, n = 0;
    if (0 === t) throw new Error("Empty isset");
    for (; n !== t;) {
        if (void 0 === r[n] || null === r[n]) return !1;
        n++
    }
    return !0
}

/**
 *
 * @param 变量
 * @param 进制,默认十进制
 * @returns 转换成整型
 */
function intval(i, t) {
    var n, a, e = typeof i;
    return "boolean" === e ? +i : "string" === e ? (0 === t && (a = i.match(/^\s*0(x?)/i), t = a ? a[1] ? 16 : 8 : 10), n = parseInt(i, t || 10), isNaN(n) || !isFinite(n) ? 0 : n) : "number" === e && isFinite(i) ? i < 0 ? Math.ceil(i) : Math.floor(i) : 0
}

/**
 *
 * @param 变量
 * @returns 转换成浮点型
 */
function floatval(a) {
    return parseFloat(a) || 0
}

/**
 *
 * @param 变量
 * @returns sha1签名
 */
function sha1(r) {
    var c = function (w, j) {
        var i = (w << j) | (w >>> (32 - j));
        return i
    };
    var s = function (y) {
        var x = "";
        var w;
        var j;
        for (w = 7; w >= 0; w--) {
            j = (y >>> (w * 4)) & 15;
            x += j.toString(16)
        }
        return x
    };
    var f;
    var u, t;
    var b = new Array(80);
    var l = 1732584193;
    var h = 4023233417;
    var g = 2562383102;
    var e = 271733878;
    var d = 3285377520;
    var q, p, o, n, m;
    var v;
    r = unescape(encodeURIComponent(r));
    var a = r.length;
    var k = [];
    for (u = 0; u < a - 3; u += 4) {
        t = r.charCodeAt(u) << 24 | r.charCodeAt(u + 1) << 16 | r.charCodeAt(u + 2) << 8 | r.charCodeAt(u + 3);
        k.push(t)
    }
    switch (a % 4) {
        case 0:
            u = 2147483648;
            break;
        case 1:
            u = r.charCodeAt(a - 1) << 24 | 8388608;
            break;
        case 2:
            u = r.charCodeAt(a - 2) << 24 | r.charCodeAt(a - 1) << 16 | 32768;
            break;
        case 3:
            u = r.charCodeAt(a - 3) << 24 | r.charCodeAt(a - 2) << 16 | r.charCodeAt(a - 1) << 8 | 128;
            break
    }
    k.push(u);
    while ((k.length % 16) != 14) {
        k.push(0)
    }
    k.push(a >>> 29);
    k.push((a << 3) & 4294967295);
    for (f = 0; f < k.length; f += 16) {
        for (u = 0; u < 16; u++) {
            b[u] = k[f + u]
        }
        for (u = 16; u <= 79; u++) {
            b[u] = c(b[u - 3] ^ b[u - 8] ^ b[u - 14] ^ b[u - 16], 1)
        }
        q = l;
        p = h;
        o = g;
        n = e;
        m = d;
        for (u = 0; u <= 19; u++) {
            v = (c(q, 5) + ((p & o) | (~p & n)) + m + b[u] + 1518500249) & 4294967295;
            m = n;
            n = o;
            o = c(p, 30);
            p = q;
            q = v
        }
        for (u = 20; u <= 39; u++) {
            v = (c(q, 5) + (p ^ o ^ n) + m + b[u] + 1859775393) & 4294967295;
            m = n;
            n = o;
            o = c(p, 30);
            p = q;
            q = v
        }
        for (u = 40; u <= 59; u++) {
            v = (c(q, 5) + ((p & o) | (p & n) | (o & n)) + m + b[u] + 2400959708) & 4294967295;
            m = n;
            n = o;
            o = c(p, 30);
            p = q;
            q = v
        }
        for (u = 60; u <= 79; u++) {
            v = (c(q, 5) + (p ^ o ^ n) + m + b[u] + 3395469782) & 4294967295;
            m = n;
            n = o;
            o = c(p, 30);
            p = q;
            q = v
        }
        l = (l + q) & 4294967295;
        h = (h + p) & 4294967295;
        g = (g + o) & 4294967295;
        e = (e + n) & 4294967295;
        d = (d + m) & 4294967295
    }
    v = s(l) + s(h) + s(g) + s(e) + s(d);
    return v.toLowerCase()
};

/**
 * @returns 打印变量
 */
function log(arr) {
    console.log(arr);
}

/**
 *
 * @param 变量
 * @returns 打印数组
 */
function dump(r, n) {
    var echo = function () {
        var o = Array.prototype.slice.call(arguments);
        return console.log(o.join(" "))
    };
    var t = "", o = function (r, n) {
        for (var t = "", o = 0; o < r; o++) t += n;
        return t
    }, e = function (r, n, t, c) {
        n > 0 && n++;
        var i = o(t * n, c), u = o(t * (n + 1), c), a = "";
        if ("object" == typeof r && null !== r && r.constructor) {
            a += "Array\n" + i + "(\n";
            for (var f in r) "[object Array]" === Object.prototype.toString.call(r[f]) ? (a += u, a += "[", a += f, a += "] => ", a += e(r[f], n + 1, t, c)) : (a += u, a += "[", a += f, a += "] => ", a += r[f], a += "\n");
            a += i + ")\n"
        } else a = null === r || void 0 === r ? "" : r.toString();
        return a
    };
    return t = e(r, 0, 4, " "), !0 !== n ? (echo(t), !0) : t
}

/**
 *
 * @param 字符串
 * @param 要去除的字符,默认为空格
 * @returns 去除两边空格
 */
function trim(r, n) {
    var t = [" ", "\n", "\r", "\t", "\f", "\v", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "​", "\u2028", "\u2029", "　"].join(""),
        e = 0, i = 0;
    for (r += "", n && (t = (n + "").replace(/([[\]().?\/*{}+$^:])/g, "$1")), e = r.length, i = 0; i < e; i++) if (-1 === t.indexOf(r.charAt(i))) {
        r = r.substring(i);
        break
    }
    for (e = r.length, i = e - 1; i >= 0; i--) if (-1 === t.indexOf(r.charAt(i))) {
        r = r.substring(0, i + 1);
        break
    }
    return -1 === t.indexOf(r.charAt(0)) ? r : ""
}

/**
 *
 * @param 字符串
 * @param 要去除的字符
 * @returns 去除右边空格
 */
function rtrim(e, r) {
    return r = r ? (r + "").replace(/([[\]().?\/*{}+$^:])/g, "\\$1") : " \\s ", (e + "").replace(new RegExp("[" + r + "]+$", "g"), "")
}

/**
 *
 * @param 字符串
 * @param 要去除的字符
 * @returns 去除左边空格
 */
function ltrim(e, r) {
    return r = r ? (r + "").replace(/([[\]().?\/*{}+$^:])/g, "$1") : " \\s ", (e + "").replace(new RegExp("^[" + r + "]+", "g"), "")
}

/**
 *
 * @param 字符串
 * @returns 删除多个空格只保留一个
 */
function strtrim(a) {
    return a.replace(/\s+/g, " ");
};

/**
 *str_replace("a","我","来自于a")
 * @param 要查找的字符
 * @param 要替换的字符
 * @param 字符串
 * @returns 字符串替换
 */
function str_replace(t, o, e, c) {
    var r = 0, l = 0, n = "", a = "", i = 0, p = 0, u = [].concat(t), f = [].concat(o), g = e,
        y = "[object Array]" === Object.prototype.toString.call(f),
        b = "[object Array]" === Object.prototype.toString.call(g);
    g = [].concat(g);
    var j = "undefined" != typeof window ? window : global;
    j.$locutus = j.$locutus || {};
    var v = j.$locutus;
    if (v.php = v.php || {}, "object" == typeof t && "string" == typeof o) {
        for (n = o, o = [], r = 0; r < t.length; r += 1) o[r] = n;
        n = "", f = [].concat(o), y = "[object Array]" === Object.prototype.toString.call(f)
    }
    for (void 0 !== c && (c.value = 0), r = 0, i = g.length; r < i; r++) if ("" !== g[r]) for (l = 0, p = u.length; l < p; l++) n = g[r] + "", a = y ? void 0 !== f[l] ? f[l] : "" : f[0], g[r] = n.split(u[l]).join(a), void 0 !== c && (c.value += n.split(u[l]).length - 1);
    return b ? g : g[0]
}

/**
 *
 * @param 字符串
 * @param 保留的标签
 * @returns 去除html标签
 */
function strip_tags(input, allowed) {
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, "").replace(tags, function ($0, $1) {
        return allowed.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
    })
};

/**
 *
 * @param 字符串
 * @returns 计算字符串长度
 */
function strlen(t) {
    var n = t + "";
    return n.length
}

/**
 * @param 字符串
 * @returns 转换大写
 */
function strtolower(t) {
    return (t + "").toLowerCase()
}

/**
 * @param 字符串
 * @returns 转换小写
 */
function strtoupper(t) {
    return (t + "").toUpperCase()
}

/**
 * @param 字符串
 * @returns 转换首字母大写
 */
function ucfirst(t) {
    return t += "", t.charAt(0).toUpperCase() + t.substr(1)
}

/**
 * var1 =1;  var2 = 'vanvs'; c=compact('var1', 'var2');必须全局变量
 * @returns 变量组成数组
 */
function compact() {
    var t = "undefined" != typeof window ? window : global, o = {};
    return function n(r) {
        var e = 0, c = r.length, i = "";
        for (e = 0; e < c; e++) i = r[e], "[object Array]" === Object.prototype.toString.call(i) ? n(i) : void 0 !== t[i] && (o[i] = t[i]);
        return !0
    }(arguments), o
}

/**
 * explode(" ","我 哎 你")
 * @param 分割符号
 * @param 字符串
 * @returns 字符串转换成数组
 */
function explode(e, t, n) {
    if (arguments.length < 2 || void 0 === e || void 0 === t) return null;
    if ("" === e || !1 === e || null === e) return !1;
    if ("function" == typeof e || "object" == typeof e || "function" == typeof t || "object" == typeof t) return {0: ""};
    !0 === e && (e = "1"), e += "", t += "";
    var o = t.split(e);
    return void 0 === n ? o : (0 === n && (n = 1), n > 0 ? n >= o.length ? o : o.slice(0, n - 1).concat([o.slice(n - 1).join(e)]) : -n >= o.length ? [] : (o.splice(o.length + n), o))
}

/**
 *implode(",",[1,2,3])
 * @param 分隔符
 * @param 数组
 * @returns 数组转换字符串
 */
function implode(t, r) {
    var e = "", o = "", n = "";
    if (1 === arguments.length && (r = t, t = ""), "object" == typeof r) {
        if ("[object Array]" === Object.prototype.toString.call(r)) return r.join(t);
        for (e in r) o += n + r[e], n = t;
        return o
    }
    return r
}

/**
 *str2arr('1-2-3','-') str2arr([1,2,3],'-')
 * @returns 字符串与数组相互转换
 */
function str2arr() {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [1, 2],
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
    return is_array(r) ? implode(e, r) : explode(e, r)
}

/**
 * json2str({a:1,b:"测试"})
 * @param json对象
 * @returns json对象转换字符串
 */
function json2str(str) {
    return JSON.stringify(str);
};

/**
 * str2json("{\"a\":1,\"b\":\"测试\"}")
 * @param str
 * @returns json字符串转换对象
 */
function str2json(str) {
    return JSON.parse(str);
};

/**
 * @param html字符串
 * @returns html转换实体
 */
function htmlencode(sStr) {
    var htmlspecialchars = function (e, E, T, _) {
        var r = 0, t = 0, a = !1;
        ("undefined" == typeof E || null === E) && (E = 2), e = e.toString(), _ !== !1 && (e = e.replace(/&/g, "&amp;")), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var N = {
            ENT_NOQUOTES: 0,
            ENT_HTML_QUOTE_SINGLE: 1,
            ENT_HTML_QUOTE_DOUBLE: 2,
            ENT_COMPAT: 2,
            ENT_QUOTES: 3,
            ENT_IGNORE: 4
        };
        if (0 === E && (a = !0), "number" != typeof E) {
            for (E = [].concat(E), t = 0; t < E.length; t++) 0 === N[E[t]] ? a = !0 : N[E[t]] && (r |= N[E[t]]);
            E = r
        }
        return E & N.ENT_HTML_QUOTE_SINGLE && (e = e.replace(/'/g, "&#039;")), a || (e = e.replace(/"/g, "&quot;")), e
    };
    return htmlspecialchars(sStr);
};

/**
 * @param html字符串
 * @returns html实体还原
 */
function htmldecode(sStr) {
    var htmlspecialchars_decode = function (e, E) {
        var T = 0, _ = 0, r = !1;
        "undefined" == typeof E && (E = 2), e = e.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        var t = {
            ENT_NOQUOTES: 0,
            ENT_HTML_QUOTE_SINGLE: 1,
            ENT_HTML_QUOTE_DOUBLE: 2,
            ENT_COMPAT: 2,
            ENT_QUOTES: 3,
            ENT_IGNORE: 4
        };
        if (0 === E && (r = !0), "number" != typeof E) {
            for (E = [].concat(E), _ = 0; _ < E.length; _++) 0 === t[E[_]] ? r = !0 : t[E[_]] && (T |= t[E[_]]);
            E = T
        }
        return E & t.ENT_HTML_QUOTE_SINGLE && (e = e.replace(/&#0*39;/g, "'")), r || (e = e.replace(/&quot;/g, '"')), e = e.replace(/&amp;/g, "&")
    };
    return htmlspecialchars_decode(sStr)
};

/**
 *$_GET('qq')
 * @param 变量字符
 * @returns 获取url变量值
 */
function $_GET(c) {
    var e = c + "=", b = window.location.href, h = b.indexOf("?"), b = b.slice(h + 1), a = b.split("&"), d = 0, f = "",
        g = a.length;
    for (d = 0; d < g; d++) {
        var f = a[d];
        if (f.indexOf(e) === 0) {
            return decodeURIComponent(f.slice(e.length).replace(/\+/g, "%20"))
        }
    }
    return null
};

/**
 * $_COOKIE('a')
 * @param 名称
 * @returns 读取cookie
 */
function $_COOKIE(b) {
    var d = 0, g = "", f = b + "=", a = document.cookie.split(";"), e = a.length;
    for (d = 0; d < e; d++) {
        g = a[d].replace(/^ */, "");
        if (g.indexOf(f) === 0) {
            return decodeURIComponent(g.slice(f.length).replace(/\+/g, "%20"))
        }
    }
    return null
};

/**
 *foreach([1,2,3,4],function(k,v){log(v);})
 * @param 数组
 * @param 处理方法函数
 * @returns 循环输出
 */
function foreach(a, d) {
    var b, c, e;
    if (a && typeof a === "object" && a.change_key_case) {
        return a.foreach(d)
    }
    if (typeof this.Iterator !== "undefined") {
        var c = this.Iterator(a);
        if (d.length === 1) {
            for (e in c) {
                d(e[1])
            }
        } else {
            for (e in c) {
                d(e[0], e[1])
            }
        }
    } else {
        if (d.length === 1) {
            for (b in a) {
                if (a.hasOwnProperty(b)) {
                    d(a[b])
                }
            }
        } else {
            for (b in a) {
                if (a.hasOwnProperty(b)) {
                    d(b, a[b])
                }
            }
        }
    }
};

/**
 * preg_match('a','abc') true
 * @param 正则
 * @param 匹配字符
 * @returns 正则匹配是否存在
 */
function preg_match(e, t) {
    return new RegExp(e).test(t)
}

/**
 * preg_replace(/N/,"32","分数是N分")
 * @param 正则
 * @param 替换的内容
 * @param 字符串
 * @param 次数
 * @returns 正则替换
 */
function preg_replace(pattern, replacement, subject, limit) {
    if (typeof limit === 'undefined') limit = -1;
    if (subject.match(eval(pattern))) {
        if (limit == -1) {
            return subject.replace(eval(pattern + 'g'), replacement);
        } else {
            for (x = 0; x < limit; x++) {
                subject = subject.replace(eval(pattern), replacement);
            }
            return subject;
        }
    } else {
        return subject;
    }
}

/**
 * @param base64编码
 * @returns base64还原
 */
function base64_decode(n) {
    var r = function (n) {
        return decodeURIComponent(n.split("").map(function (n) {
            return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)
        }).join(""))
    };
    if ("undefined" == typeof window) return new Buffer(n, "base64").toString("utf-8");
    if (void 0 !== window.atob) return r(window.atob(n));
    var e, t, o, i, d, f, a, c, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", h = 0, w = 0,
        C = "", g = [];
    if (!n) return n;
    n += "";
    do {
        i = u.indexOf(n.charAt(h++)), d = u.indexOf(n.charAt(h++)), f = u.indexOf(n.charAt(h++)), a = u.indexOf(n.charAt(h++)), c = i << 18 | d << 12 | f << 6 | a, e = c >> 16 & 255, t = c >> 8 & 255, o = 255 & c, g[w++] = 64 === f ? String.fromCharCode(e) : 64 === a ? String.fromCharCode(e, t) : String.fromCharCode(e, t, o)
    } while (h < n.length);
    return C = g.join(""), r(C.replace(/\0+$/, ""))
}

/**
 * @param 字符串
 * @returns base64编码
 */
function base64_encode(e) {
    var r = function (e) {
        return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, r) {
            return String.fromCharCode("0x" + r)
        })
    };
    if ("undefined" == typeof window) return new Buffer(e).toString("base64");
    if (void 0 !== window.btoa) return window.btoa(r(e));
    var n, t, o, i, a, c, d, f, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", u = 0, w = 0,
        A = "", l = [];
    if (!e) return e;
    e = r(e);
    do {
        n = e.charCodeAt(u++), t = e.charCodeAt(u++), o = e.charCodeAt(u++), f = n << 16 | t << 8 | o, i = f >> 18 & 63, a = f >> 12 & 63, c = f >> 6 & 63, d = 63 & f, l[w++] = h.charAt(i) + h.charAt(a) + h.charAt(c) + h.charAt(d)
    } while (u < e.length);
    A = l.join("");
    var C = e.length % 3;
    return (C ? A.slice(0, C - 3) : A) + "===".slice(C || 3)
}

/**
 *  @param 字符串
 * @returns URL编码
 */
function urlencode(e) {
    return e += "", encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/~/g, "%7E").replace(/%20/g, "+")
}

/**
 *
 * @param 字符串
 * @returns  URL解码
 */
function urldecode(e) {
    return decodeURIComponent((e + "").replace(/%(?![\da-f]{2})/gi, function () {
        return "%25"
    }).replace(/\+/g, "%20"))
}

/**
 * @returns unicode解码表情中文
 */
function unicode_decode(e) {
    return e = e.replace(/\\/g, "%"), unescape(e)
}

/**
 * @param 字符串
 * @param 是否中文也编码
 * @returns unicode编码中文表情
 */
function unicode_encode(n) {
    if (1 == (arguments.length > 1 && void 0 !== arguments[1] && arguments[1])) {
        for (var r = [], t = 0; t < n.length; t++) r[t] = ("00" + n.charCodeAt(t).toString(16)).slice(-4);
        return "\\u" + r.join("\\u")
    }
    var e = function (n) {
        for (var r = [], t = 0; t < n.length; t++) r[t] = ("00" + n.charCodeAt(t).toString(16)).slice(-4);
        return "\\u" + r.join("\\u")
    }, u = /[\ud800-\udbff][\udc00-\udfff]/g;
    return n = n.replace(u, function (n) {
        return 2 === n.length ? e(n) : n
    })
}

/**
 * @param 字符串 emoji_encode("😋😘我们")
 * @returns 编码emoji
 */
function emoji_encode(e) {
    var n = /[\ud800-\udbff][\udc00-\udfff]/g;
    return e = e.replace(n, function (e) {
        var n, r;
        return 2 === e.length ? (n = e.charCodeAt(0), r = e.charCodeAt(1), "&#" + (1024 * (n - 55296) + 65536 + r - 56320) + ";") : e
    })
}

/**
 * emoji_decode("&#128523;&#128536;我们")
 * @param 字符串
 * @returns 解码emoji仅js中需要
 */
function emoji_decode(e) {
    var n = /\&#.*?;/g;
    return e.replace(n, function (e) {
        var n, r, t;
        return 9 == e.length ? (t = parseInt(e.match(/[0-9]+/g)), n = Math.floor((t - 65536) / 1024) + 55296, r = (t - 65536) % 1024 + 56320, unescape("%u" + n.toString(16) + "%u" + r.toString(16))) : e
    })
}

/**
 *base_convert(1234,10,2)10进制转2进制
 * @param 数字
 * @param 原进制
 * @param 新进制
 * @returns 任意进制转换
 */
function base_convert(n, t, r) {
    return parseInt(n + "", 0 | t).toString(0 | r)
}

/**
 * 证书+1 负数取本身 -3.23 得-3
 * @param 数字
 * @returns 进1法取整
 */
function ceil(c) {
    return Math.ceil(c)
}

/**
 * 正数取整 负数+1取整 -3.2得4
 * @param 数字
 * @returns 舍去取整
 */
function floor(o) {
    return Math.floor(o)
}

/**
 *number_format('150.456', 2, '.', ',')
 * @param 数字
 * @param 保留小数位数
 * @param 小数点显示符号
 * @param 千分位符号
 * @returns 格式化数字
 */
function number_format(e, n, t, i) {
    e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
    var r = isFinite(+e) ? +e : 0, o = isFinite(+n) ? Math.abs(n) : 0, a = void 0 === i ? "," : i,
        d = void 0 === t ? "." : t, u = "";
    return u = (o ? function (e, n) {
        if (-1 === ("" + e).indexOf("e")) return +(Math.round(e + "e+" + n) + "e-" + n);
        var t = ("" + e).split("e"), i = "";
        return +t[1] + n > 0 && (i = "+"), (+(Math.round(+t[0] + "e" + i + (+t[1] + n)) + "e-" + n)).toFixed(n)
    }(r, o).toString() : "" + Math.round(r)).split("."), u[0].length > 3 && (u[0] = u[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, a)), (u[1] || "").length < o && (u[1] = u[1] || "", u[1] += new Array(o - u[1].length + 1).join("0")), u.join(d)
}

/**
 * 可以不要参数
 * @param 最小
 * @param 最大
 * @returns 生成更好随机数
 */
function mt_rand(r, e) {
    var n = arguments.length;
    if (0 === n) r = 0, e = 2147483647; else {
        if (1 === n) throw new Error("Warning: mt_rand() expects exactly 2 parameters, 1 given");
        r = parseInt(r, 10), e = parseInt(e, 10)
    }
    return Math.floor(Math.random() * (e - r + 1)) + r
}

/**
 * 可以不要参数
 * @param 最小
 * @param 最大
 * @returns 生成随机数
 */
function rand(r, e) {
    var n = arguments.length;
    if (0 === n) r = 0, e = 2147483647; else if (1 === n) throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");
    return Math.floor(Math.random() * (e - r + 1)) + r
}

/**
 *
 * @param 数字
 * @param 保留位数
 * @returns 四舍五入
 */
function round(a, r, _) {
    var e, t, o, D;
    if (r |= 0, e = Math.pow(10, r), a *= e, D = a > 0 | -(a < 0), o = a % 1 == .5 * D, t = Math.floor(a), o) switch (_) {
        case"PHP_ROUND_HALF_DOWN":
            a = t + (D < 0);
            break;
        case"PHP_ROUND_HALF_EVEN":
            a = t + t % 2 * D;
            break;
        case"PHP_ROUND_HALF_ODD":
            a = t + !(t % 2);
            break;
        default:
            a = t + (D > 0)
    }
    return (o ? a : Math.round(a)) / e
}

/**
 *strcut("我爱中国人",4,"...")
 * @param 字符串
 * @param 长度中文汉字算两个
 * @param 显示符号
 * @returns 字符串截取
 */
function strcut(str, iMaxBytes, sSuffix) {
    if (isNaN(iMaxBytes)) {
        return str
    }
    if (strlen(str) <= iMaxBytes) {
        return str
    }
    var i = 0, bytes = 0;
    for (; i < str.length && bytes < iMaxBytes; ++i, ++bytes) {
        if (str.charCodeAt(i) > 255) {
            ++bytes
        }
    }
    sSuffix = sSuffix || "";
    return (bytes - iMaxBytes == 1 ? str.substr(0, i - 1) : str.substr(0, i)) + sSuffix
};

/**
 * @param 字符串
 * @param 子字符串
 * @returns 查找字符串
 */
function strfind(string, find) {
    return !(string.indexOf(find) === -1);
};

/**
 * date_eq('2019-10-22','2019-10-21') true
 * @param 前日期
 * @param 后日期
 * @returns 判断日期是否前边大于后边
 */
function date_eq(strDate1, strDate2) {
    var date1 = new Date(strDate1.replace(/\-/g, "\/"));
    var date2 = new Date(strDate2.replace(/\-/g, "\/"));
    if ((date1 - date2) >= 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param 时间戳10位
 * @returns 格式化时间
 */
function timeline(tt) {
    var today = new Date();
    var d = new Date(tt * 1000);
    var m = today.getTime() - d.getTime();
    if (m <= 0) {
        m = 1000
    }
    if (m < 60 * 1000) {
        return Math.floor(m / 1000) + "秒前"
    } else {
        if (m < 60 * 60 * 1000) {
            return Math.floor(m / (1000 * 60)) + "分钟前"
        } else {
            if (m < 60 * 60 * 1000 * 24) {
                return Math.floor(m / (1000 * 60 * 60)) + "小时前"
            } else {
                if (m < 60 * 60 * 1000 * 24 * 7) {
                    return Math.floor(m / (1000 * 60 * 60 * 24)) + "天前"
                } else {
                    if (m < 60 * 60 * 1000 * 24 * 7 * 56) {
                        return Math.floor(m / (1000 * 60 * 60 * 24 * 7)) + "周前"
                    } else {
                        return Math.floor(m / (1000 * 60 * 60 * 24 * 7 * 52)) + "年前"
                    }
                }
            }
        }
    }
};
/**
 * @param str1
 * @param str2
 * @returns 判断两个字符串是否相等
 */
var is_eq = function (str1, str2) {
    if (str1 == str2) {
        return (true)
    } else {
        return (false)
    }
};
/**
 *
 * @param num
 * @returns 判断是否数字
 */
var is_num = function (num) {
    // var reg=new RegExp("^[0-9]*$");return reg.test(num)
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
};
/**
 *
 * @param num
 * @returns 判断是否手机号
 */
var is_phone = function (num) {
    var reg = /^1\d{10}$/;
    return reg.test(num)
};
/**
 *
 * @param num
 * @returns 判断是否QQ
 */
var is_qq = function (num) {
    var reg = /^[1-utf8_decode]{1}\d{4,11}$/;
    return reg.test(num)
};
/**
 *
 * @param num
 * @returns 判断是否邮箱
 */
var is_email = function (num) {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return reg.test(num)
};
/**
 *
 * @param num
 * @returns 判断是否身份证
 */
var is_id = function (num) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(num)
};
/**
 *
 * @param num
 * @returns 判断是否中文
 */
var is_chinese = function (num) {
    var reg = /[\u4e00-\u9fa5]/g;
    return reg.test(num)
};
/**
 * @param num 数字字母组成,下划钱字母开头
 * @returns 判断是否符合注册用户名
 */
var is_reg = function (num) {
    var reg = /^([a-zA-z_]{1})([\w]*)$/g;
    return reg.test(num)
};
/**
 *
 * @param str
 * @returns 判断是否电话
 */
var is_tel = function (str) {
    var reg = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
    return reg.test(str)
};
/**
 *
 * @param strIP
 * @returns 判断是否是IP
 */
var is_ip = function (strIP) {
    if (isNull(strIP)) {
        return false
    }
    var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g;
    if (re.test(strIP)) {
        if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) {
            return true
        }
    }
    return false
};
/**
 *
 * @param str
 * @returns 判断是否邮编
 */
var is_zipcode = function (str) {
    var reg = /^(\d){6}$/;
    return reg.test(str)
};
/**
 *
 * @param str
 * @returns 判断是否英文
 */
var is_english = function (str) {
    var reg = /^[A-Za-z]+$/;
    return reg.test(str)
};
/**
 *
 * @param str
 * @returns 判断是否是URL
 */
var is_url = function (url) {
    var strRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
    var re = new RegExp(strRegex);
    return re.test(url);
};
/**
 *
 * @param 整数
 * @param 最小
 * @param 最大
 * @returns 判断是否在两个整数内
 */
var in_int = function (n, iMin, iMax) {
    if (!isFinite(n)) {
        return false
    }
    if (!/^[+-]?\d+$/.test(n)) {
        return false
    }
    if (iMin != undefined && parseInt(n) < parseInt(iMin)) {
        return false
    }
    if (iMax != undefined && parseInt(n) > parseInt(iMax)) {
        return false
    }
    return true
};
/**
 *
 * @param 浮点数
 * @param 最小
 * @param 最大
 * @returns 判断是否在两个浮点数之内
 */
var in_float = function (n, fMin, fMax) {
    if (!isFinite(n)) {
        return false
    }
    if (fMin != undefined && parseFloat(n) < parseFloat(fMin)) {
        return false
    }
    if (fMax != undefined && parseFloat(n) > parseFloat(fMax)) {
        return false
    }
    return true
};
/**
 *
 * @param url
 * @returns 判断是否http
 */
var is_http = function (url) {
    if (url.indexOf("http://") === -1 && url.indexOf("https://") === -1) {
        return false
    }
    return true
};

/**
 *
 * @param 数字
 * @returns 判断是否金额
 */
function is_money(n) {
    return !!/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(n)
}

/**
 * 类型 info success warn 没有url close自动关闭 goto跳转弹出 gopage跳转页面
 * 提示语
 * URL
 * @returns 弹出框
 */
function msg() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "info",
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    "close" == e ? ("" != i && alert(i), document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.call("closeWindow")
    })) : "gopage" == e ? (i = "" == i ? "" : i, document.write("<meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=0'><div style='font-size:16px;margin:30px auto;text-align:center;'>" + i + "</div>"), "" != t && (location.href = t)) : "goto" == e ? ("" == i || alert(i), "" == t || (location.href = t)) : "info" != e && "success" != e && "warn" != e || (document.write("<meta charset='utf-8'><title>提示</title><meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0'><link rel='stylesheet'  href='https://res.wx.qq.com/open/libs/weui/0.4.3/weui.min.css'><div class='weui_msg'><div class='weui_icon_area'><i class='weui_icon_" + e + " weui_icon_msg'></i></div><div class='weui_text_area'><h4 class='weui_msg_title'>" + i + "</h4></div></div>"), document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.call("hideOptionMenu")
    }))
}

/**
 *
 * @param 获取id
 * @param json数据
 * @returns 模板解析函数
 */
function tpl(a, d) {
    var c = function (l) {
        var j, h = [], g = [];
        for (j in l) {
            h.push(j);
            g.push(l[j])
        }
        return (new Function(h, c.$)).apply(l, g)
    };
    if (!c.$) {
        var f = a.split("<%");
        c.$ = "var $=''";
        for (var b = 0; b < f.length; b++) {
            var e = f[b].split("%>");
            if (b != 0) {
                c.$ += "=" == e[0].charAt(0) ? "+(" + e[0].substr(1) + ")" : ";" + e[0].replace(/\r\n/g, "") + "$=$"
            }
            c.$ += "+'" + e[e.length - 1].replace(/\'/g, "\\'").replace(/\r\n/g, "\\n").replace(/\n/g, "\\n").replace(/\r/g, "\\n") + "'"
        }
        c.$ += ";return $;"
    }
    return d ? c(d) : c
};
/**
 *
 * @returns 全局浏览器变量
 */
var browser = {
    version: function () {
        var u = navigator.userAgent.toLowerCase(), app = navigator.appVersion;
        return {
            ie: u.indexOf("trident") > -1,
            opera: u.indexOf("tresto") > -1,
            webKit: u.indexOf("applewebkit") > -1,
            firefox: u.indexOf("gecko") > -1 && u.indexOf("khtml") == -1,
            mobile: !!u.match(/applewebkit.*mobile.*/),
            ios: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/),
            android: u.indexOf("android") > -1 || u.indexOf("linux") > -1,
            iphone: u.indexOf("iphone") > -1,
            ipad: u.indexOf("ipad") > -1,
            weixin: u.match(/micromessenger/i) == "micromessenger"
        }
    }(), language: (navigator.browserLanguage || navigator.language).toLowerCase(), wifi: !function (t) {
        var e = !0, n = t.navigator.userAgent, i = t.navigator.connection;
        if (/MicroMessenger/.test(n)) if (/NetType/.test(n)) {
            var o = n.match(/NetType\/(\S)+/)[0].replace("NetType/", "");
            o && "WIFI" != o && (e = !1)
        } else document.addEventListener("WeixinJSBridgeReady", function () {
            WeixinJSBridge.invoke("getNetworkType", {}, function (t) {
                "network_type:wifi" != t.err_msg && (e = !1)
            })
        }); else if (i) {
            var a = i.type;
            "wifi" != a && "2" != a && "unknown" != a && (e = !1)
        }
        t.wifi = e
    }(window)
};

/**
 *
 * @returns 显示全部函数
 */
function fn() {
    var o = "", t = [], n = {};
    for (o in this.window) try {
        if ("function" == typeof this.window[o]) n[o] || (n[o] = 1, t.push(o)); else if ("object" === _typeof(this.window[o])) for (var i in this.window[o]) "function" == typeof this.window[i] && this.window[i] && !n[i] && (n[i] = 1, t.push(i))
    } catch (o) {
    }
    return t
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o
} : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
};
/**
 * ls.set("text", "this is string",3*1000);
 * ls.get("text")
 * ls.remove("a")
 * ls.clear()
 * @returns localStorage带过期
 */
!function (e) {
    var t = {};
    e.localStorage ? t.support = !0 : t.support = !1, t.set = function (e, o, i) {
        if (this.support) {
            if ("string" != typeof e) return;
            if (i) {
                if ("number" != typeof i) return;
                i = parseInt(i) + (new Date).getTime()
            } else i = null;
            var r = {value: JSON.stringify(o), time: i};
            localStorage.setItem(e, JSON.stringify(r))
        } else t.setCookie(e, o, i)
    }, t.get = function (e) {
        if (this.support) {
            var o = JSON.parse(localStorage.getItem(e));
            return o ? o.time && o.time < (new Date).getTime() ? (localStorage.removeItem(e), null) : JSON.parse(o.value) : null
        }
        t.getCookie(e)
    }, t.remove = function (e) {
        this.support ? localStorage.removeItem(e) : t.removeCookie(e)
    }, t.clear = function () {
        this.support ? localStorage.clear() : t.clearCookie()
    }, t.setCookie = function (e, t, o) {
        if ("string" == typeof e) {
            "number" != typeof o && (o = 31536e6);
            var i = new Date;
            i.setTime(i.getTime() + o), document.cookie = e + "=" + t + "; expires=" + i.toGMTString()
        }
    }, t.getCookie = function (e) {
        for (var t, o = document.cookie.split(";"), i = 0; i < o.length; i++) if (e == o[i].split("=")[0]) {
            t = o[i].split("=")[1];
            break
        }
        return t
    }, t.removeCookie = function (e) {
        document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }, t.clearCookie = function () {
        for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) document.cookie = e[t].split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }, e.ls = t
}(window);

/**
 *
 * @param 0未知 1男 2女
 * @returns 返回性别名称
 */
function sex(sex) {
    const arr = ['未知', '男', '女'];
    return arr[sex];
}

/**
 * @param 字符
 * @returns 隐藏银行号码
 */
function hidebank(s) {
    return s.replace(/^(\d{8})\d+(\d{4})$/, "$1*******$2");
}

/**
 * @param 字符串
 * @returns 隐藏手机号中间四位
 */
function hidephone(s) {
    return s.replace(/^(\d{3})\d+(\d{4})$/, "$1****$2");
}

/**
 *
 * @param css代码
 * @returns 添加css代码
 */
function addcss(e) {
    var t = document.createElement("style"), d = document.head || document.getElementsByTagName("head")[0];
    if (t.type = "text/css", t.styleSheet) {
        var a = function () {
            try {
                t.styleSheet.cssText = e
            } catch (e) {
            }
        };
        t.styleSheet.disabled ? setTimeout(a, 10) : a()
    } else {
        var s = document.createTextNode(e);
        t.appendChild(s)
    }
    d.appendChild(t)
}

/**
 * @param js代码
 * @returns 添加js代码
 */
function addjs(t) {
    var e = document.createElement("script");
    e.type = "text/javascript";
    try {
        e.appendChild(document.createTextNode(t))
    } catch (d) {
        e.text = t
    }
    document.head.appendChild(e)
}

/**
 *
 * @param js文件路径
 * @param 回调函数
 * @returns 加载js支持回调
 */
function loadjs(e, a) {
    var t = document.createElement("script");
    t.src = e, t.onload = function () {
        var e = t.readyState && "complete" != t.readyState && "loaded" != t.readyState;
        a && a(!e)
    }, document.head.appendChild(t)
}

/**
 *
 * @param css路径
 * @param 回调函数
 * @returns 加载css支持回调
 */
function loadcss(e, n) {
    var t = document.createElement("link");
    t.rel = "stylesheet", t.type = "text/css", t.onerror = function () {
        n(!1)
    }, t.onload = function () {
        n(!0)
    }, t.href = e, document.head.appendChild(t)
}

/**
 *
 * @returns 当前域名主机
 */
function gethost() {
    return window.location.protocol + "//" + window.location.host;
}

function clearAllCookie() {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    console.log("需要删除的cookie名字：" + keys);
    if (keys) {
        for (var i = keys.length; i--;) {
            document.cookie = keys[i] + "=0; expire=" + date.toGMTString() + "; path=/";
        }
    }
}

/**
 * isfollowqr(null,true,"标题","内容")
 * 图片绝对路径
 * 是否显示关闭 默认true
 * 标题
 * 描述
 * @returns 关注二维码扫
 */
function isfollowqr() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "http://open.weixin.qq.com/qr/code?username=blyd99",
        o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "关注公众号",
        d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "感谢关注",
        n = document.createElement("div");
    n.classList.add("weui-model");
    var t = 1 == o ? '<span class="close" onclick="$(\'.weui-model\').remove();"></span>' : "",
        l = 1 == o ? "onclick=\"$('.weui-model').remove();\"" : "";
    n.innerHTML = '<div class="model-mask"  ' + l + '></div><div class="model-main">' + t + '<div class="model-head"><div class="m-title"><p>' + i + "</p><p>" + d + '</p></div></div><div class="model-body"><div class="follow">\n    <img src="' + e + '">\n    <p>长按识别图中二维码</p>\n</div></div></div>', document.body.appendChild(n), addcss(".weui-model{width:100%;height:100%;position:fixed;z-index:9999;top:0;left:0;display:block;text-align:center}\n.model-mask{width:100%;height:100%;background-color:#000;opacity:.7;cursor:pointer}\n.model-main{width:80%;min-height:2.5em;background-color:#fff;color:#333;z-index:99999;border-radius:.2em;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n.model-main .close{position:absolute;top:-45px;right:-10px;width:35px;height:35px;padding:5px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAC70lEQVRIS52WTajVVRTFf6usaCKCQWRNmokNFGtUmNgzyMrvED/AgZEmiOCgqIZNkiwzFNICDcHPUWCkA0mLQM1IFCRRQdRUzIImKRK2ZMn5P87z3f+997UnF+45/732x9p7HdHFbD8MvATMA54FxgFjgRvAFeAo8A3wg6Q7ba7UdmB7EfAp8AewC/ge+B34C3gCeBp4Hci9W8AaSfs6+RsGYjuR7gWSxTuSEm2r2X4AWAx8CJwGFkr6p/5gCIjtCcABYKOkdd2c339m+xFgDzAemCHpQnNnEMT2k8DxEv2OkQA0d23H3xfA1PRQ0s2c3QOx/SBwEvhE0tf/B6ACiq+fgHOSltYgy4HpkhZUl8ekuZJO9AK1nW8PVt8+HpAQQ9KPsj0KuAgMSDpTXZwDbC//p4wdzfZK4GNgsqQ4vme2VwNvSpoYkJeB9yQNdGhm0t3UBmR7GfB5qcKx+vtChNB9ICBp1FlJn3UK1XaANhZHgxnZXgJsKQEMAaiyyaCeD8gvwHJJv3YpycLiMLU/bvsNYFuhaprcVso1wNyAXAUmScpkt5rtBijz8y7wqqRWgNKXBLMuILeBRyX91weLvgTeAj6Q9FEf96cA+wNyrTAjv90yaUq0NkQBZko63OObmSFOQDIHb0vq2Lwq7a1NiWy/BuzuBWR7BbAsIF8BZyRl4w4z27OAncArdQ/6AbKdwG4FZD6wStK0DnMSgOyx2ZKy6odYNyDbDxVZWBKQ0cAl4EVJpyqOp2nZyKn9MIDqXlO60Huw5GVQN0TomgUZSkb9nm9YViY2q+JIHyx6AfhZ0r+lh9Gi88B6SRsakKSWYfxW0vu9nPY6t51BnQQ8F1mu9eSpRFP2WBbjiK3oSVZQ6D5R0vU4uV8ZnwG+Azb3M2x1FJUyJoMo42/NeZvGR0YjpyPV+LNF4/+uA+j2WsnjILOTlDN4YdjlltdKVlICyr1h1gpSsSQ6M7e8u/IUegz4s7y7svqzzg81zOoEchflLmD7O1+wYQAAAABJRU5ErkJggg==) no-repeat center center;background-size:auto;background-size:25px 25px}\n.model-main .model-head{font-size:20px;padding:.6em 0;background:-webkit-gradient(linear,left top,left bottom,from(#fd7a71),to(#e5484c));background:-webkit-linear-gradient(top,#fd7a71,#e5484c);background:linear-gradient(to bottom,#fd7a71,#e5484c);border-radius:.1em .1em 0 0;position:relative}\n.model-main .model-head p{color:#fff}.model-main .model-head p:nth-child(1){font-size:20px;line-height:1.5;font-weight:bold}\n.model-main .model-head p:nth-child(2){font-size:16px;line-height:1.5}.model-main .model-body{padding:.5em;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:5em;width:100%}\n.model-main .model-body img{margin-top:.1em;width:70%}.model-main .model-body p{color:#333;line-height:1.6;font-size:16px}")
}


(function (root, factory) {
    if (typeof exports === 'object') {
        // Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.JSAESKey = factory();
    }
}(this, function () {
    'use strict';

    var Nr = 14,
        /* Default to 256 Bit Encryption */
        Nk = 8,
        Decrypt = false,

        enc_utf8 = function (s) {
            try {
                return unescape(encodeURIComponent(s));
            } catch (e) {
                throw 'Error on UTF-8 encode';
            }
        },

        dec_utf8 = function (s) {
            try {
                return decodeURIComponent(escape(s));
            } catch (e) {
                throw ('Bad Key');
            }
        },

        padBlock = function (byteArr) {
            var array = [],
                cpad, i;
            if (byteArr.length < 16) {
                cpad = 16 - byteArr.length;
                array = [cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad, cpad];
            }
            for (i = 0; i < byteArr.length; i++) {
                array[i] = byteArr[i];
            }
            return array;
        },

        block2s = function (block, lastBlock) {
            var string = '',
                padding, i;
            if (lastBlock) {
                padding = block[15];
                if (padding > 16) {
                    throw ('Decryption error: Maybe bad key');
                }
                if (padding === 16) {
                    return '';
                }
                for (i = 0; i < 16 - padding; i++) {
                    string += String.fromCharCode(block[i]);
                }
            } else {
                for (i = 0; i < 16; i++) {
                    string += String.fromCharCode(block[i]);
                }
            }
            return string;
        },

        a2h = function (numArr) {
            var string = '',
                i;
            for (i = 0; i < numArr.length; i++) {
                string += (numArr[i] < 16 ? '0' : '') + numArr[i].toString(16);
            }
            return string;
        },

        h2a = function (s) {
            var ret = [];
            s.replace(/(..)/g,
                function (s) {
                    ret.push(parseInt(s, 16));
                });
            return ret;
        },

        s2a = function (string, binary) {
            var array = [],
                i;

            if (!binary) {
                string = enc_utf8(string);
            }

            for (i = 0; i < string.length; i++) {
                array[i] = string.charCodeAt(i);
            }

            return array;
        },

        size = function (newsize) {
            switch (newsize) {
                case 128:
                    Nr = 10;
                    Nk = 4;
                    break;
                case 192:
                    Nr = 12;
                    Nk = 6;
                    break;
                case 256:
                    Nr = 14;
                    Nk = 8;
                    break;
                default:
                    throw ('Invalid Key Size Specified:' + newsize);
            }
        },

        randArr = function (num) {
            var result = [],
                i;
            for (i = 0; i < num; i++) {
                result = result.concat(Math.floor(Math.random() * 256));
            }
            return result;
        },

        openSSLKey = function (passwordArr, saltArr) {
            // Number of rounds depends on the size of the AES in use
            // 3 rounds for 256
            //        2 rounds for the key, 1 for the IV
            // 2 rounds for 128
            //        1 round for the key, 1 round for the IV
            // 3 rounds for 192 since it's not evenly divided by 128 bits
            var rounds = Nr >= 12 ? 3 : 2,
                key = [],
                iv = [],
                md5_hash = [],
                result = [],
                data00 = passwordArr.concat(saltArr),
                i;
            md5_hash[0] = MD5(data00);
            result = md5_hash[0];
            for (i = 1; i < rounds; i++) {
                md5_hash[i] = MD5(md5_hash[i - 1].concat(data00));
                result = result.concat(md5_hash[i]);
            }
            key = result.slice(0, 4 * Nk);
            iv = result.slice(4 * Nk, 4 * Nk + 16);
            return {
                key: key,
                iv: iv
            };
        },

        rawEncrypt = function (plaintext, key, iv) {
            // plaintext, key and iv as byte arrays
            key = expandKey(key);
            var numBlocks = Math.ceil(plaintext.length / 16),
                blocks = [],
                i,
                cipherBlocks = [];
            for (i = 0; i < numBlocks; i++) {
                blocks[i] = padBlock(plaintext.slice(i * 16, i * 16 + 16));
            }
            if (plaintext.length % 16 === 0) {
                blocks.push([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]);
                // CBC OpenSSL padding scheme
                numBlocks++;
            }
            for (i = 0; i < blocks.length; i++) {
                blocks[i] = (i === 0) ? xorBlocks(blocks[i], iv) : xorBlocks(blocks[i], cipherBlocks[i - 1]);
                cipherBlocks[i] = encryptBlock(blocks[i], key);
            }
            return cipherBlocks;
        },

        rawDecrypt = function (cryptArr, key, iv, binary) {
            //  cryptArr, key and iv as byte arrays
            key = expandKey(key);
            var numBlocks = cryptArr.length / 16,
                cipherBlocks = [],
                i,
                plainBlocks = [],
                string = '';
            for (i = 0; i < numBlocks; i++) {
                cipherBlocks.push(cryptArr.slice(i * 16, (i + 1) * 16));
            }
            for (i = cipherBlocks.length - 1; i >= 0; i--) {
                plainBlocks[i] = decryptBlock(cipherBlocks[i], key);
                plainBlocks[i] = (i === 0) ? xorBlocks(plainBlocks[i], iv) : xorBlocks(plainBlocks[i], cipherBlocks[i - 1]);
            }
            for (i = 0; i < numBlocks - 1; i++) {
                string += block2s(plainBlocks[i]);
            }
            string += block2s(plainBlocks[i], true);
            return binary ? string : dec_utf8(string);
        },

        encryptBlock = function (block, words) {
            Decrypt = false;
            var state = addRoundKey(block, words, 0),
                round;
            for (round = 1; round < (Nr + 1); round++) {
                state = subBytes(state);
                state = shiftRows(state);
                if (round < Nr) {
                    state = mixColumns(state);
                }
                //last round? don't mixColumns
                state = addRoundKey(state, words, round);
            }

            return state;
        },

        decryptBlock = function (block, words) {
            Decrypt = true;
            var state = addRoundKey(block, words, Nr),
                round;
            for (round = Nr - 1; round > -1; round--) {
                state = shiftRows(state);
                state = subBytes(state);
                state = addRoundKey(state, words, round);
                if (round > 0) {
                    state = mixColumns(state);
                }
                //last round? don't mixColumns
            }

            return state;
        },

        subBytes = function (state) {
            var S = Decrypt ? SBoxInv : SBox,
                temp = [],
                i;
            for (i = 0; i < 16; i++) {
                temp[i] = S[state[i]];
            }
            return temp;
        },

        shiftRows = function (state) {
            var temp = [],
                shiftBy = Decrypt ? [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3] : [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11],
                i;
            for (i = 0; i < 16; i++) {
                temp[i] = state[shiftBy[i]];
            }
            return temp;
        },

        mixColumns = function (state) {
            var t = [],
                c;
            if (!Decrypt) {
                for (c = 0; c < 4; c++) {
                    t[c * 4] = G2X[state[c * 4]] ^ G3X[state[1 + c * 4]] ^ state[2 + c * 4] ^ state[3 + c * 4];
                    t[1 + c * 4] = state[c * 4] ^ G2X[state[1 + c * 4]] ^ G3X[state[2 + c * 4]] ^ state[3 + c * 4];
                    t[2 + c * 4] = state[c * 4] ^ state[1 + c * 4] ^ G2X[state[2 + c * 4]] ^ G3X[state[3 + c * 4]];
                    t[3 + c * 4] = G3X[state[c * 4]] ^ state[1 + c * 4] ^ state[2 + c * 4] ^ G2X[state[3 + c * 4]];
                }
            } else {
                for (c = 0; c < 4; c++) {
                    t[c * 4] = GEX[state[c * 4]] ^ GBX[state[1 + c * 4]] ^ GDX[state[2 + c * 4]] ^ G9X[state[3 + c * 4]];
                    t[1 + c * 4] = G9X[state[c * 4]] ^ GEX[state[1 + c * 4]] ^ GBX[state[2 + c * 4]] ^ GDX[state[3 + c * 4]];
                    t[2 + c * 4] = GDX[state[c * 4]] ^ G9X[state[1 + c * 4]] ^ GEX[state[2 + c * 4]] ^ GBX[state[3 + c * 4]];
                    t[3 + c * 4] = GBX[state[c * 4]] ^ GDX[state[1 + c * 4]] ^ G9X[state[2 + c * 4]] ^ GEX[state[3 + c * 4]];
                }
            }

            return t;
        },

        addRoundKey = function (state, words, round) {
            var temp = [],
                i;
            for (i = 0; i < 16; i++) {
                temp[i] = state[i] ^ words[round][i];
            }
            return temp;
        },

        xorBlocks = function (block1, block2) {
            var temp = [],
                i;
            for (i = 0; i < 16; i++) {
                temp[i] = block1[i] ^ block2[i];
            }
            return temp;
        },

        expandKey = function (key) {
            // Expects a 1d number array
            var w = [],
                temp = [],
                i,
                r,
                t,
                flat = [],
                j;

            for (i = 0; i < Nk; i++) {
                r = [key[4 * i], key[4 * i + 1], key[4 * i + 2], key[4 * i + 3]];
                w[i] = r;
            }

            for (i = Nk; i < (4 * (Nr + 1)); i++) {
                w[i] = [];
                for (t = 0; t < 4; t++) {
                    temp[t] = w[i - 1][t];
                }
                if (i % Nk === 0) {
                    temp = subWord(rotWord(temp));
                    temp[0] ^= Rcon[i / Nk - 1];
                } else if (Nk > 6 && i % Nk === 4) {
                    temp = subWord(temp);
                }
                for (t = 0; t < 4; t++) {
                    w[i][t] = w[i - Nk][t] ^ temp[t];
                }
            }
            for (i = 0; i < (Nr + 1); i++) {
                flat[i] = [];
                for (j = 0; j < 4; j++) {
                    flat[i].push(w[i * 4 + j][0], w[i * 4 + j][1], w[i * 4 + j][2], w[i * 4 + j][3]);
                }
            }
            return flat;
        },

        subWord = function (w) {
            // apply SBox to 4-byte word w
            for (var i = 0; i < 4; i++) {
                w[i] = SBox[w[i]];
            }
            return w;
        },

        rotWord = function (w) {
            // rotate 4-byte word w left by one byte
            var tmp = w[0],
                i;
            for (i = 0; i < 4; i++) {
                w[i] = w[i + 1];
            }
            w[3] = tmp;
            return w;
        },

        // jlcooke: 2012-07-12: added strhex + invertArr to compress G2X/G3X/G9X/GBX/GEX/SBox/SBoxInv/Rcon saving over 7KB, and added encString, decString
        strhex = function (str, size) {
            var i, ret = [];
            for (i = 0; i < str.length; i += size) {
                ret[i / size] = parseInt(str.substr(i, size), 16);
            }
            return ret;
        },
        invertArr = function (arr) {
            var i, ret = [];
            for (i = 0; i < arr.length; i++) {
                ret[arr[i]] = i;
            }
            return ret;
        },
        Gxx = function (a, b) {
            var i, ret;

            ret = 0;
            for (i = 0; i < 8; i++) {
                ret = ((b & 1) === 1) ? ret ^ a : ret;
                /* xmult */
                a = (a > 0x7f) ? 0x11b ^ (a << 1) : (a << 1);
                b >>>= 1;
            }

            return ret;
        },
        Gx = function (x) {
            var i, r = [];
            for (i = 0; i < 256; i++) {
                r[i] = Gxx(x, i);
            }
            return r;
        },

        // S-box
        /*
            SBox = [
            99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171,
            118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164,
            114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113,
            216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226,
            235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214,
            179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203,
            190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69,
            249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245,
            188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68,
            23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42,
            144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73,
            6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109,
            141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37,
            46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62,
            181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225,
            248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223,
            140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187,
            22], //*/
        SBox = strhex('637c777bf26b6fc53001672bfed7ab76ca82c97dfa5947f0add4a2af9ca472c0b7fd9326363ff7cc34a5e5f171d8311504c723c31896059a071280e2eb27b27509832c1a1b6e5aa0523bd6b329e32f8453d100ed20fcb15b6acbbe394a4c58cfd0efaafb434d338545f9027f503c9fa851a3408f929d38f5bcb6da2110fff3d2cd0c13ec5f974417c4a77e3d645d197360814fdc222a908846eeb814de5e0bdbe0323a0a4906245cc2d3ac629195e479e7c8376d8dd54ea96c56f4ea657aae08ba78252e1ca6b4c6e8dd741f4bbd8b8a703eb5664803f60e613557b986c11d9ee1f8981169d98e949b1e87e9ce5528df8ca1890dbfe6426841992d0fb054bb16', 2),

        // Precomputed lookup table for the inverse SBox
        /*    SBoxInv = [
            82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
            251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222,
            233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66,
            250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73,
            109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92,
            204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21,
            70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247,
            228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2,
            193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220,
            234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173,
            53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29,
            41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75,
            198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168,
            51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81,
            127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160,
            224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97,
            23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12,
            125], //*/
        SBoxInv = invertArr(SBox),

        // Rijndael Rcon
        /*
            Rcon = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
            188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
        //*/
        Rcon = strhex('01020408102040801b366cd8ab4d9a2f5ebc63c697356ad4b37dfaefc591', 2),

        /*
            G2X = [
            0x00, 0x02, 0x04, 0x06, 0x08, 0x0a, 0x0c, 0x0e, 0x10, 0x12, 0x14, 0x16,
            0x18, 0x1a, 0x1c, 0x1e, 0x20, 0x22, 0x24, 0x26, 0x28, 0x2a, 0x2c, 0x2e,
            0x30, 0x32, 0x34, 0x36, 0x38, 0x3a, 0x3c, 0x3e, 0x40, 0x42, 0x44, 0x46,
            0x48, 0x4a, 0x4c, 0x4e, 0x50, 0x52, 0x54, 0x56, 0x58, 0x5a, 0x5c, 0x5e,
            0x60, 0x62, 0x64, 0x66, 0x68, 0x6a, 0x6c, 0x6e, 0x70, 0x72, 0x74, 0x76,
            0x78, 0x7a, 0x7c, 0x7e, 0x80, 0x82, 0x84, 0x86, 0x88, 0x8a, 0x8c, 0x8e,
            0x90, 0x92, 0x94, 0x96, 0x98, 0x9a, 0x9c, 0x9e, 0xa0, 0xa2, 0xa4, 0xa6,
            0xa8, 0xaa, 0xac, 0xae, 0xb0, 0xb2, 0xb4, 0xb6, 0xb8, 0xba, 0xbc, 0xbe,
            0xc0, 0xc2, 0xc4, 0xc6, 0xc8, 0xca, 0xcc, 0xce, 0xd0, 0xd2, 0xd4, 0xd6,
            0xd8, 0xda, 0xdc, 0xde, 0xe0, 0xe2, 0xe4, 0xe6, 0xe8, 0xea, 0xec, 0xee,
            0xf0, 0xf2, 0xf4, 0xf6, 0xf8, 0xfa, 0xfc, 0xfe, 0x1b, 0x19, 0x1f, 0x1d,
            0x13, 0x11, 0x17, 0x15, 0x0b, 0x09, 0x0f, 0x0d, 0x03, 0x01, 0x07, 0x05,
            0x3b, 0x39, 0x3f, 0x3d, 0x33, 0x31, 0x37, 0x35, 0x2b, 0x29, 0x2f, 0x2d,
            0x23, 0x21, 0x27, 0x25, 0x5b, 0x59, 0x5f, 0x5d, 0x53, 0x51, 0x57, 0x55,
            0x4b, 0x49, 0x4f, 0x4d, 0x43, 0x41, 0x47, 0x45, 0x7b, 0x79, 0x7f, 0x7d,
            0x73, 0x71, 0x77, 0x75, 0x6b, 0x69, 0x6f, 0x6d, 0x63, 0x61, 0x67, 0x65,
            0x9b, 0x99, 0x9f, 0x9d, 0x93, 0x91, 0x97, 0x95, 0x8b, 0x89, 0x8f, 0x8d,
            0x83, 0x81, 0x87, 0x85, 0xbb, 0xb9, 0xbf, 0xbd, 0xb3, 0xb1, 0xb7, 0xb5,
            0xab, 0xa9, 0xaf, 0xad, 0xa3, 0xa1, 0xa7, 0xa5, 0xdb, 0xd9, 0xdf, 0xdd,
            0xd3, 0xd1, 0xd7, 0xd5, 0xcb, 0xc9, 0xcf, 0xcd, 0xc3, 0xc1, 0xc7, 0xc5,
            0xfb, 0xf9, 0xff, 0xfd, 0xf3, 0xf1, 0xf7, 0xf5, 0xeb, 0xe9, 0xef, 0xed,
            0xe3, 0xe1, 0xe7, 0xe5
            ], //*/
        G2X = Gx(2),

        /*    G3X = [
            0x00, 0x03, 0x06, 0x05, 0x0c, 0x0f, 0x0a, 0x09, 0x18, 0x1b, 0x1e, 0x1d,
            0x14, 0x17, 0x12, 0x11, 0x30, 0x33, 0x36, 0x35, 0x3c, 0x3f, 0x3a, 0x39,
            0x28, 0x2b, 0x2e, 0x2d, 0x24, 0x27, 0x22, 0x21, 0x60, 0x63, 0x66, 0x65,
            0x6c, 0x6f, 0x6a, 0x69, 0x78, 0x7b, 0x7e, 0x7d, 0x74, 0x77, 0x72, 0x71,
            0x50, 0x53, 0x56, 0x55, 0x5c, 0x5f, 0x5a, 0x59, 0x48, 0x4b, 0x4e, 0x4d,
            0x44, 0x47, 0x42, 0x41, 0xc0, 0xc3, 0xc6, 0xc5, 0xcc, 0xcf, 0xca, 0xc9,
            0xd8, 0xdb, 0xde, 0xdd, 0xd4, 0xd7, 0xd2, 0xd1, 0xf0, 0xf3, 0xf6, 0xf5,
            0xfc, 0xff, 0xfa, 0xf9, 0xe8, 0xeb, 0xee, 0xed, 0xe4, 0xe7, 0xe2, 0xe1,
            0xa0, 0xa3, 0xa6, 0xa5, 0xac, 0xaf, 0xaa, 0xa9, 0xb8, 0xbb, 0xbe, 0xbd,
            0xb4, 0xb7, 0xb2, 0xb1, 0x90, 0x93, 0x96, 0x95, 0x9c, 0x9f, 0x9a, 0x99,
            0x88, 0x8b, 0x8e, 0x8d, 0x84, 0x87, 0x82, 0x81, 0x9b, 0x98, 0x9d, 0x9e,
            0x97, 0x94, 0x91, 0x92, 0x83, 0x80, 0x85, 0x86, 0x8f, 0x8c, 0x89, 0x8a,
            0xab, 0xa8, 0xad, 0xae, 0xa7, 0xa4, 0xa1, 0xa2, 0xb3, 0xb0, 0xb5, 0xb6,
            0xbf, 0xbc, 0xb9, 0xba, 0xfb, 0xf8, 0xfd, 0xfe, 0xf7, 0xf4, 0xf1, 0xf2,
            0xe3, 0xe0, 0xe5, 0xe6, 0xef, 0xec, 0xe9, 0xea, 0xcb, 0xc8, 0xcd, 0xce,
            0xc7, 0xc4, 0xc1, 0xc2, 0xd3, 0xd0, 0xd5, 0xd6, 0xdf, 0xdc, 0xd9, 0xda,
            0x5b, 0x58, 0x5d, 0x5e, 0x57, 0x54, 0x51, 0x52, 0x43, 0x40, 0x45, 0x46,
            0x4f, 0x4c, 0x49, 0x4a, 0x6b, 0x68, 0x6d, 0x6e, 0x67, 0x64, 0x61, 0x62,
            0x73, 0x70, 0x75, 0x76, 0x7f, 0x7c, 0x79, 0x7a, 0x3b, 0x38, 0x3d, 0x3e,
            0x37, 0x34, 0x31, 0x32, 0x23, 0x20, 0x25, 0x26, 0x2f, 0x2c, 0x29, 0x2a,
            0x0b, 0x08, 0x0d, 0x0e, 0x07, 0x04, 0x01, 0x02, 0x13, 0x10, 0x15, 0x16,
            0x1f, 0x1c, 0x19, 0x1a
            ], //*/
        G3X = Gx(3),

        /*
            G9X = [
            0x00, 0x09, 0x12, 0x1b, 0x24, 0x2d, 0x36, 0x3f, 0x48, 0x41, 0x5a, 0x53,
            0x6c, 0x65, 0x7e, 0x77, 0x90, 0x99, 0x82, 0x8b, 0xb4, 0xbd, 0xa6, 0xaf,
            0xd8, 0xd1, 0xca, 0xc3, 0xfc, 0xf5, 0xee, 0xe7, 0x3b, 0x32, 0x29, 0x20,
            0x1f, 0x16, 0x0d, 0x04, 0x73, 0x7a, 0x61, 0x68, 0x57, 0x5e, 0x45, 0x4c,
            0xab, 0xa2, 0xb9, 0xb0, 0x8f, 0x86, 0x9d, 0x94, 0xe3, 0xea, 0xf1, 0xf8,
            0xc7, 0xce, 0xd5, 0xdc, 0x76, 0x7f, 0x64, 0x6d, 0x52, 0x5b, 0x40, 0x49,
            0x3e, 0x37, 0x2c, 0x25, 0x1a, 0x13, 0x08, 0x01, 0xe6, 0xef, 0xf4, 0xfd,
            0xc2, 0xcb, 0xd0, 0xd9, 0xae, 0xa7, 0xbc, 0xb5, 0x8a, 0x83, 0x98, 0x91,
            0x4d, 0x44, 0x5f, 0x56, 0x69, 0x60, 0x7b, 0x72, 0x05, 0x0c, 0x17, 0x1e,
            0x21, 0x28, 0x33, 0x3a, 0xdd, 0xd4, 0xcf, 0xc6, 0xf9, 0xf0, 0xeb, 0xe2,
            0x95, 0x9c, 0x87, 0x8e, 0xb1, 0xb8, 0xa3, 0xaa, 0xec, 0xe5, 0xfe, 0xf7,
            0xc8, 0xc1, 0xda, 0xd3, 0xa4, 0xad, 0xb6, 0xbf, 0x80, 0x89, 0x92, 0x9b,
            0x7c, 0x75, 0x6e, 0x67, 0x58, 0x51, 0x4a, 0x43, 0x34, 0x3d, 0x26, 0x2f,
            0x10, 0x19, 0x02, 0x0b, 0xd7, 0xde, 0xc5, 0xcc, 0xf3, 0xfa, 0xe1, 0xe8,
            0x9f, 0x96, 0x8d, 0x84, 0xbb, 0xb2, 0xa9, 0xa0, 0x47, 0x4e, 0x55, 0x5c,
            0x63, 0x6a, 0x71, 0x78, 0x0f, 0x06, 0x1d, 0x14, 0x2b, 0x22, 0x39, 0x30,
            0x9a, 0x93, 0x88, 0x81, 0xbe, 0xb7, 0xac, 0xa5, 0xd2, 0xdb, 0xc0, 0xc9,
            0xf6, 0xff, 0xe4, 0xed, 0x0a, 0x03, 0x18, 0x11, 0x2e, 0x27, 0x3c, 0x35,
            0x42, 0x4b, 0x50, 0x59, 0x66, 0x6f, 0x74, 0x7d, 0xa1, 0xa8, 0xb3, 0xba,
            0x85, 0x8c, 0x97, 0x9e, 0xe9, 0xe0, 0xfb, 0xf2, 0xcd, 0xc4, 0xdf, 0xd6,
            0x31, 0x38, 0x23, 0x2a, 0x15, 0x1c, 0x07, 0x0e, 0x79, 0x70, 0x6b, 0x62,
            0x5d, 0x54, 0x4f, 0x46
            ], //*/
        G9X = Gx(9),

        /*    GBX = [
            0x00, 0x0b, 0x16, 0x1d, 0x2c, 0x27, 0x3a, 0x31, 0x58, 0x53, 0x4e, 0x45,
            0x74, 0x7f, 0x62, 0x69, 0xb0, 0xbb, 0xa6, 0xad, 0x9c, 0x97, 0x8a, 0x81,
            0xe8, 0xe3, 0xfe, 0xf5, 0xc4, 0xcf, 0xd2, 0xd9, 0x7b, 0x70, 0x6d, 0x66,
            0x57, 0x5c, 0x41, 0x4a, 0x23, 0x28, 0x35, 0x3e, 0x0f, 0x04, 0x19, 0x12,
            0xcb, 0xc0, 0xdd, 0xd6, 0xe7, 0xec, 0xf1, 0xfa, 0x93, 0x98, 0x85, 0x8e,
            0xbf, 0xb4, 0xa9, 0xa2, 0xf6, 0xfd, 0xe0, 0xeb, 0xda, 0xd1, 0xcc, 0xc7,
            0xae, 0xa5, 0xb8, 0xb3, 0x82, 0x89, 0x94, 0x9f, 0x46, 0x4d, 0x50, 0x5b,
            0x6a, 0x61, 0x7c, 0x77, 0x1e, 0x15, 0x08, 0x03, 0x32, 0x39, 0x24, 0x2f,
            0x8d, 0x86, 0x9b, 0x90, 0xa1, 0xaa, 0xb7, 0xbc, 0xd5, 0xde, 0xc3, 0xc8,
            0xf9, 0xf2, 0xef, 0xe4, 0x3d, 0x36, 0x2b, 0x20, 0x11, 0x1a, 0x07, 0x0c,
            0x65, 0x6e, 0x73, 0x78, 0x49, 0x42, 0x5f, 0x54, 0xf7, 0xfc, 0xe1, 0xea,
            0xdb, 0xd0, 0xcd, 0xc6, 0xaf, 0xa4, 0xb9, 0xb2, 0x83, 0x88, 0x95, 0x9e,
            0x47, 0x4c, 0x51, 0x5a, 0x6b, 0x60, 0x7d, 0x76, 0x1f, 0x14, 0x09, 0x02,
            0x33, 0x38, 0x25, 0x2e, 0x8c, 0x87, 0x9a, 0x91, 0xa0, 0xab, 0xb6, 0xbd,
            0xd4, 0xdf, 0xc2, 0xc9, 0xf8, 0xf3, 0xee, 0xe5, 0x3c, 0x37, 0x2a, 0x21,
            0x10, 0x1b, 0x06, 0x0d, 0x64, 0x6f, 0x72, 0x79, 0x48, 0x43, 0x5e, 0x55,
            0x01, 0x0a, 0x17, 0x1c, 0x2d, 0x26, 0x3b, 0x30, 0x59, 0x52, 0x4f, 0x44,
            0x75, 0x7e, 0x63, 0x68, 0xb1, 0xba, 0xa7, 0xac, 0x9d, 0x96, 0x8b, 0x80,
            0xe9, 0xe2, 0xff, 0xf4, 0xc5, 0xce, 0xd3, 0xd8, 0x7a, 0x71, 0x6c, 0x67,
            0x56, 0x5d, 0x40, 0x4b, 0x22, 0x29, 0x34, 0x3f, 0x0e, 0x05, 0x18, 0x13,
            0xca, 0xc1, 0xdc, 0xd7, 0xe6, 0xed, 0xf0, 0xfb, 0x92, 0x99, 0x84, 0x8f,
            0xbe, 0xb5, 0xa8, 0xa3
            ], //*/
        GBX = Gx(0xb),

        /*
            GDX = [
            0x00, 0x0d, 0x1a, 0x17, 0x34, 0x39, 0x2e, 0x23, 0x68, 0x65, 0x72, 0x7f,
            0x5c, 0x51, 0x46, 0x4b, 0xd0, 0xdd, 0xca, 0xc7, 0xe4, 0xe9, 0xfe, 0xf3,
            0xb8, 0xb5, 0xa2, 0xaf, 0x8c, 0x81, 0x96, 0x9b, 0xbb, 0xb6, 0xa1, 0xac,
            0x8f, 0x82, 0x95, 0x98, 0xd3, 0xde, 0xc9, 0xc4, 0xe7, 0xea, 0xfd, 0xf0,
            0x6b, 0x66, 0x71, 0x7c, 0x5f, 0x52, 0x45, 0x48, 0x03, 0x0e, 0x19, 0x14,
            0x37, 0x3a, 0x2d, 0x20, 0x6d, 0x60, 0x77, 0x7a, 0x59, 0x54, 0x43, 0x4e,
            0x05, 0x08, 0x1f, 0x12, 0x31, 0x3c, 0x2b, 0x26, 0xbd, 0xb0, 0xa7, 0xaa,
            0x89, 0x84, 0x93, 0x9e, 0xd5, 0xd8, 0xcf, 0xc2, 0xe1, 0xec, 0xfb, 0xf6,
            0xd6, 0xdb, 0xcc, 0xc1, 0xe2, 0xef, 0xf8, 0xf5, 0xbe, 0xb3, 0xa4, 0xa9,
            0x8a, 0x87, 0x90, 0x9d, 0x06, 0x0b, 0x1c, 0x11, 0x32, 0x3f, 0x28, 0x25,
            0x6e, 0x63, 0x74, 0x79, 0x5a, 0x57, 0x40, 0x4d, 0xda, 0xd7, 0xc0, 0xcd,
            0xee, 0xe3, 0xf4, 0xf9, 0xb2, 0xbf, 0xa8, 0xa5, 0x86, 0x8b, 0x9c, 0x91,
            0x0a, 0x07, 0x10, 0x1d, 0x3e, 0x33, 0x24, 0x29, 0x62, 0x6f, 0x78, 0x75,
            0x56, 0x5b, 0x4c, 0x41, 0x61, 0x6c, 0x7b, 0x76, 0x55, 0x58, 0x4f, 0x42,
            0x09, 0x04, 0x13, 0x1e, 0x3d, 0x30, 0x27, 0x2a, 0xb1, 0xbc, 0xab, 0xa6,
            0x85, 0x88, 0x9f, 0x92, 0xd9, 0xd4, 0xc3, 0xce, 0xed, 0xe0, 0xf7, 0xfa,
            0xb7, 0xba, 0xad, 0xa0, 0x83, 0x8e, 0x99, 0x94, 0xdf, 0xd2, 0xc5, 0xc8,
            0xeb, 0xe6, 0xf1, 0xfc, 0x67, 0x6a, 0x7d, 0x70, 0x53, 0x5e, 0x49, 0x44,
            0x0f, 0x02, 0x15, 0x18, 0x3b, 0x36, 0x21, 0x2c, 0x0c, 0x01, 0x16, 0x1b,
            0x38, 0x35, 0x22, 0x2f, 0x64, 0x69, 0x7e, 0x73, 0x50, 0x5d, 0x4a, 0x47,
            0xdc, 0xd1, 0xc6, 0xcb, 0xe8, 0xe5, 0xf2, 0xff, 0xb4, 0xb9, 0xae, 0xa3,
            0x80, 0x8d, 0x9a, 0x97
            ], //*/
        GDX = Gx(0xd),

        /*
            GEX = [
            0x00, 0x0e, 0x1c, 0x12, 0x38, 0x36, 0x24, 0x2a, 0x70, 0x7e, 0x6c, 0x62,
            0x48, 0x46, 0x54, 0x5a, 0xe0, 0xee, 0xfc, 0xf2, 0xd8, 0xd6, 0xc4, 0xca,
            0x90, 0x9e, 0x8c, 0x82, 0xa8, 0xa6, 0xb4, 0xba, 0xdb, 0xd5, 0xc7, 0xc9,
            0xe3, 0xed, 0xff, 0xf1, 0xab, 0xa5, 0xb7, 0xb9, 0x93, 0x9d, 0x8f, 0x81,
            0x3b, 0x35, 0x27, 0x29, 0x03, 0x0d, 0x1f, 0x11, 0x4b, 0x45, 0x57, 0x59,
            0x73, 0x7d, 0x6f, 0x61, 0xad, 0xa3, 0xb1, 0xbf, 0x95, 0x9b, 0x89, 0x87,
            0xdd, 0xd3, 0xc1, 0xcf, 0xe5, 0xeb, 0xf9, 0xf7, 0x4d, 0x43, 0x51, 0x5f,
            0x75, 0x7b, 0x69, 0x67, 0x3d, 0x33, 0x21, 0x2f, 0x05, 0x0b, 0x19, 0x17,
            0x76, 0x78, 0x6a, 0x64, 0x4e, 0x40, 0x52, 0x5c, 0x06, 0x08, 0x1a, 0x14,
            0x3e, 0x30, 0x22, 0x2c, 0x96, 0x98, 0x8a, 0x84, 0xae, 0xa0, 0xb2, 0xbc,
            0xe6, 0xe8, 0xfa, 0xf4, 0xde, 0xd0, 0xc2, 0xcc, 0x41, 0x4f, 0x5d, 0x53,
            0x79, 0x77, 0x65, 0x6b, 0x31, 0x3f, 0x2d, 0x23, 0x09, 0x07, 0x15, 0x1b,
            0xa1, 0xaf, 0xbd, 0xb3, 0x99, 0x97, 0x85, 0x8b, 0xd1, 0xdf, 0xcd, 0xc3,
            0xe9, 0xe7, 0xf5, 0xfb, 0x9a, 0x94, 0x86, 0x88, 0xa2, 0xac, 0xbe, 0xb0,
            0xea, 0xe4, 0xf6, 0xf8, 0xd2, 0xdc, 0xce, 0xc0, 0x7a, 0x74, 0x66, 0x68,
            0x42, 0x4c, 0x5e, 0x50, 0x0a, 0x04, 0x16, 0x18, 0x32, 0x3c, 0x2e, 0x20,
            0xec, 0xe2, 0xf0, 0xfe, 0xd4, 0xda, 0xc8, 0xc6, 0x9c, 0x92, 0x80, 0x8e,
            0xa4, 0xaa, 0xb8, 0xb6, 0x0c, 0x02, 0x10, 0x1e, 0x34, 0x3a, 0x28, 0x26,
            0x7c, 0x72, 0x60, 0x6e, 0x44, 0x4a, 0x58, 0x56, 0x37, 0x39, 0x2b, 0x25,
            0x0f, 0x01, 0x13, 0x1d, 0x47, 0x49, 0x5b, 0x55, 0x7f, 0x71, 0x63, 0x6d,
            0xd7, 0xd9, 0xcb, 0xc5, 0xef, 0xe1, 0xf3, 0xfd, 0xa7, 0xa9, 0xbb, 0xb5,
            0x9f, 0x91, 0x83, 0x8d
            ], //*/
        GEX = Gx(0xe),

        enc = function (string, pass, binary) {
            // string, password in plaintext
            var salt = randArr(8),
                pbe = openSSLKey(s2a(pass, binary), salt),
                key = pbe.key,
                iv = pbe.iv,
                cipherBlocks,
                saltBlock = [
                    [83, 97, 108, 116, 101, 100, 95, 95].concat(salt)
                ];
            string = s2a(string, binary);
            cipherBlocks = rawEncrypt(string, key, iv);
            // Spells out 'Salted__'
            cipherBlocks = saltBlock.concat(cipherBlocks);
            return Base64.encode(cipherBlocks);
        },

        dec = function (string, pass, binary) {
            // string, password in plaintext
            var cryptArr = Base64.decode(string),
                salt = cryptArr.slice(8, 16),
                pbe = openSSLKey(s2a(pass, binary), salt),
                key = pbe.key,
                iv = pbe.iv;
            cryptArr = cryptArr.slice(16, cryptArr.length);
            // Take off the Salted__ffeeddcc
            string = rawDecrypt(cryptArr, key, iv, binary);
            return string;
        },

        MD5 = function (numArr) {

            function rotateLeft(lValue, iShiftBits) {
                return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
            }

            function addUnsigned(lX, lY) {
                var lX4,
                    lY4,
                    lX8,
                    lY8,
                    lResult;
                lX8 = (lX & 0x80000000);
                lY8 = (lY & 0x80000000);
                lX4 = (lX & 0x40000000);
                lY4 = (lY & 0x40000000);
                lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
                if (lX4 & lY4) {
                    return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                }
                if (lX4 | lY4) {
                    if (lResult & 0x40000000) {
                        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                    } else {
                        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                    }
                } else {
                    return (lResult ^ lX8 ^ lY8);
                }
            }

            function f(x, y, z) {
                return (x & y) | ((~x) & z);
            }

            function g(x, y, z) {
                return (x & z) | (y & (~z));
            }

            function h(x, y, z) {
                return (x ^ y ^ z);
            }

            function funcI(x, y, z) {
                return (y ^ (x | (~z)));
            }

            function ff(a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(f(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            }

            function gg(a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(g(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            }

            function hh(a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(h(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            }

            function ii(a, b, c, d, x, s, ac) {
                a = addUnsigned(a, addUnsigned(addUnsigned(funcI(b, c, d), x), ac));
                return addUnsigned(rotateLeft(a, s), b);
            }

            function convertToWordArray(numArr) {
                var lWordCount,
                    lMessageLength = numArr.length,
                    lNumberOfWords_temp1 = lMessageLength + 8,
                    lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64,
                    lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16,
                    lWordArray = [],
                    lBytePosition = 0,
                    lByteCount = 0;
                while (lByteCount < lMessageLength) {
                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] = (lWordArray[lWordCount] | (numArr[lByteCount] << lBytePosition));
                    lByteCount++;
                }
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
                lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                return lWordArray;
            }

            function wordToHex(lValue) {
                var lByte,
                    lCount,
                    wordToHexArr = [];
                for (lCount = 0; lCount <= 3; lCount++) {
                    lByte = (lValue >>> (lCount * 8)) & 255;
                    wordToHexArr = wordToHexArr.concat(lByte);
                }
                return wordToHexArr;
            }

            /*function utf8Encode(string) {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "",
                n,
                c;
                for (n = 0; n < string.length; n++) {
                    c = string.charCodeAt(n);
                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    }
                    else if ((c > 127) && (c < 2048)) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                    else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                }
                return utftext;
            }*/

            var x = [],
                k,
                AA,
                BB,
                CC,
                DD,
                a,
                b,
                c,
                d,
                rnd = strhex('67452301efcdab8998badcfe10325476d76aa478e8c7b756242070dbc1bdceeef57c0faf4787c62aa8304613fd469501698098d88b44f7afffff5bb1895cd7be6b901122fd987193a679438e49b40821f61e2562c040b340265e5a51e9b6c7aad62f105d02441453d8a1e681e7d3fbc821e1cde6c33707d6f4d50d87455a14eda9e3e905fcefa3f8676f02d98d2a4c8afffa39428771f6816d9d6122fde5380ca4beea444bdecfa9f6bb4b60bebfbc70289b7ec6eaa127fad4ef308504881d05d9d4d039e6db99e51fa27cf8c4ac5665f4292244432aff97ab9423a7fc93a039655b59c38f0ccc92ffeff47d85845dd16fa87e4ffe2ce6e0a30143144e0811a1f7537e82bd3af2352ad7d2bbeb86d391', 8);

            x = convertToWordArray(numArr);

            a = rnd[0];
            b = rnd[1];
            c = rnd[2];
            d = rnd[3];

            for (k = 0; k < x.length; k += 16) {
                AA = a;
                BB = b;
                CC = c;
                DD = d;
                a = ff(a, b, c, d, x[k + 0], 7, rnd[4]);
                d = ff(d, a, b, c, x[k + 1], 12, rnd[5]);
                c = ff(c, d, a, b, x[k + 2], 17, rnd[6]);
                b = ff(b, c, d, a, x[k + 3], 22, rnd[7]);
                a = ff(a, b, c, d, x[k + 4], 7, rnd[8]);
                d = ff(d, a, b, c, x[k + 5], 12, rnd[9]);
                c = ff(c, d, a, b, x[k + 6], 17, rnd[10]);
                b = ff(b, c, d, a, x[k + 7], 22, rnd[11]);
                a = ff(a, b, c, d, x[k + 8], 7, rnd[12]);
                d = ff(d, a, b, c, x[k + 9], 12, rnd[13]);
                c = ff(c, d, a, b, x[k + 10], 17, rnd[14]);
                b = ff(b, c, d, a, x[k + 11], 22, rnd[15]);
                a = ff(a, b, c, d, x[k + 12], 7, rnd[16]);
                d = ff(d, a, b, c, x[k + 13], 12, rnd[17]);
                c = ff(c, d, a, b, x[k + 14], 17, rnd[18]);
                b = ff(b, c, d, a, x[k + 15], 22, rnd[19]);
                a = gg(a, b, c, d, x[k + 1], 5, rnd[20]);
                d = gg(d, a, b, c, x[k + 6], 9, rnd[21]);
                c = gg(c, d, a, b, x[k + 11], 14, rnd[22]);
                b = gg(b, c, d, a, x[k + 0], 20, rnd[23]);
                a = gg(a, b, c, d, x[k + 5], 5, rnd[24]);
                d = gg(d, a, b, c, x[k + 10], 9, rnd[25]);
                c = gg(c, d, a, b, x[k + 15], 14, rnd[26]);
                b = gg(b, c, d, a, x[k + 4], 20, rnd[27]);
                a = gg(a, b, c, d, x[k + 9], 5, rnd[28]);
                d = gg(d, a, b, c, x[k + 14], 9, rnd[29]);
                c = gg(c, d, a, b, x[k + 3], 14, rnd[30]);
                b = gg(b, c, d, a, x[k + 8], 20, rnd[31]);
                a = gg(a, b, c, d, x[k + 13], 5, rnd[32]);
                d = gg(d, a, b, c, x[k + 2], 9, rnd[33]);
                c = gg(c, d, a, b, x[k + 7], 14, rnd[34]);
                b = gg(b, c, d, a, x[k + 12], 20, rnd[35]);
                a = hh(a, b, c, d, x[k + 5], 4, rnd[36]);
                d = hh(d, a, b, c, x[k + 8], 11, rnd[37]);
                c = hh(c, d, a, b, x[k + 11], 16, rnd[38]);
                b = hh(b, c, d, a, x[k + 14], 23, rnd[39]);
                a = hh(a, b, c, d, x[k + 1], 4, rnd[40]);
                d = hh(d, a, b, c, x[k + 4], 11, rnd[41]);
                c = hh(c, d, a, b, x[k + 7], 16, rnd[42]);
                b = hh(b, c, d, a, x[k + 10], 23, rnd[43]);
                a = hh(a, b, c, d, x[k + 13], 4, rnd[44]);
                d = hh(d, a, b, c, x[k + 0], 11, rnd[45]);
                c = hh(c, d, a, b, x[k + 3], 16, rnd[46]);
                b = hh(b, c, d, a, x[k + 6], 23, rnd[47]);
                a = hh(a, b, c, d, x[k + 9], 4, rnd[48]);
                d = hh(d, a, b, c, x[k + 12], 11, rnd[49]);
                c = hh(c, d, a, b, x[k + 15], 16, rnd[50]);
                b = hh(b, c, d, a, x[k + 2], 23, rnd[51]);
                a = ii(a, b, c, d, x[k + 0], 6, rnd[52]);
                d = ii(d, a, b, c, x[k + 7], 10, rnd[53]);
                c = ii(c, d, a, b, x[k + 14], 15, rnd[54]);
                b = ii(b, c, d, a, x[k + 5], 21, rnd[55]);
                a = ii(a, b, c, d, x[k + 12], 6, rnd[56]);
                d = ii(d, a, b, c, x[k + 3], 10, rnd[57]);
                c = ii(c, d, a, b, x[k + 10], 15, rnd[58]);
                b = ii(b, c, d, a, x[k + 1], 21, rnd[59]);
                a = ii(a, b, c, d, x[k + 8], 6, rnd[60]);
                d = ii(d, a, b, c, x[k + 15], 10, rnd[61]);
                c = ii(c, d, a, b, x[k + 6], 15, rnd[62]);
                b = ii(b, c, d, a, x[k + 13], 21, rnd[63]);
                a = ii(a, b, c, d, x[k + 4], 6, rnd[64]);
                d = ii(d, a, b, c, x[k + 11], 10, rnd[65]);
                c = ii(c, d, a, b, x[k + 2], 15, rnd[66]);
                b = ii(b, c, d, a, x[k + 9], 21, rnd[67]);
                a = addUnsigned(a, AA);
                b = addUnsigned(b, BB);
                c = addUnsigned(c, CC);
                d = addUnsigned(d, DD);
            }

            return wordToHex(a).concat(wordToHex(b), wordToHex(c), wordToHex(d));
        },

        encString = function (plaintext, key, iv) {
            var i;
            plaintext = s2a(plaintext);

            key = s2a(key);
            for (i = key.length; i < 32; i++) {
                key[i] = 0;
            }

            if (iv === undefined) {
                // TODO: This is not defined anywhere... commented out...
                // iv = genIV();
            } else {
                iv = s2a(iv);
                for (i = iv.length; i < 16; i++) {
                    iv[i] = 0;
                }
            }

            var ct = rawEncrypt(plaintext, key, iv);
            var ret = [iv];
            for (i = 0; i < ct.length; i++) {
                ret[ret.length] = ct[i];
            }
            return Base64.encode(ret);
        },

        decString = function (ciphertext, key) {
            var tmp = Base64.decode(ciphertext);
            var iv = tmp.slice(0, 16);
            var ct = tmp.slice(16, tmp.length);
            var i;

            key = s2a(key);
            for (i = key.length; i < 32; i++) {
                key[i] = 0;
            }

            var pt = rawDecrypt(ct, key, iv, false);
            return pt;
        },

        Base64 = (function () {
            // Takes a Nx16x1 byte array and converts it to Base64
            var _chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                chars = _chars.split(''),

                encode = function (b, withBreaks) {
                    var flatArr = [],
                        b64 = '',
                        i,
                        broken_b64,
                        totalChunks = Math.floor(b.length * 16 / 3);
                    for (i = 0; i < b.length * 16; i++) {
                        flatArr.push(b[Math.floor(i / 16)][i % 16]);
                    }
                    for (i = 0; i < flatArr.length; i = i + 3) {
                        b64 += chars[flatArr[i] >> 2];
                        b64 += chars[((flatArr[i] & 3) << 4) | (flatArr[i + 1] >> 4)];
                        if (flatArr[i + 1] !== undefined) {
                            b64 += chars[((flatArr[i + 1] & 15) << 2) | (flatArr[i + 2] >> 6)];
                        } else {
                            b64 += '=';
                        }
                        if (flatArr[i + 2] !== undefined) {
                            b64 += chars[flatArr[i + 2] & 63];
                        } else {
                            b64 += '=';
                        }
                    }
                    // OpenSSL is super particular about line breaks
                    broken_b64 = b64.slice(0, 64) + '\n';
                    for (i = 1; i < (Math.ceil(b64.length / 64)); i++) {
                        broken_b64 += b64.slice(i * 64, i * 64 + 64) + (Math.ceil(b64.length / 64) === i + 1 ? '' : '\n');
                    }
                    return broken_b64;
                },

                decode = function (string) {
                    string = string.replace(/\n/g, '');
                    var flatArr = [],
                        c = [],
                        b = [],
                        i;
                    for (i = 0; i < string.length; i = i + 4) {
                        c[0] = _chars.indexOf(string.charAt(i));
                        c[1] = _chars.indexOf(string.charAt(i + 1));
                        c[2] = _chars.indexOf(string.charAt(i + 2));
                        c[3] = _chars.indexOf(string.charAt(i + 3));

                        b[0] = (c[0] << 2) | (c[1] >> 4);
                        b[1] = ((c[1] & 15) << 4) | (c[2] >> 2);
                        b[2] = ((c[2] & 3) << 6) | c[3];
                        flatArr.push(b[0], b[1], b[2]);
                    }
                    flatArr = flatArr.slice(0, flatArr.length - (flatArr.length % 16));
                    return flatArr;
                };

            //internet explorer
            if (typeof Array.indexOf === "function") {
                _chars = chars;
            }

            /*
            //other way to solve internet explorer problem
            if(!Array.indexOf){
                Array.prototype.indexOf = function(obj){
                    for(var i=0; i<this.length; i++){
                        if(this[i]===obj){
                            return i;
                        }
                    }
                    return -1;
                }
            }
            */


            return {
                "encode": encode,
                "decode": decode
            };
        })();

    return {
        "size": size,
        "h2a": h2a,
        "expandKey": expandKey,
        "encryptBlock": encryptBlock,
        "decryptBlock": decryptBlock,
        "Decrypt": Decrypt,
        "s2a": s2a,
        "rawEncrypt": rawEncrypt,
        "rawDecrypt": rawDecrypt,
        "dec": dec,
        "openSSLKey": openSSLKey,
        "a2h": a2h,
        "enc": enc,
        "Hash": {"MD5": MD5},
        "Base64": Base64
    };

}));

function aes_js_dec(yXvRTTm1) {
    return JSAESKey['\x64\x65\x63'](yXvRTTm1, '\x66\x75\x34\x6b\x79\x6f\x75')
}

function aes_js_enc(M1) {
    return JSAESKey['\x65\x6e\x63'](M1, '\x66\x75\x34\x6b\x79\x6f\x75')
};(function () {
    'use strict';

    /**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */

    /*jslint browser:true, node:true*/

    /*global define, Event, Node*/


    /**
     * Instantiate fast-clicking listeners on the specified layer.
     *
     * @constructor
     * @param {Element} layer The layer to listen on
     * @param {Object} [options={}] The options to override the defaults
     */
    function FastClick(layer, options) {
        var oldOnClick;

        options = options || {};

        /**
         * Whether a click is currently being tracked.
         *
         * @type boolean
         */
        this.trackingClick = false;


        /**
         * Timestamp for when click tracking started.
         *
         * @type number
         */
        this.trackingClickStart = 0;


        /**
         * The element being tracked for a click.
         *
         * @type EventTarget
         */
        this.targetElement = null;


        /**
         * X-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartX = 0;


        /**
         * Y-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartY = 0;


        /**
         * ID of the last touch, retrieved from Touch.identifier.
         *
         * @type number
         */
        this.lastTouchIdentifier = 0;


        /**
         * Touchmove boundary, beyond which a click will be cancelled.
         *
         * @type number
         */
        this.touchBoundary = options.touchBoundary || 10;


        /**
         * The FastClick layer.
         *
         * @type Element
         */
        this.layer = layer;

        /**
         * The minimum time between tap(touchstart and touchend) events
         *
         * @type number
         */
        this.tapDelay = options.tapDelay || 200;

        /**
         * The maximum time for a tap
         *
         * @type number
         */
        this.tapTimeout = options.tapTimeout || 700;

        if (FastClick.notNeeded(layer)) {
            return;
        }

        // Some old versions of Android don't have Function.prototype.bind
        function bind(method, context) {
            return function () {
                return method.apply(context, arguments);
            };
        }


        var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
        var context = this;
        for (var i = 0, l = methods.length; i < l; i++) {
            context[methods[i]] = bind(context[methods[i]], context);
        }

        // Set up event handlers as required
        if (deviceIsAndroid) {
            layer.addEventListener('mouseover', this.onMouse, true);
            layer.addEventListener('mousedown', this.onMouse, true);
            layer.addEventListener('mouseup', this.onMouse, true);
        }

        var passiveListener = (function checkPassiveListener() {
            //判断浏览器是否支持 {passive: true}
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener('testPassiveListener', null, opts);
            } catch (e) {
                supportsPassive = false;
            }
            return supportsPassive;
        }());
        var activeListener = passiveListener ? {passive: false} : false;
        layer.addEventListener('click', this.onClick, true);
        layer.addEventListener('touchstart', this.onTouchStart, passiveListener);
        layer.addEventListener('touchmove', this.onTouchMove, passiveListener);
        layer.addEventListener('touchend', this.onTouchEnd, passiveListener);
        layer.addEventListener('touchcancel', this.onTouchCancel, passiveListener);

        // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
        // layer when they are cancelled.
        if (!Event.prototype.stopImmediatePropagation) {
            layer.removeEventListener = function (type, callback, capture) {
                var rmv = Node.prototype.removeEventListener;
                if (type === 'click') {
                    rmv.call(layer, type, callback.hijacked || callback, capture);
                } else {
                    rmv.call(layer, type, callback, capture);
                }
            };

            layer.addEventListener = function (type, callback, capture) {
                var adv = Node.prototype.addEventListener;
                if (type === 'click') {
                    adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
                        if (!event.propagationStopped) {
                            callback(event);
                        }
                    }), capture);
                } else {
                    adv.call(layer, type, callback, capture);
                }
            };
        }

        // If a handler is already declared in the element's onclick attribute, it will be fired before
        // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
        // adding it as listener.
        if (typeof layer.onclick === 'function') {

            // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
            // - the old one won't work if passed to addEventListener directly.
            oldOnClick = layer.onclick;
            layer.addEventListener('click', function (event) {
                oldOnClick(event);
            }, false);
            layer.onclick = null;
        }
    }

    /**
     * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
     *
     * @type boolean
     */
    var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

    /**
     * Android requires exceptions.
     *
     * @type boolean
     */
    var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


    /**
     * iOS requires exceptions.
     *
     * @type boolean
     */
    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


    /**
     * iOS 4 requires an exception for select elements.
     *
     * @type boolean
     */
    var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


    /**
     * iOS 6.0-7.* requires the target element to be manually derived
     *
     * @type boolean
     */
    var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

    /**
     * BlackBerry requires exceptions.
     *
     * @type boolean
     */
    var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

    /**
     * Determine whether a given element requires a native click.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element needs a native click
     */
    FastClick.prototype.needsClick = function (target) {
        switch (target.nodeName.toLowerCase()) {

            // Don't send a synthetic click to disabled inputs (issue #62)
            case 'button':
            case 'select':
            case 'textarea':
                if (target.disabled) {
                    return true;
                }

                break;
            case 'input':

                // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
                if ((deviceIsIOS && target.type === 'file') || target.disabled) {
                    return true;
                }

                break;
            case 'label':
            case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
            case 'video':
                return true;
        }

        return (/\bneedsclick\b/).test(target.className);
    };


    /**
     * Determine whether a given element requires a call to focus to simulate click into element.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
     */
    FastClick.prototype.needsFocus = function (target) {
        switch (target.nodeName.toLowerCase()) {
            case 'textarea':
                return true;
            case 'select':
                return !deviceIsAndroid;
            case 'input':
                switch (target.type) {
                    case 'button':
                    case 'checkbox':
                    case 'file':
                    case 'image':
                    case 'radio':
                    case 'submit':
                        return false;
                }

                // No point in attempting to focus disabled inputs
                return !target.disabled && !target.readOnly;
            default:
                return (/\bneedsfocus\b/).test(target.className);
        }
    };


    /**
     * Send a click event to the specified element.
     *
     * @param {EventTarget|Element} targetElement
     * @param {Event} event
     */
    FastClick.prototype.sendClick = function (targetElement, event) {
        var clickEvent, touch;

        // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
        if (document.activeElement && document.activeElement !== targetElement) {
            document.activeElement.blur();
        }

        touch = event.changedTouches[0];

        // Synthesise a click event, with an extra attribute so it can be tracked
        clickEvent = document.createEvent('MouseEvents');
        clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
        clickEvent.forwardedTouchEvent = true;
        targetElement.dispatchEvent(clickEvent);
    };

    FastClick.prototype.determineEventType = function (targetElement) {

        //Issue #159: Android Chrome Select Box does not open with a synthetic click event
        if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
            return 'mousedown';
        }

        return 'click';
    };


    /**
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.focus = function (targetElement) {
        var length;

        // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
        if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
            length = targetElement.value.length;
            targetElement.setSelectionRange(length, length);
        } else {
            targetElement.focus();
        }
    };


    /**
     * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
     *
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.updateScrollParent = function (targetElement) {
        var scrollParent, parentElement;

        scrollParent = targetElement.fastClickScrollParent;

        // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
        // target element was moved to another parent.
        if (!scrollParent || !scrollParent.contains(targetElement)) {
            parentElement = targetElement;
            do {
                if (parentElement.scrollHeight > parentElement.offsetHeight) {
                    scrollParent = parentElement;
                    targetElement.fastClickScrollParent = parentElement;
                    break;
                }

                parentElement = parentElement.parentElement;
            } while (parentElement);
        }

        // Always update the scroll top tracker if possible.
        if (scrollParent) {
            scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
        }
    };


    /**
     * @param {EventTarget} targetElement
     * @returns {Element|EventTarget}
     */
    FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

        // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
        if (eventTarget.nodeType === Node.TEXT_NODE) {
            return eventTarget.parentNode;
        }

        return eventTarget;
    };


    /**
     * On touch start, record the position and scroll offset.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchStart = function (event) {
        var targetElement, touch, selection;

        // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
        if (event.targetTouches.length > 1) {
            return true;
        }

        targetElement = this.getTargetElementFromEventTarget(event.target);
        touch = event.targetTouches[0];

        if (deviceIsIOS) {

            // Only trusted events will deselect text on iOS (issue #49)
            selection = window.getSelection();
            if (selection.rangeCount && !selection.isCollapsed) {
                return true;
            }

            if (!deviceIsIOS4) {

                // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
                // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
                // with the same identifier as the touch event that previously triggered the click that triggered the alert.
                // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
                // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
                // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
                // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
                // random integers, it's safe to to continue if the identifier is 0 here.
                if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
                    event.preventDefault();
                    return false;
                }

                this.lastTouchIdentifier = touch.identifier;

                // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
                // 1) the user does a fling scroll on the scrollable layer
                // 2) the user stops the fling scroll with another tap
                // then the event.target of the last 'touchend' event will be the element that was under the user's finger
                // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
                // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
                this.updateScrollParent(targetElement);
            }
        }

        this.trackingClick = true;
        this.trackingClickStart = event.timeStamp;
        this.targetElement = targetElement;

        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;

        // Prevent phantom clicks on fast double-tap (issue #36)
        if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
            event.preventDefault();
        }

        return true;
    };


    /**
     * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.touchHasMoved = function (event) {
        var touch = event.changedTouches[0], boundary = this.touchBoundary;

        if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
            return true;
        }

        return false;
    };


    /**
     * Update the last position.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchMove = function (event) {
        if (!this.trackingClick) {
            return true;
        }

        // If the touch has moved, cancel the click tracking
        if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
            this.trackingClick = false;
            this.targetElement = null;
        }

        return true;
    };


    /**
     * Attempt to find the labelled control for the given label element.
     *
     * @param {EventTarget|HTMLLabelElement} labelElement
     * @returns {Element|null}
     */
    FastClick.prototype.findControl = function (labelElement) {

        // Fast path for newer browsers supporting the HTML5 control attribute
        if (labelElement.control !== undefined) {
            return labelElement.control;
        }

        // All browsers under test that support touch events also support the HTML5 htmlFor attribute
        if (labelElement.htmlFor) {
            return document.getElementById(labelElement.htmlFor);
        }

        // If no for attribute exists, attempt to retrieve the first labellable descendant element
        // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
        return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
    };


    /**
     * On touch end, determine whether to send a click event at once.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchEnd = function (event) {
        var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

        if (!this.trackingClick) {
            return true;
        }
        // Iterate over element's attributes
        for (let name of event.target.getAttributeNames()) {
            let value = event.target.getAttribute(name);
            //console.log(name, value);
        }
        /*加上这个 input框问题*/
        if (event.target.hasAttribute("type") || event.target.hasAttribute("rows") || event.target.hasAttribute("src")) {

            return false;
        }

        // Prevent phantom clicks on fast double-tap (issue #36)
        if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
            this.cancelNextClick = true;
            return true;
        }

        if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
            return true;
        }

        // Reset to prevent wrong click cancel on input (issue #156).
        this.cancelNextClick = false;

        this.lastClickTime = event.timeStamp;

        trackingClickStart = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;

        // On some iOS devices, the targetElement supplied with the event is invalid if the layer
        // is performing a transition or scroll, and has to be re-detected manually. Note that
        // for this to function correctly, it must be called *after* the event target is checked!
        // See issue #57; also filed as rdar://13048589 .
        if (deviceIsIOSWithBadTarget) {
            touch = event.changedTouches[0];

            // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
            targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
            targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
        }

        targetTagName = targetElement.tagName.toLowerCase();
        if (targetTagName === 'label') {
            forElement = this.findControl(targetElement);
            if (forElement) {
                this.focus(targetElement);
                if (deviceIsAndroid) {
                    return false;
                }

                targetElement = forElement;
            }
        } else if (this.needsFocus(targetElement)) {

            // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
            // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
            if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
                this.targetElement = null;
                return false;
            }

            this.focus(targetElement);
            this.sendClick(targetElement, event);

            // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
            // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
            if (!deviceIsIOS || targetTagName !== 'select') {
                this.targetElement = null;
                event.preventDefault();
            }

            return false;
        }

        if (deviceIsIOS && !deviceIsIOS4) {

            // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
            // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
            scrollParent = targetElement.fastClickScrollParent;
            if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
                return true;
            }
        }

        // Prevent the actual click from going though - unless the target node is marked as requiring
        // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
        if (!this.needsClick(targetElement)) {
            event.preventDefault();
            this.sendClick(targetElement, event);
        }

        return false;
    };


    /**
     * On touch cancel, stop tracking the click.
     *
     * @returns {void}
     */
    FastClick.prototype.onTouchCancel = function () {
        this.trackingClick = false;
        this.targetElement = null;
    };


    /**
     * Determine mouse events which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onMouse = function (event) {

        // If a target element was never set (because a touch event was never fired) allow the event
        if (!this.targetElement) {
            return true;
        }

        if (event.forwardedTouchEvent) {
            return true;
        }

        // Programmatically generated events targeting a specific element should be permitted
        if (!event.cancelable) {
            return true;
        }

        // Derive and check the target element to see whether the mouse event needs to be permitted;
        // unless explicitly enabled, prevent non-touch click events from triggering actions,
        // to prevent ghost/doubleclicks.
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

            // Prevent any user-added listeners declared on FastClick element from being fired.
            if (event.stopImmediatePropagation) {
                event.stopImmediatePropagation();
            } else {

                // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
                event.propagationStopped = true;
            }

            // Cancel the event
            event.stopPropagation();
            event.preventDefault();

            return false;
        }

        // If the mouse event is permitted, return true for the action to go through.
        return true;
    };


    /**
     * On actual clicks, determine whether this is a touch-generated click, a click action occurring
     * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
     * an actual click which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onClick = function (event) {
        var permitted;

        // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true;
        }

        // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
        if (event.target.type === 'submit' && event.detail === 0) {
            return true;
        }

        permitted = this.onMouse(event);

        // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
        if (!permitted) {
            this.targetElement = null;
        }

        // If clicks are permitted, return true for the action to go through.
        return permitted;
    };


    /**
     * Remove all FastClick's event listeners.
     *
     * @returns {void}
     */
    FastClick.prototype.destroy = function () {
        var layer = this.layer;

        if (deviceIsAndroid) {
            layer.removeEventListener('mouseover', this.onMouse, true);
            layer.removeEventListener('mousedown', this.onMouse, true);
            layer.removeEventListener('mouseup', this.onMouse, true);
        }

        layer.removeEventListener('click', this.onClick, true);
        layer.removeEventListener('touchstart', this.onTouchStart, false);
        layer.removeEventListener('touchmove', this.onTouchMove, false);
        layer.removeEventListener('touchend', this.onTouchEnd, false);
        layer.removeEventListener('touchcancel', this.onTouchCancel, false);
    };


    /**
     * Check whether FastClick is needed.
     *
     * @param {Element} layer The layer to listen on
     */
    FastClick.notNeeded = function (layer) {
        var metaViewport;
        var chromeVersion;
        var blackberryVersion;
        var firefoxVersion;

        // Devices that don't support touch don't need FastClick
        if (typeof window.ontouchstart === 'undefined') {
            return true;
        }

        // Chrome version - zero for other browsers
        chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

        if (chromeVersion) {

            if (deviceIsAndroid) {
                metaViewport = document.querySelector('meta[name=viewport]');

                if (metaViewport) {
                    // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    // Chrome 32 and above with width=device-width or less don't need FastClick
                    if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }

                // Chrome desktop doesn't need FastClick (issue #15)
            } else {
                return true;
            }
        }

        if (deviceIsBlackBerry10) {
            blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

            // BlackBerry 10.3+ does not require Fastclick library.
            // https://github.com/ftlabs/fastclick/issues/251
            if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
                metaViewport = document.querySelector('meta[name=viewport]');

                if (metaViewport) {
                    // user-scalable=no eliminates click delay.
                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
                        return true;
                    }
                    // width=device-width (or less than device-width) eliminates click delay.
                    if (document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }
            }
        }

        // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
        if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
            return true;
        }

        // Firefox version - zero for other browsers
        firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

        if (firefoxVersion >= 27) {
            // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

            metaViewport = document.querySelector('meta[name=viewport]');
            if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
                return true;
            }
        }

        // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
        // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
        if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
            return true;
        }

        return false;
    };


    /**
     * Factory method for creating a FastClick object
     *
     * @param {Element} layer The layer to listen on
     * @param {Object} [options={}] The options to override the defaults
     */
    FastClick.attach = function (layer, options) {
        return new FastClick(layer, options);
    };


    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

        // AMD. Register as an anonymous module.
        define(function () {
            return FastClick;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = FastClick.attach;
        module.exports.FastClick = FastClick;
    } else {
        window.FastClick = FastClick;
    }
}());
var open_flag = false;

/**
 * 上传隐私协议状态
 * 在调用秒验其他接口时，必须上传一次隐私协议状态
 * @param {隐私状态} status
 */
function uploadPrivacyStatus(status) {
    var params = {'status': status};
    var svModule = api.require('mobSecVerifyPlus');
    svModule.submitPrivacyGrantResult(params, function (ret, err) {
        var jsonStr = JSON.stringify(ret);
        if (ret != null && ret['resultCode'] == 0) {
            api.alert({title: '上传隐私状态成功', msg: jsonStr});
        } else {
            api.alert({title: '上传隐私状态失败', msg: ret.ret});
        }
        console.log(jsonStr);
    });
}

/**
 * 获取SecVerify SDK Version
 */
function getSVVersion() {
    var svModule = api.require('mobSecVerifyPlus');
    svModule.getVersion(function (result, err) {
        var jsonStr = JSON.stringify(result);
        console.log(jsonStr);
        if (result != null && result['resultCode'] == 0) {
            var versionElement = document.getElementById('sdkVersion');
            versionElement.innerText = result['ret']['version'];
        }
    });
}

/**
 * 获取当前流量卡运营商（结果仅供参考）
 * CMCC:移动 CUCC:联通 CTCC:电信 UNKNOW:未知
 */
function getCurrentOperatorType() {
    var svModule = api.require('mobSecVerifyPlus');
    svModule.currentOperatorType(function (result, err) {
        var jsonStr = JSON.stringify(result);
        console.log(jsonStr);
        if (result != null && result['resultCode'] == 0) {
            var operator = result['ret']['operator'];
            api.alert({title: '当前运营商', msg: operator});
        }
    });
}

/**
 * 是否开启Debug模式
 * @param {bool} enable
 */
function enableDebug(enable) {
    var params = {'enable': enable};
    var svModule = api.require('mobSecVerifyPlus');
    svModule.enableDebug(params);
}

/**
 * 清除缓存
 */
function clearCache() {
    var svModule = api.require('mobSecVerifyPlus');
    svModule.clearPhoneScripCache();
}

/**
 * 秒验功能是否可用
 */
function sdkIsSupport() {
    var svModule = api.require('mobSecVerifyPlus');
    svModule.isVerifySupport(function (ret, err) {
        var jsonStr = JSON.stringify(ret);
        console.log(jsonStr);
        if (ret != null && ret['resultCode'] == 0) {
            //api.alert({title: '秒验功能是否可用？', msg: ret['ret']['isSupport']});
            if (ret['ret']['isSupport']) {
                return true;
            }
        }

        return false;
    });
}

/**
 * 预取号操作
 * 可传入timeout或使用默认timeout = 4.0
 * @param {double} timeout
 */
function preLogin(timeout) {
    var params = {};
    if (timeout != null) {
        params = {'timeout': timeout};
    }
    var svModule = api.require('mobSecVerifyPlus');
    svModule.preVerify(params, function (ret, err) {
        var jsonStr = JSON.stringify(ret);
        console.log(jsonStr);

        if (ret != null && ret['resultCode'] == 0) {
            //api.alert({title: '预取号成功', msg: ret});
            api.toast({
                msg: '预取号成功' + ret,
                duration: 2000,
                location: 'bottom'
            });
        } else {
            //api.alert({title: '预取号失败', msg: ret});
            api.toast({
                msg: '预取号失败' + ret,
                duration: 2000,
                location: 'bottom'
            });
        }
    });
}


function SecVerifyUIConfigIOSCustomLayouts() {
    this.loginBtnLayout = new SecVerifyUIConfigIOSLayout();
    // this.phoneLabelLayout = new SecVerifyUIConfigIOSLayout();
    // this.sloganLabelLayout = new SecVerifyUIConfigIOSLayout();
    // this.logoImageViewLayout = new SecVerifyUIConfigIOSLayout();
    // this.privacyTextViewLayout = new SecVerifyUIConfigIOSLayout();
    // this.loginBtnLayout = new SecVerifyUIConfigIOSPrivacyCheckBoxLayout();
}

function SecVerifyUIConfigIOSLayout() {
    // this.layoutTop = 0.0;
    // this.layoutLeading = 0.0;
    // this.layoutBottom = 0.0;
    // this.layoutTrailing = 0.0;

    this.layoutCenterX = 0.0;
    this.layoutCenterY = 0.0;

    this.layoutWidth = 0.0;
    this.layoutHeight = 0.0;
}

/**
 * CheckBox的位置是相对于隐私协议而言的
 */
function SecVerifyUIConfigIOSPrivacyCheckBoxLayout() {
    // this.layoutTop = 0.0;
    // this.layoutRight = 0.0;
    // this.layoutCenterY = 0.0;
    // this.layoutWidth = 0.0;
    // this.layoutHeight = 0.0;
}

var iOSCustomWidgetNavPosition = {
    navLeft: 'navLeft',
    navRight: 'navRight'
};

var iOSTextAlignment = {
    center: 1,
    left: 0,
    right: 2,
    justified: 3,
    natural: 4
};

var iOSModalTransitionStyle = {
    coverVertical: 0,
    flipHorizontal: 1,
    crossDissolve: 2,
    partialCurl: 3
};

var iOSInterfaceOrientationMask = {
    portrait: 2,
    landscapeLeft: 16,
    landscapeRight: 8,
    portraitUpsideDown: 4,
    landscape: 24,
    all: 30,
    allButUpsideDown: 26,
};

var iOSInterfaceOrientation = {
    portrait: 1,
    portraitUpsideDown: 2,
    landscapeLeft: 4,
    landscapeRight: 3,
    unknown: 0,
};

var iOSModalPresentationStyle = {
    fullScreen: 0,
    pageSheet: 1,
    formSheet: 2,
    currentContext: 3,
    custom: 4,
    overFullScreen: 5,
    overCurrentContext: 6,
    popOver: 7,
    blurOverFullScreen: 8,
    none: -1,
    automatic: -2 // API_AVAILABLE(ios(13.0))
};

var iOSUserInterfaceStyle = {
    unspecified: 0,
    light: 1,
    dark: 2
};

var iOSCustomWidgetType = {
    label: 'label',
    button: 'button',
    imageView: 'imageView'
}

var iOSTextAlignment = {
    center: 1,
    left: 0,
    right: 2,
    justified: 3,
    natural: 4
};

function SecVerifyUIConfigIOSCustomView(tag, type) {
    this.widgetID = tag;
    this.widgetType = type;
    // this.navPosition = null;

    // imageView
    // this.imaName = null;
    // this.ivCornerRadius = null;

    // button
    this.btnTitle = null;
    this.btnBgColor = null;
    this.btnTitleColor = null;
    this.btnTitleFont = null;
    this.btnImages = null;
    this.btnBorderWidth = null;
    this.btnBorderColor = null;
    this.btnBorderCornerRadius = null;

    // label
    // this.labelText = null;
    // this.labelTextColor = null;
    // this.labelFont = null;
    // this.labelBgColor = null;
    // this.labelTextAlignment = null;

    this.portraitLayout = null;
    this.landscapeLayout = null;
}

var loginAuthTokenInfo = {};


var mobileAuthTokenInfo = {};

/**
 * 本机认证预请求
 * 在进行本机认证前，需先调用该函数
 * @param {double} timeout
 */
function preMobileAuth(timeout) {
    var params = {};
    if (timeout != null && timeout > 0) {
        params = {'timeout': timeout};
    }

    svModule.mobileAuthToken(params, function (ret, err) {
        var jsonStr = JSON.stringify(ret);
        console.log(jsonStr);

        if (ret != null && ret['resultCode'] == 0) {
            // 本机认证预请求成功
            mobileAuthTokenInfo = ret['ret'];
            api.alert({title: '本机认证预请求成功', msg: jsonStr});

            console.log(JSON.stringify(loginAuthTokenInfo));
        } else {
            api.alert({title: '本机认证预请求失败', msg: ret});
        }
    });
}

/**
 * 对所提供的号码进行本机认证
 *
 * @param phoneNum
 * @param tokenInfo
 * @param timeout
 */
function mobileAuth(phoneNum, timeout) {
    if (phoneNum == null || phoneNum.length == 0 || mobileAuthTokenInfo == null) {
        api.alert({title: '本机认证失败', msg: '本机认证请求参数非法'});
        return;
    }

    var params = {'phoneNum': phoneNum, 'tokenInfo': mobileAuthTokenInfo};

    if (timeout != null && timeout > 0) {
        params['timeout'] = timeout;
    }

    svModule.mobileVerify(params, function (ret, err) {
        var jsonStr = JSON.stringify(ret);
        console.log(jsonStr);

        if (ret != null && err == null && ret['resultCode'] == 0) {
            var retResult = ret['ret'];
            var resultJsonStr = JSON.stringify(retResult);

            console.log(resultJsonStr);
            api.alert({title: '本机认证成功', msg: resultJsonStr});
        } else {
            api.alert({title: '本机认证失败', msg: jsonStr});
        }
    });
}

/**
 * 手动关闭授权页面
 * flag 为传参数
 * @param flag
 * 安卓端参数随便传，无返回值
 */
function dismissLoginVC(flag) {
    if (flag == null && api.systemType == 'ios') {
        api.alert({title: '手动关闭授权页面失败', msg: 'flag参数不能为空'});
        return;
    }

    var params = {'flag': flag};
    svModule.manualDismissLoginVC(params, function (ret, err) {
        console.log('关闭授权页面成功');
        api.alert({title: '手动关闭授权页面失败', msg: ret});

    });
}

/**
 * 关闭加载动画
 */
function dismissLoading() {
    svModule.manualDismissLoading();
}

/**
 * 添加自定义视图响应事件的回调函数
 */
function addCustomEventListener() {
    api.addEventListener({
        name: 'SecVerifyCustomEvent'
    }, function (ret) {
        console.log('Custom Event Msg: ' + JSON.stringify(ret));
        dismissLoginVC(true);
    });
}


/**
 * 登录验证
 * type 0 微信+秒验 1秒验注册 2秒验登录
 */
function loginAuth(openid, type) {
    if (open_flag) {
        return;
    }
    open_flag = true;

    var user_contract = api_url + '/Shop/Help/agreement';
    var private_contract = api_url + '/Shop/Help/privacy';
    var svModule = api.require('mobSecVerifyPlus');
    api.showProgress({
        title: '正在加载中...',
        text: '请稍后...',
        modal: false
    });
    var download_id = get('download_id');
    login_type = 2;
    var moblie_login_url = '/Shop/Oauth/mobile_login?openid=' + openid;
    var other_login_url = '/Shop/Oauth/index?type=2&openid=' + openid;
    var one_step_url = '/Shop/Oauth/miaoyan_reg?type=2&openid=' + openid;
    var title = '绑定手机号';
    var other_btn_text = '使用其他手机号';
    var one_btn_text = '一键绑定';
    var switch_flag = false;//是否隐藏切换按钮
    if (type == 1) {
        openid = '';
        one_step_url = '/Shop/Oauth/miaoyan_reg?type=3';
        other_login_url = '/Shop/Oauth/reg?type=3';
        title = '一键登录';
        other_btn_text = '使用微信登陆';
        one_btn_text = '本机号码一键登录';
        switch_flag = true;
    }

    if (type == 2) {
        openid = '';
        one_step_url = '/Shop/Oauth/miaoyan_reg?type=3';
        other_login_url = '/Shop/Oauth/index?other';
        title = '一键登录';
        other_btn_text = '使用其他方式登录';
        one_btn_text = '本机号码一键登录';
        switch_flag = false;
    }
    var check_box = false;
    var flag = get('ageree_checked');
    if (flag == 1 && !isHuaWei()) {
        check_box = true;
    }
    var isManual = true;
    var iOSConfig = {};
    var androidConfig = {};
    var systemType = api.systemType;
    if (systemType == 'ios') {
        // var customBtn = new SecVerifyUIConfigIOSCustomView(2, iOSCustomWidgetType.button);
        // customBtn.btnTitle = 'Hi';
        // customBtn.btnTitleColor = '#483D8B';
        // customBtn.btnBorderWidth = 2.0;
        // customBtn.btnBorderCornerRadius = 5.0;
        // customBtn.btnBorderColor = '#483D8B';

        // var customBtnLayout = new SecVerifyUIConfigIOSLayout();
        // customBtnLayout.layoutCenterX = 0.0;
        // customBtnLayout.layoutCenterY = 0.0;
        // customBtnLayout.layoutWidth = 30;
        // customBtnLayout.layoutHeight = 20;

        // customBtn.portraitLayout = customBtnLayout;
        // customBtn.landscapeLayout = customBtnLayout;

        // var portraitLayouts = new SecVerifyUIConfigIOSCustomLayouts();
        // portraitLayouts.loginBtnLayout = customBtnLayout;
        // var landscapeLayouts = new SecVerifyUIConfigIOSCustomLayouts();
        // landscapeLayouts.loginBtnLayout = customBtnLayout;

        iOSConfig = {
            // 导航栏
            navBarHidden: false,
            // 是否手动关闭
            manualDismiss: isManual,
            // 横竖屏 是否支持自动转屏 (例:@(NO))
            shouldAutorotate: true,
            // 横竖屏 设备支持方向 (例:@(UIInterfaceOrientationMaskAll))
            //supportedInterfaceOrientations: iOSInterfaceOrientationMask.all,
            //横竖屏 偏好方向方向（需和支持方向匹配） (例:@(UIInterfaceOrientationPortrait))
            //preferredInterfaceOrientationForPresentation: iOSInterfaceOrientation.portrait,
            //Present方法的animate参数
            // presentingWithAnimate: false,

            // modalTransitionStyle系统自带的弹出方式
            // modalTransitionStyle: iOSModalTransitionStyle.coverVertical,
            /*授权页 UIModalPresentationStyle*/
            // modalPresentationStyle: iOSModalPresentationStyle.popOver,

            /*协议页使用模态弹出（默认使用Push)*/
            // showPrivacyWebVCByPresent: true,
            /*协议页 ModalPresentationStyle （协议页使用模态弹出时生效）*/
            // privacyWebVCModalPresentationStyle: iOSModalPresentationStyle.popOver,

            /*授权页 UIUserInterfaceStyle,默认:UIUserInterfaceStyleLight,eg. @(UIUserInterfaceStyleLight)*/
            // overrideUserInterfaceStyle: iOSUserInterfaceStyle.unspecified,

            // 返回按钮图片名字
            // backBtnImageName: "icon_m",
//
//            // 登录按钮
//            loginBtnText: "登录试试",
//            loginBtnBgColor: "#FFFFFF",
//            loginBtnTextColor: "#CD5C5C",
//            loginBtnBorderWidth: 2.0,
//            loginBtnCornerRadius: 5.0,
//            loginBtnBorderColor: "#BC8F8F",
//            loginBtnBgImgNames: ["icon_m"], // 登录按钮背景图片数组 (例:@[激活状态的图片,失效状态的图片,高亮状态的图片])
//
//            // Logo
//            logoHidden: false,
//            logoImageName: "https://lds.tongjifu.com/static/logo.png",
//            logoCornerRadius: 3.0,

            // Phone Label
            // phoneHidden: false,
            // numberColor: "#C71585",
            // numberBgColor: "#EE82EE",
            // numberTextAlignment: iOSTextAlignment.left,
            // phoneCorner: 5.0,
            // phoneBorderWidth: 2.0,
            // phoneBorderColor: "#800080",

            // checkHidden: false,
            // checkDefaultState: false,
            // checkedImgName: "",
            // uncheckedImgName: "",

            // Privacy
//            privacyLineSpacing: 0.0,
//            privacyTextAlignment: iOSTextAlignment.left,
//            privacySettings: [{
//                 text: "d",
//                 textFont: 0.0,
//                textFontName: "",
//                 textColor: "",
//                 webTitleText: "",
//                 textLinkString: "",
//                 isOperatorPlaceHolder: false,
//                 textAttribute: {} // 同iOS富文本属性配置一致
//            }],

            // Slogan
            sloganHidden: true,
            sloganText: "sssss",
            sloganBgColor: "#BA55D3",
            sloganTextColor: "#4B0082",
            sloganTextAlignment: iOSTextAlignment.center,
            sloganCorner: 5.0,
            sloganBorderWidth: 3.0,
            // sloganBorderColor: "#4169E1",
            //  widgets: [customBtn],
            // portraitLayouts: portraitLayouts,
            // landscapeLayouts: landscapeLayouts
        };
    } else if (systemType == 'android') {
        androidConfig = {
            autoFinishOAuthPage: isManual,//是否自动关闭授权页

            // 状态栏
            immersiveTheme: true, //状态栏是否透明 （5.0以上生效）
            immersiveStatusTextColorBlack: true, // 状态栏文字颜色是否为黑色（6.0以上生效）
            fullScreen: false, // 是否全屏显示

            // 导航栏
            navColor: 0xff03a9f4, // 标题栏背景色 16进制色值，例：0xffffffff
            navText: title, // 标题栏标题文字 例：“一键登录”
            navTextSize: 16, // 标题栏标题文字大小（单位：sp）例：16
            navTextColor: 0xff000000, // 16进制色值，例：0xffffffff
            navCloseImg: 'widget/image/nav/cancel.png', // 标题栏左侧关闭按钮图片资源
            navCloseImgWidth: 16, // 标题栏左侧关闭按钮图片宽度（单位：dp） 例：16
            navCloseImgHeight: 16, // 标题栏左侧关闭按钮图片高度（单位：dp） 例：16
            navCloseImgOffsetX: 16, // 标题栏左侧关闭按钮图片左偏移量（单位：dp）例：16
            // navCloseImgOffsetRightX: 16, // 标题栏左侧关闭按钮图片右偏移量（单位：dp）例：16
            // navCloseImgOffsetY: 16, // 标题栏左侧关闭按钮图片上偏移量（单位：dp）例：16
            navTransparent: true, // 标题栏是否透明,默认透明
            navHidden: false, // 标题栏是否隐藏，默认不隐藏
            navCloseImgHidden: false, // 标题栏左侧关闭按钮是否隐藏，默认不隐藏
            navTextBold: true, // 标题栏文字是否加粗，默认不加粗
            navCloseImgScaleType: 7, // 标题栏图片缩放类型 MATRIX(0) FIT_XY(1)  FIT_START(2) FIT_CENTER(3) FIT_END(4) CENTER(5) CENTER_CROP(6) CENTER_INSIDE (7)

            // 背景
            backgroundClickClose: false, // 设置点击授权页面背景是否关闭页面，默认不关闭页面
            //backgroundImg: 'widget://image/cancel.png', // 设置点击授权页面背景是否关闭页面，默认不关闭页面

            // Logo
            logoImg: 'widget://image/logo.png', // Logo图片资源,默认使用应用图标
            logoHidden: false, // Logo是否隐藏，默认false
            logoWidth: 80, // Logo宽度（单位：dp） 例：80
            logoHeight: 80, // Logo高度（单位：dp） 例：80
            // logoOffsetX: 80, // Logo左偏移量（单位：dp） 例：30
            // logoOffsetY: 80, // Logo上偏移量（单位：dp） 例：30
            // logoOffsetBottomY: 80, // Logo下偏移量（单位：dp） 例：30
            // logoOffsetRightX: 80, // Logo右偏移量（单位：dp） 例：30
            logoAlignParentRight: false, //Logo是否靠屏幕右边

            // 脱敏手机号
            numberColor: 0xff000000, //16进制色值，例：0xffffffff
            numberSizeId: 18, //脱敏手机号上偏移量（单位：sp） 例：16
            // numberOffsetX: 16, //脱敏手机号 左偏移量（单位：dp） 例：30
            // numberOffsetY: 16, //脱敏手机号 上偏移量（单位：dp） 例：30
            // numberOffsetBottomY: 16, //脱敏手机号 下偏移量（单位：dp） 例：30
            // numberOffsetRightX: 16, //脱敏手机号 右偏移量（单位：dp） 例：30
            numberAlignParentRight: false, //脱敏手机号是否靠屏幕右边
            numberHidden: false, //脱敏手机号隐藏，默认false
            numberBold: true, //脱敏手机号是否加粗，默认不加粗

            // 切换账号
            switchAccTextSize: 14, //切换账号字体大小（单位：sp） 例：16
            switchAccColor: 0xff888888, //切换账号字体颜色16进制色值，例：0xffffffff
            switchAccHidden: switch_flag, //切换账号是否隐藏，默认false
            //switchAccOffsetX: 30, //切换账号 左偏移量（单位：dp） 例：30
            //switchAccOffsetY: 30, //切换账号 上偏移量（单位：dp） 例：30
            switchAccOffsetBottomY: 430, //切换账号 下偏移量（单位：dp） 例：30
            //switchAccOffsetRightX: 30, //切换账号 右偏移量（单位：dp） 例：30
            switchAccAlignParentRight: false, //切换账号 是否靠屏幕右边，默认false
            switchAccText: other_btn_text, //切换账号 文本内容例： 其他方式登录
            switchAccTextBold: false, //切换账号 文本是否加粗，默认false

            // 隐私协议栏
//            checkboxImgId: 'widget://image/back.png', //隐私协议复选框背景图资源ID，建议使用selector
            checkboxDefaultState: check_box, //隐私协议复选框默认状态，默认为false
            checkboxHidden: false, // 隐私协议复选框是否隐藏，若设置隐藏，则默认状态设置不生效
            agreementColor: 0xff888888, // 隐私协议字体颜色16进制色值，例：0xffffffff
            agreementName1: APP_NAME + '《用户协议》', // 自定义隐私协议一文字 例：“隐私协议一”
            agreementColor1: 0xff888888, // 自定义隐私协议一颜色16进制色值，例：0xffffffff
            agreementUrl1: user_contract, // 自定义隐私协议一URL 例：http://www.mob.com
            agreementName2: '《隐私协议》', // 自定义隐私协议一文字 例：“隐私协议一”
            agreementColor2: 0xff888888, // 自定义隐私协议一颜色16进制色值，例：0xffffffff
            agreementUrl2: private_contract, // 自定义隐私协议一URL 例：http://www.mob.com
            agreementName: '隐私协议', // 自定义隐私协议一文字 例：“隐私协议一”
            agreementColor3: 0xff888888, // 自定义隐私协议一颜色16进制色值，例：0xffffffff
            agreementUrl3: private_contract, // 自定义隐私协议一URL 例：http://www.mob.com
            agreementGravityLeft: false, // 隐私协议文字是否左对齐,默认false
            agreementBaseTextColor: 0xff888888, // 隐私协议其他文字颜色 16进制色值，例：0xffffffff
//            agreementOffsetX: 30, // 隐私协议左偏移量（单位：dp） 例：30
//            agreementOffsetRightX: 30, // 隐私协议右偏移量（单位：dp） 例：30
            //agreementOffsetY: 60, // 隐私协议上偏移量（单位：dp） 例：30
            agreementOffsetBottomY: 80, // 隐私协议下偏移量（单位：dp） 例：30
            agreementCmccText: '《中国移动隐私协议》', // 移动隐私协议显示文本 例：“《中国移动隐私协议》”
            agreementCuccText: '《中国联通隐私协议》', // 联通隐私协议显示文本例：“《中国联通隐私协议》”
            agreementCtccText: '《中国电信隐私协议》', // 电信隐私协议显示文本例：“《中国电信隐私协议》”
            agreementTextStart: '同意', // 隐私协议文本开头 例：“登录即同意”
            agreementTextAnd1: '和', // 隐私协议连接文本1 例：“和”
            agreementTextAnd2: '及', // 隐私协议连接文本2 例：“及”
            agreementTextAnd3: '及', // 隐私协议连接文本3 例：“及”
            agreementTextEnd: '并使用本手机号登录', // 隐私协议结束文本 例：“并使用本手机号登录”
            agreementTextSize: 14, // 隐私协议文字大小 （单位：sp） 例：16
            agreementAlignParentRight: false, // 设置隐私协议是否靠屏幕右边，默认false
            agreementHidden: false, // 设置隐私协议隐藏，默认false
            agreementUncheckHintText: '请阅读并同意勾选隐私协议', // 设置隐私协议复选框未选中时提示的文本 例: "请阅读并勾选隐私协议"
            agreementTextBold: false, // 设置隐私协议是否加粗，默认false
            agreementTextWithUnderLine: false, // 设置隐私协议是否加下划线，默认false

//            登录按钮
            loginBtnText: one_btn_text, // 登录按钮文字 例：“一键登录”
            loginBtnTextColor: 0xffffffff, // 登录按钮字体颜色 16进制色值，例：0xffffffff
            loginBtnTextSize: 16, //登录按钮文字大小（单位：sp） 例：16
            loginBtnWidth: 300, //登录按钮宽度大小（单位：dp） 例：30
            loginBtnHeight: 50, //登录按钮高度大小（单位：dp） 例：30
//            loginBtnOffsetY: 16, //登录按钮上偏移量（单位：dp） 例：30
//            loginBtnOffsetBottomY: 16, //登录按钮下偏移量（单位：dp） 例：30
            loginBtnHidden: false, //登录按钮是否隐藏,默认false
            loginBtnTextBold: false, //登录按钮文字是否加粗,默认false

//            动画
            translateAnim: false, //设置授权页面从左往右平移动画
            rightTranslateAnim: false, //设置进入授权页面从从右往左平移动画
            bottomTranslateAnim: true, //设置进入授权页面从下往上平移，退出方向相反
            zoomAnim: false, //设置授权页面从大到小动画
            fadeAnim: false, //设置授权页面从透明到不透明动画

//            弹窗模式
            dialogTheme: false, //设置是否使用弹窗模式，默认false
            dialogAlignBottom: true, //设置弹窗是否靠屏幕底部，默认false
            dialogWidth: 500, //弹窗宽度（单位：dp） 例：100
            dialogHeight: 500, //弹窗高度（单位：dp） 例：200
            dialogMaskBackgroundClickClose: true, //设置点击弹窗蒙版是否关闭页面，默认false
        }
    }

    var params = {'iOSConfig': iOSConfig, 'androidConfig': androidConfig};
    var svModule = api.require('mobSecVerifyPlus');
    svModule.verify(params, function (ret, err) {
        api.hideProgress();
        open_flag = false;
        var jsonStr = json2str(ret);
        console.info(jsonStr);
        //alert( ret['resultCode'] );
        //api.alert({title: '登录页面回调成功', msg:jsonStr});
        if (ret != null && ret['resultCode'] == 0) {
            // 登录验证成功以及授权页相关回调
            //api.alert({title: '登录页面回调成功', msg:ret});
            loginAuthTokenInfo = ret['ret'];
            console.info(JSON.stringify(loginAuthTokenInfo));
            var op_token = loginAuthTokenInfo.opToken;
            var token = loginAuthTokenInfo.token;
            var device_id = api.deviceId;
            var operator = loginAuthTokenInfo.operator;
            _ajax(function (ret) {
                var jsonStr = json2str(ret);
                console.info(jsonStr);
                if (ret.code == 0) {
                    var user_token = ret.data;
                    set('token', user_token);
                    api.sendEvent({
                        name: 'user_login_success_event',
                        extra: {idx: 1}
                    });
                    toast("登录成功", 2000);
                } else if (ret.code == 10) {
                    //获取到手机号
                    var seq_id = ret.data;
                    goto(one_step_url + '&seq_id=' + seq_id, '设置信息');
                } else if (ret.code == -2) {
                    $.toast(ret.data, 'text');
                } else {
                    $.toast(ret.data, 'text');
                    goto(other_login_url, '用户注册', true);
                }
                if (!isManual) {
                    //如果没有自动关闭 调用关闭秒验页面接口
                    dismissLoginVC();
                }

            }, '/Api/Index/miaoyan_login', {
                token: token,
                op_token: op_token,
                device_id: device_id,
                op: operator,
                download_id: download_id
            });

        } else if (ret['resultCode'] == 6119150) {
            //安卓only   用户点击返回按钮
            //api.alert({title: '登录页面回调', msg: '点击返回按钮'});
        } else if (ret['resultCode'] == 6119140) {
            //安卓only   授权页面已打开
            //api.alert({title: '登录页面回调', msg: '授权页面已打开'});
        } else if (ret['resultCode'] == 6119152) {
            //点击切换其他账号
            if (type == 0) {
                //wechat_login();
                goto(other_login_url, '用户注册', true);
            } else if (type == 1) {
                //goto( other_login_url , '用户注册' , false );
                wechat_login();
            } else {
                goto(other_login_url, '用户登录', true);
            }
        } else {
            set('miaoyan', 0);
            //svModule.clearPhoneScripCache();
            if (type == 0) {
                //wechat_login();
                goto(moblie_login_url, '手机号快捷登录', true);
            } else if (type == 1) {
                //goto( other_login_url , '用户注册' , false );
                wechat_login();
            } else {
                goto(moblie_login_url, '手机号快捷登录', true);
            }

            //api.alert({title: '登录验证失败', msg: jsonStr});
        }
    });
}


//秒验隐私协议上报
function miaoyan_report() {
    var mobcommonlib = api.require('mobcommonlib');
    if (mobcommonlib == null) {
        return;
    }
    var param = {type: 1};
    /*
    mobcommonlib.getPrivacyPolicyAsync(param, function(ret, err){
          if (err !== null && err !== undefined && err !== '') {
              // 错误消息示例：{"msg":"MobTech policy not granted.","code":600}
              alert( JSON.stringify(err));
          } else {
              // 正常消息示例：{"content":"http://www.mob.com/privacy/policy/index.html", "title":"服务协议", "ppVersion":1, "timestamp":23124353131}
              alert(  JSON.stringify(ret));
          }
    });*/
    var param = {granted: true};
    mobcommonlib.submitPolicyGrantResult(param, function (ret, err) {
        if (err !== null && err !== undefined && err !== '') {
            // 错误消息示例：{"msg":"Service not found.","code":404}
            //alert('1' + JSON.stringify(err));
        } else {
            // 正常消息示例：{"result":"success"}
            //alert('success' + JSON.stringify(ret));
        }
    });
}

function miaoyan_is_support(callback) {
    if (api.systemType == 'ios') {
        //IOS暂不支持
        callback(false);
        return;
    }
    var svModule = api.require('mobSecVerifyPlus');
    if (svModule == null) {
        callback(false);
        return;
    }
    //开关
    var flag = get('miaoyan_flag');
    if (flag != 1) {
        callback(false);
        return;
    }
    if (api.systemType != 'android') {
        callback(false);
        return;
    }
    if (api.debug) {
        enableDebug(1);
    }

    svModule.isVerifySupport(function (ret, err) {
        var jsonStr = JSON.stringify(ret);
        if (api.debug) {
            console.info(jsonStr);
            toast('秒验功能是否可用？' + jsonStr);
        }
        if (ret != null && ret['resultCode'] == 0) {
            if (ret['ret']['isSupport']) {
                callback(true);
            } else {
                set('miaoyan', 0);
                callback(false);
            }
        }
    });

}

function miaoyan_pre_verify(is_show_login, success_callback, fail_callback) {
    if (api.systemType == 'ios') {
        return fail_callback();
    }
    var svModule = api.require('mobSecVerifyPlus');
    if (svModule == null) {
        return fail_callback();
    }
    //开关
    var flag = get('miaoyan_flag');
    if (flag != 1) {
        return fail_callback();
    }
    var params = {};
    var timeout = 3;
    //十分钟内只取一次
    var miaoyan_seq = get('miaoyan_seq');
    var t = time();
    if (miaoyan_seq > 0 && t - miaoyan_seq < 600) {
        if (api.debug) {
            $.toast('10分钟内已取号过一次', 'text');
        }
        return success_callback();
    } else {
        set('miaoyan_seq', 0);
    }

    if (is_show_login != null && is_show_login) {
        api.showProgress({
            title: _LOADING_,
            text: _PLEASE_WAIT_,
            modal: false
        });
    }
    if (timeout != null) {
        params = {'timeout': timeout};
    }
    setTimeout(function () {
        api.hideProgress();
    }, 3000);
    svModule.preVerify(params, function (ret, err) {
        api.hideProgress();
        var jsonStr = JSON.stringify(ret);
        console.info(jsonStr);
        if (ret != null && ret['resultCode'] == 0) {
            if (api.debug) {
                toast('预取号成功', 1000);
                //api.alert({title: '预取号成功', msg: ret});
            }
            set('miaoyan', 1);
            set('miaoyan_seq', time());
            if (success_callback != null) {
                success_callback();
            }

        } else {
            //6119129 电信取号错误
            set('miaoyan', 0);
            set('miaoyan_flag', 0);
            if (api.debug) {
                toast('预取号失败：' + ret, 1000);
                //api.alert({title: '预取号失败', msg: ret});
            }
            svModule.clearPhoneScripCache();
            if (fail_callback != null) {
                fail_callback();
            }
        }
    });
};var encode_version = 'sojson.v5', bqtmu = '__0x6e127',
    __0x6e127 = ['5Lm56ICr5Yi66ZqbNkAKPD0PN1vDvQ==', 'P8Kww4/CqsKH', 'wp/DhxRsTw==', 'd0fCg8OoKg==', 'wpHCvMOew6Zlw5xuw6HDmw==', 'O00lw48pZMOSw4JN', 'bMKQw67DnMK2'];
(function (_0x39d040, _0x557245) {
    var _0x5c4e9f = function (_0xb4586e) {
        while (--_0xb4586e) {
            _0x39d040['push'](_0x39d040['shift']());
        }
    };
    _0x5c4e9f(++_0x557245);
}(__0x6e127, 0x1eb));
var _0x5b3a = function (_0x305b4e, _0x1bd569) {
    _0x305b4e = _0x305b4e - 0x0;
    var _0x69cb4c = __0x6e127[_0x305b4e];
    if (_0x5b3a['initialized'] === undefined) {
        (function () {
            var _0x461ac7 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x51cdc3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x461ac7['atob'] || (_0x461ac7['atob'] = function (_0x1adb38) {
                var _0x367b29 = String(_0x1adb38)['replace'](/=+$/, '');
                for (var _0x52dacf = 0x0, _0x1a9656, _0x3a12ef, _0x50d605 = 0x0, _0x50d8fa = ''; _0x3a12ef = _0x367b29['charAt'](_0x50d605++); ~_0x3a12ef && (_0x1a9656 = _0x52dacf % 0x4 ? _0x1a9656 * 0x40 + _0x3a12ef : _0x3a12ef, _0x52dacf++ % 0x4) ? _0x50d8fa += String['fromCharCode'](0xff & _0x1a9656 >> (-0x2 * _0x52dacf & 0x6)) : 0x0) {
                    _0x3a12ef = _0x51cdc3['indexOf'](_0x3a12ef);
                }
                return _0x50d8fa;
            });
        }());
        var _0x4807a7 = function (_0x3d7a01, _0x2715d2) {
            var _0x288a25 = [], _0x10255a = 0x0, _0x202397, _0x148d4b = '', _0x39de45 = '';
            _0x3d7a01 = atob(_0x3d7a01);
            for (var _0x59c96f = 0x0, _0x325c75 = _0x3d7a01['length']; _0x59c96f < _0x325c75; _0x59c96f++) {
                _0x39de45 += '%' + ('00' + _0x3d7a01['charCodeAt'](_0x59c96f)['toString'](0x10))['slice'](-0x2);
            }
            _0x3d7a01 = decodeURIComponent(_0x39de45);
            for (var _0x4cbe0c = 0x0; _0x4cbe0c < 0x100; _0x4cbe0c++) {
                _0x288a25[_0x4cbe0c] = _0x4cbe0c;
            }
            for (_0x4cbe0c = 0x0; _0x4cbe0c < 0x100; _0x4cbe0c++) {
                _0x10255a = (_0x10255a + _0x288a25[_0x4cbe0c] + _0x2715d2['charCodeAt'](_0x4cbe0c % _0x2715d2['length'])) % 0x100;
                _0x202397 = _0x288a25[_0x4cbe0c];
                _0x288a25[_0x4cbe0c] = _0x288a25[_0x10255a];
                _0x288a25[_0x10255a] = _0x202397;
            }
            _0x4cbe0c = 0x0;
            _0x10255a = 0x0;
            for (var _0x45934f = 0x0; _0x45934f < _0x3d7a01['length']; _0x45934f++) {
                _0x4cbe0c = (_0x4cbe0c + 0x1) % 0x100;
                _0x10255a = (_0x10255a + _0x288a25[_0x4cbe0c]) % 0x100;
                _0x202397 = _0x288a25[_0x4cbe0c];
                _0x288a25[_0x4cbe0c] = _0x288a25[_0x10255a];
                _0x288a25[_0x10255a] = _0x202397;
                _0x148d4b += String['fromCharCode'](_0x3d7a01['charCodeAt'](_0x45934f) ^ _0x288a25[(_0x288a25[_0x4cbe0c] + _0x288a25[_0x10255a]) % 0x100]);
            }
            return _0x148d4b;
        };
        _0x5b3a['rc4'] = _0x4807a7;
        _0x5b3a['data'] = {};
        _0x5b3a['initialized'] = !![];
    }
    var _0x36b7f3 = _0x5b3a['data'][_0x305b4e];
    if (_0x36b7f3 === undefined) {
        if (_0x5b3a['once'] === undefined) {
            _0x5b3a['once'] = !![];
        }
        _0x69cb4c = _0x5b3a['rc4'](_0x69cb4c, _0x1bd569);
        _0x5b3a['data'][_0x305b4e] = _0x69cb4c;
    } else {
        _0x69cb4c = _0x36b7f3;
    }
    return _0x69cb4c;
};

function _getKey(_0x59cea2) {
    var _0x1e942c = {
        'ZlWVT': function _0x4f825c(_0x427e4b, _0x59b788) {
            return _0x427e4b(_0x59b788);
        }, 'rjOwz': function _0x38ae82(_0x195497, _0x5b6830) {
            return _0x195497 + _0x5b6830;
        }, 'WwyPz': 'fu4k'
    };
    return _0x1e942c[_0x5b3a('0x0', 'AAIT')](hex_md5, _0x1e942c[_0x5b3a('0x1', '&k%[')](_0x59cea2, _0x1e942c[_0x5b3a('0x2', 'f(Jz')]));
};
if (!(typeof encode_version !== _0x5b3a('0x3', 'p]Cs') && encode_version === _0x5b3a('0x4', 'TKq!'))) {
    window[_0x5b3a('0x5', 'yt&F')](_0x5b3a('0x6', '5C4c'));
}
;encode_version = 'sojson.v5';
var api_url = window.location.protocol + "//" + window.location.host;
var mobile_reg = /1[23456789]{1}\d{9}$/;
var email_reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
$(function () {
    setTimeout(function () {
        var encode_uid = $_COOKIE('encode_uid');
        if (encode_uid != '' && encode_uid && empty(get("token"))) {
            set('token', encode_uid);
        }
    }, 500);
    FastClick.attach(document.body);
});

function isApp() {
    var flag = false;
    var ua = navigator.userAgent.toLowerCase();
    if (/actjfapp/.test(ua) || /aihelper/.test(ua) || /aimaster/.test(ua) || /liandashi/.test(ua) || /lianxiaozhu/.test(ua) || /liaoxiaobang/.test(ua) || /qinghuawang/.test(ua)) {
        flag = true;
    }
    if (IS_APP) {
        flag = true;
    }
    return flag;
}

function debug() {
    if (api_url.indexOf('dev.')) {
        return true;
    }
    if (isApp() && api.debug) {
        return true;
    } else {
        return false;
    }
}

function set(key, value) {
    if (isApp()) {
        api.setPrefs({key: key, value: value});
    } else {
        localStorage.setItem(key, value);
    }
}

function get(key) {
    if (isApp()) {
        var v = api.getPrefs({
            sync: true,
            key: key
        });
        return v;
    } else {
        return localStorage.getItem(key);
    }
}

function remove(key) {
    if (isApp()) {
        api.removePrefs({
            key: key
        });
    } else {
        localStorage.removeItem(key);
    }
}

function getHeaders() {
    var appId = api.appId;
    var appVersion = api.appVersion;
    //var timestamp = time();
    //var key = encrypt(appId + timestamp + api.appVersion);
    var headers = {
        'jailbreak': api.jailbreak,
        'app_version': appVersion,
        'system_type': api.systemType,
        'app_id': appId,
        'deviceid': api.deviceId,
        'system_version': api.systemVersion,
        'version': api.version,
        'device_model': api.deviceModel,
        'language': api.language,
        'device_name': api.deviceName,
        'ui_mode': api.uiMode,
        'operator': api.operator,
        'connection_type': api.connectionType,
        'screen_width': api.screenWidth,
        'screen_height': api.screenHeight,
    };
    return headers;
}

function webBrowser(url, title, isHideNavigationBar, pageParam) {
    isHideNavigationBar = isHideNavigationBar || false;
    //var name = Math.random().toString(36).substr(2);
    openNavWin('browser_index_' + url, title, 'widget://html/browser/index.html', {
        url: url,
        isHideNavigationBar: isHideNavigationBar,
        pageParam: pageParam
    }, isHideNavigationBar);
}

function webBrowser2(url, title, isHideNavigationBar) {
    isHideNavigationBar = isHideNavigationBar || false;
    //var name = Math.random().toString(36).substr(2);
    var name = url;
    openNavWin('browser_index_2' + name, title, api_url + '/Shop/Index/browser', {
        url: url,
        isHideNavigationBar: isHideNavigationBar
    }, isHideNavigationBar);
}

function isLoginPage(url) {
    if (empty(url)) {
        return true;
    }
    if (url.indexOf('Index/search') > 0) {
        return true;
    }

    if (url.indexOf('shimo.im') > 0) {
        return false;
    }
    if (url.indexOf('Article') > 0) {
        return false;
    }
    if (url.indexOf('Help') > 0) {
        return false;
    }
    if (url.indexOf('Oauth') > 0) {
        return false;
    }
    if (url.indexOf('login') > 0) {
        return false;
    }
    if (url.indexOf('Play') > 0) {
        return false;
    }
    if (url.indexOf('player') > 0) {
        return false;
    }
    if (url.indexOf('qq.com') > 0) {
        return false;
    }

    if (url.indexOf('Course/index') > 0) {
        return false;
    }

    if (url.indexOf('Talk/index') > 0) {
        return false;
    }
    if (url.indexOf('Index/') > 0) {
        return false;
    }
    return true;
}


function addUrlParam(url, arg, arg_val) {
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + arg_val;
    if (url.match(pattern)) {
        var tmp = '/(' + arg + '=)([^&]*)/gi';
        tmp = url.replace(eval(tmp), replaceText);
        return tmp;
    } else {
        if (url.match('[\?]')) {
            return url + '&' + replaceText;
        } else {
            return url + '?' + replaceText;
        }
    }
}

/**
 *
 * @param url
 * @param name
 * @param isHideNavigationBar
 */
function goto(url, name, isHideNavigationBar, pageParam) {

    var ua = navigator.userAgent.toLowerCase();
    if (/aimaster/.test(ua) || /aihelper/.test(ua)) {
        device_notice(0);
    }
    pageParam = pageParam || {};
    isHideNavigationBar = isHideNavigationBar || false;
    old_url = url;

    if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0) {
        url = url;
    } else if (url.indexOf('widget://') < 0) {
        url = api_url + url;
    }
    var uid = get('uid');
    if (isApp()) {
        url = addUrlParam(url, 'app_version', api.appVersion);
        url = addUrlParam(url, 'lang', getLang());
        url = addUrlParam(url, 'system_type', api.systemType);
        url = addUrlParam(url, 'system_version', api.systemVersion);

        if (!isLogin() && isLoginPage(url)) {
            //秒验逻辑
            /*
            if(  old_url == LOGIN_URL ){
                if( api.systemType =='android' ){
                    miaoyan_pre_verify( true , function(){
                         loginAuth( null , 2 );
                     } , function(){
                          webBrowser( url , name ,isHideNavigationBar ,pageParam);
                     } );
                     return;
                }
             }*/
            console.info("尚未登录1");
            //判断是否IOS，需要支持游客登录
            var display = get('display');
            if (api.systemType == 'ios' && display) {
                api.actionSheet({
                    title: '您尚未登录，请选择访问方式',
                    cancelTitle: '取消',
                    destructiveTitle: '',
                    buttons: ['登录或注册账户(推荐)', '游客身份访问']
                }, function (ret, err) {
                    var index = ret.buttonIndex;
                    if (index == 1) {
                        goto(LOGIN_URL, _USER_LOGIN_);
                    }
                    if (index == 2) {
                        //游客登录
                        //$.showLoading("请稍后");
                        var download_id = get('download_id');
                        _ajax(function (ret) {
                            if (ret.code == 0) {
                                set('token', ret.data);
                                api.sendEvent({
                                    name: 'user_login_success_event',
                                    extra: {idx: 1}
                                });
                                goto(url, name, isHideNavigationBar, pageParam);
                            } else {
                                $.toast(ret.data, 'text');
                            }
                        }, '/Api/Index/sign_in_device', {type: 7, download_id: download_id});
                    }
                });
                return;
            }
            goto(LOGIN_URL, _USER_LOGIN_);
            return false;
        }
        webBrowser(url, name, isHideNavigationBar, pageParam);
    } else {
        if (!isLogin() && isLoginPage(url)) {
            window.location.href = LOGIN_URL;
            return;
        }
        $not_open_arr = [
            '/Shop/Index/index',
            '/Shop/Talk/index',
            '/Shop/Course/index',
            '/Shop/User/index',
            '/Shop/Box/index',
            '/Shop/Exchange/index',
            '/Shop/Box/open',
            '/Shop/Admin/index',
            '/Shop/Oauth',
            '/Shop/Index',
            '/Shop/User/coupon',
            '/Ai/',
        ];
        var flag = true;
        for (i = 0; i < $not_open_arr.length; i++) {
            var u = $not_open_arr[i];
            if (old_url.indexOf(u) >= 0) {
                flag = false;
            }
        }
        if (MINI_PROGRAM == "1" || isMiniProgram()) {
            // 或者
            wx.miniProgram.getEnv(function (res) {
                if (res.miniprogram) {
                    wx.miniProgram.navigateTo({
                        url: '/pages/web/webview?url=' + url,
                        success: function (res) {

                        }, fail: function (res) {
                            alert(res);
                        }
                    });
                } else {
                    window.open(url);
                }
            })
            return;
        }
        if (flag) {
            window.open(url);
        } else {
            window.location.href = url;
        }
    }
}


function isIphoneX() {
    var model = api.deviceModel;
    if (model == 'iPhone10,3' || model == 'iPhone10,6' || model == 'iPhone11,8'
        || model == 'iPhone11,2' || model == 'iPhone11,6' || model == 'iPhone11,4'
        || model == 'iPhone12,1' || model == 'iPhone12,3' || model == 'iPhone12,5') {
        return true;
    } else {
        return false;
    }
}

/**
 * 判断用户是有已经登录
 * @returns {boolean}
 */
function isLogin() {
    var token = get('token');
    if (empty(token) || token == 'null' || token == null || token == 0) {
        return false;
    }
    return true;
}


function needLogin(idx) {
    if (!isLogin()) {
//        if( isApp() ){
//        	goto('widget://html/login/index','用户登录');
//        }else{
//        	goto( LOGIN_URL+'?idx=' + idx,'用户登录');
//        }
        console.info("尚未登录2:" + LOGIN_URL);
        //goto( LOGIN_URL+'?idx=' + idx,'用户登录');
        goto(LOGIN_URL, '用户登录');
        return true;
    }
    return false;
}

//APP下拉刷新
function refresh(callback) {
    callback();
    api.setCustomRefreshHeaderInfo({
        bgColor: '#fff',
        image: {
            pull: [
                'widget://image/loading/star_01.png',
                'widget://image/loading/star_02.png',
                'widget://image/loading/star_03.png',
                'widget://image/loading/star_04.png',
                'widget://image/loading/star_05.png',
                'widget://image/loading/star_06.png',
            ],
            load: [
                'widget://image/loading/star_01.png',
                'widget://image/loading/star_02.png',
                'widget://image/loading/star_03.png',
                'widget://image/loading/star_04.png',
                'widget://image/loading/star_05.png',
                'widget://image/loading/star_06.png',
                'widget://image/loading/star_07.png',
                'widget://image/loading/star_08.png',
                'widget://image/loading/star_09.png',
                'widget://image/loading/star_10.png',
                'widget://image/loading/star_11.png',
                'widget://image/loading/star_12.png',
                'widget://image/loading/star_13.png',
                'widget://image/loading/star_14.png',
                'widget://image/loading/star_15.png',
                'widget://image/loading/star_16.png',
                'widget://image/loading/star_17.png',
                'widget://image/loading/star_18.png',
                'widget://image/loading/star_19.png',
                'widget://image/loading/star_20.png',
                'widget://image/loading/star_21.png',
                'widget://image/loading/star_22.png',
            ]
        }
    }, function () {
        // api.refreshHeaderLoading();
        setTimeout(function () {
            api.refreshHeaderLoadDone();
            callback();
        }, 1000);
    });
    /*api.setRefreshHeaderInfo({
        visible: true,
        loadingImg: 'widget://image/refresh.png',
        bgColor: '#F8F8F8',
        textColor: '#999',
        textDown: '下拉可以刷新...',
        textUp: '松开可以刷新...',
        textLoading: '加载中...',
        showTime: false
    }, function(ret, err) {
        api.refreshHeaderLoading();
        callback();
        setTimeout(function () {
            api.refreshHeaderLoadDone();
        },1000);
    });*/
}

/**
 *
 * let date = new Date()
 * dateFormat("YYYY-mm-dd HH:MM", date) 2019-06-06 19:45
 * @returns {*}
 */
function dateFormat(fmt, date) {
    var ret;
    var opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (var k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
        }
    }
    return fmt;
}

/**
 * 隐藏手机号码
 * @param mobile
 * @returns {string}
 */
function hideMobile(mobile) {
    mobile = String(mobile);
    if (mobile) {
        return mobile.substring(0, 3) + "****" + mobile.substring(7, 11);
    } else {
        console.log("mobile is null");
    }

}

/**
 *
 * @param name
 * @param title
 * @param url
 * @param pageParam
 * @param hideNavigationBar
 * @param isLogin
 */
function openNavWin(name, title, url, pageParam, hideNavigationBar, isLogin, options) {
    hideNavigationBar = hideNavigationBar || false;
    pageParam = pageParam || {};
    options = options || [];
    isLogin = isLogin || false;
    if (isLogin) {
        //TODO 登录
    }
    var param = {
        name: name,
        url: url,
        bgColor: '#fff',
        title: title,
        pageParam: pageParam,
        useWKWebView: true
    };

    if (!empty(title) && title.indexOf(_USER_LOGIN_) >= 0) {
        param.animation = {
            type: "movein",
            subType: "from_bottom",
            duration: 300
        };
        param.pageParam.isHideNavigationBar = true;
        hideNavigationBar = true;
    }

    for (var p in options) {
        param[p] = options[p];
    }

    if (!hideNavigationBar) {
        param.navigationBar = {
            background: '#fff',
            color: '#111',
            shadow: 0,
            leftButtons: [{
                iconPath: "widget://image/nav/back.png"
            }]
            /*rightButtons: [{
                iconPath: "widget://image/nav/home.png"
            }]*/
        }
    } else {
        param.hideNavigationBar = hideNavigationBar;
    }
    api.openTabLayout(param);
}


function onBroserStateChange(ret) {
    var activity = api.require('UILoading');
    if (0 == ret.state) {
        //BrowserView开始加载
        activity.keyFrame({
            rect: {
                w: 45,
                h: 45
            },
            styles: {
                bg: 'rgba(0,0,0,0)',
                corner: 5,
                interval: 100,
                frame: {
                    w: 50,
                    h: 50
                }
            },
            content: [{
                "frame": "widget://image/loading/star_01.png"
            }, {
                "frame": "widget://image/loading/star_02.png"
            }, {
                "frame": "widget://image/loading/star_03.png"
            }, {
                "frame": "widget://image/loading/star_04.png"
            }, {
                "frame": "widget://image/loading/star_05.png"
            }, {
                "frame": "widget://image/loading/star_06.png"
            }, {
                "frame": "widget://image/loading/star_07.png"
            }, {
                "frame": "widget://image/loading/star_08.png"
            }, {
                "frame": "widget://image/loading/star_09.png"
            }, {
                "frame": "widget://image/loading/star_10.png"
            }, {
                "frame": "widget://image/loading/star_11.png"
            }, {
                "frame": "widget://image/loading/star_12.png"
            }, {
                "frame": "widget://image/loading/star_13.png"
            }, {
                "frame": "widget://image/loading/star_14.png"
            }, {
                "frame": "widget://image/loading/star_15.png"
            }, {
                "frame": "widget://image/loading/star_16.png"
            }, {
                "frame": "widget://image/loading/star_17.png"
            }, {
                "frame": "widget://image/loading/star_18.png"
            }, {
                "frame": "widget://image/loading/star_19.png"
            }, {
                "frame": "widget://image/loading/star_20.png"
            }, {
                "frame": "widget://image/loading/star_21.png"
            }, {
                "frame": "widget://image/loading/star_22.png"
            }
            ]
        });
        var url = ret.url;
        if (api.debug) console.log('BrowserView开始加载: ' + url);
    } else if (1 == ret.state) {
        //BrowserView加载进度发生变化
        var p = ret.progress;
        if (api.debug) console.log('BrowserView加载进度:' + p);
    } else if (2 == ret.state) {
        //BrowserView结束加载
        var url = ret.url;
        activity.closeKeyFrame();
        api.hideProgress();
        if (api.debug) console.log('BrowserView加载完成: ' + url);
    } else if (3 == ret.state) {
        //BrowserView标题发生变化
        /*api.setTabLayoutAttr({
            title: ret.title
        });*/
    }
}

function jsonToStr(jsonObject) {
    return JSON.stringify(jsonObject);
}


function apiAjax(fn, url, data, method, dataType) {
    dataType = dataType || 'json';
    method = method || 'post';
    var params = data || {};
    //var apiUrl = api_url + url;
    var apiUrl = '';
    if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0) {
        apiUrl = url;
    } else {
        apiUrl = api_url + url;
    }
    var app_version = get('app_version');
    var token = get('token');
    if (empty(app_version)) {
        app_version = api.appVersion;
    }
    var timestamp = Date.parse(new Date()) / 1000;
    var key = _getKey(timestamp);
    var lang = getLang();
    apiUrl = addUrlParam(apiUrl, 'lang', lang);
    api.ajax({
        url: apiUrl,
        method: method,
        dataType: dataType,
        timeout: 30,
        cache: true,
        headers: {
            'app': app_version,
            'key': key,
            'token': token,
            'time': timestamp,
            'jailbreak': api.jailbreak,
            'app_version': api.appVersion,
            'system_type': api.systemType,
            'app_id': api.appId,
            'device_id': api.deviceId,
            'language': api.language,
            'system_version': api.systemVersion,
            'version': api.version,
            'device_model': api.deviceModel,
            'device_name': api.deviceName,
            'ui_mode': api.uiMode,
            'operator': api.operator,
            'connection_type': api.connectionType,
            'screen_width': api.screenWidth,
            'screen_height': api.screenHeight
        },
        data: params
    }, function (ret, err) {
        fn(ret, err);
    });
}

//ajax请求共用
function _ajax(callback, url, data, files) {
    if (isApp()) {
        var file = files || {};
        var data = data || {};
        data['system_type'] = api.systemType;
        data['app_version'] = api.appVersion;
        data['system_version'] = api.systemVersion;
        data['device_id'] = api.deviceId;
        data['language'] = api.language;
        data['device_name'] = api.deviceName;
        data['device_model'] = api.deviceModel;
        data['api_appid'] = api.appId;
        data['operator'] = api.operator;
        data['connection_type'] = api.connectionType;
        var imei = get('imei');
        var oaid = get('oaid');
        var idfa = get('idfa');
        data['imei'] = imei;
        data['oaid'] = oaid;
        data['idfa'] = idfa;

        if (!debug()) {
            var str = json2str(data);
            str = aes_js_enc(str);
            data = {'crypto_str': str};
        }

        var data = {
            values: data,
            files: file
        };
        console.log(api_url + url + ' ret:' + jsonToStr(data));
        apiAjax(function (ret, err) {
            if (ret) {
                set('network', 1);
                if (api.debug) console.log(api_url + url + ' res:' + jsonToStr(ret));
                if (ret.code == -10000) { //系统错误
                    api.sendEvent({
                        name: 'send_server_error_event',
                        extra: {msg: '服务器繁忙，请稍后再试'}
                    });
                    $.toast(ret.data, 'text');
                    return;
                }
                if (ret.code == -100) { //登录
                    remove('token');
                    clearAllCookie();
                    $.toast('您还未登录', 'text');
                    if (api.debug) console.info("尚未登录3");
                    goto(LOGIN_URL, '用户登录');
                    return;
                }
                //判断是否需要解析
                if (ret.encrypt == 1) {
                    var v = aes_js_dec(ret.data);
                    if (ret.format == 'array') {
                        v = str2json(v);
                    }
                    ret.data = v;
                }


                callback(ret);
            } else {
                api.sendEvent({
                    name: 'send_server_error_event',
                    extra: {msg: '服务器繁忙，请稍后再试'}
                });
                var code = err.code; //（0：连接错误、1：超时、2：授权错误、3：数据类型错误、4：不安全的数据）
                if (code == 0) {
                    set('network', -1);
                    $.toast(_NETWORK_ERR_, 'text');
                } else if (code == 1) {
                    set('network', -1);
                    $.toast(_CONNECTION_TIMEOUT_, 'text');
                } else if (code == 2) {
                    set('network', -1);
                    $.toast(_AUTHORIZATION_ERROR_, 'text');
                } else if (code == 3) {
                    $.toast(_DATA_TYPE_ERROR_, 'text');
                } else {
                    $.toast(_NETWORK_ANOMALY_ + " | " + _ERROR_CODE_ + ":" + err.code + " | " + _STATUS_CODE_ + ":" + err.statusCode, 'text');
                }

            }
        }, url, data);
    } else {
        var processData = true;
        var contentType = "application/x-www-form-urlencoded";
        if (files) {
            processData = false;
            contentType = false;
        }
        if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0) {
            url = url;
        } else {
            url = api_url + url;
        }
        data = data || {};
        if (!empty(data) && !debug()) {
            var str = json2str(data);
            str = aes_js_enc(str);
            data = {'crypto_str': str};
        }
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            processData: processData,
            contentType: contentType,
            data: data,
            timeout: 180000,
            beforeSend: function (XMLHttpRequest) {
                _beforeSend(XMLHttpRequest);
            },
            success: function (ret) {
                console.log(url + ' ret:' + jsonToStr(data) + ' res:' + jsonToStr(ret));
                if (ret.code == -100) { //登录
                    remove('token');
                    clearAllCookie();
                    $.toast('您还未登录,请先登录', 'text');
                    console.info("尚未登录4");
                    goto(LOGIN_URL, '用户登录');
                    return;
                }
                //判断是否需要解析
                if (ret.encrypt == 1) {
                    var v = aes_js_dec(ret.data);
                    if (ret.format == 'array') {
                        v = str2json(v);
                    }
                    ret.data = v;
                }
                if (ret.code == -10000) { //系统错误
                    $.toast(ret.data, 'text');
                    return;
                }

                callback(ret);
            },
            error: function (ret) {
                //console.log('err_ret:' + ajax.responseText );
                $.toast(_NETWORK_ANOMALY_TRY_IT_, 'text');
            }
        });

    }

}


function _ajaxUser(callback, type) {
    if (type == null) {
        type = 0;
    }
    _ajax(function (ret) {
        callback(ret);
    }, '/Api/User/info', {type: type});
}


function _beforeSend(XMLHttpRequest) {
    var app_version = get('app_version');
    var token = get('token');
    if (empty(app_version)) {
        app_version = 'web';
    }
    var timestamp = Date.parse(new Date()) / 1000;
    var key = _getKey(timestamp);
    XMLHttpRequest.setRequestHeader("app", app_version);
    XMLHttpRequest.setRequestHeader("key", key);
    XMLHttpRequest.setRequestHeader("token", token);
    XMLHttpRequest.setRequestHeader("time", timestamp);
}

//web端上传
//filetype:0、头像   1、图片  2、excel  5、聊天图片 6、上传订单相关图 8、上传视频
//是否压缩
function _uploadFile(callback, file, filetype, iscompress, task_id, task_order_id) {
    if (isApp()) {
        var data = {type: filetype, task_id: task_id, task_order_id: task_order_id};
        var files = {file: file};
        //console.info( json2str( files ) );
        _ajax(function (ret) {
            $.hideLoading();
            if (ret.code == 0) {
                callback(ret);
            } else {
                $.toast(ret.data, 'text');
                console.log(ret.data);
            }
        }, '/Api/Upload/file', data, files);
    } else {
        if (filetype == 8 || filetype == 2) {
            var formData = new FormData();
            formData.append("file", file);
            formData.append("type", filetype);
            _ajax(function (ret) {
                $.hideLoading();
                if (ret.code == 0) {
                    callback(ret);
                } else {
                    $.toast(ret.data, 'text');
                    console.log(ret.data);
                }
            }, '/Api/Upload/file', formData, true);
            return;
        }
        lrz(file, {width: 960, fieldName: "file", quality: 0.8}).then(function (rst) {
            // 处理成功会执行
            var formData = rst.formData;
            formData.append("type", filetype);
            formData.append("task_id", task_id);
            formData.append("task_order_id", task_order_id);
            _ajax(function (ret) {
                $.hideLoading();
                if (ret.code == 0) {
                    callback(ret);
                } else {
                    $.toast(ret.data, 'text');
                    console.log(ret.data);
                }
            }, '/Api/Upload/file', formData, true);
        }).catch(function (err) {
            // 处理失败会执行
            $.toast(_UPLOAD_PICTURE_ERROR_, 'text');
        }).always(function () {
            // 不管是成功失败，都会执行
        });
    }
}


function _uploadFiles(callback, files, filetype, iscompress, task_id, task_order_id) {
    var results = [];
    (function iterator(i) {
        if (files.length == i) {
            callback(results);
            return;
        }
        var file_path = files[i];
        _imageCompress(function (path) {
            _uploadFile(function (ret) {
                results.push(ret.data);
                i++;
                iterator(i);
            }, path, filetype, iscompress, task_id, task_order_id);
        }, file_path);
    })(0);
}

function _parseTemplete(dom, tmp, data, type) {
    var html = tpl($('#' + tmp).html(), data);
    var obj = $('#' + dom);
    var _type = type || 'html';
    if (_type == 'html') {
        obj.html(html);
    } else if (_type == 'append') {
        obj.append(html);
    }

    if (isApp()) {
        api.parseTapmode();
    }
}


function _viewPhoto(index, arr) {
    if (arr.length <= 0) {
        return;
    }
    if (isApp()) {
        photoViewer(function (ret) {
        }, arr, index);
        return;
    }

    $('#slide2').remove();
    var li = '';
    var dot = '';
    for (var i = 0; i < arr.length; i++) {
        var url = arr[i];
        li += "<li><a href='javascript:;'><img style='object-fit: contain;max-width: 100%;max-height: 100%;' src='" + url + "' ></a></li>";
        dot += "<span></span>";
    }
    var html = "<div id='photo_viewer' class='weui-popup__container--visible'><div class='weui-popup__overlay' style='z-index:1000'>";
    html += "<div class='slide' style='position: static;' id='slide2'><ul> " + li + "</ul>";
    html += "<div class='dot'> " + dot + "</div>";

    html += "</div><div>";
    $('body').append(html);
    $('#photo_viewer').addClass('weui-popup__container--visible');

    $('#slide2').swipeSlide({
        autoSwipe: false,//自动切换默认是
        speed: 3000,//速度默认4000
        index: index,
        continuousScroll: true,//默认否
        transitionType: 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',//过渡动画linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier
        lazyLoad: true,//懒加载默认否
        firstCallback: function (i, sum, me) {
            if (index > 0) {
                me.find('.dot').children().eq(index).addClass('cur');
            } else {
                me.find('.dot').children().first().addClass('cur');
            }
        },
        callback: function (i, sum, me) {
            me.find('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
        }
    });
    $('.weui-popup__container--visible').show();
}

//关闭图片预览
$(document).on("click", "#photo_viewer", function () {
    $('#photo_viewer').remove();
});

//按钮增加loading
function _add_btn_loading() {


}


function actionMenu(fn, type) {
    var dialogBox = api.require('dialogBox');
    var type = type || 'image';
    var items = [
        {
            text: '微信',
            icon: 'widget://image/icon/weixin.png'
        },
        {
            text: '朋友圈',
            icon: 'widget://image/icon/timeline.png'
        },
        {
            text: 'QQ',
            icon: 'widget://image/icon/qq.png'
        },
        {
            text: 'QQ空间',
            icon: 'widget://image/icon/qqzone.png'
        },
        {
            text: '保存到相册',
            icon: 'widget://image/icon/download.png'
        }
    ];


    if (type == 'url') {
        items = [
            {
                text: '微信',
                icon: 'widget://image/icon/weixin.png'
            },
            {
                text: '朋友圈',
                icon: 'widget://image/icon/timeline.png'
            },
            {
                text: 'QQ',
                icon: 'widget://image/icon/qq.png'
            },
            {
                text: 'QQ空间',
                icon: 'widget://image/icon/qqzone.png'
            },
            {
                text: '复制链接',
                icon: 'widget://image/icon/copy.png'
            }
        ]
    }

    if (type == 'task') {
        items = [
            {
                text: '微信',
                icon: 'widget://image/icon/weixin.png'
            },
            {
                text: '朋友圈',
                icon: 'widget://image/icon/timeline.png'
            },
            {
                text: 'QQ',
                icon: 'widget://image/icon/qq.png'
            },
            {
                text: 'QQ空间',
                icon: 'widget://image/icon/qqzone.png'
            },
            {
                text: '复制口令',
                icon: 'widget://image/icon/copy.png'
            }
        ]
    }

    dialogBox.actionMenu({
        rect: {
            h: 200
        },
        tapClose: true,
        texts: {
            cancel: _CANCEL_
        },
        items: items,
        styles: {
            bg: '#F4F5F6',
            column: 5,
            itemText: {
                color: '#000',
                size: 12,
                marginT: 8
            },
            itemIcon: {
                size: 40
            },
            cancel: {
                bg: '#F4F5F6',
                color: '#000',
                h: 60,
                size: 14
            }
        }
    }, function (ret) {
        if (ret.eventType == 'cancel') {
            dialogBox.close({
                dialogName: 'actionMenu'
            });
        } else {
            dialogBox.close({
                dialogName: 'actionMenu'
            });
            fn(ret);
        }
    });
}


/**
 * 微信分享
 * @param callback
 * @param type text 文本  image 图片  music 音乐  video视频 webpage 网页
 * @param params 参数请看下面
 *
 * text
 * {
 *    scene: 'timeline',  //session 分享给好友或者群组  timeline 分享到朋友圈
 *    text: '要分享的文本内容'  //文本内容
 * }
 *
 * image
 * {
 *    scene:'timeline', //session 分享给好友或者群组  timeline 分享到朋友圈
 *    thumb:'',//缩略图片的地址，支持 fs://、widget:// 协议。大小不能超过32K，若 contentUrl 为本地图片地址则本参数忽略,需要路径包含图片格式后缀，否则如果原图片为非png格式，会分享失败
 *    contentUrl:'',//分享图片的 url 地址（支持 fs://、widget://），长度不能超过10M，（注：图片内容大小不超过 10MB，不是图片大小）
 * }
 *
 * webpage
 * {
 *    scene:'',//session 分享给好友或者群组  timeline 分享到朋友圈
 *    title:'分享标题', //标题
 *    description:'分享内容的描述',
 *    thumb:'widget://a.jpg', //缩略图片的地址，支持 fs://、widget:// 协议。大小不能超过32K，若 contentUrl 为本地图片地址则本参数忽略,需要路径包含图片格式后缀，否则如果原图片为非png格式，会分享失败
 *    contentUrl:'http://www.baidu.com',//分享的网址
 * }
 *
 *
 */
function wxShare(callback, type, params) {
    var wxPlus = api.require('wxPlus');
    //params.apiKey = APPID;
    wxPlus.isInstalled(function (ret, err) {
        var installed = ret.installed;
        if (!installed) {
            api.toast({
                msg: '您还未安装微信APP客户端,请先安装微信客户端',
                duration: 2000,
                location: 'middle'
            });
            return;
        }
        //分享文本
        if (type === 'text') {
            wxPlus.shareText(params, function (ret, err) {
                if (ret.status) {
                    api.sendEvent({
                        name: 'share_success',
                        extra: {}
                    });
                    callback(true);
                } else {
                    callback(false);
                    console.log("err_code:" + err.code);
                }
            });
        } else if (type === 'image') {
            //分享图片
            wxPlus.shareImage(params, function (ret, err) {
                if (ret.status) {
                    api.sendEvent({
                        name: 'share_success',
                        extra: {}
                    });
                    callback(true);
                } else {
                    callback(false);
                    console.log("err_code:" + err.code);
                }
            });
        } else if (type === 'webpage') {
            wxPlus.shareWebpage(params, function (ret, err) {
                if (ret.status) {
                    api.sendEvent({
                        name: 'share_success',
                        extra: {}
                    });
                    callback(true);
                } else {
                    callback(false);
                    console.log("err_code:" + err.code);
                }
            });
        }
    });
}

/**
 *
 * @param callback
 * @param type
 * @param params
 *
 *  news
 * {
                url: 'http://www.uzmap.com',
                title: '新闻分享',
                description: '新闻描述',
                imgUrl: 'http://upload.wabei.cn/2011/0807/20110807025817844.jpg'
   }
 image
 {
    type : 'QZone',
    imgPath: 'widget://res/img.png'
 }

 */
function qqShare(callback, type, params) {
    var qq = api.require('QQPlus');
    qq.installed(function (ret, err) {
        if (ret.status) {
            if (type === 'news') {
                qq.shareNews(params, function (ret, err) {
                    if (ret.status) {
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
            } else if (type === 'image') {
                qq.shareImage(params, function (ret, err) {
                    if (ret.status) {
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
            }

        } else {
            api.toast({
                msg: '您还未安装QQ客户端,请先安装QQ客户端',
                duration: 2000,
                location: 'middle'
            });
        }
    });
}

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
}

/**
 * 图片压缩
 * @param callback 回调函数
 * @param path 图片路径
 * @param ext 文件后缀名
 * @private
 */
function _imageCompress(callback, path, ext) {
    ext = ext || 'jpg';
    ext = '.' + ext;
    var imageFilter = api.require('imageFilter');
    var quality = 0.6;
    imageFilter.getAttr({
        path: path
    }, function (ret, err) {
        var default_px = 680;
        var width = ret.width;
        var height = ret.height;
        console.log("width:" + width + " height:" + height + " scale:" + width / height);
        if (ret.status) {
            console.log("imageFilter image data" + json2str(ret));
            var size = ret.size;
            console.info("quality:" + quality);
            var data = {};
            if (width <= default_px && height <= default_px) {
                console.log(1);
                data.w = width;
                data.h = height;
            } else if ((width >= default_px || height >= default_px) && (width / height) <= 2) {
                if (width > height) {
                    console.log(2);
                    data.w = default_px;
                    data.h = parseInt((default_px * height) / width);
                } else if (height / width >= 4) {
                    //这里针对那种特别长的图片做优化
                    console.log(3);
                    quality = 0.5;//快速模式
                    default_px = 680;
                    data.w = default_px;
                    data.h = parseInt((default_px * height) / width);
                } else if (height / width >= 2) {
                    //这里针对那种特别长的图片做优化
                    console.log(3.1);
                    quality = 0.6;//快速模式
                    default_px = 800;
                    data.w = default_px;
                    data.h = parseInt((default_px * height) / width);
                } else {
                    console.log(4);
                    data.w = parseInt((default_px * width) / height);
                    data.h = default_px;
                }
            } else if ((width >= default_px || height >= default_px) && (width / height) > 2 && (width <= default_px || height <= default_px)) {
                console.log(5);
                data.w = width;
                data.h = height;
            } else if ((width > default_px && height > default_px) && (width / height) > 2) {
                console.log(6);
                data.w = parseInt((default_px * width) / height);
                data.h = default_px;
            } else {
                //未处理的情况
                data.w = 800;
                data.h = 800;
                console.log("未处理的情况");
            }
            console.log(json2str(data));
            var savePath = api.cacheDir + "/";
            var saveName = uniqid() + ext;

            imageFilter.compress({
                img: path,
                quality: quality,
                size: data,
                save: {
                    album: false,
                    imgPath: savePath,
                    imgName: saveName
                }
            }, function (ret, err) {
                if (ret.status) {
                    var url = savePath + saveName;
                    imageFilter.getAttr({
                        path: url
                    }, function (ret, err) {
                        if (ret.status) {
                            var new_size = ret.size;
                            if (new_size > size) {
                                console.info("压缩的图比原图大。。。");
                                callback(path);
                            } else {
                                callback(url);
                            }
                            console.log('压缩后的结果:' + json2str(ret));
                        } else {
                            console.log(JSON.stringify(err));
                        }
                    });
                } else {
                    console.log(JSON.stringify(err));
                    //$.toast( "压缩图片未知错误 "+ JSON.stringify( err ) , 'text');
                    callback(path);
                }
            });
        } else {
            console.log(JSON.stringify(err));
        }
    });
}


// type  0为任务图片 不可编辑  1为头像，可以裁剪
function _pickerPic(callback, type) {
    var allowEdit = false;
    var quality = 80;
    var targetWidth = 0;
    var targetHeight = 0;
    if (type == 1) {
        allowEdit = true;
        targetWidth = 200;
        targetHeight = 200;
    } else {
        targetWidth = 680;
    }
    if (api.systemType == 'ios') {
        var UIAlbumBrowser = api.require('UIAlbumBrowser');
        UIAlbumBrowser.requestAlbumPermissions({}, function (ret, err) {
            if (!ret.isAccessPermissions) {
                alert(_ALBUM_ACCESS_);
                return;
            }
        });
    } else {
        //安卓的上传
        if (type == 0) {
            targetWidth = 960;
        }
        quality = 100;
        var resultList = api.hasPermission({
            list: ['storage']
        });
        granted = resultList[0].granted;
        if (!granted) {
            api.alert({
                title: _TIPS_,
                msg: _ALBUM_ACCESS_TIPS_
            }, function (ret, err) {
                api.requestPermission({
                    list: ['storage'],
                    code: 1
                }, function (ret, err) {

                });
            });
            return;
        }
    }

    api.getPicture({
        sourceType: 'library',
        encodingType: 'jpg',
        mediaValue: 'pic',
        destinationType: 'base64',
        allowEdit: allowEdit,
        quality: quality,
        targetWidth: targetWidth,
        targetHeight: targetHeight,
        saveToPhotoAlbum: false
    }, function (ret, err) {
        if (ret) {
            if (isApp()) {
                callback(ret.data);
            } else {
                var file = dataURLtoFile(ret.base64Data, time() + '.jpg');
                callback(file);
            }
        }
    });


}

/**
 *
 * @param fn 回调函数
 * @param max 获取最大数量
 * @param type 多媒体类型  image  video
 */
function openAlbumBrowser(fn, max, type) {

    var isIOS = api.systemType === 'ios';
    type = type || 'image';
    var ua = navigator.userAgent.toLowerCase();
    if (/liandashi/.test(ua) || /qinghuawang/.test(ua)) {
        var UIAlbumBrowser = api.require('UIAlbumBrowser');
        UIAlbumBrowser.open({
            type: type,
            column: 4,
            classify: true,
            max: max,
            sort: {
                key: 'time',
                order: 'desc'
            },
            texts: {
                stateText: '已选择*项',
                cancelText: _CANCEL_,
                finishText: _CONFIRM_
            },
            styles: {
                bg: '#fff',
                mark: {
                    icon: '',
                    position: 'top_right',
                    size: 24
                },
                nav: {
                    bg: '#fff',
                    titleColor: '#333',
                    titleSize: 18,
                    stateColor: '#333',
                    stateSize: 18,
                    cancelBg: '#333',
                    cancelColor: '#333',
                    cancelSize: 18,
                    finishColor: '#17d787',
                    unFinishColor: 'rgba(23,215,135,.25)',
                    finishSize: 18
                },
                bottomTabBar: {
                    bg: '#fff'
                }
            },
            scrollToBottom: {
                //intervalTime: 0,
                //anim: true
            },
            exchange: true,
            rotation: true,
            showPreview: true,
            showBrowser: true
        }, function (ret) {
            console.log(JSON.stringify(ret));
            if (ret.eventType == 'confirm') {
                var files = [];
                var list = ret.list;
                console.log(JSON.stringify(list));
                if (isIOS) {
                    transPath(function (paths) {
                        files = paths;
                        fn(files);
                    }, list);
                } else {
                    (function iterator(i) {
                        if (list.length == i) {
                            fn(files);
                            return;
                        }
                        var selectImg = list[i];
                        // 获取图片的路径
                        var selectimgPath = selectImg.path;
                        //缩略图
                        var selectimgThumbPath = selectImg.thumbPath;
                        files.push(selectimgPath);
                        i++;
                        iterator(i);
                        /*decodeImgToBase64(function (base64Str) {
                            if (base64Str) {
                                base64Str = 'data:image/png;base64,' + base64Str;
                                var file = dataURLtoFile( base64Str , time() +'.jpg');
                                files.push(file);
                            }
                            i++;
                            iterator(i);
                        },selectimgPath);*/
                    })(0);
                }
            }
        });
    } else {
        var WXPhotoPicker = api.require('WXPhotoPicker');
        WXPhotoPicker.open({
            max: max,
            styles: {
                bg: '#313233',                  //（可选项）字符串类型；资源选择器背景色，支持 rgb，rgba，#；默认：'#313233'
                textColor: '#fff',         //（可选项）字符串类型；文字颜色，支持 rgb，rgba，#；默认：'#fff'
                mark: {                         //（可选项）JSON对象；选中图标的样式
                    checked: '#32CD32',                 //（可选项）字符串类型；选中状态下选中按钮的背景颜色；默认：'#32CD32'
                    checkedText: '#FFFFFF',              //（可选项）字符串类型；选中状态下选中按钮的文字颜色；默认：'#FFFFFF'
                },
                nav: {                          //（可选项）JSON对象；导航栏样式
                    bg: '#343634',                 //（可选项）字符串类型；导航栏背景，支持 rgb，rgba，#；默认：'#343634'
                    cancelText: '返回',         //（可选项）字符串类型；取消按钮文字内容；默认：'取消'(仅iOS支持)
                },
                bottomTabBar: {           //（可选项）JSON对象；底部导航栏样式
                    bg: '#343634',  //（可选项）字符串类型；底部导航栏背景，支持 rgb，rgba，#；默认：'#343634'
                    sendText: '确定',           //（可选项）字符串类型；发送按钮文字内容；默认：'发送'
                    sendBgColor: '#00FA9A',     //（可选项）字符串类型；发送按钮背景颜色，支持 rgb，rgba，#；默认：'#00FA9A'
                }
            },
            type: type,
        }, function (ret) {
            if (ret) {
                if (ret.eventType == 'confirm') {
                    var files = [];
                    var list = ret.list;
                    if (isIOS) {
                        transPath(function (paths) {
                            files = paths;
                            fn(files);
                        }, list);
                    } else {
                        (function iterator(i) {
                            if (list.length == i) {
                                fn(files);
                                return;
                            }
                            var selectImg = list[i];
                            // 获取图片的路径
                            var selectimgPath = selectImg.path;
                            //缩略图
                            files.push(selectimgPath);
                            i++;
                            iterator(i);
                        })(0);
                    }
                }
            }
        });
    }


}

function decodeImgToBase64(callback, img) {
    var trans = api.require('trans');
    trans.decodeImgToBase64({
        imgPath: img
    }, function (ret, err) {
        if (ret.status) {
            callback(ret.base64Str);
        } else {
            callback(false);
        }
    });
}


function transPath(fn, paths) {
    var files = [];

    (function iterator(i) {
        if (paths.length == i) {
            fn(files);
            return;
        }

        var ua = navigator.userAgent.toLowerCase();
        var UIAlbumBrowser;
        if (/liandashi/.test(ua)) {
            UIAlbumBrowser = api.require('UIAlbumBrowser');
        } else {
            UIAlbumBrowser = api.require('WXPhotoPicker');
        }

        UIAlbumBrowser.transPath({
            path: paths[i].path
        }, function (transObj) {
            if (!empty(transObj)) {
                var path = transObj.path;
                console.log('path:' + path);
                files.push(path);
                i++;
                iterator(i);
                /*decodeImgToBase64(function (base64Str) {
                    if (base64Str) {
                        base64Str = 'data:image/png;base64,' + base64Str;
                        var file = dataURLtoFile( base64Str , time() +'.jpg');
                        files.push(file);
                    }
                    i++;
                    iterator(i);
                },path);*/
            } else {
                i++;
                iterator(i);
            }
        });
    })(0);
}

function toast(text, duration) {
    var duration = duration || 1000;
    if (!isApp()) {
        $.toast.prototype.defaults.duration = duration;
        $.toast(text, 'text');
    } else {
        api.toast({
            msg: text,
            duration: duration,
            location: 'middle'
        });
    }
}

function isNullOrEmpty(str) {
    return (str == null || str == undefined) ? true : false;
}

/**
 * 打开图片浏览器
 * @param fn
 * @param images
 * @param activeIndex
 */
function photoViewer(fn, images, activeIndex) {
    var UIPhotoViewer = api.require('UIPhotoViewer');
    activeIndex = activeIndex || 0;
    UIPhotoViewer.open({
        activeIndex: activeIndex,
        images: images,
        placeholderImg: 'widget://res/img/apicloud.png',
        bgColor: '#000',
        zoomEnabled: true
    }, function (ret, err) {

        if (ret) {
            console.log(JSON.stringify(ret));
            var index = ret.index;
            fn(ret);
            if (ret.eventType == "show") {
                //打开浏览器并显示
            } else if (ret.eventType == "change") {
                UIPhotoViewer.getIndex(function (ret, err) {
                    if (ret) {
                        activeIndex = ret.index;
                    } else {
                        alert(JSON.stringify(err));
                    }
                });
                //用户切换图片
            } else if (ret.eventType == "click") {
                //用户单击图片浏览器
                closePhotoViewer();
            } else if (ret.eventType == "loadImgSuccess") {
                //网络图片下载成功的回调事件
            } else if (ret.eventType == "loadImgFail") {
                //网络图片下载失败的回调事件
            } else if (ret.eventType == "longPress") {
                //用户长按图片事件
                var buttons = ['保存到相册', '发送到微信', '分享到朋友圈', '识别二维码'];
                api.actionSheet({
                    title: '请选择',
                    cancelTitle: '取消',
                    buttons: buttons
                }, function (ret, err) {
                    var index = ret.buttonIndex;
                    var url = images[activeIndex];
                    //保存到相册
                    if (index == 1) {
                        if (api.systemType == 'android' || api.systemType == 'ios') {
                            savePhoto(images[activeIndex], 'img');
                            return;
                        }
                        return;
                        UIPhotoViewer.getImage({
                            index: activeIndex
                        }, function (ret) {
                            //长按保存图片ret.path
                            console.log('ret:' + ret.path);
                            api.saveMediaToAlbum({
                                path: ret.path,
                                groupName: api.appName
                            }, function (ret, err) {
                                if (ret && ret.status) {
                                    toast(_SAVE_SUCCESS_);
                                } else {
                                    alert(_SAVE_FAIL_);
                                }
                            });
                        });
                    }
                    //发送到微信
                    if (index == 2) {
                        var name = Math.random().toString(36).substr(2);
                        var savePath = api.cacheDir + '/photo/' + name + '.jpg';
                        api.showProgress({
                            title: '正在分享中...',
                            text: '',
                            modal: false
                        });
                        api.download({
                            url: url,
                            savePath: savePath,
                            report: false,
                            cache: true,
                            allowResume: false
                        }, function (ret, err) {
                            if (ret.state == 1) {
                                api.hideProgress();
                                wxShare(function (ret) {
                                }, 'image', {scene: 'session', thumb: '', contentUrl: savePath});
                            } else {

                            }
                        });
                        return;
                        UIPhotoViewer.getImage({
                            index: activeIndex
                        }, function (ret) {
                            //长按保存图片ret.path
                            api.hideProgress();
                            wxShare(function (ret) {
                            }, 'image', {scene: 'session', thumb: '', contentUrl: ret.path});
                        });
                    }

                    return;
                    //分享到朋友圈
                    if (index == 3) {
                        var name = Math.random().toString(36).substr(2);
                        var savePath = api.cacheDir + '/photo/' + name + '.jpg';
                        api.showProgress({
                            title: '正在分享中...',
                            text: '',
                            modal: false
                        });
                        api.download({
                            url: url,
                            savePath: savePath,
                            report: false,
                            cache: true,
                            allowResume: false
                        }, function (ret, err) {
                            if (ret.state == 1) {
                                api.hideProgress();
                                wxShare(function (ret) {
                                }, 'image', {scene: 'timeline', thumb: '', contentUrl: savePath});
                            } else {

                            }
                        });
                        return;
                        UIPhotoViewer.getImage({
                            index: activeIndex
                        }, function (ret) {
                            //长按保存图片ret.path
                            wxShare(function (ret) {
                            }, 'image', {scene: 'timeline', thumb: '', contentUrl: ret.path});
                        });
                    }

                    //识别二维码
                    if (index == 4) {

                        var name = Math.random().toString(36).substr(2);
                        var savePath = api.cacheDir + '/photo/' + name + '.jpg';
                        api.showProgress({
                            title: '正在识别中...',
                            text: '',
                            modal: false
                        });
                        api.download({
                            url: url,
                            savePath: savePath,
                            report: false,
                            cache: true,
                            allowResume: false
                        }, function (ret, err) {
                            if (ret.state == 1) {
                                var FNScanner = api.require('FNScanner');
                                FNScanner.decodeImg({
                                    path: savePath
                                }, function (ret, err) {
                                    api.hideProgress();
                                    if (ret.status) {
                                        //alert(JSON.stringify(ret));
                                        if (checkUrl(ret.content)) {
                                            openAppWin(ret.content);
                                        } else {
                                            alert(ret.content);
                                            var clipBoard = api.require('clipBoard');
                                            clipBoard.set({
                                                value: ret.content
                                            }, function (ret, err) {
                                                if (ret) {
                                                    alert('识别的内容已复制到粘贴板', 'text');
                                                } else {
                                                    alert('复制失败', 'text');
                                                }
                                            });
                                        }
                                    } else {
                                        alert('无法识别该图片中的二维码'); ////3：图片识别失败，请检查图片是否正确 -100：图片识别失败，编码格式不支持
                                    }
                                });
                            } else {

                            }
                        });
                        return;

                        UIPhotoViewer.getImage({
                            index: activeIndex
                        }, function (ret) {
                            //长按识别图片ret.path
                            var FNScanner = api.require('FNScanner');
                            FNScanner.decodeImg({
                                path: ret.path
                            }, function (ret, err) {
                                if (ret.status) {
                                    //alert(JSON.stringify(ret));
                                    if (checkUrl(ret.content)) {
                                        openAppWin(ret.content);
                                    } else {
                                        alert(ret.content);
                                        var clipBoard = api.require('clipBoard');
                                        clipBoard.set({
                                            value: ret.content
                                        }, function (ret, err) {
                                            if (ret) {
                                                alert('识别的内容已复制到粘贴板', 'text');
                                            } else {
                                                alert('复制失败', 'text');
                                            }
                                        });
                                    }
                                } else {
                                    alert('无法识别该图片中的二维码'); ////3：图片识别失败，请检查图片是否正确 -100：图片识别失败，编码格式不支持
                                }
                            });
                        });
                    }


                });
            }

        } else {
            console.log("打开photoViewer失败:" + JSON.stringify(err));
        }

    });
}

function sharePhoto(url) {
    var name = Math.random().toString(36).substr(2);
    var savePath = api.cacheDir + '/photo/' + name + '.jpg';
    api.download({
        url: url,
        savePath: savePath,
        report: false,
        cache: true,
        allowResume: false
    }, function (ret, err) {
        if (ret.state == 1) {
            var start = time();
            wxShare(function (ret) {
                var end = time();
                if (end - start < 6) {
                    $.toast('分享失败', 'text');
                } else {
                    $.toast('分享成功', 'text');
                }
                shareNotice(function () {
                }, type, channel);
            }, 'image', {scene: 'session', thumb: savePath, contentUrl: savePath});
        } else {

        }
    });
}

//type : img,video
function savePhoto(url, type, ext) {
    ext = ext || 'jpg';
    ext = '.' + ext;
    var name = Math.random().toString(36).substr(2);
    var savePath = api.cacheDir + '/photo/' + name + ext;
    if (type == 'video') {
        savePath = api.cacheDir + '/video/' + name + '.mp4';
    }
    api.showProgress({
        title: '保存中',
        text: '请稍后',
        modal: true
    });
    api.download({
        url: url,
        savePath: savePath,
        report: false,
        cache: true,
        allowResume: false
    }, function (ret, err) {
        if (ret.state == 1) {
            api.saveMediaToAlbum({
                path: savePath,
                groupName: api.appName
            }, function (ret, err) {
                api.hideProgress();
                if (ret && ret.status) {
                    toast('保存成功');
                    //APP中暂无此模块 等更新版本在放开
                    /*var fs = api.require('fs');
                    var res = fs.removeSync({
                        path: savePath
                    });
                    if (res.status) {
                        console.log('删除成功');
                    } else {
                        console.log('删除失败');
                    }*/
                } else {
                    alert(err.msg);
                }
            });
        } else {

        }
    });
}

/**
 * 关闭图片浏览器
 */
function closePhotoViewer() {
    var UIPhotoViewer = api.require('UIPhotoViewer');
    UIPhotoViewer.close();
}


/**
 * 设置当前显示图片
 * @param index 当前要显示的图片在图片路径数组中的索引
 */
function setIndexPhotoViewer(index) {
    var UIPhotoViewer = api.require('UIPhotoViewer');
    UIPhotoViewer.setIndex({
        index: index
    });
}


function getImagePhotoViewer(fn, index) {
    var UIPhotoViewer = api.require('UIPhotoViewer');
    UIPhotoViewer.getImage({
        index: index
    }, function (ret, err) {
        if (ret) {
            fn(ret);
        } else {
            console.log(JSON.stringify(err));
        }
    });
}


/**
 *
 * @param v1 最新版本
 * @param v2 当前APP版本
 * @returns {boolean} true 需要更新  false 不需要更新
 */
function appVersionCompare(v1, v2) {
    var version1pre = parseFloat(v1);
    var version2pre = parseFloat(v2);
    var version1next = v1.replace(version1pre + ".", "");
    var version2next = v2.replace(version2pre + ".", "");
    if (version1pre > version2pre) {
        return true;
    } else if (version1pre < version2pre) {
        return false;
    } else {
        if (version1next > version2next) {
            return true;
        } else {
            return false;
        }
    }
}

//分享类型 1朋友圈 2微信好友 3QQ空间 4QQ好友 5微博
//channel 1、收徒  2、新手任务  3、任务分享  4、提现分享  5、完成任务分享
function shareNotice(fn, type, channel) {
    _ajax(function (ret) {
        if (ret.code == 0) {

        }
    }, '/Api/User/share_notice', {type: type, channel});
}

function openLayer(content) {
    api.openFrame({
        name: 'activity_rule',
        url: 'widget://html/common/layer.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto',
            marginLeft: 0,
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0
        },
        pageParam: {
            content: content
        },
        bounces: false
    });
}


function openFrame(name, url, pageParam, options) {
    options = options || {};
    pageParam = pageParam || {};
    var uid = get('uid');
    if (url.indexOf('widget://') < 0 && url.indexOf('http') < 0) {
        url = api_url + url;
        url = addUrlParam(url, 'app_version', api.appVersion);
        url = addUrlParam(url, 'system_type', api.systemType);
        url = addUrlParam(url, 'system_version', api.systemVersion);
    }
    var params = {
        name: name,
        url: url,
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto',
            marginLeft: 0,
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0
        },
        useWKWebView: true,
        pageParam: pageParam,
        bounces: false
    };


    for (var p in options) {
        params[p] = options[p];
    }
    api.openFrame(params);
}

/**
 * 系统分享
 * @param fn
 * @param type  text //纯文本 image //图片 audio //音频文件 file //普通文件 url //网络链接
 */
function shareAction(fn, param, type) {
    var sharedModule = api.require('shareAction');
    var params = {};
    if (type == 'text') {
        params.text = param.text;
        params.type = type;
    } else if (type == 'url') {
        params.type = type;
        params.path = param.url;
        params.text = param.text;
    } else if (type == 'image') {
        params.images = [param.image];
    }
    sharedModule.share(params);
}

function device() {
    if (!isApp()) {
        return;
    }
    var download_id = get('download_id');
    var imei = get('imei');
    var oaid = get('oaid');
    var idfa = get('idfa');
    var ipv6 = get('ipv6');
    var data = {
        'device_id': api.deviceId,
        'app_version': api.appVersion,
        'system_type': api.systemType,
        'system_version': api.systemVersion,
        'api_appid': api.appId,
        'device_model': api.deviceModel,
        'device_name': api.deviceName,
        'connection_type': api.connectionType,
        'operator': api.operator,
        'ui_mode': api.uiMode,
        'screen_width': api.screenWidth,
        'screen_height': api.screenHeight,
        'jailbreak': api.jailbreak,
        'download_id': download_id,
        'imei': imei,
        'oaid': oaid,
        'idfa': idfa,
        'ipv6': ipv6
    };
    _ajax(function (ret) {

    }, '/Api/User/device', data);

}


/**
 * 检查版本更新
 */
function checkUpdateApp(isTips) {
    var currentVersion = api.appVersion;
    var appid = api.appId;
    _ajax(function (ret) {
        if (ret.code == 0) {
            var result = ret.data;
            var force = result.force;//是否强制更新  0 不强制  1 强制
            var downloadUrl = result.path;//下载地址
            var newVersion = result.version;//最新版本
            var appVersion = api.appVersion;//当前APP版本
            var versionDesc = result.desc;
            var isNeedUpdate = appVersionCompare(newVersion, appVersion);
            if (isNeedUpdate) {
                set('app_version_update', 1);
                api.openFrame({
                    name: 'app_update',
                    url: api_url + '/Shop/Index/app_update',
                    rect: {
                        x: 0,
                        y: 0,
                        w: 'auto',
                        h: 'auto'
                    },
                    pageParam: {
                        url: downloadUrl,
                        force: force,
                        desc: versionDesc,
                        newVersion: newVersion
                    },
                    bounces: false
                });
            } else {
                if (isTips) {
                    $.toast(_NO_UPDATE_, 'text');
                }
                set('app_version_update', 0);
            }
        } else {
            console.log("msg:" + ret.data + ",code:" + ret.code);
        }
    }, '/Api/Index/app_update', {app_version: currentVersion, appid: appid});
}


function openLoading() {
    var activity = api.require('UILoading');
    activity.keyFrame({
        rect: {
            w: 50,
            h: 50
        },
        styles: {
            bg: 'rgba(0,0,0,0)',
            corner: 5,
            interval: 100,
            frame: {
                w: 50,
                h: 50
            }
        },
        content: [{
            "frame": "widget://image/loading/box_anim_00.png"
        }, {
            "frame": "widget://image/loading/box_anim_01.png"
        }, {
            "frame": "widget://image/loading/box_anim_02.png"
        }, {
            "frame": "widget://image/loading/box_anim_03.png"
        }, {
            "frame": "widget://image/loading/box_anim_04.png"
        }, {
            "frame": "widget://image/loading/box_anim_05.png"
        }, {
            "frame": "widget://image/loading/box_anim_06.png"
        }, {
            "frame": "widget://image/loading/box_anim_07.png"
        }, {
            "frame": "widget://image/loading/box_anim_08.png"
        }, {
            "frame": "widget://image/loading/box_anim_09.png"
        }, {
            "frame": "widget://image/loading/box_anim_10.png"
        }, {
            "frame": "widget://image/loading/box_anim_11.png"
        }, {
            "frame": "widget://image/loading/box_anim_12.png"
        }, {
            "frame": "widget://image/loading/box_anim_13.png"
        }, {
            "frame": "widget://image/loading/box_anim_14.png"
        }, {
            "frame": "widget://image/loading/box_anim_15.png"
        }, {
            "frame": "widget://image/loading/box_anim_16.png"
        }
        ]
    });
}


function timestampFormat(timestamp) {
    function zeroize(num) {
        return (String(num).length == 1 ? '0' : '') + num;
    }

    var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

    var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
    var tmDate = new Date(timestamp * 1000);  // 参数时间戳转换成的日期对象

    var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
    var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

    if (timestampDiff < 60) { // 一分钟以内
        return _NOW_;
    } else if (timestampDiff < 3600) { // 一小时前之内
        return Math.floor(timestampDiff / 60) + _MINUTES_AGO_;
    } else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
        return _TODAY_ + zeroize(H) + ':' + zeroize(i);
    } else {
        var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
        if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
            return _YESTERDAY_ + zeroize(H) + ':' + zeroize(i);
        } else if (curDate.getFullYear() == Y) {
            return zeroize(m) + _MONTH_ + zeroize(d) + _DAY_ + zeroize(H) + ':' + zeroize(i);
        } else {
            return Y + _YEAR_ + zeroize(m) + _MONTH_ + zeroize(d) + _DAY_ + zeroize(H) + ':' + zeroize(i);
        }
    }
}

function closeLoading() {
    var activity = api.require('UILoading');
    activity.closeKeyFrame();
}

//检查是否为网址
function checkUrl(url) {
    if (url != "") {
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if (!reg.test(url)) {
            return false;
        }
        return true;
    }
    return false;
}

//通过内置浏览器打开网址
function openAppWin(url) {
    if (!isApp()) {
        window.open(url, "_blank");
    }
    if (api.systemType == 'ios') {
        api.openApp({
            iosUrl: url
        });
    } else {
        showBrowser(url);
//    	api.openApp({
//            androidPkg : 'android.intent.action.VIEW',
//            mimeType : 'text/html',
//            uri : url
//	    }, function(ret, err) {
//
//	    });
    }
}


//检测推送通知是否开启
function judgeNotification(requestPermission, callback) {
    try {
        var permission = 'notification';
        var resultList = api.hasPermission({
            list: [permission]
        });
        if (resultList[0].granted) {
            // 已授权，可以继续下一步操作
            callback(true)
        } else {
            if (requestPermission) {
                api.requestPermission({
                    list: [permission],
                }, function (res) {
                    if (res.list[0].granted) {
                        // 已授权，可以继续下一步操作
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
            } else {
                callback(false);
            }
        }
        return;
        if (api.systemType == 'ios') {
            var setJumpNew = api.require('setJumpNew');
            setJumpNew.isUserNotificationEnable(function (ret) {
                if (!ret.state) {
                    confirmDialog(function () {
                        setJumpNew.open();
                    }, '温馨提示', '更快更及时收到消息，推荐您开启系统通知', '取消', '去开启');
                }
            });
        } else {
            var checknotification = api.require('checknotification');
            checknotification.check({}, function (ret) {
                if (ret.code != 0) {
                    confirmDialog(function () {
                        checknotification.check({}, function (ret) {
                            if (ret.code == 1) {
                                checknotification.jumpSetting()
                            }
                        });
                    }, '温馨提示', '更快更及时收到消息，推荐您开启系统通知', '取消', '去开启');
                }
            });
        }
    } catch (e) {
        console.log(e);
    }
}


function confirmDialog(fn, title, msg, lbtn, rbtn) {
    title = title || '温馨提示';
    lbtn = lbtn || '取消';
    rbtn = rbtn || '确认';
    var bg_color = '#1cdaff';
    var ua = navigator.userAgent.toLowerCase();
    if (/lianxiaozhu/.test(ua)) {
        bg_color = '#597ffe';
    }

    if (/aicreate/.test(ua)) {
        bg_color = '#2aae67';
    }

    if (/aimaster/.test(ua)) {
        bg_color = '#10a37f';
    }

    if (isApp()) {
        var dialogBox = api.require('dialogBox');
        dialogBox.alert({
            texts: {
                title: title,
                content: msg,
                leftBtnTitle: lbtn,
                rightBtnTitle: rbtn
            },
            styles: {
                bg: '#fff',
                w: 300,
                corner: 15,
                title: {
                    marginT: 10,
                    icon: '',
                    iconSize: 40,
                    titleSize: 16,
                    titleColor: '#000'
                },
                content: {
                    marginT: 15,
                    marginB: 20,
                    color: '#000',
                    size: 14
                },
                left: {
                    marginB: 20,
                    marginL: 20,
                    w: 120,
                    h: 35,
                    corner: 5,
                    bg: '#F7F7F7',
                    color: '#999999',
                    size: 14
                },
                right: {
                    marginB: 20,
                    marginL: 20,
                    w: 120,
                    h: 35,
                    corner: 5,
                    color: '#ffffff',
                    bg: bg_color,
                    size: 14
                }
            }
        }, function (ret) {
            if (ret.eventType == 'left') {
                dialogBox.close({
                    dialogName: 'alert'
                });
            } else {
                dialogBox.close({
                    dialogName: 'alert'
                });
                fn();
            }
        });
    } else {
        $.confirm(msg, title, function () {
            fn();
        });

    }
}


//用内置浏览器打开网页
function showBrowser(url) {
    goto(url);
    return;
    var webBrowser = api.require('webBrowser');
    webBrowser.open({
        url: url,
        progress: {
            color: '#4DCB73'
        },
        titleBar: {
            visible: true,
            bg: '#fff',
            textColor: '#000'
        },
        scaleEnabled: true
    }, function (ret) {
        console.log(JSON.stringify(ret));
    });
}

var get_msg_flag = false;

function getNotRead() {
    if (!isLogin()) {
        return false;
    }
    if (get_msg_flag) {
        return false;
    }
    var get_not_read_time = get('get_not_read_time');
    var timestamp = Date.parse(new Date()) / 1000;
    if (timestamp - get_not_read_time < 5) {
        return false;
    }
    set('get_not_read_time', timestamp);
    get_msg_flag = true;
    _ajax(function (ret) {
        get_msg_flag = false;
        if (ret.code != 0) {
            return;
        }
        var hello_not_read = ret.data.hello_not_read;    //打招呼未读
        var msg_not_read = ret.data.msg_not_read;        //未读聊天消息
        var system_not_read = ret.data.system_not_read;  //未读系统消息
        var not_read_count = ret.data.not_read_count;    //所有未读消息总数
        var new_reply = ret.data.new_reply;				 //新的回应
        //var last_order_id = ret.data.last_order_id;
        if (isApp()) {
            /*if( last_order_id ){
                setTimeout( function(){
                    _show_inspire();
                }, 200);
            }*/
            var not_read_count_local = get('not_read_count');
            if (not_read_count != not_read_count_local) {
                api.sendEvent({
                    name: 'not_read_count_event',
                    extra: {count: not_read_count, type: 0}
                });
            }
            _setBadge(not_read_count);
        }
        var task_done_list = ret.data.task_done_list;
        task_done_list = json2str(task_done_list);
        set('show_task_num', 0);
        set('task_done_list', task_done_list);
        set('not_read_count', not_read_count);
    }, '/Api/Index/not_read_count', {});
}

//针对ios系统的清楚角标提醒数字，只要执行了就设置为空
function _setBadge(num) {
    if (!isApp() || num == null) {
        return;
    }
    /* var ajpush = api.require('ajpush');
   ajpush.setBadge({
       badge : num
   }); */
    api.setAppIconBadge({
        badge: num
    });
    set('not_read_count', num);
    var appVersion = api.appVersion;
    appVersion = appVersion.substr(0, 1);
    var index = 4;
    var appName = api.appName;
    if (appVersion == 1 && appName == '恋大师') {
        index = 3;
    }
    api.setTabBarItemAttr({
        index: index,
        badge: {
            radius: 8,
            x: 6,
            text: num
        }
    });
}

function _showTips(type, title, desc) {
    api.openFrame({
        name: 'tips',
        url: api_url + '/Shop/Index/tips',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        pageParam: {
            type: type,
            title: title,
            desc: desc
        },
        bounces: false
    });
}

function _showRecommend() {
    if (!isApp()) {
        return;
    }
    api.showProgress({
        title: '',
        text: '请稍后...',
        modal: false
    });
    api.openFrame({
        name: '任务推荐',
        url: api_url + '/Shop/Index/recommend_task',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        pageParam: {},
        bounces: false
    });
    setTimeout(function () {
        api.hideProgress();
    }, 500);
}


function checkReadWrite(callback) {
    var resultList = api.hasPermission({
        list: ['storage']
    });
    granted = resultList[0].granted;
    if (!granted) {
        _showTips(1, _STORAGE_PERMISSIONS_TIPS_, "请先开启应用的读写和存储权限<br><br>说明：获取该权限用于程序升级和保存头像和表情");
        return;
    }
    callback();
}


function load_done_list() {
    if (!isLogin()) {
        return
    }
    _ajax(function (ret) {
        if (ret.code == 0) {
            if (!empty(ret.data)) {
                var done_task_list = "";
                var doing_task_list = "";
                var pending_task_list = "";

                var done_list = ret.data.done_list;
                var doing_list = ret.data.doing_list;
                var pending_list = ret.data.pending_list;
                if (!empty(done_list)) {
                    for (var index in done_list) {
                        var item = done_list[index];
                        done_task_list = done_task_list + item + ",";
                    }
                }
                if (!empty(doing_list)) {
                    for (var index in doing_list) {
                        var item = doing_list[index];
                        doing_task_list = doing_task_list + item + ",";
                    }
                }
                if (!empty(pending_list)) {
                    for (var index in pending_list) {
                        var item = pending_list[index];
                        pending_task_list = pending_task_list + item + ",";
                    }
                }
                console.info(done_task_list);
                set("done_task_list", done_task_list);
                set("doing_task_list", doing_task_list);
                set("pending_task_list", pending_task_list);

                var accept_pending_count = ret.data.accept_pending_count;
                var review_pending_count = ret.data.review_pending_count;
                if (review_pending_count > 0) {
                    $('#review_pending').show();
                    $('#review_pending_count').text(review_pending_count);
                } else {
                    $('#review_pending').hide();
                }
                if (accept_pending_count > 0) {
                    $('#accept_pending').show();
                    $('#accept_pending_count').text(accept_pending_count);
                } else {
                    $('#accept_pending').hide();
                }
            }
        }
    }, '/Api/Task/done_task_list', {});
}


function _show_reg_guide() {
    var show_reg_guide = get('show_reg_guide');
    if (show_reg_guide > 0) {
        return;
    }
    _ajax(function (ret) {
        if (ret.code == 0) {
            api.openFrame({
                name: 'guide',
                url: api_url + '/Shop/Index/reg_guide',
                rect: {
                    x: 0,
                    y: 0,
                    w: 'auto',
                    h: 'auto'
                },
                bounces: false
            });
        }
    }, '/Api/Index/has_newer_coupon', {});
}

function _show_coupon() {
    var member = get('member');
    if (member > 0) {
        return;
    }
    _ajax(function (ret) {
        if (ret.code == 1) {
            openFrame('coupon_list', '/Shop/Index/membership_frame', {price: ret.data});
        }
        if (ret.code == 0) {
            if (ret.data == null) {
                return;
            }
            if (ret.data.length == 0) {
                return;
            }
            openFrame('coupon_list', '/Shop/Index/coupon_frame', {list: ret.data});
        }
    }, '/Api/Order/coupon_list', {});
}

function _show_hongbao() {
    _ajax(function (ret) {
        if (ret.code == 0) {
            //新人任务红包
            api.openFrame({
                name: 'newer_hongbao1',
                url: api_url + '/Shop/Help/newer_t',
                rect: {
                    x: 0,
                    y: 0,
                    w: 'auto',
                    h: 'auto'
                },
                animation: {
                    type: "flip",
                    subType: "from_bottom",
                    duration: 300
                },
                bounces: false
            });
        }
    }, '/Api/Index/newer_redpack', {});

}

function _show_inspire() {
    api.openFrame({
        name: '_show_inspire',
        url: api_url + '/Shop/Index/inspire_guide',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        animation: {
            type: "ripple",
            subType: "from_bottom",
            duration: 300
        },
        bounces: false
    });
}


function _getImei(callback) {
    if (!isApp()) {
        return;
    }
    if (api.systemType == 'ios') {
        return;
    }
    var imei = get('imei');
    var oaid = get('oaid');
    if (!empty(imei) || !empty(oaid)) {
        return;
    }
    var resultList = api.hasPermission({
        list: ['phone-r']
    });
    granted = resultList[0].granted;
    if (!granted) {
        var time = new Date().getTime() / 1000;
        //没有登录，判断十分钟前是否已经弹过了
        var time2 = get('request_phone_ermission');
        if (time2 == -1) {
            //用户不同意
            return;
        }
        if (time2 > 0 && time - time2 < 24 * 3600) {
            //alert( "24小时内不允许重复获取" );
            return;
        }
        api.alert({
            title: '开启获取设备信息权限',
            msg: '我们将采用唯一设备识别码（如IMEI/OAID/IDFA/OPENUDID/GUID、SIM卡IMSI信息）对用户进行唯一标识，以便进行用户新增数据统计、改善优化您的服务体验，并保障您的账户安全。',
        }, function (ret, err) {
            set('request_phone_ermission', time);
            api.requestPermission({
                list: ['phone-r'],
                code: 1
            }, function (ret, err) {
                if (ret.list[0].granted) {
                    // 已授权，可以继续下一步操作
                    //alert( ret.list[0].granted );
                    var simInfoImp = api.require('simInfoImp');
                    if (simInfoImp != null) {
                        simInfoImp.getDeviceId(function (ret) {
                            if (!empty(ret)) {
                                imei = ret.deviceId;
                                if (!empty(imei)) {
                                    set('imei', imei);
                                    activate();
                                }
                            }
                        });
                    }
                    //获取oaid
                    var deviceModel = api.deviceModel;
                    var systemVersion = api.systemVersion;
                    var i = systemVersion.indexOf('.');
                    var android_version = systemVersion;
                    if (i > 0) {
                        android_version = systemVersion.substring(0, i);
                    }
                    if (android_version >= 10) {
                        var readId = api.require('readId');
                        if (readId != null) {
                            readId.readOaId(function (ret, err) {
                                console.log(JSON.stringify(ret));
                                if (ret.status && !empty(ret.data)) {
                                    oaid = ret.data;
                                    set('oaid', oaid);
                                    activate();
                                }
                            });
                        }
                    }
                } else {
                    //获取失败，或者是点了禁止
                    set('request_phone_ermission', -1);
                }
            });
        });

    }
}

//绘制矩形圆角
function drawRoundRect(ctx, r, x, y, w, h, img) {
    ctx.save();
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, x, y, w, h);
    ctx.restore(); // 返回上一状态
}

//type 1 微信朋友圈  2微信好友
function share_base64(base64Str, type, channel) {
    var trans = api.require('trans');
    var imgPath = api.cacheDir + "/qrcode/";
    var imgName = 'qrcode.png';
    trans.saveImage({
        base64Str: base64Str,
        imgPath: imgPath,
        imgName: imgName
    }, function (ret, err) {
        if (ret.status) {
            var start = time();
            var qrcode = imgPath + imgName;
            var scene = 'timeline';
            if (type == 2) {
                scene = 'session';
            }
            wxShare(function (ret) {
                var end = time();
                if (end - start < 6) {
                    $.toast('分享失败', 'text');
                } else {
                    $.toast('分享成功', 'text');
                }
                shareNotice(function () {
                }, type, channel);
            }, 'image', {scene: scene, thumb: qrcode, contentUrl: qrcode});
        }
    });
}

//type 1微信朋友圈 2微信好友/群
function draw(data, type, channel) {
    var list = data.list;
    var length = list.length;
    var links = data.link;
    var i = rand(0, length - 1);
    var config = list[i];
    var location = config.location;
    var headimgurl_location = config.headimgurl_location;
    var nickname_location = config.nickname_location;
    var desc_location = config.desc_location;
    var headimgurl = CDN_URL + data.headimgurl;
    var nickname = data.nickname;
    var description = config.description;
    var cover = CDN_URL + config.file_path;

    var html = "<canvas id='canvas'  style='display:none'>Your browser does not support the canvas element.</canvas>";
    $('body').append(html);
    var canvas = document.getElementById("canvas"); //创建画布实例
    var context = canvas.getContext("2d"); //获得2D上下文
    canvas.width = 468;
    canvas.height = 832;
    context.fillStyle = 'white';  //先画底板
    context.fillRect(0, 0, 468, 832);
    //海报背景图
    var img = new Image();
    img.crossOrigin = "anonymous";
    img.src = cover;
    img.onload = function () {
        context.drawImage(img, 0, 0, 468, 832);
        //二维码
        var qrcodeImage = new Image();
        qrcodeImage.crossOrigin = 'Anonymous';
        var qrcodeCanvas = qrcanvas.qrcanvas({data: links, size: 300, foreground: 'black', background: 'white'});
        qrcodeImage.src = qrcodeCanvas.toDataURL("image/png");
        qrcodeImage.onerror = function () {
            $.toast("获取海报失败", 'text');
        };
        qrcodeImage.onload = function () {
            console.info(1);
            context.drawImage(qrcodeImage, location.x, location.y, location.w, location.h);
            context.font = "16px bold 黑体";
            // 设置颜色
            context.fillStyle = "#000";
            // 设置垂直对齐方式
            context.textBaseline = "middle";
            if (!empty(nickname_location)) {
                //设置昵称
                context.fillText(nickname, nickname_location.x, nickname_location.y);
            }
            if (!empty(desc_location) && !empty(description)) {
                //设置描述信息
                context.fillText(description, desc_location.x, desc_location.y);
            }

            if (!empty(headimgurl_location)) {
                //设置头像
                //Image2.src = CDN_URL+'/static/logo.png';
                var Image2 = new Image();
                Image2.crossOrigin = 'Anonymous';
                Image2.src = headimgurl;
                Image2.onload = function () {
                    //context.drawImage( Image2 , headimgurl_location.x , headimgurl_location.y , headimgurl_location.w , headimgurl_location.h );
                    drawRoundRect(context, 6, headimgurl_location.x, headimgurl_location.y, headimgurl_location.w, headimgurl_location.h, Image2);
                    var base64Str = canvas.toDataURL("image/jpeg");
                    base64Str = base64Str.substr(22);
                    share_base64(base64Str, type, channel);
                }
                Image2.onerror = function () {
                    $.toast("获取头像失败", 'text');
                    var base64Str = canvas.toDataURL("image/jpeg");
                    base64Str = base64Str.substr(22);
                    share_base64(base64Str, type, channel);
                }
            } else {
                var base64Str = canvas.toDataURL("image/jpeg");
                base64Str = base64Str.substr(22);
                share_base64(base64Str, type, channel);
            }
        }
    }
}

//生成二维码海报并调起分享微信朋友圈 type 1微信朋友圈 2微信好友/群
//channel 1收徒页面 2新手任务 3任务分享 4提现分享  5完成任务分享  6、红包
function gen_pic_share(type, channel) {
    if (!isApp()) {
        $.toast("请在APP中分享", 'text');
        //return;
    }
    $.showLoading("生成海报中...");
    _ajax(function (ret) {
        if (ret.code != 0) {
            $.toast(ret.data, 'text');
        }
        draw(ret.data, type, channel);
        $.hideLoading();
    }, '/Api/User/poster', {});
}

//生成分享链接并调起分享微信朋友圈 type 1微信朋友圈 2微信好友/群
function gen_url_share(type, channel) {
    if (!isApp()) {
        $.toast("请在APP中分享", 'text');
        return;
    }
    if (type < 1) {
        alert('type参数错误');
        return;
    }
    $.showLoading("加载中...");
    _ajax(function (ret) {
        if (ret.code != 0) {
            $.toast(ret.data, 'text');
        }
        var title = ret.data.share_title;
        var content = ret.data.share_desc;
        var link = ret.data.link;
        var logo = ret.data.app_logo;
        api.download({
            url: logo,
            savePath: 'fs://logo.png',
            report: true,
            cache: true,
            allowResume: true
        }, function (ret, err) {
            if (ret.state == 1) {
                $.hideLoading();
                var thumb = ret.savePath;

                if (type == 1) {
                    wxShare(function (ret) {
                        shareNotice(function () {
                        }, type, channel);
                    }, 'webpage', {
                        scene: 'timeline',
                        title: title,
                        description: content,
                        thumb: thumb,
                        contentUrl: link
                    });
                } else if (type == 2) {
                    wxShare(function (ret) {
                        shareNotice(function () {
                        }, type, channel);
                    }, 'webpage', {
                        scene: 'session',
                        title: title,
                        description: content,
                        thumb: thumb,
                        contentUrl: link
                    });
                } else if (type == 3) {
                    var sharedModule = api.require('shareAction');
                    sharedModule.shareUrl({
                        text: content,
                        thumbnail: thumb,
                        url: link
                    });
                }
            }

        });

        $.hideLoading();
    }, '/Api/User/share_info', {});
}

//关注公众号提示
function is_follow() {
    if (!isApp()) {
        return;
    }
    var now = time();
    var today = date('Y-m-d', now);
    var key = 'check_follow_mp' + today;
    var flag = get(key);
    if (flag) {
        return;
    }
    _ajax(function (ret) {
        set(key, flag + 1);
        if (ret.code == 1) {
            //每天提示1次
            api.confirm({
                title: '温馨提示',
                msg: '您还未关注公众号，关注公众号后可在微信中接收与任务相关的消息提醒。',
                buttons: ['确定', '取消']
            }, function (ret, err) {
                var index = ret.buttonIndex;
                if (index == 1) {
                    goto('/Shop/Index/follow', '关注公众号', false);
                }
            });
        }
    }, '/Api/User/is_follow_mp', {});
}


/**
 * 手动关闭授权页面
 * flag 为传参数
 * @param flag
 * 安卓端参数随便传，无返回值
 */
function dismissLoginVC(flag) {
    if (flag == null && api.systemType == 'ios') {
        //api.alert({title: '手动关闭授权页面失败', msg: 'flag参数不能为空'});
        return;
    }
    var svModule = api.require('mobSecVerifyPlus');
    var params = {'flag': flag};
    svModule.manualDismissLoginVC(params, function (ret, err) {
        console.log('关闭授权页面成功');
        //api.alert({title: '手动关闭授权页面失败', msg: ret});

    });
}


//绑定微信
function bind_wechat() {
    if (!isApp()) {
        setTimeout(function () {
            $('#openid').prop('checked', false);
        }, 1000);
        $.toast('请在app上使用手机号登录后再来绑定', 'text');
        return;
    }
    var flag = $('#openid').prop('checked');

    //开启微信绑定
    var wx = api.require('wxPlus');
    wx.isInstalled(function (ret, err) {
        if (!ret.installed) {
            alert('您尚未安装微信');
            return;
        }
    });
    //绑定微信
    wx.auth({
        apiKey: ''
    }, function (ret, err) {
        if (ret.status) {
            var code = ret.code;
            _ajax(function (ret) {
                $.toast(ret.data, 'text');
                if (ret.code < 0) {
                    api.sendEvent({
                        name: 'bind_wechat_fail',
                    });
                    //绑定失败
                    setTimeout(function () {
                        $('#openid').prop('checked', false);
                    }, 1000);
                } else {
                    //绑定成功
                    api.sendEvent({
                        name: 'bind_wechat_success',
                    });
                }

            }, '/Api/User/bind_wechat', {code: code});
        } else {
            //授权失败
            $.toast(ret.data, 'text');
            api.sendEvent({
                name: 'bind_wechat_fail',
            });
            setTimeout(function () {
                $('#openid').prop('checked', false);
            }, 1000);
        }
    });
}


function unbind_wechat() {
    //取消微信绑定
    $.confirm("您确定要解绑微信?", "解绑后您的账号将无法使用微信登陆哦！", function () {
        _ajax(function (ret) {
            $.toast(ret.data, 'text');
            if (ret.code <= 0) {
                api.sendEvent({
                    name: 'unbind_wechat_success',
                });
                setTimeout(function () {
                    $('#openid').prop('check', true);
                }, 1000);
            }
        }, '/Api/User/unbind_wechat', {});
    }, function () {
        //取消操作
        $('#openid').prop('check', true);
    });
}

function get_ipv6() {
    if (!isApp()) {
        return;
    }
    var is_act = get('is_act');
    if (isLogin()) {
        return;
    }
    $.ajax({
        url: "https://v6.ipv6-test.com/json/widgetdata.php",
        type: "GET",
        dataType: "jsonp", //指定服务器返回的数据类型
        success: function (data) {
            var proto = data.proto;
            if (proto == 'ipv6') {
                var ip = data.address;
                set('ipv6', ip);
            }
        }, error: function () {
            set('ipv6', '');
        }
    });
}

//激活统计
function activate() {
    //激活统计
    if (!isApp()) {
        return;
    }
    var is_act = get('is_act');
    if (empty(is_act)) {
        if (isLogin()) {
            set('is_act', 1);
            return;
        }
        var ipv6 = get('ipv6');
        var download_id = get('download_id');
        var oaid = get('oaid');
        var imei = get('imei');
        var idfa = get('idfa');
        _ajax(function (ret) {
            if (ret.code == 0) {
                set('download_id', ret.data);
                set('is_act', 1);
            }
        }, '/Api/Index/activate', {ipv6: ipv6, idfa: idfa, oaid: oaid, imei: imei, download_id: download_id});
    }
}


function getParams(param) {
    if (typeof urlStr == "undefined") {
        var url = decodeURI(location.search); //获取url中"?"符后的字符串
    } else {
        var url = "?" + urlStr.split("?")[1];
    }
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}


function _alipay(callback, orderinfo) {
    var aliPay = api.require('aliPayPlus');
    aliPay.payOrder({
        orderInfo: orderinfo
    }, function (ret, err) {
        if (ret.code == 9000) {
            callback(true, 'success');
        } else if (ret.code == 4000) {
            callback(false, '系统异常');
        } else if (ret.code == 4001) {
            callback(false, '数据格式不正确');
        } else if (ret.code == 4003) {
            callback(false, '您绑定的支付宝账户被冻结或不允许支付');
        } else if (ret.code == 4004) {
            callback(false, '该用户已解除绑定');
        } else if (ret.code == 4005) {
            callback(false, '绑定失败或没有绑定');
        } else if (ret.code == 4006) {
            callback(false, '订单支付失败');
        } else if (ret.code == 4010) {
            callback(false, '重新绑定账户');
        } else if (ret.code == 6000) {
            callback(false, '支付服务正在进行升级操作');
        } else {
            callback(false, '取消支付');
        }
    });
}


function _wxpay(callback, orderinfo) {
    var wxPayPlus = api.require('wxPayPlus');
    wxPayPlus.payOrder({
        apiKey: orderinfo.appid,
        orderId: orderinfo.prepayid,
        mchId: orderinfo.partnerid,
        nonceStr: orderinfo.noncestr,
        timeStamp: orderinfo.timestamp,
        package: orderinfo.package,
        sign: orderinfo.sign
    }, function (ret, err) {
        if (ret.status) {
            //支付成功
            callback(true, 'success');
        } else {
            if (err.code == -2) {
                callback(err.code, '取消支付');
            }
            if (err.code == -1) {
                callback(err.code, '未知错误');
            }
            if (err.code == 1) {
                callback(err.code, 'apiKey值非法');
            }
        }
    });
}

//判断订单是否支付成功
function is_pay_success(order_id, callback) {
    _ajax(function (ret) {
        if (ret.code == 0) {
            callback(true);
        } else {
            callback(false);
        }
    }, '/Api/Order/pay_status', {order_id: order_id});
}

//发送支付成功事件
function send_pay_success_event(order_id) {
    if (!isApp) {
        return;
    }
    api.sendEvent({
        name: 'pay_success_event',
        extra: {order_id: order_id}
    });
}

//进行支付处理 pay_type 0 appzfb  1h5zfb
function do_pay(pay_type, order_id, callback) {
    if (empty(pay_type)) {
        alert('请选择支付方式');
        return;
    }
    if (empty(order_id)) {
        alert('缺少订单id');
        return;
    }
    if (empty(callback)) {
        alert('缺少callback');
        return;
    }
    var url = api_url + '/Shop/Pay/index?order_id=' + order_id;
    if (pay_type == 1111) {
        _ajax(function (ret) {
            if (ret.code == 0) {
                alert(ret.data.deep_link);
                var deep_link = ret.data.deep_link;
                window.location = deep_link;
            } else {
                alert(ret.data);
            }
        }, '/Shop/Pay/index', {order_id: order_id, pay_type: pay_type});
        return;
    }


    if (pay_type == 1 || pay_type == 2) {
        if (isApp()) {
            //网页的
            //goto(','在线支付');
            $.showLoading("发起支付..");

            var x = 0;
            var y = 0;
            var w = '10px';
            var h = '10px';
            if (api.debug) {
                w = '400px';
                h = '500px';
            }

            api.openFrame({
                name: 'wxp',
                url: url,
                headers: {
                    referer: url,
                },
                rect: {
                    x: x,
                    y: y,
                    w: w,
                    h: h,
                    marginLeft: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    marginRight: 0
                },
                reload: true,
                pageParam: {
                    //content:content
                },
                bounces: false
            });

            setTimeout(function () {
                $.hideLoading();
            }, 3000);
            setTimeout(function () {
                api.closeFrame({
                    name: 'wxp'
                });
            }, 30000);
        } else {
            //网页的
            goto('/Shop/Pay/index?order_id=' + order_id, '在线支付');
        }
        return;
    }

    //老方法
    $.showLoading("发起支付");
    _ajax(function (ret) {
        if (isApp()) {
            api.hideProgress();
        }
        $.hideLoading();
        if (ret.code == 0) {
            var pay_data = ret.data;
            if (pay_type == 0) {
                //zfb-app
                _alipay(function (flag, msg) {
                    if (flag) {
                        setTimeout(function () {
                            send_pay_success_event(order_id);
                        }, 100);
                        callback(true);
                    } else {
                        callback(msg);
                    }
                }, pay_data);
            } else if (pay_type == 3) {
                //wx-app
                _wxpay(function (flag, msg) {
                    if (flag == true) {
                        setTimeout(function () {
                            send_pay_success_event(order_id);
                        }, 100);
                        callback(true);
                    } else {
                        //$.toast( msg );
                        callback(msg);
                    }
                }, pay_data);
            } else if (pay_type == 4) {
                webBrowser(pay_data);
            }
        } else if (ret.code == 1) {
            send_pay_success_event(order_id);
            callback(true);
        } else {
            //alert( ret.data );
            callback(ret.data);
        }
    }, '/Shop/Pay/index', {order_id: order_id});

}


function getLang() {
    var lang = get('user_lang');
    if (empty(lang)) {
        lang = (navigator.language || navigator.browserLanguage).toLowerCase();
    }

    return 'en-us';
    // return lang;
}


function copy(str) {

    var clipBoard = api.require('clipBoard');
    clipBoard.set({
        value: str
    }, function (ret, err) {
        if (ret) {
            //$.toast( '复制成功' ,'text');
            var search_count = get('search_count');
            var member = get('member');
            if (member > 20) {
                $.toast('已复制到粘贴板', 'text');
                return;
            }
            var free_search_count = get('free_search_count');
            set('copy_text', str);
            member = 0;
            search_count = 6;
            free_search_count = 7;
            openFrame('paste', 'widget://html/common/share_copy.html', {
                keyword: str,
                member: member,
                free_search_count: free_search_count,
                search_count: search_count
            });
        } else {
            $.toast('复制失败', 'text');
        }
    });
}

function listener_clipboard() {
    var clipBoard = api.require('clipBoard');
    clipBoard.setListener(function (ret, err) {
        if (ret) {
            alert(JSON.stringify(ret));
        } else {
            alert(JSON.stringify(err));
        }
    });
}

function get_clipboard() {
    if (!isLogin()) {
        return;
    }
    var ua = navigator.userAgent.toLowerCase();
    if (/aihelper/.test(ua) || /aimaster/.test(ua) || /aicreate/.test(ua)) {
        return;
    }
    var clipBoard = api.require('clipBoard');
    clipBoard.get(function (ret, err) {
        if (ret) {
            var type = ret.type;
            var value = ret.value;
            value = trim(value);
            if (value == '' || empty(value)) {
                return;
            }
            var search_count = get('search_count');
            var member = get('member');
            var free_search_count = get('free_search_count');
            //判断本次和上一次是否一样
            var last_copy_text = get('copy_text');
            if (value == last_copy_text) {
                return;
            }
            if (!empty(value)) {
                //openFrame('paste','/Shop/Index/paste',{keyword:value});
                var data = {
                    keyword: value,
                    member: member,
                    free_search_count: free_search_count,
                    search_count: search_count
                };
                openFrame('copy', 'widget://html/common/copy.html', data, {bounces: true, fixedOn: 'ui_layout'});
            }
        } else {
            console.log(JSON.stringify(err));
        }
    });
}


function setSearchHistory(keyword) {
    var record = get('search_history_record');
    if (empty(record)) {
        record = [];
        record.push(keyword);
    } else {
        record = JSON.parse(record);
        if (record.length >= 8) {//最多只能存8个
            record.splice(0, 1);//先删除第一个
        }

        if (!in_array(keyword, record)) { // 判断数组中存不存在
            record.push(keyword);
        }
    }
    set('search_history_record', JSON.stringify(record));
}

function getSearchHistory() {
    var record = get('search_history_record');
    if (empty(record)) {
        record = [];
    } else {
        record = JSON.parse(record);
        record.reverse();
    }
    return record;
}

function getUserInfo(callback) {
    _ajax(function (ret) {
        if (ret.code == 0) {
            var user = ret.data;
            set('uid', user.id);
            set('gender', user.gender);
            set('member', user.member);
            if (callback != null) {
                callback(user);
            }
        }
    }, '/Api/User/info', {});
}

function _show_activity_pop() {
    var member = get('member');
    if (member > 0) {
        return;
    }
    if (api.systemType == 'android') {
        return;
    }
    $('.coupon_img').show();
    api.openFrame({
        name: 'guide',
        url: api_url + '/Shop/Index/activity_pop',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        bounces: false
    });
}


function openVipTips() {
    openFrame('viptips', '/Shop/User/viptips', {}, {
        animation: {
            type: "fade",                //动画类型（详见动画类型常量）
            subType: "from_bottom",       //动画子类型（详见动画子类型常量）
            duration: 200
        }
    });
}

function toast(text, duration, global) {
    var duration = duration || 1000;
    var global = global || false;
    if (!isApp()) {
        $.toast.prototype.defaults.duration = duration;
        $.toast(text, 'text');
    } else {
        api.toast({
            msg: text,
            duration: duration,
            location: 'middle',
            global: global
        });
    }
}


function check_storage(callback) {
    var permission = 'photos';
    var resultList = api.hasPermission({
        list: [permission]
    });

    if (resultList[0].granted) {
        // 已授权，可以继续下一步操作
        callback(true);
    } else {
        api.confirm({
            msg: '应用需要您的授权访问相册和文件权限',
            buttons: ['取消', '去开启']
        }, function (ret) {
            if (ret.buttonIndex == 2) {
                api.requestPermission({
                    list: [permission],
                }, function (res) {
                    if (res.list[0].granted) {
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
            }
        });
    }
}


function isHuaWei() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('huawei') !== -1) {
        return true;
    } else if (ua.indexOf('honor') !== -1) {
        return true;
    } else {
        return false;
    }
}


function isMiniProgram() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('miniprogram') !== -1) {
        return true;
    }
    return false;
}

function sec2ms(time) {
    if (time <= 0) {
        return "00:00";
    }
    var sub = time % 60;
    if (time == sub) {
        if (sub < 10) {
            sub = '0' + sub;
        }
        return "00:" + sub;
    }
    var m = (time - sub) / 60;
    if (m < 10) {
        m = "0" + m;
    }
    if (sub < 10) {
        sub = '0' + sub;
    }
    return m + ":" + sub;
}


//提醒  0 仅震动  1、仅提示音  2、提示音+震动
function device_notice(type) {
    if (!isApp()) {
        return false;
    }
    if (type == 1) {
        //仅提示音
        api.notification({
            sound: 'default'
        });
    } else if (type == 2) {
        //提示音+震动
        api.notification();
    } else {
        if (api.systemType == 'ios') {
            return false;
        }
        //仅震动
        var shake_checked = get('shake_checked');
        if (shake_checked) {
            var vibrate = [1];
            if (api.systemType == 'android') {
                vibrate = [0, 10, 0, 10];
            }
            api.notification({
                vibrate: vibrate
            });
        }
    }
}


function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

function isQQ() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('qq/') !== -1) {
        return true;
    } else {
        return false;
    }
}

function isPC() {
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
        return 0;
    } else {
        return 1;
    }
}

function isBaiDuAPP() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('baidu') !== -1) {
        return true;
    } else {
        return false;
    }
}