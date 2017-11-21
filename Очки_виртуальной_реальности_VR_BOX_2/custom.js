$(document).ready(function(){


/******** TIMER ********/
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() +1;

var number = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var startTime = Date.parse(year+"/"+month+"/"+number);
var currentTime = Date.now();
var endTime = startTime + 79200000; // прибавили 22 часа
var oldPrice = "";
var oldTimer = "";
var timeLimit = "";

var price = 0; var old = 0; var sum = 0; var benefit = 0; var quantity = 0;
if(month<10){
month = "0"+month;
parseInt(month);
}
$("#bottom-header .smalltext").html("[ Акция действительна до "+number+"."+month+"."+year+"г. ]");
$("#dateFinish").html("до <b> "+number+"."+month+"."+year+"г.</b>");

$(".timer").attr("data-date", year+"-"+month+"-"+number+" 22:00:00"); // формат YYYY-MM-DD hh:mm:ss



$(".timer").TimeCircles({
    "animation": "smooth",
    "bg_width": 0.6,
    "fg_width": 0.05,
	"count_past_zero": false,
	"total_duration": "Auto",
    "circle_bg_color": "#EEEEEE",
    "time": {
        "Days": {
            "text": "Дни",
            "color": "#ff7f4e",
            "show": true
        },
        "Hours": {
            "text": "Часы",
            "color": "#ff7f4e",
            "show": true
        },
        "Minutes": {
            "text": "Минуты",
            "color": "#ff7f4e",
            "show": true
        },
        "Seconds": {
            "text": "Секунды",
            "color": "#ff7f4e",
            "show": true
        }
    }
}).addListener(function(){
	timeLimit = $(".timer").TimeCircles().getTime(); 
		if(timeLimit < 1){
			oldPrice = $(".action1 .old-cost span").text();
			$(".action1 .cost span").text(oldPrice);
			$(".action2 .cost span").text(oldPrice);
			$(".action .discount").text("0%");
			$(".choice:checked").each(function(){
			sum += parseInt(oldPrice);
		});
		$("#itog span").text(sum);
		$("#benefit span").text(benefit);
		sum = 0;
		}
});
if( currentTime < endTime ){
}else{
	oldPrice = $(".action1 .old-cost span").text();
		$(".action1 .cost span").text(oldPrice);
		$(".action2 .cost span").text(oldPrice);
		$(".action .discount").text("0%");
		$(".choice:checked").each(function(){
		sum += parseInt(oldPrice);
	});
	$("#itog span").text(sum);
	$("#benefit span").text(benefit);
	sum = 0;
};

$(window).resize(function(){
  $(".timer").TimeCircles().rebuild(); 
});

 /**********/

/**** Калькулятор стоимости ****/

if($(".choice").prop("checked")){
	price = $(".choice:checked").closest(".action").find(".cost span").text();
	$("#itog span").text(price);
	old = $(".choice:checked").closest(".action").find(".old-cost span").text();
	benefit = parseInt(old) - parseInt(price);
	$("#benefit span").text(benefit);
	quantity = 1;
	$("#quantity span").text(quantity);
	price = 0; old = 0; benefit = 0; quantity = 0;
}

	$(".choice").change(function(){
	
		if(!$(this).prop("checked") && $(this).hasClass("choice1")){
		$("input.choice2").removeAttr("checked").attr('disabled', "disabled");
		}else if($(this).prop("checked") && $(this).hasClass("choice1")){
		$("input.choice2").attr("disabled", false);
		}
	
		$(".choice:checked").each(function(){
			price = $(this).closest(".action").find(".cost span").text();
			sum += parseInt(price);
		
			old = $(this).closest(".action").find(".old-cost span").text();
			benefit += parseInt(old) - parseInt(price);
			quantity += 1;
		});
		$("#itog span").text(sum);
		$("#benefit span").text(benefit);
		$("#quantity span").text(quantity);
		price = 0; sum = 0; old = 0; benefit = 0; quantity = 0;
			
	});
	
/*****************/

/*scrolling*/
	$('.btn-scrolling').click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-50}, 1500);
   });
   



/*Автоплей Vimeo*/
var iframe = document.getElementById('overview');

// $f == Froogaloop
var player = $f(iframe);

var play = document.getElementById("play-button");
play.addEventListener("click", function() {
  player.api("play");
});

var pause = document.getElementById("bg-overlay-overview");
pause.addEventListener("click", function() {
  player.api("pause");
});
/***************/

/*Pop Up*/
var body = $('body');
$('.md-trigger').modalEffects({
afterOpen: function(button, modal) {
	body.css('overflow', 'hidden');
           },
afterClose: function(button, modal) {
body.css('overflow', 'auto');
  $('.md-trigger').removeClass('highlighted');
  $(button).addClass('highlighted');
  $('#afterclose')
	.removeClass('invisible')
	.html('Just closed modal: "'+ $(button).html() + '"');
  setTimeout(function(){
	$(button).removeClass('highlighted');
	$('#afterclose').addClass('invisible'); 
  }, 3000);
}
});

$("a.md-trigger").click(function(e){
	e.preventDefault();
	
});
/**************/

	/*Scroll*/
$(function(){ // плавный скролл
                $("a[href^='#']").click(function(){
                        var _href = $(this).attr("href");
                        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                        return false;
                });
        });

/*************/


	
});




