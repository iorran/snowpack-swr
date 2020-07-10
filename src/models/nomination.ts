export enum Status { 'Nominated', 'Pending Draft' };

export interface Nomination {
  id: string;
  agent: string;
  last3Cargoes: string;
  productId: string;
  ownVatNo: string;
  vettingReference: string;
  warehouseAddress: string;
  warehouseNo: string;
  warehouseTaxNo: string;
  productReceiverVat: string;
  documentType: string;
  clientClauseDetails: string;
  status: string;
}
