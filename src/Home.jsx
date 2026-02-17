import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate =useNavigate();
    const handleClick=()=>{
        navigate("/About")
    }
    return(
        <div>
           <h3>This a Router Home Section</h3>
           <button onClick={handleClick}>Go to About</button>
        </div>
    )
}