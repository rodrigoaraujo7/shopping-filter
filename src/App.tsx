import Products from './components/Products';
import Footer from './components/Footer';

import { globalStyles } from './globalStyles';
import { Main } from "./styles";

function App() {
  globalStyles()

  return (
    <Main>
      <Products />
      <Footer />
    </Main>
  );
}

export default App;
