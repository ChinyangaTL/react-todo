import { useContext } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

import ThemeContext, {themes} from './context/themeContext';

function App() {
  const theme = useContext(ThemeContext)
  return (
    <>
    <ThemeContext.Provider value={themes.dark}>
    <main className="container" style={theme}>
        <Header />
        <List />
        <Footer />
      </main>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
