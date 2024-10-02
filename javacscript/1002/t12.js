// t11.js (숫자함수 연습)
'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.145592;
let su4 = -3.141592;
let cnt = 0;
let res = 0;

//Math.max(), Math.min()
//Math.ceil() :무조건 올림
//Math.floor() : 무조건 내림
//Math.trunc() : 소수이하를 무조건 자름
//Math.pow() : 지수승...
//Math.abs() : 절대값...
//Math.sqrt() : 제곱근
//toFixed(a+1) : (a자리+1)에서 반올림
//round() : 정수부 반올림. toFixed 더 많이씀.

res += ++cnt +" : "+ Math.ceil(su3) + "<br/>";
res += ++cnt +" : "+ Math.ceil(su4) + "<br/>";
res += ++cnt +" : "+ Math.floor(su3) + "<br/>";
res += ++cnt +" : "+ Math.floor(su4) + "<br/>";
res += ++cnt +" : "+ Math.trunc(su3) + "<br/>";
res += ++cnt +" : "+ Math.trunc(su4) + "<br/>";
res += ++cnt +" : "+ Math.pow(su1,3) + "<br/>";
res += ++cnt +" : "+ Math.abs(su1) + "<br/>";
res += ++cnt +" : "+ Math.abs(su2) + "<br/>";
res += ++cnt +" : "+ Math.sqrt(su1) + "<br/>";
res += ++cnt +" : "+ Math.sqrt(16) + "<br/>";
res += ++cnt +" : "+ su3.toFixed(2) + "<br/>";
res += ++cnt +" : "+ Math.round(su3) + "<br/>";

//난수 발생함수 : Math.random() - 0 <= 난수 < 1 실수형 난수
res += ++cnt +" : "+ Math.random() + "<br/>";
res += ++cnt +" : "+ (parseInt(Math.random()*10) + 1) + "<br/>";
res += ++cnt +" : "+ (parseInt(Math.random()*(10-5+1)) + 5) + "<br/>";



demo.innerHTML = res;



