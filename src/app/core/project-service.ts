import { Injectable } from '@angular/core';
import { projectList } from '@/utils/projects';
import { Project } from '@/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjectById(id: string): Project | undefined {
    return projectList.find(p => p.id === id);


  }

}
