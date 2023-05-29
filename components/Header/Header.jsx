import Image from "next/image";
import Logo from "@/public/assets/icons/logo.svg"
import './Header.css'

export default function Header() {
    return (
        <header className="Header">
            <Image src={Logo} alt="logomarca: uma sacola" height={40} width={35} />
            <p>Legume's Market</p>
        </header>
    )
}
