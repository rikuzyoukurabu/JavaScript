'use strict';

// console.log('hello');
// console.log('hello');

// console.log("it's me!");
// console.log('it\'s me!');

// console.log('hel\nlo wor\tld')

// console.log('hello'+'world')

// console.log(10 + 3);
// console.log(10 - 3);
// console.log(10 * 3);
// console.log(10 / 3);
// console.log(10 % 3);
// console.log(10 ** 3);

// console.log(2+10*3);
// console.log((2+10)*3);

// 定数

// console.log(150 * 140);
// console.log(150 * 160);

// let price = 150;
// // priceに代入されている

// console.log(price * 140);
// console.log(price * 160);

// price = 190;
// // priceに代入されている
// // 値の再代入ができるletを使用すること

// console.log(price * 140);
// console.log(price * 160);

// let price = 500;

// // price = price+100;

// price+=100;
// // 600
// price*=2;
// // 1200

// price++;
// // 1201
// price--;
// // 1200
// console.log(price);

// console.log (typeof 'hello');
// console.log (typeof 5);
// console.log (typeof true);
// console.log (typeof undefined);
// console.log (typeof null);

// console.log('5' * 3);
// console.log('5' - 3);
// console.log('5' + 3);
// console.log(parseInt('5',10) + 3);
// 10進数に変換してる

// console.log(parseInt('hello',10));

// const price = 1200;

// console.log(price>1000);//true
// console.log(price<1000);//false
// console.log(price>=1000);//true
// console.log(price<=1000);//false
// // console.log(price===1000);//false
// console.log(price!==1000);//true


// console.log(Boolean(0));
// console.log(Boolean('hello'));

 
// const score = 60;
// const name = 'yucco';

// if (score >= 50){
//   if (name === 'yucco'){
//     console.log('good job');
//   }
// }


// if (score >= 50 && name === 'yucco'){
//   console.log('good job');
// }
// &&なおかつ AND
// ｜｜もしくはOR
// ！～ではないNOT
// if (score >= 80){
//  console.log('great');
// }else{
// console.log('ok.....');
// }

// score >= 80 ? console.log('great') : console.log('ok....');

// const signal = 'pink';

// if (signal === 'red'){
//   console.log('stop');
// }else if (signal === 'yellow'){
//   console.log('caution!!')
// }else if (signal == 'blue'){
//   console.log('Go');
// }

// switch (signal){
//   case 'red':
//     console.log('stop');
//     break;
//   case 'yellow':
//     console.log('caution!!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go');
//     break;
//   default:
//     console.log("wrong signal");
//     break;
// }

// for (let i = 1; i<=10; i++){
//   // console.log('hello');
//   // console.log('hello'+i);
//   console.log(`hello ${i}`);
// }

// let hp = 100;

// while (hp>0){
//   console.log(`${hp} HP left!`);
//   hp -=15;

// let hp = -50;

// do {
//   console.log(`${hp} HP left!`);
//   hp -=15;
// }while (hp>0)

// for (let i =1;i<10;i++){
//   // // if (i===4){
//   //   if (i % 3 ===0){
//   //   continue;
//   // }
//   if (i ===4){
//     break;
//   }
//   console.log(i);
// }


// function showAd(message='Ad'){//仮引数
//   console.log('-------------')
//   console.log(`------${message}-------`)
//   console.log('-------------')
// }
// showAd('header Ad');
// console.log('yucco is great');
// console.log('yue is great');
// showAd('yusanaerukana');
// console.log('yukako is great');
// console.log('reika is great');
// showAd('Footer Ad');

// const sum=(a,b,c) =>  a+b+c;
// const yucco =  sum(1,2,3)+sum(3,4,5);
// console.log(yucco);

// const double = function(a){
// return a * 2;
// };

// console.log(double)
// const double = a=>a * 2;
// console.log(double(12));

// const x = 2;

// function f (){
//   // const x = 1;
//   console.log(x);
// }

// f();
// console.log(x);

// {
//   const x = 100;
//   console.log(x);

  
// }

  // const score1 = 80;
  // const score2 = 40;
//   // const score3 = 70;
// {
//   const otherScores = [10,20];
//   const scores = [80,40,70,99,...otherScores];

//   // console.log(scores);
//   function sum (a,b){
//     console.log(a+b);
//   }

//   sum(...otherScores);
// }

