import AddEmployeeDialogHelper from "../../../helpers/PIM-page/add-employee-dialog/add-employee-dialog-helper";

export default class EmployeeClaimsTab {

    static elements = {
        mainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        pageHeader: () => cy.get('.oxd-topbar-header'),
        inputFields: () => cy.get('.oxd-input-group'),
        Btns: () => cy.get('.oxd-button'),
        
    }

    static goToClaimPage(){
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
    static clickSearch(){
        this.elements.Btns().contains('Search').click();
    }
    static clickViewDetails(){
        this.elements.Btns().contains('View Details').click();
    }
    static clickApprove(){
        this.elements.Btns().contains('Approve').click();
    }
    static clickReject(){
        this.elements.Btns().contains('Reject').click();
    }

}