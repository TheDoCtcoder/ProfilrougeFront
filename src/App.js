import { useState } from 'react';
import './App.css';
import Header from './container/Header/header.jsx';
import NavBar from './container/nav-bar';


function App() {

  const [menuVisible, setMenuVisible] = useState(true);


  return (
    <>
      <Header onOpenMenu={() => setMenuVisible(true)}/>
      <NavBar isVisible={menuVisible}
      onCloseMenu={()=> setMenuVisible(false)}/>
      <main className="App">
      </main>
    </>

  )
}

export default App;
