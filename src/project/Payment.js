import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"
export default function Payment() {
    const navigate = useNavigate()
    const items = useSelector((state) => state.CartReducer)
    var sum = 0;
    return (
        <>
            <p class="title">Your Order</p>
            <div id="table" class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => {
                            sum += item.cart * item.price;
                            return (
                                <tr key={item.id}>
                                    <td><img id="tblimg" src={item.image}></img></td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.cart}</td>
                                    <td>{item.cart * item.price}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td id="total">Total price:</td>
                            <td>{sum}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <button class="b btn btn-outline-dark" onClick={() => (useEffect(() => (
                (window.confirm("are you done with your order?") == false) ? navigate("/Cart") : null), []))}>Pay Now</button > */}

            <button class="b btn btn-outline-dark">Pay Now</button>

        </>
    )
}

