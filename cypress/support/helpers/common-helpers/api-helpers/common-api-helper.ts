import { ICreateCommonDeletePayload } from "../../../interfaces/apis/payload/common-payload/delete-payload";

export default class CommonAPIHelper{

    static delete(URL: string, id:number[]){
        const payload: ICreateCommonDeletePayload = {
            ids: [...id]
        };
        cy.delete('DELETE', URL, payload)
    }
}