$(function() {
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplayspeed: 500,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  $('.opacity').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5
    }, 500);
  });
  $('.opacity').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0
    }, 500);
  });

  $(window).scroll(function() {
    if($(this).scrollTop() >= 200) {
      $('.return').fadeIn(500);
    } else if($(this).scrollTop() < 200) {
      $('.return').fadeOut(500);
    }
  });

  $('a[href^="#"]').on('click', function() {
    let href = $(this).attr('href'); 
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    console.log(target);
    console.log(position);
    $('html, body').animate({scrollTop: position}, 500, 'swing');
  });

  $(window).scroll(function() {
    $('.fade').each(function() {
      let position = $(this).offset().top;
      let wHeight = $(window).height();
      let wScroll = $(window).scrollTop();
      if(wScroll >= position - wHeight + 150) {
        $(this).addClass('fadeIn');
      }
    });
  });

  $('#origin1').click(function() {
    let picture = $(this).attr('src');
    $('.modal-picture').attr('src', picture);
    $('#modal').fadeIn(500);
  });
  $('#origin2').click(function() {
    let picture = $(this).attr('src');
    $('.modal-picture').attr('src', picture);
    $('#modal').fadeIn(500);
  });
  $('#origin3').click(function() {
    let picture = $(this).attr('src');
    $('.modal-picture').attr('src', picture);
    $('#modal').fadeIn(500);
  });
  $('.batsu').click(function() {  
    $('#modal').fadeOut(500);
  });
});