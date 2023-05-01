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

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}

function Banner(props) {
    return <h5 className="title-sub">{props.cardName} 결제 행사중</h5>;
}

function Btn(props) {
    return <button style={{ backgroundColor: props.btnColor }}>버튼</button>;
}
