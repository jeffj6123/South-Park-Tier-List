import React, { createContext } from 'react';
import './App.scss';
import Header from './components/header';
import { Episode, EpisodeItem, MemoEp } from './components/row';
import { data } from "./all_episodes";
import { Grid } from './components/sortable';
import axios from 'axios';
import { IUserInfo, UserContext } from './user-context';

const colors = ['#EE324B', '#4D7DBD', '#00B8C4'] //, '#FFE11D'];

class App extends React.Component<{}, any> {
  episodes: Episode[] = data.map(ep => {
    const id = ep.season.toString() + (ep.episode < 10 ? '0' : '') + ep.episode.toString();
    return {
      name: ep.name,
      releaseDate: ep.air_date,
      episode: ep.episode,
      season: ep.season,
      backgroundColor: colors[Math.round(Math.random() * colors.length)],
      thumbnail: 'images/' + id + '.png',
      id
    }
  })

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

      this.loadRankings();
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


    this.saveChanges = this.saveChanges.bind(this);
  }


  saveChanges(changes: any) {
    let data = {};

    Object.keys(changes).forEach(key => {
      data[key] = changes[key].map(ep => ep.id);
    })

    const token = localStorage.getItem('authToken') || "";
    console.log(token)
    axios.put(`/api/ranking`, data, {headers: {'authorization': token}}).then(res => {
      console.log("saved")
    })
  }

  
  async loadRankings() {
    const token = localStorage.getItem('authToken') || "";

    const res = await axios.get('/api/ranking/mine', {headers: {'authorization': token}});
    console.log(res)
    const rankingMap = {};

    Object.keys(res.data).forEach(tier => {
      res.data[tier].forEach(id => {
        rankingMap[id] = tier;
      })
    })


    const episodesMap: any = this.state.listOrder.reduce((map, tier) => { map[tier] = []; return map }, {});

    this.episodes.forEach(ep => {
      let tier = "u"
      if (ep.id in rankingMap) {
        tier = rankingMap[ep.id];
      }
      if (!(tier in episodesMap)) {
        episodesMap[tier] = [];
      }
      episodesMap[tier].push(ep);
    })

    console.log(episodesMap)

    this.setState({
      episodesMap,
      loading: false
    })
  }


  render() {
    let grid = (<div>loading list</div>)

    if (!this.state.loading) {
      grid = <Grid groups={this.state.episodesMap} RenderComponent={MemoEp}
        listOrder={this.state.listOrder} orderChange={this.saveChanges}></Grid>
    }

    console.log(this)
    return (
      <UserContext.Provider value={this.state.user}>
      <div>
        <Header></Header>
        {grid}
      </div>
      </UserContext.Provider>
    );

  }
}

export default App;
