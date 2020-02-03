import React from "react";
import { GetStoryQuery } from "generated/graphql";
import StoryComment from "./story-comment/story-comment";
import styles from "./story-comments.module.css";

type StoryCommentsProps = {
  comments: GetStoryQuery["story"]["comments"];
  level: number;
  hide: boolean;
};

const StoryComments: React.FC<StoryCommentsProps> = ({
  comments,
  level,
  hide
}) => {
  return (
    <div className={hide ? styles.hide : ""}>
      {comments &&
        comments.map(comment => {
          return (
            <StoryComment key={comment.id} comment={comment} level={level} />
          );
        })}
    </div>
  );
};

export default StoryComments;
