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
      <main>
        <Feed />
      </main>
      <aside>
        <SubReddits />
      </aside>
    </div>
  );
}

export default App;
