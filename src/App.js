import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [Firstname, SetFirstname] = useState()
  const [Lastname, SetLastname] = useState()
  const onChangeHandler = (e, setter) => {
    console.log(e.target.value);
    setter(e.target.value + " ")

  }
  return (

    <div className="tekst">
      <div className="split left">
        <div className="centered">
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar woman" />
          <h2>Dane</h2>
          <form action="/action_page.php">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" onChange={(e) => onChangeHandler(e, SetFirstname)} /><br></br>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" onChange={(e) => onChangeHandler(e, SetLastname)} /><br></br>
            <input type="submit" value="Submit" />
          </form>
          <p>Some text.</p>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar man" />
          <h2>Te same dane</h2>
          {Firstname}
          {Lastname}
          <p>Some text here too.</p>
        </div>
      </div>
    </div>
  )

}
export default App;