
import ExpenseTypeInit from "../../../initializers/claim-page/expense-types-dialog/expense-type-init";
import { ICreateCommonDeletePayload } from "../../../interfaces/apis/payload/common-payload/delete-payload";
import CommonAPIHelper from "../../common-helpers/api-helpers/common-api-helper";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

class ExpenseTypesHelper {

    private static ExpenseTypeName: string;
    private static ExpenseTypeId: number;

    static setExpenseTypeName(ExpenseTypeName: string) {
        this.ExpenseTypeName = ExpenseTypeName;
    }
    static getExpenseTypeName(): string {
        return this.ExpenseTypeName;
    }
    static setExpenseTypeId(ExpenseTypeId: number) {
        this.ExpenseTypeId = ExpenseTypeId;
    }
    static getExpenseTypeId(): number {
        return this.ExpenseTypeId;
    }

    static addExpenseType() {
        ExpenseTypeInit.initExpenseType().then((payload) => {
            cy.addExpenseType('POST', URLs.expenseType, payload).then((response) => {
                this.setExpenseTypeName(response.data.name);
                this.setExpenseTypeId(response.data.id)
            })
        })
    }

    static deleteExpenseType() {
        CommonAPIHelper.delete(URLs.expenseType, [this.getExpenseTypeId()])
    }
}
export default ExpenseTypesHelper;