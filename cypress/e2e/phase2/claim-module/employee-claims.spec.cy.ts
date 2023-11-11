import AddEmployeeDialogHelper from "../../../support/helpers/PIM-page/add-employee-dialog/add-employee-dialog-helper"
import EmployeeClaimsHelper from "../../../support/helpers/claim-page/employee-claims-tab/employee-claims-helper"
import EventHelper from "../../../support/helpers/claim-page/event-dialog/event-helper"
import ExpenseTypesHelper from "../../../support/helpers/claim-page/expense-types-dialog/expense-type-helper"
import CreateClaimRequestHelper from "../../../support/helpers/claim-page/submit-claim-tab/create-claim-request-helper"
import GenericHelper from "../../../support/helpers/common-helpers/generic-helpers/generic-helper"

describe('Claim: Claim Request Flows', () => {

    beforeEach(() => {
        //admin login to the system
        GenericHelper.adminLogin();
        //admin create event
        EventHelper.addEvent();
        //admin create expense type
        ExpenseTypesHelper.addExpenseType();
        //create employee with login details
        AddEmployeeDialogHelper.createEmployeeWithLoginDetails();
        AddEmployeeDialogHelper.logout();
        //employee login to the system
        AddEmployeeDialogHelper.userLogin();
        //employee create claim
        CreateClaimRequestHelper.createClaimRequest();
        AddEmployeeDialogHelper.logout();
    })

    afterEach(() => {
        //delete event
        EventHelper.deleteEvent();
        //delete expense type
        ExpenseTypesHelper.deleteExpenseType()
        //delete employee
        AddEmployeeDialogHelper.deleteEmployee()
    })

    it('Claim - Assign Claim: The Admin should be able to Approve Claim Requests', () => {
        //admin login to the system
        GenericHelper.adminLogin();
        //Opens the "Claim page"and filters for "Employee Claims"
        EmployeeClaimsHelper.visitEmployeeClaims();
        //search for that employee
        EmployeeClaimsHelper.searchEmployeeName();
        //clicks "View Details" for that employee(Assign Claim)
        EmployeeClaimsHelper.viewEmployeeDetails();
        //clicks "Approve"
        EmployeeClaimsHelper.clickApprove()
        //verify Claim Record
        EmployeeClaimsHelper.verifyClaimRecord(true) 
    })

    it('Claim - Assign Claim: The Admin should be able to Reject Claim Requests', () => {
        //admin login to the system
        GenericHelper.adminLogin();
        //Opens the "Claim page"and filters for "Employee Claims"
        EmployeeClaimsHelper.visitEmployeeClaims();
        //search for that employee
        EmployeeClaimsHelper.searchEmployeeName();
        //clicks "View Details" for that employee(Assign Claim)
        EmployeeClaimsHelper.viewEmployeeDetails();
        //clicks "Reject"
        EmployeeClaimsHelper.clickReject()
        //verify Claim Record
        EmployeeClaimsHelper.verifyClaimRecord(false)
    })
})