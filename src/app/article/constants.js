import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import dotenv from "dotenv";

dotenv.config();
const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

const fetchData = async () => {
  const graphQLClient = new GraphQLClient(endpoint, {
    method: `GET`,
    jsonSerializer: {
      parse: JSON.parse,
      stringify: JSON.stringify,
    },
  });

  const query = gql`
    query articleCardData {
      articleCards(first: 100) {
        date
        slug
        stage
        title
        updatedAt
        description {
          html
          markdown
        }
        image {
          url
          width
          height
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  return data;
};

export default fetchData;
