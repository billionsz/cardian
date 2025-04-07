"use strict";

function _typeof(e) {
    "@babel/helpers - typeof";
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
console.log("CTR_IMG_LAZY_LOADER"), window.CTR_IMG_LAZY_LOADER = new Blazy({
    loadInvisible: !0,
    src: "data-ctr-lazy-src",
    selector: ".ctr-lazy-image, [data-ctr-islazy]",
    breakpoints: [{
        width: 768,
        src: "data-ctr-lazy-mobile-src"
    }, {
        width: 1024,
        src: "data-ctr-lazy-tablet-src"
    }],
    success: function(e) {},
    error: function(e) {
        console.log("load image error", e.getAttribute("data-ctr-lazy-src")), e.setAttribute("src", e.getAttribute("data-ctr-lazy-src"))
    }
}), window.addEventListener("load", function() {
    window.CTR_IMG_LAZY_LOADER.revalidate()
});
for (var props = {
        ih6x: {
            ctr__pageConfig: {
                declineUrl: "https://www.cardiansafecard.com/en/decline.html",
                successUrl: "https://www.cardiansafecard.com/en/success.html",
                confirmUrl: "https://www.cardiansafecard.com/en/confirm.html",
                cid: "10bba214-e473-4b00-9113-5170896791cd",
                gtmID: null,
                crmEndpoint: "https://sales-prod.tryemanagecrm.com/api",
                websaleApiUrl: "https://sales-prod.tryemanagecrm.com/api",
                fpUserInfoGetCode: "hjQxSRcBk48Gii/2xmzwb2d08D1sazWO3qzOLwiRwndnSQ3w9zNITw==",
                fpUserInfoPostCode: "hjQxSRcBk48Gii/2xmzwb2d08D1sazWO3qzOLwiRwndnSQ3w9zNITw==",
                sourceConfig: {
                    source: null
                }
            }
        }
    }, ids = Object.keys(props).map(function(e) {
        return "#" + e
    }).join(","), i = 0, len = (els = document.querySelectorAll(ids)).length; i < len; i++) {
    var el = els[i];
    (function(e) {
        try {
            var t = e.addToCartEventName,
                o = e.ctr__pageConfig,
                n = e.ctrwowPackageVersion;
            window.__ctrPageConfiguration = o, n && n.length && (window.__ctrwowPackageVersion = n),
                function(o) {
                    if (o) {
                        var n = window.ctrwowUtils;
                        n.getDependencies(["https://cdnjs.cloudflare.com/ajax/libs/pubsub-js/1.7.0/pubsub.min.js"]).then(function() {
                            var t = document.querySelector(".ctr_wow_body");
                            t.addEventListener("keyup", function e() {
                                n.tracking.pushGtmTrackingEvent(o), t.removeEventListener("keyup", e), window.PubSub && window.PubSub.unsubscribe("show-exit-popup")
                            })
                        })
                    }
                }(t)
        } catch (e) {
            console.log(e)
        }
    }).bind(el)(props[el.id])
}
for (i = 0, len = (items = document.querySelectorAll("#ikqlyj")).length; i < len; i++)(function() {
    var e, t = this,
        o = [],
        n = t.getAttribute("url"),
        r = t.getAttribute("box-title");

    function i(e) {
        return new RegExp(/({\[(\s|\S)*?\]})/g).test(e)
    }
    if (r && r.length) document.querySelectorAll('[title="'.concat(r, '"]')).forEach(function(e) {
        o.push(e), e.dataset.title = e.getAttribute("title"), e.removeAttribute("title")
    });
    else if (i(n) || n && (e = n, new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(e))) {
        var a, l = document.querySelectorAll("a");
        if (!l.length) return;
        for (a = 0; a < l.length; a++) {
            var c = new RegExp(n, "gi"),
                d = decodeURI(l[a].href);
            i(n) && (c = new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi")), d.match(c) && !l[a].closest(".sticky-bar") && l[a].hasAttribute("call-to-action") && o.push(l[a])
        }
    }

    function u() {
        o.some(function(e) {
            return t = e.getBoundingClientRect(), o = t.top, n = t.bottom, r = t.width, i = t.height, a = window.innerHeight || document.documentElement.clientHeight, (0 < o || 0 < n) && o < a && 0 < r && 0 < i;
            var t, o, n, r, i, a
        }) ? !t.classList.contains("hidden") && t.classList.add("hidden") : t.classList.contains("hidden") && t.classList.remove("hidden")
    }
    setTimeout(function() {
        u();
        var e = window["__ctrStickyBarScrollEvent__".concat(t.id)] = u;
        window.addEventListener("scroll", e)
    }, 2e3)
}).bind(items[i])();
for (props = {
        ikzfk: {
            "tracking-value": "",
            handleOnClick: ""
        },
        ioyy7k: {
            "tracking-value": "",
            handleOnClick: ""
        },
        i5x941: {
            "tracking-value": "",
            handleOnClick: ""
        },
        incz45: {
            "tracking-value": "",
            handleOnClick: ""
        },
        iz45yq: {
            "tracking-value": "",
            handleOnClick: ""
        },
        i30y6j: {
            "tracking-value": "",
            handleOnClick: ""
        },
        ilzv6k: {
            "tracking-value": "",
            handleOnClick: ""
        },
        i1rr7g: {
            "tracking-value": "",
            handleOnClick: ""
        },
        iyhfb2: {
            "tracking-value": "",
            handleOnClick: ""
        },
        icqiiz: {
            "tracking-value": "",
            handleOnClick: ""
        },
        i3phss: {
            "tracking-value": "",
            handleOnClick: ""
        },
        i6pxzj: {
            "tracking-value": "",
            handleOnClick: ""
        },
        iys4qj: {
            "tracking-value": "",
            handleOnClick: ""
        },
        i1nl7k: {
            "tracking-value": "",
            handleOnClick: ""
        },
        i0sot: {
            "tracking-value": "",
            handleOnClick: ""
        }
    }, ids = Object.keys(props).map(function(e) {
        return "#" + e
    }).join(","), i = 0, len = (els = document.querySelectorAll(ids)).length; i < len; i++) {
    el = els[i];
    (function(s) {
        $(this).click(function(e) {
            var t = $("#wrapper"),
                o = $(this).attr("href"),
                n = $(this).attr("target"),
                r = $(this).attr("anchor");
            if (o && o.match(/({\[(\s|\S)*?\]})/g) && e.preventDefault(), !t.length) {
                var i = (s = s || {})["tracking-value"],
                    a = s.handleOnClick;
                if (i && window.ctrwowUtils.tracking.pushGtmTrackingEvent(i), a) try {
                    new Function(a)()
                } catch (e) {
                    console.warn("handleOnClick error: " + e)
                }
                if ("popup" == n && !window.ctrwowUtils.isPreviewMode()) {
                    e.preventDefault(), console.log("link popup click");
                    var l = $('div[ctrLinkContentId="'.concat(this.id, '"] .ctrwow-modal')),
                        c = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="'.concat(o, '"></iframe>');
                    if (l) {
                        var d = $(l[0]).find(".ctr_modal_iframe");
                        d.length && $(d[0]).html(c), $(l[0]).addClass("show")
                    }
                    return
                }
                if (void 0 !== $(this).attr("call-to-action") && o && o.includes("ctr_fid")) return e.preventDefault(), console.log("link funnel click"), $(this).removeAttr("href"), void(window.location.href = o);
                if (r && "#" === r[0]) {
                    var u = document.querySelector(r);
                    u && u.scrollIntoView ? u.scrollIntoView({
                        behavior: "smooth"
                    }) : window.location.replace("".concat(o).concat(r)), e.preventDefault()
                }
            }
        })
    }).bind(el)(props[el.id])
}
for (props = {
        il9p: {}
    }, ids = Object.keys(props).map(function(e) {
        return "#" + e
    }).join(","), i = 0, len = (els = document.querySelectorAll(ids)).length; i < len; i++) {
    el = els[i];
    (function(e) {
        var t = e.htmlClass;
        if (console.log("run - onInitPage - onInitPage", t, this, this.tagName), window.ctrwowUtils) {
            var o = window.ctrwowUtils,
                n = function() {
                    setTimeout(function() {
                        return window.ctrwowUtils.addCommonLinkHandler()
                    }, 0), setTimeout(function() {
                        return window.ctrwowUtils.addCommonImageHandler()
                    }, 0), setTimeout(function() {
                        return window.ctrwowUtils.addCommonTextHandler()
                    }, 0)
                };
            if (o.isPreviewMode() || o.isBuilderMode()) return n(), void
            function(e) {
                try {
                    var t = (e || "").split(" ").filter(function(e) {
                            return e.length
                        }),
                        o = this.parentNode.parentNode.parentNode,
                        n = o.classList;
                    console.log("[publishPageUtils] htmlTag", t, e, o, n), t.forEach(function(e) {
                        return n.add(e)
                    })
                } catch (e) {
                    console.log("[onInitPage] e", e)
                }
            }.call(this, t);
            /complete|interactive|loaded/.test(document.readyState) ? n() : document.addEventListener("DOMContentLoaded", n, !1)
        }
    }).bind(el)(props[el.id])
}
for (i = 0, len = (items = document.querySelectorAll("#ib8sdl")).length; i < len; i++)(function() {
    var e, o = 0,
        n = 0,
        r = 0,
        i = 0,
        a = this,
        l = (a.hasAttribute("detect-swipe-up"), a.getAttribute("swipe-type") || null);

    function c(e, t) {
        e.forEach(function(e) {
            e.intersectionRatio ? a.classList.add("swipe-hidden") : a.classList.remove("swipe-hidden")
        })
    }

    function d() {
        window.ctrwowUtils.getDevice().mobile() && (document.querySelector(".float-discount").addEventListener("touchstart", function(e) {
            o = e.changedTouches[0].screenX, r = e.changedTouches[0].screenY, "UP" === l && (document.documentElement.style.overflowY = "hidden")
        }), document.querySelector(".float-discount").addEventListener("touchend", function(e) {
            var t;
            n = e.changedTouches[0].screenX, i = e.changedTouches[0].screenY, "UP" === l && setTimeout(function() {
                document.documentElement.style.overflowY = "auto"
            }, 100), (t = document.querySelector(".swipe-url")) && ("UP" === l && i < r - 10 ? t.click() : "LEFT_RIGHT" === l && 10 <= Math.abs(n - o) && Math.abs(i - r) <= 20 ? t.click() : n < o - 20 && Math.abs(i - r) <= 30 && t.click())
        }))
    }

    function u() {
        var e = a.querySelector(".swipe-group");
        e && e.classList.remove("swipe-hidden")
    }

    function t() {
        var t;
        u(), d(), a.getAttribute("viewport-class") && (e = document.querySelectorAll("." + a.getAttribute("viewport-class")), t = new IntersectionObserver(c, {
            root: null,
            rootMargin: "0px",
            threshold: null
        }), Array.prototype.slice.call(e).forEach(function(e) {
            t.observe(e)
        }))
    }
    window.ctrwowUtils.isBuilderMode() && u(), 2 !== window.__CTRWOW_CONFIG.PAGE_TYPE && t(), window.addEventListener("load", function() {
        2 === window.__CTRWOW_CONFIG.PAGE_TYPE && t()
    })
}).bind(items[i])();
for (props = {
        ialt5v: {}
    }, ids = Object.keys(props).map(function(e) {
        return "#" + e
    }).join(","), i = 0, len = (els = document.querySelectorAll(ids)).length; i < len; i++) {
    el = els[i];
    (function(e) {
        try {
            if (console.log(e), window.ctrDebug && window.ctrDebug.run(this, "widget-disclaimer-gjs", e)) return !0;
            (function(o) {
                var n = {};

                function r(e) {
                    if (n[e]) return n[e].exports;
                    var t = n[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return o[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
                }
                return r.m = o, r.c = n, r.d = function(e, t, o) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: o
                    })
                }, r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.t = function(t, e) {
                    if (1 & e && (t = r(t)), 8 & e) return t;
                    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (r.r(o), Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var n in t) r.d(o, n, function(e) {
                            return t[e]
                        }.bind(null, n));
                    return o
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 0)
            })([function(e, t, o) {
                function n(o, e) {
                    var n = o.getAttribute("active-widget-with-param") || "";
                    window.ctrwowUtils.isBuilderMode() || function() {
                        if ("" !== n) {
                            var e = n.split("="),
                                t = window.ctrwowUtils.link.getParameterByName(e[0]);
                            null != t && t.toLowerCase() === e[1].toLowerCase() && (o.style.display = "none")
                        }
                    }()
                }
                o.r(t), o.d(t, "default", function() {
                    return n
                })
            }]).default(this, e)
        } catch (e) {
            console.log("[widget-disclaimer-gjs] controller - exception handler"), console.log(e)
        }
        console.log("[widget-disclaimer-gjs]run controller")
    }).bind(el)(props[el.id])
}
for (props = {
        ith2e7: {
            "ctr-select-offers": '{"offerId":308,"webKey":"BC4DA990-F159-4A66-93A9-8544CA278B62","offerName":"CardianSafeCard EN (AOV 45) (Pack 3pcs)"}'
        },
        il6qb9: {}
    }, ids = Object.keys(props).map(function(e) {
        return "#" + e
    }).join(","), i = 0, len = (els = document.querySelectorAll(ids)).length; i < len; i++) {
    el = els[i];
    (function(e) {
        try {
            if (console.log(e), window.ctrDebug && window.ctrDebug.run(this, "widget-customer-location", e)) return !0;
            (function(o) {
                var n = {};

                function r(e) {
                    if (n[e]) return n[e].exports;
                    var t = n[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return o[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
                }
                return r.m = o, r.c = n, r.d = function(e, t, o) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: o
                    })
                }, r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.t = function(t, e) {
                    if (1 & e && (t = r(t)), 8 & e) return t;
                    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (r.r(o), Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var n in t) r.d(o, n, function(e) {
                            return t[e]
                        }.bind(null, n));
                    return o
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 1)
            })([function(e, t) {
                e.exports = function(e, t, o) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = o, e
                }, e.exports.default = e.exports, e.exports.__esModule = !0
            }, function(e, t, o) {
                o.r(t), o.d(t, "default", function() {
                    return r
                });
                var n = o(0),
                    u = o.n(n);

                function s(t, e) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })), o.push.apply(o, n)
                    }
                    return o
                }

                function r(o, e) {
                    var r = o.querySelector(".customer-location"),
                        i = e["ctr-select-offers"] ? JSON.parse(e["ctr-select-offers"]) : null,
                        l = o.hasAttribute("hide-location"),
                        a = window.ctrwowUtils.isBuilderMode();

                    function c(t) {
                        var e = o.querySelectorAll(".location-detail");
                        Array.prototype.slice.call(e).forEach(function(e) {
                            e.style.display = t
                        })
                    }

                    function d(a) {
                        var e = document.querySelectorAll(".customer-location");
                        Array.prototype.slice.call(e).forEach(function(e) {
                            for (var t = a.regionName || "", o = a.city || "", n = a.countryName || "", r = document.createTreeWalker(e); r.nextNode();) {
                                var i = r.currentNode;
                                i.textContent = i.textContent.replace(/{state}/g, t).replace(/{city}/g, o).replace(/{country}/g, n)
                            }
                            e.classList.contains("loading") && (e.classList.remove("loading"), Array.prototype.slice.call(e.querySelectorAll(".dot-flashing")).forEach(function(e) {
                                e.remove()
                            }))
                        }), l && c("inherit")
                    }
                    a && r.classList.remove("loading"),
                        function() {
                            if (!a && i && i.webKey) {
                                !r.classList.contains("loading") && r.classList.add("loading"), l && c("none");
                                var e = window.__CTRWOW_CONFIG,
                                    t = "".concat(window.ctrwowUtils.getSalesSupportCRMBaseUrl(), "/campaigns/").concat(i.webKey, "/customers/location");
                                window.ctrwowUtils.callAjax(t, {
                                    method: "GET",
                                    headers: function(t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var o = null != arguments[e] ? arguments[e] : {};
                                            e % 2 ? s(Object(o), !0).forEach(function(e) {
                                                u()(t, e, o[e])
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : s(Object(o)).forEach(function(e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                                            })
                                        }
                                        return t
                                    }({}, (o = e, n = {
                                        "content-type": "application/json"
                                    }, o && o.X_CID && (n.X_CID = o.X_CID), n))
                                }).then(function(e) {
                                    if (e) {
                                        d(e);
                                        var t = {
                                            offerSelected: i,
                                            data: e
                                        };
                                        window.ctrwowUtils.events.emit("customerLocationWidget", t), window.localStorage.setItem("customerLocationWidget", JSON.stringify(t))
                                    }
                                })
                            } else if (!a)
                                if (window.localStorage.getItem("customerLocationWidget")) d(JSON.parse(window.localStorage.getItem("customerLocationWidget")).data), window.ctrwowUtils.events.emit("customerLocationWidget", JSON.parse(window.localStorage.getItem("customerLocationWidget")));
                                else {
                                    if (window.loadedCustomerLocation) return;
                                    window.loadedCustomerLocation = !0, window.ctrwowUtils.callAjax("https://api.bigdatacloud.net/data/reverse-geocode-client", {
                                        method: "GET",
                                        headers: {}
                                    }).then(function(e) {
                                        if (e) {
                                            var t = {};
                                            t.regionName = e.principalSubdivision, t.city = e.city, t.countryName = e.countryName, t.ip = e.ip, d(t);
                                            var o = {
                                                data: t
                                            };
                                            window.ctrwowUtils.events.emit("customerLocationWidget", o), window.localStorage.setItem("customerLocationWidget", JSON.stringify(o))
                                        }
                                    })
                                }
                            var o, n
                        }()
                }
            }]).default(this, e)
        } catch (e) {
            console.log("[widget-customer-location] controller - exception handler"), console.log(e)
        }
        console.log("[widget-customer-location]run controller")
    }).bind(el)(props[el.id])
}
for (i = 0, len = (items = document.querySelectorAll("#i54oh")).length; i < len; i++)(function() {
    try {
        var e;
        try {
            e = {
                dkItems: "1",
                tbItems: "1",
                mbItems: "1",
                dkScrollItems: "1",
                tbScrollItems: "1",
                mbScrollItems: "1",
                sliderMode: "default",
                slideType: "normal",
                dkItemsPerRow: "0",
                tbItemsPerRow: "0",
                mbItemsPerRow: "0",
                arrows: "",
                thumbArrows: "",
                infinite: "true",
                bullets: "true",
                fade: "",
                autoplay: "true",
                adaptiveHeight: "true",
                variableWidth: "",
                makeArrowCenter: "",
                initUnder: "99999",
                initialSlide: "",
                centerPadding: "0",
                centerPaddingMobile: "0",
                slideSpeed: "500",
                autoplaySpeed: "3000",
                bulletsColor: "#E7E7E7",
                bulletActiveColor: "#BBBBBB",
                bulletsSize: "11px",
                bulletsBorderColor: "transparent",
                dkRows: "1",
                tbRows: "1",
                mbRows: "1",
                dir: "ltr"
            }
        } catch (e) {
            console.log(e)
        }
        if (window.ctrDebug && window.ctrDebug.run(this, "widget-slider", e)) return !0;
        (function(o) {
            var n = {};

            function r(e) {
                if (n[e]) return n[e].exports;
                var t = n[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return o[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
            }
            return r.m = o, r.c = n, r.d = function(e, t, o) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: o
                })
            }, r.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, r.t = function(t, e) {
                if (1 & e && (t = r(t)), 8 & e) return t;
                if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
                var o = Object.create(null);
                if (r.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var n in t) r.d(o, n, function(e) {
                        return t[e]
                    }.bind(null, n));
                return o
            }, r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = 0)
        })([function(e, t, o) {
            function n(e, t) {
                var o = parseInt(e.getAttribute("delayTimeInitWidget")),
                    n = e.hasAttribute("initWithEvent");

                function r() {
                    console.log(2), window.sliderTimer && clearTimeout(window.sliderTimer), window.isInitialized || (console.log(3), window.isInitialized = !0, window.ctrwowUtils.getDependencies(["https://d16hdrba6dusey.cloudfront.net/sitecommon/js/widgets/slick-v1.8.0.js", "https://d16hdrba6dusey.cloudfront.net/sitecommon/js/widgets/slider-v2.js"], {
                        isUsedJquery: !0,
                        delayUntilInteract: !1
                    }).then(function() {
                        window.sliderLoaded = !0, console.log(4), $("[data-cslider]").cslider()
                    }))
                }(void 0 === window.delayTimeInitSlider || o > window.delayTimeInitSlider) && (window.delayTimeInitSlider = o), window.ctrwowUtils.isBuilderMode() ? window.isInitialized ? window.sliderLoaded && (console.log(11.1), $(e).find("[data-cslider]").each(function() {
                    $.data(this, "cslider") && $(this).cslider("destroy"), $(this).cslider("initWidget")
                })) : (console.log(11), r()) : window.isAddedEvents || (console.log(1), window.isAddedEvents = !0, window.addEventListener("load", function() {
                    window.isInitialized || (n && ["touchstart", "click", "scroll"].forEach(function(e) {
                        window.addEventListener(e, function() {
                            window.isInitialized || r()
                        }, {
                            once: !0
                        })
                    }), window.delayTimeInitSlider && 0 < window.delayTimeInitSlider ? window.sliderTimer = setTimeout(function() {
                        console.log(1.1), r()
                    }, window.delayTimeInitSlider) : n || function() {
                        if (!window.ctrwowUtils.detectTestPageSpeed.isDetectTestPageSpeed() && window.IntersectionObserver) {
                            var t = !1,
                                o = document.querySelectorAll("[data-cslider]"),
                                n = new IntersectionObserver(function(e) {
                                    e.forEach(function(e) {
                                        window.isInitialized ? t || (t = !0, o.forEach(function(e) {
                                            n.unobserve(e)
                                        })) : 0 < e.intersectionRatio && (console.log(1.2), r())
                                    })
                                });
                            o.forEach(function(e) {
                                n.observe(e)
                            })
                        }
                    }())
                }))
            }
            o.r(t), o.d(t, "default", function() {
                return n
            })
        }]).default(this, e);
        console.log("run controller")
    } catch (e) {
        console.log(e)
    }
}).bind(items[i])();
for (props = {
        iv3bdj: {
            videoThumbnailImage: "",
            playButton: !1,
            autoPlay: !0,
            loop: !0,
            mute: !0,
            hideControlBar: !0,
            lazyLoadThumbnail: !1,
            initVideoImmediately: !1
        },
        i6n00r: {
            videoThumbnailImage: "",
            playButton: !1,
            autoPlay: !0,
            loop: !0,
            mute: !0,
            hideControlBar: !0,
            lazyLoadThumbnail: !1,
            initVideoImmediately: !1
        },
        irnpgs: {
            videoThumbnailImage: "https://test2.ctrwow.com/cardian/assets/image/10bba214-e473-4b00-9113-5170896791cd/67ca934abb30f90138094970/e2b04e79-8851-48c5-8dbc-4f6dd4fc8640/safecard_slider1-2.png.webp",
            playButton: !1,
            autoPlay: !0,
            loop: !0,
            mute: !0,
            hideControlBar: !0,
            lazyLoadThumbnail: !0
        }
    }, ids = Object.keys(props).map(function(e) {
        return "#" + e
    }).join(","), i = 0, len = (els = document.querySelectorAll(ids)).length; i < len; i++) {
    el = els[i];
    (function(e) {
        try {
            if (console.log(e), window.ctrDebug && window.ctrDebug.run(this, "widget-videos-gjs", e)) return !0;
            (function(o) {
                var n = {};

                function r(e) {
                    if (n[e]) return n[e].exports;
                    var t = n[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return o[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
                }
                return r.m = o, r.c = n, r.d = function(e, t, o) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: o
                    })
                }, r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.t = function(t, e) {
                    if (1 & e && (t = r(t)), 8 & e) return t;
                    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (r.r(o), Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var n in t) r.d(o, n, function(e) {
                            return t[e]
                        }.bind(null, n));
                    return o
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 4)
            })([function(e, t, o) {
                e.exports = o(3)
            }, function(e, t) {
                e.exports = function(e, t, o) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = o, e
                }, e.exports.default = e.exports, e.exports.__esModule = !0
            }, function(e, t) {
                function c(e, t, o, n, r, i, a) {
                    try {
                        var l = e[i](a),
                            c = l.value
                    } catch (e) {
                        return void o(e)
                    }
                    l.done ? t(c) : Promise.resolve(c).then(n, r)
                }
                e.exports = function(l) {
                    return function() {
                        var e = this,
                            a = arguments;
                        return new Promise(function(t, o) {
                            var n = l.apply(e, a);

                            function r(e) {
                                c(n, t, o, r, i, "next", e)
                            }

                            function i(e) {
                                c(n, t, o, r, i, "throw", e)
                            }
                            r(void 0)
                        })
                    }
                }, e.exports.default = e.exports, e.exports.__esModule = !0
            }, function(e, t, o) {
                var n = function(a) {
                    var e = Object.prototype,
                        u = e.hasOwnProperty,
                        t = "function" == typeof Symbol ? Symbol : {},
                        r = t.iterator || "@@iterator",
                        o = t.asyncIterator || "@@asyncIterator",
                        n = t.toStringTag || "@@toStringTag";

                    function i(e, t, o) {
                        return Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        i({}, "")
                    } catch (a) {
                        i = function(e, t, o) {
                            return e[t] = o
                        }
                    }

                    function l(e, t, o, n) {
                        var i, a, l, c, r = t && t.prototype instanceof w ? t : w,
                            d = Object.create(r.prototype),
                            u = new O(n || []);
                        return d._invoke = (i = e, a = o, l = u, c = "suspendedStart", function(e, t) {
                            if ("executing" === c) throw new Error("Generator is already running");
                            if ("completed" === c) {
                                if ("throw" === e) throw t;
                                return {
                                    value: void 0,
                                    done: !0
                                }
                            }
                            for (l.method = e, l.arg = t;;) {
                                var o = l.delegate;
                                if (o) {
                                    var n = b(o, l);
                                    if (n) {
                                        if (n === f) continue;
                                        return n
                                    }
                                }
                                if ("next" === l.method) l.sent = l._sent = l.arg;
                                else if ("throw" === l.method) {
                                    if ("suspendedStart" === c) throw c = "completed", l.arg;
                                    l.dispatchException(l.arg)
                                } else "return" === l.method && l.abrupt("return", l.arg);
                                c = "executing";
                                var r = s(i, a, l);
                                if ("normal" === r.type) {
                                    if (c = l.done ? "completed" : "suspendedYield", r.arg === f) continue;
                                    return {
                                        value: r.arg,
                                        done: l.done
                                    }
                                }
                                "throw" === r.type && (c = "completed", l.method = "throw", l.arg = r.arg)
                            }
                        }), d
                    }

                    function s(e, t, o) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, o)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    a.wrap = l;
                    var f = {};

                    function w() {}

                    function c() {}

                    function d() {}
                    var p = {};
                    p[r] = function() {
                        return this
                    };
                    var m = Object.getPrototypeOf,
                        y = m && m(m(j([])));
                    y && y !== e && u.call(y, r) && (p = y);
                    var h = d.prototype = w.prototype = Object.create(p);

                    function v(e) {
                        ["next", "throw", "return"].forEach(function(t) {
                            i(e, t, function(e) {
                                return this._invoke(t, e)
                            })
                        })
                    }

                    function g(c, d) {
                        var t;
                        this._invoke = function(o, n) {
                            function e() {
                                return new d(function(e, t) {
                                    ! function t(e, o, n, r) {
                                        var i = s(c[e], c, o);
                                        if ("throw" !== i.type) {
                                            var a = i.arg,
                                                l = a.value;
                                            return l && "object" == _typeof(l) && u.call(l, "__await") ? d.resolve(l.__await).then(function(e) {
                                                t("next", e, n, r)
                                            }, function(e) {
                                                t("throw", e, n, r)
                                            }) : d.resolve(l).then(function(e) {
                                                a.value = e, n(a)
                                            }, function(e) {
                                                return t("throw", e, n, r)
                                            })
                                        }
                                        r(i.arg)
                                    }(o, n, e, t)
                                })
                            }
                            return t = t ? t.then(e, e) : e()
                        }
                    }

                    function b(e, t) {
                        var o = e.iterator[t.method];
                        if (void 0 === o) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return f;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return f
                        }
                        var n = s(o, e.iterator, t.arg);
                        if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
                        var r = n.arg;
                        return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                    }

                    function S(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function _(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function O(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(S, this), this.reset(!0)
                    }

                    function j(t) {
                        if (t) {
                            var e = t[r];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var o = -1,
                                    n = function e() {
                                        for (; ++o < t.length;)
                                            if (u.call(t, o)) return e.value = t[o], e.done = !1, e;
                                        return e.value = void 0, e.done = !0, e
                                    };
                                return n.next = n
                            }
                        }
                        return {
                            next: P
                        }
                    }

                    function P() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return c.prototype = h.constructor = d, (d.constructor = c).displayName = i(d, n, "GeneratorFunction"), a.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === c || "GeneratorFunction" === (t.displayName || t.name))
                    }, a.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, n, "GeneratorFunction")), e.prototype = Object.create(h), e
                    }, a.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, v(g.prototype), g.prototype[o] = function() {
                        return this
                    }, a.AsyncIterator = g, a.async = function(e, t, o, n, r) {
                        void 0 === r && (r = Promise);
                        var i = new g(l(e, t, o, n), r);
                        return a.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                            return e.done ? e.value : i.next()
                        })
                    }, v(h), i(h, n, "Generator"), h[r] = function() {
                        return this
                    }, h.toString = function() {
                        return "[object Generator]"
                    }, a.keys = function(o) {
                        var n = [];
                        for (var e in o) n.push(e);
                        return n.reverse(),
                            function e() {
                                for (; n.length;) {
                                    var t = n.pop();
                                    if (t in o) return e.value = t, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, a.values = j, O.prototype = {
                        constructor: O,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                                for (var t in this) "t" === t.charAt(0) && u.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(o) {
                            if (this.done) throw o;
                            var n = this;

                            function e(e, t) {
                                return i.type = "throw", i.arg = o, n.next = e, t && (n.method = "next", n.arg = void 0), !!t
                            }
                            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                                var r = this.tryEntries[t],
                                    i = r.completion;
                                if ("root" === r.tryLoc) return e("end");
                                if (r.tryLoc <= this.prev) {
                                    var a = u.call(r, "catchLoc"),
                                        l = u.call(r, "finallyLoc");
                                    if (a && l) {
                                        if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                                        if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                                    } else if (a) {
                                        if (this.prev < r.catchLoc) return e(r.catchLoc, !0)
                                    } else {
                                        if (!l) throw new Error("try statement without catch or finally");
                                        if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
                                var n = this.tryEntries[o];
                                if (n.tryLoc <= this.prev && u.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var r = n;
                                    break
                                }
                            }
                            r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                            var i = r ? r.completion : {};
                            return i.type = e, i.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, f) : this.complete(i)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                                var o = this.tryEntries[t];
                                if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), _(o), f
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                                var o = this.tryEntries[t];
                                if (o.tryLoc === e) {
                                    var n = o.completion;
                                    if ("throw" === n.type) {
                                        var r = n.arg;
                                        _(o)
                                    }
                                    return r
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, o) {
                            return this.delegate = {
                                iterator: j(e),
                                resultName: t,
                                nextLoc: o
                            }, "next" === this.method && (this.arg = void 0), f
                        }
                    }, a
                }(e.exports);
                try {
                    regeneratorRuntime = n
                } catch (e) {
                    Function("r", "regeneratorRuntime = r")(n)
                }
            }, function(e, t, o) {
                o.r(t), o.d(t, "default", function() {
                    return h
                });
                var n = o(1),
                    r = o.n(n);

                function c(e, t) {
                    var o = document.createElement("script");
                    o.type = "text/javascript", o.src = e, o.defer = !0, document.head.appendChild(o), o.onload = function() {
                        "function" == typeof t && t()
                    }
                }

                function d(e, t) {
                    e.classList.remove("videoPlaying", "videoPausing", "videoEnded"), e.classList.add(t)
                }
                var i = o(2),
                    a = o.n(i),
                    l = o(0),
                    u = o.n(l);

                function s(e, t) {
                    var o = new window.Vimeo.Player(e.querySelector(".img-view").id, {
                            id: t.videoId,
                            autoplay: t.autoPlay,
                            title: !1,
                            sidedock: !1,
                            loop: t.loop,
                            muted: t.autoPlay || t.mute,
                            controls: !t.hideControlBar
                        }),
                        n = e.querySelector(".layer-over-video"),
                        r = e.querySelector(".button-box"),
                        i = e.querySelector(".js-play-video");
                    o.ready().then(function() {
                        e.querySelector(".img-view .tmp-thumb") && e.querySelector(".img-view .tmp-thumb").remove(), window.ctrwowUtils.events.emit("onReadyVideo_" + e.id), i && i.addEventListener("click", function() {
                            o.play()
                        })
                    }), o.on("play", function() {
                        d(e, "videoPlaying"), n && n.classList.add("hide"), window.ctrwowUtils.events.emit("playVideo_" + e.id)
                    }), o.on("pause", function() {
                        d(e, "videoPausing"), window.ctrwowUtils.events.emit("pauseVideo_" + e.id)
                    }), o.on("ended", function() {
                        d(e, "videoEnded"), r && r.classList.add("show"), window.ctrwowUtils.events.emit("endVideo_" + e.id)
                    })
                }

                function f(e, t) {
                    return function() {
                        return a()(u.a.mark(function e(t, o) {
                            return u.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        window.Vimeo ? s(t, o) : setTimeout(function() {
                                            f(t, o)
                                        }, 200);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })).apply(this, arguments)
                    }.apply(this, arguments)
                }

                function w(e, t) {
                    var n, o, r;
                    window.YT && window.YT.loaded ? (n = e, o = t, r = window.location.href, window.ctrwowUtils.isBuilderMode() && (r = "https://www.ctrwow.com/", n.querySelector(".img-view .tmp-thumb") && n.querySelector(".img-view .tmp-thumb").remove()), new window.YT.Player(n.querySelector(".w_youtube").id, {
                        videoId: o.videoId,
                        host: "https://www.youtube.com",
                        playerVars: {
                            autoplay: o.autoPlay ? 1 : 0,
                            loop: o.loop ? 1 : 0,
                            mute: o.autoPlay || o.mute ? 1 : 0,
                            controls: o.hideControlBar ? 0 : 1,
                            showinfo: 0,
                            modestbranding: 1,
                            origin: r,
                            enablejsapi: 1
                        },
                        events: {
                            onReady: function(e) {
                                console.log("onPlayerReady"), n.querySelector(".img-view .tmp-thumb") && n.querySelector(".img-view .tmp-thumb").remove(), window.ctrwowUtils.events.emit("onReadyVideo_" + n.id);
                                var t = n.querySelector(".js-play-video");
                                t && t.addEventListener("click", function() {
                                    e.target.playVideo()
                                })
                            },
                            onStateChange: function(e) {
                                var t = n.querySelector(".layer-over-video"),
                                    o = n.querySelector(".button-box");
                                switch (e.data) {
                                    case window.YT.PlayerState.PAUSED:
                                        d(n, "videoPausing"), window.ctrwowUtils.events.emit("pauseVideo_" + n.id);
                                        break;
                                    case window.YT.PlayerState.PLAYING:
                                        d(n, "videoPlaying"), t && t.classList.add("hide"), window.ctrwowUtils.events.emit("playVideo_" + n.id);
                                        break;
                                    case window.YT.PlayerState.ENDED:
                                        d(n, "videoEnded"), o && o.classList.add("show"), window.ctrwowUtils.events.emit("endVideo_" + n.id)
                                }
                            }
                        }
                    })) : setTimeout(function() {
                        w(e, t)
                    }, 200)
                }

                function p(e, t) {
                    switch (console.log("Widget Video"), t.provider) {
                        case "wistia":
                            n = t, r = (o = e).querySelector(".w_wistia"), i = r.getAttribute("class"), a = "".concat(i, " wistia_embed wistia_async_").concat(n.videoId, " videoFoam=true autoPlay=").concat(n.autoPlay, " endVideoBehavior=").concat(n.endVideoBehavior, " playbar=").concat(n.playbar, " playButton=").concat(n.playButton, " controlsVisibleOnLoad=").concat(n.controlsVisibleOnLoad, " settingsControl=").concat(n.settingsControl, " playbackRateControl=").concat(n.playbackRateControl, " volumeControl=").concat(n.volumeControl, " smallPlayButton=").concat(n.smallPlayButton, " fullscreenButton=").concat(n.fullscreenButton, " muted=").concat(n.autoPlay || n.mute, " volume=").concat(n.volumn), l = r.outerHTML.replace(i, a), r.remove(), o.querySelector(".img-view").insertAdjacentHTML("beforeend", l), window.isAppendedWistia || (window._wq = window._wq || [], window._wq.push({
                                id: "_all",
                                onReady: function(e) {
                                    var t = e.container.closest(".js-video-group");
                                    setTimeout(function() {
                                        t.querySelector(".tmp-thumb") && t.querySelector(".tmp-thumb").remove()
                                    }, 1e3), window.ctrwowUtils.events.emit("onReadyVideo_" + t.id);
                                    var o = t.querySelector(".layer-over-video"),
                                        n = t.querySelector(".button-box"),
                                        r = t.querySelector(".js-play-video");
                                    r && r.addEventListener("click", function() {
                                        e.play()
                                    }), e.bind("play", function() {
                                        d(t, "videoPlaying"), o && o.classList.add("hide"), window.ctrwowUtils.events.emit("playVideo_" + t.id)
                                    }), e.bind("pause", function() {
                                        d(t, "videoPausing"), window.ctrwowUtils.events.emit("pauseVideo_" + t.id)
                                    }), e.bind("end", function() {
                                        d(t, "videoEnded"), n && n.classList.add("show"), window.ctrwowUtils.events.emit("endVideo_" + t.id)
                                    })
                                }
                            }), window.isAppendedWistia = !0, c("https://fast.wistia.com/assets/external/E-v1.js"));
                            break;
                        case "vimeo":
                            window.isAppendedVimeoLib ? f(e, t) : (window.isAppendedVimeoLib = !0, c("https://player.vimeo.com/api/player.js", function() {
                                f(e, t)
                            }));
                            break;
                        case "youtube":
                            window.isAppendedYoutubeLib ? w(e, t) : (window.isAppendedYoutubeLib = !0, c("https://www.youtube.com/iframe_api", function() {
                                w(e, t)
                            }));
                            break;
                        default:
                            ! function(t, e) {
                                var o = "";
                                e.hideControlBar || (o += "controls"), e.autoPlay ? o += " autoplay muted" : e.mute && (o += " muted"), e.loop && (o += " loop");
                                var n = '<video preload="metadata" playsinline '.concat(o, ' poster="').concat(e.thumbnail, '" src="').concat(e.videoId, '"></video>');
                                t.querySelector(".img-view").insertAdjacentHTML("beforeend", n);
                                var r = t.querySelector(".img-view video"),
                                    i = t.querySelector(".layer-over-video"),
                                    a = t.querySelector(".button-box");
                                r.addEventListener("loadedmetadata", function() {
                                    t.querySelector(".img-view .tmp-thumb") && t.querySelector(".img-view .tmp-thumb").remove(), window.ctrwowUtils.events.emit("onReadyVideo_" + t.id);
                                    var e = t.querySelector(".js-play-video");
                                    e && e.addEventListener("click", function() {
                                        r.play()
                                    })
                                }), r.addEventListener("pause", function() {
                                    d(t, "videoPausing"), window.ctrwowUtils.events.emit("pauseVideo_" + t.id)
                                }), r.addEventListener("playing", function() {
                                    d(t, "videoPlaying"), i && i.classList.add("hide"), window.ctrwowUtils.events.emit("playVideo_" + t.id)
                                }), r.addEventListener("ended", function() {
                                    d(t, "videoEnded"), a && a.classList.add("show"), window.ctrwowUtils.events.emit("endVideo_" + t.id)
                                })
                            }(e, t)
                    }
                    var o, n, r, i, a, l
                }

                function m(t, e) {
                    var o = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })), o.push.apply(o, n)
                    }
                    return o
                }

                function y(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? m(Object(o), !0).forEach(function(e) {
                            r()(t, e, o[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                        })
                    }
                    return t
                }

                function h(n, e) {
                    var t, o, r, i = {
                            provider: n.getAttribute("provider"),
                            videoId: n.getAttribute("videoid"),
                            thumbnail: n.getAttribute("thumbnail"),
                            playButton: !!e.playButton,
                            autoPlay: !!e.autoPlay,
                            loop: !!e.loop,
                            mute: !!e.mute,
                            endVideoBehavior: e.loop ? "loop" : "default",
                            volumn: e.mute ? 0 : 1,
                            controlsVisibleOnLoad: !1,
                            playbar: !e.hideControlBar,
                            showContentAfterVideoEnd: !!e.showContentAfterVideoEnd,
                            settingsControl: !e.hideControlBar,
                            playbackRateControl: !e.hideControlBar,
                            volumeControl: !e.hideControlBar,
                            smallPlayButton: !e.hideControlBar,
                            fullscreenButton: !e.hideControlBar,
                            hideControlBar: !!e.hideControlBar,
                            timeoutAutoPlay: isNaN(parseInt(n.getAttribute("timeoutAutoPlay"))) ? 0 : parseInt(n.getAttribute("timeoutAutoPlay")),
                            lazyLoadVideo: n.hasAttribute("lazyloadVideo")
                        },
                        a = null;
                    if (i.lazyLoadVideo) {
                        var l = y(y({}, i), {}, {
                            autoPlay: !0
                        });
                        o = l, (r = (t = n).querySelector(".tmp-thumb")) && r.addEventListener("click", function(e) {
                            e.preventDefault(), o.isClicked || (o.isClicked = !0, p(t, o))
                        }), i.autoPlay && (a = setTimeout(function() {
                            n.querySelector(".tmp-thumb") && n.querySelector(".tmp-thumb").click(), a = null
                        }, i.timeoutAutoPlay), ["touchstart", "click", "scroll"].forEach(function(e) {
                            window.addEventListener(e, function() {
                                a && (clearTimeout(a), a = null, n.querySelector(".tmp-thumb") && n.querySelector(".tmp-thumb").click())
                            }, {
                                once: !0
                            })
                        }))
                    } else window.ctrwowUtils.isBuilderMode() ? (function(e) {
                        var t = n.querySelector(".tmp-thumb");
                        if (t) {
                            var o = t.getAttribute("data-ctr-lazy-src");
                            o && (t.setAttribute("src", o), t.setAttribute("alt", "video-thumb"))
                        }
                    }(), p(n, i)) : e.initVideoImmediately && !window.ctrwowUtils.detectTestPageSpeed.isDetectTestPageSpeed() ? p(n, i) : function() {
                        if (!window.ctrwowUtils.detectTestPageSpeed.isDetectTestPageSpeed()) {
                            var t = new IntersectionObserver(function(e) {
                                e.forEach(function(e) {
                                    e.isIntersecting && (p(n, i), t.unobserve(e.target))
                                })
                            }, {
                                rootMargin: "0px 0px 300px 0px"
                            });
                            t.observe(n)
                        }
                    }()
                }
            }]).default(this, e)
        } catch (e) {
            console.log("[widget-videos-gjs] controller - exception handler"), console.log(e)
        }
        console.log("[widget-videos-gjs]run controller")
    }).bind(el)(props[el.id])
}
var els;
for (props = {
        it0hv9: {
            locale: "en-US",
            dateformat: '{"year":"numeric","month":"long","day":"2-digit"}',
            daybias: "-1",
            ordinary: !1
        },
        i0973o: {
            locale: "en-US",
            dateformat: '{"year":"numeric","month":"long","day":"2-digit"}',
            daybias: "-4",
            ordinary: !1
        },
        iv8nck: {
            locale: "en-US",
            dateformat: '{"year":"numeric","month":"long","day":"2-digit"}',
            daybias: "-9",
            ordinary: !1
        },
        iuq3no: {
            locale: "en-US",
            dateformat: '{"year":"numeric","month":"long","day":"2-digit"}',
            daybias: "-14",
            ordinary: !1
        },
        ixfwlr: {
            locale: "en-US",
            dateformat: '{"year":"numeric","month":"long","day":"2-digit"}',
            daybias: "-19",
            ordinary: !1
        },
        iz5g69: {
            locale: "en-US",
            dateformat: '{"year":"2-digit","month":"2-digit","day":"2-digit"}',
            daybias: "",
            ordinary: !1
        }
    }, ids = Object.keys(props).map(function(e) {
        return "#" + e
    }).join(","), i = 0, len = (els = document.querySelectorAll(ids)).length; i < len; i++) {
    el = els[i];
    (function(e) {
        try {
            if (console.log(e), window.ctrDebug && window.ctrDebug.run(this, "widget-datetime-gjs", e)) return !0;
            (function(o) {
                var n = {};

                function r(e) {
                    if (n[e]) return n[e].exports;
                    var t = n[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return o[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
                }
                return r.m = o, r.c = n, r.d = function(e, t, o) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: o
                    })
                }, r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.t = function(t, e) {
                    if (1 & e && (t = r(t)), 8 & e) return t;
                    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (r.r(o), Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var n in t) r.d(o, n, function(e) {
                            return t[e]
                        }.bind(null, n));
                    return o
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 0)
            })([function(e, t, o) {
                function n(e, l) {
                    var c = e,
                        t = c.getAttribute("daybias-custom"),
                        d = null;
                    if (t && "" !== t) {
                        var o = t.split("\n");
                        for (var n in o) {
                            var r = o[n].split("|");
                            1 < r.length && (null === d && (d = {}), d[r[0].toLowerCase()] = r[1])
                        }
                    }

                    function i(e) {
                        var t = new Date;
                        try {
                            var o = parseInt(l.daybias) || 0,
                                n = l.locale || "en-US",
                                r = l.dateformat,
                                i = r && JSON.parse(r);
                            e && d && (o = parseInt(d[e.toLowerCase()]));
                            var a = new Date;
                            t = new Date(a.setDate(a.getDate() + o)), c.querySelector(".datetime").innerHTML = new Intl.DateTimeFormat(n, i || {}).format(t)
                        } catch (e) {
                            c.querySelector(".datetime").innerHTML = new Intl.DateTimeFormat("en-US").format(t)
                        }
                    }
                    void 0 !== window.widget__datetime__countryCode ? i(window.widget__datetime__countryCode) : i(null), window.addEventListener("load", function() {
                        var e, t;
                        void 0 === window.widget__datetime__countryCode && d && (e = window.ctrwowUtils.getSalesSupportCRMBaseUrl(), t = "".concat(e, "/campaigns/3230959E-5F07-4D75-B387-2469F6AC1D9B/customers/location"), window.ctrwowUtils.callAjax(t, {
                            headers: {
                                X_CID: "584ea331-0cd2-4c48-85d9-737f9dddfa0b"
                            },
                            "Content-Type": "application/json"
                        }).then(function(e) {
                            e && (i(e.countryCode), window.widget__datetime__countryCode = e.countryCode)
                        }))
                    })
                }
                o.r(t), o.d(t, "default", function() {
                    return n
                })
            }]).default(this, e)
        } catch (e) {
            console.log("[widget-datetime-gjs] controller - exception handler"), console.log(e)
        }
        console.log("[widget-datetime-gjs]run controller")
    }).bind(el)(props[el.id])
}
for (i = 0, len = (items = document.querySelectorAll("#iwis0q")).length; i < len; i++)(function() {
    var i = this,
        a = i.getAttribute("param-control") ? i.getAttribute("param-control") : "";
    ! function() {
        var e = !1;
        if ("" !== a) {
            var t = a.split("=");
            i && i.style && 1 < t.length && window.ctrwowUtils.link.getParameterByName(t[0]) === t[1] && (e = !0)
        }
        if (!0 !== e) {
            var o = !!i.hasAttribute("show-comment-with-action");
            o && !ctrwowUtils.isBuilderMode() && i.querySelector(".comment-content") && i.querySelector(".comment-content").classList.add("hidden");
            var n = i.querySelector(".ctr-handle-toggle-click"),
                r = i.querySelector(".comment-content");
            n && o && n.addEventListener("click", function(e) {
                e.preventDefault(), r.classList.toggle("hidden"), r.scrollIntoView({
                    behavior: "smooth"
                })
            })
        } else i.style.display = "none"
    }()
}).bind(items[i])();
var items;
for (i = 0, len = (items = document.querySelectorAll("#ifsa")).length; i < len; i++)(function() {
    var e;
    (e = document.querySelector(".DMCA_Logo a")) && (e.href += e.href.includes("refurl") ? "" : "&refurl=".concat(location.href))
}).bind(items[i])();;
window.KLAVIYO_PUBLIC_API_KEY = "RfsmyZ";
window.KLAVIYO_BRAND = "SafeCard";
window.KLAVIYO_LIST_ID = "TRZuLF";
window.KLAVIYO_LANDINGPAGE = "https://savvysmartdeals.com/";

function reCheckPageType() {
    //PAGE_TYPE === 2 : checkout
    //PAGE_TYPE === 9 : decline
    //PAGE_TYPE === 7 : confirm
    //PAGE_TYPE === 6 : upsell

    if (window.__CTRWOW_CONFIG.PAGE_TYPE === 2 ||
        window.__CTRWOW_CONFIG.PAGE_TYPE === 9 ||
        window.__CTRWOW_CONFIG.PAGE_TYPE === 7 ||
        window.__CTRWOW_CONFIG.PAGE_TYPE === 6) {
        return true;
    }
    return false;
}

function initKlaviyoLib() {
    if (window.KLAVIYO_PUBLIC_API_KEY && reCheckPageType()) {
        var script = document.createElement('script');
        script.src = 'https://d16hdrba6dusey.cloudfront.net/sitecommon/js/components/klaviyo_wow_v1.js?v=1.0';
        script.async = true;
        document.head.appendChild(script);
    }
}
initKlaviyoLib();;