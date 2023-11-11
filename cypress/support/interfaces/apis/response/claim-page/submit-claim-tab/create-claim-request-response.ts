export interface ICreateClaimRequestResponse {
    data: {
        id: number;
        referenceId: string;
        claimEvent: ClaimEvent;
        currencyType: CurrencyType;
        remarks: null;
        status: string;
    }
    meta: any[];
    rels: any[];
}

export interface ClaimEvent {
    id: number;
    name: string;
    status: boolean;
    isDeleted: boolean;
}

export interface CurrencyType {
    id: string;
    name: string;
}