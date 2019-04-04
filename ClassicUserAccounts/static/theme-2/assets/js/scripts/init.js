 $(document).ready(function() {

    //Setup Metis Menu
    $('#side-menu').metisMenu();

    //Setup Slim Scroll for Left Sidebar
    $('.side-nav-white').slimScroll({
        height: '250px'
    });

    //Setup Notify Welcome
    $.notify('Welcome to Deluxe Material Admin Template!', {
        type: 'black-shadow',
        allow_dismiss: false,
        placement: {
            from: "bottom",
            align: "right"
        },
        delay: 1500,
        animate: {
            enter: "animated fadeInUp",
            exit: "animated fadeOutDown"
        },
        offset: {
            x: 30,
            y: 30
        }
    });

    //Click Animation
    $("body").on("click", ".animation", function (e) {
        
        // Get animation class from "data" attribute
        var animation = $(this).data("animation");

        // Apply animation once per click
        $(this).parents(".panel").addClass("animated " + animation).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass("animated " + animation);
        });
        e.preventDefault();
    });

    //Counter number Dashboard
    $('.counter').counterUp({
            delay: 10,
            time: 1000
    });

    //Setup Clear Storage on Navigation
    $('.clear-storage').on('click', function(e){
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "All your saved local storage values will be removed!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, clear it!",
            closeOnConfirm: false
        }, function() {
            swal("Deleted!", "Your local storage has been cleared.", "success");
        });
    });

    //Setup Show/Hide Sidebar on Navigation
    $('.toggle-sidebar').on('click', function(e){
        e.preventDefault();
        $('.navbar-header').toggleClass('hide-header');
        $('.side-nav-white').toggleClass('hide-sidebar');
        $('#page-wrapper').toggleClass('full-wrapper');
        $('.toggle-sidebar i').toggleClass('zmdi-arrow-right');       
    });

    //Setup Effect while click
    $('.effect, .btn, .navbar-left > li > a, #side-menu > li > a, .profile > li > a, .nav-level > li > a, .nav-second-level > li > a, li > .dropdown-toggle, .dropdown-messages > li > a, .dropdown-tasks > li > a, .dropdown-alerts > li > a').ripple({
        dragging: false,
        adaptPos: false,
        scaleMode: false
    });

    //Full screen
    var FullScreen = function() {
        this.$body = $("body"),
        this.$fullscreenBtn = $(".fullscreen")
    };

    //turn on full screen
    FullScreen.prototype.launchFullscreen  = function(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    },
    FullScreen.prototype.exitFullscreen = function() {
      if(document.exitFullscreen) {
        document.exitFullscreen();
      } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },

    //toggle screen
    FullScreen.prototype.toggle_fullscreen  = function() {
      var $this = this;
      var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
      if(fullscreenEnabled) {
        if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
          $this.launchFullscreen(document.documentElement);
        } else{
          $this.exitFullscreen();
        }
      }
    },

    //init 
    FullScreen.prototype.init = function() {
      var $this  = this;
      //bind
      $this.$fullscreenBtn.on('click', function() {
        $this.toggle_fullscreen();
      });
    },
     //init FullScreen
    $.FullScreen = new FullScreen, $.FullScreen.Constructor = FullScreen

    //initializing main application module
    var App = function() {
        this.pageScrollElement = "html, body", 
        this.$body = $("body")
    };
    
    //initilizing 
    App.prototype.init = function() {
        var $this = this;
        $.FullScreen.init();
    },
    $.App = new App, $.App.Constructor = App
    $.App.init();

    // Navbar custom
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
     return this.href == url;
    }).addClass('active').parent();

    while(true){
        if (element.is('li')){
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

