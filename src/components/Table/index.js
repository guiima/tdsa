import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";
import { getPosts } from "../../services/posts";
import TablePaginationActions from "./TablePaginationActions";

import { Container } from "./styles";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
    maxWidth: 900,
  },
});

const TableComponent = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const getAllPosts = () => {
    getPosts()
      .then((response) => {
        setPosts(response);
      })
      .catch((err) => {
        console.log("err");
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, posts.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">UserId</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Body</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? posts.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : posts
            ).map((post) => (
              <TableRow key={post.id}>
                <TableCell align="center" component="th" scope="row">
                  {post.userId}
                </TableCell>
                <TableCell align="center">{post.title}</TableCell>
                <TableCell align="center">{post.body}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    className={classes.margin}
                    onClick={() => console.log("edit postId", post.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    className={classes.margin}
                    onClick={() => console.log("delete postId", post.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={posts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableComponent;
