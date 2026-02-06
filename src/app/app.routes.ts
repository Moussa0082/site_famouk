import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { Index2Component } from './demo/index2/index2.component';
import { Index3Component } from './demo/index3/index3.component';
import { Index4Component } from './demo/index4/index4.component';
import { Index5Component } from './demo/index5/index5.component';
import { IndexSingle5Component } from './demo/index-single-5/index-single-5.component';
import { IndexSingle1Component } from './demo/index-single-1/index-single-1.component';
import { IndexSingle2Component } from './demo/index-single-2/index-single-2.component';
import { IndexSingle3Component } from './demo/index-single-3/index-single-3.component';
import { IndexSingle4Component } from './demo/index-single-4/index-single-4.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTE),
  },
  
  {
    path:'index-single',
    component:IndexSingle1Component,
    data: { title: 'Helpmore-Charity and Fundraising Template' },
  },
  {
    path:'index-2',
    component:Index2Component,
    data: { title: 'Helpmore || 2-Charity and Fundraising Template' },
  },
  {
    path:'index-single-2',
    component:IndexSingle2Component,
    data: { title: 'Helpmore-Charity and Fundraising Template' },
  },
  {
    path:'index-3',
    component:Index3Component,
    data: { title: 'Helpmore || 3-Charity and Fundraising Template' },
  },
  {
    path:'index-single-3',
    component:IndexSingle3Component,
    data: { title: 'Helpmore-Charity and Fundraising Template' },
  },
  {
    path:'index-4',
    component:Index4Component,
    data: { title: 'Helpmore || 4-Charity and Fundraising Template' },
  },
  {
    path:'index-single-4',
    component:IndexSingle4Component,
    data: { title: 'Helpmore-Charity and Fundraising Template' },
  },
  {
    path:'index-5',
    component:Index5Component,
    data: { title: 'Helpmore || 5-Charity and Fundraising Template' },
  },
  {
    path:'index-single-5',
    component:IndexSingle5Component,
    data: { title: 'Helpmore-Charity and Fundraising Template' },
  },
];
