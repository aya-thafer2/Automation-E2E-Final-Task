import PimTab from "../../../page-object-models/PIM-page/PIM-tab/PIM-tab";

export default class PimTabHelper {

    static selectPIMTab() {
        PimTab.selectPIMTab()
    }
    static goToCreateReportsDialog() {
        PimTab.selectReportsTab()
        PimTab.clickAddReportBtn()
    }

}