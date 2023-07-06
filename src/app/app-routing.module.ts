import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { CanActivateGuard } from './auth/auth.Guard';
import { AuthService } from './auth/auth.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [];

const childRoutes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [CanActivateGuard], canActivateChild: [CanActivateGuard],
    // {
    //   path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
       { path: 'app-dashboard', component: DashboardComponent },
       { path: 'app-about', component: AboutComponent },
       { path: 'app-contact', component: ContactComponent },
       { path: 'app-blogs', component: BlogsComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(childRoutes)],
  exports: [RouterModule],
  providers: [CanActivateGuard, AuthService]
})

export class AppRoutingModule { }
