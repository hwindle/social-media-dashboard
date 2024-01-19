
import Header from './containers/header/Header';
import './App.css';
import TopFollowers from './containers/top-area-followers/TopFollowers';

function App() {


  return (
    <main>
      <Header totalFollowers={23004} />
      <TopFollowers />
    </main>
  );
}

export default App;
