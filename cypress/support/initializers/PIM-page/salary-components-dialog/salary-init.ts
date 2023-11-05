import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateSalaryPayload } from "../../../interfaces/apis/payload/PIM-page/salary-components-dialog/salary-payload";

export default class SalaryComponentInit {
    private static Payload: ICreateSalaryPayload;

    static setPayload(Payload: ICreateSalaryPayload) {
        this.Payload = Payload;
    }

    static getPayload(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Payload;
        });
    }

    static initSalaryComponent(): Cypress.Chainable<any> {
        cy.fixture('PIM-page/salary-components-dialog/salary-component.json').then((data: any) => {
            const SalaryPayload: ICreateSalaryPayload = {
                salaryComponent: data.salaryComponent,
                salaryAmount: GenericHelper.genericRandomSalaryAmount(),
                payGradeId: data.payGradeId,
                currencyId: data.currencyId,
                payFrequencyId: data.payFrequency,
                comment: data.comment,
                addDirectDeposit: data.addDirectDeposit
            };
            this.setPayload(SalaryPayload);
        });
        return this.getPayload();
    }
}