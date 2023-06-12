import { BrowserRouter,Route,Routes } from "react-router-dom";
import Ativ01 from "./Ativ01";
import Home from "./Home";
import Ativ02 from "./Ativ02";
import Ativ03 from "./Ativ03";
import Ativ04 from "./Ativ04";
import Ativ05 from "./Ativ05";
import Ativ06 from "./Ativ06";


export default function MinhasRotas() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Ativ01" element={<Ativ01 />} />
            <Route path="/Ativ02" element={<Ativ02 />} />
            <Route path="/Ativ03" element={<Ativ03 />} />
            <Route path="/Ativ04" element={<Ativ04 />} />
            <Route path="/Ativ05" element={<Ativ05 />} />
            <Route path="/Ativ06" element={<Ativ06 />} />
        </Routes>
        </BrowserRouter>
    );
}