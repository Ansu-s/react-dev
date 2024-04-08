import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


export default function TextiInputForm() {
  const [text, updateText] = useState("Hello");
  // const updateTextHandler = ()=>{
  //   updateText("Greetings");
  // };
 const clickHandler = ()=>{
console.log("You have clicked on the button" + text);
let uppercaseText = text.toUpperCase();
updateText(uppercaseText)
};
const onchangeValue = (event)=> {
  console.log("It is changed")
  updateText(event.target.value)

 };
  return (
    <> 
    
  <Form>
    {/* <h1>{text} User</h1> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your text</Form.Label>
        <Form.Control type="text"  value= {text} onChange={onchangeValue} placeholder="your text input goes here" />
        <Form.Text  clas sName="text-muted">
          Whatever you enter will be seen here
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="button" onClick={clickHandler}>
        Convert to Uppercase
      </Button>
    </Form>
  </>
  );
}

export function greet(props) {
  return <h1>Hello {props.name}</h1>;
}
