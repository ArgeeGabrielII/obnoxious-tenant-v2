import { FileUpload } from '../models';

export const FILEDATA: FileUpload[] = [
    {
        id: 1,
        identification_list_id: 1,
        identification_list_type: "Passport",
        identification_path: 'https://picsum.photos/300/200',
        created_at: '2021-08-13T04:04:27.04778+00:00',
        status: 'pending'
    },
    {
        id: 2,
        identification_list_id: 1,
        identification_list_type: "Driver's License",
        identification_path: 'https://picsum.photos/300/200',
        created_at: '2021-08-11T04:04:27.04778+00:00',
        status: 'pending'
    },
    {
        id: 3,
        identification_list_id: 1,
        identification_list_type: "Broker's License",
        identification_path: 'https://picsum.photos/300/200',
        created_at: '2021-08-12T04:04:27.04778+00:00',
        status: 'verified'
    },
    {
        id: 4,
        identification_list_id: 1,
        identification_list_type: "PRC ID",
        identification_path: 'https://picsum.photos/300/200',
        created_at: '2021-08-11T04:04:27.04778+00:00',
        status: 'pending'
    },
    {
        id: 5,
        identification_list_id: 1,
        identification_list_type: "Company ID",
        identification_path: 'https://picsum.photos/300/200',
        created_at: '2021-08-12T04:04:27.04778+00:00',
        status: 'verified'
    },
];
