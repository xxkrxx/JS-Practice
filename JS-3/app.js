// 変数宣言の種類
// 【var】

// var string = "WEBCAMP"

// 【let】

// let string = "WEBCAMP"

// 【const】

// const string = "WEBCAMP"


// デベロッパツール（検証ツール）に反映
// var nickname = "taro"
// console.log (nickname)
// var nickname = "ichiro"
// console.log(nickname)


// デベロッパツール（検証ツール）エラーが反映
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)


// varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)


// constによる再代入 constでは再宣言と再代入ができません。
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)


// varのスコープ
// yはfooという関数の中でvarによって宣言された、関数スコープになります。
// この場合、関数の外からyを参照しようとしても有効範囲外となりエラーとなります。

// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)


// letのスコープ
// yという変数は3~5行目の{ }のブロック内でletによって宣言されたものです。
// ブロック外から参照したためエラーになりました。
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()


// constのスコープ
// 最初のconsole.logで、「undefined」が出力されています。
// しかし、実際には「undefined」が出力されています。
// この現象の裏には変数の巻き上げが隠れています。

var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()