import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate =useNavigate();

    return(
        <div>
           <h3>This a Router Home Section</h3>
           <button onClick={()=> navigate("/About/10")}>Go to About</button>
        </div>
    )
}