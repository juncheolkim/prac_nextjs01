import { age, name } from "./data";
import Hello from "./hello";

export default function Cart() {
    let 장바구니 = ["Tomatos", "Pasta"];
    return (
        <div>
            <Hello />
            <h4 className="title">Cart</h4>
            {장바구니.map((src, idx) => {
                return <CartItem item={장바구니[idx]} />;
            })}
            <Btn btnColor="blue" />
            <Banner cardName="롯데카드" />
            <Banner cardName="현대카드" />
        </div>
    );
}

// props 문법으로 부모 -> 자식 데이터 전송하려면
// 1. 자식컴포넌트 사용하는 곳에 가서 <자식컴포넌트 item={전해줄데이터} />
// 2. 자식컴포넌트 정의부분으로 가서 props라는 파라미터 등록 후 props.item 사용

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
// 자식 -> 부모 데이터 전송 불가능
// 형제 태그에 데이터 전송 불가능
// 항상 부모에서 자식에게로만 데이터 전송 가능!

function Banner(props) {
    return <h5 className="title-sub">{props.cardName} 결제 행사중</h5>;
}

function Btn(props) {
    return <button style={{ backgroundColor: props.btnColor }}>버튼</button>;
}
