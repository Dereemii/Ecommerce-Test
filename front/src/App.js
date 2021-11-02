
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from './components/ProductList/ProductList';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import WildCard from "./components/WildCard/WildCard";

//redux
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {


  return (
    <>

      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/*">
              <WildCard />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>

  )
}

export default App
