import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
