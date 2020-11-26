import { createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { ME_QUERY, FIND_POSTS } from "./queries";

export const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: { credentials: "include" },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          logout: (result, args, cache, info) => {
            cache.updateQuery({ query: ME_QUERY }, (data) => {
              return { ...data, me: null };
            });
          },
          logout: (result, args, cache, info) => {
            cache.updateQuery(
              {
                query: FIND_POSTS,
                variables: {
                  limit: 1,
                  cursor: null,
                },
              },
              (data) => {
                console.log(data);
                return { ...data, posts: [...data.posts, result] };
              }
            );
          },
          login: (result, args, cache, info) => {
            cache.updateQuery({ query: ME_QUERY }, (data) => {
              return { ...data, me: result.login.user };
            });
          },
          createPost: (result, args, cache, info) => {
            cache.updateQuery(
              {
                query: FIND_POSTS,
                variables: {
                  limit: 1,
                  cursor: null,
                },
              },
              (data) => {
                return { ...data, posts: [...data.posts, result] };
              }
            );
          },
          deletePost: (result, args, cache, info) => {
            cache.updateQuery(
              {
                query: FIND_POSTS,
                variables: {
                  limit: 1,
                  cursor: null,
                },
              },
              (data) => {
                return { ...data, posts: [...data.posts, result] };
              }
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});
