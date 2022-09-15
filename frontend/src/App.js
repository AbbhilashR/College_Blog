import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <span className="Bar">
          <button className="title " onClick={(event)=>{
            window.location.reload();
          }}>Campus Blogs</button>
          </span>
          </center>
          </header>
          <div className='login'>
            <form className="App-form" onSubmit={(event)=>{ 
              event.preventDefault();
              console.log(event);
              }}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Email"
                defaultValue="  "
              />
              <div></div>
                {/* <input type="text" /><br/> */}
                {/* <label>Password:</label><br/> */}
                <br/>
                <TextField 
                required
          id="outlined-password-input"
          label="Password"
          type="password"
          placeholder="Password"
          // autoComplete="current-password"
        />
        
        <div></div>
        <br/>
                {/* <input type="password" /><br/> */}
                <Button variant="contained" className='submit'>Submit</Button>
                <div></div> <br/>
                <span>Don't Have an account yet? <b>
              <span><a href="/">Sign up!</a></span></b>
              </span></form>
            
          </div>
          

          </div>
);
}

export default App;
