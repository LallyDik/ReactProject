import { Route, Routes } from 'react-router-dom';
import StoreItems from "./StoreItems";
import Cart from "./Cart"
import Payment from "./Payment"
import About from "./About"
export default function Navigator() {
    return (
        <Routes>
            <Route exact path="/" element={<StoreItems />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/Payment" element={<Payment />} />
            <Route exact path="/About" element={<About />} />
        </Routes>
    )
}

