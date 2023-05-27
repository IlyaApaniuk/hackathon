export default interface IPool {
    address: string;
    tokenId: number;
    maxAmount: number;
    totalAmount: number;
    endTime: number;
    minParticipation: number;
    itemId: number;
    collection: string;
    marketplace: string;
    poolFinished: boolean;
    poolSuccessful: boolean;
}

export const poolConfig = {

}
