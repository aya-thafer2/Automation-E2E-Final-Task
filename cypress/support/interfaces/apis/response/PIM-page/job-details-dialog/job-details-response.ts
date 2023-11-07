
export interface ICreateJobDetailsResponse {
    data: Data;
    meta: any[];
    rels: any[];
}

export interface Data {
    empNumber:                  number;
    joinedDate:                 null;
    jobTitle:                   JobTitle;
    jobSpecificationAttachment: JobSpecificationAttachment;
    empStatus:                  EmpStatus;
    jobCategory:                EmpStatus;
    subunit:                    Subunit;
    location:                   EmpStatus;
    employeeTerminationRecord:  EmployeeTerminationRecord;
}

export interface EmpStatus {
    id:   number | null;
    name: null | string;
}

export interface EmployeeTerminationRecord {
    id:   null;
    date: null;
}

export interface JobSpecificationAttachment {
    id:       null;
    filename: null;
}

export interface JobTitle {
    id:        number;
    title:     string;
    isDeleted: boolean;
}

export interface Subunit {
    id:     null;
    name:   null;
    unitId: null;
}
