$('document').ready(function(){
	var t1 = $('#t1').val();
	var t2 = $('#t2').val();
	var t3 = $('#t3').val();
    $(".show-text").typed({
        strings: ["<span class=\"h1\">" + t1 + "</span>  <small>" + t2 + "</small><br><br><span class=\"lead\">" + t3 +"</span>"],
        backDelay: 5000,
        loop: true,
        typeSpeed: 50,
        contentType: 'html'
    });
});