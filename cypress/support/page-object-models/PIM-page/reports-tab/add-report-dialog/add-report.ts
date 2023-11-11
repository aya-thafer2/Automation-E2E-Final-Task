import AddEmployeeDialogHelper from "../../../../helpers/PIM-page/add-employee-dialog/add-employee-dialog-helper";
import SalaryComponentsDialogHelper from "../../../../helpers/PIM-page/salary-components-dialog/salary-components-dialog-helper";
import JobDialogHelper from "../../../../helpers/admin-page/job-dialog/job-dialog-helper";
import { URLs } from "../../../../helpers/common-helpers/api-helpers/urls-helper";
import GenericHelper from "../../../../helpers/common-helpers/generic-helpers/generic-helper"

class AddReport {

    static elements = {
        inputFields: () => cy.get('.oxd-input-group'),
        dropdownList: () => cy.get('.oxd-select-dropdown'),
        btns: () => cy.get('button'),
        reportNameTitle: () => cy.get('.orangehrm-main-title'),
        tableBody: () => cy.get('.content-wrapper')
    }
    private static ReportName: string;
    static setReportName() {
        this.ReportName = 'Report' + GenericHelper.genericRandomNumberThreeDigits().toString();
    }
    static getReportName(): string {
        return this.ReportName;
    }

    static typeReportName() {
        this.setReportName()
        this.elements.inputFields().contains('Report Name').getByPlaceholder('Type here ...').type(this.getReportName())
    }
    static selectSelectionCriteria(LocationName: string, JobTitleName: string) {
        this.SelectionCriteria('Location', LocationName)
        this.SelectionCriteria('Job Title', JobTitleName)
    }

    static selectDisplayFields() {
        this.DisplayField('Personal', 'Employee First Name')
        this.DisplayField('Job', 'Job Title')
        this.DisplayField('Salary', 'Amount')
    }

    static selectFromDropdownList(label: string, option: string) {
        cy.findLabel(label)
            .closest('.oxd-input-group')
            .find('.oxd-select-text--after')
            .click()
        this.elements.dropdownList().children().contains(option).click()
    }
    static clickAddBtnAfterSelection(label: string) {
        cy.findLabel(label)
            .closest('.oxd-grid-item')
            .find('button.oxd-icon-button.orangehrm-report-icon')
            .click();
    }
    static selectCorrespondingSelectionCriteriaOption(label: string, option: string) {
        cy.contains('.oxd-text--p', label)
            .parent('.oxd-grid-item')
            .next('.oxd-grid-item')
            .find('.oxd-select-text--after')
            .click();
        this.elements.dropdownList().children().contains(option).click()
    }
    static clickIncludeHeader(label: string) {
        cy.contains('.oxd-chip', label)
            .parents('.oxd-grid-item')
            .next('.oxd-grid-item')
            .find('.oxd-switch-wrapper')
            .click();
    }
    static clickSaveBtn() {
        this.elements.btns().contains('Save').click()
    }
    static DisplayField(DisplayFieldGroup: string, DisplayField: string) {
        this.selectFromDropdownList('Select Display Field Group', DisplayFieldGroup)
        this.selectFromDropdownList('Select Display Field', DisplayField)
        this.clickAddBtnAfterSelection('Select Display Field');
        this.clickIncludeHeader(DisplayField)
    }
    static SelectionCriteria(SelectionCriteria: string, val: string) {
        this.selectFromDropdownList('Selection Criteria', SelectionCriteria)
        this.clickAddBtnAfterSelection('Selection Criteria');
        this.selectCorrespondingSelectionCriteriaOption(SelectionCriteria, val)
    }

    static verifyReportName() {
        this.elements.reportNameTitle().should('contain', this.getReportName());
    }
    static verifyHeadersData() {
        cy.get('.group-rgRow')
            .children().eq(0)
            .should('contain', 'Personal')
        cy.get('.group-rgRow')
            .children().eq(1)
            .should('contain', 'Job')
        cy.get('.group-rgRow')
            .children().eq(2)
            .should('contain', 'Salary')

        cy.get('.actual-rgRow')
            .children().eq(0)
            .should('contain', 'Employee First Name')
        cy.get('.actual-rgRow')
            .children().eq(1)
            .should('contain', 'Job Title')
        cy.get('.actual-rgRow')
            .children().eq(2)
            .should('contain', 'Amount')
    }

    static verifyReportTableData() {
        const EmployeesFN = AddEmployeeDialogHelper.getEmpFirstNames().map(FN => FN);
        const SalaryAmounts = SalaryComponentsDialogHelper.getSalaryAmounts().map(amount => amount);
        for (let i = 0; i < EmployeesFN.length; i++) {
            this.elements.tableBody()
                .contains(EmployeesFN[i])
                .should('contain', EmployeesFN[i])
                .next()
                .should('contain', JobDialogHelper.getJobTitleName())
                .next()
                .should('contain', SalaryAmounts[i]);
        }
    }

    static verifyReportRecordsCount() {

        cy.get('.rgRow').should('exist').then(() => {

            // Verify the count of records based on the number of employees
            this.elements.tableBody()
                .find('.rgRow')
                .should('have.length', AddEmployeeDialogHelper.getEmpFirstNames().length);

            // Verify the count of records based on the number in the Label above the table
            cy.get('.oxd-report-table-header').find('.oxd-text--count').invoke('text').then((label) => {
                const words = label.split(' '); // Split the label into words
                const count = parseInt(words[1].replace('(', ''), 10);// Parse the second word as an integer
                this.elements.tableBody()
                    .find('.rgRow')
                    .should('have.length', count);
            });
        })
    }

    static deleteReport(){
        cy.url().then((url) => {
            // Split the URL by "/" and get the last part
            const parts = url.split('/');
            const lastPart = parts[parts.length - 1];

            // Extract the number from the last part
            const id = parseInt(lastPart, 10);
            const reportId = {"ids":[id]} 
            cy.deleteReport('DELETE', URLs.report, reportId)
           
        });
    }

}
export default AddReport;