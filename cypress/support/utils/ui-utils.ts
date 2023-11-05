
declare namespace Cypress {
    interface Chainable<Subject> {
        getByPlaceholder: typeof getByPlaceholder;
        login: typeof login;
    }
}
function getByPlaceholder(field: string) {
    return cy.get(`[placeholder="${field}"]`,);
}

function login(userName:string, password:string) {
    cy.intercept("/web/index.php/dashboard/index").as("LoginPage");
    cy.visit('/')
    cy.getByPlaceholder('Username').type(userName);
    cy.getByPlaceholder('Password').type(password);
    cy.get('button').click();
    cy.contains('.oxd-topbar-header-title', "Dashboard").should("exist");
}

Cypress.Commands.add('getByPlaceholder', getByPlaceholder);
Cypress.Commands.add('login', login);