// {
  // const scores = [80,89,76,19];

  // const[a,b,c,d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const[a,b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);

  // let x =30;
  // let y =70;
  // [x,y] = [y,x];
  // console.log(x);
  // console.log(y);

  // scores.forEach((score) => {
  // scores.forEach((score,index) => {
  //   console.log(`Score ${index}: ${score}`);
  // });

// }

// {
//   const prices = [180,190,200];

//   // const updatedPrices = prices.map((price) => {
//   //   return price + 20;
//   // });

//   const updatedPrices = prices.map(price => price + 20);
//   console.log(updatedPrices);
// }

// {
//   const numbers = [1,4,7,8,10];

//   // const evenNumbers = numbers.filter(number => {
//   //   if (number % 2 === 0){
//   //     return true;
//   //   }else{
//   //     return false;
//   //   }
//   // });
//   const evenNumbers = numbers.filter(number => number % 2 === 0);
  
//   console.log(evenNumbers);
//     }

// {
//   // const point = [100,129];

//   const point = {
//      x:100,
//      y:180,
//     };

//     point.x = 120;
//     // point['x'] = 190;

//     // console.log(point.x);
//     // console.log(point['y']);

//   point.z = 90;
//   delete point.y;
//   console.log(point);
// }

// {
//   const otherProps = {
//     r:4,
//     color: 'red',
//   };

//   const point = {
//     x: 100,
//     y: 180,
//     ...otherProps,
//   };
//   // console.log(point);

//   const {x,r,...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);
// // }
// {
//   const point = {
//     x: 100, 
//     y: 180,
//   };

// //   const keys = Object.keys(point);
// //   keys.forEach(key => {
// //     console.log(`Key: ${key} Value: ${point[key]}`);
//   // });


//   const points = [
//     {x:30,y:20},
//     {x:10,y:50},
//     {x:40,y:40},
//   ];
//   console.log(points[1].y);
// }

// {
//   // let x =1;
//   // let y =x;
//   // x=5;
//   // console.log(x);
//   // console.log(y);
//   let x =[1,2];
//   let y =[...x];
//   x[0]=5;
//   console.log(x);
//   console.log(y);

// }

// {
//   const str = "hello";

//   // console.log(str.length);

//   console.log(str.substring(2,4));
//   console.log(str[1]);
// }

// {
//   const d =[2019,11,14];

//   // console.log(d.join('/'));

//   const t = '16:45:34';
// //   console.log(t.split(':'));
// const[hour,minute,second]=t.split(':');
// console.log(hour);
// console.log(minute);
// console.log(second);
// }
// {
// const scores = [10,20,30];

// let sum=0;

// scores.forEach(score => {
//   sum += score;
// });

// const avg = sum / scores.length;

// // console.log(sum);
// // console.log(avg);

// // console.log(Math.floor(avg));
// // console.log(Math.ceil(avg));
// // console.log(Math.round(avg));
// // console.log(avg.toFixed(3));

// console.log(Math.random());
// }

// {
//   console.log(Math.floor(Math.random() *6)+1);
// }

// {
//   const d = new Date(2019,10);
//   d.setHours(10,20,30)
//   console.log(d);
//   d.setDate(31);
//   d.setDate(d.getDate() + 3);
//   // console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);

// // }

// {
//   // alert('hello');
//   const answer = confirm('削除しますか？');
//   if (answer){
//     console.log('削除しました');
//   }else{
//     console.log('キャンセルしました');
//   }

// 

// {
//   let i = 0;

//   function showTime(){
//     console.log(new Date());
//     i++;
//     if (i>2){
//       clearInterval(intervalId);
//     }
//   }
//   const intervalId = setInterval(showTime,1000);
// }

// {
//   let i = 0;
//   function showTime(){
//     console.log(new Date());
//     const timeoutId = setTimeout(showTime,1000);
//     i++;
//     if (i>2){
//       clearTimeout(timeoutId);
//     }
//   }
//   showTime();
// }

// {
//   const name = 9;

//   try{
//     console.log(name.toUpperCase());
//   }catch(e){
//     console.log(e);
//   }

//   console.log('Finish');
// }



{
  class SponsoredPost{
    constructor(text,sponsor){
      this.text= text;
      this.likeCount= 0;
      this.sponsor = sponsor;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
      console.log(`...sponsored by ${this.sponsor}`);
    }

    like(){
      this.likeCount++;
      this.show();
    }

  }
  const posts = [
    new Post('javascriptの勉強中'),
    new Post('プログラミングは楽しくない全く'),
    new SponsoredPost('3分動画でマスターしよう','dotinstall'),
  ];

  posts[2].show();

}
