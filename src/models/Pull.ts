export default interface IPull {
    id?: number;
    totalAmount: number;
    currentAmount: number;
    numberOfParticipants: number;
    assetAddress: string;
    assetTokenId: string;
    description: string;
}