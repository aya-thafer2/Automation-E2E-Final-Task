import EmployeeClaimsTab from "../../../page-object-models/claim-page/employee-claims-tab/employee-claims-tab";

export default class EmployeeClaimsHelper{

    static visitEmployeeClaims(){
        EmployeeClaimsTab.goToClaimPage();
    }
    static searchEmployeeName(){
        EmployeeClaimsTab.searchEmployeeName(); 
    }
    static viewEmployeeDetails(){
        EmployeeClaimsTab.clickViewDetails()
    }
    static clickApprove(){
        EmployeeClaimsTab.clickApprove()
    }
    static clickReject(){
        EmployeeClaimsTab.clickReject()
    }
    static verifyClaimRecord(approve: boolean){
        this.visitEmployeeClaims();
        this.searchEmployeeName(); 
        EmployeeClaimsTab.verifySubmittedDate();
        EmployeeClaimsTab.verifyStatus(approve);
        EmployeeClaimsTab.verifyAmount();
    }
}