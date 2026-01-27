//const element = <h1>Hello</h1>
//<Navbar> this is props
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
//import Service from "./pages/Service"
//import Contact from "./pages/Contact"
import About from "./pages/About"
//import Counter from "./component/Counter"
import {Route ,Routes} from "react-router-dom"
import Contact from "./pages/contact"
import Service from "./pages/Service"
import UseState from "./Hooks/UseState"
import Login from "./Auth/Login"
import Hook from "./Hooks/Hook"
import UseEffect from "./Hooks/UseEffect"
import UseEffectApi from "./Hooks/UseEffectApi"
const App = ()=>{
 const element = <h1>Hello</h1>
 return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home name="Sunny"/>}/>
      <Route path='/about' element={<About name="Sunny" age={20} dept="CS&DS"/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/usestate' element={<UseState/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/hook' element={<Hook/>}></Route>
      <Route path='/useeffect' element={<UseEffect/>}></Route>
      <Route path='/useeffectapi' element={<UseEffectApi/>}></Route>
    </Routes>
    {/*<h1>Hello</h1>
    <h2>World</h2>
    {element}
  
    <Home name="Sunny"/>
    <Service/>
    <Contact/>
    <About/>
    <Counter/>*/}
    </>
  )
}
export default App