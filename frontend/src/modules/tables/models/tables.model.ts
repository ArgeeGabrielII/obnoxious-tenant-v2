export interface Country {
    [key: string]: string | number;
    id: number;
    name: string;
    flag: string;
    area: number;
    population: number;
}

export interface Activity {
    [key: string]: string | number;
    id: number;
    date: string;
    eventIcon: string;
    eventText: string;
    eventLinkUrl: string;
    eventLinkText: string;
    time: string;
}

export interface FileUpload {
    [key: string]: string | number;
    id: number;
    identification_list_id: number;
    identification_list_type: string;
    identification_path: string;
    created_at: string;
    status: string;
}