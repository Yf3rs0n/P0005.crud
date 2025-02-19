export interface FrutaData {
    id: number;
    nombreFruta: string;
    cantidad: number;
    precioUnitario: number;
    proveedor: string;
    fechaIngreso: string;
}
export interface FrutaDataPut {
    id: number;
    nombreFruta: string;
    cantidad: number;
    precioUnitario: number;
    proveedor: string;
}
export interface FrutaDataPost {
    nombreFruta: string;
    cantidad: number;
    precioUnitario: number;
    proveedor: string;
}

