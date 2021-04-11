$(document).ready(function () {
    const mask = $("#Mask");

    $("#BergerBtn").click(function () {
        HandleScroll();
        $("#MobileMenu").toggleClass("active");
    });

    $(".product-overlay").click(function (event) {
        event.preventDefault();
        HandleScroll();
        const id = $(this).attr("data-target");
        $(id).addClass("show");
    });

    $(".close-popup").click(function (event) {
        event.preventDefault();
        HandleScroll();
        $(".product-popup").removeClass("show");
    });

    mask.click(function () {
        HandleScroll();
        $("#MobileMenu").removeClass("active");
        $(".product-popup").removeClass("show");
    });

    function HandleScroll() {
        mask.toggleClass("show");

        const visible = mask.hasClass("show");

        if (visible) {
            $("body, html").addClass("popup-mode");
        } else {
            $("body, html").removeClass("popup-mode");
        }
    }

    $(window).scroll(function () {
        const navbar = $("#Navbar");

        const ScrollPos = Math.floor($(window).scrollTop());

        const pos2 = Math.floor($("#AboutMe").offset().top);
        const pos3 = Math.floor($("#Resume").offset().top);
        const pos4 = Math.floor($("#MyProduct").offset().top);
        const pos5 = Math.floor($("#ConnectMe").offset().top);

        $(".nav-link").removeClass("active");

        if (ScrollPos < pos2) {
            $("a[href='#Header']").addClass("active");
        } else if (ScrollPos >= pos2 && ScrollPos < pos3) {
            $("a[href='#AboutMe']").addClass("active");
        } else if (ScrollPos >= pos3 && ScrollPos < pos4) {
            $("a[href='#Resume']").addClass("active");
        } else if (ScrollPos >= pos4 && ScrollPos < pos5) {
            $("a[href='#MyProduct']").addClass("active");
        } else if (ScrollPos >= pos5) {
            $("a[href='#ConnectMe']").addClass("active");
        }

        if (ScrollPos < pos2) {
            navbar.removeClass("colorful");
        } else {
            navbar.addClass("colorful");
        }
    });
});