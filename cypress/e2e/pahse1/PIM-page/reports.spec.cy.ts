import PimTabHelper from '../../../support/helpers/PIM-page/PIM-tab/PIM-tab-helper'
import AddReportHelper from '../../../support/helpers/PIM-page/PIM-tab/add-report-dialog-helper/add-report-helper'
import AddEmployeeDialogHelper from '../../../support/helpers/PIM-page/add-employee-dialog/add-employee-dialog-helper'
import JobDialogHelper from '../../../support/helpers/admin-page/job-dialog/job-dialog-helper'
import LocationDialogHelper from '../../../support/helpers/admin-page/location-dialog/location-dialog-helper'
import GenericHelper from '../../../support/helpers/common-helpers/generic-helpers/generic-helper'

describe('PIM: Reports', () => {

    beforeEach(() => {
        //admin logs-in to the system
        GenericHelper.adminLogin()

        // //create 1 location  
        LocationDialogHelper.createLocation();

        // //create 1 jobTitle 
        JobDialogHelper.createJobTitle();

        // //create 3 employees
        AddEmployeeDialogHelper.addEmployees(3)
    })

    afterEach(() => {
        //delete employee
        //delete location
        //delete jobTitle
        //delete salary
    })

    it('PIM - Reports : Generate an Employee report with search criteria by (Personal : First name/ Job: Job title/ Salary:Amount)', () => {
        PimTabHelper.selectPIMTab();
        PimTabHelper.goToCreateReportsDialog();
        AddReportHelper.createReport();
    })
})