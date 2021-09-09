import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
@Injectable({ providedIn: 'root' })

export class AccountService {
    private getMasterList_uri = environment.getMasterList;
    private getUserAccountDetails_uri = environment.getUserAccountDetails;
    private updateUserAccountPassword_uri = environment.updateUserAccountPassword;
    private updateUserAccountDetails_uri = environment.updateUserAccountDetails;

    private updateUserAccountProfileImage_uri = environment.updateUserAccountProfileImage;

    private crypt_uri = environment.crypt;
    private fileUpload_uri = environment.fileUpload;
    private baseFileUrl = environment.baseFileUrl;

    public country_list: any;
    public identification_list: any;
    public account: any;

    constructor(private http: HttpClient) {}

    //#region Profile

    async getMasterList() {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', '*/*');

        const master_data = await this.http.post(this.getMasterList_uri, { headers }).toPromise();
        await this.loadMasterListData(master_data);
    }

    async getProfile(user_id: number) {
        const body = { "id": user_id };

        const profile_data = await this.http.post(this.getUserAccountDetails_uri, body).toPromise();
        await this.loadProfile(profile_data);
    }

    async updateProfilePicture(body: FormData, id: any) {
        try {
            let headers = new HttpHeaders();
            headers = headers.set('Accept', '*/*');

            // Save Image to Google Cloud Storage via API
            const jRes: any = await this.http.post(this.fileUpload_uri, body, { headers: headers }).toPromise();
            const image_path = this.baseFileUrl + jRes.path;

            // Update HasuraDB for ImagePath
            const updImageBody = { id, image_path };
            await this.http.post(this.updateUserAccountProfileImage_uri, updImageBody).toPromise();

            // Reload Profile Details
            await this.getProfile(id);
        } catch (e) {
            console.error(e);
        }
    }

    async updateProfile(body: any) {
        return await this.http.post(this.updateUserAccountDetails_uri, body).toPromise();
    }

    private loadProfile(data: any) {
        this.account = data.obnoxious_tenant_user_account[0];
    }

    private loadMasterListData(data: any) {
        this.country_list = data.obnoxious_tenant_country_list;
        this.identification_list = data.obnoxious_tenant_identification_list;
    }

    //#endregion

    //#region Files

    async updateDocuments(body: FormData, id: any, file_type: any) {
        try {
            let headers = new HttpHeaders();
            headers = headers.set('Accept', '*/*');

            // Save Image to Google Cloud Storage via API
            const jRes: any = await this.http.post(this.fileUpload_uri, body, { headers: headers }).toPromise();
            const image_path = this.baseFileUrl + jRes.path;

            // // Update HasuraDB for ImagePath
            const updImageBody = { id, image_path, file_type };
            // await this.http.post(this.updateUserAccountProfileImage_uri, updImageBody).toPromise();

            // // Reload Profile Details
            // await this.getProfile(id);
        } catch (e) {
            console.error(e);
        }
    }

    //#endregion

    //#region Security

    async updateSecurityPassword(user_id: string, p: string) {
        const payload = { input_data: p, type_data: 'E' };
        let new_password: any = await this.http.post(this.crypt_uri, payload).toPromise();

        return await this.http.post(this.updateUserAccountPassword_uri, { user_id, new_password}).toPromise();
    }

    //#endregion

    //#region Notification
    //#endregion
}
