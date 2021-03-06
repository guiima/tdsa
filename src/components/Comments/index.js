import React, { useEffect, useState } from "react";
import CommentsForm from "./components/CommentsForm";
import CommentsTable from "./components/CommentsTable";

import { getComments } from "../../services/comments";

import { Container } from "./styles";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(postId).then((response) => {
      setComments(response);
    });
  }, [postId]);

  return (
    <Container>
      <CommentsForm postId={postId} />
      <CommentsTable data={comments} />
    </Container>
  );
};

export default Comments;
