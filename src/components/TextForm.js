import React, {useState} from 'react'

export default function TextForm(props) {
  const OnhandUpclick = ()=>{
    //   console.log("Clicked on onhandUpclick" + text)
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Convert to uppercase","success")
  }
  const OnhandLoclick = ()=>{
    //   console.log("Clicked on onhandUpclick" + text)
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Convert to lowercase","success")
  }
  const onChangeClicked = (event)=>{
    //   console.log("onChangeClicked")
      setText(event.target.value);
  }
  const clearText = ()=>{
    let newText = " ";
      setText(newText);
      props.showAlert("Clear text successfully","success")
  }
  
    const[text,setText]=useState(" ")
    
    return (
        <>
        <div className='container' style={{color :props.mode === 'dark' ? 'white' : 'black'}}>
       <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={onChangeClicked} style={{backgroundColor :props.mode === 'dark' ? '#212427' : 'white' , color :props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
     </div>
      <button className="btn btn-primary mx-2" onClick={OnhandUpclick}>Convert into uppercase</button>
      <button className="btn btn-primary mx-2" onClick={OnhandLoclick}>Convert into lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
        </div>
    <div className="container my-6" style={{color :props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your text summary here is</h1>
        <p>{text.length>0 ? text.trim().split(" ").length : 0} words {text.length} characters</p>
        <p>{0.008 * text.split("").length} minutes to read </p>
        <h2>Preview</h2>
        <p>{ text.length > 0 ? text : "Enter text to preview something here"}</p>
    </div>
    </>
    )
}
