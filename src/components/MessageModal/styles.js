import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  max-height: 200;
  padding: 0px 20px;
`;

export const BodyModal = styled.div`
  max-height: 200px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Message = styled.span`
  font-size: 20px;
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
    maxWidth: 300,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
