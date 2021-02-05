import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  max-height: 500px;
  padding: 0px 20px;
`;

export const HeaderModal = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

export const TitleModal = styled.h2``;

export const BodyModal = styled.div`
  max-height: 400px;
  overflow: scroll;
`;

export const FooterModal = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxWidth: 800,
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
