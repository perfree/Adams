(function ($) {
    $(document).ready(function () {
        if(typeof QRCode === "function" && $(".qrcode .img-box").length) {
            let href = location.href;
            if($("[rel='shortlink']").length){
                href = $("[rel='shortlink']").get(0).href;
            }
            new QRCode($(".qrcode .img-box").get(0), href);
        }
        $('.infos .donate,.infos .share').unbind("click").click(function () {
            let el = $('.infos');
            if ($(this).attr('class') === 'donate') {
                el.removeClass('share-close');
                el.toggleClass('donate-close');
            } else {
                el.removeClass('donate-close');
                el.toggleClass('share-close');
            }
        });
    });

    $(".dot-good").click(function () {
        if ($(this).hasClass('done')) {
            alert('点多了伤身体~');
            return false;
        } else {
            $(this).addClass('done');
            var id = $(this).data("id"),
                action = $(this).data('action'),
                rateHolder = $(this).children('.count');
            var ajax_data = {
                action: "dotGood",
                um_id: id,
                um_action: action
            };
            $.post(themeAdminAjax.url, ajax_data, function (data) {
                $(rateHolder).html(data);
            });
            return false;
        }
    });

})(jQuery);
