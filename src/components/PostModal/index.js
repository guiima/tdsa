import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import PostForm from "../PostForm";
import Comments from "../Comments";

import {
  Container,
  HeaderModal,
  BodyModal,
  FooterModal,
  TitleModal,
} from "./styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxWidth: 600,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    color: "green",
    borderColor: "green",
  },
}));

const PostModal = ({ post, textButton }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [postFormSubmit, setPostFormSubmit] = useState(false);
  const [saveAndContinue, setSaveAndContinue] = useState(false);

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Container>
        <HeaderModal>
          <TitleModal>{post ? "Edit Post" : "New Post"}</TitleModal>
        </HeaderModal>
        <BodyModal>
          <PostForm
            data={post}
            toSubmit={postFormSubmit}
            afterSubmit={() => {
              setPostFormSubmit(false);
              if (!saveAndContinue) {
                setOpen(false);
              }
              setSaveAndContinue(false);
            }}
          />
          <Comments />
        </BodyModal>
        <FooterModal>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setSaveAndContinue(true);
              setPostFormSubmit(true);
            }}
            className={classes.button}
          >
            Save and continue
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => setPostFormSubmit(true)}
          >
            Save
          </Button>
        </FooterModal>
      </Container>
    </div>
  );

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={handleOpen}
      >
        {textButton}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

export default PostModal;
