//---------------------------------------------------------------------------------
//                        Sticky Navigation
//---------------------------------------------------------------------------------
$(document).ready(function () {


    $('.js--expertise').waypoint(function (direction) {

        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });



    //---------------------------------------------------------------------------------
    //                        scroll to section
    //---------------------------------------------------------------------------------

    $('.js--scroll-to-contact').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--contact').offset().top - 35
        }, 1500);

    });


    $('.js--scroll-to-expertise').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--expertise').offset().top - 45
        }, 1000);

    });


    $('.js--scroll-to-header').click(function () {

        $('html, body').animate({
            scrollTop: $('header').offset().top
        }, 1000);

    });



    $('.js--scroll-to-skills').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--skills').offset().top
        }, 1000);

    });


    $('.js--scroll-to-projects').click(function () {

        $('html, body').animate({
            scrollTop: $('.js--projects').offset().top
        }, 1000);

    });


});

/*
$(document).scroll(function () {
    var cutoff = $(window).scrollTop();

    $('.sticky .main-nav li').each(function () {
        if ($(this).offset().top + $(this).height() > cutoff) {
            $('.sticky .main-nav li').removeClass('current');
            $(this).addClass('current');
            return false; // stops the iteration after the first one on screen
        }
    });
});
*/

//---------------------------------------------------------------------------------
//                        Progress Bar
//---------------------------------------------------------------------------------

$(document).scroll(function () {
    var cutoff = $(window).scrollTop();

    $('section').each(function () {
        if ($(this).offset().top + $(this).height() > cutoff) {

            $('#html').LineProgressbar({
                percentage: 90,
                radius: '3px',
                height: '20px',
                fillBackgroundColor: '#FF0044',
                ShowProgressCount: false,
                duration: 1100
            });

            $('#css').LineProgressbar({
                percentage: 80,
                radius: '3px',
                height: '20px',
                fillBackgroundColor: '#FF0044',
                ShowProgressCount: false,
                duration: 1150
            });
            $('#jscript').LineProgressbar({
                percentage: 80,
                radius: '3px',
                height: '20px',
                fillBackgroundColor: '#FF0044',
                ShowProgressCount: false,
                duration: 1200
            });
            $('#jq').LineProgressbar({
                percentage: 72,
                radius: '3px',
                height: '20px',
                fillBackgroundColor: '#FF0044',
                ShowProgressCount: false,
                duration: 1250
            });
            $('#photoshop').LineProgressbar({
                percentage: 80,
                radius: '3px',
                height: '20px',
                fillBackgroundColor: '#FF0044',
                ShowProgressCount: false,
                duration: 1300

            });

            return false; // stops the iteration after the first one on screen
        }
    });
});


//---------------------------------------------------------------------------------
//                     Show Active state in sticky nav
//--------------------------------------------------------------------------------
var lastId,
    topMenu = $(".main-nav"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });
//For smooth scroll that we alresdy using above by .animate
// Bind click handler to menu items
// so we can get a fancy scroll animation
/*   menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });
*/
// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});

//---------------------------------------------------------------------------------
//                      To prevent  "right-click"
//--------------------------------------------------------------------------------
/*
$('html').bind('contextmenu', function(e) {
  //  window.alert('All Rights Reserved \u00A9');

    return false;
});


// To prevent saving web site directly using "ctrl-s"
$(document).bind('keydown keypress', 'ctrl+s', function () {
    $('#save').click();
    return false;
});


*/
