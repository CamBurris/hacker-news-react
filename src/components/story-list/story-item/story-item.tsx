import React from "react";
import { GetStoriesQuery } from "generated/graphql";
import styles from "./story-item.module.css";
import { Link } from "react-router-dom";

type StoryItemProps = {
  story: GetStoriesQuery["stories"][0];
};

const StoryItem: React.FC<StoryItemProps> = ({
  story: { score, by, title, url, id, descendants }
}) => {
  return (
    <div className={styles.story}>
      <a href={url} rel="noopener noreferrer" target="_blank">
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      </a>
      <div className={styles.info}>
        {score} points | {by} |{" "}
        <Link to={`/story/${id}`}>
          {descendants ? `${descendants} Comments` : "Discuss"}
        </Link>
      </div>
    </div>
  );
};

export default StoryItem;
