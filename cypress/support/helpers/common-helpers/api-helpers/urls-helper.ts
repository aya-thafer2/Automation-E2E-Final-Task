export const URLs = {
    loginPage: `/web/index.php/dashboard/index`,
    location: `/web/index.php/api/v2/admin/locations`,
    jobTitle: `/web/index.php/api/v2/admin/job-titles`,
    employee: `/web/index.php/api/v2/pim/employees`,
    jobDetails: (EmpNum: any):string => { return `/web/index.php/api/v2/pim/employees/${EmpNum}/job-details` },//location + job title
    salary: (EmpNum: any):string => { return `/web/index.php/api/v2/pim/employees/${EmpNum}/salary-components`}
};
