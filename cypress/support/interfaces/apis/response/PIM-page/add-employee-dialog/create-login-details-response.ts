export interface ICreateLoginDetailsResponse {
    data: {
        id: number;
        userName: string;
        deleted: boolean;
        status: boolean;
        employee: {
            empNumber: number;
            employeeId: string;
            firstName: string;
            middleName: string;
            lastName: string;
            terminationId: null;
        }
        userRole: UserRole;
    }
    meta: any[];
    rels: any[];
}

export interface UserRole {
    id: number;
    name: string;
    displayName: string;
}
