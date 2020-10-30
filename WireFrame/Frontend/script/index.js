$(document).ready(function() {
  console.log('ready!');

  $('#menu-toggle1').click(function(e) {
    e.preventDefault();
    $('#toggleItem1').toggleClass('toggled');
    $('#menu-toggle1').toggleClass('fa-angle-up');
    $('#menu-toggle1').toggleClass('fa-angle-down');
  });
  $('#menu-toggle2').click(function(e) {
    e.preventDefault();
    $('#toggleItem2').toggleClass('toggled');
    $('#menu-toggle2').toggleClass('fa-angle-up');
    $('#menu-toggle2').toggleClass('fa-angle-down');
  });
  $('#menu-toggle3').click(function(e) {
    e.preventDefault();
    $('#toggleItem3').toggleClass('toggled');
    $('#menu-toggle3').toggleClass('fa-angle-up');
    $('#menu-toggle3').toggleClass('fa-angle-down');
  });
  $('#menu-toggle4').click(function(e) {
    e.preventDefault();
    $('#toggleItem4').toggleClass('toggled');
    $('#menu-toggle4').toggleClass('fa-angle-up');
    $('#menu-toggle4').toggleClass('fa-angle-down');
  });
  $('#menu-toggle5').click(function(e) {
    e.preventDefault();
    $('#toggleItem5').toggleClass('toggled');
    $('#menu-toggle5').toggleClass('fa-angle-up');
    $('#menu-toggle5').toggleClass('fa-angle-down');
  });

});

function onSelectFaqTab(tab) {
  $('#general').removeClass('faq-active');
  $('#offer').removeClass('faq-active');
  $('#token').removeClass('faq-active');
  $('#client').removeClass('faq-active');
  $('#legal').removeClass('faq-active');

  $('#' + tab).addClass('faq-active');
}

function loadSetting() {
  $('#page-content-wrapper').load('/setting.html');
}
