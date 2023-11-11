import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateExpenseTypePayload } from "../../../interfaces/apis/payload/claim-page/expense-types-dialog/add-expense-type-payload";


export default class ExpenseTypeInit {

    private static Payload: ICreateExpenseTypePayload;

    static setPayload(Payload: ICreateExpenseTypePayload) {
        this.Payload = Payload;
    }

    static getPayload(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Payload;
        });
    }

    static initExpenseType(): Cypress.Chainable<any> {
        cy.fixture('claim-page/expense-type-dialog/add-expense-type.json').then((data) => {
            const ExpenseTypePayload = {
                name: data.name + GenericHelper.genericRandomNumberFourDigits().toString(),
                description: GenericHelper.genericRandomSentence().toString(),
                status: data.status
            }
            this.setPayload(ExpenseTypePayload);
        })
        return this.getPayload();
    }
}