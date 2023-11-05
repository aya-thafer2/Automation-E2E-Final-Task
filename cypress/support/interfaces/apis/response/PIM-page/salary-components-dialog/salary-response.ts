
export interface ICreateSalaryResponse {
    data: Data;
    meta: Meta;
    rels: any[];
}

export interface Data {
    id:           number;
    amount:       string;
    salaryName:   string;
    comment:      null;
    payPeriod:    CurrencyType;
    payGrade:     PayGrade;
    currencyType: CurrencyType;
    directDebit:  DirectDebit;
}

export interface CurrencyType {
    id:   string;
    name: string;
}

export interface DirectDebit {
    id:            null;
    routingNumber: null;
    account:       null;
    amount:        null;
    accountType:   null;
}

export interface PayGrade {
    id:   number;
    name: string;
}

export interface Meta {
    empNumber: number;
}
