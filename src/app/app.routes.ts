import { Routes } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
import { InfoComponent } from './home/info/info.component';




export const routes: Routes = [

    {path: '', title: 'index', component: IndexComponent},
    {path: 'index', title: 'index', component: IndexComponent},
    {path: 'info', title: 'info', component: InfoComponent},
];
