import { formatUnits } from 'ethers/lib/utils'

export const getShortAddress = (account: string): string => `${account.slice(0, 4)}...${account.slice(account.length - 4)}`;
export const formatHexIntoDecimal = (hex: number): number => parseInt(formatUnits(hex, 18));
