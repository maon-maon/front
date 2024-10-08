// t04.js

'use strict';

  class Member {
    // name; //생성자안의 매개변수명과 필드명이 같을 경우에는 생략가능하다.
    // age;
      
    //생성자
    constructor(name,age,color){//생성자 변수로 사용시 생략함
      this._name = name; //매개변수명이 필드명이 됨
      this._age = age;
      this._color = color;
    }

    //getter
    get name() {//매개변수명을 이름으로 사용
      return this._name; // getter에서 넘겨주는 필드값은 _을 넣어서 사용(콜백지옥 떄문에,생성)
    } //_필드명 = 메소드 필드명
    get age() {
      return this._age;
    }//유효성검사 떄문에 필드에 값 저장 : 외부에서 바꾸지 못하도록
    get color () {
      return this._color;
    }

    //setter
    set name(name) {
      this._name = name;
    }
    set age(age) {
      // this._age = age;
      if(age < 1) age = 1; //if문으로 유효성 검사 : 나이는 1 이상입력
      this._age = age;
    }
    set color(color) {
      this.color  = color;
    }
  }
  //get set은 유효성 검사를 위해 많이 사용한다.