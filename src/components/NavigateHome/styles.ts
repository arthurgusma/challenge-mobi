import { Link } from "react-router";
import styled from "styled-components";

export const DashboardLink = styled(Link)`
  color: #0284c7;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;