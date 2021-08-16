import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Account } from '../models/account.model';
@Injectable({ providedIn: 'root' })

export class AccountService {
    private getMasterList_uri = environment.getMasterList;
    private getUserAccountDetails_uri = environment.getUserAccountDetails;

    public country_list: any;
    public identification_list: any;
    public account: Array<Account> = [];

    constructor(private http: HttpClient) {}

    async getMasterList() {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', '*/*');

        const master_data = await this.http.post(this.getMasterList_uri, { headers }).toPromise();
        await this.loadMasterListData(master_data);
    }

    async getProfile(user_id: number) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', '*/*');

        const body = { "id": user_id };

        const profile_data = await this.http.post(this.getUserAccountDetails_uri, body, { headers }).toPromise();
        await this.loadProfile(profile_data);
    }

    private loadProfile(data: any) {
        this.account = data.obnoxious_tenant_user_account[0];
    }

    private loadMasterListData(data: any) {
        this.country_list = data.obnoxious_tenant_country_list;
        this.identification_list = data.obnoxious_tenant_identification_list;
    }
}
