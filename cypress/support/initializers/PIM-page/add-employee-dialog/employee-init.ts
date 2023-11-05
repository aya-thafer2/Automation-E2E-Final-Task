import GenericHelper from "../../../helpers/common-helpers/generic-helpers/generic-helper";
import { ICreateAddEmployeePayload } from "../../../interfaces/apis/payload/PIM-page/add-employee-dialog/add-employee-payload";

export default class EmployeeInit {
    private static Payload: ICreateAddEmployeePayload;

    static setPayload(Payload: ICreateAddEmployeePayload) {
        this.Payload = Payload;
    }

    static getPayload(): ICreateAddEmployeePayload {
            return this.Payload;

    }

    static initEmployee(): ICreateAddEmployeePayload{

        const EmployeePayload: ICreateAddEmployeePayload = {
            firstName: GenericHelper.genericRandomFirstName(),
            middleName: GenericHelper.genericRandomMiddleName(),
            lastName: GenericHelper.genericRandomLastName(),
            empPicture: null,
            employeeId: GenericHelper.genericRandomNumberFourDigits().toString(),
        };
        this.setPayload(EmployeePayload);

        return this.getPayload();
    }
}