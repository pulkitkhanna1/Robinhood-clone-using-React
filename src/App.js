import './App.css';
import Header from './components/header';
import Body from './components/Body';
function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <Body />
      </div>
    </div>
  );
}

export default App;
