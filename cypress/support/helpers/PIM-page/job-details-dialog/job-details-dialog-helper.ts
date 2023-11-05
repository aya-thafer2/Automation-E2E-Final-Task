import JobDetailsInit from "../../../initializers/PIM-page/job-details-dialog/job-details-init";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

export default class JobDetailsDialogHelper {


    static associateEmployeeWithCreatedLocationAndJobTitle(empNum: number) {
        const JobDetailsURL = URLs.jobDetails(empNum)
        JobDetailsInit.initJobDetails().then((payload) => {
            cy.addJobDetails('PUT', JobDetailsURL, payload)
        })
    }
}