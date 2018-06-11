(function($){
    $(document).ready(function(){
        var folder = $('.folder_base'),
            icon = $('.folder_icon'),
            icon2 = $('.folder_icon2'),
            icon3 = $('.folder_icon3'),
            icon4 = $('.folder_icon4'),
            icon5 = $('.folder_icon5'),
            entireIco = folder.add(icon);
        var tl = new TimelineMax({repeat:100});
        tl.staggerFrom([icon], 2, {y: 0,opacity:0, scale: 0, easeOut:Bounce.ease})
        tl.to(icon, 3, {x:0, y:0, opacity:0,ease:Bounce.ease})
        tl.staggerFrom([icon2], 2, {y: 0,opacity:0, scale: 0, easeOut:Bounce.ease})
        tl.to(icon2, 3, {x:0, y:0, opacity:0,ease:Bounce.ease})
        tl.staggerFrom([icon3], 2, {y: 0,opacity:0,rotation: -100, scale: 0, easeOut:Bounce.ease})
        tl.to(icon3, 3, {x:0, y:0, opacity:0,ease:Bounce.ease})
        tl.staggerFrom([icon4], 2, {y: 0,opacity:0, rotation: 100, scale: 0, easeOut:Bounce.ease})
        tl.to(icon4, 3, {x:0, y:0, opacity:0,ease:Bounce.ease})
        tl.staggerFrom([icon5], 2, {y: 0,opacity:0, scale: 0, easeOut:Bounce.ease})
        tl.to(icon5, 3, {x:0, y:0, opacity:0,ease:Bounce.ease});
        $('.remove').click(function() {
            $('.folder').css('display','none');
        })
    })
})(jQuery);