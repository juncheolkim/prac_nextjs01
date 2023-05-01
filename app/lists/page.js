export default function Lists() {
    let 상품 = ["Tomato", "Pasta", "Coconut"];

    return (
        <div>
            <h4 className="title">상품목록</h4>

            {상품.map((src, idx) => {
                return (
                    <div className="food" key={idx}>
                        <img src={`/food${idx}.png`} className="food-img" />
                        <h4>{상품[idx]} $40</h4>
                    </div>
                );
            })}
        </div>
    );
}
