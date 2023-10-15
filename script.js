window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none"; 
    }, 500); 
});

! function(e) {
    e.fn.viewportChecker = function(t) {
        var i = {
            classToAdd: "visible",
            classToRemove: "invisible",
            classToAddForFullView: "full-visible",
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function(e, t) {},
            scrollHorizontal: !1,
            scrollBox: window
        };
        e.extend(i, t);
        var n = this,
            o = {
                height: e(i.scrollBox).height(),
                width: e(i.scrollBox).width()
            };
        return this.checkElements = function() {
                var t, s;
                i.scrollHorizontal ? (t = Math.max(e("html").scrollLeft(), e("body").scrollLeft(), e(window).scrollLeft()),
                    s = t + o.width) : (t = Math.max(e("html").scrollTop(), e("body").scrollTop(), e(window).scrollTop()),
                    s = t + o.height), n.each(function() {
                    var n = e(this),
                        r = {},
                        a = {};
                    if (n.data("vp-add-class") && (a.classToAdd = n.data("vp-add-class")), n.data("vp-remove-class") && (a.classToRemove = n.data("vp-remove-class")),
                        n.data("vp-add-class-full-view") && (a.classToAddForFullView = n.data("vp-add-class-full-view")),
                        n.data("vp-keep-add-class") && (a.removeClassAfterAnimation = n.data("vp-remove-after-animation")),
                        n.data("vp-offset") && (a.offset = n.data("vp-offset")), n.data("vp-repeat") && (a.repeat = n.data("vp-repeat")),
                        n.data("vp-scrollHorizontal") && (a.scrollHorizontal = n.data("vp-scrollHorizontal")),
                        n.data("vp-invertBottomOffset") && (a.scrollHorizontal = n.data("vp-invertBottomOffset")),
                        e.extend(r, i), e.extend(r, a), !n.data("vp-animated") || r.repeat) {
                        String(r.offset).indexOf("%") > 0 && (r.offset = parseInt(r.offset) / 100 * o.height);
                        var l = r.scrollHorizontal ? n.offset().left : n.offset().top,
                            d = r.scrollHorizontal ? l + n.width() : l + n.height(),
                            c = Math.round(l) + r.offset,
                            p = r.scrollHorizontal ? c + n.width() : c + n.height();
                        r.invertBottomOffset && (p -= 2 * r.offset), c < s && p > t ? (n.removeClass(r.classToRemove),
                            n.addClass(r.classToAdd), r.callbackFunction(n, "add"), d <= s && l >= t ? n.addClass(r.classToAddForFullView) : n.removeClass(r.classToAddForFullView),
                            n.data("vp-animated", !0), r.removeClassAfterAnimation && n.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                n.removeClass(r.classToAdd);
                            })) : n.hasClass(r.classToAdd) && r.repeat && (n.removeClass(r.classToAdd + " " + r.classToAddForFullView),
                            r.callbackFunction(n, "remove"), n.data("vp-animated", !1));
                    }
                });
            }, ("ontouchstart" in window || "onmsgesturechange" in window) && e(document).bind("touchmove MSPointerMove pointermove", this.checkElements),
            e(i.scrollBox).bind("load scroll", this.checkElements), e(window).resize(function(t) {
                o = {
                    height: e(i.scrollBox).height(),
                    width: e(i.scrollBox).width()
                }, n.checkElements();
            }), this.checkElements(), this;
    };
}(jQuery),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper);
}(this, function(e, t, i) {
    "use strict";

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
        }
    }

    function o(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e;
    }

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
        }).apply(this, arguments);
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, i = i && i.hasOwnProperty("default") ? i.default : i;
    var r = function(e) {
            var t = !1;

            function i(t) {
                var i = this,
                    o = !1;
                return e(this).one(n.TRANSITION_END, function() {
                    o = !0;
                }), setTimeout(function() {
                    o || n.triggerTransitionEnd(i);
                }, t), this;
            }
            var n = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) {
                    do {
                        e += ~~(1e6 * Math.random());
                    } while (document.getElementById(e));
                    return e;
                },
                getSelectorFromElement: function(t) {
                    var i = t.getAttribute("data-target");
                    i && "#" !== i || (i = t.getAttribute("href") || ""), "#" === i.charAt(0) && (i = function(t) {
                        return t = "function" == typeof e.escapeSelector ? e.escapeSelector(t).substr(1) : t.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1");
                    }(i));
                    try {
                        return e(document).find(i).length > 0 ? i : null;
                    } catch (e) {
                        return null;
                    }
                },
                reflow: function(e) {
                    return e.offsetHeight;
                },
                triggerTransitionEnd: function(i) {
                    e(i).trigger(t.end);
                },
                supportsTransitionEnd: function() {
                    return Boolean(t);
                },
                isElement: function(e) {
                    return (e[0] || e).nodeType;
                },
                typeCheckConfig: function(e, t, i) {
                    for (var o in i)
                        if (Object.prototype.hasOwnProperty.call(i, o)) {
                            var s = i[o],
                                r = t[o],
                                a = r && n.isElement(r) ? "element" : (l = r, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                            if (!new RegExp(s).test(a)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + s + '".');
                        }
                    var l;
                }
            };
            return t = ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }, e.fn.emulateTransitionEnd = i, n.supportsTransitionEnd() && (e.event.special[n.TRANSITION_END] = {
                bindType: t.end,
                delegateType: t.end,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                }
            }), n;
        }(t),
        a = function(e) {
            var t = e.fn.alert,
                i = {
                    CLOSE: "close.bs.alert",
                    CLOSED: "closed.bs.alert",
                    CLICK_DATA_API: "click.bs.alert.data-api"
                },
                n = "alert",
                s = "fade",
                a = "show",
                l = function() {
                    function t(e) {
                        this._element = e;
                    }
                    var l = t.prototype;
                    return l.close = function(e) {
                        e = e || this._element;
                        var t = this._getRootElement(e);
                        this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
                    }, l.dispose = function() {
                        e.removeData(this._element, "bs.alert"), this._element = null;
                    }, l._getRootElement = function(t) {
                        var i = r.getSelectorFromElement(t),
                            o = !1;
                        return i && (o = e(i)[0]), o || (o = e(t).closest("." + n)[0]), o;
                    }, l._triggerCloseEvent = function(t) {
                        var n = e.Event(i.CLOSE);
                        return e(t).trigger(n), n;
                    }, l._removeElement = function(t) {
                        var i = this;
                        e(t).removeClass(a), r.supportsTransitionEnd() && e(t).hasClass(s) ? e(t).one(r.TRANSITION_END, function(e) {
                            return i._destroyElement(t, e);
                        }).emulateTransitionEnd(150) : this._destroyElement(t);
                    }, l._destroyElement = function(t) {
                        e(t).detach().trigger(i.CLOSED).remove();
                    }, t._jQueryInterface = function(i) {
                        return this.each(function() {
                            var n = e(this),
                                o = n.data("bs.alert");
                            o || (o = new t(this), n.data("bs.alert", o)), "close" === i && o[i](this);
                        });
                    }, t._handleDismiss = function(e) {
                        return function(t) {
                            t && t.preventDefault(), e.close(this);
                        };
                    }, o(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0";
                        }
                    }]), t;
                }();
            return e(document).on(i.CLICK_DATA_API, '[data-dismiss="alert"]', l._handleDismiss(new l())),
                e.fn.alert = l._jQueryInterface, e.fn.alert.Constructor = l, e.fn.alert.noConflict = function() {
                    return e.fn.alert = t, l._jQueryInterface;
                }, l;
        }(t),
        l = function(e) {
            var t = "button",
                i = e.fn[t],
                n = "active",
                s = "btn",
                r = "focus",
                a = '[data-toggle^="button"]',
                l = '[data-toggle="buttons"]',
                d = "input",
                c = ".active",
                p = ".btn",
                u = {
                    CLICK_DATA_API: "click.bs.button.data-api",
                    FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                },
                h = function() {
                    function t(e) {
                        this._element = e;
                    }
                    var i = t.prototype;
                    return i.toggle = function() {
                        var t = !0,
                            i = !0,
                            o = e(this._element).closest(l)[0];
                        if (o) {
                            var s = e(this._element).find(d)[0];
                            if (s) {
                                if ("radio" === s.type)
                                    if (s.checked && e(this._element).hasClass(n)) t = !1;
                                    else {
                                        var r = e(o).find(c)[0];
                                        r && e(r).removeClass(n);
                                    }
                                if (t) {
                                    if (s.hasAttribute("disabled") || o.hasAttribute("disabled") || s.classList.contains("disabled") || o.classList.contains("disabled")) return;
                                    s.checked = !e(this._element).hasClass(n), e(s).trigger("change");
                                }
                                s.focus(), i = !1;
                            }
                        }
                        i && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(n)),
                            t && e(this._element).toggleClass(n);
                    }, i.dispose = function() {
                        e.removeData(this._element, "bs.button"), this._element = null;
                    }, t._jQueryInterface = function(i) {
                        return this.each(function() {
                            var n = e(this).data("bs.button");
                            n || (n = new t(this), e(this).data("bs.button", n)), "toggle" === i && n[i]();
                        });
                    }, o(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0";
                        }
                    }]), t;
                }();
            return e(document).on(u.CLICK_DATA_API, a, function(t) {
                t.preventDefault();
                var i = t.target;
                e(i).hasClass(s) || (i = e(i).closest(p)), h._jQueryInterface.call(e(i), "toggle");
            }).on(u.FOCUS_BLUR_DATA_API, a, function(t) {
                var i = e(t.target).closest(p)[0];
                e(i).toggleClass(r, /^focus(in)?$/.test(t.type));
            }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function() {
                return e.fn[t] = i, h._jQueryInterface;
            }, h;
        }(t),
        d = function(e) {
            var t = "carousel",
                i = "bs.carousel",
                n = "." + i,
                a = e.fn[t],
                l = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                d = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                c = "next",
                p = "prev",
                u = "left",
                h = "right",
                f = {
                    SLIDE: "slide" + n,
                    SLID: "slid" + n,
                    KEYDOWN: "keydown" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n,
                    TOUCHEND: "touchend" + n,
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                },
                g = "carousel",
                m = "active",
                v = "slide",
                w = "carousel-item-right",
                y = "carousel-item-left",
                b = "carousel-item-next",
                _ = "carousel-item-prev",
                C = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                T = function() {
                    function a(t, i) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1,
                            this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i),
                            this._element = e(t)[0], this._indicatorsElement = e(this._element).find(C.INDICATORS)[0],
                            this._addEventListeners();
                    }
                    var T = a.prototype;
                    return T.next = function() {
                        this._isSliding || this._slide(c);
                    }, T.nextWhenVisible = function() {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
                    }, T.prev = function() {
                        this._isSliding || this._slide(p);
                    }, T.pause = function(t) {
                        t || (this._isPaused = !0), e(this._element).find(C.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element),
                            this.cycle(!0)), clearInterval(this._interval), this._interval = null;
                    }, T.cycle = function(e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null),
                            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                    }, T.to = function(t) {
                        var i = this;
                        this._activeElement = e(this._element).find(C.ACTIVE_ITEM)[0];
                        var n = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding) e(this._element).one(f.SLID, function() {
                                return i.to(t);
                            });
                            else {
                                if (n === t) return this.pause(), void this.cycle();
                                var o = t > n ? c : p;
                                this._slide(o, this._items[t]);
                            }
                    }, T.dispose = function() {
                        e(this._element).off(n), e.removeData(this._element, i), this._items = null, this._config = null,
                            this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null,
                            this._activeElement = null, this._indicatorsElement = null;
                    }, T._getConfig = function(e) {
                        return e = s({}, l, e), r.typeCheckConfig(t, e, d), e;
                    }, T._addEventListeners = function() {
                        var t = this;
                        this._config.keyboard && e(this._element).on(f.KEYDOWN, function(e) {
                            return t._keydown(e);
                        }), "hover" === this._config.pause && (e(this._element).on(f.MOUSEENTER, function(e) {
                            return t.pause(e);
                        }).on(f.MOUSELEAVE, function(e) {
                            return t.cycle(e);
                        }), "ontouchstart" in document.documentElement && e(this._element).on(f.TOUCHEND, function() {
                            t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                return t.cycle(e);
                            }, 500 + t._config.interval);
                        }));
                    }, T._keydown = function(e) {
                        if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;

                            case 39:
                                e.preventDefault(), this.next();
                        }
                    }, T._getItemIndex = function(t) {
                        return this._items = e.makeArray(e(t).parent().find(C.ITEM)), this._items.indexOf(t);
                    }, T._getItemByDirection = function(e, t) {
                        var i = e === c,
                            n = e === p,
                            o = this._getItemIndex(t),
                            s = this._items.length - 1;
                        if ((n && 0 === o || i && o === s) && !this._config.wrap) return t;
                        var r = (o + (e === p ? -1 : 1)) % this._items.length;
                        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
                    }, T._triggerSlideEvent = function(t, i) {
                        var n = this._getItemIndex(t),
                            o = this._getItemIndex(e(this._element).find(C.ACTIVE_ITEM)[0]),
                            s = e.Event(f.SLIDE, {
                                relatedTarget: t,
                                direction: i,
                                from: o,
                                to: n
                            });
                        return e(this._element).trigger(s), s;
                    }, T._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            e(this._indicatorsElement).find(C.ACTIVE).removeClass(m);
                            var i = this._indicatorsElement.children[this._getItemIndex(t)];
                            i && e(i).addClass(m);
                        }
                    }, T._slide = function(t, i) {
                        var n, o, s, a = this,
                            l = e(this._element).find(C.ACTIVE_ITEM)[0],
                            d = this._getItemIndex(l),
                            p = i || l && this._getItemByDirection(t, l),
                            g = this._getItemIndex(p),
                            T = Boolean(this._interval);
                        if (t === c ? (n = y, o = b, s = u) : (n = w, o = _, s = h), p && e(p).hasClass(m)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(p, s).isDefaultPrevented() && l && p) {
                            this._isSliding = !0, T && this.pause(), this._setActiveIndicatorElement(p);
                            var k = e.Event(f.SLID, {
                                relatedTarget: p,
                                direction: s,
                                from: d,
                                to: g
                            });
                            r.supportsTransitionEnd() && e(this._element).hasClass(v) ? (e(p).addClass(o), r.reflow(p),
                                e(l).addClass(n), e(p).addClass(n), e(l).one(r.TRANSITION_END, function() {
                                    e(p).removeClass(n + " " + o).addClass(m), e(l).removeClass(m + " " + o + " " + n),
                                        a._isSliding = !1, setTimeout(function() {
                                            return e(a._element).trigger(k);
                                        }, 0);
                                }).emulateTransitionEnd(600)) : (e(l).removeClass(m), e(p).addClass(m), this._isSliding = !1,
                                e(this._element).trigger(k)), T && this.cycle();
                        }
                    }, a._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data(i),
                                o = s({}, l, e(this).data());
                            "object" == typeof t && (o = s({}, o, t));
                            var r = "string" == typeof t ? t : o.slide;
                            if (n || (n = new a(this, o), e(this).data(i, n)), "number" == typeof t) n.to(t);
                            else if ("string" == typeof r) {
                                if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
                                n[r]();
                            } else o.interval && (n.pause(), n.cycle());
                        });
                    }, a._dataApiClickHandler = function(t) {
                        var n = r.getSelectorFromElement(this);
                        if (n) {
                            var o = e(n)[0];
                            if (o && e(o).hasClass(g)) {
                                var l = s({}, e(o).data(), e(this).data()),
                                    d = this.getAttribute("data-slide-to");
                                d && (l.interval = !1), a._jQueryInterface.call(e(o), l), d && e(o).data(i).to(d),
                                    t.preventDefault();
                            }
                        }
                    }, o(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0";
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l;
                        }
                    }]), a;
                }();
            return e(document).on(f.CLICK_DATA_API, C.DATA_SLIDE, T._dataApiClickHandler), e(window).on(f.LOAD_DATA_API, function() {
                e(C.DATA_RIDE).each(function() {
                    var t = e(this);
                    T._jQueryInterface.call(t, t.data());
                });
            }), e.fn[t] = T._jQueryInterface, e.fn[t].Constructor = T, e.fn[t].noConflict = function() {
                return e.fn[t] = a, T._jQueryInterface;
            }, T;
        }(t),
        c = function(e) {
            var t = "collapse",
                i = "bs.collapse",
                n = e.fn[t],
                a = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                d = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                },
                c = "show",
                p = "collapse",
                u = "collapsing",
                h = "collapsed",
                f = "width",
                g = "height",
                m = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                v = function() {
                    function n(t, i) {
                        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i),
                            this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var n = e(m.DATA_TOGGLE), o = 0; o < n.length; o++) {
                            var s = n[o],
                                a = r.getSelectorFromElement(s);
                            null !== a && e(a).filter(t).length > 0 && (this._selector = a, this._triggerArray.push(s));
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                            this._config.toggle && this.toggle();
                    }
                    var v = n.prototype;
                    return v.toggle = function() {
                        e(this._element).hasClass(c) ? this.hide() : this.show();
                    }, v.show = function() {
                        var t, o, s = this;
                        if (!this._isTransitioning && !e(this._element).hasClass(c) && (this._parent && 0 === (t = e.makeArray(e(this._parent).find(m.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (o = e(t).not(this._selector).data(i)) && o._isTransitioning))) {
                            var a = e.Event(d.SHOW);
                            if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                                t && (n._jQueryInterface.call(e(t).not(this._selector), "hide"), o || e(t).data(i, null));
                                var l = this._getDimension();
                                e(this._element).removeClass(p).addClass(u), this._element.style[l] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0),
                                    this.setTransitioning(!0);
                                var f = function() {
                                    e(s._element).removeClass(u).addClass(p).addClass(c), s._element.style[l] = "",
                                        s.setTransitioning(!1), e(s._element).trigger(d.SHOWN);
                                };
                                if (r.supportsTransitionEnd()) {
                                    var g = "scroll" + (l[0].toUpperCase() + l.slice(1));
                                    e(this._element).one(r.TRANSITION_END, f).emulateTransitionEnd(600), this._element.style[l] = this._element[g] + "px";
                                } else f();
                            }
                        }
                    }, v.hide = function() {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(c)) {
                            var i = e.Event(d.HIDE);
                            if (e(this._element).trigger(i), !i.isDefaultPrevented()) {
                                var n = this._getDimension();
                                if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", r.reflow(this._element),
                                    e(this._element).addClass(u).removeClass(p).removeClass(c), this._triggerArray.length > 0)
                                    for (var o = 0; o < this._triggerArray.length; o++) {
                                        var s = this._triggerArray[o],
                                            a = r.getSelectorFromElement(s);
                                        if (null !== a) e(a).hasClass(c) || e(s).addClass(h).attr("aria-expanded", !1);
                                    }
                                this.setTransitioning(!0);
                                var l = function() {
                                    t.setTransitioning(!1), e(t._element).removeClass(u).addClass(p).trigger(d.HIDDEN);
                                };
                                this._element.style[n] = "", r.supportsTransitionEnd() ? e(this._element).one(r.TRANSITION_END, l).emulateTransitionEnd(600) : l();
                            }
                        }
                    }, v.setTransitioning = function(e) {
                        this._isTransitioning = e;
                    }, v.dispose = function() {
                        e.removeData(this._element, i), this._config = null, this._parent = null, this._element = null,
                            this._triggerArray = null, this._isTransitioning = null;
                    }, v._getConfig = function(e) {
                        return (e = s({}, a, e)).toggle = Boolean(e.toggle), r.typeCheckConfig(t, e, l),
                            e;
                    }, v._getDimension = function() {
                        return e(this._element).hasClass(f) ? f : g;
                    }, v._getParent = function() {
                        var t = this,
                            i = null;
                        r.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = e(this._config.parent)[0];
                        var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return e(i).find(o).each(function(e, i) {
                            t._addAriaAndCollapsedClass(n._getTargetFromElement(i), [i]);
                        }), i;
                    }, v._addAriaAndCollapsedClass = function(t, i) {
                        if (t) {
                            var n = e(t).hasClass(c);
                            i.length > 0 && e(i).toggleClass(h, !n).attr("aria-expanded", n);
                        }
                    }, n._getTargetFromElement = function(t) {
                        var i = r.getSelectorFromElement(t);
                        return i ? e(i)[0] : null;
                    }, n._jQueryInterface = function(t) {
                        return this.each(function() {
                            var o = e(this),
                                r = o.data(i),
                                l = s({}, a, o.data(), "object" == typeof t && t);
                            if (!r && l.toggle && /show|hide/.test(t) && (l.toggle = !1), r || (r = new n(this, l),
                                    o.data(i, r)), "string" == typeof t) {
                                if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                r[t]();
                            }
                        });
                    }, o(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0";
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a;
                        }
                    }]), n;
                }();
            return e(document).on(d.CLICK_DATA_API, m.DATA_TOGGLE, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var n = e(this),
                    o = r.getSelectorFromElement(this);
                e(o).each(function() {
                    var t = e(this),
                        o = t.data(i) ? "toggle" : n.data();
                    v._jQueryInterface.call(t, o);
                });
            }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function() {
                return e.fn[t] = n, v._jQueryInterface;
            }, v;
        }(t),
        p = function(e) {
            var t = "dropdown",
                n = "bs.dropdown",
                a = "." + n,
                l = e.fn[t],
                d = new RegExp("38|40|27"),
                c = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK: "click" + a,
                    CLICK_DATA_API: "click.bs.dropdown.data-api",
                    KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                    KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                },
                p = "disabled",
                u = "show",
                h = "dropup",
                f = "dropright",
                g = "dropleft",
                m = "dropdown-menu-right",
                v = "dropdown-menu-left",
                w = "position-static",
                y = '[data-toggle="dropdown"]',
                b = ".dropdown form",
                _ = ".dropdown-menu",
                C = ".navbar-nav",
                T = ".dropdown-menu .dropdown-item:not(.disabled)",
                k = "top-start",
                S = "top-end",
                A = "bottom-start",
                $ = "bottom-end",
                x = "right-start",
                E = "left-start",
                I = {
                    offset: 0,
                    flip: !0,
                    boundary: "scrollParent"
                },
                O = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)"
                },
                D = function() {
                    function l(e, t) {
                        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(),
                            this._inNavbar = this._detectNavbar(), this._addEventListeners();
                    }
                    var b = l.prototype;
                    return b.toggle = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(p)) {
                            var t = l._getParentFromElement(this._element),
                                n = e(this._menu).hasClass(u);
                            if (l._clearMenus(), !n) {
                                var o = {
                                        relatedTarget: this._element
                                    },
                                    s = e.Event(c.SHOW, o);
                                if (e(t).trigger(s), !s.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var r = this._element;
                                        e(t).hasClass(h) && (e(this._menu).hasClass(v) || e(this._menu).hasClass(m)) && (r = t),
                                            "scrollParent" !== this._config.boundary && e(t).addClass(w), this._popper = new i(r, this._menu, this._getPopperConfig());
                                    }
                                    "ontouchstart" in document.documentElement && 0 === e(t).closest(C).length && e("body").children().on("mouseover", null, e.noop),
                                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(u),
                                        e(t).toggleClass(u).trigger(e.Event(c.SHOWN, o));
                                }
                            }
                        }
                    }, b.dispose = function() {
                        e.removeData(this._element, n), e(this._element).off(a), this._element = null, this._menu = null,
                            null !== this._popper && (this._popper.destroy(), this._popper = null);
                    }, b.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
                    }, b._addEventListeners = function() {
                        var t = this;
                        e(this._element).on(c.CLICK, function(e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle();
                        });
                    }, b._getConfig = function(i) {
                        return i = s({}, this.constructor.Default, e(this._element).data(), i), r.typeCheckConfig(t, i, this.constructor.DefaultType),
                            i;
                    }, b._getMenuElement = function() {
                        if (!this._menu) {
                            var t = l._getParentFromElement(this._element);
                            this._menu = e(t).find(_)[0];
                        }
                        return this._menu;
                    }, b._getPlacement = function() {
                        var t = e(this._element).parent(),
                            i = A;
                        return t.hasClass(h) ? (i = k, e(this._menu).hasClass(m) && (i = S)) : t.hasClass(f) ? i = x : t.hasClass(g) ? i = E : e(this._menu).hasClass(m) && (i = $),
                            i;
                    }, b._detectNavbar = function() {
                        return e(this._element).closest(".navbar").length > 0;
                    }, b._getPopperConfig = function() {
                        var e = this,
                            t = {};
                        return "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t;
                        } : t.offset = this._config.offset, {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: t,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        };
                    }, l._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n);
                            if (i || (i = new l(this, "object" == typeof t ? t : null), e(this).data(n, i)),
                                "string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]();
                            }
                        });
                    }, l._clearMenus = function(t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var i = e.makeArray(e(y)), o = 0; o < i.length; o++) {
                                var s = l._getParentFromElement(i[o]),
                                    r = e(i[o]).data(n),
                                    a = {
                                        relatedTarget: i[o]
                                    };
                                if (r) {
                                    var d = r._menu;
                                    if (e(s).hasClass(u) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(s, t.target))) {
                                        var p = e.Event(c.HIDE, a);
                                        e(s).trigger(p), p.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop),
                                            i[o].setAttribute("aria-expanded", "false"), e(d).removeClass(u), e(s).removeClass(u).trigger(e.Event(c.HIDDEN, a)));
                                    }
                                }
                            }
                    }, l._getParentFromElement = function(t) {
                        var i, n = r.getSelectorFromElement(t);
                        return n && (i = e(n)[0]), i || t.parentNode;
                    }, l._dataApiKeydownHandler = function(t) {
                        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(_).length)) : d.test(t.which)) && (t.preventDefault(),
                                t.stopPropagation(), !this.disabled && !e(this).hasClass(p))) {
                            var i = l._getParentFromElement(this),
                                n = e(i).hasClass(u);
                            if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                                var o = e(i).find(T).get();
                                if (0 !== o.length) {
                                    var s = o.indexOf(t.target);
                                    38 === t.which && s > 0 && s--, 40 === t.which && s < o.length - 1 && s++, s < 0 && (s = 0),
                                        o[s].focus();
                                }
                            } else {
                                if (27 === t.which) {
                                    var r = e(i).find(y)[0];
                                    e(r).trigger("focus");
                                }
                                e(this).trigger("click");
                            }
                        }
                    }, o(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0";
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return I;
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return O;
                        }
                    }]), l;
                }();
            return e(document).on(c.KEYDOWN_DATA_API, y, D._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, _, D._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, D._clearMenus).on(c.CLICK_DATA_API, y, function(t) {
                t.preventDefault(), t.stopPropagation(), D._jQueryInterface.call(e(this), "toggle");
            }).on(c.CLICK_DATA_API, b, function(e) {
                e.stopPropagation();
            }), e.fn[t] = D._jQueryInterface, e.fn[t].Constructor = D, e.fn[t].noConflict = function() {
                return e.fn[t] = l, D._jQueryInterface;
            }, D;
        }(t),
        u = function(e) {
            var t = "modal",
                i = ".bs.modal",
                n = e.fn.modal,
                a = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                l = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                d = {
                   
                },
                c = "modal-scrollbar-measure",
                p = "modal-backdrop",
                u = "modal-open",
                h = "fade",
                f = "show",
                g = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                m = function() {
                    function n(t, i) {
                        this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(g.DIALOG)[0],
                            this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1,
                            this._originalBodyPadding = 0, this._scrollbarWidth = 0;
                    }
                    var m = n.prototype;
                    return m.toggle = function(e) {
                        return this._isShown ? this.hide() : this.show(e);
                    }, m.show = function(t) {
                        var i = this;
                        if (!this._isTransitioning && !this._isShown) {
                            r.supportsTransitionEnd() && e(this._element).hasClass(h) && (this._isTransitioning = !0);
                            var n = e.Event(d.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                                this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(u),
                                this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(d.CLICK_DISMISS, g.DATA_DISMISS, function(e) {
                                    return i.hide(e);
                                }), e(this._dialog).on(d.MOUSEDOWN_DISMISS, function() {
                                    e(i._element).one(d.MOUSEUP_DISMISS, function(t) {
                                        e(t.target).is(i._element) && (i._ignoreBackdropClick = !0);
                                    });
                                }), this._showBackdrop(function() {
                                    return i._showElement(t);
                                }));
                        }
                    }, m.hide = function(t) {
                        var i = this;
                        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                            var n = e.Event(d.HIDE);
                            if (e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                this._isShown = !1;
                                var o = r.supportsTransitionEnd() && e(this._element).hasClass(h);
                                o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(),
                                    e(document).off(d.FOCUSIN), e(this._element).removeClass(f), e(this._element).off(d.CLICK_DISMISS),
                                    e(this._dialog).off(d.MOUSEDOWN_DISMISS), o ? e(this._element).one(r.TRANSITION_END, function(e) {
                                        return i._hideModal(e);
                                    }).emulateTransitionEnd(300) : this._hideModal();
                            }
                        }
                    }, m.dispose = function() {
                        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(i),
                            this._config = null, this._element = null, this._dialog = null, this._backdrop = null,
                            this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null,
                            this._scrollbarWidth = null;
                    }, m.handleUpdate = function() {
                        this._adjustDialog();
                    }, m._getConfig = function(e) {
                        return e = s({}, a, e), r.typeCheckConfig(t, e, l), e;
                    }, m._showElement = function(t) {
                        var i = this,
                            n = r.supportsTransitionEnd() && e(this._element).hasClass(h);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                            this._element.style.display = "block", this._element.removeAttribute("aria-hidden"),
                            this._element.scrollTop = 0, n && r.reflow(this._element), e(this._element).addClass(f),
                            this._config.focus && this._enforceFocus();
                        var o = e.Event(d.SHOWN, {
                                relatedTarget: t
                            }),
                            s = function() {
                                i._config.focus && i._element.focus(), i._isTransitioning = !1, e(i._element).trigger(o);
                            };
                        n ? e(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(300) : s();
                    }, m._enforceFocus = function() {
                        var t = this;
                        e(document).off(d.FOCUSIN).on(d.FOCUSIN, function(i) {
                            document !== i.target && t._element !== i.target && 0 === e(t._element).has(i.target).length && t._element.focus();
                        });
                    }, m._setEscapeEvent = function() {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(d.KEYDOWN_DISMISS, function(e) {
                            27 === e.which && (e.preventDefault(), t.hide());
                        }) : this._isShown || e(this._element).off(d.KEYDOWN_DISMISS);
                    }, m._setResizeEvent = function() {
                        var t = this;
                        this._isShown ? e(window).on(d.RESIZE, function(e) {
                            return t.handleUpdate(e);
                        }) : e(window).off(d.RESIZE);
                    }, m._hideModal = function() {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0),
                            this._isTransitioning = !1, this._showBackdrop(function() {
                                e(document.body).removeClass(u), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(d.HIDDEN);
                            });
                    }, m._removeBackdrop = function() {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
                    }, m._showBackdrop = function(t) {
                        var i = this,
                            n = e(this._element).hasClass(h) ? h : "";
                        if (this._isShown && this._config.backdrop) {
                            var o = r.supportsTransitionEnd() && n;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = p,
                                n && e(this._backdrop).addClass(n), e(this._backdrop).appendTo(document.body), e(this._element).on(d.CLICK_DISMISS, function(e) {
                                    i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide());
                                }), o && r.reflow(this._backdrop), e(this._backdrop).addClass(f), !t) return;
                            if (!o) return void t();
                            e(this._backdrop).one(r.TRANSITION_END, t).emulateTransitionEnd(150);
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(f);
                            var s = function() {
                                i._removeBackdrop(), t && t();
                            };
                            r.supportsTransitionEnd() && e(this._element).hasClass(h) ? e(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s();
                        } else t && t();
                    }, m._adjustDialog = function() {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                    }, m._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
                    
                    }, m._setScrollbar = function() {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            e(g.FIXED_CONTENT).each(function(i, n) {
                                var o = e(n)[0].style.paddingRight,
                                    s = e(n).css("padding-right");
                                e(n).data("padding-right", o).css("padding-right", parseFloat(s) + t._scrollbarWidth + "px");
                            }), e(g.STICKY_CONTENT).each(function(i, n) {
                                var o = e(n)[0].style.marginRight,
                                    s = e(n).css("margin-right");
                                e(n).data("margin-right", o).css("margin-right", parseFloat(s) - t._scrollbarWidth + "px");
                            }), e(g.NAVBAR_TOGGLER).each(function(i, n) {
                                var o = e(n)[0].style.marginRight,
                                    s = e(n).css("margin-right");
                                e(n).data("margin-right", o).css("margin-right", parseFloat(s) + t._scrollbarWidth + "px");
                            });
                            var i = document.body.style.paddingRight,
                                n = e("body").css("padding-right");
                            e("body").data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px");
                        }
                    }, m._resetScrollbar = function() {
                        e(g.FIXED_CONTENT).each(function(t, i) {
                            var n = e(i).data("padding-right");
                            void 0 !== n && e(i).css("padding-right", n).removeData("padding-right");
                        }), e(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function(t, i) {
                            var n = e(i).data("margin-right");
                            void 0 !== n && e(i).css("margin-right", n).removeData("margin-right");
                        });
                        var t = e("body").data("padding-right");
                        void 0 !== t && e("body").css("padding-right", t).removeData("padding-right");
                    }, m._getScrollbarWidth = function() {
                        var e = document.createElement("div");
                        e.className = c, document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t;
                    }, n._jQueryInterface = function(t, i) {
                        return this.each(function() {
                            var o = e(this).data("bs.modal"),
                                r = s({}, n.Default, e(this).data(), "object" == typeof t && t);
                            if (o || (o = new n(this, r), e(this).data("bs.modal", o)), "string" == typeof t) {
                                if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                                o[t](i);
                            } else r.show && o.show(i);
                        });
                    }, o(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0";
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a;
                        }
                    }]), n;
                }();
            return e(document).on(d.CLICK_DATA_API, g.DATA_TOGGLE, function(t) {
                var i, n = this,
                    o = r.getSelectorFromElement(this);
                o && (i = e(o)[0]);
                var a = e(i).data("bs.modal") ? "toggle" : s({}, e(i).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var l = e(i).one(d.SHOW, function(t) {
                    t.isDefaultPrevented() || l.one(d.HIDDEN, function() {
                        e(n).is(":visible") && n.focus();
                    });
                });
                m._jQueryInterface.call(e(i), a, this);
            }), e.fn.modal = m._jQueryInterface, e.fn.modal.Constructor = m, e.fn.modal.noConflict = function() {
                return e.fn.modal = n, m._jQueryInterface;
            }, m;
        }(t),
        h = function(e) {
            var t = "tooltip",
                n = ".bs.tooltip",
                a = e.fn[t],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                d = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                },
                c = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                
                u = "show",
                h = "out",
                f = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                },
                g = "fade",
                m = "show",
                v = ".tooltip-inner",
                w = ".arrow",
                y = "hover",
                b = "focus",
                _ = "click",
                C = "manual",
                T = function() {
                    function a(e, t) {
                        if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {},
                            this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null,
                            this._setListeners();
                    }
                    var T = a.prototype;
                    return T.enable = function() {
                        this._isEnabled = !0;
                    }, T.disable = function() {
                        this._isEnabled = !1;
                    }, T.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled;
                    }, T.toggle = function(t) {
                        if (this._isEnabled)
                            if (t) {
                                var i = this.constructor.DATA_KEY,
                                    n = e(t.currentTarget).data(i);
                                n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)),
                                    n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                            } else {
                                if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                                this._enter(null, this);
                            }
                    },  T.setElementContent = function(t, i) {
                        var n = this.config.html;
                        "object" == typeof i && (i.nodeType || i.jquery) ? n ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text()) : t[n ? "html" : "text"](i);
                    }, T.getTitle = function() {}, T._getAttachment = function(e) {
                        return c[e.toUpperCase()];
                    }, T._isWithActiveTrigger = function() {
                        for (var e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1;
                    },  T._fixTransition = function() {
                        var t = this.getTipElement(),
                            i = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1,
                            this.hide(), this.show(), this.config.animation = i);
                    }, a._jQueryInterface = function(t) { }, o(a, null, []), a;
                }();
            return e.fn[t] = T._jQueryInterface, e.fn[t].Constructor = T, e.fn[t].noConflict = function() {
                return e.fn[t] = a, T._jQueryInterface;
            }, T;
        }(t),
        f = function(e) {
            var t = "popover",
                i = ".bs.popover",
                n = e.fn[t],
                r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                a = s({}, h.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                l = s({}, h.DefaultType, {
                    content: "(string|element|function)"
                }),
                d = "fade",
                c = "show",
                p = ".popover-header",
                u = ".popover-body",
                f = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                g = function(n) {
                    var s, h;

                    function g() {
                        return n.apply(this, arguments) || this;
                    }
                    h = n, (s = g).prototype = Object.create(h.prototype), s.prototype.constructor = s,
                        s.__proto__ = h;
                    var m = g.prototype;
                    return m.isWithContent = function() {
                        return this.getTitle() || this._getContent();
                    }, m.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t);
                    }, m.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip;
                    }, m.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(p), this.getTitle());
                        var i = this._getContent();
                        "function" == typeof i && (i = i.call(this.element)), this.setElementContent(t.find(u), i),
                            t.removeClass(d + " " + c);
                    }, m._getContent = function() {
                        return this.element.getAttribute("data-content") || this.config.content;
                    }, m._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            i = t.attr("class").match(r);
                        null !== i && i.length > 0 && t.removeClass(i.join(""));
                    }, g._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data("bs.popover"),
                                n = "object" == typeof t ? t : null;
                            if ((i || !/destroy|hide/.test(t)) && (i || (i = new g(this, n), e(this).data("bs.popover", i)),
                                    "string" == typeof t)) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t]();
                            }
                        });
                    }, o(g, null, []), g;
                }(h);
            return e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function() {
                return e.fn[t] = n, g._jQueryInterface;
            }, g;
        }(t),
        g = function(e) {
            var t = "scrollspy",
                i = e.fn[t],
                n = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                a = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                l = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                },
                d = "dropdown-item",
                c = "active",
                p = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                u = "offset",
                h = "position",
                f = function() {
                    function i(t, i) {
                        var n = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i),
                            this._selector = this._config.target + " " + p.NAV_LINKS + "," + this._config.target + " " + p.LIST_ITEMS + "," + this._config.target + " " + p.DROPDOWN_ITEMS,
                            this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0,
                            e(this._scrollElement).on(l.SCROLL, function(e) {
                                return n._process(e);
                            }), this.refresh(), this._process();
                    }
                    var f = i.prototype;
                    return f.refresh = function() {
                        var t = this,
                            i = this._scrollElement === this._scrollElement.window ? u : h,
                            n = "auto" === this._config.method ? i : this._config.method,
                            o = n === h ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(),
                            e.makeArray(e(this._selector)).map(function(t) {
                                var i, s = r.getSelectorFromElement(t);
                                if (s && (i = e(s)[0]), i) {
                                    var a = i.getBoundingClientRect();
                                    if (a.width || a.height) return [e(i)[n]().top + o, s];
                                }
                                return null;
                            }).filter(function(e) {
                                return e;
                            }).sort(function(e, t) {
                                return e[0] - t[0];
                            }).forEach(function(e) {
                                t._offsets.push(e[0]), t._targets.push(e[1]);
                            });
                    }, f.dispose = function() {
                        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"),
                            this._element = null, this._scrollElement = null, this._config = null, this._selector = null,
                            this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
                    }, f._getConfig = function(i) {
                        if ("string" != typeof(i = s({}, n, i)).target) {
                            var o = e(i.target).attr("id");
                            o || (o = r.getUID(t), e(i.target).attr("id", o)), i.target = "#" + o;
                        }
                        return r.typeCheckConfig(t, i, a), i;
                    }, f._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                    }, f._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                    
                    }, f._process = function() {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            i = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= i) {
                            var n = this._targets[this._targets.length - 1];
                            this._activeTarget !== n && this._activate(n);
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null,
                                void this._clear();
                            for (var o = this._offsets.length; o--;) {
                                this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
                            }
                        }
                    }, f._activate = function(t) {
                        this._activeTarget = t, this._clear();
                        var i = this._selector.split(",");
                        i = i.map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                        });
                        var n = e(i.join(","));
                        n.hasClass(d) ? (n.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(c), n.addClass(c)) : (n.addClass(c),
                                n.parents(p.NAV_LIST_GROUP).prev(p.NAV_LINKS + ", " + p.LIST_ITEMS).addClass(c),
                                n.parents(p.NAV_LIST_GROUP).prev(p.NAV_ITEMS).children(p.NAV_LINKS).addClass(c)),
                            e(this._scrollElement).trigger(l.ACTIVATE, {
                                relatedTarget: t
                            });
                    }, f._clear = function() {
                        e(this._selector).filter(p.ACTIVE).removeClass(c);
                    }, i._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data("bs.scrollspy");
                            if (n || (n = new i(this, "object" == typeof t && t), e(this).data("bs.scrollspy", n)),
                                "string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]();
                            }
                        });
                    }, o(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0";
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return n;
                        }
                    }]), i;
                }();
            return e(window).on(l.LOAD_DATA_API, function() {
                for (var t = e.makeArray(e(p.DATA_SPY)), i = t.length; i--;) {
                    var n = e(t[i]);
                    f._jQueryInterface.call(n, n.data());
                }
            }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() {
                return e.fn[t] = i, f._jQueryInterface;
            }, f;
        }(t),
        m = function(e) {
            var t = e.fn.tab,
                i = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                n = "dropdown-menu",
                s = "active",
                a = "disabled",
                l = "fade",
                d = "show",
                c = ".dropdown",
                p = ".nav, .list-group",
                u = ".active",
                h = "> li > .active",
                f = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                g = ".dropdown-toggle",
                m = "> .dropdown-menu .active",
                v = function() {
                    function t(e) {
                        this._element = e;
                    }
                    var f = t.prototype;
                    return f.show = function() {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(s) || e(this._element).hasClass(a))) {
                            var n, o, l = e(this._element).closest(p)[0],
                                d = r.getSelectorFromElement(this._element);
                            if (l) {
                                var c = "UL" === l.nodeName ? h : u;
                                o = (o = e.makeArray(e(l).find(c)))[o.length - 1];
                            }
                            var f = e.Event(i.HIDE, {
                                    relatedTarget: this._element
                                }),
                                g = e.Event(i.SHOW, {
                                    relatedTarget: o
                                });
                            if (o && e(o).trigger(f), e(this._element).trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                                d && (n = e(d)[0]), this._activate(this._element, l);
                                var m = function() {
                                    var n = e.Event(i.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        s = e.Event(i.SHOWN, {
                                            relatedTarget: o
                                        });
                                    e(o).trigger(n), e(t._element).trigger(s);
                                };
                                n ? this._activate(n, n.parentNode, m) : m();
                            }
                        }
                    }, f.dispose = function() {
                        e.removeData(this._element, "bs.tab"), this._element = null;
                    }, f._activate = function(t, i, n) {
                        var o = this,
                            s = ("UL" === i.nodeName ? e(i).find(h) : e(i).children(u))[0],
                            a = n && r.supportsTransitionEnd() && s && e(s).hasClass(l),
                            d = function() {
                                return o._transitionComplete(t, s, n);
                            };
                        s && a ? e(s).one(r.TRANSITION_END, d).emulateTransitionEnd(150) : d();
                    }, f._transitionComplete = function(t, i, o) {
                        if (i) {
                            e(i).removeClass(d + " " + s);
                            var a = e(i.parentNode).find(m)[0];
                            a && e(a).removeClass(s), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1);
                        }
                        if (e(t).addClass(s), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                            r.reflow(t), e(t).addClass(d), t.parentNode && e(t.parentNode).hasClass(n)) {
                            var l = e(t).closest(c)[0];
                            l && e(l).find(g).addClass(s), t.setAttribute("aria-expanded", !0);
                        }
                        o && o();
                    }, t._jQueryInterface = function(i) {
                        return this.each(function() {
                            var n = e(this),
                                o = n.data("bs.tab");
                            if (o || (o = new t(this), n.data("bs.tab", o)), "string" == typeof i) {
                                if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"');
                                o[i]();
                            }
                        });
                    }, o(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0";
                        }
                    }]), t;
                }();
            return e(document).on(i.CLICK_DATA_API, f, function(t) {
                t.preventDefault(), v._jQueryInterface.call(e(this), "show");
            }), e.fn.tab = v._jQueryInterface, e.fn.tab.Constructor = v, e.fn.tab.noConflict = function() {
                return e.fn.tab = t, v._jQueryInterface;
            }, v;
        }(t);
    ! function(e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(t), e.Util = r, e.Alert = a, e.Button = l, e.Carousel = d, e.Collapse = c, e.Dropdown = p,
        e.Modal = u, e.Popover = f, e.Scrollspy = g, e.Tab = m, e.Tooltip = h, Object.defineProperty(e, "__esModule", {
            value: !0
        });
}),
function(e) {}("undefined" != typeof module && module.exports ? module : window);

