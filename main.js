// 課題1: 引数に渡した数値(整数)に応じて、奇数なら「true」、偶数なら「false」を返す「isOddNumber関数」を作る
//   - 関数宣言の形式で作ること
//   - 「isOddNumber関数」を定義した後に、console.logを使って「isOddNumber関数」の引数に次の数を入力して、期待している結果が返ってくること確認する
//     - 入力: 9, 期待する結果: true
//     - 入力: 14, 期待する結果: false

// ここにisOddNumber関数を作る
function isOddNumber(i) {
    return i % 2 === 1;
}

// ここにconsole.logを使って「9」「14」を引数に渡したときの結果値を出力する

const result1 = isOddNumber(9);
const result2 = isOddNumber(14);

console.log('9を入力したら返るべき：' + result1);
console.log('14を入力したら返るべき：' + result2);


// 課題2: 引数に渡した「1」以上の整数をつかって階乗の結果を返す「factorial関数」を作る (階乗とは: https://ja.wikipedia.org/wiki/%E9%9A%8E%E4%B9%97)
//   - 関数式の形式で作ること
//   - 「factorial関数」を定義した後に、console.logを使って「factorial関数」の引数に次の数を入力して、期待している結果が返ってくること確認する
//     - 入力: 4, 期待する結果: 24 (= 4 * 3 * 2 * 1)
//     - 入力: 5, 期待する結果: 120 (= 5 * 4 * 3 * 2 * 1)
//   - 様々な実装方法があるため次の3つの内、好きなやり方で実装して構わない
//     1. forループを使ったやり方
//     2. whileループを使ったやり方
//     3. 【チャレンジ問題】再帰関数を使ったやり方(参考記事: https://qiita.com/chuck0523/items/2c40a5da90a1d73ab956)

// ここにfactorial関数を作る

const factorial = function (a) {    // a = 入力数
    let b = 1;                      // b = 計算のベースになる文字（値に影響しない1を代入する）
    for (let i = 1; i <= a; i++) {  // loop処理　初期値=1 , 条件　初期値が入力数と同じになるまで, 初期値に１ずつ加算
        b = b * i; // ベースの数に初期値をかける
        /** 
         * a = 4のとき 
         * 1 b = 1 → i = 1 → i:1 <= 4 (true) → b = b:1 * i:1 = 1 → i++:2になる
         * 2 b = 1 → i = 2 → i:2 <= 4 (true) → b = b:1 * i:2 = 2 → i++:3になる
         * 3 b = 2 → i = 3 → i:3 <= 4 (true) → b = b:2 * i:3 = 6 → i++:4になる
         * 4 b = 6 → i = 4 → i:4 <= 4 (true) → b = b:6 * i:4 = 24 → i++:5になる
         * 5 b = 24 → i = 5 → i:5 <= 4 (false) → b = b:24 * i:5 = 120 // 
         * */
    }
    return b; //loop後の値が返ってくる
}

// ここにconsole.logを使って「4」「5」を引数に渡したときの結果値を出力する

console.log('4を入力したら24が返るべき:' + factorial(4));

console.log('5を入力したら120が返るべき:' + factorial(5));


// 課題3: 引数に渡した、全ての小文字の文字列の先頭1文字を大文字に変換した文字列を返す「convertFirstCharacterToUpperCase関数」を作る
//   - アロー関数の形式で作ること
//   - 「convertFirstCharacterToUpperCase関数」を定義した後に、console.logを使って「convertFirstCharacterToUpperCase関数」の引数に次の文字列を入力して、期待している結果が返ってくること確認する
//     - 入力: 'hello', 期待する結果: 'Hello'
//     - 入力: 'world', 期待する結果: 'World'
//   - 「先頭1文字を大文字にするやり方」の参考記事: https://qiita.com/ichironagata/items/091f8cd629b82b0dcbf8

// ここにconvertFirstCharacterToUpperCase関数を作る
const convertFirstCharacterToUpperCase = (text) => {
    let result = text.charAt(0).toUpperCase() + text.slice(1);
    return result;
}

// ここにconsole.logを使って「'hello'」「'world'」を引数に渡したときの結果値を出力する

console.log('「"hello"」を入力したら「"Hello"」が返るべき:' + convertFirstCharacterToUpperCase('hello'));
console.log('「"world"」を入力したら「"World"」が返るべき:' + convertFirstCharacterToUpperCase('world'));