$(function () {
    // モーダルウィンドウ開
    $('#modal-switch').click(function () {
        $('#modal').fadeIn();
    });
    // モーダルウィンドウ閉
    $('#modal-close').click(function () {
        $('#modal').fadeOut();
    });

    // モーダルバー上段の枠

    $('.log-on-place').click(function () {
        let $border = $('.log-on-place');
        if ($border.hasClass('thick')) {
            $border.removeClass('thick');
            $border.css('border', 'solid 1px #b0b0b0');

        } else {
            $border.addClass('thick');
            $border.css('border', 'solid 2px #000000');

        }
    });
    // モーダル、アカウントリンクバーの枠
    $(".s-account").hover(function () {
        $(this).css('border', 'solid 2px #000000');
    }, function () {
        $(this).css('border', 'solid 2px #B0B0B0');
    });

    // リンク要素のアンダーライン
    $('.u-line').hover(function () {
        $(this).css('text-decoration', 'underline');
    }, function () {
        $(this).css('text-decoration', 'none');
    });

    // リンク要素のopacity
    $('.opa').hover(function () {
        $(this).css('opacity', '0.9');
    }, function () {
        $(this).css('opacity', '');
    });

    // 「ホスティング詳細」のリンク
    $('.detail-link').click(function () {
        $(this).css('box-shadow', ' 0 0 8px gray');
    });

    // listing、「はじめる」リンク
    $('.listing a').click(function () {
        $(this).css('opacity', '0.8');
    });
});