import React, { useState } from "react";

export default function TextForm(props) {
  const handleChange=(e)=>{
    console.log("this tis handle change")
  
    setText(e.target.value)
  }
  const handleUpClick=()=>{
    // console.log("Uppercase clicked" + text)
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleClearClick=()=>{
    // console.log("Uppercase clicked" + text)
    let newText=(" ");
    setText(newText)
  }
  const handleDownClick=()=>{
    // console.log("Uppercase clicked" + text)
    setText(text.toLowerCase())
  }
  const [text, setText] = useState("");
  // setText("hello")

  return (
    <>
      <div className="container"             style={{color: props.mode=== 'dark' ? 'white':'black'}}  >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}  
            onChange={handleChange}
            style={{backgroundColor: props.mode=== 'dark' ? 'grey':'white', color: props.mode==='dark' ? 'white':'black'}}
            value={text}
            placeholder="Type your text here"
          />
        </div>
        <button className="btn btn-primary" onClick={ handleUpClick }>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={ handleDownClick }>Convert to LowerCase</button>
        <button className="btn btn-danger mx-3" onClick={ handleClearClick }>Clear</button>
      </div>
      <div className="container my-4 "  style={{color: props.mode=== 'dark' ? 'white':'black'}}>
        <h4>Your Text Summary</h4>
        <p><strong>{text.split(" ").length}</strong> words and <strong>{text.length} </strong> characters</p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter Something in the text box above to preview here"}</p>
      </div>
    </>
  );
}
