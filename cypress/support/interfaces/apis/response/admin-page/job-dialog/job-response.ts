export interface ICreateJobResponse {
    data: {
        id: number;
        title: string;
        description: string;
        note: string;
        jobSpecification: {
            id: null;
            filename: null;
            fileType: null;
            fileSize: null;
        };
    }
    meta: any[];
    rels: any[];
}

