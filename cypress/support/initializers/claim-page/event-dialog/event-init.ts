import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateAddEventPayload } from "../../../interfaces/apis/payload/claim-page/event-dialog/add-event-payload";

export default class EventInit {

    private static Payload: ICreateAddEventPayload;

    static setPayload(Payload: ICreateAddEventPayload) {
        this.Payload = Payload;
    }

    static getPayload(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Payload;
        });
    }

    static initEvent(): Cypress.Chainable<any> {
        cy.fixture('claim-page/event-dialog/add-event.json').then((data) => {
            const EventPayload = {
                name: data.name + GenericHelper.genericRandomNumberFourDigits().toString(),
                description: GenericHelper.genericRandomSentence().toString(),
                status: data.status
            }
            this.setPayload(EventPayload);
        })
        return this.getPayload();
    }
}