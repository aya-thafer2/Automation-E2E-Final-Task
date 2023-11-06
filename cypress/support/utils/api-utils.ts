import { URLs } from "../helpers/common-helpers/api-helpers/urls-helper";
import { ICreateAddEmployeePayload } from "../interfaces/apis/payload/PIM-page/add-employee-dialog/add-employee-payload";
import { ICreateDeleteEmployeePayload } from "../interfaces/apis/payload/PIM-page/add-employee-dialog/delete-employee-payload";
import { ICreateJobDetailsPayload } from "../interfaces/apis/payload/PIM-page/job-details-dialog/job-details-payload";
import { ICreateDeleteSalaryComponentPayload } from "../interfaces/apis/payload/PIM-page/salary-components-dialog/delete-salary-component-payload";
import { ICreateSalaryPayload } from "../interfaces/apis/payload/PIM-page/salary-components-dialog/salary-payload";
import { ICreateDeleteJobTitlePayload } from "../interfaces/apis/payload/admin-page/job-dialog/delete-job-tilte-payload";
import { ICreateDeleteLocationPayload } from "../interfaces/apis/payload/admin-page/location-dialog/delete-location-payload";
import { ICreateLocationPayload } from "../interfaces/apis/payload/admin-page/location-dialog/location-payload";
import { ICreateAddEmployeeResponse } from "../interfaces/apis/response/PIM-page/add-employee-dialog/add-employee-response";
import { ICreateDeleteEmployeeResponse } from "../interfaces/apis/response/PIM-page/add-employee-dialog/delete-employee-response";
import { ICreateJobDetailsResponse } from "../interfaces/apis/response/PIM-page/job-details-dialog/job-details-response";
import { ICreateDeleteSalaryComponentResponse } from "../interfaces/apis/response/PIM-page/salary-components-dialog/delete-salary-component-response";
import { ICreateSalaryResponse } from "../interfaces/apis/response/PIM-page/salary-components-dialog/salary-response";
import { ICreateDeleteJobTitleResponse } from "../interfaces/apis/response/admin-page/job-dialog/delete-job-title-response";
import { ICreateJobResponse } from "../interfaces/apis/response/admin-page/job-dialog/job-response";
import { ICreateDeleteLocationResponse } from "../interfaces/apis/response/admin-page/location-dialog/delete-location-response";
import { ICreateLocationResponse } from "../interfaces/apis/response/admin-page/location-dialog/location-response";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            createLocation: (method: string, url: string, payload: Promise<ICreateLocationPayload>) => Chainable<ICreateLocationResponse>;
            createJobTitle: (method: string, url: string, payload: Promise<ICreateJobResponse>) => Chainable<ICreateJobResponse>;
            addEmployee: (method: string, url: string, payload: ICreateAddEmployeePayload) => Chainable<ICreateAddEmployeeResponse>;
            addJobDetails: (method: string, url: string, payload: Promise<ICreateJobDetailsPayload>) => Chainable<ICreateJobDetailsResponse>;
            addSalaryComponent: (method: string, url: string, payload: Promise<ICreateSalaryPayload>) => Chainable<ICreateSalaryResponse>;
            deleteLocation: (method: string, url: string, payload: ICreateDeleteLocationPayload) => Chainable<ICreateDeleteLocationResponse>;
            deleteJobTitle: (method: string, url: string, payload: ICreateDeleteJobTitlePayload) => Chainable<ICreateDeleteJobTitleResponse>;
            deleteEmployee: (method: string, url: string, payload: ICreateDeleteEmployeePayload) => Chainable<ICreateDeleteEmployeeResponse>;
            deleteSalaryComponent: (method: string, url: string, payload: ICreateDeleteSalaryComponentPayload) => Chainable<ICreateDeleteSalaryComponentResponse>;
            deleteReport: (method: string, url: string, payload: any) => any;
        }
    }
}

const apiRequest = (method: string, url: string, payload?: any) => {
    return cy.api({ method, url, body: payload })
        .then((response) => {
            return response;
        })
        .its('body');
}

Cypress.Commands.add('createLocation', apiRequest)
Cypress.Commands.add('createJobTitle', apiRequest)
Cypress.Commands.add('addEmployee', apiRequest)
Cypress.Commands.add('addJobDetails', apiRequest)
Cypress.Commands.add('addSalaryComponent', apiRequest)
Cypress.Commands.add('deleteLocation', apiRequest)
Cypress.Commands.add('deleteJobTitle', apiRequest)
Cypress.Commands.add('deleteSalaryComponent', apiRequest)
Cypress.Commands.add('deleteEmployee', apiRequest)
Cypress.Commands.add('deleteReport', apiRequest)



