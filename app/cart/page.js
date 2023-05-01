// './' - 현재폴더
// './../' - 현재 폴더의 상위폴더
import { age, name } from "./data";
import Hello from "./hello";

export default function Cart() {
    return (
        <div>
            <Hello />
            <h4 className="title">Cart</h4>
            {/* 길고 복잡한 html을 한 단어로 축약하려면 Component */}
            <CartItem />
        </div>
    );
}

// Component를 만드는 법
// 1. function 작명(){} - 작명 대문자로 시작
// 2. return (축약할 긴 HTML)
function CartItem() {
    return (
        <div className="cart-item">
            <p>상품명 {age}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
// Component가 많아지면 단점도 생긴다.
// Component끼리 데이터 공유가 힘들다. - 코드가 복잡해진다.
// function 문법 쓰는 이유 === component 문법 쓰는 이유 :
// 1. 더러운 코드 한 단어로 축약
// 2. 같은 코드 재사용

// Next.js 컴포넌트는 2가지 종류가 있다.
// 1. server component
// 2. client component
// 파일 맨 위에 'use client' 넣고 만들면 client component
// 그 외는 server component이다.

// server component
// - html에 자바스크립트 기능 넣기 불가능 - onClick 등 사용 불가능
// 장점이 뭐임?
// - 로딩 속도가 매우 빠르다.
// client component의 단점은?
// - 로딩속도 느리다(자바스크립트 많이 필요)
// - 로딩속도 느리다(hydration 필요)

// 추천하는 컴포넌트 설계 :
// 큰 페이지는 server component
// JS기능 필요한 곳만 client component
