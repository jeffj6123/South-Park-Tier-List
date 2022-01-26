import React, { createContext } from 'react';
import './App.scss';
import Header from './components/header';
import axios from 'axios';
import { IUserInfo, UserContext } from './user-context';
import { Routes, Route, Link } from "react-router-dom";
import { EditEpisodeList } from './views/edit-character-tier-list';

const colors = ['#EE324B', '#4D7DBD', '#00B8C4'] //, '#FFE11D'];



class App extends React.Component<{}, any> {
  constructor(props) {
    super(props);

    const setUserState = (user: string) => {
      this.setState(state => ({
          user: {
            loggedIn: user.length > 0,
            name: user
          }
        })
      )

      // this.loadRankings();
    }

    this.state = {
      listOrder: ['s', 'a', 'b', 'c', 'd', 'f', 'u'],
      episodesMap: {},
      loading: true,
      user: {
        name: "",
        loggedIn: false,
        setUserState
      } as IUserInfo
    }

  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
      <div>
        <Header></Header>
        <Routes>
        <Route path="/mine" element={<EditEpisodeList />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      </div>
      </UserContext.Provider>
    );

  }
}

export default App;
