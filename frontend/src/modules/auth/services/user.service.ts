import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable()
export class UserService {
    private getLoginDetails_uri = environment.getLoginDetails;
    private insertUserAccountDetails_uri = environment.insertUserAccountDetails;
    private crypt_uri = environment.crypt;
    private getUserToken_uri = environment.getUserToken;
    
    constructor(private http: HttpClient) { }

    //#region Login

    async getLoginData(e: string, p: string) {
        const loginData = { email_address: e, password: p };
        let data: any = await this.http.post(this.getLoginDetails_uri, loginData).toPromise();
        console.log(data);

        if(data.valid) {
            let token: any = await this.getUserToken(e);
            if(token.msg === 'Successfully Generated User Token') {
                await this.setUser(data, token);
                return true;
            }
        }

        return false;
    }

    async setUser(data: any, token: any) {
        const localData = {
            id: data.id,
            username: data.username,
            first_name: data.first_name,
            last_name: data.last_name,
            email_address: data.email_address,
            image_path: data.image_path,
            valid: data.valid,
            role_list: {
                id: data.role_list.id,
                roles: data.role_list.roles,
            }
        };
        localStorage.setItem('_ld', JSON.stringify(localData));
        localStorage.setItem('_td', token.token);
    }

    async getUserToken(user: any) {
        return await this.http.post(this.getUserToken_uri, user).toPromise();
    }

    public getIPAddress(): Observable<any> {
        return this.http.get('https://jsonip.com');
    }

    //#endregion

    //#region Register

    async checkUserEmail(e: string) {
        const emailData = { email_address: e };

        // To Do (check existing email address)
        let data: any = await this.http.post('', emailData).toPromise();
    }

    async insertUserProfile(f: string, l: string, e: string, u: string, p: string) {
        const payload = { input_data: p, type_data: 'E' };
        let encPass: any = await this.http.post(this.crypt_uri, payload).toPromise();

        const userData = {
            first_name: f,
            last_name: l,
            email_address: e,
            username: u,
            password: encPass.data
        };

        return await this.http.post(this.insertUserAccountDetails_uri, userData).toPromise();
    }
    
    //#endregion
}
