import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


export default function TextiInputForm() {
  const [text, updateText] = useState("Hello");
  // const updateTextHandler = ()=>{
  //   updateText("Greetings");
  // };
 const UpclickHandler = ()=>{
console.log("You have clicked on the button" + text);
let uppercaseText = text.toUpperCase();
updateText(uppercaseText)
document.title= "Uppercase text gen"
};
const DonwclickHandler = ()=>{
  console.log("You have clicked on the button" + text);
  let lowercaseText = text.toLowerCase();
  updateText(lowercaseText)
  };
const onchangeValue = (event)=> {
  console.log("It is changed")
  updateText(event.target.value)

 };
  return (
    <> 
    <div className="container">
  <Form>
    {/* <h1>{text} User</h1> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your text</Form.Label>
        <Form.Control type="text"  value= {text} onChange={onchangeValue} placeholder="your text input goes here" />
        <Form.Text  clas sName="text-muted">
          Whatever you enter will be seen here
        </Form.Text>
      </Form.Group>
      <Button variant="primary" className='mx-2' type="button" onClick={UpclickHandler}>
        Convert to Uppercase
      </Button>
      <Button variant="primary" className='mx-2' type="button" onClick={DonwclickHandler}>
        Convert to Uppercase
      </Button>
    </Form>
    </div>
    <div className='container my-3'>
      <h2> Text Summary Details</h2>
      <p> The text has {text.split(" ").length} words and {text.length} letters</p>
    </div>
    <div className='container'>
      <p> Time to read the text: {0.008* text.split(" ").length} Minutes</p>
      <h2>Preview</h2>
      {text}
    </div>
  </>
  );
}

export function greet(props) {
  return <h1>Hello {props.name}</h1>;
}
