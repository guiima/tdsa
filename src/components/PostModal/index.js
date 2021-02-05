import React, { useEffect, useState, useRef } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { commentsTypes } from "../../redux/types/comments";

import PostForm from "../PostForm";
import Comments from "../Comments";

import {
  Container,
  HeaderModal,
  BodyModal,
  FooterModal,
  TitleModal,
  useStyles,
} from "./styles";

const PostModal = ({ post, textButton }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [postFormSubmit, setPostFormSubmit] = useState(false);
  const [saveAndContinue, setSaveAndContinue] = useState(false);
  const [isComments, setisComments] = useState(false);
  const dispatch = useDispatch();

  const saveComments = useSelector((state) => state.comments.saveCommentAction);
  const refButton = useRef();

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

  useEffect(() => {
    dispatch({
      type: commentsTypes.SET_COMMENT,
      payload: {},
    });
  }, [dispatch]);

  useEffect(() => {
    if (saveComments) {
      if (refButton && refButton.current) {
        refButton.current.click();
        setisComments(true);

        dispatch({
          type: commentsTypes.SAVE_COMMENT,
          payload: false,
        });
      }
    } else {
      setisComments(false);
    }
  }, [saveComments, dispatch]);

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
            saveAndContinue={saveAndContinue}
            afterSubmit={() => {
              setPostFormSubmit(false);
              if (!saveAndContinue && !saveComments && !isComments) {
                setOpen(false);
              }
            }}
          />
          <Comments postId={post ? post.id : undefined} />
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
              dispatch({
                type: commentsTypes.SET_COMMENT,
                payload: {},
              });
              dispatch({
                type: commentsTypes.CLEAR_COMMENT,
                payload: true,
              });
              dispatch({
                type: commentsTypes.CLEAR_TABLE_COMMENT,
                payload: true,
              });
            }}
            className={classes.button}
          >
            Save and continue
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            ref={refButton}
            onClick={() => {
              setSaveAndContinue(false);
              setPostFormSubmit(true);
            }}
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
