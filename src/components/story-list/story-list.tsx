import React from "react";
import { GetStoriesQuery } from "generated/graphql";
import StoryItem from "./story-item/story-item";

type StoryListProps = {
  stories: GetStoriesQuery["stories"];
};

const StoryList: React.FC<StoryListProps> = ({ stories }) => {
  return (
    <div>
      {stories.map(story => {
        return <StoryItem key={story.id} story={story} />;
      })}
    </div>
  );
};

export default StoryList;
