class AddReport {

    static elements = {
        inputFields: () => cy.get('.oxd-input-group'),
        dropdownList: () => cy.get('.oxd-select-dropdown'),
        btns: () => cy.get('button')
    }

    static typeReportName() {
        this.elements.inputFields().contains('Report Name').getByPlaceholder('Type here ...').type('Report')
    }
    static fillReportInfo() {

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
    static checkIncludeHeader(label: string) {
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
        this.checkIncludeHeader(DisplayField)
    }
    static SelectionCriteria(SelectionCriteria: string, val: string) {
        this.selectFromDropdownList('Selection Criteria', SelectionCriteria)
        this.clickAddBtnAfterSelection('Selection Criteria');
        this.selectCorrespondingSelectionCriteriaOption(SelectionCriteria, val)
    }
}
export default AddReport;