import useToogle from "./hooks/useToogle"

export default function CustomHook_Examp_1(){
    const [isOpen,toogleOpen] =useToogle()
    
    return(
        <div>
            <button onClick={toogleOpen}>Toogle Text</button>
            {isOpen && <p>Toogle Open</p>}
        </div>
    )
}