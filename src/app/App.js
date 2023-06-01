import React from 'react';
import './App.css';

import Header from '../components/Header/Header';
import SubReddits from '../features/SubReddits/SubReddits';
import Feed from '../features/Feed/Feed';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <aside>
        <SubReddits />
      </aside>
      <main>
        <Feed />
      </main>
    </div>
  );
}

export default App;
