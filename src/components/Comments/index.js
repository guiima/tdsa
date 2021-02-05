import React from "react";
import CommentsForm from "./components/CommentsForm";
import CommentsTable from "./components/CommentsTable";

import { Container } from "./styles";

const Comments = () => {
  return (
    <Container>
      <CommentsForm />
      <CommentsTable />
    </Container>
  );
};

export default Comments;
