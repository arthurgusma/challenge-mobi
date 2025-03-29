import { useRouteError } from 'react-router'
import { DashboardLink, ErrorContainer } from './errorPageStyle'

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
        <DashboardLink to="/" className="text-sky-600 dark:text-sky-400">
          Busca Tabel Fipe
        </DashboardLink>
      </p>
    </ErrorContainer>
  )
}