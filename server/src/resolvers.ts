import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // tracksForHomeFetch: async () => {
    //   const baseUrl = "https://catstronauts-api.up.railway.app";
    //   const res = await fetch(`${baseUrl}/tracks`);
    //   return res.json();
    // },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    // author: async ({ authorId }, _, { dataSources }) => {
    //   const baseUrl = "https://catstronauts-api.up.railway.app";
    //   const res = await fetch(`${baseUrl}/author/${authorId}`);
    //   return res.json();
    // },
  },
};
