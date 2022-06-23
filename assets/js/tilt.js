(function ($) {

    "use strict";

    $(".cardop, .cardcontent").tilt({
        maxTilt: 15,
        perspective: 1400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 25,
        glare: true,
        maxGlare: 0.2,
        scale: 1.04
    });

}(jQuery));