import { Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
// import NotFound from './pages/NotFound';
``;
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;

// import './styles/globals.css';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import CardsWrapper from './components/CardsWrapper';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Header />
//       <CardsWrapper />
//     </>
//   );
// }

// export default App;
