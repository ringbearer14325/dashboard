import React from 'react';
import Dashboard from './components/Dashboard.js';
import './css/App.css';
import Parse from 'parse';
import * as Env from "./environments";



Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;


function App() {
      return (
        <div>
          <Dashboard></Dashboard>
        </div>


      
      );
}


export default App;
