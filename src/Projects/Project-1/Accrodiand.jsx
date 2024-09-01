import { useState } from "react"
import data from "./data"


const Accrodiand = () => {
    const [select,setselect]=useState(null)

    // function
    function handleselection (getCurrentId){
         console.log(getCurrentId)
         setselect(getCurrentId === select ?null : getCurrentId)
    }
  return (
    <div>
        {
            data && data.length>0?(data.map((dataitem)=>(
                <div key={dataitem.id} onClick={()=>handleselection(dataitem.id)}>
               <div> <h1>{dataitem.question}</h1><span>+</span></div>
               {
                select === dataitem.id?<>
                {dataitem.answer}
                </>:null
               }
                </div>
            ))) :<div>DAta not found</div>
        }
    </div>
  )
}

export default Accrodiand