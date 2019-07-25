'use strict'
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 60) {
      $(".topbar").addClass("scrolled");
//	  $(".navbarItems").addClass("scrolled-text");
//	  $(".navbarItems").removeClass("default-text");
    } else {
      $(".topbar").removeClass("scrolled");
//	  $(".navbarItems").addClass("default-text");
//	  $(".navbarItems").removeClass("scrolled-text");
    }
  });
});
var map;
function initMap(){
	map = new google.maps.Map($("#map"),{
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}


$('#clickToScroll').on('click', function(e) {
  e.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($("#contentToScrollTo")).offset().top,
    },
    500,
    'linear'
  );
});
function submitform(){
    $("#commentform").submit();
}

$(".editcommentbutton").on("click", function(){
	$(this).closest(".commentArea").find(".editcomment").toggleClass("d-none");
});
$(".commentreplybutton").on("click", function(){
	$(".reply").toggleClass("d-none");
});
$(document).ready(function(){
    $('.submitbutton').attr('disabled',true);
    $('textarea').keyup(function(){
        if($(this).val().length !==0){
			$(".submitbutton").addClass("btn-primary");
			$(".submitbutton").removeClass("btn-secondary");			
            $('.submitbutton').attr('disabled', false);
		}
        else{
			$(".submitbutton").removeClass("btn-primary");
			$(".submitbutton").addClass("btn-secondary");
			$('.submitbutton').attr('disabled',true);
				
    }});
});
$(".editcomment").on("click", function(){
	$(this).closest(".commentareaauth").find(".editcommentform").toggleClass("d-none");
});
function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 50 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);

$("#hardwareradio").on("click", function(){
		$("#hardware").removeClass("d-none");
		$("#odoogears").addClass("d-none");
		$("#securitysolutions").addClass("d-none");
		$("#training").addClass("d-none");
		$("select").removeClass("d-none");
});
$("#odoogearsradio").on("click", function(){
		$("#hardware").addClass("d-none");
		$("#odoogears").removeClass("d-none");
		$("#securitysolutions").addClass("d-none");
		$("#training").addClass("d-none");
		$("select").removeClass("d-none");
});
$("#securitysolutionsradio").on("click", function(){
		$("#hardware").addClass("d-none");
		$("#odoogears").addClass("d-none");
		$("#securitysolutions").removeClass("d-none");
		$("#training").addClass("d-none");
		$("select").removeClass("d-none");
});
$("#trainingradio").on("click", function(){
		$("#hardware").addClass("d-none");
		$("#odoogears").addClass("d-none");
		$("#securitysolutions").addClass("d-none");
		$("#training").removeClass("d-none");
		$("select").removeClass("d-none");
});
$("#othersradio").on("click", function(){
		$("#hardware").addClass("d-none");
		$("#odoogears").addClass("d-none");
		$("#securitysolutions").addClass("d-none");
		$("#training").addClass("d-none");
		$("select").addClass("d-none");
});

function incrementvalue()
{
    var value = parseInt(document.getElementById('cartno').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
	if(value <1){
		value = 1;
	}
    document.getElementById('cartno').value = value;
	$("#cartqty").attr("value", value);
}
function decrementvalue(){
    var value = parseInt(document.getElementById('cartno').value, 10);
    value = isNaN(value) ? 1 : value;
    value--;
	if(value <1){
		value = 1;
	}
    document.getElementById('cartno').value = value;
	$("#cartqty").attr("value", value);
}
$(document).ready(function() {
    $("#cartno").attr({      
       "min" : 1        
    });
});
$("#cartqty").keypress(function(e){
	return false;
})
$(function(){
  $('#cartno').keypress(function(e){
    if(e.which === 48||e.which === 49||e.which ===50||e.which===57||e.which===56||e.which===55||e.which===54||e.which===53||e.which===52||e.which===51){
    }else if(e.which===69||e.which===189||e.which===187){
		return false;
			 }
	 else {
      return false;
    }
  });
});
$(document).ready(function(){
	$("#addToCart").hide();
	$("#step2").hide()
	$("#step3").hide()
	$("#step4").hide()
	$("#newaddress").hide()
});

var disabled = document.createAttribute("disabled");
function showaddToCart(){
	$("#addToCart").show();
	$("#topbar").hide();
	$("#footer").hide();
	$("li").hide();
	var value = parseInt(document.getElementById('cartno').value, 10)
	$("#cartqty").attr("value", value);
}
function hideaddToCart(){
	$("#addToCart").hide()
	$("#topbar").show()
	$("#footer").show()
	$("li").show()
}
$("#addToCart").on("click", function(e){
	if(e.target !== this)
		return;
	
	hideaddToCart();
});
function step2(){
	$("#step1").hide()
	$("#step3").hide()
	$("#step4").hide()
	$("#step2").show()
}
$("#diffaddress").on("click", function(){
	$("#newaddress").show()
})
$("#sameaddress").on("click", function(){
	$("#newaddress").hide()
})
function step1(){
	$("#step1").show()
	$("#step2").hide()
	$("#step3").hide()
	$("#step4").hide()
}
function step3(){
	$("#step1").hide()
	$("#step2").hide()
	$("#step3").show()
	$("#step4").hide()
	let billingName = document.getElementById("billingnameinput").value
	let billingEmail = document.getElementById("billingemailinput").value
	let billingPhone = document.getElementById("billingphoneinput").value
	let billingStreet = document.getElementById("billingstreetinput").value
	let billingCity = document.getElementById("billingcityinput").value
	let billingCountry = document.getElementById("billingcountryinput").value
	document.getElementById("billingname").innerHtml= billingName
	document.getElementById("billingemail").innerHtml= billingEmail
	document.getElementById("billingphone").innerHtml= billingPhone
	document.getElementById("billingstreet").innerHtml= billingStreet
	document.getElementById("billingcity").innerHtml= billingCity
	document.getElementById("billingcountry").innerHtml= billingCountry
}
function step4(){
	$("#step1").hide()
	$("#step2").hide()
	$("#step3").hide()
	$("#step4").show()

}