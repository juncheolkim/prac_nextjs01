export default function Lists() {
    let 상품 = ["Tomato", "Pasta", "Coconut"];
    let 어레이 = [2, 3, 4];
    // map 함수 기능.
    // 1. 함수 안의 코드 반복 실행한다.
    // 2. 매개변수를 두 개까지 작성할 수 있다.
    // 첫번째 변수는 array안의 자료를 출력
    // 두번째 변수는 0부터 1씩 증가하는 정수 (인덱스 같음)
    // 3. return에 적은걸 array로 담아줌
    let b = 어레이.map((a, i) => {
        return 10;
    });
    console.log(b);
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {/* jsx상에서는 for 반복문, if문 등을 사용할 수 없다. */}
            {/* map() 사용 가능 */}
            {상품.map((src, idx) => {
                return (
                    <div className="food">
                        <h4>{상품[idx]} $40</h4>
                    </div>
                );
            })}
        </div>
    );
}
