import { Injectable } from "@angular/core";
import { Uris } from "./Uris";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class NewsletterService {
    constructor(private http: HttpClient) {}

    getNewsletter() {
        return this.http.get(`${Uris.NEWSLETTER}`).pipe(
            catchError((err: any) => {
                return err;
            }),
            map((resp: any) => {
                return resp;
            })
        );
    }
    createRandomNewsletter(obj: any) {
        return this.http.post(`${Uris.NEWSLETTER}`, obj).pipe(
            catchError((err: any) => {
                return err;
            }),
            map((resp: any) => {
                return resp;
            })
        );
    }
    deleteNewsletter(id: string) {
        return this.http.delete(`${Uris.NEWSLETTER}/${id}`).pipe(
            catchError((err: any) => {
                return err;
            }),
            map((resp: any) => {
                return resp;
            })
        );
    }
}