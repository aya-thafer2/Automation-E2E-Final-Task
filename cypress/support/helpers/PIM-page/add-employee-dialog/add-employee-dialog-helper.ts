
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
    private static EmpNames: string[] = [];

    static setEmpNumber(empNumber: number, index: number) {
        this.EmpNumbers[index] = empNumber;
    }
    static getEmpNumber(index: number): number | undefined {
        return this.EmpNumbers[index];
    }
    static getEmployeesNumbers(): number[] {
        return this.EmpNumbers
    }
    static getEmployeesNames(): string[] {
        return this.EmpNames
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

                this.EmpNames.push(response.data.firstName);
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
        const ids = this.EmpNumbers.map(number => number);
        CommonAPIHelper.delete(URLs.employee, ids)
    }

}