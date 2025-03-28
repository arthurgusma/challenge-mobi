import { Link } from "react-router";
import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  padding: 1rem;
`;

export const DashboardLink = styled(Link)`
  color: #0284c7;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;