var fixto = function(e, t, i) {
    var n = function() {}(),
        o = function() {}();

    function s() {
        this._vendor = null;
    }
    s.prototype = {
        _vendors: {
            webkit: {
                cssPrefix: "-webkit-",
                jsPrefix: "Webkit"
            },
            moz: {
                cssPrefix: "-moz-",
                jsPrefix: "Moz"
            },
            ms: {
                cssPrefix: "-ms-",
                jsPrefix: "ms"
            },
            opera: {
                cssPrefix: "-o-",
                jsPrefix: "O"
            }
        },
        _prefixJsProperty: function(e, t) {
            return e.jsPrefix + t[0].toUpperCase() + t.substr(1);
        },
        _prefixValue: function(e, t) {
            return e.cssPrefix + t;
        },
        _valueSupported: function(e, t, i) {
            try {
                return i.style[e] = t, i.style[e] === t;
            } catch (e) {
                return !1;
            }
        },
        propertySupported: function(e) {
            return void 0 !== i.documentElement.style[e];
        },
        getJsProperty: function(e) {
            if (this.propertySupported(e)) return e;
            if (this._vendor) return this._prefixJsProperty(this._vendor, e);
            var t;
            for (var i in this._vendors)
                if (t = this._prefixJsProperty(this._vendors[i], e),
                    this.propertySupported(t)) return this._vendor = this._vendors[i], t;
            return null;
        },
        getCssValue: function(e, t) {
            var n, o = i.createElement("div"),
                s = this.getJsProperty(e);
            if (this._valueSupported(s, t, o)) return t;
            if (this._vendor && (n = this._prefixValue(this._vendor, t), this._valueSupported(s, n, o))) return n;
            for (var r in this._vendors)
                if (n = this._prefixValue(this._vendors[r], t), this._valueSupported(s, n, o)) return this._vendor = this._vendors[r],
                    n;
            return null;
        }
    };
    var r, a = new s(),
        l = a.getJsProperty("transform");
    var d, c = a.getCssValue("position", "sticky"),
        p = a.getCssValue("position", "fixed");

    function u(t, i, n) {
        this.child = t, this._$child = e(t), this.parent = i, this.options = {
            className: "fixto-fixed",
            top: 0
        }, this._setOptions(n);
    }

    function h(e, t, i) {
        u.call(this, e, t, i), this._replacer = new o.MimicNode(e), this._ghostNode = this._replacer.replacer,
            this._saveStyles(), this._saveViewportHeight(), this._proxied_onscroll = this._bind(this._onscroll, this),
            this._proxied_onresize = this._bind(this._onresize, this), this.start();
    }

    function f(e, t, i) {
        u.call(this, e, t, i), this.start();
    }
    "Microsoft Internet Explorer" === navigator.appName && (d = parseFloat(navigator.appVersion.split("MSIE")[1])),
        u.prototype = {
            _mindtop: function() {
                var e = 0;
                if (this._$mind)
                    for (var t, i, o = 0, s = this._$mind.length; o < s; o++)
                        if ((i = (t = this._$mind[o]).getBoundingClientRect()).height) e += i.height;
                        else {
                            var r = n.getAll(t);
                            e += t.offsetHeight + n.toFloat(r.marginTop) + n.toFloat(r.marginBottom);
                        }
                return e;
            },
            stop: function() {
                this._stop(), this._running = !1;
            },
            start: function() {
                this._running || (this._start(), this._running = !0);
            },
            destroy: function() {
                for (var e in this.stop(), this._destroy(), this._$child.removeData("fixto-instance"),
                        this) this.hasOwnProperty(e) && (this[e] = null);
            },
            _setOptions: function(t) {
                e.extend(this.options, t), this.options.mind && (this._$mind = e(this.options.mind)),
                    this.options.zIndex && (this.child.style.zIndex = this.options.zIndex);
            },
            setOptions: function(e) {
                this._setOptions(e), this.refresh();
            },
            _stop: function() {},
            _start: function() {},
            _destroy: function() {},
            refresh: function() {}
        }, h.prototype = new u(), e.extend(h.prototype, {
            _bind: function(e, t) {
                return function() {
                    return e.call(t);
                };
            },
            _toresize: 8 === d ? i.documentElement : t,
            _onscroll: function() {
                if (this._scrollTop = i.documentElement.scrollTop || i.body.scrollTop, this._parentBottom = this.parent.offsetHeight + this._fullOffset("offsetTop", this.parent), !1 !== this.options.mindBottomPadding && (this._parentBottom -= n.getFloat(this.parent, "paddingBottom")),
                    this.fixed) {
                    if (this._scrollTop > this._parentBottom || this._scrollTop < this._fullOffset("offsetTop", this._ghostNode) - this.options.top - this._mindtop()) return void this._unfix();
                    this._adjust();
                } else {
                    var e = n.getAll(this.child);
                    this._scrollTop < this._parentBottom && this._scrollTop > this._fullOffset("offsetTop", this.child) - this.options.top - this._mindtop() && this._viewportHeight > this.child.offsetHeight + n.toFloat(e.marginTop) + n.toFloat(e.marginBottom) && (this._fix(),
                        this._adjust());
                }
            },
            _adjust: function() {
                var e = 0,
                    t = this._mindtop(),
                    i = 0,
                    o = n.getAll(this.child),
                    s = null;
                r && (s = this._getContext()) && (e = Math.abs(s.getBoundingClientRect().top)),
                    (i = this._parentBottom - this._scrollTop - (this.child.offsetHeight + n.toFloat(o.marginBottom) + t + this.options.top)) > 0 && (i = 0),
                    this.child.style.top = i + t + e + this.options.top - n.toFloat(o.marginTop) + "px";
            },
            _fullOffset: function(e, t, i) {
                for (var n = t[e], o = t.offsetParent; null !== o && o !== i;) n += o[e], o = o.offsetParent;
                return n;
            },
            _getContext: function() {
                for (var e, t = this.child, o = null; !o;) {
                    if ((e = t.parentNode) === i.documentElement) return null;
                    if ("none" !== n.getAll(e)[l]) {
                        o = e;
                        break;
                    }
                    t = e;
                }
                return o;
            },
            _fix: function() {
                var e = this.child,
                    t = e.style,
                    o = n.getAll(e),
                    s = e.getBoundingClientRect().left,
                    a = o.width;
                if (this._saveStyles(), i.documentElement.currentStyle && (a = e.offsetWidth - (n.toFloat(o.paddingLeft) + n.toFloat(o.paddingRight) + n.toFloat(o.borderLeftWidth) + n.toFloat(o.borderRightWidth)) + "px"),
                    r) {
                    var l = this._getContext();
                    l && (s = e.getBoundingClientRect().left - l.getBoundingClientRect().left);
                }
                this._replacer.replace(), t.left = s - n.toFloat(o.marginLeft) + "px", t.width = a,
                    t.position = "fixed", t.top = this._mindtop() + this.options.top - n.toFloat(o.marginTop) + "px",
                    this._$child.addClass(this.options.className), this.fixed = !0;
            },
            _unfix: function() {
                var e = this.child.style;
                this._replacer.hide(), e.position = this._childOriginalPosition, e.top = this._childOriginalTop,
                    e.width = this._childOriginalWidth, e.left = this._childOriginalLeft, this._$child.removeClass(this.options.className),
                    this.fixed = !1;
            },
            _saveStyles: function() {
                var e = this.child.style;
                this._childOriginalPosition = e.position, this._childOriginalTop = e.top, this._childOriginalWidth = e.width,
                    this._childOriginalLeft = e.left;
            },
            _onresize: function() {
                this.refresh();
            },
            
            _stop: function() {
                this._unfix(), e(t).unbind("scroll", this._proxied_onscroll), e(this._toresize).unbind("resize", this._proxied_onresize);
            },
            _start: function() {
                this._onscroll(), e(t).bind("scroll", this._proxied_onscroll), e(this._toresize).bind("resize", this._proxied_onresize);
            },
            _destroy: function() {
                this._replacer.destroy();
            },
            refresh: function() {
                this._saveViewportHeight(), this._unfix(), this._onscroll();
            }
        }), f.prototype = new u(), e.extend(f.prototype, {
            _start: function() {
                var e = n.getAll(this.child);
                this._childOriginalPosition = e.position, this._childOriginalTop = e.top, this.child.style.position = c,
                    this.refresh();
            },
            _stop: function() {
                this.child.style.position = this._childOriginalPosition, this.child.style.top = this._childOriginalTop;
            },
            refresh: function() {
                this.child.style.top = this._mindtop() + this.options.top + "px";
            }
        });
    var g = function(e, t, n) {
        return c && !n || c && n && !1 !== n.useNativeSticky ? new f(e, t, n) : p ? (void 0 === r && (o = !1,
            s = i.createElement("div"), a = i.createElement("div"), s.appendChild(a), s.style[l] = "translate(0)",
            s.style.marginTop = "10px", s.style.visibility = "hidden", a.style.position = "fixed",
            a.style.top = 0, i.body.appendChild(s), a.getBoundingClientRect().top > 0 && (o = !0),
            i.body.removeChild(s), r = o), new h(e, t, n)) : "Neither fixed nor sticky positioning supported";
        var o, s, a;
    };
    return d < 8 && (g = function() {
        return "not supported";
    }), e.fn.fixTo = function(t, i) {
        var n = e(t),
            o = 0;
        return this.each(function() {
            var s = e(this).data("fixto-instance");
            s ? s[t].call(s, i) : e(this).data("fixto-instance", g(this, n[o], i));
            o++;
        });
    }, {
        FixToContainer: h,
        fixTo: g,
        computedStyle: n,
        mimicNode: o
    };
}(window.jQuery, window, document);

