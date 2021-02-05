import React from "react";
import Table from "../../components/Table";
import PostModal from "../../components/PostModal";

import { useSelector } from "react-redux";

import { Container, Title, Top } from "./styles";

const Posts = () => {
  const commentes = useSelector((state) => state.comments.comment);

  return (
    <Container>
      <Top>
        {console.log("commentssss", commentes)}
        <Title>Posts</Title>
        <PostModal textButton="New post" />
      </Top>
      <Table />
    </Container>
  );
};

export default Posts;
