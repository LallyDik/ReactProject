import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import store from "./redux/store"
import Navigator from "./project/Navigators";
import Nav from "./project/Nav"
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Nav></Nav>
          <Navigator></Navigator>
        </BrowserRouter>
      </Provider>
      <></>
    </>
  );
}

export default App;
