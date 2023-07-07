$(function(){
  let $all = $('.all-wrap'),
      $menuBtn = $all.find('#menu-btn'),
      $header = $all.find('#header'),
      $gnb = $header.find('.gnb'),
      $main = $all.find('#main'),
      $section = $main.find('section'),
      $article = $main.find('article');
      // 버튼 클릭하면
  // 헤더 보임, 메인 보임 (CSS 클래스 추가)
  // 버튼 숨김 hide(), fadeOut(), slideUp()
  $menuBtn.click(function(){
    $header.addClass('on');
    $main.addClass('on');
    $menuBtn.hide('slow');
  });
  
  //메인 클릭 ==> 헤더숨김, 메인 원상복구
  // "on"클래스 삭제, 버튼 보임
  $main.click(function(){
    $main.removeClass();
    $header.removeClass();
    $menuBtn.show('slow');
  });
  
  // gnb안에 있는 'a'를 클릭하면
  
  $gnb.on('click', 'a', function(){
  // 모든 'a' 클래스 삭제  
    $gnb.find('a').removeClass('on');
  // 클릭한 'a'에 클래스 추가  
    $(this).addClass('on');
    // 먼저 해야될것 => 모든 섹션 숨기기 => 'a'의 순번과 같은 섹션보임
    $section.removeClass('on');
    let i = $(this).index();
    $section.eq(i).addClass('on');
    $main.removeClass();
    $header.removeClass();
    $menuBtn.show('slow');
  });
  // 아티클에 마우스 올렸을때 ==> 자식요소인 a 보임
  $article.on('mouseenter', function(){
    $(this).stop().find('h3').addClass('on').hide().fadeIn(500);
  })
  // 아티클에서 마우스 떨어졌을때 ==> 자식요소인 a 사라짐
  .on('mouseleave', function() {
  $(this).find('h3').removeClass('on').fadeOut(500);
});
  
});
