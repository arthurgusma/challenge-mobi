import styled from "styled-components";
import { Select, FormControl, styled as styledMui, Button } from "@mui/material";

export const StyledFormControl = styledMui(FormControl)({
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    "& .MuiInputBase-root": {
    backgroundColor: "white !important",
  },
});

export const StyledSelect = styledMui(Select)({
    backgroundColor: "white",
    "&::before": { borderBottom: "none !important" },
});

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const StyledButton = styledMui(Button)({
    backgroundColor: "#673ab7",
    padding: 10,
    paddingInline: 40,
})