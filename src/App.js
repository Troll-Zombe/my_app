import React from 'react';
import './App.css';
import Home from './routes/Home'
import './routes/Home.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import fav from './routes/fav';



function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
      <Route path="/fav" component={fav} />
    </HashRouter>
  );
}

export default App;