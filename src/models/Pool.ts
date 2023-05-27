export default interface IPool {
    id?: number;
    totalAmount: number;
    currentAmount: number;
    numberOfParticipants: number;
    assetAddress: string;
    assetTokenId: string;
    description: string;
}