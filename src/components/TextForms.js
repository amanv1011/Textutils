import React, {useState} from 'react'

export default function TextForms(props) {
    const[text, setText] = useState("");
    const handleUpClick = ()=>{
        console.log(("Uppercase was clicked " +text));
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }
    const handlelowClick = ()=>{
        console.log(("lowercase was clicked " +text));
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clear = ()=>{
        console.log(("clear was clicked " ));
        let newText = '';
        setText(newText)
    }
    const dashed = ()=>{
        console.log(("dash was clicked " ));
        let newText = text.replace(/ /g, "_");
        setText(newText)
    }
    let copy = ()=>{
        let txt = document.getElementById("textarea")
        txt.select();
        navigator.clipboard.writeText(txt.value)

    }


    const handleOnChange = (event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style = {{color: props.custom=="light"? "black": "white"}}>
            <h1>{props.heading} - </h1>
            <div className="mb-3">
            <textarea className="form-control" id="textarea" value= {text} style={{backgroundColor : props.custom=="light"? "white": "grey", color: props.custom=="light"? "black": "white"}} onChange={handleOnChange} placeholder="Enter the Text to change" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handlelowClick}>CONVERT TO lowercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={clear}>Clear Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={dashed}>Uncerscored_</button>
            <button className="btn btn-primary my-2 mx-2" onClick={copy}>Copy Text</button>
        <div className="container my-2">
            <h1>Your text summery</h1>
            <h6>{text.split(' ').length-1} words , {text.length} character </h6>
            <h6>You can read this paragraph in {(text.split(' ').length)*.008} Minutes</h6>
            <h4>Preview:</h4>
            <h6>{text.length >0? text: "Enter something to preview here"}</h6>
        </div>
        </div>
        </>
    )
}
