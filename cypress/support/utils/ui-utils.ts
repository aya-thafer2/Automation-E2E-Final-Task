
declare namespace Cypress {
    interface Chainable<Subject> {
        getByPlaceholder: typeof getByPlaceholder;
        login: typeof login;
        logout: typeof logout;
        findLabel: typeof findLabel;
    }
}
function getByPlaceholder(field: string) {
    return cy.get(`[placeholder="${field}"]`,);
}

function login(userName: string, password: string) {
    cy.intercept("/web/index.php/dashboard/index").as("LoginPage");
    cy.visit('/')
    cy.getByPlaceholder('Username').type(userName);
    cy.getByPlaceholder('Password').type(password);
    cy.get('button').click();
    cy.contains('.oxd-topbar-header-title', "Dashboard").should("exist");
}
function findLabel(labelText: string) {
    return cy.get('.oxd-label').filter((index, labelElement) => {
        return Cypress.$(labelElement).text() === labelText;
    });
}
function logout(){
    cy.get(".oxd-userdropdown-tab").click()
    cy.get(".oxd-dropdown-menu")
    .children()
    .contains('Logout')
    .click()
}

Cypress.Commands.add('getByPlaceholder', getByPlaceholder);
Cypress.Commands.add('login', login);
Cypress.Commands.add('logout', logout);
Cypress.Commands.add('findLabel', findLabel);
