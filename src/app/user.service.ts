import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Repos } from './models/repos.model';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user.model';
import 'rxjs/add/operator/map'


@Injectable()
export class UserService {

private serviceUrl = "https://jsonplaceholder.typicode.com/users";
constructor(private http: HttpClient) { }

getUser():Observable<User[]>{

  return this.http.get<User[]>(this.serviceUrl);
}


getRepos():Observable<Repos[]> {
  const uri = 'https://api.github.com/users/matheusml/repos';
  return this.http.get<Repos[]>(uri);
}

}
