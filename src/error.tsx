import { useRouteError } from 'react-router'
import { ErrorContainer } from './errorPageStyle'
import NavigateHome from './components/NavigateHome'

export default function Error() {
  const error = useRouteError() as Error
  return (
    <ErrorContainer>
      <h1>Whoops, algo aconteceu...</h1>
      <p>
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p>
        Voltar para a{' '}
        <NavigateHome />
      </p>
    </ErrorContainer>
  )
}