! function(e) {
    e.fn.validateOnBlur = function(t, i) {}, e.fn.validateOnEvent = function(t, i) {};
    var l = 0;
    e.fn.showHelpOnFocus = function(t) {}, e.fn.validate = function(t, i, n) {},
     e.fn.willPostponeValidation = function() {}, 
     e.fn.validateInputOnBlur = function(t, r, a, l) {}, e.fn.valAttr = function(e, t) {},
      e.fn.isValid = function(l, d, c) { }, e.fn.validateForm = function(e, t) {},
       e.fn.restrictLength = function(t) {}, e.fn.addSuggestions = function(t) {},
        e.split = function(t, i) {}, e.validate = function(i) {}, e.formUtils = {
        defaultConfig: function() {},
        validators: {},
        _events: {},
        haltValidation: !1,
        isValidatingEntireForm: !1,
        addValidator: function(e) {},
        isLoadingModules: !1,
        loadedModules: {},
        loadModules: function(i, n, o) {},
        validateInput: function(t, i, n, o, s) {},
        parseDate: function(t, i) {},
        parseDateInt: function(e) {},
        isShortMonth: function(e) {},
        lengthRestriction: function(t, i) {},
        numericRangeCheck: function(t, i) {},
        _numSuggestionElements: 0,
        _selectedSuggestion: null,
        _previousTypedVal: null,
        
        
    }, e.formUtils.addValidator(), e.formUtils.addValidator(),
     e.formUtils.addValidator(), e.formUtils.addValidator(), e.formUtils.addValidator(),
      e.formUtils.addValidator(), e.formUtils.addValidator(), e.formUtils.addValidator(),
       e.formUtils.addValidator(), e.formUtils.addValidator();
}(jQuery),
function(e, t) {}(jQuery, window),
function(e, t) {}(jQuery, window), $.formUtils.addValidator({}),
    function(e) {}(function(e) {}),
    function(e) {}(function(e) {}),
    function(e, t) {
        "use strict";

        function i(i, n, s, a, l) {}

        function n(n, r) {}
        var o = e.jQuery || e.Zepto,
            s = 0,
            r = !1;
        o.fn.Lazy = o.fn.lazy = function(e) {}, o.Lazy = o.lazy = function(e, i, s) {},  o(e).on("load", function() {});
    }(window),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
    }(function(e) {
        function W(e) {
            if (!console || !console.warn) throw "Scrollax: " + e;
            console.warn("Scrollax: " + e);
        }

        function X(a) {
            return (a = a.data("scrollax")) && eval("({" + a + "})") || {};
        }

        function Y(e) {
            var t, i;
            return !!(e && "object" == typeof e && "object" == typeof e.window && e.window == e && e.setTimeout && e.alert && (t = e.document) && "object" == typeof t && (i = t.defaultView || t.parentWindow) && "object" == typeof i && i == e);
        }
        var v = Array.prototype,
            C = v.push,
            Z = v.splice,
            aa = Object.prototype.hasOwnProperty,
            la = /[-+]?\d+(\.\d+)?/g,
            ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
            ba = e(window),
            ca = e(document.body),
            da, ea, L, M, N, q = function(t, i, n) {
                function o() {
                    return R = Q ? ca.find(V) : p.find(V), z.length = 0, _ = !!j.horizontal, R.each(J),
                        r(), j.performanceTrick && (v = Q ? ca : p), l("load"), c;
                }

                function s() {
                    f && (f = clearTimeout(f)), f = setTimeout(function() {
                        c.reload();
                    });
                }

                function r() {
                    var e = z.length;
                    if (j.performanceTrick && v && (clearTimeout(w), y || (v.addClass("scrollax-performance"),
                            y = !0), w = setTimeout(function() {
                            v.removeClass("scrollax-performance"), y = !1;
                        }, 100)), e) {
                        b = ka(t);
                        for (var i = 0; i < e; i++) S = z[i], 0 > (k = L(S.element, t))[_ ? "right" : "bottom"] || k[_ ? "left" : "top"] > b[_ ? "width" : "height"] || (A = S.options,
                            T = A.offset || j.offset || 0, x = k[_ ? "right" : "bottom"], E = k[_ ? "width" : "height"],
                            0 > ($ = (E - x + T) / E) && (x = k[_ ? "left" : "top"], E = b[_ ? "width" : "height"],
                                $ = (E - x + T) / E - 1), 1 < $ || -1 > $ || a(S, $));
                        l("scroll", b);
                    }
                }

                function a(t, i) {
                    var n = (I = t.parallaxElements).length;
                    if (n)
                        for (var o = 0; o < n; o++) {
                            O = I[o];
                            var s = O.element,
                                r = i;
                            for (H in D = O.properties || (_ ? {
                                    translateX: "100%"
                                } : {
                                    translateY: "100%"
                                }), P = "", D) {
                                if ("number" == typeof(F = D[H])) F *= r;
                                else if ("string" == typeof F)
                                    for (U = F.match(la),
                                        g = 0, m = U.length; g < m; g++) F = F.replace(U[g], parseFloat(U[g] * r));
                                if (-1 !== e.inArray(H, ma)) P += H + "(" + F + ")";
                                else {
                                    var a, l = s.style;
                                    "opacity" === H ? a = 0 > (a = 0 > r ? 1 + F : 1 - F) ? 0 : 1 < a ? 1 : a : a = F,
                                        l[H] = a;
                                }
                            }
                            P && (s.style[da] = ea + P);
                        }
                }

                function l(e, t) {
                    if (K[e]) {
                        for (m = K[e].length, g = G.length = 0; g < m; g++) C.call(G, K[e][g]);
                        for (g = 0; g < m; g++) G[g].call(c, e, t);
                    }
                }

                function d(e, t) {
                    for (var i = 0, n = K[e].length; i < n; i++)
                        if (K[e][i] === t) return i;
                    return -1;
                }
                var c = this,
                    p = t && e(t).eq(0) || ba,
                    u = q.instances,
                    h = null;
                if (t = p[0], e.each(u, function(e, i) {
                        e && e.frame === t && (h = !0);
                    }), !t || h) W(h ? "Scrollax: Scrollax has been initialized for this frame!" : "Scrollax: Frame is not available!");
                else {
                    var f, g, m, v, w, y, b, _, T, k, S, A, $, x, E, I, O, D, H, F, P, U, j = e.extend({}, q.defaults, i),
                        z = [],
                        R = null,
                        V = j.parentSelector || "[data-scrollax-parent]",
                        B = j.elementsSelector || "[data-scrollax]",
                        K = {},
                        G = [],
                        Q = Y(t);
                    c.frame = t, c.options = j, c.parents = z, c.initialized = !1, c.reload = o;
                    var J = function(t, i) {
                        var n = e(i),
                            o = X(e(i)),
                            s = {};
                        s.element = i, s.options = o, s.parallaxElements = [], n.find(B).each(function(t, i) {
                            var n = X(e(i));
                            n.element = i, C.call(s.parallaxElements, n);
                        }), C.call(z, s);
                    };
                    c.scroll = r, c.getIndex = function(e) {
                        return void 0 !== e ? "number" != typeof e && "string" != typeof e || "" === e || isNaN(e) ? R.index(e) : 0 <= e && e < z.length ? e : -1 : -1;
                    }, c.one = function(e, t) {
                        return c.on(e, function i() {
                            t.apply(c, arguments), c.off(e, i);
                        }), c;
                    }, c.on = function(e, t) {
                        if ("object" == typeof e)
                            for (var i in e) aa.call(e, i) && c.on(i, e[i]);
                        else if ("function" == typeof t)
                            for (var n = 0, o = (i = e.split(" ")).length; n < o; n++) K[i[n]] = K[i[n]] || [], -1 === d(i[n], t) && C.call(K[i[n]], t);
                        else if ("array" == typeof t)
                            for (i = 0,
                                n = t.length; i < n; i++) c.on(e, t[i]);
                        return c;
                    }, c.off = function(e, t) {
                        if (t instanceof Array)
                            for (var i = 0, n = t.length; i < n; i++) c.off(e, t[i]);
                        else {
                            n = 0;
                            for (var o = (i = e.split(" ")).length; n < o; n++)
                                if (K[i[n]] = K[i[n]] || [],
                                    void 0 === t) K[i[n]].length = 0;
                                else {
                                    var s = d(i[n], t); -
                                    1 !== s && Z.call(K[i[n]], s, 1);
                                }
                        }
                        return c;
                    }, c.set = function(t, i) {
                        return e.isPlainObject(t) ? e.extend(j, t) : aa.call(j, t) && (j[t] = i), o(), c;
                    }, c.destroy = function() {
                        return N(window, "resize", s), N(t, "scroll", r), e.each(u, function(e, i) {
                            e && e.frame === t && Z.call(q.instances, i, 1);
                        }), z.length = 0, c.initialized = !1, l("destroy"), c;
                    }, c.init = function() {
                        if (!c.initialized) return c.on(n), o(), M(window, "resize", s), M(t, "scroll", r),
                            C.call(q.instances, c), c.initialized = !0, l("initialized"), c;
                    };
                }
            };
        q.instances = [],
            function() {
                var e, t, i, n, o, s, r, a;
                L = function(l, d) {};
            }(),
            function() {
                function e() {
                    this.returnValue = !1;
                }

                function t() {
                    this.cancelBubble = !0;
                }
                M = window.addEventListener ? function(e, t, i, n) {
                    return e.addEventListener(t, i, n || !1), i;
                } : function(i, n, o) {
                    var s = n + o;
                    return i[s] = i[s] || function() {
                        var n = window.event;
                        n.target = n.srcElement, n.preventDefault = e, n.stopPropagation = t, o.call(i, n);
                    }, i.attachEvent("on" + n, i[s]), o;
                }, N = window.removeEventListener ? function(e, t, i, n) {
                    return e.removeEventListener(t, i, n || !1), i;
                } : function(e, t, i) {
                    var n = t + i;
                    e.detachEvent("on" + t, e[n]);
                    try {
                        delete e[n];
                    } catch (t) {
                        e[n] = void 0;
                    }
                    return i;
                };
            }(),
            function() {
                function e(e) {
                    for (var n = 0, o = t.length; n < o; n++) {
                        var s = t[n] ? t[n] + e.charAt(0).toUpperCase() + e.slice(1) : e;
                        if (null != i.style[s]) return s;
                    }
                }
                var t = ["", "webkit", "moz", "ms", "o"],
                    i = document.createElement("div");
                da = e("transform"), ea = e("perspective") ? "translateZ(0) " : "";
            }(), q.defaults = {
                horizontal: !1,
                offset: 0,
                parentSelector: null,
                elementsSelector: null,
                performanceTrick: !1
            }, window.Scrollax = q, e.fn.Scrollax = function(t, i) {
                var n, o;
                return e.isPlainObject(t) || ("string" != typeof t && !1 !== t || (n = !1 === t ? "destroy" : t,
                    o = slice.call(arguments, 1)), t = {}), this.each(function(s, r) {
                    var a = e.data(r, "scrollax");
                    a || n ? a && n && a[n] && a[n].apply(a, o) : e.data(r, "scrollax", new q(r, t, i).init());
                });
            }, e.Scrollax = function(e, t) {
                ba.Scrollax(e, t);
            };
        var v = document.head || document.getElementsByTagName("head")[0],
            w = document.createElement("style");
        return w.type = "text/css", w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" : w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };")),
            v.appendChild(w), q;
    }),
    function(e) {
        "use strict";
        var t = "selectric",
            i = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel",
            n = ".sl",
            o = {
                onChange: function(t) {
                    e(t).change();
                },
                maxHeight: 300,
                keySearchTimeout: 500,
                arrowButtonMarkup: '<b class="button">&#x25be;</b>',
                disableOnMobile: !0,
                openOnHover: !1,
                hoverIntentTimeout: 500,
                expandToItemText: !1,
                responsive: !1,
                preventWindowScroll: !0,
                inheritOriginalWidth: !1,
                allowWrap: !0,
                customClass: {
                    prefix: t,
                    camelCase: !1,
                    overwrite: !0
                },
                optionsItemBuilder: "{text}",
                labelBuilder: "{text}"
            },
            s = {
                add: function(e, t, i) {
                    this[e] || (this[e] = {}), this[e][t] = i;
                },
                remove: function(e, t) {
                    delete this[e][t];
                }
            },
            r = {
                replaceDiacritics: function(e) {
                    for (var t = "40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g, "\\3$&").split(" "), i = t.length; i--;) e = e.toLowerCase().replace(RegExp("[" + t[i] + "]", "g"), "aeiouncy".charAt(i));
                    return e;
                },
                format: function(e) {
                    var t = arguments;
                    return ("" + e).replace(/{(\d+|(\w+))}/g, function(e, i, n) {
                        return n && t[1] ? t[1][n] : t[i];
                    });
                },
                nextEnabledItem: function(e, t) {
                    for (; e[t = (t + 1) % e.length].disabled;);
                    return t;
                },
                previousEnabledItem: function(e, t) {
                    for (; e[t = (t > 0 ? t : e.length) - 1].disabled;);
                    return t;
                },
                toDash: function(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                },
                triggerCallback: function(i, n) {
                    var o = n.element,
                        a = n.options["on" + i];
                    e.isFunction(a) && a.call(o, o, n), s[i] && e.each(s[i], function() {
                        this.call(o, o, n);
                    }), e(o).trigger(t + "-" + r.toDash(i), n);
                }
            },
            a = e(document),
            l = e(window),
            d = function(s, d) {
                var c, p, u, h, f, g, m, v, w, y, b, _, C, T, k, S = this,
                    A = e(s),
                    $ = !1,
                    x = !1,
                    E = /android|ip(hone|od|ad)/i.test(navigator.userAgent),
                    I = A.prop("tabindex");

                function O() {
                    S.items = [];
                    var t = A.children(),
                        i = "<ul>",
                        o = t.filter(":selected").index(),
                        s = 0;
                    w = v = ~o ? o : 0, (C = t.length) && (t.each(function() {
                            var t = e(this);
                            if (t.is("optgroup")) {
                                var n = t.prop("disabled"),
                                    o = t.children();
                                i += r.format('<ul class="{1}"><li class="{2}">{3}</li>', e.trim([S.classes.group, n ? "disabled" : "", t.prop("class")].join(" ")), S.classes.grouplabel, t.prop("label")),
                                    n && o.prop("disabled", !0), o.each(a), i += "</ul>";
                            } else a.call(t);

                            function a() {
                                var t = e(this),
                                    n = t.html(),
                                    o = t.prop("disabled"),
                                    a = S.options.optionsItemBuilder;
                                S.items[s] = {
                                        element: t,
                                        value: t.val(),
                                        text: n,
                                        slug: r.replaceDiacritics(n),
                                        disabled: o
                                    }, i += r.format('<li data-index="{1}" class="{2}">{3}</li>', s, e.trim([s == w ? "selected" : "", s == C - 1 ? "last" : "", o ? "disabled" : ""].join(" ")), e.isFunction(a) ? a(S.items[s], t, s) : r.format(a, S.items[s])),
                                    s++;
                            }
                        }), p.append(u.html(i + "</ul>")), f.html(e.isFunction(k) ? k(S.items[w]) : r.format(k, S.items[w]))),
                        h.add(A).add(g).add(c).off(n), g.prop("class", [S.classes.wrapper, S.options.customClass.overwrite ? A.prop("class").replace(/\S+/g, S.options.customClass.prefix + "-$&") : A.prop("class"), S.options.responsive ? S.classes.responsive : ""].join(" ")),
                        A.prop("disabled") ? (g.addClass(S.classes.disabled), c.prop("disabled", !0)) : (x = !0,
                            g.removeClass(S.classes.disabled).on("mouseenter" + n + " mouseleave" + n, function(t) {
                                e(this).toggleClass(S.classes.hover), S.options.openOnHover && (clearTimeout(S.closeTimer),
                                    "mouseleave" == t.type ? S.closeTimer = setTimeout(N, S.options.hoverIntentTimeout) : F());
                            }), h.on("click" + n, function(e) {
                                $ ? N() : F(e);
                            }), c.prop({
                                tabindex: I,
                                disabled: !1
                            }).on("keypress" + n, H).on("keydown" + n, function(e) {
                                H(e), clearTimeout(S.resetStr), S.resetStr = setTimeout(function() {
                                    c.val("");
                                }, S.options.keySearchTimeout);
                                var t = e.keyCode || e.which;
                                if (t > 36 && t < 41) {
                                    if (!S.options.allowWrap && (t < 39 && 0 == v || t > 38 && v + 1 == S.items.length)) return;
                                    M(r[(t < 39 ? "previous" : "next") + "EnabledItem"](S.items, v));
                                }
                            }).on("focusin" + n, function(e) {
                                c.one("blur", function() {
                                    c.blur();
                                }), $ || F(e);
                            }).on("oninput" in c[0] ? "input" : "keyup", function() {
                                c.val().length && e.each(S.items, function(e, t) {
                                    if (RegExp("^" + c.val(), "i").test(t.slug) && !t.disabled) return M(e), !1;
                                });
                            }), A.prop("tabindex", !1), m = e("li", p.removeAttr("style")).on({
                                mousedown: function(e) {
                                    e.preventDefault(), e.stopPropagation();
                                },
                                click: function() {
                                    return M(e(this).data("index"), !0), !1;
                                }
                            }).filter("[data-index]")), r.triggerCallback("Init", S);
                }

                function D() {
                    r.triggerCallback("Refresh", S), O();
                }

                function H(e) {
                    var t = e.keyCode || e.which;
                    13 == t && e.preventDefault(), /^(9|13|27)$/.test(t) && (e.stopPropagation(), M(v, !0));
                }

                function F(i) {
                    var o, s, l, d;
                    r.triggerCallback("BeforeOpen", S), i && (i.preventDefault(), i.stopPropagation()),
                        x && (o = p.closest(":visible").children(":hidden").addClass(S.classes.tempshow),
                            s = S.options.maxHeight, l = p.outerWidth(), d = h.outerWidth() - (l - p.width()), !S.options.expandToItemText || d > l ? _ = d : (p.css("overflow", "scroll"), g.width(9e4),
                                _ = p.width(), p.css("overflow", ""), g.width("")), p.width(_).height() > s && p.height(s),
                            o.removeClass(S.classes.tempshow), e("." + S.classes.hideselect, "." + S.classes.open).children()[t]("close"),
                            $ = !0, y = p.outerHeight(), b = p.height(), g.addClass(S.classes.open), c.val("").is(":focus") || c.focus(),
                            a.on("click" + n, N).on("scroll" + n, P), P(), S.options.preventWindowScroll && a.on("mousewheel" + n + " DOMMouseScroll" + n, "." + S.classes.scroll, function(t) {
                                var i = t.originalEvent,
                                    n = e(this).scrollTop(),
                                    o = 0;
                                "detail" in i && (o = -1 * i.detail), "wheelDelta" in i && (o = i.wheelDelta), "wheelDeltaY" in i && (o = i.wheelDeltaY),
                                    "deltaY" in i && (o = -1 * i.deltaY), (n == this.scrollHeight - b && o < 0 || 0 == n && o > 0) && t.preventDefault();
                            }), L(v), r.triggerCallback("Open", S));
                }

                function P() {
                    g.toggleClass(S.classes.above, g.offset().top + g.outerHeight() + y > l.scrollTop() + l.height());
                }

                function N() {
                    if (r.triggerCallback("BeforeClose", S), w != v) {
                        r.triggerCallback("BeforeChange", S);
                        var t = S.items[v].text;
                        A.prop("selectedIndex", w = v).data("value", t), f.html(e.isFunction(k) ? k(S.items[v]) : r.format(k, S.items[v])),
                            r.triggerCallback("Change", S);
                    }
                    a.off(n), g.removeClass(S.classes.open), $ = !1, r.triggerCallback("Close", S);
                }

                function M(e, t) {
                    void 0 != e && (S.items[e].disabled || (m.removeClass("selected").eq(v = e).addClass("selected"),
                        L(e), t && N()));
                }

                function L(e) {
                    var t = m.eq(e).outerHeight(),
                        i = m[e].offsetTop,
                        n = u.scrollTop(),
                        o = i + 2 * t;
                    u.scrollTop(o > n + y ? o - y : i - t < n ? i - t : n);
                }

                function U(e) {
                    x && (p.add(h).add(c).remove(), !e && A.removeData(t).removeData("value"), A.prop("tabindex", I).off(n).off(T).unwrap().unwrap(),
                        x = !1);
                }! function t(n) {
                    if (S.options = e.extend(!0, {}, o, S.options, n), S.classes = {}, S.element = s,
                        r.triggerCallback("BeforeInit", S), S.options.disableOnMobile && E) S.disableOnMobile = !0;
                    else {
                        U(!0);
                        var a = S.options.customClass,
                            l = i.split(" "),
                            d = A.width();
                        e.each(l, function(e, t) {
                                var i = a.prefix + t;
                                S.classes[t.toLowerCase()] = a.camelCase ? i : r.toDash(i);
                            }), c = e("<input/>", {
                                class: S.classes.input,
                                readonly: E
                            }), p = e("<div/>", {
                                class: S.classes.items,
                                tabindex: -1
                            }), u = e("<div/>", {
                                class: S.classes.scroll
                            }), h = e("<div/>", {
                                class: a.prefix,
                                html: S.options.arrowButtonMarkup
                            }), f = e('<p class="label"/>'), g = A.wrap("<div>").parent().append(h.prepend(f), p, c),
                            T = {
                                open: F,
                                close: N,
                                destroy: U,
                                refresh: D,
                                init: t
                            }, A.on(T).wrap('<div class="' + S.classes.hideselect + '">'), e.extend(S, T), k = S.options.labelBuilder,
                            S.options.inheritOriginalWidth && d > 0 && g.width(d), O();
                    }
                }(d);
            };
        e.fn[t] = function(i) {
            return this.each(function() {
                var n = e.data(this, t);
                n && !n.disableOnMobile ? "" + i === i && n[i] ? n[i]() : n.init(i) : e.data(this, t, new d(this, i));
            });
        }, e.fn[t].hooks = s;
    }(jQuery),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        (t = function() {
            var t = 0;
            return function(i, n) {
                var o, s = this;
                s.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(i),
                        appendDots: e(i),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(t, i) {
                            return e('<button type="button" />').text(i + 1);
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        focusOnChange: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    }, s.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null,
                    s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1,
                    s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null,
                    s.rowCount = 1, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null,
                    s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0,
                    s.windowTimer = null, o = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, n, o),
                    s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden",
                        s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden",
                        s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s),
                    s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s),
                    s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s),
                    s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s),
                    s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s),
                    s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                    s.registerBreakpoints(), s.init(!0);
            };
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            });
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack),
                o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(),
                o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
                    e(i).attr("data-slick-index", t);
                }), o.$slidesCache = o.$slides, o.reinit();
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed);
            }
        }, t.prototype.animateSlide = function(t, i) {
            var n = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                e({
                    animStart: o.currentLeft
                }).animate({
                    animStart: t
                }, {
                    duration: o.options.speed,
                    easing: o.options.easing,
                    step: function(e) {
                        e = Math.ceil(e), !1 === o.options.vertical ? (n[o.animType] = "translate(" + e + "px, 0px)",
                            o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n));
                    },
                    complete: function() {
                        i && i.call();
                    }
                })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)",
                o.$slideTrack.css(n), i && setTimeout(function() {
                    o.disableTransition(), i.call();
                }, o.options.speed));
        }, t.prototype.getNavTarget = function() {
            var t = this.options.asNavFor;
            return t && null !== t && (t = e(t).not(this.$slider)), t;
        }, t.prototype.asNavFor = function(t) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0);
            });
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
        }, t.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer);
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
                e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
                t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                    t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }));
        }, t.prototype.buildDots = function() {
            var t, i, n = this;
            if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass),
                    t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active");
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                    e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "");
                }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
                t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1),
                e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(),
                t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable");
        }, t.prototype.buildRows = function() {
            var e, t, i, n, o, s, r, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 0) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var d = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = e * r + (t * a.options.slidesPerRow + i);
                            s.get(c) && d.appendChild(s.get(c));
                        }
                        l.appendChild(d);
                    }
                    n.appendChild(l);
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                });
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var n, o, s, r = this,
                a = !1,
                l = r.$slider.width(),
                d = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? s = d : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(d, l)),
                r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                for (n in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
                null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o,
                    "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o,
                    "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
                    r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide),
                    r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
            }
        }, t.prototype.changeSlide = function(t, i) {
            var n, o, s = this,
                r = e(t.currentTarget);
            switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
                t.data.message) {
                case "previous":
                    o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                    break;

                case "next":
                    o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                    break;

                case "index":
                    var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                    break;

                default:
                    return;
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break;
                    }
                    i = t[n];
                }
            return e;
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                    t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
                        t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler),
                e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"),
                t.$slider.empty().append(e));
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(),
                i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                        e(this).attr("style", e(this).data("originalStyling"));
                    }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(),
                    i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"),
                i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"),
                i.unslicked = !0, t || i.$slider.trigger("destroy", [i]);
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call();
            }, i.options.speed));
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }));
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(),
                t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
                i.stopImmediatePropagation();
                var n = e(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay());
                }, 0);
            });
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide;
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++n;
                else
                    for (; t < e.slideCount;) ++n,
                        t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n,
                    t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1;
        }, t.prototype.getLeft = function(e) {
            var t, i, n, o, s = this,
                r = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1,
                o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)),
                r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1,
                r = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1,
                r = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth,
                r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0,
                r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0,
                s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow),
                t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1),
                    t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
                    t += (s.$list.width() - n.outerWidth()) / 2)), t;
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            return this.options[e];
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                o = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll,
                    n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll,
                n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o;
        }, t.prototype.getSlick = function() {
            return this;
        }, t.prototype.getSlideCount = function() {
            var t, i, n = this;
            return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, s) {
                if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft) return t = s, !1;
            }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll;
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t);
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"),
                i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(),
                i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1,
                i.autoPlay());
        }, t.prototype.initADA = function() {
            var t = this,
                i = Math.ceil(t.slideCount / t.options.slidesToShow),
                n = t.getNavigableIndexes().filter(function(e) {
                    return e >= 0 && e < t.slideCount;
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                var o = n.indexOf(i);
                if (e(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + t.instanceUid + i,
                        tabindex: -1
                    }), -1 !== o) {
                    var s = "slick-slide-control" + t.instanceUid + o;
                    e("#" + s).length && e(this).attr({
                        "aria-describedby": s
                    });
                }
            }), t.$dots.attr("role", "tablist").find("li").each(function(o) {
                var s = n[o];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + o,
                    "aria-controls": "slick-slide" + t.instanceUid + s,
                    "aria-label": o + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                });
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({
                tabindex: "0"
            }) : t.$slides.eq(o).removeAttr("tabindex");
            t.activateADA();
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler),
                e.$nextArrow.on("keydown.slick", e.keyHandler)));
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition);
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
                e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }));
        }, t.prototype.lazyLoad = function() {
            var t, i, n, o = this;

            function s(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        n = e(this).attr("data-srcset"),
                        s = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            n && (t.attr("srcset", n), s && t.attr("sizes", s)), t.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                            }), o.$slider.trigger("lazyLoaded", [o, t, i]);
                        });
                    }, r.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                            o.$slider.trigger("lazyLoadError", [o, t, i]);
                    }, r.src = i;
                });
            }
            if (!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)),
                    n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide,
                    n = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (i > 0 && i--,
                        n <= o.slideCount && n++)), t = o.$slider.find(".slick-slide").slice(i, n), "anticipated" === o.options.lazyLoad)
                for (var r = i - 1, a = n, l = o.$slider.find(".slick-slide"), d = 0; d < o.options.slidesToScroll; d++) r < 0 && (r = o.slideCount - 1),
                    t = (t = t.add(l.eq(r))).add(l.eq(a)), r--, a++;
            s(t), o.slideCount <= o.options.slidesToShow ? s(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? s(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && s(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
        }, t.prototype.next = t.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            });
        }, t.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition();
        }, t.prototype.pause = t.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0;
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
        }, t.prototype.postSlide = function(t) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(),
                i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(),
                    i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            });
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault();
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var i, n, o, s, r, a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"),
                (r = document.createElement("img")).onload = function() {
                    o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]),
                        a.progressiveLazyLoad();
                }, r.onerror = function() {
                    t < 3 ? setTimeout(function() {
                        a.progressiveLazyLoad(t + 1);
                    }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                        a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad());
                }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a]);
        }, t.prototype.refresh = function(t) {
            var i, n, o = this;
            n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
                o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide,
                o.destroy(!0), e.extend(o, o.initials, {
                    currentSlide: i
                }), o.init(), t || o.changeSlide({
                    data: {
                        message: "index",
                        index: i
                    }
                }, !1);
        }, t.prototype.registerBreakpoints = function() {
            var t, i, n, o = this,
                s = o.options.responsive || null;
            if ("array" === e.type(s) && s.length) {
                for (t in o.respondTo = o.options.respondTo || "window", s)
                    if (n = o.breakpoints.length - 1,
                        s.hasOwnProperty(t)) {
                        for (i = s[t].breakpoint; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1),
                            n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings;
                    }
                o.breakpoints.sort(function(e, t) {
                    return o.options.mobileFirst ? e - t : t - e;
                });
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length,
                t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(),
                t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(),
                t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(),
                t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(),
                t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t]);
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
            }, 50));
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var n = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e,
                n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
                n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(),
                n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit();
        }, t.prototype.setCSS = function(e) {
            var t, i, n = this,
                o = {};
            !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
                i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + t + ", " + i + ")",
                    n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)",
                    n.$slideTrack.css(o)));
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
                e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
                e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each(function(n, o) {
                t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                });
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            });
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t);
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, i, n, o, s, r = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0],
                    o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")),
                "single" === s) r.options[n] = o;
            else if ("multiple" === s) e.each(n, function(e, t) {
                r.options[e] = t;
            });
            else if ("responsive" === s)
                for (i in o)
                    if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];
                    else {
                        for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1),
                            t--;
                        r.options.responsive.push(o[i]);
                    }
            a && (r.unload(), r.reinit());
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
                e.$slider.trigger("setPosition", [e]);
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
                e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
                void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform",
                    e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform",
                    e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform",
                    e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform",
                    e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)),
                void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform",
                    e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, n, o, s = this;
            if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
                var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e,
                            i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
                        0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")),
                    s.$slides.eq(e).addClass("slick-center");
            } else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow,
                n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad();
        }, t.prototype.setupInfinite = function() {
            var t, i, n, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null,
                    o.slideCount > o.options.slidesToShow)) {
                for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
                    t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < n + o.slideCount; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "");
                });
            }
        }, t.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e;
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(n.attr("data-slick-index"));
            o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o);
        }, t.prototype.slideHandler = function(e, t, i) {
            var n, o, s, r, a, l, d = this;
            if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
                if (!1 === t && d.asNavFor(e),
                    n = e, a = d.getLeft(n), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function() {
                    d.postSlide(n);
                }) : d.postSlide(n));
                else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function() {
                d.postSlide(n);
            }) : d.postSlide(n));
            else {
                if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = n < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n,
                    d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), s = d.currentSlide,
                    d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = (l = d.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide),
                    d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(s),
                    d.fadeSlide(o, function() {
                        d.postSlide(o);
                    })) : d.postSlide(o), void d.animateHeight();
                !0 !== i && d.slideCount > d.options.slidesToShow ? d.animateSlide(a, function() {
                    d.postSlide(o);
                }) : d.postSlide(o);
            }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
                    e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                e.$slider.addClass("slick-loading");
        }, t.prototype.swipeDirection = function() {
            var e, t, i, n, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY,
                i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
                n <= 45 && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical";
        }, t.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
            if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
                n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                            n.currentDirection = 0;
                        break;

                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                            n.currentDirection = 1;
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]));
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
                n.touchObject = {});
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
                t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;

                case "move":
                    t.swipeMove(e);
                    break;

                case "end":
                    t.swipeEnd(e);
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, n, o, s, r, a = this;
            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide),
                a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY,
                a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
                r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
                    i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
                        e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                    n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction,
                        a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))));
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
                i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
                i.dragging = !0;
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(),
                e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy();
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"));
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
        }, e.fn.slick = function() {
            var e, i, n = this,
                o = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                r = n.length;
            for (e = 0; e < r; e++)
                if ("object" == typeof o || void 0 === o ? n[e].slick = new t(n[e], o) : i = n[e].slick[o].apply(n[e].slick, s),
                    void 0 !== i) return i;
            return n;
        };
    });

