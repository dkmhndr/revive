import type { GetTopTracksResponse, GetTopTracksTransformed } from "./types";
import { getAccessToken } from "~~/composables/services/spotify/auth/getAccessToken";
const TIME_RANGE = process.env.SPOTIFY_TIME_RANGE || "short_term";
const SPOTIFY_TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=${TIME_RANGE}`;

export const getSpotifyTopTracks = async () => {
  const { access_token: accessToken } = await getAccessToken();
  return $fetch<GetTopTracksResponse>(SPOTIFY_TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const transformTopTracksResponse = (response: GetTopTracksResponse) => {
  const items: Array<GetTopTracksTransformed> = response.items.map((item) => {
    const data: GetTopTracksTransformed = {
      trackTitle: item.name,
      artist: item.album.artists.map(({ name }) => name).join(", "),
      album: item.album.name,
      albumArtUrl: item.album.images[0].url,
      trackUrl: item.external_urls.spotify,
    };
    return data;
  });

  return items;
};
