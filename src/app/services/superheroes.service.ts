import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { 
    
  }

  getSuperheroes(name?) {
    name = name ? name : 'batman';
    return this.http.get(this.apiUrl + 'search/' + name)
  }

  
  
}
