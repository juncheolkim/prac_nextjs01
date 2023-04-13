import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

// 계층적으로 layout.js 안에 page.js가 존재한다.
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    let name = "park";
    let link = "http://google.com";
    return (
        <div>
            <h4 style={{ color: "red", textAlign: "center", fontSize: "30px" }}>
                로고
            </h4>
            <p className="title-sub">by dev {name}</p>
            <a href={link}>링크</a>
        </div>
    );
}
