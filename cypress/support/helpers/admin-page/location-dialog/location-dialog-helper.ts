import LocationInit from "../../../initializers/admin-page/location-dialog/location-init";
import { URLs } from "../../common-helpers/api-helpers/urls-helper";

export default class LocationDialogHelper {

    private static LocationId: number;
    static setLocationId(LocationId: number) {
        this.LocationId = LocationId;
    }
    static getLocationId(): number {
        return this.LocationId;
    }

    static createLocation(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            LocationInit.initLocation().then((payload: any) => {
                cy.createLocation('POST', URLs.location, payload).then((response) => {
                    this.setLocationId(response.data.id)
                })
            })
        });
    }
    static deleteLocation(){
        const payload = {
            ids: [this.getLocationId()]
          };
          
        cy.deleteLocation('DELETE', URLs.location, payload)
    }
}