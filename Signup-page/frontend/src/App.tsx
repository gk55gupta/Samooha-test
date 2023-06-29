import React, {useState, useEffect, ReactElement, FormEvent} from "react"
import {
  withStreamlitConnection,
  Streamlit,
  ComponentProps,
} from "streamlit-component-lib";
import './style.css'
import consts from './constants'

function App({args}: ComponentProps): ReactElement {
  const {title} = args

  
  const [locator, setLocator] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [formValid, setValid] = useState(false);

  const handleSubmit = (event: FormEvent)=> {
    event.preventDefault();
    if(locator.trim() !== "" && userName.trim() !== "" && pass.trim() !== "") {
      alert("Signup Success");
      Streamlit.setComponentValue({locator, userName, pass});
      setLocator('');
      setUserName('');
      setPass('');
      // setTimeout(() => {
      //   Streamlit.setComponentValue({});
      // }, 3000)
    } else
      alert("please enter details")
  }

  useEffect(() => {
    Streamlit.setFrameHeight();
  })

  useEffect(() => {
    if (locator.trim() !== "" && userName.trim() !== "" && pass.trim() !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [locator, userName, pass])

  return (
    <div className="App">
      <img src={consts.logo_url} className="App-logo" alt="logo" />
      <h1>{title}</h1>
      <h2 className="heading">
        Sign up using snowflake account
      </h2>

      <form onSubmit={handleSubmit}>
        <input value={locator}
          onChange={(e) => setLocator(e.target.value)}
         type="text" 
         placeholder="Account locator" required/>
        
        <input value={userName} 
          onChange={(e) => setUserName(e.target.value)}
          type="text" 
          placeholder="Username" 
          required/>

        <input value={pass} 
          onChange={(e) => setPass(e.target.value)}
          type="password" 
          placeholder="Password" 
          required/>

        <small>By signing up, I agree to the <a href={consts.tnc_url}>Terms of Service</a> and <a href={consts.tnc_url}>Privacy Policy</a>.
        </small>

        <button className={formValid ? 'btn-valid' : ''} disabled={!formValid}>Sign up</button>
      </form>

      <p>Note: You can later login to Samooha as a <strong>Provider</strong> or a <strong>Consumer</strong></p>

    </div>
  )
}

export default withStreamlitConnection(App)
