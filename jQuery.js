$(function () {
    // モーダルウィンドウ開
    $('.modal-switch').click(function () {
        $('#modal').fadeIn();
        $('.modal-w').css('display', 'block');
        $('.r-h-logo').css('visibility', 'hidden');
    });
    // モーダルウィンドウ閉
    $('.modal-close').click(function () {
        $('#modal').fadeOut();
        $('.modal-w').css('display', 'none');
        $('.r-h-logo').css('visibility', 'visible');
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

    // メディアクエリ740px以下
    if (window.matchMedia('(max-width: 740px)').matches) {

        // レスポンシブnav開
        $(document).on('click', '#r-nav-open', function () {
            $('header').css('visibility', 'visible');
            $('.r-main-nav').css('position', 'fixed');
            $('.r-main-nav').css('top', '0');
            $('.r-logo-change').html('<img src="./img/logo.png" alt="logo">');
            $('.logo-down').css('color', '#484848');
            $('body').css('overflow', 'hidden');
            $('.logo-down').css('transform', 'rotate(180deg)');
            $('.logo-down').css('transition', 'all,0.3s');
            $('.r-h-logo').attr('id', 'r-nav-close');
        });
        // レスポンシブnav閉
        $(document).on('click', '#r-nav-close', function () {
            $('header').css('visibility', 'hidden');
            $('.r-main-nav').css('position', 'absolute');
            $('.r-main-nav').css('top', '-100vw');
            $('.r-logo-change').html('<img src="./img/r-logo.png" alt="logo">');
            $('.logo-down').css('color', '#FFFFFF');
            $('body').css('overflow', 'visible');
            $('.logo-down').css('transform', 'rotate(-180deg)');
            $('.logo-down').css('transition', 'all,0.3s');
            $('.r-h-logo').attr('id', 'r-nav-open');
        });

        // レスポンシブヘッダー（スクロールすると表示、非表示）
        $(function () {
            let header = $('header');
            $(window).scroll(function () {
                if ($(this).scrollTop() > 500 && $(this).scrollTop() < 7360) {
                    $('header').css('visibility', 'visible');
                    $('.h-start').css('display', 'block');
                } else {
                    $('header').css('visibility', 'hidden');
                    $('.h-start').css('display', 'none');
                }
            });
        });
    };
});