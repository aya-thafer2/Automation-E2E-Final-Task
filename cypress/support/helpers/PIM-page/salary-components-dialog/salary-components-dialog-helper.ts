
import SalaryComponentInit from "../../../initializers/PIM-page/salary-components-dialog/salary-init";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

export default class SalaryComponentsDialogHelper {

    static associateEmployeeWithSalary(empNum:number) {
        const SalaryURL = URLs.salary(empNum)
        SalaryComponentInit.initSalaryComponent().then((payload) => {
            cy.addSalaryComponent('Post', SalaryURL, payload)
        })
    }
}