import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateLocationPayload } from "../../../interfaces/apis/payload/admin-page/location-dialog/location-payload";

export default class LocationInit {
    private static Payload: ICreateLocationPayload;
    private static LocationName: string;

    static setPayload(Payload: ICreateLocationPayload) {
        this.Payload = Payload;
    }

    static getPayload(): Cypress.Chainable<any> {
        return cy.wrap(undefined).then(() => {
            return this.Payload;
        });
    }

    static setLocationName(LocationName: string) {
        this.LocationName = LocationName;
    }

    static getLocationName(): string {
        return this.LocationName;
    }

    static initLocation(): Cypress.Chainable<any> {
        let RandomLocationName = GenericHelper.genericRandomLocation();
        this.setLocationName(RandomLocationName);
        cy.fixture('admin-page/location-dialog/location-info.json').then((data: any) => {
            const LocationPayload: ICreateLocationPayload = {
                name: RandomLocationName,
                countryCode: data.countryCode,
                province: GenericHelper.genericRandomProvince(),
                city: GenericHelper.genericRandomCity(),
                address: GenericHelper.genericRandomAddress(),
                zipCode: data.zipCode,
                phone: data.phone,
                fax: data.fax,
                note: GenericHelper.genericRandomSentence()
            };
            this.setPayload(LocationPayload);
        });
        return this.getPayload();
    }
}