import React, { useState } from "react";
import StoryComments from "../story-comments";
import styles from "./story-comment.module.css";
import StoryCommentMore from "../story-comment-more/story-comment-more";
import { GetStoryQuery } from "generated/graphql";
import { Link } from "react-router-dom";

// Since we only load to a certain level of comments, the comments field is
// null for some comments passed in. This doesn't match the generated comment
// type, so create a custom one instead.
type CommentProp = {
  by: string;
  id: number;
  text: string;
  score: number;
  descendants: number;
  comments?: GetStoryQuery["story"]["comments"];
  deleted: boolean;
  time: number;
};

type StoryCommentProps = {
  comment: CommentProp;
  level: number;
};

const StoryComment: React.FC<StoryCommentProps> = ({ comment, level }) => {
  const [hideChildren, setHideChildren] = useState(false);
  const { by, id, text, time, descendants, comments = [], deleted } = comment;

  const colorMap = ["#ffb86c", "#8be9fd", "#50fa7b", "#ff5555"];
  const color = colorMap[level % 4];
  const date = new Date(time * 1000);

  return (
    <div>
      <button
        className={styles.comment}
        type="button"
        onClick={() => setHideChildren(!hideChildren)}
      >
        <div style={{ minWidth: `${4 * level}px` }} />
        <div style={{ minWidth: "4px", background: `${color}` }} />
        <div className={styles.commentContent}>
          {!deleted && (
            <div>
              <div className={styles.info}>
                <Link to={`/user/${by}`}>{by} </Link>
                <span> · {date.toLocaleString()}</span>
                <span
                  className={`${styles.childCount} ${
                    !hideChildren || descendants === 0
                      ? styles.hideChildCount
                      : ""
                  }`}
                >
                  +{descendants}
                </span>
              </div>
              <div
                className={styles.commentText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          )}
          {deleted && <div>[deleted]</div>}
        </div>
      </button>
      <StoryComments
        comments={comments}
        level={level + 1}
        hide={hideChildren}
      />
      {descendants !== comments.length && (
        <StoryCommentMore
          parentId={id}
          descendants={descendants}
          loadedChildren={comments.length}
          level={level + 1}
          hide={hideChildren}
        />
      )}
    </div>
  );
};

export default StoryComment;
