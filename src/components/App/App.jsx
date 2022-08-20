import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Wack from '../Wack/Wack';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Submit from '../Submit/Submit';
import Thank from '../Thank/Thank';
import Admin from '../Admin/Admin';

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
        <>
          <Submit />
        </>
      </Route>
      <Route path={'/thank'}>
        <Thank />
      </Route>
      <Route path={'/admin'}>
        <>
          <Admin />
        </>
      </Route>
    </Router >
  );
}

export default App;
