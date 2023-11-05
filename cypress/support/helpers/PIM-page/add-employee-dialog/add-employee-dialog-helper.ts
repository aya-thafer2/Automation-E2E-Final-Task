
import EmployeeInit from "../../../initializers/PIM-page/add-employee-dialog/employee-init";
import JobDialogHelper from "../../admin-page/job-dialog/job-dialog-helper";
import LocationDialogHelper from "../../admin-page/location-dialog/location-dialog-helper";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";
import JobDetailsDialogHelper from "../job-details-dialog/job-details-dialog-helper";
import SalaryComponentsDialogHelper from "../salary-components-dialog/salary-components-dialog-helper";

export default class AddEmployeeDialogHelper {

    private static EmpNumbers: number[] = [];

    static setEmpNumber(empNumber: number, index: number) {
        this.EmpNumbers[index] = empNumber;
    }
    static getEmpNumber(index: number): number | undefined {
        return this.EmpNumbers[index];
    }
    static getEmployeesNumbers(): number[] {
        return this.EmpNumbers
    }

    static async addNewEmployee() {
        cy.addEmployee('POST', URLs.employee, EmployeeInit.initEmployee()).then((response) => {
            this.EmpNumbers.push(response.data.empNumber);
            JobDetailsDialogHelper.associateEmployeeWithCreatedLocationAndJobTitle(response.data.empNumber)
            SalaryComponentsDialogHelper.associateEmployeeWithSalary(response.data.empNumber)
        })
    }

    static async addEmployees(count: number) {
        const promises = [];
        for (let i = 0; i < count; i++) {
            promises.push(this.addNewEmployee());
        }
        await Promise.all(promises);
    }

}