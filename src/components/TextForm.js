    import React,{useState}from 'react'

    export default function TextForm(props) {
    const handleUpclicked = ()=>{
      console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase", "success")
    }
      const handleloclicked = ()=>{
      
      let newText = text.toLowerCase();
      setText(newText)
            props.showAlert("Converted to lowercase", "success")
    }
      const handleclearclicked = ()=>{ 
      let newText = '';
      setText(newText)
            props.showAlert("Converted to clear text", "success")
    }
    const handleOnclicked = (event)=>{
      console.log("on change");
      setText(event.target.value);   
        
    }

    const handlecopyclicked = (event)=>{
      console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
          props.showAlert("Converted to copy text", "success")
    }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
          props.showAlert("Converted to extra Spaces ", "success")
  }
    const [text,setText] = useState('')
      return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black', }}>
          <h1>{props.heading}</h1>
    <div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnclicked} style={{backgroundColor: props.mode === 'dark' ? '#13466' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-2 my-1" onClick={handleUpclicked}>convert to upper case </button>
    <button className="btn btn-primary mx-2 my-1" onClick={handleloclicked}>convert to lower case </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleclearclicked}>clear Text </button>
       <button className="btn btn-primary mx-2 my-1" onClick={handlecopyclicked}>copy Text </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Extra Spaces </button>
        </div>
      <div className="container mt-3"  style={{color: props.mode === 'dark' ? 'white' : 'black', }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
      <h2>preview</h2>   
      <p>{text.length>0?text:"Enter something in the textbox above  to preview it here"}</p>
      </div>
        </>
      )
    }
