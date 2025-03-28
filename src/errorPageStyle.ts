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

export const ErrorTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: #333;
`;

export const ErrorText = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

export const ErrorDetails = styled.pre`
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
`;

export const DashboardLink = styled(Link)`
  color: #0284c7;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;