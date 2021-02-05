import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  margin-top: 20px;
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleForm = styled.h3``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;

export const Erros = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.background};
`;

export const useStyles = makeStyles(() => ({
  input: {
    marginTop: 10,
  },
}));
