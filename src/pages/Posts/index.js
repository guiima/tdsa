import React from "react";
import Button from "@material-ui/core/Button";

import Table from "../../components/Table";
import PostModal from "../../components/PostModal";
import { Container, Title, Top } from "./styles";

const Posts = () => {
  return (
    <Container>
      <Top>
        <Title>Posts</Title>
        {/* <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => console.log("new post")}
        >
          New post
        </Button> */}
        <PostModal textButton="New post" />
      </Top>
      <Table />
    </Container>
  );
};

export default Posts;
