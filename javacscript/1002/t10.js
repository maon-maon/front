// t10.js
'use strict';

let arr1 = [
  '문자자료',
  5,
  true,
  [2,4,6,8], //인덱스가 나열됨
  {
    tel : '010-1234-5678',
    address : '청주',
    age : 99
  } , //키와 밸류가 나옴. 키 알파벳 오름차순
       //[]배열객체 안에 {}일반객체를 넣을 수 있음
       //자바스크립트는 JSON방식으로 씀 :  key,value
  function() {
    let atom = 5;
    console.log(atom+" 안녕하세요");
  }
];
console.log("arr1 : ",arr1);
console.log("1. : ",arr1[1]);
console.log("2-1. : ",arr1[3]);
console.log("2-2. : ",arr1[3][1]);
console.log("3. : ",arr1[4]);
console.log("4. : ",arr1[4].tel);
console.log("5. : ",arr1[5]);
arr1[5]();
console.log('====================');

arr1.push(50);
console.log("arr1 : ",arr1);

let str1 =arr1 + ''; // 배열arr1을 문자열로 str1에 누적함 
console.log("1.str1 : ",str1);

let str2 =arr1.join('-'); // 배열을 문자로 누적할 때 -를 삽입
console.log("2.str2 : ",str2);
console.log('~~~~~~~~~~~~~~~~~~');

arr1.forEach(function(data, idx) {
  console.log(idx," : ",data);
})

arr1.forEach((data, idx) => console.log(idx," : ",data));
console.log('0000000000000000000');

arr1.map((data, idx) => console.log(idx," : ",data));
console.log('99999999999999999999999999999999');

arr1.filter((data, idx) => console.log(idx," : ",data)); //필터로 받았으나 거르지 않음
console.log('88888888888888888888888888888888');

arr1.filter((data, idx) => idx % 2 == 0) // 필터 조건으로 걸러냄
arr1.map((data, idx) => console.log(idx," : ",data)); 
// console.clear();

let arr2 = [10, 8, 20, 15, 11, 17];
console.log("arr2:" ,arr2); 

//오름차순 정렬 : sort() - 문자값으로 정렬
let res = arr2.sort(); //[10, 11, 15, 17, 20, 8]
console.log("res : ",res);
console.log('777777777777777777777777777777777');


res = arr2.sort((a,b) => a-b); //수식으로 만들어서 숫자처럼 쓸 수 있음 //자바랑 똑같음 
console.log('res : ',res);  // [8, 10, 11, 15, 17, 20] : 숫자로 오름차순
console.log('666666666666666666666666666666');

//내림차순정렬
res = arr2.sort((a,b) => b-a); //[20, 17, 15, 11, 10, 8]
console.log('res : ',res);
console.log('555555555555555555555555555555');

//역순으로 출력 : reverse() 
// : 정렬은 아니고 단순히 뒤집음
res = arr2.reverse();//[8, 10, 11, 15, 17, 20]
console.log('res : ',res);
console.log('444444444444444444444444444');

let arr3 = [10, 8, 20, 15, 11, 17];
console.log('arr3 : ',arr3);
res = arr3.reverse(); // [17, 11, 15, 20, 8, 10]
console.log('res : ',res);

  //리버스는 문자열 사용xx
// let str3 = 'asdfasdf';
// console.log(str3.reverse());

let max = Math.max(10, 8, 20, 15, 11, 17); //직접 비교값을 넣을 때 사용
console.log('max : ',max);
let min = Math.min(10, 8, 20, 15, 11, 17);
console.log('min : ',min);
console.log('333333333333333333333333333');

  //배열 데이터를 넣을 떄는 ...을 쓴다
let max2 = Math.max(...arr3); // 변수에 담긴 배열을 비교할 떄
console.log('max2 : ',max2);
let min2 = Math.min(...arr3);
console.log('min2 : ',min2);


