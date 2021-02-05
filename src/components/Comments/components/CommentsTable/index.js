import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { commentsTypes } from "../../../../redux/types/comments";

import { useStyles } from "./styles";

const CommentsTable = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  const commentsRedux = useSelector((state) => state.comments.comment);
  const clearTable = useSelector((state) => state.comments.clearTableComments);

  useEffect(() => {
    if (data) {
      setComments(data);
    }
  }, [data]);

  useEffect(() => {
    if (Object.keys(commentsRedux).length > 0) {
      setComments([commentsRedux, ...comments]);
      dispatch({
        type: commentsTypes.SET_COMMENT,
        payload: {},
      });
    }
  }, [commentsRedux, comments, dispatch]);

  useEffect(() => {
    if (clearTable) {
      setComments([]);
      dispatch({
        type: commentsTypes.CLEAR_TABLE_COMMENT,
        payload: false,
      });
    }
  }, [clearTable, dispatch]);

  return (
    <>
      {comments.length > 0 && (
        <TableContainer className={classes.container} component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comments.map((comment, index) => (
                <TableRow key={index}>
                  <TableCell>{comment.name}</TableCell>
                  <TableCell>{comment.email}</TableCell>
                  <TableCell>{comment.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default CommentsTable;
