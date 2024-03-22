import './App.css';
import MovieApp from './components/MovieApp';
import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
    <Provider store={store}>
      <MovieApp/>
    </Provider>
  );
}

export default App;
