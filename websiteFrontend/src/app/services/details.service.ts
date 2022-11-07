import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Checks } from '../components/checks/checks';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  fetchDetails(): Observable<Checks[]> {

    return <Observable<Checks[]>>this.http.get("http://localhost:9090/getAllChecks")

  }

  deleteDetails(id:any) {
    
    return this.http.delete("http://localhost:9090/deleteCheck"+"/"+id)

  }
}
