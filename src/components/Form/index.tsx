import { useState } from "react";
import { useNavigate } from "react-router";
import { useGetBrandsQuery, useGetModelsByBrandQuery, useGetYearsByModelQuery } from "@/services/apiFipe";

import { Container, InputLabel, MenuItem } from "@mui/material";
import { ButtonWrapper, StyledButton, StyledFormControl, StyledSelect } from "./styles";

interface VehicleSearchState {
    brand: string,
    model: string,
    year: string,
}

export default function Form() {
    const [selectedVehicle, setSelectedVehicle] = useState<VehicleSearchState>({
        brand: '',
        model: '',
        year: ''
    })

    const navigate = useNavigate()

    const { 
      data: brands = [], 
      isLoading: isBrandsLoading 
    } = useGetBrandsQuery()
  
    const { 
      data: models = [], 
      isLoading: isModelsLoading 
    } = useGetModelsByBrandQuery(selectedVehicle.brand!, {
      skip: !selectedVehicle.brand
    })
  
    const { 
      data: years = [], 
      isLoading: isYearsLoading 
    } = useGetYearsByModelQuery(
      { brandCode: selectedVehicle.brand!, modelCode: selectedVehicle.model! }, 
      { skip: !selectedVehicle.brand || !selectedVehicle.model }
    )

    function handleSelectBrand(value: string) {
        setSelectedVehicle({
            brand: value,
            model: '',
            year: ''
        });
    }
    
    function handleSelectModel(value: string) {
        setSelectedVehicle({
            ...selectedVehicle,
            model: value,
            year: ''
        });
    }
    
    function handleSelectYear(value: string) {
        setSelectedVehicle({
            ...selectedVehicle,
            year: value
        });
    }

    function handleGetPrice() {
        navigate(
            `/resultado?brand=${selectedVehicle.brand}&model=${selectedVehicle.model}&year=${selectedVehicle.year}`
        )
    }

    return (
        <Container 
            maxWidth="sm" 
            style={{ 
                backgroundColor: "#fff", 
                paddingTop: "20px",
                paddingBottom: "40px",
            }}
        >
            <StyledFormControl fullWidth margin="normal" variant="filled">
                <InputLabel shrink={!!selectedVehicle.brand}>Marca</InputLabel>
                <StyledSelect
                    value={selectedVehicle.brand}
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
                disabled={!selectedVehicle.brand || isModelsLoading}
            >
                <InputLabel shrink={!!selectedVehicle.model}>Modelo</InputLabel>
                <StyledSelect
                    value={selectedVehicle.model}
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

            {selectedVehicle.model && (
                <StyledFormControl
                    fullWidth 
                    variant="filled" 
                    margin="normal" 
                    disabled={!selectedVehicle.brand || isModelsLoading}
                >
                    <InputLabel shrink={!!selectedVehicle.year}>Ano</InputLabel>
                    <StyledSelect
                        value={selectedVehicle.year}
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
                    disabled={!selectedVehicle.year}
                    onClick={handleGetPrice}
                    sx={{ mt: 2 }}
                >
                    Consultar preço
                </StyledButton>
            </ButtonWrapper>
        </Container>
    )
}