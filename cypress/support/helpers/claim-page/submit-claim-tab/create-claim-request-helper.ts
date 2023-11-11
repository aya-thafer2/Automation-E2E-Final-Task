
import AttachExpenseInit from "../../../initializers/claim-page/submit-claim-tab/attach-expense-init";
import ClaimRequestInit from "../../../initializers/claim-page/submit-claim-tab/claim-request-init";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

export default class CreateClaimRequestHelper {

    private static ClaimId: number;
    private static ExpenseId: number;
    private static ReferenceId: string;
    private static ExpenseAmount: number;

    static setClaimId(ClaimId: number) {
        this.ClaimId = ClaimId;
    }
    static getClaimId(): number {
        return this.ClaimId;
    }
    static setReferenceId(ReferenceId: string) {
        this.ReferenceId = ReferenceId;
    }
    static getReferenceId(): string {
        return this.ReferenceId;
    }

    static setExpenseId(ExpenseId: number) {
        this.ExpenseId = ExpenseId;
    }
    static getExpenseId(): number {
        return this.ExpenseId;
    }
    static setExpenseAmount(ExpenseAmount: number) {
        this.ExpenseAmount = ExpenseAmount;
    }
    static getExpenseAmount(): number {
        return this.ExpenseAmount;
    }

    static createClaimRequest() {
        ClaimRequestInit.initClaimRequest().then((payload) => {
            cy.createClaimRequest('POST', URLs.claim, payload).then((response) => {
                this.setClaimId(response.data.id);
                this.setReferenceId(response.data.referenceId)
            }).then(() => {
                this.attachExpense();
                this.submitClaim();
            })
        })
    }
    static attachExpense() {
        cy.attachExpense('POST', URLs.attachExpense(this.getClaimId()), AttachExpenseInit.initAttachExpense()).then((response) => {
            this.setExpenseId(response.data.id);
            this.setExpenseAmount(response.data.amount);
        })
    }
    static submitClaim() {
        const Payload = { action: "SUBMIT" }
        cy.submitClaim('PUT', URLs.submitClaim(this.getClaimId()), Payload)
    }
}