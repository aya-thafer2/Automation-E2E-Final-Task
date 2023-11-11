
import EmployeeInit from "../../../initializers/PIM-page/add-employee-dialog/employee-init";
import LoginDetailsInit from "../../../initializers/PIM-page/add-employee-dialog/login-details-init";
import JobDialogHelper from "../../admin-page/job-dialog/job-dialog-helper";
import LocationDialogHelper from "../../admin-page/location-dialog/location-dialog-helper";
import CommonAPIHelper from "../../common-helpers/api-helpers/common-api-helper";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";
import GenericHelper from "../../common-helpers/generic-helpers/generic-helper";
import JobDetailsDialogHelper from "../job-details-dialog/job-details-dialog-helper";
import SalaryComponentsDialogHelper from "../salary-components-dialog/salary-components-dialog-helper";

export default class AddEmployeeDialogHelper {

    private static EmpNumbers: number[] = [];
    private static EmpNumber: number;
    private static EmpFirstNames: string[] = [];
    private static EmpFirstName: string;
    private static EmpMiddleName: string;
    private static EmpLastName: string;
    private static EmpFullName: string;

    static setEmpNumber(EmpNumber:number) {
       this.EmpNumber=EmpNumber;
    }
    static getEmpNumber(): number{
        return this.EmpNumber;
    }
    static getEmployeesNumbers(): number[] {
        return this.EmpNumbers
    }
    static getEmpFirstNames(): string[] {
        return this.EmpFirstNames
    }
    static setEmpFullName(EmpFullName: string) {
        this.EmpFullName = EmpFullName;
    }
    static getEmpFullName(): string {
        return this.EmpFullName
    }
    static setEmpMiddleName(EmpMiddleName: string) {
        this.EmpMiddleName = EmpMiddleName;
    }
    static getEmpMiddleName(): string {
        return this.EmpMiddleName
    }
    static setEmpFirstName(EmpFirstName: string) {
        this.EmpFirstName = EmpFirstName;
    }
    static getEmpFirstName(): string {
        return this.EmpFirstName
    }
    static setEmpLastName(EmpLastName: string) {
        this.EmpLastName = EmpLastName;
    }
    static getEmpLastName(): string {
        return this.EmpLastName
    }

    static addNewEmployee(createJobDetails: boolean, createSalaryComponent: boolean): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            cy.addEmployee('POST', URLs.employee, EmployeeInit.initEmployee()).then((response) => {
                this.EmpNumbers.push(response.data.empNumber);

                if (createJobDetails) {
                    JobDetailsDialogHelper.associateEmployeeWithCreatedLocationAndJobTitle(response.data.empNumber);
                }
                if (createSalaryComponent) {
                    SalaryComponentsDialogHelper.associateEmployeeWithSalary(response.data.empNumber)
                }
                this.EmpFirstNames.push(response.data.firstName);
                this.setEmpFirstName(response.data.firstName)
                this.setEmpMiddleName(response.data.middleName);
                this.setEmpLastName(response.data.lastName);
                this.setEmpNumber(response.data.empNumber);
            })
        });
    }

    static async addEmployees(count: number, createJobDetails: boolean, createSalaryComponent: boolean) {
        const promises = [];
        for (let i = 0; i < count; i++) {
            promises.push(this.addNewEmployee(createJobDetails, createSalaryComponent));
        }
        await Promise.all(promises);
    }

    static createEmployeeWithLoginDetails() {
        this.addNewEmployee(false, false).then((response) => {
            this.setEmpFullName(response.data.firstName + ' ' + response.data.middleName + ' ' + response.data.lastName);
            LoginDetailsInit.initLoginDetails(response.data.empNumber).then((payload) => {
                cy.createLoginDetails('POST', URLs.user, payload);
            })
        })
    }
    static userLogin() {
        LoginDetailsInit.getUsername().then((username) => {
            GenericHelper.userLogin(username);
        })
    }
    static logout() {
        cy.logout();
    }
    static deleteEmployee() {
        const empNum = this.getEmpNumber();
        CommonAPIHelper.delete(URLs.employee, [empNum])
    }

}