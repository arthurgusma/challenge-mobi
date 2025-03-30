import { useGetVehiclePriceQuery } from "@/services/apiFipe";
import { Container, Description, PriceDisplay, Title } from "./styles";
import NavigateHome from "@/components/NavigateHome";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

export default function ResultsPage() {
  const { brand, model, year } = useSelector((state: RootState) => state.vehicleSearch);

  const { data, error, isLoading } = useGetVehiclePriceQuery({
    brandCode: brand, 
    modelCode: model, 
    yearCode: year,
  }, {
    skip: !brand || !model || !year
  })

  if (isLoading) return <Container><h3>Carregando...</h3></Container>
  if (error) return <Container><h3>Erro ao consultar preço, volte para a</h3><NavigateHome /></Container>
  if (!brand || !model || !year) return <Container><h3>Nenhum veículo infromado, volte para a</h3><NavigateHome /></Container>

  return (
    <Container>
        <Title data-testid="header-title">Tabela Fipe: Preço {data?.Marca} {data?.Modelo} {data?.AnoModelo}</Title>
        <PriceDisplay data-testid="display-price">
          {data?.Valor}
        </PriceDisplay>
        <Description>Este é o preço da compra do veículo</Description>
    </Container>
  );
};
