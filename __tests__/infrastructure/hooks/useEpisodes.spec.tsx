import {act, renderHook} from '@testing-library/react-native';
import useEpisodes from '../../../src/infrastructure/hooks/useEpisodes';
import {ISerieDetails} from '../../../src/application/models/viewModels/Serie.model';
import {IEpisode} from '../../../src/application/models/viewModels/Episode.model';

describe('Unit test hook useEpisodes', () => {
  const mockSerieDetails: ISerieDetails = {
    id: 123,
    name: 'Breaking Bad',
    overview: 'lorem ipsum dolor sit amet',
    backdropImage: 'https://imagen/image1.jpg',
    posterImage: 'https://imagen/image1.jpg',
    score: 5,
    seasons: [
      {id: 1, name: 'Season 1', episodeCount: 2, seasonNumber: 1},
      {id: 2, name: 'Season 2', episodeCount: 5, seasonNumber: 2},
      {id: 3, name: 'Season 3', episodeCount: 10, seasonNumber: 3},
    ],
    numberOfSeasons: 3,
  };

  const mockEpisode: IEpisode = {
    airDate: '2013-12-10',
    name: 'Episode 1',
    overview: 'Lorem ipsum dolor sit, amet consectetur ',
    voteAverage: 5,
    seasonNumber: 1,
    episodeNumber: 1,
  };

  const getEpisodeDetails = jest
    .fn()
    .mockImplementation(() => Promise.resolve(mockEpisode));

  it('retornar los metodos correctamete', () => {
    const {result} = renderHook(() => useEpisodes(mockSerieDetails));
    const {
      data,
      setloading,
      searchEpisode,
      loading,
      nextEpisode,
      prevEpisode,
      episode,
    } = result.current;

    expect(typeof data).toBe('object');
    expect(typeof setloading).toBe('function');
    expect(typeof loading).toBe('boolean');
    expect(typeof nextEpisode).toBe('function');
    expect(typeof prevEpisode).toBe('function');
    expect(typeof episode).toBe('undefined');
    expect(typeof searchEpisode).toBe('function');
  });

  it('calcular correctamente el proximo capitulo', async () => {
    const {result} = renderHook(() => useEpisodes(mockSerieDetails));
    const {nextEpisode, data} = result.current;

    await act(async () => {
      nextEpisode();
    });

    expect(data).toEqual({season: 1, episode: 2});
  });

  it('calcular correctamente el anterior capitulo', async () => {
    const {result} = renderHook(() => useEpisodes(mockSerieDetails));
    const {prevEpisode, data} = result.current;

    await act(async () => {
      prevEpisode();
    });

    expect(data).toEqual({season: 3, episode: 10});
  });
});
