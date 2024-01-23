// 「関数（function）」は、繰り返し使われる一連の処理を1つにまとめたものです。

// 入力する値を「引数（ひきすう）」、出力される値を「戻り値（もどりち）」といいます。
// function 関数名(引数){
//   処理
//   return 戻り値;
// }

// メイン部分
let alertString;

// 作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");

//変数の中身をアラートで表示する
alert(alertString);

function addString(strA) {
  let addStr = "Hello" + strA;
  return addStr;
}

