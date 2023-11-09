import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateLoginDetailsPayload } from "../../../interfaces/apis/payload/PIM-page/add-employee-dialog/create-login-details-payload";

export default class LoginDetailsInit {

    private static Payload: ICreateLoginDetailsPayload;
    private static EmpNumber: number
    private static Password: string
    private static Username: string


    static setPayload(Payload: ICreateLoginDetailsPayload) {
        this.Payload = Payload;
    }
    static getPayload(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Payload;
        });
    }
    static setEmpNumber(EmpNumber: number) {
        this.EmpNumber = EmpNumber;
    }
    static getEmpNumber(): number {
        return this.EmpNumber;
    }
    static setPassword(Password: string) {
        this.Password = Password;
    }
    static getPassword(): string {
        return this.Password;
    }
    static setUsername(Username: string) {
        this.Username = Username;
    }
    static getUsername(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Username;
        });
    }

    static initLoginDetails(empNumber: number): Cypress.Chainable<any> {
        const username = GenericHelper.genericRandomUsername();
        cy.fixture('PIM-page/add-employee-dialog/login-details.json').then((data: any) => {
            const LoginDetailsPayload = {
                empNumber: empNumber,
                password: data.password,
                status: data.status,
                userRoleId: data.userRoleId,
                username: username
            }
            this.setEmpNumber(empNumber);
            this.setPassword(data.password);
            this.setUsername(username);
            this.setPayload(LoginDetailsPayload);
        });
        return this.getPayload();
    }
}