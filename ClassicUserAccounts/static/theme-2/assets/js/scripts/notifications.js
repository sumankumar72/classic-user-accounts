$(document).ready(function(){
            
        // tooltip demo
        $('.tooltip-demo').tooltip({
            selector: "[data-toggle=tooltip]",
            container: "body"
        })

        // popover demo
        $("[data-toggle=popover]")
            .popover()
        
        function notifications(type, from, align){
            //Setup Notify Welcome
            $.notify('Welcome to Deluxe Material Admin Template!', {
                type: type,
                allow_dismiss: false,
                placement: {
                    from: from,
                    align: align
                },
                delay: 1500,
                animate: {
                    enter: "animated fadeInUp",
                    exit: "animated fadeOutDown"
                },
                offset: {
                    x: 20,
                    y: 20
                }
            });
        }
        $('#notify-demo button, #notify-position button, #notify-colors button').on('click', function(e){
            e.preventDefault();
            var type = $(this).data('type');
            var from = $(this).data('from');
            var align = $(this).data('align');
            notifications(type, from, align);
        });

        //Sweet Alert

        //A basic message
        $('#sa-basic').on('click', function(e){
        	e.preventDefault();
        	swal("Here's a message!");
        });

        //A title with a text under
        $('#sa-text-under').on('click', function(e){
        	e.preventDefault();
        	swal("Here's a message!", "It's pretty, isn't it?");
        });

        //A success message!
        $('#sa-success').on('click', function(e){
        	e.preventDefault();
        	swal("Good job!", "You clicked the button!", "success");
        });

        //With a loader with AJAX
        $('#sa-ajax').on('click', function(e){
        	e.preventDefault();
			swal({
			    title: "Ajax request example",
			    text: "Submit to run ajax request",
			    type: "info",
			    showCancelButton: true,
			    closeOnConfirm: false,
			    showLoaderOnConfirm: true,
			}, function() {
			    setTimeout(function() {
			        swal("Ajax request finished!");
			    }, 2000);
			});
        });

        //A replacement for the "prompt"
        $('#sa-prompt').on('click', function(e){
        	e.preventDefault();
			swal({
			    title: "An input!",
			    text: "Write something interesting:",
			    type: "input",
			    showCancelButton: true,
			    closeOnConfirm: false,
			    animation: "slide-from-top",
			    inputPlaceholder: "Write something"
			}, function(inputValue) {
			    if (inputValue === false) return false;
			    if (inputValue === "") {
			        swal.showInputError("You need to write something!");
			        return false
			    }
			    swal("Nice!", "You wrote: " + inputValue, "success");
			});
        });

        //A message with a custom icon
        $('#sa-icon').on('click', function(e){
        	e.preventDefault();
			swal({
			    title: "Sweet!",
			    text: "Here's a custom image.",
			    imageUrl: "../assets/img/avatar.jpg"
			});
        });

        //An HTML message
        $('#sa-html').on('click', function(e){
        	e.preventDefault();
			swal({
			    title: "HTML Title!",
			    text: "A custom <span style=\"color: #F8BB86\">html<span> message.",
			    html: true
			});
        });

        //A message with auto close timer
        $('#sa-time').on('click', function(e){
        	e.preventDefault();
			swal({
			    title: "Auto close alert!",
			    text: "I will close in 2 seconds.",
			    timer: 2000,
			    showConfirmButton: false
			});
        });

        //A warning message, with a function attached to the "Confirm".
        $('#sa-warning-confirm').on('click', function(e){
        	e.preventDefault();
			swal({
			    title: "Are you sure?",
			    text: "You will not be able to recover this imaginary file!",
			    type: "warning",
			    showCancelButton: true,
			    confirmButtonColor: "#DD6B55",
			    confirmButtonText: "Yes, delete it!",
			    closeOnConfirm: false
			}, function() {
			    swal("Deleted!", "Your imaginary file has been deleted.", "success");
			});
        });

        //A warning message, with a function attached to the "Confirm" and by passing a parameter, you can execute something else for "Cancel".
        $('#sa-warning-cancel').on('click', function(e){
        	e.preventDefault();
			swal({
			    title: "Are you sure?",
			    text: "You will not be able to recover this imaginary file!",
			    type: "warning",
			    showCancelButton: true,
			    confirmButtonColor: "#DD6B55",
			    confirmButtonText: "Yes, delete it!",
			    cancelButtonText: "No, cancel plx!",
			    closeOnConfirm: false,
			    closeOnCancel: false
			}, function(isConfirm) {
			    if (isConfirm) {
			        swal("Deleted!", "Your imaginary file has been deleted.", "success");
			    } else {
			        swal("Cancelled", "Your imaginary file is safe :)", "error");
			    }
			});
        });       

});