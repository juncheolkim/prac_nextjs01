import Link from "next/link";

export default function cart() {
    return (
        <div>
            <h1 className="title">장바구니 입니다.</h1>
            <div className="title-sub">
                <Link
                    href="
            /cart/payment"
                >
                    결제하기
                </Link>
            </div>
        </div>
    );
}
