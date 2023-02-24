import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ExperienceTagService {

    constructor(private http: HttpClient) { }

    getTags() {
        return this.http.get('assets/json/experience-tags.json');
    }
}
