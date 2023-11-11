import EventInit from "../../../initializers/claim-page/event-dialog/event-init";
import { ICreateCommonDeletePayload } from "../../../interfaces/apis/payload/common-payload/delete-payload";
import CommonAPIHelper from "../../common-helpers/api-helpers/common-api-helper";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

class EventHelper {

    private static EventName: string;
    private static EventId: number;

    static setEventName(EventName: string) {
        this.EventName = EventName;
    }
    static getEventName(): string {
        return this.EventName;
    }

    static setEventId(EventId: number) {
        this.EventId = EventId;
    }
    static getEventId(): number {
        return this.EventId;
    }

    static addEvent() {
        EventInit.initEvent().then((payload) => {
            cy.addEvent('POST', URLs.event, payload).then((response) => {
                this.setEventName(response.data.name);
                this.setEventId(response.data.id);
            })
        })
    }
    static deleteEvent() {
        CommonAPIHelper.delete(URLs.event, [this.getEventId()])
    }
}
export default EventHelper;