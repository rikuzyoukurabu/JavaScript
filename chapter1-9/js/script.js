$(function(){
  $('#back a').on('click',function(event){
    // back内のAタグがクリックされた時
    $('body,html').animate({
      // アニメーション効果を追加する
      scrollTop:0
    },800);
    event.preventDefault();
  });
});