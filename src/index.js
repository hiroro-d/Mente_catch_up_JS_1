// var a = "あ";
// console.log(a);

// a = "上書き";
// console.log(a);

// var a = "再宣言";
// console.log(a);

// let a = "あ";
// console.log(a);

// a = "上書き";
// console.log(a);

// let a = "再宣言"
// console.log(a)

// const a = "あ";
// console.log(a);

// a = "上書き";
// console.log(a);

// const a = "再宣言";
// console.log(a);

// const arr = ["a"];
// console.log(arr);

// arr[0] = "i";
// console.log(arr);

// arr.unshift("hoge");
// console.log(arr);
// const obj = {
//   name: "aa",
//   age: 10,
// };
// console.log(obj);
// コンソールログの内容がaaとiiが混ざるのは、処理の遅延
// つまり表示しようとしている間に下のコードが走って中身が変わるパターン

// obj.name = "ii";
// obj.role = "admin";
// console.log(obj);
// オブジェクトや配列は中身の上書きや追加が可能。

// テンプレート文字列

const name = "a";
const age = "1";

const msg = "俺" + name + age + "才";
console.log(msg);

const msg2 = `俺${name}で、${age}さい`;
console.log(msg2);
