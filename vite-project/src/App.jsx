import Header from './containers/header/Header';
import './App.css';
import TopFollowers from './containers/top-area-followers/TopFollowers';
import Overview from './containers/overview/Overview';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Header totalFollowers={23004} />
        <TopFollowers />
        <Overview />
      </main>
    </QueryClientProvider>
  );
}

export default App;
