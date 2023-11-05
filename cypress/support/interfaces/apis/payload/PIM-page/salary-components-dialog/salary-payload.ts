
export interface ICreateSalaryPayload {
    salaryComponent:  string;
    salaryAmount:     string;
    payGradeId:       string;
    currencyId:       string;
    payFrequencyId:   string;
    comment:          null;
    addDirectDeposit: boolean;
}
