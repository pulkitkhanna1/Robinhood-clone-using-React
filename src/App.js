import './App.css';
import Header from './components/header';
import NewsFeed from './components/NewsFeed';
import Stats from './components/Stats.js';
function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          <Stats />
        </div>

      </div>
    </div>
  );
}

export default App;
