export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: "Comment";
  id: Scalars["Int"];
  dead: Scalars["Boolean"];
  deleted: Scalars["Boolean"];
  by: Scalars["String"];
  descendants: Scalars["Int"];
  score: Scalars["Int"];
  time: Scalars["Int"];
  text: Scalars["String"];
  type: ItemType;
  comments: Array<Comment>;
};

export type CommentCommentsArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export enum ItemType {
  Story = "STORY",
  Job = "JOB",
  Comment = "COMMENT",
  Poll = "POLL",
  Pollopt = "POLLOPT"
}

export type Query = {
  __typename?: "Query";
  stories: Array<Story>;
  comments: Array<Comment>;
  story: Story;
};

export type QueryStoriesArgs = {
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryCommentsArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  parentId: Scalars["Int"];
};

export type QueryStoryArgs = {
  id: Scalars["Int"];
};

export type Story = {
  __typename?: "Story";
  id: Scalars["Int"];
  descendants: Scalars["Int"];
  by: Scalars["String"];
  score: Scalars["Int"];
  time: Scalars["Int"];
  title: Scalars["String"];
  type: ItemType;
  url: Scalars["String"];
  comments: Array<Comment>;
  text: Scalars["String"];
};

export type StoryCommentsArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type GetCommentsMoreQueryVariables = {
  id: Scalars["Int"];
  offset?: Maybe<Scalars["Int"]>;
};

export type GetCommentsMoreQuery = { __typename?: "Query" } & {
  comments: Array<
    { __typename?: "Comment" } & {
      comments: Array<
        { __typename?: "Comment" } & {
          comments: Array<{ __typename?: "Comment" } & CommentsMoreFragment>;
        } & CommentsMoreFragment
      >;
    } & CommentsMoreFragment
  >;
};

export type CommentsMoreFragment = { __typename?: "Comment" } & Pick<
  Comment,
  "by" | "score" | "text" | "descendants" | "dead" | "deleted" | "time" | "id"
>;

export type GetStoriesQueryVariables = {};

export type GetStoriesQuery = { __typename?: "Query" } & {
  stories: Array<
    { __typename?: "Story" } & Pick<
      Story,
      "by" | "title" | "score" | "url" | "descendants" | "time" | "id"
    >
  >;
};

export type GetStoryQueryVariables = {
  id: Scalars["Int"];
};

export type GetStoryQuery = { __typename?: "Query" } & {
  story: { __typename?: "Story" } & Pick<
    Story,
    "by" | "score" | "time" | "descendants" | "title" | "url" | "id" | "text"
  > & {
      comments: Array<
        { __typename?: "Comment" } & {
          comments: Array<
            { __typename?: "Comment" } & {
              comments: Array<
                { __typename?: "Comment" } & {
                  comments: Array<{ __typename?: "Comment" } & CommentFragment>;
                } & CommentFragment
              >;
            } & CommentFragment
          >;
        } & CommentFragment
      >;
    };
};

export type CommentFragment = { __typename?: "Comment" } & Pick<
  Comment,
  "by" | "deleted" | "dead" | "score" | "time" | "text" | "id" | "descendants"
>;
