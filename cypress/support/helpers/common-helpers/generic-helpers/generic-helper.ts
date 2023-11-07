const { faker } = require('@faker-js/faker');

export default class GenericHelper {
    static adminLogin() {
        cy.login('Admin', 'admin123');
    }
    static userLogin() {
        cy.fixture('PIM/employee-info.json').then((empData) => {
            cy.login(empData.firstName, empData.password);
        })
    }
    static genericRandomUsername() {
        return faker.internet.userName();
    }
    static genericRandomFirstName() {
        return faker.person.firstName();
    }
    static genericRandomMiddleName() {
        return faker.person.middleName();
    }
    static genericRandomLastName() {
        return faker.person.lastName();
    }
    static genericRandomEmail() {
        return faker.internet.email();
    }
    static genericRandomNumberThreeDigits() {
        const Random3DigitNumber = faker.number.int({ min: 100, max: 999 });
        return Random3DigitNumber;
    }
    static genericRandomNumberFourDigits() {
        const Random4DigitNumber = faker.number.int({ min: 1000, max: 9999 });
        return Random4DigitNumber;
    }

    static genericRandomLocation() {
        return faker.location.street();
    }
    static genericRandomCity() {
        return faker.location.city();
    }
    static genericRandomProvince() {
        return faker.location.state();
    }
    static genericRandomZipCode() {
        return faker.location.zipCode();
    }
    static genericRandomCountryCode() {
        return faker.location.countryCode();
    }
    static genericRandomAddress() {
        return faker.location.streetAddress();
    }
    static genericRandomPhone() {
        return faker.phone.number();
    }
    static genericRandomSentence() {
        return faker.lorem.sentence();
    }
    static genericRandomJobTitle() {
        return faker.person.jobTitle();
    }
    static genericRandomSalaryAmount() {
        const RandomSalaryAmount = faker.number.int({ min: 1000, max: 60000 });
        return RandomSalaryAmount.toString();
    }
    static waitUntilVisible(loader: Cypress.Chainable<JQuery<HTMLElement>>): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            loader.should('not.exist');
        })
    }
}
