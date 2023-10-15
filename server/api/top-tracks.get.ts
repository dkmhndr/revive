import {
  getSpotifyTopTracks,
  transformTopTracksResponse,
} from "~/composables/services/spotify/top-tracks";

export default defineEventHandler(async (_) => {
  try {
    const response = await getSpotifyTopTracks();

    return transformTopTracksResponse(response);
  } catch {
    return { error: "error" };
  }
});
