
import Header from './containers/header/Header';
import './App.css';
import TopFollowers from './containers/top-area-followers/TopFollowers';
import Overview from './containers/overview/Overview';

function App() {


  return (
    <main>
      <Header totalFollowers={23004} />
      <TopFollowers />
      <Overview />
    </main>
  );
}

export default App;
