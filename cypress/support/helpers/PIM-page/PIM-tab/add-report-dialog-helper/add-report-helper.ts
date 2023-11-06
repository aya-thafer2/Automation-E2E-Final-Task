import JobTitleInit from "../../../../initializers/admin-page/job-dialog/job-title-init"
import LocationInit from "../../../../initializers/admin-page/location-dialog/location-init"
import AddReport from "../../../../page-object-models/PIM-page/reports-tab/add-report-dialog/add-report"

export default class AddReportHelper {

    static createReport() {
        AddReport.typeReportName()
        AddReport.selectSelectionCriteria(LocationInit.getLocationName(), JobTitleInit.getJobTitle())
        AddReport.selectDisplayFields()
        AddReport.clickSaveBtn()
    }
    static verifyReportData() {
        AddReport.verifyReportName();
        AddReport.verifyHeadersData();
        AddReport.verifyReportTableData();
        AddReport.verifyReportRecordsCount();
    }
    static deleteReport(){
        AddReport.deleteReport();
    }
}