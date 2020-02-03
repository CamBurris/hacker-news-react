import React from "react";
import { GetStoryQuery } from "generated/graphql";
import StoryComments from "../story-comments/story-comments";
import styles from "./story-details.module.css";
import { Link } from "react-router-dom";

type StoryDetailsProps = {
  story: GetStoryQuery["story"];
};

const StoryDetails: React.FC<StoryDetailsProps> = ({ story }) => {
  const { title, by, score, url, time, text, comments } = story;
  const date = new Date(time * 1000);

  return (
    <div>
      <div className={styles.details}>
        <a href={url} rel="noopener noreferrer" target="_blank">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        </a>
        <div>
          <Link to={`/user/${by}`}>{by}</Link> · {score} points ·{" "}
          {date.toLocaleString()}
        </div>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>

      <StoryComments comments={comments} level={0} hide={false} />
    </div>
  );
};

export default StoryDetails;
