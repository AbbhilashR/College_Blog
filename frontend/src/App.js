import './App.css';


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
          <div>
            <form className="App-form" onSubmit={(event)=>{ 
              event.preventDefault();
              console.log(event);
              }}>
                <input type="text" /><br/>
                <input type="password" /><br/>
                <input type="submit" />
              </form>
          </div>


          </div>
);
}

export default App;
