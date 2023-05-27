export const getShortAddress = (account: string): string => (
    `${account.slice(0, 4)}...${account.slice(account.length - 2)}`
);