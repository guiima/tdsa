import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { Container } from "./styles";
import { getPosts } from "../../services/posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  const goTeste = () => {
    console.log("foi");
    history.push("/teste");
  };

  const columns = [
    { field: "userId", headerName: "UserId", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "body", headerName: "Body", width: 500 },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const teste = () => {
    getPosts()
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log("err1", err);
      });
  };

  useEffect(() => {
    teste();
  }, []);

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => goTeste()}>
        go teste2
      </Button>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </Container>
  );
};

export default Home;
