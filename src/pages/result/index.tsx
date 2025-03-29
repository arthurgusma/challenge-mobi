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

  if (isLoading) return <Container>Loading...</Container>
  if (error) return <Container>Erro consultano preço, voltar para a <NavigateHome /></Container>

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
