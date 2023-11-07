class PimTab {

    static elements = {
        mainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        pageHeader: () => cy.get('.oxd-topbar-header'),
        PIMTabsBody: () => cy.get('.oxd-topbar-body'),
        Btns: () => cy.get('.oxd-button'),
        createReportDialogTitle: () => cy.get('.orangehrm-main-title'),
    }

    static selectPIMTab() {
        this.elements.mainMenuItems().contains('PIM').click();
        this.checkPimPage()
    }
    static checkPimPage() {
        this.elements.pageHeader().children().eq(0).should('contain', 'PIM')
    }
    static selectReportsTab() {
        this.elements.PIMTabsBody().find('ul').children().contains('Reports').click()
    }
    static clickAddReportBtn() {
        this.elements.Btns().contains('Add').click();
        this.checkReportDialogTitle()
    }
    static checkReportDialogTitle() {
        this.elements.createReportDialogTitle().should('contain', 'Add Report')
    }

}
export default PimTab;