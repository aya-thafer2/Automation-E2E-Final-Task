import JobDialogHelper from "../../../helpers/admin-page/job-dialog/job-dialog-helper";
import LocationDialogHelper from "../../../helpers/admin-page/location-dialog/location-dialog-helper";
import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateJobDetailsPayload } from "../../../interfaces/apis/payload/PIM-page/job-details-dialog/job-details-payload";

export default class JobDetailsInit {

    private static Payload: ICreateJobDetailsPayload;

    static setPayload(Payload: ICreateJobDetailsPayload) {
        this.Payload = Payload;
    }

    static getPayload(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Payload;
        });
    }

    static initJobDetails(): Cypress.Chainable<any> {

        const JobDetailsPayload: ICreateJobDetailsPayload = {
            joinedDate: null,
            jobTitleId: JobDialogHelper.getJobTitleId(),
            locationId: LocationDialogHelper.getLocationId()
        };
        this.setPayload(JobDetailsPayload);

        return this.getPayload();
    }

}