import { URLs } from "../helpers/common-helpers/api-helpers/urls-helper";
import { ICreateAddEmployeePayload } from "../interfaces/apis/payload/PIM-page/add-employee-dialog/add-employee-payload";
import { ICreateLoginDetailsPayload } from "../interfaces/apis/payload/PIM-page/add-employee-dialog/create-login-details-payload";
import { ICreateJobDetailsPayload } from "../interfaces/apis/payload/PIM-page/job-details-dialog/job-details-payload";
import { ICreateSalaryPayload } from "../interfaces/apis/payload/PIM-page/salary-components-dialog/salary-payload";
import { ICreateLocationPayload } from "../interfaces/apis/payload/admin-page/location-dialog/location-payload";
import { ICreateAddEventPayload } from "../interfaces/apis/payload/claim-page/event-dialog/add-event-payload";
import { ICreateExpenseTypePayload } from "../interfaces/apis/payload/claim-page/expense-types-dialog/add-expense-type-payload";
import { ICreateAttachExpensePayload } from "../interfaces/apis/payload/claim-page/submit-claim-tab/attach-expense-payload";
import { ICreateClaimRequestPayload } from "../interfaces/apis/payload/claim-page/submit-claim-tab/create-claim-request-payload";
import { ICreateCommonDeletePayload } from "../interfaces/apis/payload/common-payload/delete-payload";
import { ICreateAddEmployeeResponse } from "../interfaces/apis/response/PIM-page/add-employee-dialog/add-employee-response";
import { ICreateLoginDetailsResponse } from "../interfaces/apis/response/PIM-page/add-employee-dialog/create-login-details-response";
import { ICreateJobDetailsResponse } from "../interfaces/apis/response/PIM-page/job-details-dialog/job-details-response";
import { ICreateDeleteSalaryComponentResponse } from "../interfaces/apis/response/PIM-page/salary-components-dialog/delete-salary-component-response";
import { ICreateSalaryResponse } from "../interfaces/apis/response/PIM-page/salary-components-dialog/salary-response";
import { ICreateJobResponse } from "../interfaces/apis/response/admin-page/job-dialog/job-response";
import { ICreateLocationResponse } from "../interfaces/apis/response/admin-page/location-dialog/location-response";
import { ICreateAddEventResponse } from "../interfaces/apis/response/claim-page/event-dialog/add-event-response";
import { ICreateExpenseTypeResponse } from "../interfaces/apis/response/claim-page/expense-type-dialog/add-expense-type-response";
import { ICreateAttachExpenseResponse } from "../interfaces/apis/response/claim-page/submit-claim-tab/attach-expene-response";
import { ICreateClaimRequestResponse } from "../interfaces/apis/response/claim-page/submit-claim-tab/create-claim-request-response";
import { ICreateCommonDeleteResponse } from "../interfaces/apis/response/common-response/delete-response";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            createLocation: (method: string, url: string, payload: Promise<ICreateLocationPayload>) => Chainable<ICreateLocationResponse>;
            createJobTitle: (method: string, url: string, payload: Promise<ICreateJobResponse>) => Chainable<ICreateJobResponse>;
            addEmployee: (method: string, url: string, payload: ICreateAddEmployeePayload) => Chainable<ICreateAddEmployeeResponse>;
            addJobDetails: (method: string, url: string, payload: Promise<ICreateJobDetailsPayload>) => Chainable<ICreateJobDetailsResponse>;
            addSalaryComponent: (method: string, url: string, payload: Promise<ICreateSalaryPayload>) => Chainable<ICreateSalaryResponse>;
            deleteSalaryComponent: (method: string, url: string, payload: ICreateCommonDeletePayload) => Chainable<ICreateDeleteSalaryComponentResponse>;
            deleteReport: (method: string, url: string, payload: any) => any;
            addEvent: (method: string, url: string, payload: Promise<ICreateAddEventPayload>) => Chainable<ICreateAddEventResponse>;
            addExpenseType: (method: string, url: string, payload: Promise<ICreateExpenseTypePayload>) => Chainable<ICreateExpenseTypeResponse>;
            delete: (method: string, url: string, payload: ICreateCommonDeletePayload) => Chainable<ICreateCommonDeleteResponse>;
            createLoginDetails: (method: string, url: string, payload: ICreateLoginDetailsPayload) => Chainable<ICreateLoginDetailsResponse>;
            createClaimRequest: (method: string, url: string, payload: ICreateClaimRequestPayload) => Chainable<ICreateClaimRequestResponse>;
            attachExpense: (method: string, url: string, payload: ICreateAttachExpensePayload) => Chainable<ICreateAttachExpenseResponse>;
            submitClaim: (method: string, url: string, payload: any) => any;
            
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
Cypress.Commands.add('deleteReport', apiRequest)
Cypress.Commands.add('addEvent', apiRequest)
Cypress.Commands.add('addExpenseType', apiRequest)
Cypress.Commands.add('deleteSalaryComponent', apiRequest)
Cypress.Commands.add('delete', apiRequest)
Cypress.Commands.add('createLoginDetails', apiRequest)
Cypress.Commands.add('createClaimRequest', apiRequest)
Cypress.Commands.add('attachExpense', apiRequest)
Cypress.Commands.add('submitClaim', apiRequest)



