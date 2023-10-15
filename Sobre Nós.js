window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none"; 
    }, 500); 
});


! function(e) {
    
}(jQuery),

("undefined" != typeof module && module.exports ? module : window);

var fixto = function(e, t, i) {}

! function(e) {}(jQuery, window),

function(e) {
        "use strict";
        var t = "selectric",
            i = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel",
            n = ".sl",
            
            s = {
                add: function(e, t, i) {
                    this[e] || (this[e] = {}), this[e][t] = i;
                },
                remove: function(e, t) {
                    delete this[e][t];
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

                function U(e) {
                    x && (p.add(h).add(c).remove(), !e && A.removeData(t).removeData("value"), A.prop("tabindex", I).off(n).off(T).unwrap().unwrap(),
                        x = !1);
                }!(d);
            };
        e.fn[t] = function(i) {}, e.fn[t].hooks = s;
    }(jQuery),
    (function(e) {});

var $window = $(window),
    $document = $(document),
    $body = $("body"),
    $html = $("html"),
    $navBar = $("#desktop-nav"),
    pnpHelper = {};

function doBrowserCheck(e) {
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) pnpHelper.browser.isFirefox = !0,
        e && $html.addClass("browser-firefox");
    else if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) pnpHelper.browser.isChrome = !0,
        e && ($html.addClass("browser-chrome"), $html.addClass("browser-webkit"));
    else if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) pnpHelper.browser.isSafari = !0,
        e && ($html.addClass("browser-safari"), $html.addClass("browser-webkit"));
    else {
        var t;
        (t = function() {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE ");
            if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
            if (e.indexOf("Trident/") > 0) {
                var i = e.indexOf("rv:");
                return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
            }
            var n = e.indexOf("Edge/");
            return n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10);
        }()) && (pnpHelper.browser.isIE = !0, pnpHelper.browser.version.ie = t, e && ($html.addClass("browser-ie"),
            $html.addClass("browser-ie-" + t), $html.addClass("browser-lt-ie-" + (t + 1)), t < 12 ? $html.addClass("browser-lt-edge") : t >= 12 && $html.addClass("browser-edge")));
    }
    navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) && (pnpHelper.browser.isIOS = !0,
        navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i) && (pnpHelper.browser.version.ios = 7,
            e && $html.addClass("os-ios-7")), e && $html.addClass("os-ios"));
}

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
},  pnpHelper.browser = {
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
    $html.addClass("touch").removeClass("no-touch")), pnpHelper.modal = {
    open: function(e) {}

}, pnpHelper.getUrlParameter = function(e) {};

var lastScrollTop = 0;

function scrollDirection() {
var e = $window.scrollTop();
    e >= lastScrollTop ? $window.trigger("scrolldown") : $window.trigger("scrollup"),
        lastScrollTop = e;
}
window.addEventListener("scroll", scrollDirection), pnpHelper.urlWithParams = ((e, t, i = window.location.href) => {}), pnpHelper.empty = function(e) {
        return void 0 === e || null === e;
    },
    function(e) {
        e.pnp = {};
    }
    (jQuery),
     $document.ready(function() {
        $.pnp.initNavigation();
    }), $(function() {}),
    (jQuery), $.pnp.initNavigation = (() => {
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
    });