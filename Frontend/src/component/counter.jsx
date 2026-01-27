//const element = <h1>Hello</h1>
//<Navbar> this is props
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
//import Service from "./pages/Service"
//import Contact from "./pages/Contact"
import About from "./pages/About"
//import Counter from "./component/Counter"
import {Route ,Routes} from "react-router-dom"
const App = ()=>{
 const element = <h1>Hello</h1>
 return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home name="pavi"/>}/>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    {/*<h1>Hello</h1>
    <h2>World</h2>
    {element}
  
    <Home name="pavi"/>
    <Service/>
    <Contact/>
    <About/>
    <Counter/>*/}
    </>
  )
}
export default App