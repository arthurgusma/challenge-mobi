import { Container } from "./404styles";
import NavigateHome from "./components/NavigateHome";

export function NotFound() {
    return (
        <Container>
            <h1>Página não encontrada</h1>
            <p>
                Voltar para a{` `}
                <NavigateHome />
            </p>
        </Container>
    )
}