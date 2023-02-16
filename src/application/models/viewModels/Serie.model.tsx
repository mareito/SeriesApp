export interface ISeason {
  id: number;
  episodeCount: number;
  seasonNumber: number;
}

export interface ISerie {
  id: number;
  name: string;
  overview: string;
  score: number;
  backdropImage: string;
  posterImage: string;
}

export interface ISerieDetails extends ISerie {
  seasons: ISeason[];
}
