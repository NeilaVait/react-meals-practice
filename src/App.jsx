import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [modalMode, setModalMode] = useState(false);

  const handleCloseModal = () => {
    setModalMode(false);
  };

  const handleOpenModal = () => {
    setModalMode(true);
  };

  return (
    <div className="App">
      <Header handleOpenModal={handleOpenModal} />
      <Cart modalMode={modalMode} handleCloseModal={handleCloseModal} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
