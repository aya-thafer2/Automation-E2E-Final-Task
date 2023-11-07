export interface ICreateSalaryResponse {
    data: {
        id: number;
        amount: string;
        salaryName: string;
        comment: null;
        payPeriod: {
            id: string;
            name: string;
        };
        payGrade: {
            id: number;
            name: string;
        };
        currencyType: {
            id: string;
            name: string;
        };
        directDebit: {
            id: null;
            routingNumber: null;
            account: null;
            amount: null;
            accountType: null;
        };
    };
    meta: {
        empNumber: number;
    };
    rels: any[];
}
