
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

const APP_ROUTES: Routes = [

  {
    path: '',
    component: IndexComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// 