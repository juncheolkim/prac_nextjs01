// import Image from "next/image";
// import foodImage0 from "/public/food0.png";

export default function Lists() {
    let 상품 = ["Tomato", "Pasta", "Coconut"];

    return (
        <div>
            <h4 className="title">상품목록</h4>

            {상품.map((src, idx) => {
                return (
                    // react에서는 반복적인 요소를 작성할 때
                    // 유니크한 값을 작성하라고 권장한다.
                    // 해당 태그에 key 속성을 넣어주자
                    <div className="food" key={idx}>
                        {/* 이미지를 넣을 때 최적화된 이미지로 넣을 수 있다.
                        + lazy loading
                        + 사이즈 최적화
                        + layout shift 방지 
                        1. import Image from 'next/image'
                        2. <Image/>사용
                        3. 이미지를 import 해서 경로 넣어야한다.

                        만약 외부 이미지를 넣고싶다면,
                        1. width와 height 속성이 필요하다.
                        2. next.config.js 세팅 (도메인 및 경로 등록)*/}
                        {/* <Image src={foodImage0} className="food-img" /> */}
                        <img src={`/food${idx}.png`} className="food-img" />
                        <h4>{상품[idx]} $40</h4>
                    </div>
                );
            })}
        </div>
    );
}
