import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpservice: HttpClient) { }

  getAllProjects(){
    return this.httpservice.get("https://dijana-lazic.herokuapp.com/assets/data/projects.json",{responseType:'text' as 'json'});
  }
}
