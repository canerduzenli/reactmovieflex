import './style/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import { Navigate, Routes, Route } from 'react-router-dom';
import CatalogDetail from './pages/CatalogDetail';
import { Helmet } from 'react-helmet';
import NotFound from './pages/NotFound';
import NewMovie from './pages/NewMovie'
import Reactmovieflex from './components/reactmovieflex';


function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <header>
        <Header />

      </header>
      <div className="App"
      >
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route exact path="/catalog/:id" element={<CatalogDetail />} />
          <Route exact path="/newMovie" element={<NewMovie />} />

          <Route exact path='*' element={<NotFound />} />
          <Route exact path="/reactmovieflex/" element={<Reactmovieflex />} />


        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
