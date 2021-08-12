export interface Account {
    username: string;
    first_name: string;
    last_name: string;
    email_address: string;
    date_of_birth: string;
    contact_number: number;
    nationality: string;
    address_1: string;
    address_2: string;
    country_code: string;
    user_account_identification_lists: [
        {
            id: number;
            identification_list_id: number;
            identification_path: string;
        }
    ];
}
