import { useReducer } from "react"

export default function UseReducer_Example_2(){
    const [formData ,dispatch] = useReducer(reducer, [{name: "", email:""}])
    
    function reducer(state, action){
        return{
        ...state,
        [action.name] : [action.value]
        }
    }

    function handleChange(e){
        dispatch({
            name :e.target.name,
            value :e.target.value
        })
    }

   
  return(
        <div>
             <h2>---------Below is the Example of how to use Reducer Hook Exp 1----------</h2>
            <form>
                <input onChange={handleChange} type="text" name="name" value={formData.name} />
                 <input onChange={handleChange} type="email" name="email" value={formData.email} />
            </form>
            <p>{formData.name} - {formData.email}</p>
        </div>
    )
}