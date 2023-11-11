class LoginPage {

    elements = {
        userName: () => cy.getByPlaceholder('Username'),
        password: () => cy.getByPlaceholder('Password'),
        loginBtn: () => cy.get('button'),
        Dashboard: () => cy.get('.oxd-topbar-header-title'),
    }

    login(userName = "Admin", password = "admin123"): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            this.elements.userName().type(userName);
            this.elements.password().type(password);
            this.elements.loginBtn().click();
            cy.contains('.oxd-topbar-header-title', "Dashboard").should("exist");
        });
    }

}
export default LoginPage;