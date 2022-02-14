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
import { ViewCharacterList } from './views/view-character-tier-list';
import { masterCharacterList, masterEpisodeList } from './constants';
import { NotificationHandler } from './components/notification-bar';
import { NotificationService, NotificationServiceContext } from './services/notification.service';

class App extends React.Component<{}, any> {
  private NotificationService: NotificationService = new NotificationService();
  private httpService: HttpService = new HttpService(this.NotificationService);

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
        <NotificationServiceContext.Provider value={this.NotificationService}>
        <httpServiceContext.Provider value={this.httpService}>
          <div>
            <Header></Header>
            <Routes>
              <Route path="/episodes/mine" element={<EditEpisodeList/> } />
              <Route path={masterEpisodeList} element={<ViewEpisodeList/>} />
              <Route path="/episodes/:id" element={<ViewEpisodeList/>} />
              <Route path="/characters/mine" element={<EditCharacterList/>} />
              <Route path={masterCharacterList} element={<ViewCharacterList/>} />
              <Route path="/characters/:id" element={<ViewCharacterList/>} />
              <Route path="/*" element={<Landing />} />
              {/* <Route path="about" element={<About />} /> */}
            </Routes>
          </div>
          <NotificationHandler></NotificationHandler>
        </httpServiceContext.Provider>
        </NotificationServiceContext.Provider>
      </UserContext.Provider>
    );

  }
}

export default App;
