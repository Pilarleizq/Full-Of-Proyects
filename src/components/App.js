import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import CreateProject from './CreateProject';
import Landing from './Landing';

function App() {
  const [dataCard, setDataCard] = useState([
    { name: 'Team2', project: 'Molones' },
  ]);
  console.log(dataCard);

  const handleDataCard = () => {
    setDataCard([...dataCard]);
  };

  return (
    <Routes>
      <Route path="/" element={<Landing dataCard={dataCard} />} />
      <Route
        path="/create"
        element={
          <CreateProject dataCard={dataCard} handleDataCard={handleDataCard} />
        }
      />
    </Routes>
  );
}

export default App;
