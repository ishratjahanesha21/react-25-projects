import { useState } from "react"


const WordsCounter = () => {
    const [text,setText]=useState("")
    const wordsCounter = text.split(/\s+/).filter(Boolean).length;
    const letter =text.length
    const handleTextChange = (e)=>{
        setText(e.target.value)
    }
  return (
    <>
   
<form>
  <p><label>Review of W3Schools:</label></p>
  <textarea id="w3review" name="w3review" rows="4" cols="50" onChange={handleTextChange} value={text}>

  </textarea>
  <br/>
  <input type="submit" value="Submit"/>
</form>
<p>Words Count :
    {wordsCounter}
</p>
<p>Letter Count :
    {letter}
</p>
    </>
  )
}

export default WordsCounter