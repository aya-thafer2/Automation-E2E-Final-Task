import JobTitleInit from "../../../initializers/admin-page/job-dialog/job-title-init";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

export default class JobDialogHelper {

    private static JobTitleId: number;
    static setJobTitleId(JobTitleId: number) {
        this.JobTitleId = JobTitleId;
    }
    static getJobTitleId(): number {
        return this.JobTitleId;
    }

    static createJobTitle(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            JobTitleInit.initJobTitle().then((payload) => {
                cy.createJobTitle('POST', URLs.jobTitle, payload).then((response)=>{
                    this.setJobTitleId(response.data.id)
                })
            })
        });
        
    }
}