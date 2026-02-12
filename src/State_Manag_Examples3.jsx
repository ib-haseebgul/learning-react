//Exmaple 3 Like Button

import { useState } from "react";

export default function State_Manag_Examples3(){

    const [liked , setLiked] = useState(false)

    return(
        <div>
            <button onClick={()=> setLiked(!liked)}>{liked ? "Liked 👍" : "Like Me"}</button>
        </div>
    )
}