import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Mobile } from '../mobile.model';


const httpOptions = {
  header: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8090/mobiles';

  getMobiles() {
    return this.http.get<Mobile[]>(this.baseUrl+"/");
  }

  getMobileById(id: number) {
    return this.http.get<Mobile>(this.baseUrl+"/"+id);
  }

  createMobile(mobile:Mobile) {
    return this.http.post(this.baseUrl,mobile);
  }

  updateMobile(mobile:Mobile) {
    return this.http.put(this.baseUrl+"/"+mobile.id,mobile);
  }

  deleteMobile(id: number) {
    return this.http.delete(this.baseUrl+"/"+id);
  }

}
