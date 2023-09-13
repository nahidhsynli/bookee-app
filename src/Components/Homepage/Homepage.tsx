import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Featured } from "./Featured/Featured"
import { FlashSale } from "./Flashsale/Flashsale"
import { Special } from "./Special/Special"

export const Homepage = () => {
    return (
        <div>
            <Header />
            <Special />
            <FlashSale />
            <Featured />
            <Footer />
        </div>
    )
}
