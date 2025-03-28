import { Outlet } from "react-router";
import { Container } from "./styles";

export function ResultLayout() {

    return (
        <Container >
             <Outlet />
        </Container>
    )
}