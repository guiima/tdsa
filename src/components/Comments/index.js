import React, { useEffect, useState } from "react";
import CommentsForm from "./components/CommentsForm";
import CommentsTable from "./components/CommentsTable";

import { getComments } from "../../services/comments";

import { Container } from "./styles";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(postId)
      .then((response) => {
        setComments(response);
      })
      .catch((err) => {
        console.log("err", Error);
      });
  }, [postId]);

  return (
    <Container>
      <CommentsForm postId={postId} />
      <CommentsTable comments={comments} />
    </Container>
  );
};

export default Comments;
