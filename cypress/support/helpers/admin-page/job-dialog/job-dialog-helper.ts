import JobTitleInit from "../../../initializers/admin-page/job-dialog/job-title-init";
import CommonAPIHelper from "../../common-helpers/api-helpers/common-api-helper";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

export default class JobDialogHelper {

    private static JobTitleId: number;
    private static JobTitleName: string;

    static setJobTitleId(JobTitleId: number) {
        this.JobTitleId = JobTitleId;
    }
    static getJobTitleId(): number {
        return this.JobTitleId;
    }
    static setJobTitleName(JobTitleName: string) {
        this.JobTitleName = JobTitleName;
    }
    static getJobTitleName(): string {
        return this.JobTitleName
    }

    static createJobTitle(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            JobTitleInit.initJobTitle().then((payload) => {
                cy.createJobTitle('POST', URLs.jobTitle, payload).then((response) => {
                    this.setJobTitleId(response.data.id)
                    this.setJobTitleName(response.data.title);
                })
            })
        });

    }
    static deleteJobTitle() {
        CommonAPIHelper.delete(URLs.jobTitle, [this.getJobTitleId()])
    }
}