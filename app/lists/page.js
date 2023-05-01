// onClick을 사용하기 위해서 client component로 만들어야 한다.
"use client";

import { useState } from "react";

export default function Lists() {
    let 상품 = ["Tomato", "Pasta", "Coconut"];
    // 데이터를 잠깐 저장하기 위해 변수가 아닌 'state'를 사용할 수 있다.
    // state를 사용하는 이유
    // state 변경되면 state 사용하는 html 부분도 자동 재렌더링된다.
    // 일반 변수를 사용할 경우 html이 재렌더링 되지 않는다.
    // let [수량, 수량변경] = useState(0);
    return (
        <div>
            <h4 className="title">상품목록</h4>

            {상품.map((src, idx) => {
                let [수량, 수량변경] = useState(0);
                return (
                    <div className="food" key={idx}>
                        <img src={`/food${idx}.png`} className="food-img" />
                        <h4>{상품[idx]} $40</h4>
                        <button
                            onClick={() => {
                                if (수량 > 0) {
                                    수량변경(수량 - 1);
                                }
                            }}
                        >
                            -
                        </button>
                        <span> {수량} </span>
                        <button
                            onClick={() => {
                                수량변경(수량 + 1);
                            }}
                        >
                            +
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
