import { Link, Outlet } from "react-router-dom"
export default function Products(){
   
    return(
        <div>
           <h3>This a Router Products Section</h3>
           <Link to ="Laptops">Laptops</Link>
           <Outlet />
        </div>
        
    )
}
