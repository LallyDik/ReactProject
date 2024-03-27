import { useNavigate } from "react-router-dom"
export default function Home() {
    const navigate = useNavigate()
    return (
        <>
        
            <button class="b btn btn-outline-dark" onClick={() => navigate("/StoreItems")}>See products</button>
        </>)
}