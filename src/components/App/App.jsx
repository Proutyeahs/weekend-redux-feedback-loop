import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Wack from '../Wack/Wack';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Submit from '../Submit/Submit';


function App() {

  return (
    <Router>
      <Header />
      <Route path={'/'} exact>
        <Wack />
      </Route>
      <Route path={'/feeling'}>
        <Feeling />
      </Route>
      <Route path={'/understand'}>
        <Understand />
      </Route>
      <Route path={'/support'}>
        <Support />
      </Route>
      <Route path={'/comment'}>
        <Comment />
      </Route>
      <Route path={'/submit'}>
        <Submit />
      </Route>
    </Router >
  );
}

export default App;
