import { BrowserRouter , Route, Link, Routes, useParams} from 'react-router-dom'
import reactLogo from './assets/react.svg'
//import './App.css'
import Components_Learn from './Components_Learn'
import ModuleCSS from './ModuleCSS'
import Functions from './Functions'
import Classes_Objects from './Classes_Objects'
import './External.css' 
import If_Else from './If_Else'
import Props_in_React from './Props_in_React'
import State_Manag_Examples1 from './State_Manag_Examples1'
import State_Manag_Examples2 from './State_Manag_Examples2'
import State_Manag_Examples3 from './State_Manag_Examples3'
import State_Manag_Examples4 from './State_Manag_Examples4'
import Form_Create_Simple from './Form_Create_Simple'
import Form_Create_Advance from './Form_Create_Advance'
import UseEffect_Simp_Exp_1 from './UseEffect_Simp_Exp_1'
import UseEffect_Simp_Exp_2 from './UseEffect_Simp_Exp_2'
import Home from './Home'
import About from './About'
import Products from './Products'
import Laptops from './Laptops'
function App() {
  //  const alert_message=()=> alert("The Prop is calling a function")  this is a function in props
  // const hobbies = ["Code","Eat","Sleep","Repeat"]                    Use of array in Props
  const obj= { Position:"Ist", Class: 8 , score :98}
  const PageNotFound =()=>{
    return <h3>Page Not Found</h3>
    
  }
  function About() {
      const {id} =useParams();
      return <h2>User Profile for ID is: {id}</h2>
      
    }
  return (
        <>
        <BrowserRouter>
        <nav>
            <Link to ="./Home">Home | </Link>
            <Link to ="./About/10">About | </Link>
            <Link to ="./Products/10">Products</Link>
        </nav>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About/:id" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/Products" element={<Products />}>
              <Route path="Laptops" element={<Laptops />} />
            </Route>
          </Routes>
        </BrowserRouter>
          <h3>---------------------------------Above are the Router Examples "Lecture Day 7"----------------------------------</h3>
          
            <h1 style={{color:"orange",fontSize:40}}>Hi iam Learning React JS</h1>
            <Components_Learn />
            <img src={reactLogo} width="150px" height="150px"/>
            <h3 className='test'>This is for External CSS</h3>
            <ModuleCSS />
            <Functions />
            <Classes_Objects />
            <If_Else />
                      {/* First Method of printing props
            <Props_in_React part_1=" Props Example" part_2=" Printing Props"/> */}

                      {/*  Second Method of printing props
            <Props_in_React name="Abdullah" age = {25} city="Lahore" /> */}

                      {/* Third Method of printing props
            <Props_in_React name="Ayesha" gender="female" /> */}
                            
                      {/* Setting default value of prop
            <Props_in_React name="Ayesha"  />  */}

                      {/* Caling function in props
            <Props_in_React label="Click Me" handleClick={alert_message} />   */}
                      
                      {/*  Use of array in Props
            <Props_in_React hobbies={hobbies} /> */}

            <Props_in_React obj={obj} />
            <State_Manag_Examples1 /><br  />
            <State_Manag_Examples2 /><br />
            <State_Manag_Examples3 /><br />
            <State_Manag_Examples4 /><br />
            <Form_Create_Simple /><br />
            <Form_Create_Advance /><br />
            <UseEffect_Simp_Exp_1 /><br />
            <UseEffect_Simp_Exp_2 /> 
          
        </>    
  )
  
}
export default App
