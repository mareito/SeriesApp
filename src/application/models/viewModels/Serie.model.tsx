export interface ISeason {
  id: number;
  episodeCount: number;
  seasonNumber: number;
  name: string;
}

export interface ISerie {
  id: number;
  name: string;
  overview: string;
  score: number;
  backdropImage: string;
  posterImage: string;
  numberOfSeasons?: number;
}

export interface ISerieDetails extends ISerie {
  seasons: ISeason[];
}
