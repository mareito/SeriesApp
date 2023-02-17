import React, {useState} from 'react';
import {getEpisodeDetails} from '../api/seriesApi';
import {ISerieDetails} from '../../application/models/viewModels/Serie.model';
import {IVewData} from '../../views/screens/episodes/EpisodesScreen';
import {IEpisode} from '../../application/models/viewModels/Episode.model';

const initialData: IVewData = {season: 1, episode: 1};

const useEpisodes = (serie: ISerieDetails) => {
  const [data, setData] = useState<IVewData>({...initialData});
  const [episode, setEpisode] = useState<IEpisode>();
  const [loading, setloading] = useState(false);

  const searchEpisode = async (
    idSerie: number,
    seson: number,
    episode: number,
  ) => {
    const dataEpisode = await getEpisodeDetails(idSerie, seson, episode);
    setEpisode(dataEpisode);
  };

  const nextEpisode = () => {
    const season = serie.seasons[data.season - 1];
    if (data.episode < season.episodeCount) {
      data.episode += 1;
    } else {
      data.episode = 1;
      data.season += 1;
    }
    if (data.season > serie.seasons.length) {
      setData({season: 1, episode: 1});
      return;
    }
    setData({...data});
  };

  const prevEpisode = () => {
    if (data.episode === 1 && data.season === 1) {
      data.season = serie.seasons.length;
      data.episode = serie.seasons[data.season - 1].episodeCount;
    } else {
      data.episode -= 1;
      if (data.episode === 0) {
        data.season -= 1;
        data.episode = serie.seasons[data.season - 1].episodeCount;
      }
    }
    setData({...data});
  };
  return {
    data,
    setloading,
    searchEpisode,
    loading,
    nextEpisode,
    prevEpisode,
    episode,
  };
};

export default useEpisodes;
