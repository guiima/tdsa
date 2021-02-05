import React from "react";
import Table from "../../components/Table";
import PostModal from "../../components/PostModal";

import { Container, Title, Top } from "./styles";

const Posts = () => {
  return (
    <Container>
      <Top>
        <Title>Posts</Title>
        <PostModal textButton="New post" />
      </Top>
      <Table />
    </Container>
  );
};

export default Posts;
