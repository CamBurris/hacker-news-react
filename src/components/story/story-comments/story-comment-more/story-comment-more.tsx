import React from "react";
import { useLazyQuery, gql } from "@apollo/client";
import styles from "./story-comment-more.module.css";
import StoryComments from "../story-comments";

type StoryCommentMoreProps = {
  parentId: number;
  descendants: number;
  loadedChildren: number;
  level: number;
  hide: boolean;
};

const GET_COMMENTS_MORE = gql`
  query getCommentsMore($id: Int!, $offset: Int) {
    comments(parentId: $id, offset: $offset) {
      ...CommentsMore
      comments {
        ...CommentsMore
        comments {
          ...CommentsMore
        }
      }
    }
  }

  fragment CommentsMore on Comment {
    by
    score
    text
    descendants
    dead
    deleted
    time
    id
  }
`;

const StoryCommentMore: React.FC<StoryCommentMoreProps> = ({
  parentId,
  descendants,
  loadedChildren,
  level,
  hide
}) => {
  const [getComments, { called, data }] = useLazyQuery(GET_COMMENTS_MORE);
  const loadComments = () => {
    if (!called) {
      getComments({ variables: { id: parentId, offset: loadedChildren - 1 } });
    }
  };

  const colorMap = ["#ffb86c", "#8be9fd", "#50fa7b", "#ff5555"];
  const color = colorMap[level % 4];

  if (!data) {
    return (
      <div>
        <button className={styles.button} type="button" onClick={loadComments}>
          <div style={{ minWidth: `${4 * level}px` }} />
          <div style={{ minWidth: "4px", background: `${color}` }} />
          <div className={styles.buttonContent}>Load More</div>
        </button>
      </div>
    );
  }

  return <StoryComments comments={data.comments} level={level} hide={hide} />;
};

export default StoryCommentMore;