var $window = $(window),
    $document = $(document),
    $body = $("body"),
    $html = $("html"),
    $navBar = $("#desktop-nav"),
    pnpHelper = {};

function doBrowserCheck(e) {}

pnpHelper.bootstrap = {
    xs: 768,
    md: 992,
    lg: 1200,
    xlg: 1500,
    ipadLanscape: 1024,
    ipadPortrait: 768,
    isXs: function() {
        return $window.outerWidth() < pnpHelper.bootstrap.xs;
    },
    isSm: function() {
        return $window.outerWidth() >= pnpHelper.bootstrap.xs;
    },
    isMd: function() {
        return $window.outerWidth() >= pnpHelper.bootstrap.md;
    },
    isLg: function() {
        return $window.outerWidth() >= pnpHelper.bootstrap.lg;
    },
    isXlg: function() {
        return $window.outerWidth() >= pnpHelper.bootstrap.xlg;
    }
}, pnpHelper.getNavHeight = (e => {
    let t;
    return t = (e = e || !1) ? $document.find(".nav-container").outerHeight() : $document.find(".nav-container .nav-bar").outerHeight();
}), pnpHelper.onResizeFinished = function(e, t) {
    var i;
    $window.on("resize", function(t) {
        clearTimeout(i), i = setTimeout(e, 50);
    }), t && e.call();
}, pnpHelper.scroll = {
    scrollPast: function(e, t) {
        if (t) var i = t;
        else i = $(e);
        var n = i.offset().top + i.outerHeight(!0) - pnpHelper.getNavHeight();
        pnpHelper.scroll.doScroll(n);
    },
    scrollTo: function(e, t, i) {
        var n = $(e).offset().top;
        void 0 === i && (i = 0), n -= pnpHelper.getNavHeight(), i && (n -= i), pnpHelper.scroll.doScroll(n, t);
    },
    doScroll: function(e, t) {
        t || (t = null), void 0 !== e && $("html,body").animate({
            scrollTop: e
        }, 500, t);
    },
    preventDefault: function(e) {
        (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1;
    },
    lock: function() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", pnpHelper.scroll.preventDefault, !1),
            window.onwheel = pnpHelper.scroll.preventDefault, window.onmousewheel = document.onmousewheel = pnpHelper.scroll.preventDefault,
            window.ontouchmove = pnpHelper.scroll.preventDefault, document.onkeydown = function(e) {
                if ({
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1
                    }[e.keyCode]) return pnpHelper.scroll.preventDefault(e), !1;
            };
    },
    unlock: function() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", pnpHelper.scroll.preventDefault, !1),
            window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null,
            document.onkeydown = null;
    }
}, pnpHelper.preloadImage = function(e) {
    Log.info("Preloading image: " + e), new Image().src = e;
}, pnpHelper.dependencyCheck = {
    fixTo: "fixTo",
    viewportChecker: "viewportChecker",
    jqueryCookie: "jqueryCookie",
    slickSlider: "slickSlider",
    hoverIntent: "hoverIntent",
    bootstrapModal: "bootstrapModal",
    fullPageJs: "fullPageJs",
    requireDependencies: function(e, t) {
        if (t && t.length) {
            var i = !1;

            function n(t) {
                console.error("MISSING DEPENDENCY: The component '" + e + "' requires the JS library '" + t + "'. Please add it to the project."),
                    i = !0;
            }
            for (var o in t) {
                var s = t[o];
                s === pnpHelper.dependencyCheck.fixTo ? window.fixto || n(s) : s === pnpHelper.dependencyCheck.viewportChecker ? $.fn.viewportChecker || n(s) : s === pnpHelper.dependencyCheck.jqueryCookie ? $.cookie || n(s) : s === pnpHelper.dependencyCheck.slickSlider ? $.fn.slick || n(s) : s === pnpHelper.dependencyCheck.hoverIntent ? $.fn.hoverIntent || n(s) : s === pnpHelper.dependencyCheck.bootstrapModal ? $.fn.modal || n(s) : s === pnpHelper.dependencyCheck.fullPageJs ? $.fn.fullpage || n(s) : console.warn("A check for dependency '" + s + "' was not found.");
            }
            return i;
        }
        return console.warn("No dependencies passed to dependencyCheck.requireDependencies() function"), !1;
    }
}, pnpHelper.browser = {
    isFirefox: !1,
    isChrome: !1,
    isSafari: !1,
    isIOS: !1,
    isIE: !1,
    version: {
        ie: !1,
        ios: !1
    }
}, doBrowserCheck(!1);

