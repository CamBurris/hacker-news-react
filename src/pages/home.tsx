import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GetStoriesQuery } from "generated/graphql";
import StoryList from "components/story-list/story-list";

const GET_STORIES = gql`
  query GetStories {
    stories {
      by
      title
      score
      url
      descendants
      time
      id
    }
  }
`;

const Home: React.FC = () => {
  const { data, error } = useQuery<GetStoriesQuery>(GET_STORIES);

  if (error || !data) {
    return null;
  }

  return (
    <div>
      <StoryList stories={data.stories} />
    </div>
  );
};

export default Home;
