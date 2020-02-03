import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GetStoryQuery } from "generated/graphql";
import { useParams } from "react-router-dom";
import StoryDetails from "components/story/story-details/story-details";

const GET_STORY = gql`
  query getStory($id: Int!) {
    story(id: $id) {
      by
      score
      time
      descendants
      title
      url
      id
      text
      comments {
        ...Comment
        comments {
          ...Comment
          comments {
            ...Comment
            comments {
              ...Comment
            }
          }
        }
      }
    }
  }

  fragment Comment on Comment {
    by
    deleted
    dead
    score
    time
    text
    id
    descendants
  }
`;

const Story: React.FC = () => {
  const { storyId } = useParams();
  const storyIdNumber = parseInt(storyId || "");
  const { data, error } = useQuery<GetStoryQuery>(GET_STORY, {
    variables: { id: storyIdNumber }
  });

  if (!data || error) {
    return null;
  }

  return <StoryDetails story={data.story} />;
};

export default Story;
