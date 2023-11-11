import EventHelper from "../../../helpers/claim-page/event-dialog/event-helper";
import { ICreateClaimRequestPayload } from "../../../interfaces/apis/payload/claim-page/submit-claim-tab/create-claim-request-payload";

export default class ClaimRequestInit {

    private static Payload: ICreateClaimRequestPayload;


    static setPayload(Payload: ICreateClaimRequestPayload) {
        this.Payload = Payload;
    }
    static getPayload(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Payload;
        });
    }

    static initClaimRequest() {

        cy.fixture('claim-page/submit-claim-tab/cerate-claim-request.json').then((data: any) => {
            const EventId = EventHelper.getEventId()
            const ClaimRequestPayload = {
                claimEventId: EventId,
                currencyId: data.currencyId,
                remarks: data.remarks
            }
            this.setPayload(ClaimRequestPayload);
        });
        return this.getPayload();
    }
}