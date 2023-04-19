import Link from "next/link";

export default function Home() {
    let name = "kim";
    return (
        <div>
            <h4 className="title">다판다</h4>
            <p className="title-sub">by dev {name}</p>
        </div>
    );
}
