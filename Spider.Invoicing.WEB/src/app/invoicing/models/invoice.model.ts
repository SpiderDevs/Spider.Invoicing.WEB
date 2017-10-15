export interface Invoice {
    id: number;
    invoiceNumber: string;
    createdAt: Date;
    grossAmmount: Number;
    netAmount: Number;
    vatAmount: Number;
}