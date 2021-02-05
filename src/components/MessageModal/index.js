import React, { useEffect, useState, useRef } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { messageTypes } from "../../redux/types/message";

import {
  Container,
  BodyModal,
  FooterModal,
  useStyles,
  Message,
} from "./styles";

const PostModal = ({ post, textButton }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const openMessage = useSelector((state) => state.message.openMessage);
  const message = useSelector((state) => state.message.messsage);

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
    if (openMessage) {
      setOpen(true);
      dispatch({
        type: messageTypes.OPEN_MESSAGE,
        payload: false,
      });
    }
  }, [openMessage, dispatch]);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Container>
        <BodyModal>
          <Message>{message}</Message>
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
