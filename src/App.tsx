import React from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from "./components/User";
import { UserContextProvider } from './components/context/UserContext';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Login } from './components/auth/Login';
import { Profile } from './components/auth/Profile';
import { List } from './components/generic/List';

function App() {
  return (
    // <div className="App">
    //   <UserContextProvider>
    //     <User />
    //     <Counter message='ABC'/>
    //     <Private isLoggedIn={true} Component={Profile}/>
    //   </UserContextProvider>
    // </div>

    <List 
      items={['Batman', 'Superman', 'Wonder Woman']}
      onClick={(item) => console.log(item)}
    />
  );
}

export default App;