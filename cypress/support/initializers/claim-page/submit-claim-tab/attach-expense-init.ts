import ExpenseTypesHelper from "../../../helpers/claim-page/expense-types-dialog/expense-type-helper";
import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateAttachExpensePayload } from "../../../interfaces/apis/payload/claim-page/submit-claim-tab/attach-expense-payload";
import moment from 'moment';

export default class AttachExpenseInit {

    private static Payload: ICreateAttachExpensePayload;
    static setPayload(Payload: ICreateAttachExpensePayload) {
        this.Payload = Payload;
    }
    static getPayload(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Payload;
        });
    }

    static initAttachExpense() {
        const ExpenseTypeId = ExpenseTypesHelper.getExpenseTypeId()
        const AttachExpensePayload = {
            expenseTypeId: ExpenseTypeId,
            date: moment().format('YYYY-MM-DD').toString(),
            amount: GenericHelper.genericRandomNumberFourDigits().toString(),
            note: GenericHelper.genericRandomSentence()
        }
        return AttachExpensePayload
    }
}