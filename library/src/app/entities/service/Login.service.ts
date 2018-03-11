import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private _http: Http) {
        this._http.get('https://jsonplaceholder.typicode.com/users').map(this.extractData);
    }
    public getLogins() {
       
    }
    public extractData(res: Response) {
        let data = res.json();
        return data || {};
    }
}