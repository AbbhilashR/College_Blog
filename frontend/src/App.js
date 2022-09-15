import './App.css';


function App() {
  return (
      <header className="App-header">
        <center>
          <span className="Bar">
          <button className="title " onClick={(event)=>{
            window.location.reload();
          }}>Campus Blogs</button>

          </span>
          </center>
      </header>
  );
}

export default App;
