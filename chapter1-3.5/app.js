// let hello = "Hellow world";
// alert('Hello'+'World');

// let str1 = 'Hello';
// let str2 = 'World!!!!!';
// alert(str1+str2);

// let orange = 150;
// let apple = 120;

// if(orange<apple){
//   alert('みかんの値段がりんごより安い');
// }else if(orange==apple){
//   alert('みかんとりんごが同じ値段');
// }else{
//   alert('みかんの値段がリンゴより高い')
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// let i;
// let num = 0;

// for(i = 1; i<11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は'+num+'です');

// function addString(strA){
//   let addStr = "hello" + strA;
//   return addStr;
// }

// let alertString;
// // 関数宣言
// alertString = addString("WebCamp");
// // alertStringに代入している

// alert(alertString);

// function addString(strA){
//   let addStr = "hello" + strA;
//   return addStr;
// }

// let promptStr = prompt('今日はたぬきがやってくる');

// alert(promptStr);

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

// alert('あなたの選んだ手は'+ user_hand + 'です');

// function getJshand(){
//   let js_hand_num = Math.floor(Math.random() * 3);

//   if(js_hand_num == 0){
//     js_hand = "グー";
//   }else if(js_hand_num == 1){
//     js_hand = "チョキ";
//   }else if(js_hand_num == 2){
//     js_hand = "パー";
//   }

//   return js_hand;
// }

// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');{
  }
}


// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}