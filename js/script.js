var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementById("close1");
btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementById("close2");
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementById("close3");
btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 || event.target == modal3) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}
// back to top button//
/*var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 10) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});*/
