import { Status } from "@mmisty/cypress-allure-adapter/plugins/allure-types";
import AddEmployeeDialogHelper from "../../../helpers/PIM-page/add-employee-dialog/add-employee-dialog-helper";
import CreateClaimRequestHelper from "../../../helpers/claim-page/submit-claim-tab/create-claim-request-helper";

export default class EmployeeClaimsTab {

    static elements = {
        mainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        pageHeader: () => cy.get('.oxd-topbar-header'),
        inputFields: () => cy.get('.oxd-input-group'),
        Btns: () => cy.get('.oxd-button'),

    }

    static goToClaimPage() {
        this.elements.mainMenuItems().contains('Claim').click();
        this.checkClaimPageTitle()
    }
    static checkClaimPageTitle() {
        this.elements.pageHeader().children().eq(0).should('contain', 'Claim')
    }
    static searchEmployeeName() {
        const EmpFullName = AddEmployeeDialogHelper.getEmpFullName();
        this.elements.inputFields()
            .contains('Employee Name')
            .getByPlaceholder('Type for hints...')
            .eq(0)
            .type(EmpFullName)

        cy.get('.oxd-autocomplete-dropdown')
            .children()
            .contains(EmpFullName)
            .click()

        this.clickSearch()
    }
    static clickSearch() {
        this.elements.Btns().contains('Search').click();
    }
    static clickViewDetails() {
        this.elements.Btns().contains('View Details').click();
    }
    static clickApprove() {
        this.elements.Btns().contains('Approve').click();
    }
    static clickReject() {
        this.elements.Btns().contains('Reject').click();
    }
    static verifyTableCell(cellToVerify: string, cellValue: string) {
        const EmpFnLn = AddEmployeeDialogHelper.getEmpFirstName() + ' ' + AddEmployeeDialogHelper.getEmpLastName();
        cy.get('.oxd-table-header-cell').contains(cellToVerify).invoke('index').then((headerIndex) => {
            // Find the row containing the specified value under 'Reference Id'
            cy.get('.oxd-table-body .oxd-table-row').contains(EmpFnLn)
                .closest('.oxd-table-row')
                // Find the cell under the specified header in the found row
                .find('.oxd-table-cell').eq(headerIndex)
                // Assert that the text in the cell matches the expected value
                .should('have.text', cellValue);
        });
    }
    static verifySubmittedDate() {

        const ReferenceId = CreateClaimRequestHelper.getReferenceId();

        // Extract year, month, and day from the input string
        const year = ReferenceId.slice(0, 4);
        const month = ReferenceId.slice(4, 6);
        const day = ReferenceId.slice(6, 8);

        // Create a formatted date string
        const ExpectedSubmittedDate = `${year}-${month}-${day}`;

        this.verifyTableCell('Submitted Date', ExpectedSubmittedDate);
    }
    static verifyStatus(approve: boolean) {
        const ExpectedStatus = approve ? 'Paid' : 'Rejected';
        this.verifyTableCell('Status', ExpectedStatus);
    }
    static verifyAmount() {
        let ExpectedAmount = CreateClaimRequestHelper.getExpenseAmount();
        // Format the number with commas and two decimal places
        const formattedNumber = ExpectedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        this.verifyTableCell('Amount', formattedNumber);
    }
}