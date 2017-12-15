
//---------------------------------------------------------------------------------
//                        Sticky Navigation
//---------------------------------------------------------------------------------
$(document).ready(function(){


    $('.js--expertise').waypoint(function(direction){

        if(direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }

    },
                                 {
        offset: '60px;'
    });


    $('.js--scroll-to-contact').click(function(){

        $('html, body').animate({scrollTop: $('.js--contact').offset().top}, 1500);

    });


    $('.js--scroll-to-expertise').click(function(){

        $('html, body').animate({scrollTop: $('.js--expertise').offset().top}, 1000);

    });


    $('.js--scroll-to-header').click(function(){

        $('html, body').animate({scrollTop: $('header').offset().top}, 1000);

    });



    $('.js--scroll-to-skills').click(function(){

        $('html, body').animate({scrollTop: $('.js--skills').offset().top}, 1000);

    });


    $('.js--scroll-to-projects').click(function(){

        $('html, body').animate({scrollTop: $('.js--projects').offset().top}, 1000);

    });


});


$(document).scroll(function() {
    var cutoff = $(window).scrollTop();

    $('.sticky .main-nav li').each(function(){
        if($(this).offset().top + $(this).height() > cutoff){
            $('.sticky .main-nav li').removeClass('current');
            $(this).addClass('current');
            return false; // stops the iteration after the first one on screen
        }
    });
});



//---------------------------------------------------------------------------------
//                        Progress Bar
//---------------------------------------------------------------------------------
/*
$(window).scroll(function() {
    var hT = $('.skills').offset().top,
        hH = $('.skills').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
        $('#html').LineProgressbar({
            percentage:90,
            radius: '3px',
            height: '20px',
            fillBackgroundColor: '#FF0044',
            ShowProgressCount: false,
            duration: 1100
        });

        $('#css').LineProgressbar({
            percentage:80,
            radius: '3px',
            height: '20px',
            fillBackgroundColor: '#FF0044',
            ShowProgressCount: false,
            duration: 1150
        });
        $('#jscript').LineProgressbar({
            percentage:70,
            radius: '3px',
            height: '20px',
            fillBackgroundColor: '#FF0044',
            ShowProgressCount: false,
            duration: 1200
        });
        $('#jq').LineProgressbar({
            percentage:75,
            radius: '3px',
            height: '20px',
            fillBackgroundColor: '#FF0044',
            ShowProgressCount: false,
            duration: 1250
        });
        $('#photoshop').LineProgressbar({
            percentage:80,
            radius: '3px',
            height: '20px',
            fillBackgroundColor: '#FF0044',
            ShowProgressCount: false,
            duration: 1300

        });


    }
});

*/


$(document).scroll(function() {
    var cutoff = $(window).scrollTop();

    $('section').each(function(){
        if($(this).offset().top + $(this).height() > cutoff){

            $('#html').LineProgressbar({
                percentage:90,
                radius: '3px',
                height: '20px',
                fillBackgroundColor: '#FF0044',
                ShowProgressCount: false,
                duration: 1100
            });

            $('#css').LineProgressbar({
                percentage:80,
                radius: '3px',
                height: '20px',
                fillBackgroundColor: '#FF0044',
                ShowProgressCount: false,
                duration: 1150
            });
            $('#jscript').LineProgressbar({
                percentage:70,
                radius: '3px',
                height: '20px',
                fillBackgroundColor: '#FF0044',
                ShowProgressCount: false,
                duration: 1200
            });
            $('#jq').LineProgressbar({
                percentage:75,
                radius: '3px',
                height: '20px',
                fillBackgroundColor: '#FF0044',
                ShowProgressCount: false,
                duration: 1250
            });
            $('#photoshop').LineProgressbar({
                percentage:80,
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
//                        Active state in sticky nav
//--------------------------------------------------------------------------------
var lastId,
    topMenu = $(".main-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

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
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    }
});




/*
// To prevent  "right-click"

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




/*

//---------------------------------------------------------------------------------
//                        Typing effect
//---------------------------------------------------------------------------------


$(function(){
    $(".write").typed({
        strings: ["user interfaces.","landing pages.", "web design.","web applications."],
        typeSpeed: 50,
        loop: true,
    });
});





 strings: ["^1000 User interfaces","^1000 landing pages", "^1000 Web design","^1000 Web applications"],

$(function(){
    $(".typed").typed({
        strings: ["Developers.", "Designers.", "People."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
});
*/
