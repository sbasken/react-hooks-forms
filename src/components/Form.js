import React from "react";

function Form({
  firstName, 
  lastName, 
  newsletter, 
  handleFirstNameChange, 
  handleLastNameChange, 
  handleNewsletterChange
 }) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <input 
        type="checkbox" 
        id="newsletter" 
        onChange={handleNewsletterChange} 
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
