import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Saved from './components/saved';
import Search from './components/search';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://google.com/books"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Book search
        </a>
      </header> */}
      <Header />
      <Search />

      <Saved />
      
    </div>
  );
}

export default App;