var touch = Modernizr.prefixed("MaxTouchPoints", navigator);

!Modernizr.touch && (touch || navigator.maxTouchPoints && navigator.maxTouchPoints > 0) && (Modernizr.touch = !0,
    $html.addClass("touch").removeClass("no-touch")), pnpHelper.modal = {}, pnpHelper.getUrlParameter = function(e) {};

var lastScrollTop = 0;

function scrollDirection() {
    var e = $window.scrollTop();
    e >= lastScrollTop ? $window.trigger("scrolldown") : $window.trigger("scrollup"),
        lastScrollTop = e;
}

function initBannerVideos() {}

window.addEventListener("scroll", scrollDirection), pnpHelper.urlWithParams = ((e, t, i = window.location.href) => {
        let n = new URL(i),
            o = new URLSearchParams(n.search.slice(1));
        return o.append(e, t), window.location.protocol + "//" + window.location.hostname + window.location.pathname + "?" + o;
    }), pnpHelper.empty = function(e) {
        return void 0 === e || null === e;
    }, pnpHelper.ajaxPosts = {}, pnpHelper.siteSearch = {},
    function(e) {
        e.pnp = {}, e.pnp.animateOnScroll = function() {
            if (!Modernizr.touch) {
                if (!e.fn.viewportChecker) return void console.error("MISSING DEPENDANCY: The component 'animate-on-scroll' requires the library 'jquery-viewport-checker'. Please update packages.json to include this library.");
                e("[data-pnp-animation-delay]").each(function() {
                    e(this).css("animation-delay", e(this).data("pnp-animation-delay"));
                }), e("[data-pnp-animation-duration]").each(function() {
                    e(this).css("animation-duration", e(this).data("pnp-animation-duration"));
                }), e("[data-pnp-animate]").each(function() {
                    e(this).addClass("aos-transparent").viewportChecker({
                        classToAdd: "aos-not-transparent animated " + e(this).data("pnp-animate"),
                        offset: "11%",
                        invertBottomOffset: !0
                    });
                });
            }
        }, e.pnp.initSelectric = function() {}, 
        e.pnp.initFormValidation = function() {}, e.pnp.initFixto = function() {},
         e.pnp.initBodyPosition = function() {}, e.pnp.initLazyLoad = function() {
            e("[data-src]").lazy({
                threshold: 2e3
            }), $body.hasClass("modal-open") && (e("img[data-src]").each(function() {
                e(this).attr("src", e(this).data("src")).removeAttr("data-src");
            }), e("[data-src]").each(function() {
                e(this).css("background-image", "url(" + e(this).data("src") + ")").removeAttr("data-src");
            }));
        }, e.pnp.initScrollax = function() {
            let t = new Scrollax(e(window));
            t.init(), pnpHelper.onResizeFinished(() => {
                !pnpHelper.bootstrap.isSm() || e("html").hasClass("touch") ? t.initialized && (t.destroy(),
                    e("[data-scrollax]").removeAttr("style")) : t.initialized || t.init();
            });
        }, e.pnp.initPageScrollTo = function() {
            var e = window.location.hash;
            e && e.indexOf("section-") > -1 && setTimeout(function() {
                pnpHelper.scroll.scrollTo(e, null, null, 2e3);
            }, 1e3), window.location.hash = "", history.pushState("", document.title, window.location.pathname);
        }, e.pnp.initPage = function(t) {
            e.pnp.animateOnScroll(), e.pnp.initSelectric(), e.pnp.initFormValidation(), e.pnp.initFixto(),
                e.pnp.initLazyLoad(), e.pnp.initScrollax(), e.pnp.initBodyPosition(), e.pnp.initPageScrollTo(),
                e.pnp.initCustomContactForm7(), e.pnp.initSliders(), e.pnp.initPostGrid(), t && (e.pnp.initBanners(),
                    e.pnp.initImageTransitionHeaders(), e.pnp.initAccordion(), e.pnp.initMicrointeractions(),
                     e.pnp.initCallToActions()), setTimeout(function() {
                    $window.trigger("resize");
                }, 0);
        };
    }(jQuery), $document.ready(function() {
        $.pnp.initPage(!0), $.pnp.initNavigation();
    }), $(function() {}),
    function(e) {
        $document.on("click", "[data-pnp-toggle-class]", function() {
            return e(e(this).data("pnp-target")).toggleClass(e(this).data("pnp-class")), !1;
        }), $document.on("click", "[data-pnp-add-class]", function() {
            return e(e(this).data("pnp-target")).addClass(e(this).data("pnp-class")), !1;
        }), $document.on("click", "[data-pnp-remove-class]", function() {
            return e(e(this).data("pnp-target")).removeClass(e(this).data("pnp-class")), !1;
        }), $document.on("click", "[data-pnp-show-toggle]", function() {
            return e(e(this).data("pnp-hide-target")).hide(), e(e(this).data("pnp-show-target")).show(),
                e.event.trigger({
                    type: "pnp-show-toggle-complete"
                }), !1;
        }), $document.on("click", "[data-pnp-slide-toggle]", function() {
            return e(e(this).data("pnp-slide-toggle")).is(":visible") ? e(this).addClass("-out").removeClass("-in") : e(this).addClass("-in").removeClass("-out"),
                e(e(this).data("pnp-slide-toggle")).slideToggle(), !1;
        }), $document.on("click", "[data-pnp-slide-up]", function() {
            return e(e(this).data("pnp-slide-up")).slideUp(), !1;
        }), $document.on("click", "[data-pnp-slide-down]", function() {
            return e(e(this).data("pnp-slide-down")).slideDown(), !1;
        }), $document.on("change", "[data-pnp-slide-toggle-change]", function() {
            e(e(this).data("pnp-slide-toggle-change")).is(":checked") ? e(this).addClass("-out").removeClass("-in") : e(this).addClass("-in").removeClass("-out"),
                e(e(this).data("pnp-slide-toggle-change")).slideToggle();
        }), $document.on("click", "[data-pnp-back]", function() {
            return window.history.back(), !1;
        }), $document.on("click", "[data-pnp-return-false]", function() {
            return !1;
        }), $document.on("click", "[data-pnp-scroll-to],[data-pnp-scroll-past]", function() {
            if (e(this).data("pnp-scroll-past")) {
                var t = e(this).data("pnp-scroll-past");
                pnpHelper.scroll.scrollPast(e(this).closest(t));
            } else e(this).data("pnp-scroll-to") && pnpHelper.scroll.scrollTo(e(this).data("pnp-scroll-to"));
            return !1;
        }), e("[data-mobile-image]").each((t, i) => {
            const n = e(i);
            let o = "data" === n.attr("src").substring(0, 4) ? n.data("src") : n.attr("src"),
                s = n.attr("width"),
                r = n.attr("height"),
                a = n.data("mobile-image"),
                l = n.data("mobile-image-width"),
                d = n.data("mobile-image-height");
            pnpHelper.onResizeFinished(() => {
                pnpHelper.bootstrap.isXs() ? n.attr({
                    src: () => {
                        if (void 0 !== a) return a;
                    },
                    width: () => {
                        if (void 0 !== l) return l;
                    },
                    height: () => {
                        if (void 0 !== d) return d;
                    }
                }) : n.attr({
                    src: o,
                    width: s,
                    height: r
                });
            });
        });
    }(jQuery), $.pnp.initAccordion = function() {}, $.pnp.initBanners = (() => {
        $document.find(".banner-container.slider-container").length && $(".banner-container.slider-container:visible:not(.slick-initialized)").each((e, t) => {
            const i = $(t),
                n = i.closest(".component.component-banner").find(".slider-navigation-container"),
                o = n.find(".slider-navigation");
            let s, r, a, l, d, c = i.data("autoplay-speed"),
                p = n.data("slides-to-show"),
                u = i.data("autoplay"),
                h = {
                    arrows: !1,
                    infinite: !0,
                    fade: !0,
                    dots: !1,
                    speed: i.data("transition-speed")
                };
            var f = {
                infinite: !1,
                mobileFirst: !1,
                arrows: !1,
                dots: !1,
                slidesToShow: p,
                responsive: [{
                    breakpoint: pnpHelper.bootstrap.xlg,
                    settings: {
                        slidesToShow: p < 5 ? p : 5
                    }
                }, {
                    breakpoint: pnpHelper.bootstrap.md,
                    settings: {
                        slidesToShow: p < 5 ? p : function(e) {
                            var t = e - 1;
                            return t <= 2 ? 2 : t;
                        }(p)
                    }
                }, {
                    breakpoint: pnpHelper.bootstrap.xs,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            };
            n.slick(f), i.on("init", function(e, t) {
                setTimeout(function() {
                    t.$slides[0].classList.add("zoom-slide");
                }, 500);
            }).slick(h), u && m(o), o.find(".navigation-label").on("click", function() {
                w($(this).data("slide-number"));
            }), i.on({
                afterChange: function(e, t, i) {
                    u && m(o);
                },
                beforeChange: function(e, t, i, n) {
                    t.$slides[i].classList.remove("zoom-slide"), t.$slides[n].classList.add("zoom-slide");
                }
            });
            const g = {
                mouseenter: function() {
                    r = !0;
                },
                mouseleave: function() {
                    r = !1;
                }
            };

            function m(e) {
                e.removeClass("-active"), e.each(function(e, t) {
                    if ($(this).find(".navigation-label").data("slide-number") === i.slick("slickCurrentSlide")) {
                        $(this).addClass("-active");
                        const e = $(this).closest(".slick-slide").data("slick-index");
                        n.slick("slickGoTo", e), d = $(this).find(".slider-progress > .progress"), v();
                    } else v();
                });
            }

            function v() {
                ! function() {
                    $(".slider-progress>.progress").css("width", "0"), pnpHelper.empty(d) || d.css({
                        width: "0%"
                    });
                    clearTimeout(l);
                }(), s = 0, r = !1, l = setInterval(function() {
                    !1 === r && (s += 1 / (c + .1), pnpHelper.empty(d) || d.css({
                        width: s + "%"
                    }), s >= 100 && (d = null, clearTimeout(l), w()));
                }, 10);
            }

            function w(e) {
                r = !0, a && clearTimeout(a), a = setTimeout(function() {
                    void 0 !== e && null !== e ? i.slick("slickGoTo", e) : i.slick("slickNext"), r = !1;
                }, 500);
            }
            o.on(g);
        });
    }), $.pnp.initCallToActions = (() => {}), $.pnp.initCustomContactForm7 = function() {}, 
    $.pnp.initImageTransitionHeaders = (() => {
        const e = $document.find(".component-image-transition-header");
        if (!e.length) return;
        let t = !1,
            i = $window.scrollTop() + pnpHelper.getNavHeight(!0),
            n = i + $window.outerHeight();

        function o(e, t) {
            let i = t.offset().left + t.outerWidth(),
                n = e.offset().left + e.outerWidth();
            return parseFloat((i - n).toFixed(2));
        }

        function s(e) {
            return parseInt(e.replace("px", ""));
        }
        e.each((e, r) => {
            let a = $(r).offset().top,
                l = a + $(r).outerHeight(),
                d = $(r).find(".header-content-container"),
                c = $(r).find(".heading-image-container"),
                p = c.find(".image-wrapper"),
                u = s(p.css("width")),
                h = .4 * $window.outerWidth(),
                f = $window.outerWidth(),
                g = .82 * $window.outerHeight() - pnpHelper.getNavHeight(!0),
                m = f - u,
                v = g - h,
                w = o(p, c),
                y = s(c.find(">div").css("height"));
            p.css("right", w + "px");
            let b = 0;
            $window.on({
                scroll: () => {
                    pnpHelper.bootstrap.isSm() && (t = !0, setInterval(() => {
                        t && (t = !1, _());
                    }, 500));
                },
                resize: () => {
                    p.removeAttr("style"), a = $(r).offset().top + d.outerHeight() / 5, l = a + s($(r).css("height")),
                        u = s(p.css("width")), h = .4 * $window.outerWidth(), f = $window.outerWidth(),
                        g = .82 * $window.outerHeight() - pnpHelper.getNavHeight(!0), m = f - u, v = g - h,
                        w = o(p, c), y = s(c.find(">div").css("height"));
                }
            });
            const _ = () => {
                let e, t, o;
                i = $window.scrollTop() + pnpHelper.getNavHeight(!0), n = i + $window.outerHeight(),
                    b = function(e, t) {
                        let i = $window.scrollTop() + pnpHelper.getNavHeight(!0);
                        if (i < e || i > t) return;
                        return (i - e) / (t - e);
                    }(a, l - y), i < a ? (e = u + "px", t = h + "px", o = w + "px") : i > l - y ? (e = f + "px",
                        t = g + "px", o = "0px") : (e = u + m * b + "px", t = h + v * b + "px", o = w - w * b + "px"),
                    p.parent().css("height", t), p.css({
                        width: e,
                        right: o
                    });
            };
        });
    }),
    function(e) {}(jQuery), $.pnp.initMicrointeractions = function() {},
     $.pnp.initNavigation = (() => {
        let e = {};
        e.mainContainer = $(document).find(".nav-container"), e.navBar = e.mainContainer.find(".nav-bar"),
            e.logo = e.navBar.find(".logo-container a img"), e.logo.src = e.logo.attr("src"),
            e.logo.scrolledSrc = e.logo.data("scrolled-logo"), e.mainContainer.length && (pnpHelper.navigation = {
                scrollUp: () => {
                    pnpHelper.navigation.swapClasses(), $window.scrollTop() > pnpHelper.getNavHeight(!1) ? e.mainContainer.addClass("show-nav smooth") : $window.scrollTop() < 1 && e.mainContainer.removeClass("scrolled show-nav smooth");
                },
                scrollDown: () => {
                    pnpHelper.navigation.swapClasses(), $window.scrollTop() > pnpHelper.getNavHeight(!1) && e.mainContainer.addClass("scrolled").removeClass("show-nav");
                },
                swapClasses: () => {
                    $window.scrollTop() > pnpHelper.getNavHeight(!1) ? (e.mainContainer.parent().find("[data-initial]").each((e, t) => {
                        $(t).removeClass($(t).data("initial")), $(t).addClass($(t).data("scrolled"));
                    }), e.logo.attr("src", t => {
                        if (void 0 !== e.logo.scrolledSrc) return e.logo.scrolledSrc;
                    })) : (e.mainContainer.parent().find("[data-initial]").each((e, t) => {
                        $(t).removeClass($(t).data("scrolled")), $(t).addClass($(t).data("initial"));
                    }), e.logo.attr("src", e.logo.src));
                },
                openMobNav: () => {
                    $("#mobile-toggle-menu-btn").addClass("active"), $(".sub-nav-links-mob").slideUp(),
                        $(".sub-nav-logo").removeClass("-open"), setTimeout(function() {
                            $(".nav-container .sub-nav").addClass("-hide");
                        }, 100), $html.addClass("mob-nav-in");
                },
                closeMobNav: () => {
                    $("#mobile-toggle-menu-btn").removeClass("active"), $(".nav-container .sub-nav").removeClass("-hide"),
                        setTimeout(function() {
                            $html.removeClass("mob-nav-in");
                        }, 100);
                },
                toggleMobNav: () => {
                    $html.hasClass("mob-nav-in") ? pnpHelper.navigation.closeMobNav() : pnpHelper.navigation.openMobNav();
                }
            }, $window.on({
                scrollup: () => {
                    pnpHelper.navigation.scrollUp();
                },
                scrolldown: () => {
                    pnpHelper.navigation.scrollDown();
                }
            }), $document.ready(pnpHelper.navigation.swapClasses), $document.on("click", "#mobile-toggle-menu-btn", function() {
                return pnpHelper.navigation.toggleMobNav(), !1;
            }), $document.on("touchmove", function(e) {
                $("html").hasClass("mob-nav-in") && e.preventDefault();
            }), $document.on("click", ".sub-nav-dropdown", function(e) {
                let t = $(e.currentTarget),
                    i = t.closest(".sub-nav-title").find(".sub-nav-drop-down-links"),
                    n = i.find(">ul>li"),
                    o = 0;
                n.each(e => {
                    o += $(n[e]).outerHeight();
                }), t.toggleClass("-open"), i.toggleClass("-in"), i.hasClass("-in") ? i.find("ul").height(o) : i.find("ul").height(0);
            }));
    }),
    
    (jQuery), $.pnp.initPostGrid = function() {}, $.pnp.initPostGridSlider = (() => {
        let e = $(".component-post-grid.-card-slider .post-slider-container");
        e.length && e.each((e, t) => {
            let i = $(t),
                n = i.find(".slider-container");
            if (n.length && !n.hasClass("slider-initialized")) {
                let e, o, s, r, a = !1,
                    l = !1,
                    d = 0,
                    c = n.find(".item");
                $(c[0]).outerWidth();
                n.on({
                    touchstart: () => {
                        a = !0;
                    },
                    touchend: () => {
                        a = !1;
                    },
                    mousedown: t => {
                        a = !0, n.addClass("active"), e = t.pageX - i.offset().left, o = n.scrollLeft();
                    },
                    mouseleave: () => {
                        a = !1, l = !1, $(t.currentTarget).find("a").css("pointer-events", "auto"), n.removeClass("active");
                    },
                    mouseup: e => {
                        a = !1, n.removeClass("active"), setTimeout(() => {
                            l = !1, $(e.currentTarget).find("a").css("pointer-events", "auto");
                        }, 200);
                    },
                    mousemove: t => {
                        if (a) {
                            l = !0, $(t.currentTarget).find("a").css("pointer-events", "none"), t.preventDefault();
                            const a = t.pageX - i.offset().left - e;
                            n.scrollLeft(o - a), r = n.scrollLeft() / s, r = Math.round(100 * (r + Number.EPSILON)) / 100;
                        }
                    },
                    scroll: e => {
                        r = n.scrollLeft() / s, r = Math.round(100 * (r + Number.EPSILON)) / 100;
                    }
                }), n.find("a").on("click", e => {
                    l && e.preventDefault();
                }), $(window).on("resize", () => {
                    setTimeout(() => {
                        d = 0, c.each((e, t) => {
                            d += $(t).outerWidth();
                        }), s = d - n.width();
                    }, 100);
                }), n.addClass("slider-initialized");
            }
        });
    }), $.pnp.initPostGridPerspectiveSlider = function(e) {}, 
    $.pnp.initSliders = function() {
        if ($(".component-slider .slider-container").length) {
            if (pnpHelper.dependencyCheck.requireDependencies("Slider", [pnpHelper.dependencyCheck.slickSlider])) return;
            $(".component-slider .slider-container:visible:not(.slick-initialized)").each(function() {
                 $(this).hasClass("-image-progress") && $.pnp.initSlidersImageProgress(this), $(this).hasClass("-image-testimonials") && $.pnp.initSlidersImageTestimonials(this),
                    $(this).hasClass("-full-width-image") && $.pnp.initSlidersFullWidthImage(this);
            });
        }
    }, $.pnp.initSlidersFullWidthImage = function(e) {
        var t = $(e),
            i = {
                slidesToShow: 1,
                arrows: !1,
                autoplay: t.data("autoplay"),
                autoplaySpeed: 1e3 * t.data("autoplay-speed"),
                dots: !0,
                infinite: !0,
                speed: 500,
                fade: !0,
                cssEase: "linear"
            };
        t.slick(i);
    }, $.pnp.initSlidersImageProgress = function(e) {
        var t, i, n, o, s = $(e),
            r = s.closest(".slider-parent-container").find(".slider-navigation-container"),
            a = r.find(".slider-navigation"),
            l = s.data("autoplay-speed"),
            d = r.data("slides-to-show"),
            c = {
                infinite: !0,
                mobileFirst: !1,
                speed: 0,
                arrows: !1,
                dots: !1,
                fade: !0,
                asNavFor: "#" + r.attr("id")
            },
            p = {
                infinite: !0,
                mobileFirst: !1,
                arrows: !1,
                dots: !1,
                slidesToShow: d,
                asNavFor: "#" + s.attr("id"),
                responsive: [{
                    breakpoint: pnpHelper.bootstrap.xlg,
                    settings: {
                        slidesToShow: v(d)
                    }
                }, {
                    breakpoint: pnpHelper.bootstrap.lg,
                    settings: {
                        slidesToShow: v(d < 5 ? d : d - 1)
                    }
                }, {
                    breakpoint: pnpHelper.bootstrap.md,
                    settings: {
                        slidesToShow: v(d < 5 ? d : d - 2)
                    }
                }, {
                    breakpoint: pnpHelper.bootstrap.xs,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            };
        r.slick(p), s.on("init", function() {
            s.find(".slick-current").addClass("-slide-in");
        }).slick(c), h(a), a.find(".navigation-label").on("click", function() {
            g($(this).data("slide-number"));
        });
        const u = {
            mouseenter: function() {
                t = !0;
            },
            mouseleave: function() {
                t = !1;
            }
        };

        function h(e) {
            e.removeClass("-active"), e.each(function(e, t) {
                $(this).find(".navigation-label").data("slide-number") === s.slick("slickCurrentSlide") && ($(this).addClass("-active"),
                    f(o = $(this).find(".slider-progress > .progress")));
            });
        }

        function f(e) {
            m(), n = 0, t = !1, i = setInterval(function() {
                !1 === t && (n += 1 / (l + .1), e.css({
                    width: n + "%"
                }), n >= 100 && (clearTimeout(i), g()));
            }, 10);
        }

        function g(e) {
            t = !0, s.find(".slick-slide").removeClass("-slide-out"), s.find(".slick-current").removeClass("-slide-in").addClass("-slide-out"),
                setTimeout(function() {
                    void 0 !== e && null !== e ? s.slick("slickGoTo", e) : s.slick("slickNext"), f(),
                        t = !1;
                }, 500);
        }

        function m() {
            $(".slider-progress>.progress").css("width", "0"), o.css({
                width: "0%"
            }), clearTimeout(i);
        }

        function v(e) {
            var t = e - 1;
            return t <= 2 ? 2 : t;
        }
        s.on({
            afterChange: function(e, t) {
                s.find(".slick-slide").removeClass("-slide-in"), s.find(".slick-current").addClass("-slide-in"),
                    h(a);
            }
        }), a.on(u);
    };