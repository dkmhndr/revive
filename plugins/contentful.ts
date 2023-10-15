// eslint-disable-next-line
import contentful, { createClient } from "contentful";

// eslint-disable-next-line
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const createClientFunc =
    process.env.NODE_ENV === "development"
      ? createClient
      : contentful.createClient;

  const client = createClientFunc({
    space: `${config.public.ctfSpaceId}`,
    accessToken: `${config.public.ctfDeliveryToken}`,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});
