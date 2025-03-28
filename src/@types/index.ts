export interface Brand {
    codigo: string;
    nome: string;
}
  
export interface ModelResponse {
    modelos: Model[];
}
  
export interface Model {
    codigo: string;
    nome: string;
}
  
export interface Year {
    codigo: string;
    nome: string;
}
  
export interface VehiclePrice {
    TipoVeiculo: number;
    Valor: string;
    Marca: string;
    Modelo: string;
    AnoModelo: number;
    Combustivel: string;
    CodigoFipe: string;
    MesReferencia: string;
    SiglaCombustivel: string;
}