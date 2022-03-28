// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó


function factorial(a){
    if (a === 0){
        return 1;
    }  
    return a * factorial(a - 1);
}
console.log(factorial(5));


// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó

let str = 'hello';
let reverse_str = str.split('').reverse().join('');

console.log(reverse_str);


// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
 
let translate = 1;
let vn = 1;
let en = 2;
let fr = 3;
let kr = 4;

switch (translate) {
    case 1 : {
        console.log("Xin chao!");
        break;
    }
    case 2 : {
        console.log("Hello!");
        break;
    }
    case 3 : {
        console.log("Bonjour!");
        break;
    }
    case 4 : {
        console.log("An-nyeong-ha-se-yo!");
        break;
    }
}

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”

function subString(a){
    if(a.length < 16){
        return "";
    }
    let b = a.substring(0, 10) + "...";
    return b;
}
console.log(subString('xinchaocacbandenvoiTechmaster'));
