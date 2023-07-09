import React from 'react';
import './App.css';

import Header from '../components/Header/Header';
import SubReddits from '../features/SubReddits/SubReddits';
import Feed from '../features/Feed/Feed';
import RightColumn from '../components/RightColumn/RightColumn';

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
        <SubReddits />
      </aside>
      <aside>
        <RightColumn />
      </aside>
    </div>
  );
}

export default App;
