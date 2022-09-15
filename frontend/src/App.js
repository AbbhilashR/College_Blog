import './App.css';
function App() {
  return (
      <header className="App-header">
          <span className="Bar">
          <button className="title " onClick={(event)=>{
            window.location.reload();
          }}>Campus Blogs</button>
          </span>
      </header>
  );
}

export default App;
