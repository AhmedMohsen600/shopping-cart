import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home, Store, About } from "./pages";
import { PageRoutes } from "./constant/path";
import { NavBar } from "./components/navbar";
import { ShoppingCartProvider } from "./context/shppingCartContext";
function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="App">
        <Routes>
          <Route path={PageRoutes.HOME} element={<Home />} />
          <Route path={PageRoutes.STORE} element={<Store />} />
          <Route path={PageRoutes.ABOUT} element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
