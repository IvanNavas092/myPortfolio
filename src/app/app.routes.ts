import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { NotFound } from './shared/not-found/not-found';
import { ProjectDetail } from './features/projects/project-detail/project-detail';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'projects/:id',
        component: ProjectDetail
    },
    {
        path: '**',
        component: NotFound, 
    }
];
