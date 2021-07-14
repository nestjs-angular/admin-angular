import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService{
  endpoint = `${environment.api}/orders`;

  export(): Observable<any> {
    return this.http.post(`${environment.api}/export`, {}, {responseType: 'blob'});
  }
}
