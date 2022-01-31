import React, { createContext } from 'react';
import './App.scss';
import Header from './components/header';
import axios from 'axios';
import { IUserInfo, UserContext } from './user-context';
import { Routes, Route, Link } from "react-router-dom";
import { ViewEpisodeList } from './views/view-episode-tier-list';
import { Landing } from './views/landing';
import { EditEpisodeList } from './views/edit-episode-tier-list';
import { HttpService, httpServiceContext } from './services/http.service';

const colors = ['#EE324B', '#4D7DBD', '#00B8C4'] //, '#FFE11D'];


class App extends React.Component<{}, any> {
  private httpService: HttpService = new HttpService();

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
        <httpServiceContext.Provider value={this.httpService}>
          <div>
            <Header></Header>
            <Routes>
              <Route path="/mine" element={<EditEpisodeList />} />
              <Route path="/:id" element={<ViewEpisodeList />} />
              <Route path="/*" element={<Landing />} />
              {/* <Route path="about" element={<About />} /> */}
            </Routes>
          </div>
        </httpServiceContext.Provider>
      </UserContext.Provider>
    );

  }
}

export default App;
