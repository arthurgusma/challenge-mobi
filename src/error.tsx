import { ErrorContainer } from './errorPageStyle'
import NavigateHome from './components/NavigateHome'

export default function Error() {
  return (
    <ErrorContainer>
      <h1>Whoops, algo aconteceu...</h1>
      <h3>
        Um erro aconteceu na aplicação. Volte para a{' '}
      </h3>
      <NavigateHome />
    </ErrorContainer>
  )
}