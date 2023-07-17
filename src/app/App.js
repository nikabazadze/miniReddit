import React from 'react';
import './App.css';

import Header from '../components/Header/Header';
import Feed from '../features/Feed/Feed';
import RightColumn from '../components/RightColumn/RightColumn';
import LeftColumn from '../components/LeftColumn/LeftColumn';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Feed />
      </main>
      <aside>
        <LeftColumn />
      </aside>
      <aside>
        <RightColumn />
      </aside>
    </div>
  );
}

export default App;
