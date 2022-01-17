import React from 'react';
import './App.scss';
import Header from './components/header';
import { Episode, EpisodeItem, MemoEp } from './components/row';
import { data } from "./all_episodes";
import { ranks, rankingMap } from './ranks';
import { Grid } from './components/sortable';

const colors = ['#EE324B', '#4D7DBD', '#00B8C4'] //, '#FFE11D'];

function App() {
  const episodes: Episode[] = data.map(ep => {
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

  const eposidesMap: any = {};

  episodes.forEach(ep => {
    const id = ep.season.toString() + (ep.episode < 10 ? '0' : '') + ep.episode.toString()
    let tier = "u"
    if (id in rankingMap) {
      tier = rankingMap[id].tier;
    }
    if (!(tier in eposidesMap)) {
      eposidesMap[tier] = [];
    }
    eposidesMap[tier].push(ep);

  })

  const listOrder = ['s', 'a', 'b', 'c', 'd', 'f', 'u'];

  return (
    <div>
      <Header></Header>
      <button onClick={() => {console.log("click")}}>click</button>
      <Grid groups={eposidesMap} RenderComponent={MemoEp} listOrder={listOrder}></Grid>
    </div>
  );
}

export default App;
