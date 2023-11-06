
import SalaryComponentInit from "../../../initializers/PIM-page/salary-components-dialog/salary-init";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";
import AddEmployeeDialogHelper from "../add-employee-dialog/add-employee-dialog-helper";

export default class SalaryComponentsDialogHelper {

    private static SalaryCompId: any;
    private static SalaryURL: string;
    private static SalaryComponentIds: number[] = [];
    private static SalaryAmounts: string[] = [];


    static setSalaryComponentId(SalaryCompId: number) {
        this.SalaryCompId = SalaryCompId;
    }
    static getSalaryComponentId(): number {
        return this.SalaryCompId;
    }
    static setSalaryURL(SalaryURL: string) {
        this.SalaryURL = SalaryURL;
    }
    static getSalaryURL(): string {
        return this.SalaryURL;
    }
    static getSalaryAmounts(): string[] {
        return this.SalaryAmounts
    }

    static associateEmployeeWithSalary(empNum: number) {
        this.setSalaryURL(URLs.salary(empNum))
        SalaryComponentInit.initSalaryComponent().then((payload) => {
            cy.addSalaryComponent('POST', this.getSalaryURL(), payload).then((response) => {
                this.SalaryComponentIds.push(response.data.id);
                this.SalaryAmounts.push(response.data.amount);
            })
        })
    }
    static deleteSalaryComponent() {
        const ids = this.SalaryComponentIds.map(number => number);
        cy.deleteSalaryComponent('DELETE', this.getSalaryURL(), { ids });
    }
}