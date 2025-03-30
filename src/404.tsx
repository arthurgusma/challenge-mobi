import { Container } from "./404styles";
import NavigateHome from "./components/NavigateHome";

export function NotFound() {
    return (
        <Container>
            <h1>Página não encontrada</h1>
            <h3>Voltar ara a{` `}</h3>
            <NavigateHome />
        </Container>
    )
}