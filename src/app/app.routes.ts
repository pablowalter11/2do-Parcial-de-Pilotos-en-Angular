import { Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { UpdateComponent } from './pages/update/update.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'form', component: FormComponent },
    { path: 'form/list', component: ListComponent },
    { path: 'list', component: ListComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
