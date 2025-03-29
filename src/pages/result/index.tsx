import { Link, useSearchParams } from "react-router";
import { useGetVehiclePriceQuery } from "@/services/apiFipe";
import { Container, Description, PriceDisplay, Title } from "./styles";

export default function ResultsPage() {
  const [ searchParams ] = useSearchParams()
  
  const brand = searchParams.get('brand') || ''
  const model = searchParams.get('model') || ''
  const year = searchParams.get('year') || ''

  const { data, error, isLoading } = useGetVehiclePriceQuery({
    brandCode: brand, 
    modelCode: model, 
    yearCode: year,
  }, {
    skip: !brand || !model || !year
  })

  if (isLoading) return <Container>Loading...</Container>
  if (error) return <Container>Erro consultano preço, voltar para a <Link to={"/pesquisa"}>Pesquisa Tabela Fipe</Link></Container>

  return (
    <Container>
        <Title>Tabela Fipe: Preço {data?.Marca} {data?.Modelo} {data?.AnoModelo}</Title>
        <PriceDisplay>
          {data?.Valor}
        </PriceDisplay>
        <Description>Este é o preço da compra do veículo</Description>
    </Container>
  );
};
