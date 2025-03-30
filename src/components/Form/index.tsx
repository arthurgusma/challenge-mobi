import { useNavigate } from "react-router";
import { useGetBrandsQuery, useGetModelsByBrandQuery, useGetYearsByModelQuery } from "@/services/apiFipe";
import { setBrand, setModel, setYear } from "@/lib/redux/reducers";
import { RootState } from "@/lib/redux/store";

import { Container, InputLabel, MenuItem } from "@mui/material";
import { ButtonWrapper, StyledButton, StyledFormControl, StyledSelect } from "./styles";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
    const vehicleSearch = useSelector((state: RootState) => state.vehicleSearch);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { 
      data: brands = [], 
      isLoading: isBrandsLoading 
    } = useGetBrandsQuery()
  
    const { 
      data: models = [], 
      isLoading: isModelsLoading 
    } = useGetModelsByBrandQuery(vehicleSearch.brand, {
      skip: !vehicleSearch.brand
    })
  
    const { 
      data: years = [], 
      isLoading: isYearsLoading 
    } = useGetYearsByModelQuery(
      { brandCode: vehicleSearch.brand, modelCode: vehicleSearch.model }, 
      { skip: !vehicleSearch.brand || !vehicleSearch.model }
    )

    function handleSelectBrand(value: string) {
        dispatch(setBrand(value));
    }
    
    function handleSelectModel(value: string) {
        dispatch(setModel(value));
    }
    
    function handleSelectYear(value: string) {
        dispatch(setYear(value));
    }

    return (
        <Container 
            style={{ 
                backgroundColor: "#fff", 
                paddingTop: "20px",
                paddingBottom: "40px",
                width: "500px"
            }}
        >
            <StyledFormControl fullWidth margin="normal" variant="filled">
                <InputLabel shrink={!!vehicleSearch.brand}>Marca</InputLabel>
                <StyledSelect
                    value={vehicleSearch.brand}
                    onChange={(e) => handleSelectBrand(e.target.value as string)}
                    disabled={isBrandsLoading}
                    variant="filled"
                    displayEmpty
                >
                    {isBrandsLoading ? (
                        <MenuItem disabled>Carregando marcas...</MenuItem>
                    ) : (
                        brands.map((marca) => (
                            <MenuItem key={marca.codigo} value={marca.codigo}>
                                {marca.nome}
                            </MenuItem>
                        ))
                    )}
                </StyledSelect>
            </StyledFormControl>

            <StyledFormControl 
                fullWidth 
                variant="filled" 
                margin="normal" 
                disabled={!vehicleSearch.brand || isModelsLoading}
            >
                <InputLabel shrink={!!vehicleSearch.model}>Modelo</InputLabel>
                <StyledSelect
                    value={vehicleSearch.model}
                    onChange={(e) => handleSelectModel(e.target.value as string)}
                    variant="filled"
                    displayEmpty
                >
                    {isModelsLoading ? (
                        <MenuItem disabled>Carregando modelos...</MenuItem>
                    ) : (
                        models.map((modelo) => (
                            <MenuItem key={modelo.codigo} value={modelo.codigo}>
                                {modelo.nome}
                            </MenuItem>
                        ))
                    )}
                </StyledSelect>
            </StyledFormControl>

            {vehicleSearch.model && (
                <StyledFormControl
                    fullWidth 
                    variant="filled" 
                    margin="normal" 
                    disabled={!vehicleSearch.brand || isModelsLoading}
                >
                    <InputLabel shrink={!!vehicleSearch.year}>Ano</InputLabel>
                    <StyledSelect
                        value={vehicleSearch.year}
                        onChange={(e) => handleSelectYear(e.target.value as string)}
                        variant="filled"
                        displayEmpty
                    >
                        {isYearsLoading ? (
                            <MenuItem disabled>Carregando anos...</MenuItem>
                        ) : (
                            years.map((ano) => (
                                <MenuItem key={ano.codigo} value={ano.codigo}>
                                    {ano.nome}
                                </MenuItem>
                            ))
                        )}
                    </StyledSelect>
                </StyledFormControl>
            )}
            <ButtonWrapper>
                <StyledButton
                    variant="contained"
                    disabled={!vehicleSearch.year}
                    onClick={() => navigate('/resultado')}
                    sx={{ mt: 2, textTransform: 'none' }}
                >
                    Consultar preço
                </StyledButton>
            </ButtonWrapper>
        </Container>
    )
}
