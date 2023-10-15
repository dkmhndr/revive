type SongImage = {
  url: string;
};

type SongArtist = {
  name: string;
};

type SongAlbum = {
  name: string;
  artists: Array<SongArtist>;
  images: Array<SongImage>;
};

type ExternalUrl = {
  spotify: string;
};

type SongItem = {
  name: string;
  album: SongAlbum;
  external_urls: ExternalUrl;
};

export type GetTopTracksResponse = {
  items: Array<SongItem>;
};

export type GetTopTracksTransformed = {
  trackTitle: string;
  artist: string;
  album: string;
  albumArtUrl: string;
  trackUrl: string;
};
