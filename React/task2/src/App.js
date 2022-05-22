import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Routing/Header";
import About from './Components/Routing/About'
import Error from './Components/Routing/Error'
import Home from './Components/Routing/Home'

let App = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
