function revslider_showDoubleJqueryError(t) {
    var e = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    e += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.", e = "<span style='font-size:16px;color:#BC0C06;'>" + e + "</span>", jQuery(t).show().html(e)
}! function(t, e) {
    function a(a, i) {
        if (("preview1" == i.navigationStyle || "preview3" == i.navigationStyle || "preview4" == i.navigationStyle) && (i.soloArrowLeftHalign = "left", i.soloArrowLeftValign = "center", i.soloArrowLeftHOffset = 0, i.soloArrowLeftVOffset = 0, i.soloArrowRightHalign = "right", i.soloArrowRightValign = "center", i.soloArrowRightHOffset = 0, i.soloArrowRightVOffset = 0, i.navigationArrows = "solo"), i.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != i.fullWidth && "on" != i.fullScreen && (i.autoHeight = "off"), "on" == i.fullScreen && (i.autoHeight = "on"), "on" != i.fullWidth && "on" != i.fullScreen && (forceFulWidth = "off"), "on" == i.fullWidth && "off" == i.autoHeight && a.css({
                maxHeight: i.startheight + "px"
            }), E() && "on" == i.hideThumbsOnMobile && "thumb" == i.navigationType && (i.navigationType = "none"), E() && "on" == i.hideBulletsOnMobile && "bullet" == i.navigationType && (i.navigationType = "none"), E() && "on" == i.hideBulletsOnMobile && "both" == i.navigationType && (i.navigationType = "none"), E() && "on" == i.hideArrowsOnMobile && (i.navigationArrows = "none"), "on" == i.forceFullWidth && 0 == a.closest(".forcefullwidth_wrapper_tp_banner").length) {
            var s = a.parent().offset().left,
                r = a.parent().css("marginBottom"),
                f = a.parent().css("marginTop");
            r == e && (r = 0), f == e && (f = 0), a.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + f + ";margin-bottom:" + r + '" class="forcefullwidth_wrapper_tp_banner"></div>'), a.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + a.height() + 'px"></div>'), a.css({
                backgroundColor: a.parent().css("backgroundColor"),
                backgroundImage: a.parent().css("backgroundImage")
            }), a.parent().css({
                left: 0 - s + "px",
                position: "absolute",
                width: t(window).width()
            }), i.width = t(window).width()
        }
        try {
            a.parent().find(".tp-bullets.tp-thumbs").css(i.hideThumbsUnderResolution > t(window).width() && 0 != i.hideThumbsUnderResolution ? {
                display: "none"
            } : {
                display: "block"
            })
        } catch (u) {}
        if (!a.hasClass("revslider-initialised")) {
            a.addClass("revslider-initialised"), a.attr("id") == e && a.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), i.firefox13 = !1, i.ie = !t.support.opacity, i.ie9 = 9 == document.documentMode, i.origcd = i.delay; {
                var g = t.fn.jquery.split("."),
                    v = parseFloat(g[0]),
                    w = parseFloat(g[1]);
                parseFloat(g[2] || "0")
            }
            1 == v && 7 > w && a.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + g + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), v > 1 && (i.ie = !1), t.support.transition || (t.fn.transition = t.fn.animate), a.find(".caption").each(function() {
                t(this).addClass("tp-caption")
            }), E() && a.find(".tp-caption").each(function() {
                1 == t(this).data("autoplay") && t(this).data("autoplay", !1)
            });
            var b = 0,
                y = 0,
                x = "http";
            if ("https:" === location.protocol && (x = "https"), a.find(".tp-caption iframe").each(function() {
                    try {
                        if (t(this).attr("src").indexOf("you") > 0 && 0 == b) {
                            b = 1;
                            var e = document.createElement("script"),
                                a = "https";
                            e.src = a + "://www.youtube.com/iframe_api";
                            var i = document.getElementsByTagName("script")[0],
                                o = !0;
                            t("head").find("*").each(function() {
                                t(this).attr("src") == a + "://www.youtube.com/iframe_api" && (o = !1)
                            }), o && i.parentNode.insertBefore(e, i)
                        }
                    } catch (n) {}
                }), a.find(".tp-caption iframe").each(function() {
                    try {
                        if (t(this).attr("src").indexOf("vim") > 0 && 0 == y) {
                            y = 1;
                            var e = document.createElement("script");
                            e.src = x + "://a.vimeocdn.com/js/froogaloop2.min.js";
                            var a = document.getElementsByTagName("script")[0],
                                i = !0;
                            t("head").find("*").each(function() {
                                t(this).attr("src") == x + "://a.vimeocdn.com/js/froogaloop2.min.js" && (i = !1)
                            }), i && a.parentNode.insertBefore(e, a)
                        }
                    } catch (o) {}
                }), a.find(".tp-caption video").each(function() {
                    t(this).removeClass("video-js").removeClass("vjs-default-skin"), t(this).attr("preload", ""), t(this).css({
                        display: "none"
                    })
                }), "on" == i.shuffle)
                for (var T = 0; T < a.find(">ul:first-child >li").length; T++) {
                    var C = Math.round(Math.random() * a.find(">ul:first-child >li").length);
                    a.find(">ul:first-child >li:eq(" + C + ")").prependTo(a.find(">ul:first-child"))
                }
            i.slots = 4, i.act = -1, i.next = 0, i.startWithSlide != e && (i.next = i.startWithSlide);
            var k = o("#")[0];
            if (k.length < 9 && k.split("slide").length > 1) {
                var z = parseInt(k.split("slide")[1], 0);
                1 > z && (z = 1), z > a.find(">ul:first >li").length && (z = a.find(">ul:first >li").length), i.next = z - 1
            }
            i.firststart = 1, i.navigationHOffset == e && (i.navOffsetHorizontal = 0), i.navigationVOffset == e && (i.navOffsetVertical = 0), a.append('<div class="tp-loader ' + i.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 == a.find(".tp-bannertimer").length && a.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
            var O = a.find(".tp-bannertimer");
            if (O.length > 0 && O.css({
                    width: "0%"
                }), a.addClass("tp-simpleresponsive"), i.container = a, i.slideamount = a.find(">ul:first >li").length, 0 == a.height() && a.height(i.startheight), (i.startwidth == e || 0 == i.startwidth) && (i.startwidth = a.width()), (i.startheight == e || 0 == i.startheight) && (i.startheight = a.height()), i.width = a.width(), i.height = a.height(), i.bw = i.startwidth / a.width(), i.bh = i.startheight / a.height(), i.width != i.startwidth && (i.height = Math.round(i.startheight * (i.width / i.startwidth)), a.height(i.height)), 0 != i.shadow) {
                a.parent().append('<div class="tp-bannershadow tp-shadow' + i.shadow + '"></div>');
                var s = 0;
                "on" == i.forceFullWidth && (s = 0 - i.container.parent().offset().left), a.parent().find(".tp-bannershadow").css({
                    width: i.width,
                    left: s
                })
            }
            a.find("ul").css({
                display: "none"
            });
            a.find("ul").css({
                display: "block"
            }), m(a, i), "off" != i.parallax && J(a, i), i.slideamount > 1 && d(a, i), i.slideamount > 1 && "thumb" == i.navigationType && K(a, i), i.slideamount > 1 && l(a, i), "on" == i.keyboardNavigation && h(a, i);
            try {
                c(a, i)
            } catch (u) {}
            i.hideThumbs > 0 && p(a, i), L(a, i), i.slideamount > 1 && q(a, i), setTimeout(function() {
                a.trigger("revolution.slide.onloaded")
            }, 500), t("body").data("rs-fullScreenMode", !1), t(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                t("body").data("rs-fullScreenMode", !t("body").data("rs-fullScreenMode")), t("body").data("rs-fullScreenMode") && setTimeout(function() {
                    t(window).trigger("resize")
                }, 200)
            }), t(window).resize(function() {
                if (0 != t("body").find(a) && "on" == i.forceFullWidth) {
                    var e = i.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                    i.container.parent().css({
                        left: 0 - e + "px",
                        width: t(window).width()
                    })
                }(a.outerWidth(!0) != i.width || a.is(":hidden")) && n(a, i)
            });
            try {
                0 != i.hideThumbsUnderResoluition && "thumb" == i.navigationType && t(".tp-bullets").css(i.hideThumbsUnderResoluition > t(window).width() ? {
                    display: "none"
                } : {
                    display: "block"
                })
            } catch (u) {}
            a.find(".tp-scrollbelowslider").on("click", function() {
                var e = 0;
                try {
                    e = t("body").find(i.fullScreenOffsetContainer).height()
                } catch (o) {}
                try {
                    e -= t(this).data("scrolloffset")
                } catch (o) {}
                t("body,html").animate({
                    scrollTop: a.offset().top + a.find(">ul >li").height() - e + "px"
                }, {
                    duration: 400
                })
            });
            var I = a.parent();
            t(window).width() < i.hideSliderAtLimit && (a.trigger("stoptimer"), "none" != I.css("display") && I.data("olddisplay", I.css("display")), I.css({
                display: "none"
            }))
        }
    }
    t.fn.extend({
        revolution: function(i) {
            return defaults = {
                delay: 9e3,
                startheight: 500,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",
                hideTimerBar: "off",
                hideThumbs: 200,
                hideNavDelayOnMobile: 1500,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationInGrid: "off",
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,
                navigationStyle: "round",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                keyboardNavigation: "on",
                touchenabled: "on",
                onHoverStop: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",
                minFullScreenHeight: 0,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                dottedOverlay: "none",
                forceFullWidth: "off",
                spinner: "spinner0",
                swipe_velocity: .4,
                swipe_max_touches: 1,
                swipe_min_touches: 1,
                drag_block_vertical: !1,
                isJoomla: !1,
                parallax: "off",
                parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                parallaxBgFreeze: "off",
                parallaxOpacity: "on",
                parallaxDisableOnMobile: "off"
            }, i = t.extend({}, defaults, i), this.each(function() {
                try {
                    console.groupCollapsed("Slider Revolution 4.5.7 Initialisation on " + t(this).attr("id")), console.groupCollapsed("Used Options:"), console.info(i), console.groupEnd(), console.groupCollapsed("Tween Engine:")
                } catch (o) {}
                if (punchgs.TweenLite == e) {
                    try {
                        console.error("GreenSock Engine Does not Exist!")
                    } catch (o) {}
                    return !1
                }
                punchgs.force3D = !0;
                try {
                    console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
                } catch (o) {}
                punchgs.TweenLite.lagSmoothing(1e3, 16), punchgs.force3D = "true", a(t(this), i);
                try {
                    console.groupEnd(), console.groupEnd()
                } catch (o) {}
            })
        },
        revscroll: function(e) {
            return this.each(function() {
                var a = t(this);
                t("body,html").animate({
                    scrollTop: a.offset().top + a.find(">ul >li").height() - e + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                var e = t(this),
                    a = e.parent().find(".tp-bannertimer"),
                    i = a.data("opt");
                n(e, i)
            })
        },
        revpause: function() {
            return this.each(function() {
                var e = t(this);
                e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause");
                var a = e.parent().find(".tp-bannertimer"),
                    i = a.data("opt");
                i.bannertimeronpause = !0, e.trigger("stoptimer")
            })
        },
        revresume: function() {
            return this.each(function() {
                var e = t(this);
                e.data("conthover", 0), e.data("conthover-changed", 1), e.trigger("revolution.slide.onresume");
                var a = e.parent().find(".tp-bannertimer"),
                    i = a.data("opt");
                i.bannertimeronpause = !1, e.trigger("starttimer")
            })
        },
        revnext: function() {
            return this.each(function() {
                var e = t(this);
                e.parent().find(".tp-rightarrow").click()
            })
        },
        revprev: function() {
            return this.each(function() {
                var e = t(this);
                e.parent().find(".tp-leftarrow").click()
            })
        },
        revmaxslide: function() {
            return t(this).find(">ul:first-child >li").length
        },
        revcurrentslide: function() {
            var e = t(this),
                a = e.parent().find(".tp-bannertimer"),
                i = a.data("opt");
            return i.act
        },
        revlastslide: function() {
            var e = t(this),
                a = e.parent().find(".tp-bannertimer"),
                i = a.data("opt");
            return i.lastslide
        },
        revshowslide: function(e) {
            return this.each(function() {
                var a = t(this);
                a.data("showus", e), a.parent().find(".tp-rightarrow").click()
            })
        }
    });
    var o = function(t) {
            for (var e, a = [], i = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), o = 0; o < i.length; o++) i[o] = i[o].replace("%3D", "="), e = i[o].split("="), a.push(e[0]), a[e[0]] = e[1];
            return a
        },
        n = function(a, i) {
            try {
                0 != i.hideThumbsUnderResoluition && "thumb" == i.navigationType && t(".tp-bullets").css(i.hideThumbsUnderResoluition > t(window).width() ? {
                    display: "none"
                } : {
                    display: "block"
                })
            } catch (o) {}
            a.find(".defaultimg").each(function() {
                g(t(this), i)
            });
            var s = a.parent();
            t(window).width() < i.hideSliderAtLimit ? (a.trigger("stoptimer"), "none" != s.css("display") && s.data("olddisplay", s.css("display")), s.css({
                display: "none"
            })) : a.is(":hidden") && (s.css(s.data("olddisplay") != e && "undefined" != s.data("olddisplay") && "none" != s.data("olddisplay") ? {
                display: s.data("olddisplay")
            } : {
                display: "block"
            }), a.trigger("restarttimer"), setTimeout(function() {
                n(a, i)
            }, 150));
            var r = 0;
            "on" == i.forceFullWidth && (r = 0 - i.container.parent().offset().left);
            try {
                a.parent().find(".tp-bannershadow").css({
                    width: i.width,
                    left: r
                })
            } catch (o) {}
            var d = a.find(">ul >li:eq(" + i.act + ") .slotholder"),
                l = a.find(">ul >li:eq(" + i.next + ") .slotholder");
            y(a, i, a), punchgs.TweenLite.set(l.find(".defaultimg"), {
                opacity: 0
            }), d.find(".defaultimg").css({
                opacity: 1
            }), l.find(".defaultimg").each(function() {
                var o = t(this);
                o.data("kenburn") != e && (o.data("kenburn").restart(), N(a, i, !0))
            });
            var h = a.find(">ul >li:eq(" + i.next + ")"),
                c = a.parent().find(".tparrows");
            c.hasClass("preview2") && c.css({
                width: parseInt(c.css("minWidth"), 0)
            }), W(h, i, !0), f(a, i)
        },
        s = function(e, a) {
            var i = t('<div style="display:none;"/>').appendTo(t("body"));
            i.html("<!--[if " + (a || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
            var o = i.find("a").length;
            return i.remove(), o
        },
        r = function(t, e) {
            L(e, t)
        },
        d = function(e, a) {
            var i = "hidebullets";
            0 == a.hideThumbs && (i = ""), ("bullet" == a.navigationType || "both" == a.navigationType) && e.parent().append('<div class="tp-bullets ' + i + " simplebullets " + a.navigationStyle + '"></div>');
            var o = e.parent().find(".tp-bullets");
            e.find(">ul:first >li").each(function(t) {
                e.find(">ul:first >li:eq(" + t + ") img:first").attr("src");
                o.append('<div class="bullet"></div>');
                o.find(".bullet:first")
            }), o.find(".bullet").each(function(i) {
                var o = t(this);
                i == a.slideamount - 1 && o.addClass("last"), 0 == i && o.addClass("first"), o.click(function() {
                    var t = !1;
                    "withbullet" == a.navigationArrows || "nexttobullets" == a.navigationArrows ? o.index() - 1 == a.act && (t = !0) : o.index() == a.act && (t = !0), 0 != a.transition || t || (a.next = "withbullet" == a.navigationArrows || "nexttobullets" == a.navigationArrows ? o.index() - 1 : o.index(), r(a, e))
                })
            }), o.append('<div class="tpclear"></div>'), f(e, a)
        },
        l = function(t, a) {
            function i(e) {
                t.parent().append('<div style="' + o + '" class="tp-' + e + "arrow " + n + " tparrows " + s + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
            }
            var o = (t.find(".tp-bullets"), ""),
                n = "hidearrows";
            0 == a.hideThumbs && (n = "");
            var s = a.navigationStyle;
            "none" == a.navigationArrows && (o = "visibility:hidden;display:none"), a.soloArrowStyle = "default " + a.navigationStyle, "none" != a.navigationArrows && "nexttobullets" != a.navigationArrows && (s = a.soloArrowStyle), i("left"), i("right"), t.parent().find(".tp-rightarrow").click(function() {
                0 == a.transition && (a.next = t.data("showus") != e && -1 != t.data("showus") ? t.data("showus") - 1 : a.next + 1, t.data("showus", -1), a.next >= a.slideamount && (a.next = 0), a.next < 0 && (a.next = 0), a.act != a.next && r(a, t))
            }), t.parent().find(".tp-leftarrow").click(function() {
                0 == a.transition && (a.next = a.next - 1, a.leftarrowpressed = 1, a.next < 0 && (a.next = a.slideamount - 1), r(a, t))
            }), f(t, a)
        },
        h = function(a, i) {
            t(document).keydown(function(t) {
                0 == i.transition && 39 == t.keyCode && (i.next = a.data("showus") != e && -1 != a.data("showus") ? a.data("showus") - 1 : i.next + 1, a.data("showus", -1), i.next >= i.slideamount && (i.next = 0), i.next < 0 && (i.next = 0), i.act != i.next && r(i, a)), 0 == i.transition && 37 == t.keyCode && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), r(i, a))
            }), f(a, i)
        },
        c = function(e, a) {
            if ("on" == a.touchenabled) try {
                var i = Hammer(e, {
                    drag_block_vertical: a.drag_block_vertical,
                    drag_lock_to_axis: !0,
                    swipe_velocity: a.swipe_velocity,
                    swipe_max_touches: a.swipe_max_touches,
                    swipe_min_touches: a.swipe_min_touches,
                    prevent_default: !1
                });
                i.on("swipeleft", function() {
                    0 == a.transition && (a.next = a.next + 1, a.next == a.slideamount && (a.next = 0), r(a, e))
                }), i.on("swiperight", function() {
                    0 == a.transition && (a.next = a.next - 1, a.leftarrowpressed = 1, a.next < 0 && (a.next = a.slideamount - 1), r(a, e))
                }), i.on("swipeup", function() {
                    t("html, body").animate({
                        scrollTop: e.offset().top + e.height() + "px"
                    })
                }), i.on("swipedown", function() {
                    t("html, body").animate({
                        scrollTop: e.offset().top - t(window).height() + "px"
                    })
                })
            } catch (o) {}
        },
        p = function(t, e) {
            var a = t.parent().find(".tp-bullets"),
                i = t.parent().find(".tparrows");
            if (null == a) {
                t.append('<div class=".tp-bullets"></div>');
                var a = t.parent().find(".tp-bullets")
            }
            if (null == i) {
                t.append('<div class=".tparrows"></div>');
                var i = t.parent().find(".tparrows")
            }
            if (t.data("hideThumbs", e.hideThumbs), a.addClass("hidebullets"), i.addClass("hidearrows"), E()) try {
                t.hammer().on("touch", function() {
                    t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), a.removeClass("hidebullets"), i.removeClass("hidearrows")
                }), t.hammer().on("release", function() {
                    t.removeClass("hovered"), t.trigger("playtimer"), t.hasClass("hovered") || a.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                        a.addClass("hidebullets"), i.addClass("hidearrows"), t.trigger("playtimer")
                    }, e.hideNavDelayOnMobile))
                })
            } catch (o) {} else a.hover(function() {
                e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), a.addClass("hovered"), clearTimeout(t.data("hideThumbs")), a.removeClass("hidebullets"), i.removeClass("hidearrows")
            }, function() {
                e.overnav = !1, t.trigger("playtimer"), a.removeClass("hovered"), t.hasClass("hovered") || a.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                    a.addClass("hidebullets"), i.addClass("hidearrows")
                }, e.hideThumbs))
            }), i.hover(function() {
                e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), a.addClass("hovered"), clearTimeout(t.data("hideThumbs")), a.removeClass("hidebullets"), i.removeClass("hidearrows")
            }, function() {
                e.overnav = !1, t.trigger("playtimer"), a.removeClass("hovered")
            }), t.on("mouseenter", function() {
                t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), a.removeClass("hidebullets"), i.removeClass("hidearrows")
            }), t.on("mouseleave", function() {
                t.removeClass("hovered"), t.trigger("playtimer"), t.hasClass("hovered") || a.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                    a.addClass("hidebullets"), i.addClass("hidearrows")
                }, e.hideThumbs))
            })
        },
        f = function(e, a) {
            var i = e.parent(),
                o = i.find(".tp-bullets");
            if ("thumb" == a.navigationType) {
                o.find(".thumb").each(function() {
                    var e = t(this);
                    e.css({
                        width: a.thumbWidth * a.bw + "px",
                        height: a.thumbHeight * a.bh + "px"
                    })
                });
                var n = o.find(".tp-mask");
                n.width(a.thumbWidth * a.thumbAmount * a.bw), n.height(a.thumbHeight * a.bh), n.parent().width(a.thumbWidth * a.thumbAmount * a.bw), n.parent().height(a.thumbHeight * a.bh)
            }
            var s = i.find(".tp-leftarrow"),
                r = i.find(".tp-rightarrow");
            "thumb" == a.navigationType && "nexttobullets" == a.navigationArrows && (a.navigationArrows = "solo"), "nexttobullets" == a.navigationArrows && (s.prependTo(o).css({
                "float": "left"
            }), r.insertBefore(o.find(".tpclear")).css({
                "float": "left"
            }));
            var d = 0;
            "on" == a.forceFullWidth && (d = 0 - a.container.parent().offset().left);
            var l = 0,
                h = 0;
            "on" == a.navigationInGrid && (l = e.width() > a.startwidth ? (e.width() - a.startwidth) / 2 : 0, h = e.height() > a.startheight ? (e.height() - a.startheight) / 2 : 0), "none" != a.navigationArrows && "nexttobullets" != a.navigationArrows && (s.css({
                position: "absolute"
            }), r.css({
                position: "absolute"
            }), "center" == a.soloArrowLeftValign && s.css({
                top: "50%",
                marginTop: a.soloArrowLeftVOffset - Math.round(s.innerHeight() / 2) + "px"
            }), "bottom" == a.soloArrowLeftValign && s.css({
                top: "auto",
                bottom: 0 + a.soloArrowLeftVOffset + "px"
            }), "top" == a.soloArrowLeftValign && s.css({
                bottom: "auto",
                top: 0 + a.soloArrowLeftVOffset + "px"
            }), "center" == a.soloArrowLeftHalign && s.css({
                left: "50%",
                marginLeft: d + a.soloArrowLeftHOffset - Math.round(s.innerWidth() / 2) + "px"
            }), "left" == a.soloArrowLeftHalign && s.css({
                left: l + a.soloArrowLeftHOffset + d + "px"
            }), "right" == a.soloArrowLeftHalign && s.css({
                right: l + a.soloArrowLeftHOffset - d + "px"
            }), "center" == a.soloArrowRightValign && r.css({
                top: "50%",
                marginTop: a.soloArrowRightVOffset - Math.round(r.innerHeight() / 2) + "px"
            }), "bottom" == a.soloArrowRightValign && r.css({
                top: "auto",
                bottom: 0 + a.soloArrowRightVOffset + "px"
            }), "top" == a.soloArrowRightValign && r.css({
                bottom: "auto",
                top: 0 + a.soloArrowRightVOffset + "px"
            }), "center" == a.soloArrowRightHalign && r.css({
                left: "50%",
                marginLeft: d + a.soloArrowRightHOffset - Math.round(r.innerWidth() / 2) + "px"
            }), "left" == a.soloArrowRightHalign && r.css({
                left: l + a.soloArrowRightHOffset + d + "px"
            }), "right" == a.soloArrowRightHalign && r.css({
                right: l + a.soloArrowRightHOffset - d + "px"
            }), null != s.position() && s.css({
                top: Math.round(parseInt(s.position().top, 0)) + "px"
            }), null != r.position() && r.css({
                top: Math.round(parseInt(r.position().top, 0)) + "px"
            })), "none" == a.navigationArrows && (s.css({
                visibility: "hidden"
            }), r.css({
                visibility: "hidden"
            })), "center" == a.navigationVAlign && o.css({
                top: "50%",
                marginTop: a.navigationVOffset - Math.round(o.innerHeight() / 2) + "px"
            }), "bottom" == a.navigationVAlign && o.css({
                bottom: 0 + a.navigationVOffset + "px"
            }), "top" == a.navigationVAlign && o.css({
                top: 0 + a.navigationVOffset + "px"
            }), "center" == a.navigationHAlign && o.css({
                left: "50%",
                marginLeft: d + a.navigationHOffset - Math.round(o.innerWidth() / 2) + "px"
            }), "left" == a.navigationHAlign && o.css({
                left: 0 + a.navigationHOffset + d + "px"
            }), "right" == a.navigationHAlign && o.css({
                right: 0 + a.navigationHOffset - d + "px"
            })
        },
        u = function(a) {
            var i = a.container;
            a.beforli = a.next - 1, a.comingli = a.next + 1, a.beforli < 0 && (a.beforli = a.slideamount - 1), a.comingli >= a.slideamount && (a.comingli = 0);
            var o = i.find(">ul:first-child >li:eq(" + a.comingli + ")"),
                n = i.find(">ul:first-child >li:eq(" + a.beforli + ")"),
                s = n.find(".defaultimg").attr("src"),
                r = o.find(".defaultimg").attr("src");
            a.arr == e && (a.arr = i.parent().find(".tparrows"), a.rar = i.parent().find(".tp-rightarrow"), a.lar = i.parent().find(".tp-leftarrow"), a.raimg = a.rar.find(".tp-arr-imgholder"), a.laimg = a.lar.find(".tp-arr-imgholder"), a.raimg_b = a.rar.find(".tp-arr-imgholder2"), a.laimg_b = a.lar.find(".tp-arr-imgholder2"), a.ratit = a.rar.find(".tp-arr-titleholder"), a.latit = a.lar.find(".tp-arr-titleholder"));
            var d = a.arr,
                l = a.rar,
                h = a.lar,
                c = a.raimg,
                p = a.laimg,
                f = a.raimg_b,
                u = a.laimg_b,
                g = a.ratit,
                m = a.latit;
            if (o.data("title") != e && g.html(o.data("title")), n.data("title") != e && m.html(n.data("title")), l.hasClass("itishovered") && l.width(g.outerWidth(!0) + parseInt(l.css("minWidth"), 0)), h.hasClass("itishovered") && h.width(m.outerWidth(!0) + parseInt(h.css("minWidth"), 0)), d.hasClass("preview2") && !d.hasClass("hashoveralready"))
                if (d.addClass("hashoveralready"), E()) {
                    var d = t(this),
                        v = d.find(".tp-arr-titleholder");
                    v.addClass("alwayshidden"), punchgs.TweenLite.set(v, {
                        autoAlpha: 0
                    })
                } else d.hover(function() {
                    var e = t(this),
                        a = e.find(".tp-arr-titleholder");
                    e.width(a.outerWidth(!0) + parseInt(e.css("minWidth"), 0)), e.addClass("itishovered")
                }, function() {
                    {
                        var e = t(this);
                        e.find(".tp-arr-titleholder")
                    }
                    e.css({
                        width: parseInt(e.css("minWidth"), 0)
                    }), e.removeClass("itishovered")
                });
            n.data("thumb") != e && (s = n.data("thumb")), o.data("thumb") != e && (r = o.data("thumb")), d.hasClass("preview4") ? (f.css({
                backgroundImage: "url(" + r + ")"
            }), u.css({
                backgroundImage: "url(" + s + ")"
            }), punchgs.TweenLite.fromTo(f, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" + r + ")"
                    }), punchgs.TweenLite.set(f, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(u, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    p.css({
                        backgroundImage: "url(" + s + ")"
                    }), punchgs.TweenLite.set(u, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(c, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(c, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(p, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(p, {
                        x: 0
                    })
                }
            })) : (punchgs.TweenLite.to(c, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" + r + ")"
                    }), p.css({
                        backgroundImage: "url(" + s + ")"
                    })
                }
            }), punchgs.TweenLite.to(p, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.to(c, .5, {
                        autoAlpha: 1,
                        delay: .2
                    }), punchgs.TweenLite.to(p, .5, {
                        autoAlpha: 1,
                        delay: .2
                    })
                }
            })), l.hasClass("preview4") && !l.hasClass("hashoveralready") && (l.addClass("hashoveralready"), l.hover(function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    a = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(e, .4, {
                    x: e.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                }), punchgs.TweenLite.to(a, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    a = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(e, .4, {
                    x: e.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), punchgs.TweenLite.to(a, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }), h.hover(function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    a = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(e, .4, {
                    x: 0 - e.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                }), punchgs.TweenLite.to(a, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    a = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(e, .4, {
                    x: 0 - e.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), punchgs.TweenLite.to(a, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }))
        },
        g = function(a, i) {
            if (i.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
                    height: i.container.height()
                }), i.container.closest(".rev_slider_wrapper").css({
                    height: i.container.height()
                }), i.width = parseInt(i.container.width(), 0), i.height = parseInt(i.container.height(), 0), i.bw = i.width / i.startwidth, i.bh = i.height / i.startheight, i.bh > i.bw && (i.bh = i.bw), i.bh < i.bw && (i.bw = i.bh), i.bw < i.bh && (i.bh = i.bw), i.bh > 1 && (i.bw = 1, i.bh = 1), i.bw > 1 && (i.bw = 1, i.bh = 1), i.height = Math.round(i.startheight * (i.width / i.startwidth)), i.height > i.startheight && "on" != i.autoHeight && (i.height = i.startheight), "on" == i.fullScreen) {
                i.height = i.bw * i.startheight;
                var o = (i.container.parent().width(), t(window).height());
                if (i.fullScreenOffsetContainer != e) {
                    try {
                        var n = i.fullScreenOffsetContainer.split(",");
                        t.each(n, function(e, a) {
                            o -= t(a).outerHeight(!0), o < i.minFullScreenHeight && (o = i.minFullScreenHeight)
                        })
                    } catch (s) {}
                    try {
                        i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != e && i.fullScreenOffset.length > 0 ? o -= t(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != e && i.fullScreenOffset.length > 0 && (o -= parseInt(i.fullScreenOffset, 0)), o < i.minFullScreenHeight && (o = i.minFullScreenHeight)
                    } catch (s) {}
                }
                i.container.parent().height(o), i.container.closest(".rev_slider_wrapper").height(o), i.container.css({
                    height: "100%"
                }), i.height = o
            } else i.container.height(i.height);
            i.slotw = Math.ceil(i.width / i.slots), i.sloth = Math.ceil("on" == i.fullScreen ? t(window).height() / i.slots : i.height / i.slots), "on" == i.autoHeight && (i.sloth = Math.ceil(a.height() / i.slots))
        },
        m = function(a, i) {
            a.find(".tp-caption").each(function() {
                t(this).addClass(t(this).data("transition")), t(this).addClass("start")
            }), a.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: a.parent().css("maxHeight")
            }), "on" == i.autoHeight && (a.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: "none"
            }), a.css({
                maxHeight: "none"
            }), a.parent().css({
                maxHeight: "none"
            })), a.find(">ul:first >li").each(function() {
                var a = t(this);
                if (a.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }), a.data("link") != e) {
                    var i = a.data("link"),
                        o = "_self",
                        n = 60;
                    "back" == a.data("slideindex") && (n = 0);
                    var s = a.data("linktoslide");
                    a.data("target") != e && (o = a.data("target")), "slide" == i ? a.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + n + ';" data-x="center" data-y="center" data-linktoslide="' + s + '" data-start="0"><a style="width:100%;height:100%;display:block"><span style="width:100%;height:100%;display:block"></span></a></div>') : (s = "no", a.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + n + ';" data-x="center" data-y="center" data-linktoslide="' + s + '" data-start="0"><a style="width:100%;height:100%;display:block" target="' + o + '" href="' + i + '"><span style="width:100%;height:100%;display:block"></span></a></div>'))
                }
            }), a.parent().css({
                overflow: "visible"
            }), a.find(">ul:first >li >img").each(function(a) {
                var o = t(this);
                o.addClass("defaultimg"), o.data("lazyload") != e && 1 != o.data("lazydone") || g(o, i), o.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + o.data("duration") + '"data-zoomstart="' + o.data("zoomstart") + '"data-zoomend="' + o.data("zoomend") + '"data-rotationstart="' + o.data("rotationstart") + '"data-rotationend="' + o.data("rotationend") + '"data-ease="' + o.data("ease") + '"data-duration="' + o.data("duration") + '"data-bgpositionend="' + o.data("bgpositionend") + '"data-bgposition="' + o.data("bgposition") + '"data-duration="' + o.data("duration") + '"data-kenburns="' + o.data("kenburns") + '"data-easeme="' + o.data("ease") + '"data-bgfit="' + o.data("bgfit") + '"data-bgfitend="' + o.data("bgfitend") + '"data-owidth="' + o.data("owidth") + '"data-oheight="' + o.data("oheight") + '"></div>'), "none" != i.dottedOverlay && i.dottedOverlay != e && o.closest(".slotholder").append('<div class="tp-dottedoverlay ' + i.dottedOverlay + '"></div>');
                var n = o.attr("src"),
                    r = (o.data("lazyload"), o.data("bgfit")),
                    d = o.data("bgrepeat"),
                    l = o.data("bgposition");
                r == e && (r = "cover"), d == e && (d = "no-repeat"), l == e && (l = "center center");
                var h = o.closest(".slotholder");
                o.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + o.data("lazyload") + '" data-bgfit="' + r + '"data-bgposition="' + l + '" data-bgrepeat="' + d + '" data-lazydone="' + o.data("lazydone") + '" src="' + n + '" data-src="' + n + '" style="background-color:' + o.css("backgroundColor") + ";background-repeat:" + d + ";background-image:url(" + n + ");background-size:" + r + ";background-position:" + l + ';width:100%;height:100%;"></div>'), s(8) && (h.find(".tp-bgimg").css({
                    backgroundImage: "none",
                    "background-image": "none"
                }), h.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + n + '" style="width:100%">')), o.css({
                    opacity: 0
                }), o.data("li-id", a)
            })
        },
        v = function(t, a, i, o) {
            var n = t,
                r = n.find(".defaultimg"),
                d = n.data("zoomstart"),
                l = n.data("rotationstart");
            r.data("currotate") != e && (l = r.data("currotate")), r.data("curscale") != e && (d = r.data("curscale")), g(r, a);
            var h = r.data("src"),
                c = r.css("background-color"),
                p = a.width,
                f = a.height,
                u = r.data("fxof");
            "on" == a.autoHeight && (f = a.container.height()), u == e && (u = 0), fullyoff = 0;
            var m = 0,
                v = r.data("bgfit"),
                w = r.data("bgrepeat"),
                y = r.data("bgposition");
            if (v == e && (v = "cover"), w == e && (w = "no-repeat"), y == e && (y = "center center"), s(8)) {
                n.data("kenburns", "off");
                var x = h;
                h = ""
            }
            if ("on" == n.data("kenburns") && (v = d, v.toString().length < 4 && (v = $(v, n, a))), "horizontal" == o) {
                if (!i) var m = 0 - a.slotw;
                for (var T = 0; T < a.slots; T++) n.append('<div class="slot" style="position:absolute;top:' + (0 + fullyoff) + "px;left:" + (u + T * a.slotw) + "px;overflow:hidden;width:" + (a.slotw + .6) + "px;height:" + f + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + m + "px;width:" + (a.slotw + .6) + "px;height:" + f + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:0px;left:" + (0 - T * a.slotw) + "px;width:" + p + "px;height:" + f + "px;background-image:url(" + h + ");background-repeat:" + w + ";background-size:" + v + ";background-position:" + y + ';"></div></div></div>'), d != e && l != e && punchgs.TweenLite.set(n.find(".slot").last(), {
                    rotationZ: l
                }), s(8) && (n.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + x + '" style="width:100%;height:auto">'), b(n, a))
            } else {
                if (!i) var m = 0 - a.sloth;
                for (var T = 0; T < a.slots + 2; T++) n.append('<div class="slot" style="position:absolute;top:' + (fullyoff + T * a.sloth) + "px;left:" + u + "px;overflow:hidden;width:" + p + "px;height:" + a.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + m + "px;left:0px;width:" + p + "px;height:" + a.sloth + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:" + (0 - T * a.sloth) + "px;left:0px;width:" + p + "px;height:" + f + "px;background-image:url(" + h + ");background-repeat:" + w + ";background-size:" + v + ";background-position:" + y + ';"></div></div></div>'), d != e && l != e && punchgs.TweenLite.set(n.find(".slot").last(), {
                    rotationZ: l
                }), s(8) && (n.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + x + '" style="width:100%;height:auto;">'), b(n, a))
            }
        },
        w = function(t, a, i) {
            var o = t,
                n = o.find(".defaultimg"),
                r = o.data("zoomstart"),
                d = o.data("rotationstart");
            n.data("currotate") != e && (d = n.data("currotate")), n.data("curscale") != e && (r = 100 * n.data("curscale")), g(n, a);
            var l = n.data("src"),
                h = n.css("backgroundColor"),
                c = a.width,
                p = a.height;
            "on" == a.autoHeight && (p = a.container.height());
            var f = n.data("fxof");
            f == e && (f = 0), fullyoff = 0;
            if (s(8)) {
                var u = l;
                l = ""
            }
            var m = 0;
            if (m = a.sloth > a.slotw ? a.sloth : a.slotw, !i);
            a.slotw = m, a.sloth = m;
            var v = 0,
                w = 0,
                y = n.data("bgfit"),
                x = n.data("bgrepeat"),
                T = n.data("bgposition");
            y == e && (y = "cover"), x == e && (x = "no-repeat"), T == e && (T = "center center"), "on" == o.data("kenburns") && (y = r, y.toString().length < 4 && (y = $(y, o, a)));
            for (var C = 0; C < a.slots; C++) {
                w = 0;
                for (var L = 0; L < a.slots; L++) o.append('<div class="slot" style="position:absolute;top:' + (fullyoff + w) + "px;left:" + (f + v) + "px;width:" + m + "px;height:" + m + 'px;overflow:hidden;"><div class="slotslide" data-x="' + v + '" data-y="' + w + '" style="position:absolute;top:0px;left:0px;width:' + m + "px;height:" + m + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - w) + "px;left:" + (0 - v) + "px;width:" + c + "px;height:" + p + "px;background-color:" + h + ";background-image:url(" + l + ");background-repeat:" + x + ";background-size:" + y + ";background-position:" + T + ';"></div></div></div>'), w += m, s(8) && (o.find(".slot ").last().find(".slotslide").append('<img src="' + u + '">'), b(o, a)), r != e && d != e && punchgs.TweenLite.set(o.find(".slot").last(), {
                    rotationZ: d
                });
                v += m
            }
        },
        b = function(t, e) {
            if (s(8)) {
                {
                    var a = t.find(".ieeightfallbackimage");
                    a.width(), a.height()
                }
                a.css(e.startwidth / e.startheight < t.data("owidth") / t.data("oheight") ? {
                    width: "auto",
                    height: "100%"
                } : {
                    width: "100%",
                    height: "auto"
                }), setTimeout(function() {
                    var i = a.width(),
                        o = a.height();
                    "center center" == t.data("bgposition") && a.css({
                        position: "absolute",
                        top: e.height / 2 - o / 2 + "px",
                        left: e.width / 2 - i / 2 + "px"
                    }), ("center top" == t.data("bgposition") || "top center" == t.data("bgposition")) && a.css({
                        position: "absolute",
                        top: "0px",
                        left: e.width / 2 - i / 2 + "px"
                    }), ("center bottom" == t.data("bgposition") || "bottom center" == t.data("bgposition")) && a.css({
                        position: "absolute",
                        bottom: "0px",
                        left: e.width / 2 - i / 2 + "px"
                    }), ("right top" == t.data("bgposition") || "top right" == t.data("bgposition")) && a.css({
                        position: "absolute",
                        top: "0px",
                        right: "0px"
                    }), ("right bottom" == t.data("bgposition") || "bottom right" == t.data("bgposition")) && a.css({
                        position: "absolute",
                        bottom: "0px",
                        right: "0px"
                    }), ("right center" == t.data("bgposition") || "center right" == t.data("bgposition")) && a.css({
                        position: "absolute",
                        top: e.height / 2 - o / 2 + "px",
                        right: "0px"
                    }), ("left bottom" == t.data("bgposition") || "bottom left" == t.data("bgposition")) && a.css({
                        position: "absolute",
                        bottom: "0px",
                        left: "0px"
                    }), ("left center" == t.data("bgposition") || "center left" == t.data("bgposition")) && a.css({
                        position: "absolute",
                        top: e.height / 2 - o / 2 + "px",
                        left: "0px"
                    })
                }, 20)
            }
        },
        y = function(e, a, i) {
            i.find(".slot").each(function() {
                t(this).remove()
            }), a.transition = 0
        },
        x = function(a, i) {
            a.find("img, .defaultimg").each(function() {
                var a = t(this);
                if (a.data("lazyload") != a.attr("src") && 3 > i && a.data("lazyload") != e && "undefined" != a.data("lazyload")) {
                    if (a.data("lazyload") != e && "undefined" != a.data("lazyload")) {
                        a.attr("src", a.data("lazyload"));
                        var o = new Image;
                        o.onload = function() {
                            a.data("lazydone", 1), a.hasClass("defaultimg") && T(a, o)
                        }, o.error = function() {
                            a.data("lazydone", 1)
                        }, o.src = a.attr("src"), o.complete && (a.hasClass("defaultimg") && T(a, o), a.data("lazydone", 1))
                    }
                } else if ((a.data("lazyload") === e || "undefined" === a.data("lazyload")) && 1 != a.data("lazydone")) {
                    var o = new Image;
                    o.onload = function() {
                        a.hasClass("defaultimg") && T(a, o), a.data("lazydone", 1)
                    }, o.error = function() {
                        a.data("lazydone", 1)
                    }, o.src = a.attr("src") != e && "undefined" != a.attr("src") ? a.attr("src") : a.data("src"), o.complete && (a.hasClass("defaultimg") && T(a, o), a.data("lazydone", 1))
                }
            })
        },
        T = function(t, e) {
            var a = t.closest("li"),
                i = e.width,
                o = e.height;
            a.data("owidth", i), a.data("oheight", o), a.find(".slotholder").data("owidth", i), a.find(".slotholder").data("oheight", o), a.data("loadeddone", 1)
        },
        C = function(a, i, o) {
            x(a, 0);
            var n = setInterval(function() {
                o.bannertimeronpause = !0, o.container.trigger("stoptimer"), o.cd = 0;
                var s = 0;
                a.find("img, .defaultimg").each(function() {
                    1 != t(this).data("lazydone") && s++
                }), s > 0 ? x(a, s) : (clearInterval(n), i != e && i())
            }, 100)
        },
        L = function(t, a) {
            try {
                {
                    t.find(">ul:first-child >li:eq(" + a.act + ")")
                }
            } catch (i) {
                {
                    t.find(">ul:first-child >li:eq(1)")
                }
            }
            a.lastslide = a.act;
            var o = t.find(">ul:first-child >li:eq(" + a.next + ")"),
                n = o.find(".defaultimg");
            a.bannertimeronpause = !0, t.trigger("stoptimer"), a.cd = 0, n.data("lazyload") != e && "undefined" != n.data("lazyload") && 1 != n.data("lazydone") ? (s(8) ? n.attr("src", o.find(".defaultimg").data("lazyload")) : n.css({
                backgroundImage: 'url("' + o.find(".defaultimg").data("lazyload") + '")'
            }), n.data("src", o.find(".defaultimg").data("lazyload")), n.data("lazydone", 1), n.data("orgw", 0), o.data("loadeddone", 1), t.find(".tp-loader").css({
                display: "block"
            }), C(t.find(".tp-static-layers"), function() {
                C(o, function() {
                    var e = o.find(".slotholder");
                    if ("on" == e.data("kenburns")) var i = setInterval(function() {
                        var o = e.data("owidth");
                        o >= 0 && (clearInterval(i), k(a, n, t))
                    }, 10);
                    else k(a, n, t)
                }, a)
            }, a)) : o.data("loadeddone") === e ? (o.data("loadeddone", 1), C(o, function() {
                k(a, n, t)
            }, a)) : k(a, n, t)
        },
        k = function(t, e, a) {
            t.bannertimeronpause = !1, t.cd = 0, a.trigger("nulltimer"), a.find(".tp-loader").css({
                display: "none"
            }), g(e, t), f(a, t), g(e, t), z(a, t)
        },
        z = function(t, a) {
            t.trigger("revolution.slide.onbeforeswap"), a.transition = 1, a.videoplaying = !1;
            try {
                var i = t.find(">ul:first-child >li:eq(" + a.act + ")")
            } catch (o) {
                var i = t.find(">ul:first-child >li:eq(1)")
            }
            a.lastslide = a.act;
            var n = t.find(">ul:first-child >li:eq(" + a.next + ")");
            setTimeout(function() {
                u(a)
            }, 200);
            var s = i.find(".slotholder"),
                r = n.find(".slotholder");
            ("on" == r.data("kenburns") || "on" == s.data("kenburns")) && (G(t, a), t.find(".kenburnimg").remove()), n.data("delay") != e ? (a.cd = 0, a.delay = n.data("delay")) : a.delay = a.origcd, 1 == a.firststart && punchgs.TweenLite.set(i, {
                autoAlpha: 0
            }), punchgs.TweenLite.set(i, {
                zIndex: 18
            }), punchgs.TweenLite.set(n, {
                autoAlpha: 0,
                zIndex: 20
            });
            var d = 0;
            i.index() != n.index() && 1 != a.firststart && (d = X(i, a)), "on" != i.data("saveperformance") && (d = 0), setTimeout(function() {
                t.trigger("restarttimer"), O(t, a, n, i, s, r)
            }, d)
        },
        O = function(a, i, o, n, r, d) {
            function l() {
                t.each(g, function(t, e) {
                    (e[0] == f || e[8] == f) && (h = e[1], u = e[2], y = x), x += 1
                })
            }
            "prepared" == o.data("differentissplayed") && (o.data("differentissplayed", "done"), o.data("transition", o.data("savedtransition")), o.data("slotamount", o.data("savedslotamount")), o.data("masterspeed", o.data("savedmasterspeed"))), o.data("fstransition") != e && "done" != o.data("differentissplayed") && (o.data("savedtransition", o.data("transition")), o.data("savedslotamount", o.data("slotamount")), o.data("savedmasterspeed", o.data("masterspeed")), o.data("transition", o.data("fstransition")), o.data("slotamount", o.data("fsslotamount")), o.data("masterspeed", o.data("fsmasterspeed")), o.data("differentissplayed", "prepared"));
            var h = 0,
                c = o.data("transition").split(","),
                p = o.data("nexttransid");
            p == e ? (p = 0, o.data("nexttransid", p)) : (p += 1, p == c.length && (p = 0), o.data("nexttransid", p));
            var f = c[p];
            i.ie && ("boxfade" == f && (f = "boxslide"), "slotfade-vertical" == f && (f = "slotzoom-vertical"), "slotfade-horizontal" == f && (f = "slotzoom-horizontal")), s(8) && (f = 11);
            var u = 0;
            "scroll" == i.parallax && i.parallaxFirstGo == e && (i.parallaxFirstGo = !0, Q(a, i), setTimeout(function() {
                Q(a, i)
            }, 210), setTimeout(function() {
                Q(a, i)
            }, 420)), ("boxslide" == f || "boxfade" == f || "papercut" == f || 0 == f || 1 == f || 16 == f) && (f = 9), "slidehorizontal" == f && (f = "slideleft", 1 == i.leftarrowpressed && (f = "slideright")), "slidevertical" == f && (f = "slideup", 1 == i.leftarrowpressed && (f = "slidedown")), "parallaxhorizontal" == f && (f = "parallaxtoleft", 1 == i.leftarrowpressed && (f = "parallaxtoright")), "parallaxvertical" == f && (f = "parallaxtotop", 1 == i.leftarrowpressed && (f = "parallaxtobottom"));
            var g = [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
                    ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
                    ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
                    ["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
                    ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
                    ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
                    ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
                    ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
                    ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
                ],
                m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                b = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                h = 0,
                u = 1,
                y = 0,
                x = 0,
                T = new Array;
            "on" == d.data("kenburns") && (("boxslide" == f || 0 == f || "boxfade" == f || 1 == f || "papercut" == f || 16 == f) && (f = 11), N(a, i, !0, !0)), "random" == f && (f = Math.round(Math.random() * g.length - 1), f > g.length - 1 && (f = g.length - 1)), "random-static" == f && (f = Math.round(Math.random() * m.length - 1), f > m.length - 1 && (f = m.length - 1), f = m[f]), "random-premium" == f && (f = Math.round(Math.random() * b.length - 1), f > b.length - 1 && (f = b.length - 1), f = b[f]);
            var C = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            if (1 == i.isJoomla && window.MooTools != e && -1 != C.indexOf(f)) {
                var L = Math.round(Math.random() * (b.length - 2)) + 1;
                L > b.length - 1 && (L = b.length - 1), 0 == L && (L = 1), f = b[L]
            }
            l(), s(8) && h > 15 && 28 > h && (f = Math.round(Math.random() * m.length - 1), f > m.length - 1 && (f = m.length - 1), f = m[f], x = 0, l());
            var k = -1;
            (1 == i.leftarrowpressed || i.act > i.next) && (k = 1), i.leftarrowpressed = 0, h > 26 && (h = 26), 0 > h && (h = 0);
            var z = 300;
            o.data("masterspeed") != e && o.data("masterspeed") > 99 && o.data("masterspeed") < 4001 && (z = o.data("masterspeed")), T = g[y], a.parent().find(".bullet").each(function() {
                var e = t(this);
                e.removeClass("selected"), "withbullet" == i.navigationArrows || "nexttobullets" == i.navigationArrows ? e.index() - 1 == i.next && e.addClass("selected") : e.index() == i.next && e.addClass("selected")
            });
            var O = new punchgs.TimelineLite({
                onComplete: function() {
                    I(a, i, d, r, o, n, O)
                }
            });
            if (O.add(punchgs.TweenLite.set(d.find(".defaultimg"), {
                    opacity: 0
                })), O.pause(), o.data("slotamount") == e || o.data("slotamount") < 1 ? (i.slots = Math.round(12 * Math.random() + 4), "boxslide" == f ? i.slots = Math.round(6 * Math.random() + 3) : "flyin" == f && (i.slots = Math.round(4 * Math.random() + 1))) : i.slots = o.data("slotamount"), i.rotate = o.data("rotate") == e ? 0 : 999 == o.data("rotate") ? Math.round(360 * Math.random()) : o.data("rotate"), (!t.support.transition || i.ie || i.ie9) && (i.rotate = 0), 1 == i.firststart && (i.firststart = 0), z += T[4], (4 == h || 5 == h || 6 == h) && i.slots < 3 && (i.slots = 3), 0 != T[3] && (i.slots = Math.min(i.slots, T[3])), 9 == h && (i.slots = i.width / 20), 10 == h && (i.slots = i.height / 20), "box" == T[5] ? (null != T[7] && w(r, i, T[7]), null != T[6] && w(d, i, T[6])) : ("vertical" == T[5] || "horizontal" == T[5]) && (null != T[7] && v(r, i, T[7], T[5]), null != T[6] && v(d, i, T[6], T[5])), 0 == h) {
                var A = Math.ceil(i.height / i.sloth),
                    M = 0;
                d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    M += 1, M == A && (M = 0), O.add(punchgs.TweenLite.from(a, z / 600, {
                        opacity: 0,
                        top: 0 - i.sloth,
                        left: 0 - i.slotw,
                        rotation: i.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeOut
                    }), (15 * e + 30 * M) / 1500)
                })
            }
            if (1 == h) {
                var S, P = 0;
                d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    rand = Math.random() * z + 300, rand2 = 500 * Math.random() + 200, rand + rand2 > S && (S = rand2 + rand2, P = e), O.add(punchgs.TweenLite.from(a, rand / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), rand2 / 1e3)
                })
            }
            if (2 == h) {
                var H = new punchgs.TimelineLite;
                r.find(".slotslide").each(function() {
                    var e = t(this);
                    H.add(punchgs.TweenLite.to(e, z / 1e3, {
                        left: i.slotw,
                        force3D: "auto",
                        rotation: 0 - i.rotate
                    }), 0), O.add(H, 0)
                }), d.find(".slotslide").each(function() {
                    var e = t(this);
                    H.add(punchgs.TweenLite.from(e, z / 1e3, {
                        left: 0 - i.slotw,
                        force3D: "auto",
                        rotation: i.rotate
                    }), 0), O.add(H, 0)
                })
            }
            if (3 == h) {
                var H = new punchgs.TimelineLite;
                r.find(".slotslide").each(function() {
                    var e = t(this);
                    H.add(punchgs.TweenLite.to(e, z / 1e3, {
                        top: i.sloth,
                        rotation: i.rotate,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), O.add(H, 0)
                }), d.find(".slotslide").each(function() {
                    var e = t(this);
                    H.add(punchgs.TweenLite.from(e, z / 1e3, {
                        top: 0 - i.sloth,
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeOut,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), O.add(H, 0)
                })
            }
            if (4 == h || 5 == h) {
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var D = z / 1e3,
                    H = new punchgs.TimelineLite;
                r.find(".slotslide").each(function(e) {
                    var a = t(this),
                        o = e * D / i.slots;
                    5 == h && (o = (i.slots - e - 1) * D / i.slots / 1.5), H.add(punchgs.TweenLite.to(a, 3 * D, {
                        transformPerspective: 600,
                        force3D: "auto",
                        top: 0 + i.height,
                        opacity: .5,
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeInOut,
                        delay: o
                    }), 0), O.add(H, 0)
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this),
                        o = e * D / i.slots;
                    5 == h && (o = (i.slots - e - 1) * D / i.slots / 1.5), H.add(punchgs.TweenLite.from(a, 3 * D, {
                        top: 0 - i.height,
                        opacity: .5,
                        rotation: i.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut,
                        delay: o
                    }), 0), O.add(H, 0)
                })
            }
            if (6 == h) {
                i.slots < 2 && (i.slots = 2), i.slots % 2 && (i.slots = i.slots + 1);
                var H = new punchgs.TimelineLite;
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), r.find(".slotslide").each(function(e) {
                    var a = t(this);
                    if (e + 1 < i.slots / 2) var o = 90 * (e + 2);
                    else var o = 90 * (2 + i.slots - e);
                    H.add(punchgs.TweenLite.to(a, (z + o) / 1e3, {
                        top: 0 + i.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), 0), O.add(H, 0)
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    if (e + 1 < i.slots / 2) var o = 90 * (e + 2);
                    else var o = 90 * (2 + i.slots - e);
                    H.add(punchgs.TweenLite.from(a, (z + o) / 1e3, {
                        top: 0 - i.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), 0), O.add(H, 0)
                })
            }
            if (7 == h) {
                z = 2 * z;
                var H = new punchgs.TimelineLite;
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), r.find(".slotslide").each(function() {
                    var e = t(this).find("div");
                    H.add(punchgs.TweenLite.to(e, z / 1e3, {
                        left: 0 - i.slotw / 2 + "px",
                        top: 0 - i.height / 2 + "px",
                        width: 2 * i.slotw + "px",
                        height: 2 * i.height + "px",
                        opacity: 0,
                        rotation: i.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeOut
                    }), 0), O.add(H, 0)
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this).find("div");
                    H.add(punchgs.TweenLite.fromTo(a, z / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - e * i.slotw + "px",
                        ease: punchgs.Power2.easeOut,
                        force3D: "auto",
                        top: "0px",
                        width: i.width,
                        height: i.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1
                    }), 0), O.add(H, 0)
                })
            }
            if (8 == h) {
                z = 3 * z;
                var H = new punchgs.TimelineLite;
                r.find(".slotslide").each(function() {
                    var e = t(this).find("div");
                    H.add(punchgs.TweenLite.to(e, z / 1e3, {
                        left: 0 - i.width / 2 + "px",
                        top: 0 - i.sloth / 2 + "px",
                        width: 2 * i.width + "px",
                        height: 2 * i.sloth + "px",
                        force3D: "auto",
                        opacity: 0,
                        rotation: i.rotate
                    }), 0), O.add(H, 0)
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this).find("div");
                    H.add(punchgs.TweenLite.fromTo(a, z / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        force3D: "auto"
                    }, {
                        left: "0px",
                        top: 0 - e * i.sloth + "px",
                        width: d.find(".defaultimg").data("neww") + "px",
                        height: d.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        rotation: 0
                    }), 0), O.add(H, 0)
                })
            }
            if (9 == h || 10 == h) {
                var _ = 0;
                d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    _++, O.add(punchgs.TweenLite.fromTo(a, z / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        transformPerspective: 600
                    }, {
                        autoAlpha: 1,
                        ease: punchgs.Power2.easeInOut,
                        delay: 5 * e / 1e3
                    }), 0)
                })
            }
            if (11 == h || 26 == h) {
                var _ = 0;
                26 == h && (z = 0), d.find(".slotslide").each(function() {
                    var e = t(this);
                    O.add(punchgs.TweenLite.from(e, z / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                })
            }
            if (12 == h || 13 == h || 14 == h || 15 == h) {
                z = 1e3, setTimeout(function() {
                    punchgs.TweenLite.set(r.find(".defaultimg"), {
                        autoAlpha: 0
                    })
                }, 100);
                var V = i.width,
                    Y = i.height,
                    R = d.find(".slotslide");
                ("on" == i.fullWidth || "on" == i.fullScreen) && (V = R.width(), Y = R.height());
                var X = 0,
                    B = 0;
                12 == h ? X = V : 15 == h ? X = 0 - V : 13 == h ? B = Y : 14 == h && (B = 0 - Y);
                var F = 1,
                    j = 1,
                    q = 1,
                    E = punchgs.Power2.easeInOut,
                    $ = punchgs.Power2.easeInOut,
                    Z = z / 1e3,
                    U = Z;
                1 == u && (F = 0), 2 == u && (F = 0), 3 == u && (E = punchgs.Power2.easeInOut, $ = punchgs.Power1.easeInOut, Z = z / 1200), (4 == u || 5 == u) && (j = .6), 6 == u && (j = 1.4), (5 == u || 6 == u) && (q = 1.4, F = 0, V = 0, Y = 0, X = 0, B = 0), 6 == u && (q = .6);
                O.add(punchgs.TweenLite.from(R, Z, {
                    left: X,
                    top: B,
                    scale: q,
                    opacity: F,
                    rotation: i.rotate,
                    ease: $,
                    force3D: "auto"
                }), 0);
                var G = r.find(".slotslide");
                (4 == u || 5 == u) && (V = 0, Y = 0), 1 != u && (12 == h ? O.add(punchgs.TweenLite.to(G, U, {
                    left: 0 - V + "px",
                    force3D: "auto",
                    scale: j,
                    opacity: F,
                    rotation: i.rotate,
                    ease: E
                }), 0) : 15 == h ? O.add(punchgs.TweenLite.to(G, U, {
                    left: V + "px",
                    force3D: "auto",
                    scale: j,
                    opacity: F,
                    rotation: i.rotate,
                    ease: E
                }), 0) : 13 == h ? O.add(punchgs.TweenLite.to(G, U, {
                    top: 0 - Y + "px",
                    force3D: "auto",
                    scale: j,
                    opacity: F,
                    rotation: i.rotate,
                    ease: E
                }), 0) : 14 == h && O.add(punchgs.TweenLite.to(G, U, {
                    top: Y + "px",
                    orce3D: "auto",
                    scale: j,
                    opacity: F,
                    rotation: i.rotate,
                    ease: E
                }), 0))
            }
            if (16 == h) {
                var H = new punchgs.TimelineLite;
                O.add(punchgs.TweenLite.set(n, {
                    position: "absolute",
                    "z-index": 20
                }), 0), O.add(punchgs.TweenLite.set(o, {
                    position: "absolute",
                    "z-index": 15
                }), 0), n.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), n.find(".tp-half-one").clone(!0).appendTo(n).addClass("tp-half-two"), n.find(".tp-half-two").removeClass("tp-half-one");
                var V = i.width,
                    Y = i.height;
                "on" == i.autoHeight && (Y = a.height()), n.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + V + "px;height:" + Y + 'px;"></div>'), n.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + V + "px;height:" + Y + 'px;"></div>'), n.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), n.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), O.add(punchgs.TweenLite.set(n.find(".tp-half-two"), {
                    width: V,
                    height: Y,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: Y / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), 0), O.add(punchgs.TweenLite.set(n.find(".tp-half-one"), {
                    width: V,
                    height: Y / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }), 0);
                var J = (n.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    K = Math.round(20 * Math.random() - 10),
                    te = Math.round(20 * Math.random() - 10),
                    ee = .4 * Math.random() - .2,
                    ae = .4 * Math.random() - .2,
                    ie = 1 * Math.random() + 1,
                    oe = 1 * Math.random() + 1,
                    ne = .3 * Math.random() + .3;
                O.add(punchgs.TweenLite.set(n.find(".tp-half-one"), {
                    overflow: "hidden"
                }), 0), O.add(punchgs.TweenLite.fromTo(n.find(".tp-half-one"), z / 800, {
                    width: V,
                    height: Y / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                    scale: ie,
                    rotation: J,
                    y: 0 - Y - Y / 4,
                    autoAlpha: 0,
                    ease: punchgs.Power2.easeInOut
                }), 0), O.add(punchgs.TweenLite.fromTo(n.find(".tp-half-two"), z / 800, {
                    width: V,
                    height: Y,
                    overflow: "hidden",
                    position: "absolute",
                    top: Y / 2,
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center bottom"
                }, {
                    scale: oe,
                    rotation: K,
                    y: Y + Y / 4,
                    ease: punchgs.Power2.easeInOut,
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.set(n, {
                            position: "absolute",
                            "z-index": 15
                        }), punchgs.TweenLite.set(o, {
                            position: "absolute",
                            "z-index": 20
                        }), n.find(".tp-half-one").length > 0 && (n.find(".tp-half-one .defaultimg").unwrap(), n.find(".tp-half-one .slotholder").unwrap()), n.find(".tp-half-two").remove()
                    }
                }), 0), H.add(punchgs.TweenLite.set(d.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), null != n.html() && O.add(punchgs.TweenLite.fromTo(o, (z - 200) / 1e3, {
                    scale: ne,
                    x: i.width / 4 * ee,
                    y: Y / 4 * ae,
                    rotation: te,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: punchgs.Power2.easeOut
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0), O.add(H, 0)
            }
            if (17 == h && d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    O.add(punchgs.TweenLite.fromTo(a, z / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: punchgs.Power3.easeOut,
                        delay: .06 * e
                    }), 0)
                }), 18 == h && d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    O.add(punchgs.TweenLite.fromTo(a, z / 500, {
                        autoAlpha: 0,
                        rotationY: 310,
                        scale: .9,
                        rotationX: 10,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        autoAlpha: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: punchgs.Power3.easeOut,
                        delay: .06 * e
                    }), 0)
                }), 19 == h || 22 == h) {
                var H = new punchgs.TimelineLite;
                O.add(punchgs.TweenLite.set(n, {
                    zIndex: 20
                }), 0), O.add(punchgs.TweenLite.set(o, {
                    zIndex: 20
                }), 0), setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var se = (o.css("z-index"), n.css("z-index"), 90),
                    F = 1;
                if (1 == k && (se = -90), 19 == h) {
                    var re = "center center -" + i.height / 2;
                    F = 0
                } else var re = "center center " + i.height / 2;
                punchgs.TweenLite.set(a, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    H.add(punchgs.TweenLite.fromTo(a, z / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        left: 0,
                        rotationY: i.rotate,
                        z: 10,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationX: se
                    }, {
                        left: 0,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        rotationX: 0,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), H.add(punchgs.TweenLite.to(a, .1, {
                        autoAlpha: 1,
                        delay: 50 * e / 1e3
                    }), 0), O.add(H)
                }), r.find(".slotslide").each(function(e) {
                    var a = t(this),
                        o = -90;
                    1 == k && (o = 90), H.add(punchgs.TweenLite.fromTo(a, z / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        autoAlpha: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationX: 0
                    }, {
                        autoAlpha: 1,
                        rotationY: i.rotate,
                        top: 0,
                        z: 10,
                        scale: 1,
                        rotationX: o,
                        delay: 50 * e / 1e3,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut
                    }), 0), O.add(H)
                })
            }
            if (20 == h) {
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100); {
                    o.css("z-index"), n.css("z-index")
                }
                if (1 == k) var de = -i.width,
                    se = 70,
                    re = "left center -" + i.height / 2;
                else var de = i.width,
                    se = -70,
                    re = "right center -" + i.height / 2;
                d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    O.add(punchgs.TweenLite.fromTo(a, z / 1500, {
                        left: de,
                        rotationX: 40,
                        z: -600,
                        opacity: F,
                        top: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: se
                    }, {
                        left: 0,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), O.add(punchgs.TweenLite.fromTo(a, z / 1e3, {
                        rotationX: 40,
                        z: -600,
                        opacity: F,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: se
                    }, {
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), O.add(punchgs.TweenLite.to(a, .1, {
                        opacity: 1,
                        force3D: "auto",
                        delay: 50 * e / 1e3 + z / 2e3
                    }), 0)
                }), r.find(".slotslide").each(function(e) {
                    var a = t(this);
                    if (1 != k) var o = -i.width,
                        n = 70,
                        s = "left center -" + i.height / 2;
                    else var o = i.width,
                        n = -70,
                        s = "right center -" + i.height / 2;
                    O.add(punchgs.TweenLite.fromTo(a, z / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: s,
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 40,
                        top: 0,
                        z: -600,
                        left: o,
                        force3D: "auto",
                        scale: .8,
                        rotationY: n,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), O.add(punchgs.TweenLite.to(a, .1, {
                        force3D: "auto",
                        opacity: 0,
                        delay: 50 * e / 1e3 + (z / 1e3 - z / 1e4)
                    }), 0)
                })
            }
            if (21 == h || 25 == h) {
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100); {
                    o.css("z-index"), n.css("z-index")
                }
                if (1 == k) {
                    var de = -i.width,
                        se = 90;
                    if (25 == h) {
                        var re = "center top 0";
                        rot2 = -se, se = i.rotate
                    } else {
                        var re = "left center 0";
                        rot2 = i.rotate
                    }
                } else {
                    var de = i.width,
                        se = -90;
                    if (25 == h) {
                        var re = "center bottom 0";
                        rot2 = -se, se = i.rotate
                    } else {
                        var re = "right center 0";
                        rot2 = i.rotate
                    }
                }
                if (d.find(".slotslide").each(function() {
                        var e = t(this);
                        O.add(punchgs.TweenLite.fromTo(e, z / 1e3, {
                            left: 0,
                            transformStyle: "flat",
                            rotationX: rot2,
                            z: 0,
                            autoAlpha: 0,
                            top: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: re,
                            rotationY: se
                        }, {
                            left: 0,
                            rotationX: 0,
                            top: 0,
                            z: 0,
                            autoAlpha: 1,
                            scale: 1,
                            rotationY: 0,
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut
                        }), 0)
                    }), 1 != k) {
                    var de = -i.width,
                        se = 90;
                    if (25 == h) {
                        var re = "center top 0";
                        rot2 = -se, se = i.rotate
                    } else {
                        var re = "left center 0";
                        rot2 = i.rotate
                    }
                } else {
                    var de = i.width,
                        se = -90;
                    if (25 == h) {
                        var re = "center bottom 0";
                        rot2 = -se, se = i.rotate
                    } else {
                        var re = "right center 0";
                        rot2 = i.rotate
                    }
                }
                r.find(".slotslide").each(function() {
                    var e = t(this);
                    O.add(punchgs.TweenLite.fromTo(e, z / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: 0,
                        z: 0,
                        autoAlpha: 1,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: rot2,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        force3D: "auto",
                        scale: 1,
                        rotationY: se,
                        ease: punchgs.Power1.easeInOut
                    }), 0)
                })
            }
            if (23 == h || 24 == h) {
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var se = (o.css("z-index"), n.css("z-index"), -90);
                1 == k && (se = 90);
                var F = 1;
                if (23 == h) {
                    var re = "center center -" + i.width / 2;
                    F = 0
                } else var re = "center center " + i.width / 2;
                var le = 0;
                punchgs.TweenLite.set(a, {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 2500
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    O.add(punchgs.TweenLite.fromTo(a, z / 1e3, {
                        left: le,
                        rotationX: i.rotate,
                        force3D: "auto",
                        opacity: F,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: se
                    }, {
                        left: 0,
                        rotationX: 0,
                        autoAlpha: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * e / 500,
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                }), se = 90, 1 == k && (se = -90), r.find(".slotslide").each(function(e) {
                    var a = t(this);
                    O.add(punchgs.TweenLite.fromTo(a, z / 1e3, {
                        left: 0,
                        autoAlpha: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: 0
                    }, {
                        left: le,
                        autoAlpha: 1,
                        rotationX: i.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: se,
                        delay: 50 * e / 500,
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                })
            }
            O.pause(), W(o, i, null, O), punchgs.TweenLite.to(o, .001, {
                autoAlpha: 1
            });
            var he = {};
            he.slideIndex = i.next + 1, he.slide = o, a.trigger("revolution.slide.onchange", he), setTimeout(function() {
                a.trigger("revolution.slide.onafterswap")
            }, z), a.trigger("revolution.slide.onvideostop")
        },
        I = function(t, e, a, i, o, n, s) {
            punchgs.TweenLite.to(a.find(".defaultimg"), .001, {
                autoAlpha: 1,
                onComplete: function() {
                    y(t, e, o)
                }
            }), o.index() != n.index() && punchgs.TweenLite.to(n, .2, {
                autoAlpha: 0,
                onComplete: function() {
                    y(t, e, n)
                }
            }), e.act = e.next, "thumb" == e.navigationType && te(t), "on" == a.data("kenburns") && N(t, e), t.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"), o.addClass("current-sr-slide-visible"), ("scroll" == e.parallax || "scroll+mouse" == e.parallax || "mouse+scroll" == e.parallax) && Q(t, e), s.clear()
        },
        A = function(e) {
            var a = e.target.getVideoEmbedCode(),
                i = t("#" + a.split('id="')[1].split('"')[0]),
                o = i.closest(".tp-simpleresponsive"),
                n = i.parent().data("player");
            if (e.data == YT.PlayerState.PLAYING) {
                var s = o.find(".tp-bannertimer"),
                    r = s.data("opt");
                "mute" == i.closest(".tp-caption").data("volume") && n.mute(), r.videoplaying = !0, o.trigger("stoptimer"), o.trigger("revolution.slide.onvideoplay")
            } else {
                var s = o.find(".tp-bannertimer"),
                    r = s.data("opt"); - 1 != e.data && (r.videoplaying = !1, o.trigger("playtimer"), o.trigger("revolution.slide.onvideostop"))
            }
            0 == e.data && 1 == r.nextslideatend && r.container.revnext()
        },
        M = function(e, a) {
            var i = $f(e),
                o = t("#" + e),
                n = o.closest(".tp-simpleresponsive");
            i.addEvent("ready", function() {
                a && i.api("play"), i.addEvent("play", function() {
                    var t = n.find(".tp-bannertimer"),
                        e = t.data("opt");
                    e.videoplaying = !0, n.trigger("stoptimer"), "mute" == o.closest(".tp-caption").data("volume") && i.api("setVolume", "0")
                }), i.addEvent("finish", function() {
                    var t = n.find(".tp-bannertimer"),
                        e = t.data("opt");
                    e.videoplaying = !1, n.trigger("playtimer"), n.trigger("revolution.slide.onvideoplay"), 1 == e.nextslideatend && e.container.revnext()
                }), i.addEvent("pause", function() {
                    var t = n.find(".tp-bannertimer"),
                        e = t.data("opt");
                    e.videoplaying = !1, n.trigger("playtimer"), n.trigger("revolution.slide.onvideostop")
                })
            })
        },
        S = function(t, a) {
            var i = a.width(),
                o = a.height(),
                n = t.data("mediaAspect");
            n == e && (n = 1);
            var s = i / o;
            t.css({
                position: "absolute"
            });
            t.find("video");
            n > s ? (t.width(o * n).height(o), punchgs.TweenLite.to(t, .01, {
                force3D: "auto",
                top: 0,
                left: 0 - (o * n - i) / 2,
                height: o
            })) : (t.width(i).height(i / n), punchgs.TweenLite.to(t, .01, {
                force3D: "auto",
                top: 0 - (i / n - o) / 2,
                left: 0,
                height: i / n
            }))
        },
        P = function() {
            var t = new Object;
            return t.x = 0, t.y = 0, t.rotationX = 0, t.rotationY = 0, t.rotationZ = 0, t.scale = 1, t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.opacity = 0, t.transformOrigin = "center, center", t.transformPerspective = 400, t.rotation = 0, t
        },
        H = function(e, a) {
            var i = a.split(";");
            return t.each(i, function(t, a) {
                a = a.split(":");
                var i = a[0],
                    o = a[1];
                "rotationX" == i && (e.rotationX = parseInt(o, 0)), "rotationY" == i && (e.rotationY = parseInt(o, 0)), "rotationZ" == i && (e.rotationZ = parseInt(o, 0)), "rotationZ" == i && (e.rotation = parseInt(o, 0)), "scaleX" == i && (e.scaleX = parseFloat(o)), "scaleY" == i && (e.scaleY = parseFloat(o)), "opacity" == i && (e.opacity = parseFloat(o)), "skewX" == i && (e.skewX = parseInt(o, 0)), "skewY" == i && (e.skewY = parseInt(o, 0)), "x" == i && (e.x = parseInt(o, 0)), "y" == i && (e.y = parseInt(o, 0)), "z" == i && (e.z = parseInt(o, 0)), "transformOrigin" == i && (e.transformOrigin = o.toString()), "transformPerspective" == i && (e.transformPerspective = parseInt(o, 0))
            }), e
        },
        D = function(e) {
            var a = e.split("animation:"),
                i = new Object;
            i.animation = H(P(), a[1]);
            var o = a[0].split(";");
            return t.each(o, function(t, e) {
                e = e.split(":");
                var a = e[0],
                    o = e[1];
                "typ" == a && (i.typ = o), "speed" == a && (i.speed = parseInt(o, 0) / 1e3), "start" == a && (i.start = parseInt(o, 0) / 1e3), "elementdelay" == a && (i.elementdelay = parseFloat(o)), "ease" == a && (i.ease = o)
            }), i
        },
        W = function(a, i, o, n) {
            a.data("ctl") == e && a.data("ctl", new punchgs.TimelineLite);
            var s = a.data("ctl"),
                r = 0,
                d = 0,
                l = a.find(".tp-caption"),
                h = i.container.find(".tp-static-layers").find(".tp-caption");
            s.pause(), t.each(h, function(t, e) {
                l.push(e)
            }), l.each(function(a) {
                function n() {}

                function s() {}
                var l = o,
                    h = -1,
                    c = t(this);
                c.hasClass("tp-static-layer") && ((-1 == c.data("startslide") || "-1" == c.data("startslide")) && c.data("startslide", 0), (-1 == c.data("endslide") || "-1" == c.data("endslide")) && c.data("endslide", i.slideamount), c.hasClass("tp-is-shown") ? h = c.data("endslide") == i.next || c.data("startslide") > i.next || c.data("endslide") < i.next ? 2 : 0 : c.data("startslide") <= i.next && c.data("endslide") >= i.next || c.data("startslide") == i.next || c.data("endslide") == i.next ? (c.addClass("tp-is-shown"), h = 1) : h = 0), r = i.width / 2 - i.startwidth * i.bw / 2; {
                    var p = i.bw;
                    i.bh
                }
                "on" == i.fullScreen && (d = i.height / 2 - i.startheight * i.bh / 2), "on" == i.autoHeight && (d = i.container.height() / 2 - i.startheight * i.bh / 2), 0 > d && (d = 0);
                var f = 0;
                if (i.width < i.hideCaptionAtLimit && "on" == c.data("captionhidden") ? (c.addClass("tp-hidden-caption"), f = 1) : i.width < i.hideAllCaptionAtLimit || i.width < i.hideAllCaptionAtLilmit ? (c.addClass("tp-hidden-caption"), f = 1) : c.removeClass("tp-hidden-caption"), 0 == f) {
                    c.data("linktoslide") == e || c.hasClass("hasclicklistener") || (c.addClass("hasclicklistener"), c.css({
                        cursor: "pointer"
                    }), "no" != c.data("linktoslide") && c.click(function() {
                        var e = t(this),
                            a = e.data("linktoslide");
                        "next" != a && "prev" != a ? (i.container.data("showus", a), i.container.parent().find(".tp-rightarrow").click()) : "next" == a ? i.container.parent().find(".tp-rightarrow").click() : "prev" == a && i.container.parent().find(".tp-leftarrow").click()
                    })), 0 > r && (r = 0);
                    var u = "iframe" + Math.round(1e3 * Math.random() + 1);
                    if (c.find("iframe").length > 0 || c.find("video").length > 0) {
                        var g = !1;
                        if ((1 == c.data("autoplayonlyfirsttime") || "true" == c.data("autoplayonlyfirsttime") || 1 == c.data("autoplay")) && (c.data("autoplay", !0), g = !0), c.find("iframe").each(function() {
                                var a = t(this);
                                if (E()) {
                                    var o = a.attr("src");
                                    a.attr("src", ""), a.attr("src", o)
                                }
                                if (i.nextslideatend = c.data("nextslideatend"), c.data("thumbimage") != e && c.data("thumbimage").length > 2 && 1 != c.data("autoplay") && !l && (c.find(".tp-thumb-image").remove(), c.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + c.data("thumbimage") + '); background-size:cover"></div>')), a.attr("src").toLowerCase().indexOf("youtube") >= 0) {
                                    if (a.hasClass("HasListener")) {
                                        if (1 == c.data("autoplay") || g) {
                                            var n = c.data("player");
                                            c.data("timerplay", setTimeout(function() {
                                                "on" == c.data("forcerewind") && n.seekTo(0), n.playVideo()
                                            }, c.data("start")))
                                        }
                                    } else try {
                                        a.attr("id", u);
                                        var n, s = setInterval(function() {
                                            YT != e && typeof YT.Player != e && "undefined" != typeof YT.Player && (n = 1 == c.data("autoplay") || g ? new YT.Player(u, {
                                                events: {
                                                    onStateChange: A,
                                                    onReady: function(t) {
                                                        t.target.playVideo()
                                                    }
                                                }
                                            }) : new YT.Player(u, {
                                                events: {
                                                    onStateChange: A
                                                }
                                            }), a.addClass("HasListener"), c.data("player", n), clearInterval(s))
                                        }, 100)
                                    } catch (r) {}
                                    c.find(".tp-thumb-image").click(function() {
                                        if (punchgs.TweenLite.to(t(this), .3, {
                                                opacity: 0,
                                                force3D: "auto",
                                                ease: punchgs.Power3.easeInOut,
                                                onComplete: function() {
                                                    c.find(".tp-thumb-image").remove()
                                                }
                                            }), !E()) {
                                            var e = c.data("player");
                                            e.playVideo()
                                        }
                                    })
                                } else if (a.attr("src").toLowerCase().indexOf("vimeo") >= 0) {
                                    if (a.hasClass("HasListener")) {
                                        if (1 == c.data("autoplay")) var a = c.find("iframe"),
                                            d = a.attr("id"),
                                            h = setInterval(function() {
                                                if ($f != e && typeof $f(d).api != e && "undefined" != typeof $f(d).api) {
                                                    var t = $f(d);
                                                    c.data("timerplay", setTimeout(function() {
                                                        "on" == c.data("forcerewind") && t.api("seekTo", 0), t.api("play")
                                                    }, c.data("start"))), clearInterval(h)
                                                }
                                            }, 100)
                                    } else {
                                        a.addClass("HasListener"), a.attr("id", u);
                                        for (var p, f = a.attr("src"), m = {}, v = f, w = /([^&=]+)=([^&]*)/g; p = w.exec(v);) m[decodeURIComponent(p[1])] = decodeURIComponent(p[2]);
                                        f = m.player_id != e ? f.replace(m.player_id, u) : f + "&player_id=" + u;
                                        try {
                                            f = f.replace("api=0", "api=1")
                                        } catch (r) {}
                                        f += "&api=1", a.attr("src", f);
                                        var n = c.find("iframe")[0],
                                            h = setInterval(function() {
                                                $f != e && typeof $f(u).api != e && "undefined" != typeof $f(u).api && ($f(n).addEvent("ready", function() {
                                                    M(u, g)
                                                }), clearInterval(h))
                                            }, 100)
                                    }
                                    c.find(".tp-thumb-image").click(function() {
                                        punchgs.TweenLite.to(t(this), .3, {
                                            opacity: 0,
                                            force3D: "auto",
                                            ease: punchgs.Power3.easeInOut,
                                            onComplete: function() {
                                                c.find(".tp-thumb-image").remove()
                                            }
                                        });
                                        var a = c.find("iframe"),
                                            i = a.attr("id"),
                                            o = setInterval(function() {
                                                if ($f != e && typeof $f(i).api != e && "undefined" != typeof $f(i).api) {
                                                    var t = $f(i);
                                                    t.api("play"), clearInterval(o)
                                                }
                                            }, 100)
                                    })
                                }
                            }), c.find("video").length > 0 && c.find("video").each(function() {
                                var a = t(this),
                                    o = this;
                                a.parent().hasClass("html5vid") || a.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                                var n = t(this).parent();
                                o.addEventListener ? o.addEventListener("loadedmetadata", function() {
                                    n.data("metaloaded", 1)
                                }) : o.attachEvent("loadedmetadata", function() {
                                    n.data("metaloaded", 1)
                                }), a.hasClass("HasListener") || (a.addClass("HasListener"), o.addEventListener("play", function() {
                                    n.addClass("videoisplaying"), n.find(".tp-poster").remove(), "mute" == c.data("volume") && (o.muted = !0), i.container.trigger("revolution.slide.onvideoplay"), i.videoplaying = !0, i.container.trigger("stoptimer")
                                }), o.addEventListener("pause", function() {
                                    n.removeClass("videoisplaying"), i.videoplaying = !1, i.container.trigger("playtimer"), i.container.trigger("revolution.slide.onvideostop")
                                }), o.addEventListener("ended", function() {
                                    n.removeClass("videoisplaying"), i.videoplaying = !1, i.container.trigger("playtimer"), i.container.trigger("revolution.slide.onvideostop"), 1 == i.nextslideatend && i.container.revnext()
                                })), a.attr("poster") != e && 0 == n.find(".tp-poster").length && n.append('<div class="tp-poster" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;background:url(' + a.attr("poster") + '); background-position:center center;background-size:100%;background-repeat:no-repeat;"></div>'), a.attr("control") == e && 0 == n.find(".tp-video-play-button").length && (n.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), n.find(".tp-video-play-button").click(function() {
                                    n.hasClass("videoisplaying") ? o.pause() : o.play()
                                })), a.attr("control") == e && n.find("video, .tp-poster").click(function() {
                                    n.hasClass("videoisplaying") ? o.pause() : o.play()
                                }), 1 == c.data("forcecover") && (S(n, i.container), n.addClass("fullcoveredvideo"), c.addClass("fullcoveredvideo")), (1 == c.data("forcecover") || c.hasClass("fullscreenvideo")) && n.css({
                                    width: "100%",
                                    height: "100%"
                                });
                                var s = !1;
                                (1 == c.data("autoplayonlyfirsttime") || "true" == c.data("autoplayonlyfirsttime")) && (s = !0), clearInterval(n.data("interval")), n.data("interval", setInterval(function() {
                                    if (1 == n.data("metaloaded") || 0 / 0 != o.duration) {
                                        clearInterval(n.data("interval")), "none" != c.data("dottedoverlay") && c.data("dottedoverlay") != e && 1 != c.find(".tp-dottedoverlay").length && n.append('<div class="tp-dottedoverlay ' + c.data("dottedoverlay") + '"></div>');
                                        var r = 16 / 9;
                                        if ("4:3" == c.data("aspectratio") && (r = 4 / 3), n.data("mediaAspect", r), 1 == n.closest(".tp-caption").data("forcecover") && (S(n, i.container), n.addClass("fullcoveredvideo")), a.css({
                                                display: "block"
                                            }), i.nextslideatend = c.data("nextslideatend"), 1 == c.data("autoplay") || 1 == s) {
                                            {
                                                t("body").find("#" + i.container.attr("id")).find(".tp-bannertimer")
                                            }
                                            setTimeout(function() {
                                                i.videoplaying = !0, i.container.trigger("stoptimer")
                                            }, 200), "on" != c.data("forcerewind") || n.hasClass("videoisplaying") || o.currentTime > 0 && (o.currentTime = 0), "mute" == c.data("volume") && (o.muted = !0), n.data("timerplay", setTimeout(function() {
                                                "on" != c.data("forcerewind") || n.hasClass("videoisplaying") || o.currentTime > 0 && (o.currentTime = 0), "mute" == c.data("volume") && (o.muted = !0), setTimeout(function() {
                                                    o.play()
                                                }, 500)
                                            }, 10 + c.data("start")))
                                        }
                                        if (n.data("ww") == e && n.data("ww", a.attr("width")), n.data("hh") == e && n.data("hh", a.attr("height")), !c.hasClass("fullscreenvideo") && 1 == c.data("forcecover")) try {
                                            n.width(n.data("ww") * i.bw), n.height(n.data("hh") * i.bh)
                                        } catch (d) {}
                                        clearInterval(n.data("interval"))
                                    }
                                }), 100)
                            }), 1 == c.data("autoplay")) {
                            {
                                t("body").find("#" + i.container.attr("id")).find(".tp-bannertimer")
                            }
                            setTimeout(function() {
                                i.videoplaying = !0, i.container.trigger("stoptimer")
                            }, 200), i.videoplaying = !0, i.container.trigger("stoptimer"), (1 == c.data("autoplayonlyfirsttime") || "true" == c.data("autoplayonlyfirsttime")) && (c.data("autoplay", !1), c.data("autoplayonlyfirsttime", !1))
                        }
                    }
                    var m = 0,
                        v = 0;
                    if (c.find("img").length > 0) {
                        var w = c.find("img");
                        0 == w.width() && w.css({
                            width: "auto"
                        }), 0 == w.height() && w.css({
                            height: "auto"
                        }), w.data("ww") == e && w.width() > 0 && w.data("ww", w.width()), w.data("hh") == e && w.height() > 0 && w.data("hh", w.height());
                        var b = w.data("ww"),
                            y = w.data("hh");
                        b == e && (b = 0), y == e && (y = 0), w.width(b * i.bw), w.height(y * i.bh), m = w.width(), v = w.height()
                    } else if (c.find("iframe").length > 0 || c.find("video").length > 0) {
                        var x = !1,
                            w = c.find("iframe");
                        0 == w.length && (w = c.find("video"), x = !0), w.css({
                            display: "block"
                        }), c.data("ww") == e && c.data("ww", w.width()), c.data("hh") == e && c.data("hh", w.height());
                        var b = c.data("ww"),
                            y = c.data("hh"),
                            T = c;
                        T.data("fsize") == e && T.data("fsize", parseInt(T.css("font-size"), 0) || 0), T.data("pt") == e && T.data("pt", parseInt(T.css("paddingTop"), 0) || 0), T.data("pb") == e && T.data("pb", parseInt(T.css("paddingBottom"), 0) || 0), T.data("pl") == e && T.data("pl", parseInt(T.css("paddingLeft"), 0) || 0), T.data("pr") == e && T.data("pr", parseInt(T.css("paddingRight"), 0) || 0), T.data("mt") == e && T.data("mt", parseInt(T.css("marginTop"), 0) || 0), T.data("mb") == e && T.data("mb", parseInt(T.css("marginBottom"), 0) || 0), T.data("ml") == e && T.data("ml", parseInt(T.css("marginLeft"), 0) || 0), T.data("mr") == e && T.data("mr", parseInt(T.css("marginRight"), 0) || 0), T.data("bt") == e && T.data("bt", parseInt(T.css("borderTop"), 0) || 0), T.data("bb") == e && T.data("bb", parseInt(T.css("borderBottom"), 0) || 0), T.data("bl") == e && T.data("bl", parseInt(T.css("borderLeft"), 0) || 0), T.data("br") == e && T.data("br", parseInt(T.css("borderRight"), 0) || 0), T.data("lh") == e && T.data("lh", parseInt(T.css("lineHeight"), 0) || 0);
                        var C = i.width,
                            L = i.height;
                        if (C > i.startwidth && (C = i.startwidth), L > i.startheight && (L = i.startheight), c.hasClass("fullscreenvideo")) {
                            r = 0, d = 0, c.data("x", 0), c.data("y", 0);
                            var k = i.height;
                            "on" == i.autoHeight && (k = i.container.height()), c.css({
                                width: i.width,
                                height: k
                            })
                        } else c.css({
                            "font-size": T.data("fsize") * i.bw + "px",
                            "padding-top": T.data("pt") * i.bh + "px",
                            "padding-bottom": T.data("pb") * i.bh + "px",
                            "padding-left": T.data("pl") * i.bw + "px",
                            "padding-right": T.data("pr") * i.bw + "px",
                            "margin-top": T.data("mt") * i.bh + "px",
                            "margin-bottom": T.data("mb") * i.bh + "px",
                            "margin-left": T.data("ml") * i.bw + "px",
                            "margin-right": T.data("mr") * i.bw + "px",
                            "border-top": T.data("bt") * i.bh + "px",
                            "border-bottom": T.data("bb") * i.bh + "px",
                            "border-left": T.data("bl") * i.bw + "px",
                            "border-right": T.data("br") * i.bw + "px",
                            "line-height": T.data("lh") * i.bh + "px",
                            height: y * i.bh + "px"
                        });
                        0 == x ? (w.width(b * i.bw), w.height(y * i.bh)) : 1 == c.data("forcecover") || c.hasClass("fullscreenvideo") || (w.width(b * i.bw), w.height(y * i.bh)), m = w.width(), v = w.height()
                    } else {
                        c.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            V(t(this), i)
                        }), c.hasClass("tp-resizeme") && c.find("*").each(function() {
                            V(t(this), i)
                        }), V(c, i), v = c.outerHeight(!0), m = c.outerWidth(!0);
                        var z = c.outerHeight(),
                            O = c.css("backgroundColor");
                        c.find(".frontcorner").css({
                            borderWidth: z + "px",
                            left: 0 - z + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: O
                        }), c.find(".frontcornertop").css({
                            borderWidth: z + "px",
                            left: 0 - z + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: O
                        }), c.find(".backcorner").css({
                            borderWidth: z + "px",
                            right: 0 - z + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: O
                        }), c.find(".backcornertop").css({
                            borderWidth: z + "px",
                            right: 0 - z + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: O
                        })
                    }
                    "on" == i.fullScreenAlignForce && (r = 0, d = 0), c.data("voffset") == e && c.data("voffset", 0), c.data("hoffset") == e && c.data("hoffset", 0);
                    var I = c.data("voffset") * p,
                        W = c.data("hoffset") * p,
                        X = i.startwidth * p,
                        j = i.startheight * p;
                    "on" == i.fullScreenAlignForce && (X = i.container.width(), j = i.container.height()), ("center" == c.data("x") || "center" == c.data("xcenter")) && (c.data("xcenter", "center"), c.data("x", X / 2 - c.outerWidth(!0) / 2 + W)), ("left" == c.data("x") || "left" == c.data("xleft")) && (c.data("xleft", "left"), c.data("x", 0 / p + W)), ("right" == c.data("x") || "right" == c.data("xright")) && (c.data("xright", "right"), c.data("x", (X - c.outerWidth(!0) + W) / p)), ("center" == c.data("y") || "center" == c.data("ycenter")) && (c.data("ycenter", "center"), c.data("y", j / 2 - c.outerHeight(!0) / 2 + I)), ("top" == c.data("y") || "top" == c.data("ytop")) && (c.data("ytop", "top"), c.data("y", 0 / i.bh + I)), ("bottom" == c.data("y") || "bottom" == c.data("ybottom")) && (c.data("ybottom", "bottom"), c.data("y", (j - c.outerHeight(!0) + I) / p)), c.data("start") == e && c.data("start", 1e3);
                    var q = c.data("easing");
                    q == e && (q = "punchgs.Power1.easeOut");
                    var $ = c.data("start") / 1e3,
                        N = c.data("speed") / 1e3;
                    if ("center" == c.data("x") || "center" == c.data("xcenter")) var Z = c.data("x") + r;
                    else var Z = p * c.data("x") + r;
                    if ("center" == c.data("y") || "center" == c.data("ycenter")) var U = c.data("y") + d;
                    else var U = i.bh * c.data("y") + d;
                    if (punchgs.TweenLite.set(c, {
                            top: U,
                            left: Z,
                            overwrite: "auto"
                        }), 0 == h && (l = !0), c.data("timeline") == e || l || (c.data("timeline").gotoAndPlay(0), l = !0), !l) {
                        c.data("timeline") != e;
                        var G = new punchgs.TimelineLite({
                            smoothChildTiming: !0,
                            onStart: s
                        });
                        G.pause(), "on" == i.fullScreenAlignForce;
                        var J = c;
                        c.data("mySplitText") != e && c.data("mySplitText").revert(), ("chars" == c.data("splitin") || "words" == c.data("splitin") || "lines" == c.data("splitin") || "chars" == c.data("splitout") || "words" == c.data("splitout") || "lines" == c.data("splitout")) && (c.find("a").length > 0 ? c.data("mySplitText", new punchgs.SplitText(c.find("a"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : c.find(".tp-layer-inner-rotation").length > 0 ? c.data("mySplitText", new punchgs.SplitText(c.find(".tp-layer-inner-rotation"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : c.data("mySplitText", new punchgs.SplitText(c, {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })), c.addClass("splitted")), "chars" == c.data("splitin") && (J = c.data("mySplitText").chars), "words" == c.data("splitin") && (J = c.data("mySplitText").words), "lines" == c.data("splitin") && (J = c.data("mySplitText").lines);
                        var Q = P(),
                            K = P();
                        c.data("repeat") != e && (repeatV = c.data("repeat")), c.data("yoyo") != e && (yoyoV = c.data("yoyo")), c.data("repeatdelay") != e && (repeatdelayV = c.data("repeatdelay")), c.hasClass("customin") ? Q = H(Q, c.data("customin")) : c.hasClass("randomrotate") ? (Q.scale = 3 * Math.random() + 1, Q.rotation = Math.round(200 * Math.random() - 100), Q.x = Math.round(200 * Math.random() - 100), Q.y = Math.round(200 * Math.random() - 100)) : c.hasClass("lfr") || c.hasClass("skewfromright") ? Q.x = 15 + i.width : c.hasClass("lfl") || c.hasClass("skewfromleft") ? Q.x = -15 - m : c.hasClass("sfl") || c.hasClass("skewfromleftshort") ? Q.x = -50 : c.hasClass("sfr") || c.hasClass("skewfromrightshort") ? Q.x = 50 : c.hasClass("lft") ? Q.y = -25 - v : c.hasClass("lfb") ? Q.y = 25 + i.height : c.hasClass("sft") ? Q.y = -50 : c.hasClass("sfb") && (Q.y = 50), c.hasClass("skewfromright") || c.hasClass("skewfromrightshort") ? Q.skewX = -85 : (c.hasClass("skewfromleft") || c.hasClass("skewfromleftshort")) && (Q.skewX = 85), (c.hasClass("fade") || c.hasClass("sft") || c.hasClass("sfl") || c.hasClass("sfb") || c.hasClass("skewfromleftshort") || c.hasClass("sfr") || c.hasClass("skewfromrightshort")) && (Q.opacity = 0), "safari" == _().toLowerCase();
                        var te = c.data("elementdelay") == e ? 0 : c.data("elementdelay");
                        K.ease = Q.ease = c.data("easing") == e ? punchgs.Power1.easeInOut : c.data("easing"), Q.data = new Object, Q.data.oldx = Q.x, Q.data.oldy = Q.y, K.data = new Object, K.data.oldx = K.x, K.data.oldy = K.y, Q.x = Q.x * p, Q.y = Q.y * p;
                        var ee = new punchgs.TimelineLite;
                        if (2 != h)
                            if (c.hasClass("customin")) J != c && G.add(punchgs.TweenLite.set(c, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                opacity: 1,
                                delay: 0,
                                overwrite: "all"
                            })), Q.visibility = "hidden", K.visibility = "visible", K.overwrite = "all", K.opacity = 1, K.onComplete = n(), K.delay = $, K.force3D = "auto", G.add(ee.staggerFromTo(J, N, Q, K, te), "frame0");
                            else if (Q.visibility = "visible", Q.transformPerspective = 600, J != c && G.add(punchgs.TweenLite.set(c, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                opacity: 1,
                                delay: 0,
                                overwrite: "all"
                            })), K.visibility = "visible", K.delay = $, K.onComplete = n(), K.opacity = 1, K.force3D = "auto", c.hasClass("randomrotate") && J != c)
                            for (var a = 0; a < J.length; a++) {
                                var ae = new Object,
                                    ie = new Object;
                                t.extend(ae, Q), t.extend(ie, K), Q.scale = 3 * Math.random() + 1, Q.rotation = Math.round(200 * Math.random() - 100), Q.x = Math.round(200 * Math.random() - 100), Q.y = Math.round(200 * Math.random() - 100), 0 != a && (ie.delay = $ + a * te), G.append(punchgs.TweenLite.fromTo(J[a], N, ae, ie), "frame0")
                            } else G.add(ee.staggerFromTo(J, N, Q, K, te), "frame0");
                        c.data("timeline", G); {
                            new Array
                        }
                        if (c.data("frames") != e) {
                            var oe = c.data("frames");
                            oe = oe.replace(/\s+/g, ""), oe = oe.replace("{", "");
                            var ne = oe.split("}");
                            t.each(ne, function(t, e) {
                                if (e.length > 0) {
                                    var a = D(e);
                                    B(c, i, a, "frame" + (t + 10), p)
                                }
                            })
                        }
                        G = c.data("timeline"), c.data("end") == e || -1 != h && 2 != h ? -1 == h || 2 == h ? F(c, i, 999999, Q, "frame99", p) : F(c, i, 200, Q, "frame99", p) : F(c, i, c.data("end") / 1e3, Q, "frame99", p), G = c.data("timeline"), c.data("timeline", G), Y(c, p), G.resume()
                    }
                }
                if (l && (R(c), Y(c, p), c.data("timeline") != e)) {
                    var se = c.data("timeline").getTweensOf();
                    t.each(se, function(t, a) {
                        if (a.vars.data != e) {
                            var i = a.vars.data.oldx * p,
                                o = a.vars.data.oldy * p;
                            if (1 != a.progress() && 0 != a.progress()) try {
                                a.vars.x = i, a.vary.y = o
                            } catch (n) {} else 1 == a.progress() && punchgs.TweenLite.set(a.target, {
                                x: i,
                                y: o
                            })
                        }
                    })
                }
            });
            var c = t("body").find("#" + i.container.attr("id")).find(".tp-bannertimer");
            c.data("opt", i), n != e && setTimeout(function() {
                n.resume()
            }, 30)
        },
        _ = function() {
            var t, e = navigator.appName,
                a = navigator.userAgent,
                i = a.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return i && null != (t = a.match(/version\/([\.\d]+)/i)) && (i[2] = t[1]), i = i ? [i[1], i[2]] : [e, navigator.appVersion, "-?"], i[0]
        },
        V = function(t, a) {
            t.data("fsize") == e && t.data("fsize", parseInt(t.css("font-size"), 0) || 0), t.data("pt") == e && t.data("pt", parseInt(t.css("paddingTop"), 0) || 0), t.data("pb") == e && t.data("pb", parseInt(t.css("paddingBottom"), 0) || 0), t.data("pl") == e && t.data("pl", parseInt(t.css("paddingLeft"), 0) || 0), t.data("pr") == e && t.data("pr", parseInt(t.css("paddingRight"), 0) || 0), t.data("mt") == e && t.data("mt", parseInt(t.css("marginTop"), 0) || 0), t.data("mb") == e && t.data("mb", parseInt(t.css("marginBottom"), 0) || 0), t.data("ml") == e && t.data("ml", parseInt(t.css("marginLeft"), 0) || 0), t.data("mr") == e && t.data("mr", parseInt(t.css("marginRight"), 0) || 0), t.data("bt") == e && t.data("bt", parseInt(t.css("borderTopWidth"), 0) || 0), t.data("bb") == e && t.data("bb", parseInt(t.css("borderBottomWidth"), 0) || 0), t.data("bl") == e && t.data("bl", parseInt(t.css("borderLeftWidth"), 0) || 0), t.data("br") == e && t.data("br", parseInt(t.css("borderRightWidth"), 0) || 0), t.data("ls") == e && t.data("ls", parseInt(t.css("letterSpacing"), 0) || 0), t.data("lh") == e && t.data("lh", parseInt(t.css("lineHeight"), 0) || "auto"), t.data("minwidth") == e && t.data("minwidth", parseInt(t.css("minWidth"), 0) || 0), t.data("minheight") == e && t.data("minheight", parseInt(t.css("minHeight"), 0) || 0), t.data("maxwidth") == e && t.data("maxwidth", parseInt(t.css("maxWidth"), 0) || "none"), t.data("maxheight") == e && t.data("maxheight", parseInt(t.css("maxHeight"), 0) || "none"), t.data("wii") == e && t.data("wii", parseInt(t.css("width"), 0) || 0), t.data("hii") == e && t.data("hii", parseInt(t.css("height"), 0) || 0), t.data("wan") == e && t.data("wan", t.css("-webkit-transition")), t.data("moan") == e && t.data("moan", t.css("-moz-animation-transition")), t.data("man") == e && t.data("man", t.css("-ms-animation-transition")), t.data("ani") == e && t.data("ani", t.css("transition")), t.hasClass("tp-splitted") || (t.css("-webkit-transition", "none"), t.css("-moz-transition", "none"), t.css("-ms-transition", "none"), t.css("transition", "none"), punchgs.TweenLite.set(t, {
                fontSize: Math.round(t.data("fsize") * a.bw) + "px",
                letterSpacing: Math.floor(t.data("ls") * a.bw) + "px",
                paddingTop: Math.round(t.data("pt") * a.bh) + "px",
                paddingBottom: Math.round(t.data("pb") * a.bh) + "px",
                paddingLeft: Math.round(t.data("pl") * a.bw) + "px",
                paddingRight: Math.round(t.data("pr") * a.bw) + "px",
                marginTop: t.data("mt") * a.bh + "px",
                marginBottom: t.data("mb") * a.bh + "px",
                marginLeft: t.data("ml") * a.bw + "px",
                marginRight: t.data("mr") * a.bw + "px",
                borderTopWidth: Math.round(t.data("bt") * a.bh) + "px",
                borderBottomWidth: Math.round(t.data("bb") * a.bh) + "px",
                borderLeftWidth: Math.round(t.data("bl") * a.bw) + "px",
                borderRightWidth: Math.round(t.data("br") * a.bw) + "px",
                lineHeight: Math.round(t.data("lh") * a.bh) + "px",
                minWidth: t.data("minwidth") * a.bw + "px",
                minHeight: t.data("minheight") * a.bh + "px",
                overwrite: "auto"
            }), setTimeout(function() {
                t.css("-webkit-transition", t.data("wan")), t.css("-moz-transition", t.data("moan")), t.css("-ms-transition", t.data("man")), t.css("transition", t.data("ani"))
            }, 30), "none" != t.data("maxheight") && t.css({
                maxHeight: t.data("maxheight") * a.bh + "px"
            }), "none" != t.data("maxwidth") && t.css({
                maxWidth: t.data("maxwidth") * a.bw + "px"
            }))
        },
        Y = function(a, i) {
            a.find(".rs-pendulum").each(function() {
                var a = t(this);
                if (a.data("timeline") == e) {
                    a.data("timeline", new punchgs.TimelineLite);
                    var o = a.data("startdeg") == e ? -20 : a.data("startdeg"),
                        n = a.data("enddeg") == e ? 20 : a.data("enddeg");
                    speed = a.data("speed") == e ? 2 : a.data("speed"), origin = a.data("origin") == e ? "50% 50%" : a.data("origin"), easing = a.data("ease") == e ? punchgs.Power2.easeInOut : a.data("ease"), o *= i, n *= i, a.data("timeline").append(new punchgs.TweenLite.fromTo(a, speed, {
                        force3D: "auto",
                        rotation: o,
                        transformOrigin: origin
                    }, {
                        rotation: n,
                        ease: easing
                    })), a.data("timeline").append(new punchgs.TweenLite.fromTo(a, speed, {
                        force3D: "auto",
                        rotation: n,
                        transformOrigin: origin
                    }, {
                        rotation: o,
                        ease: easing,
                        onComplete: function() {
                            a.data("timeline").restart()
                        }
                    }))
                }
            }), a.find(".rs-slideloop").each(function() {
                var a = t(this);
                if (a.data("timeline") == e) {
                    a.data("timeline", new punchgs.TimelineLite);
                    var o = a.data("xs") == e ? 0 : a.data("xs"),
                        n = a.data("ys") == e ? 0 : a.data("ys");
                    xe = a.data("xe") == e ? 0 : a.data("xe"), ye = a.data("ye") == e ? 0 : a.data("ye"), speed = a.data("speed") == e ? 2 : a.data("speed"), easing = a.data("ease") == e ? punchgs.Power2.easeInOut : a.data("ease"), o *= i, n *= i, xe *= i, ye *= i, a.data("timeline").append(new punchgs.TweenLite.fromTo(a, speed, {
                        force3D: "auto",
                        x: o,
                        y: n
                    }, {
                        x: xe,
                        y: ye,
                        ease: easing
                    })), a.data("timeline").append(new punchgs.TweenLite.fromTo(a, speed, {
                        force3D: "auto",
                        x: xe,
                        y: ye
                    }, {
                        x: o,
                        y: n,
                        onComplete: function() {
                            a.data("timeline").restart()
                        }
                    }))
                }
            }), a.find(".rs-pulse").each(function() {
                var a = t(this);
                if (a.data("timeline") == e) {
                    a.data("timeline", new punchgs.TimelineLite);
                    var i = a.data("zoomstart") == e ? 0 : a.data("zoomstart"),
                        o = a.data("zoomend") == e ? 0 : a.data("zoomend");
                    speed = a.data("speed") == e ? 2 : a.data("speed"), easing = a.data("ease") == e ? punchgs.Power2.easeInOut : a.data("ease"), a.data("timeline").append(new punchgs.TweenLite.fromTo(a, speed, {
                        force3D: "auto",
                        scale: i
                    }, {
                        scale: o,
                        ease: easing
                    })), a.data("timeline").append(new punchgs.TweenLite.fromTo(a, speed, {
                        force3D: "auto",
                        scale: o
                    }, {
                        scale: i,
                        onComplete: function() {
                            a.data("timeline").restart()
                        }
                    }))
                }
            }), a.find(".rs-wave").each(function() {
                var a = t(this);
                if (a.data("timeline") == e) {
                    a.data("timeline", new punchgs.TimelineLite); {
                        var o = a.data("angle") == e ? 10 : a.data("angle"),
                            n = a.data("radius") == e ? 10 : a.data("radius"),
                            s = a.data("speed") == e ? -20 : a.data("speed");
                        a.data("origin") == e ? -20 : a.data("origin")
                    }
                    o *= i, n *= i;
                    var r = {
                        a: 0,
                        ang: o,
                        element: a,
                        unit: n
                    };
                    a.data("timeline").append(new punchgs.TweenLite.fromTo(r, s, {
                        a: 360
                    }, {
                        a: 0,
                        force3D: "auto",
                        ease: punchgs.Linear.easeNone,
                        onUpdate: function() {
                            var t = r.a * (Math.PI / 180);
                            punchgs.TweenLite.to(r.element, .1, {
                                force3D: "auto",
                                x: Math.cos(t) * r.unit,
                                y: r.unit * (1 - Math.sin(t))
                            })
                        },
                        onComplete: function() {
                            a.data("timeline").restart()
                        }
                    }))
                }
            })
        },
        R = function(a) {
            a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var a = t(this);
                a.data("timeline") != e && (a.data("timeline").pause(), a.data("timeline", null))
            })
        },
        X = function(a, i) {
            var o = 0,
                n = a.find(".tp-caption"),
                s = i.container.find(".tp-static-layers").find(".tp-caption");
            return t.each(s, function(t, e) {
                n.push(e)
            }), n.each(function() {
                var a = -1,
                    n = t(this);
                if (n.hasClass("tp-static-layer") && ((-1 == n.data("startslide") || "-1" == n.data("startslide")) && n.data("startslide", 0), (-1 == n.data("endslide") || "-1" == n.data("endslide")) && n.data("endslide", i.slideamount), n.hasClass("tp-is-shown") ? n.data("startslide") > i.next || n.data("endslide") < i.next ? (a = 2, n.removeClass("tp-is-shown")) : a = 0 : a = 2), 0 != a) {
                    if (R(n), n.find("iframe").length > 0) {
                        try {
                            var s = n.find("iframe"),
                                r = s.attr("id"),
                                d = $f(r);
                            d.api("pause"), clearTimeout(n.data("timerplay"))
                        } catch (l) {}
                        try {
                            var h = n.data("player");
                            h.stopVideo(), clearTimeout(n.data("timerplay"))
                        } catch (l) {}
                    }
                    if (n.find("video").length > 0) try {
                        n.find("video").each(function() {
                            {
                                var e = t(this).parent();
                                e.attr("id")
                            }
                            clearTimeout(e.data("timerplay"));
                            var a = this;
                            a.pause()
                        })
                    } catch (l) {}
                    try {
                        var c = n.data("timeline"),
                            p = c.getLabelTime("frame99"),
                            f = c.time();
                        if (p > f) {
                            var u = c.getTweensOf(n);
                            if (t.each(u, function(t, e) {
                                    0 != t && e.pause()
                                }), 0 != n.css("opacity")) {
                                var g = n.data(n.data("endspeed") == e ? "speed" : "endspeed");
                                g > o && (o = g), c.play("frame99")
                            } else c.progress(1, !1)
                        }
                    } catch (l) {}
                }
            }), o
        },
        B = function(t, a, i, o, n) {
            var s = t.data("timeline"),
                r = new punchgs.TimelineLite,
                d = t;
            "chars" == i.typ ? d = t.data("mySplitText").chars : "words" == i.typ ? d = t.data("mySplitText").words : "lines" == i.typ && (d = t.data("mySplitText").lines), i.animation.ease = i.ease, i.animation.rotationZ != e && (i.animation.rotation = i.animation.rotationZ), i.animation.data = new Object, i.animation.data.oldx = i.animation.x, i.animation.data.oldy = i.animation.y, i.animation.x = i.animation.x * n, i.animation.y = i.animation.y * n, s.add(r.staggerTo(d, i.speed, i.animation, i.elementdelay), i.start), s.addLabel(o, i.start), t.data("timeline", s)
        },
        F = function(t, a, i, o, n, s) {
            var r = t.data("timeline"),
                d = new punchgs.TimelineLite,
                l = P(),
                h = t.data(t.data("endspeed") == e ? "speed" : "endspeed");
            if (l.ease = t.data("endeasing") == e ? punchgs.Power1.easeInOut : t.data("endeasing"), h /= 1e3, t.hasClass("ltr") || t.hasClass("ltl") || t.hasClass("str") || t.hasClass("stl") || t.hasClass("ltt") || t.hasClass("ltb") || t.hasClass("stt") || t.hasClass("stb") || t.hasClass("skewtoright") || t.hasClass("skewtorightshort") || t.hasClass("skewtoleft") || t.hasClass("skewtoleftshort") || t.hasClass("fadeout") || t.hasClass("randomrotateout")) {
                t.hasClass("skewtoright") || t.hasClass("skewtorightshort") ? l.skewX = 35 : (t.hasClass("skewtoleft") || t.hasClass("skewtoleftshort")) && (l.skewX = -35), t.hasClass("ltr") || t.hasClass("skewtoright") ? l.x = a.width + 60 : t.hasClass("ltl") || t.hasClass("skewtoleft") ? l.x = 0 - (a.width + 60) : t.hasClass("ltt") ? l.y = 0 - (a.height + 60) : t.hasClass("ltb") ? l.y = a.height + 60 : t.hasClass("str") || t.hasClass("skewtorightshort") ? (l.x = 50, l.opacity = 0) : t.hasClass("stl") || t.hasClass("skewtoleftshort") ? (l.x = -50, l.opacity = 0) : t.hasClass("stt") ? (l.y = -50, l.opacity = 0) : t.hasClass("stb") ? (l.y = 50, l.opacity = 0) : t.hasClass("randomrotateout") ? (l.x = Math.random() * a.width, l.y = Math.random() * a.height, l.scale = 2 * Math.random() + .3, l.rotation = 360 * Math.random() - 180, l.opacity = 0) : t.hasClass("fadeout") && (l.opacity = 0), t.hasClass("skewtorightshort") ? l.x = 270 : t.hasClass("skewtoleftshort") && (l.x = -270), l.data = new Object, l.data.oldx = l.x, l.data.oldy = l.y, l.x = l.x * s, l.y = l.y * s, l.overwrite = "auto";
                var c = t,
                    c = t;
                "chars" == t.data("splitout") ? c = t.data("mySplitText").chars : "words" == t.data("splitout") ? c = t.data("mySplitText").words : "lines" == t.data("splitout") && (c = t.data("mySplitText").lines);
                var p = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                r.add(d.staggerTo(c, h, l, p), i)
            } else if (t.hasClass("customout")) {
                l = H(l, t.data("customout"));
                var c = t;
                "chars" == t.data("splitout") ? c = t.data("mySplitText").chars : "words" == t.data("splitout") ? c = t.data("mySplitText").words : "lines" == t.data("splitout") && (c = t.data("mySplitText").lines);
                var p = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                l.onStart = function() {
                    punchgs.TweenLite.set(t, {
                        transformPerspective: l.transformPerspective,
                        transformOrigin: l.transformOrigin,
                        overwrite: "auto"
                    })
                }, l.data = new Object, l.data.oldx = l.x, l.data.oldy = l.y, l.x = l.x * s, l.y = l.y * s, r.add(d.staggerTo(c, h, l, p), i)
            } else o.delay = 0, r.add(punchgs.TweenLite.to(t, h, o), i);
            r.addLabel(n, i), t.data("timeline", r)
        },
        j = function(e, a) {
            e.children().each(function() {
                try {
                    t(this).die("click")
                } catch (e) {}
                try {
                    t(this).die("mouseenter")
                } catch (e) {}
                try {
                    t(this).die("mouseleave")
                } catch (e) {}
                try {
                    t(this).unbind("hover")
                } catch (e) {}
            });
            try {
                e.die("click", "mouseenter", "mouseleave")
            } catch (i) {}
            clearInterval(a.cdint), e = null
        },
        q = function(a, i) {
            if (i.cd = 0, i.loop = 0, i.looptogo = i.stopAfterLoops != e && i.stopAfterLoops > -1 ? i.stopAfterLoops : 9999999, i.lastslidetoshow = i.stopAtSlide != e && i.stopAtSlide > -1 ? i.stopAtSlide : 999, i.stopLoop = "off", 0 == i.looptogo && (i.stopLoop = "on"), i.slideamount > 1 && (0 != i.stopAfterLoops || 1 != i.stopAtSlide)) {
                var o = a.find(".tp-bannertimer");
                a.on("stoptimer", function() {
                    o.data("tween").pause(), "on" == i.hideTimerBar && o.css({
                        visibility: "hidden"
                    })
                }), a.on("starttimer", function() {
                    1 != i.conthover && 1 != i.videoplaying && i.width > i.hideSliderAtLimit && 1 != i.bannertimeronpause && 1 != i.overnav && ("on" == i.stopLoop && i.next == i.lastslidetoshow - 1 || (o.css({
                        visibility: "visible"
                    }), o.data("tween").play())), "on" == i.hideTimerBar && o.css({
                        visibility: "hidden"
                    })
                }), a.on("restarttimer", function() {
                    "on" == i.stopLoop && i.next == i.lastslidetoshow - 1 || (o.css({
                        visibility: "visible"
                    }), o.data("tween", punchgs.TweenLite.fromTo(o, i.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: n,
                        delay: 1
                    }))), "on" == i.hideTimerBar && o.css({
                        visibility: "hidden"
                    })
                }), a.on("nulltimer", function() {
                    o.data("tween").pause(0), "on" == i.hideTimerBar && o.css({
                        visibility: "hidden"
                    })
                });
                var n = function() {
                    0 == t("body").find(a).length && (j(a, i), clearInterval(i.cdint)), 1 == a.data("conthover-changed") && (i.conthover = a.data("conthover"), a.data("conthover-changed", 0)), i.act = i.next, i.next = i.next + 1, i.next > a.find(">ul >li").length - 1 && (i.next = 0, i.looptogo = i.looptogo - 1, i.looptogo <= 0 && (i.stopLoop = "on")), "on" == i.stopLoop && i.next == i.lastslidetoshow - 1 ? (a.find(".tp-bannertimer").css({
                        visibility: "hidden"
                    }), a.trigger("revolution.slide.onstop")) : o.data("tween").restart(), L(a, i)
                };
                o.data("tween", punchgs.TweenLite.fromTo(o, i.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: n,
                    delay: 1
                })), o.data("opt", i), a.hover(function() {
                    if ("on" == i.onHoverStop && !E()) {
                        a.trigger("stoptimer"), a.trigger("revolution.slide.onpause");
                        var o = a.find(">ul >li:eq(" + i.next + ") .slotholder");
                        o.find(".defaultimg").each(function() {
                            var a = t(this);
                            a.data("kenburn") != e && a.data("kenburn").pause()
                        })
                    }
                }, function() {
                    if (1 != a.data("conthover")) {
                        a.trigger("revolution.slide.onresume"), a.trigger("starttimer");
                        var o = a.find(">ul >li:eq(" + i.next + ") .slotholder");
                        o.find(".defaultimg").each(function() {
                            var a = t(this);
                            a.data("kenburn") != e && a.data("kenburn").play()
                        })
                    }
                })
            }
        },
        E = function() {
            var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                e = !1;
            for (i in t) navigator.userAgent.split(t[i]).length > 1 && (e = !0);
            return e
        },
        $ = function(t, e, a) {
            var i = e.data("owidth"),
                o = e.data("oheight");
            if (i / o > a.width / a.height) {
                var n = a.container.width() / i,
                    s = o * n,
                    r = s / a.container.height() * t;
                return t *= 100 / r, r = 100, t = t, t + "% " + r + "% 1"
            }
            var n = a.container.width() / i,
                s = o * n,
                r = s / a.container.height() * t;
            return t + "% " + r + "%"
        },
        N = function(a, i, o, n) {
            try {
                {
                    a.find(">ul:first-child >li:eq(" + i.act + ")")
                }
            } catch (r) {
                {
                    a.find(">ul:first-child >li:eq(1)")
                }
            }
            i.lastslide = i.act;
            var d = a.find(">ul:first-child >li:eq(" + i.next + ")"),
                l = d.find(".slotholder"),
                h = l.data("bgposition"),
                c = l.data("bgpositionend"),
                p = l.data("zoomstart") / 100,
                f = l.data("zoomend") / 100,
                u = l.data("rotationstart"),
                g = l.data("rotationend"),
                m = l.data("bgfit"),
                v = l.data("bgfitend"),
                w = l.data("easeme"),
                b = l.data("duration") / 1e3,
                y = 100;
            m == e && (m = 100), v == e && (v = 100);
            var x = m,
                T = v;
            m = $(m, l, i), v = $(v, l, i), y = $(100, l, i), p == e && (p = 1), f == e && (f = 1), u == e && (u = 0), g == e && (g = 0), 1 > p && (p = 1), 1 > f && (f = 1);
            var C = new Object;
            C.w = parseInt(y.split(" ")[0], 0), C.h = parseInt(y.split(" ")[1], 0);
            var L = !1;
            "1" == y.split(" ")[2] && (L = !0), l.find(".defaultimg").each(function() {
                var e = t(this);
                0 == l.find(".kenburnimg").length ? l.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + e.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + C.w + "%;height:" + C.h + '%;"></div>') : l.find(".kenburnimg img").css({
                    width: C.w + "%",
                    height: C.h + "%"
                });
                var a = l.find(".kenburnimg img"),
                    o = Z(i, h, m, a, L),
                    r = Z(i, c, v, a, L);
                if (L && (o.w = x / 100, r.w = T / 100), n) {
                    punchgs.TweenLite.set(a, {
                        autoAlpha: 0,
                        transformPerspective: 1200,
                        transformOrigin: "0% 0%",
                        top: 0,
                        left: 0,
                        scale: o.w,
                        x: o.x,
                        y: o.y
                    });
                    var d = o.w,
                        p = d * a.width() - i.width,
                        f = d * a.height() - i.height,
                        u = Math.abs(o.x / p * 100),
                        y = Math.abs(o.y / f * 100);
                    0 == f && (y = 0), 0 == p && (u = 0), e.data("bgposition", u + "% " + y + "%"), s(8) || e.data("currotate", U(a)), s(8) || e.data("curscale", C.w * d + "%  " + (C.h * d + "%")), l.find(".kenburnimg").remove()
                } else e.data("kenburn", punchgs.TweenLite.fromTo(a, b, {
                    autoAlpha: 1,
                    force3D: punchgs.force3d,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: o.w,
                    x: o.x,
                    y: o.y
                }, {
                    autoAlpha: 1,
                    rotationZ: g,
                    ease: w,
                    x: r.x,
                    y: r.y,
                    scale: r.w,
                    onUpdate: function() {
                        var t = a[0]._gsTransform.scaleX,
                            o = t * a.width() - i.width,
                            n = t * a.height() - i.height,
                            r = Math.abs(a[0]._gsTransform.x / o * 100),
                            d = Math.abs(a[0]._gsTransform.y / n * 100);
                        0 == n && (d = 0), 0 == o && (r = 0), e.data("bgposition", r + "% " + d + "%"), s(8) || e.data("currotate", U(a)), s(8) || e.data("curscale", C.w * t + "%  " + (C.h * t + "%"))
                    }
                }))
            })
        },
        Z = function(t, e, a, i, o) {
            var n = new Object;
            switch (n.w = o ? parseInt(a.split(" ")[1], 0) / 100 : parseInt(a.split(" ")[0], 0) / 100, e) {
                case "left top":
                case "top left":
                    n.x = 0, n.y = 0;
                    break;
                case "center top":
                case "top center":
                    n.x = ((0 - i.width()) * n.w + parseInt(t.width, 0)) / 2, n.y = 0;
                    break;
                case "top right":
                case "right top":
                    n.x = (0 - i.width()) * n.w + parseInt(t.width, 0), n.y = 0;
                    break;
                case "center left":
                case "left center":
                    n.x = 0, n.y = ((0 - i.height()) * n.w + parseInt(t.height, 0)) / 2;
                    break;
                case "center center":
                    n.x = ((0 - i.width()) * n.w + parseInt(t.width, 0)) / 2, n.y = ((0 - i.height()) * n.w + parseInt(t.height, 0)) / 2;
                    break;
                case "center right":
                case "right center":
                    n.x = (0 - i.width()) * n.w + parseInt(t.width, 0), n.y = ((0 - i.height()) * n.w + parseInt(t.height, 0)) / 2;
                    break;
                case "bottom left":
                case "left bottom":
                    n.x = 0, n.y = (0 - i.height()) * n.w + parseInt(t.height, 0);
                    break;
                case "bottom center":
                case "center bottom":
                    n.x = ((0 - i.width()) * n.w + parseInt(t.width, 0)) / 2, n.y = (0 - i.height()) * n.w + parseInt(t.height, 0);
                    break;
                case "bottom right":
                case "right bottom":
                    n.x = (0 - i.width()) * n.w + parseInt(t.width, 0), n.y = (0 - i.height()) * n.w + parseInt(t.height, 0)
            }
            return n
        },
        U = function(t) {
            var e = t.css("-webkit-transform") || t.css("-moz-transform") || t.css("-ms-transform") || t.css("-o-transform") || t.css("transform");
            if ("none" !== e) var a = e.split("(")[1].split(")")[0].split(","),
                i = a[0],
                o = a[1],
                n = Math.round(Math.atan2(o, i) * (180 / Math.PI));
            else var n = 0;
            return 0 > n ? n += 360 : n
        },
        G = function(a, i) {
            try {
                var o = a.find(">ul:first-child >li:eq(" + i.act + ")")
            } catch (n) {
                var o = a.find(">ul:first-child >li:eq(1)")
            }
            i.lastslide = i.act; {
                var s = a.find(">ul:first-child >li:eq(" + i.next + ")");
                o.find(".slotholder"), s.find(".slotholder")
            }
            a.find(".defaultimg").each(function() {
                var a = t(this);
                punchgs.TweenLite.killTweensOf(a, !1), punchgs.TweenLite.set(a, {
                    scale: 1,
                    rotationZ: 0
                }), punchgs.TweenLite.killTweensOf(a.data("kenburn img"), !1), a.data("kenburn") != e && a.data("kenburn").pause(), a.data("currotate") != e && a.data("bgposition") != e && a.data("curscale") != e && punchgs.TweenLite.set(a, {
                    rotation: a.data("currotate"),
                    backgroundPosition: a.data("bgposition"),
                    backgroundSize: a.data("curscale")
                }), a != e && a.data("kenburn img") != e && a.data("kenburn img").length > 0 && punchgs.TweenLite.set(a.data("kenburn img"), {
                    autoAlpha: 0
                })
            })
        },
        J = function(e, a) {
            return E() && "on" == a.parallaxDisableOnMobile ? !1 : (e.find(">ul:first-child >li").each(function() {
                for (var e = t(this), i = 1; 10 >= i; i++) e.find(".rs-parallaxlevel-" + i).each(function() {
                    var e = t(this);
                    e.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + e.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + a.parallaxLevels[i - 1] + '"></div>')
                })
            }), ("mouse" == a.parallax || "scroll+mouse" == a.parallax || "mouse+scroll" == a.parallax) && (e.mouseenter(function(t) {
                var a = e.find(".current-sr-slide-visible"),
                    i = e.offset().top,
                    o = e.offset().left,
                    n = t.pageX - o,
                    s = t.pageY - i;
                a.data("enterx", n), a.data("entery", s)
            }), e.on("mousemove.hoverdir, mouseleave.hoverdir", function(a) {
                var i = e.find(".current-sr-slide-visible");
                switch (a.type) {
                    case "mousemove":
                        var o = e.offset().top,
                            n = e.offset().left,
                            s = i.data("enterx"),
                            r = i.data("entery"),
                            d = s - (a.pageX - n),
                            l = r - (a.pageY - o);
                        i.find(".tp-parallax-container").each(function() {
                            var e = t(this),
                                a = parseInt(e.data("parallaxlevel"), 0) / 100,
                                i = d * a,
                                o = l * a;
                            punchgs.TweenLite.to(e, .4, {
                                force3D: "auto",
                                x: i,
                                y: o,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        });
                        break;
                    case "mouseleave":
                        i.find(".tp-parallax-container").each(function() {
                            var e = t(this);
                            punchgs.TweenLite.to(e, 1.5, {
                                force3D: "auto",
                                x: 0,
                                y: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                }
            }), E() && (window.ondeviceorientation = function(a) {
                var i = Math.round(a.beta || 0),
                    o = Math.round(a.gamma || 0),
                    n = e.find(".current-sr-slide-visible");
                if (t(window).width() > t(window).height()) {
                    var s = o;
                    o = i, i = s
                }
                var r = 360 / e.width() * o,
                    d = 180 / e.height() * i;
                n.find(".tp-parallax-container").each(function() {
                    var e = t(this),
                        a = parseInt(e.data("parallaxlevel"), 0) / 100,
                        i = r * a,
                        o = d * a;
                    punchgs.TweenLite.to(e, .2, {
                        force3D: "auto",
                        x: i,
                        y: o,
                        ease: punchgs.Power3.easeOut
                    })
                })
            })), void(("scroll" == a.parallax || "scroll+mouse" == a.parallax || "mouse+scroll" == a.parallax) && t(window).on("scroll", function() {
                Q(e, a)
            })))
        },
        Q = function(e, a) {
            if (E() && "on" == a.parallaxDisableOnMobile) return !1;
            var i = e.offset().top,
                o = t(window).scrollTop(),
                n = i + e.height() / 2,
                s = i + e.height() / 2 - o,
                r = t(window).height() / 2,
                d = r - s;
            r > n && (d -= r - n);
            e.find(".current-sr-slide-visible");
            if (e.find(".tp-parallax-container").each(function() {
                    var e = t(this),
                        a = parseInt(e.data("parallaxlevel"), 0) / 100,
                        i = d * a;
                    e.data("parallaxoffset", i), punchgs.TweenLite.to(e, .2, {
                        force3D: "auto",
                        y: i,
                        ease: punchgs.Power3.easeOut
                    })
                }), "on" != a.parallaxBgFreeze) {
                var l = a.parallaxLevels[0] / 100,
                    h = d * l;
                punchgs.TweenLite.to(e, .2, {
                    force3D: "auto",
                    y: h,
                    ease: punchgs.Power3.easeOut
                })
            }
        },
        K = function(a, i) {
            var o = a.parent();
            ("thumb" == i.navigationType || "both" == i.navsecond) && o.append('<div class="tp-bullets tp-thumbs ' + i.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
            var n = o.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                s = n.parent();
            s.width(i.thumbWidth * i.thumbAmount), s.height(i.thumbHeight), s.parent().width(i.thumbWidth * i.thumbAmount), s.parent().height(i.thumbHeight), a.find(">ul:first >li").each(function(t) {
                var o = a.find(">ul:first >li:eq(" + t + ")"),
                    s = o.find(".defaultimg").css("backgroundColor");
                if (o.data("thumb") != e) var r = o.data("thumb");
                else var r = o.find("img:first").attr("src");
                n.append('<div class="bullet thumb" style="background-color:' + s + ";position:relative;width:" + i.thumbWidth + "px;height:" + i.thumbHeight + "px;background-image:url(" + r + ') !important;background-size:cover;background-position:center center;"></div>');
                n.find(".bullet:first")
            });
            var d = 10;
            n.find(".bullet").each(function(e) {
                var o = t(this);
                e == i.slideamount - 1 && o.addClass("last"), 0 == e && o.addClass("first"), o.width(i.thumbWidth), o.height(i.thumbHeight), d < o.outerWidth(!0) && (d = o.outerWidth(!0)), o.click(function() {
                    0 == i.transition && o.index() != i.act && (i.next = o.index(), r(i, a))
                })
            });
            var l = d * a.find(">ul:first >li").length,
                h = n.parent().width();
            i.thumbWidth = d, l > h && (t(document).mousemove(function(e) {
                t("body").data("mousex", e.pageX)
            }), n.parent().mouseenter(function() {
                var e = t(this);
                e.addClass("over");
                var i = e.offset(),
                    o = t("body").data("mousex") - i.left,
                    n = e.width(),
                    s = e.find(".bullet:first").outerWidth(!0),
                    r = s * a.find(">ul:first >li").length,
                    d = r - n + 15,
                    l = d / n;
                o -= 30;
                var h = 0 - o * l;
                h > 0 && (h = 0), 0 - r + n > h && (h = 0 - r + n), ee(e, h, 200)
            }), n.parent().mousemove(function() {
                var e = t(this),
                    i = e.offset(),
                    o = t("body").data("mousex") - i.left,
                    n = e.width(),
                    s = e.find(".bullet:first").outerWidth(!0),
                    r = s * a.find(">ul:first >li").length - 1,
                    d = r - n + 15,
                    l = d / n;
                o -= 3, 6 > o && (o = 0), o + 3 > n - 6 && (o = n);
                var h = 0 - o * l;
                h > 0 && (h = 0), 0 - r + n > h && (h = 0 - r + n), ee(e, h, 0)
            }), n.parent().mouseleave(function() {
                var e = t(this);
                e.removeClass("over"), te(a)
            }))
        },
        te = function(t) {
            var e = t.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                a = e.parent(),
                i = (a.offset(), a.find(".bullet:first").outerWidth(!0)),
                o = a.find(".bullet.selected").index() * i,
                n = a.width(),
                i = a.find(".bullet:first").outerWidth(!0),
                s = i * t.find(">ul:first >li").length,
                r = 0 - o;
            r > 0 && (r = 0), 0 - s + n > r && (r = 0 - s + n), a.hasClass("over") || ee(a, r, 200)
        },
        ee = function(t, e) {
            punchgs.TweenLite.to(t.find(".tp-thumbcontainer"), .2, {
                force3D: "auto",
                left: e,
                ease: punchgs.Power3.easeOut,
                overwrite: "auto"
            })
        }
}(jQuery);