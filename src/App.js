import React from 'react'
import GlobalStyles from './components/GlobalStyles/GlobalStyles';


//components
import Header from "./components/Header";


function App() {
  return (
    <div>
      <Header title={`Users`} subtitle={ `Manage Users`} />
      <GlobalStyles/>
    </div>
  );
}

export default App;
