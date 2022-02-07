import React from 'react';
import 'remixicon/fonts/remixicon.css';
import './App.scss';
import Header from './components/header';
import { IUserInfo, UserContext } from './user-context';
import { Routes, Route } from "react-router-dom";
import { ViewEpisodeList } from './views/view-episode-tier-list';
import { Landing } from './views/landing';
import { EditEpisodeList } from './views/edit-episode-tier-list';
import { HttpService, httpServiceContext } from './services/http.service';
import { EditCharacterList } from './views/edit-character-tier-list';

class App extends React.Component<{}, any> {
  private httpService: HttpService = new HttpService();

  constructor(props) {
    super(props);

    const setUserState = (user: string) => {
      this.setState(state => ({
        ...state,
        user: {
          ...state.user,
          loggedIn: user.length > 0,
          name: user,
        }
      })
      )
    }

    this.state = {
      listOrder: this.httpService.getTierList(),
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
              <Route path="/episodes/mine" element={<EditEpisodeList/> } />
              <Route path="/episodes/:id" element={<ViewEpisodeList/>} />
              <Route path="/characters/mine" element={<EditCharacterList/>} />
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
