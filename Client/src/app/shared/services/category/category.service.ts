import { Injectable } from '@angular/core';
import { Item } from '../../models/Item';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  fetchAllCategories() {
    return this.http.get(environment.serverUrl + `/api/categories/`);
  }
}
