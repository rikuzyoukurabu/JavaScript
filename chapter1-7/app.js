// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width' : '200px',
//       'height' : '100px'
//   //  }).slideUp();
//  });
// });

// 引数の中に引数を入れることによってその後のスライドダウンした後の動きを付けることができる。

// $(function (){
//   $('.box1').slideDown(function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });

// $(function(){
//   $('.box').on('click',function(){
//     $(this).slideUp();
//   // });
//   // $('.bg2').on('click',function(){
//   //   $('.bg2').slideUp();
//   // });
//   // $('.bg3').on('click',function(){
//   //   $('.bg3').slideUp();
//   // });
//   // $('.bg4').on('click',function(){
//   //   $('.bg4').slideUp();
//   });
// });

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});