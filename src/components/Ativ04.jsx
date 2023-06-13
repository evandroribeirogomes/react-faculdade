import { Link } from "react-router-dom";
import Tollbar from "./Toolbar";
import BucketList_04 from "./BucketList_04";
import Button_04 from "./Button_04";
import Count_04 from "./Count_04";
import CounterList from "./CounterList_04";
// import Data_04 from "./data";
import Form_04 from "./Form_04";
import Form2_04 from "./Form2_04";
import Form3_04 from "./Form3_04";
import Gallery_04 from "./Gallery_04";
import List_04 from "./List_04";
import List2_04 from "./List2_04";
import List3_04 from "./List3_04";
import List4_04 from "./List4_04";
import MovingDot_04  from "./MovingDot_04";
import ShapeEditor_04 from "./ShapeEditor_04";


export default function Ativ04() {
    return(
        <>
            <h1> Atividade 04 </h1>
            <hr/>
            <div><h2>Tollbar</h2>
              <br></br>
                <Tollbar/>
            </div>
            <hr/>
            <div><h2>Buckelist</h2>
                <BucketList_04/>
                </div>
            <hr/>
           <div><h2>button</h2>
            <Button_04/>
           </div> 
            <hr/>
            <div><h2>Count</h2>
                <Count_04/>
            </div>
            <hr/>
            <div><h2>CountrList</h2>
                <CounterList/>
            </div>
            <hr/>
            {/* <Data_04/> */}
            <div><h2>Form</h2>
                <Form_04/>
            </div>
            <hr/>
            <div><h2>Form2</h2>
                <Form2_04/>
            </div>
            <hr/>
            <div><h2>Form3</h2>
                <Form3_04/>
            </div>
            <hr/>
            <div><h2>Gallery</h2>
                <Gallery_04/>
            </div>
            <hr/>
            <div><h2>List</h2>
                <List_04/>
            </div>
            <hr/>
            <div><h2>List2</h2>
                <List2_04/>
            </div>
            <hr/>
            <div><h2>list3</h2>
                <List3_04/>
            </div>
            <hr/>
            <div><h2>list4</h2>
                <List4_04/>
            </div>
            <hr/>
            <div><h2>MovingDot</h2>
                <MovingDot_04/>
            </div>
            <hr/>
            <div><h2>ShapeEditor</h2>
                <ShapeEditor_04/>
            </div>
            <hr/>
         
            <br />
            <Link to="/"><button>Voltar</button> </Link>
        </>
    );
}