import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div``;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleForm = styled.h3``;

export const useStyles = makeStyles(() => ({
  input: {
    marginTop: 10,
  },
}));
