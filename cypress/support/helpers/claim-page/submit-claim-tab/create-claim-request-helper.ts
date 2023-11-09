
import AttachExpenseInit from "../../../initializers/claim-page/submit-claim-tab/attach-expense-init";
import ClaimRequestInit from "../../../initializers/claim-page/submit-claim-tab/claim-request-init";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

export default class CreateClaimRequestHelper {

    private static ClaimId: number;
    private static ExpenseId: number;

    static setClaimId(ClaimId: number) {
        this.ClaimId = ClaimId;
    }
    static getClaimId(): number {
        return this.ClaimId;
    }

    static setExpenseId(ExpenseId: number) {
        this.ExpenseId = ExpenseId;
    }
    static getExpenseId(): number {
        return this.ExpenseId;
    }

    static createClaimRequest() {
        ClaimRequestInit.initClaimRequest().then((payload) => {
            cy.createClaimRequest('POST', URLs.claim, payload).then((response) => {
                this.setClaimId(response.data.id);
            }).then(() => {
                this.attachExpense(); 
            })
        })
    }
    static attachExpense() {    
        cy.attachExpense('POST', URLs.attachExpense(this.getClaimId()), AttachExpenseInit.initAttachExpense()).then((response) => {
            this.setExpenseId(response.data.id);
        })
    }
    static submitClaim() {

    }
}