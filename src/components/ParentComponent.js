import React, { useState } from "react";
import Form from "./Form";

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsletter, setNewsletter] = useState(true)
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value)

    } 
    
    function handleLastNameChange(e) {
      setLastName(e.target.value)
    } 
  
    function handleNewsletterChange(e) {
      setNewsletter(e.target.checked)
    }

    console.log(firstName, lastName, newsletter)

    return (
        <Form 
            firstName={firstName}
            lastName={lastName}
            newsletter={newsletter} 
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleNewsletterChange={handleNewsletterChange}
        />
    )
}

export default ParentComponent;