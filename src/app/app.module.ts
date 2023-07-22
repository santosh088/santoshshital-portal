import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AgmCoreModule } from '@agm/core';
import { WeightlossComponent } from './weightloss/weightloss.component';
import { DietDetailsComponent } from './diet-details/diet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LayoutComponent,
    AboutComponent,
    ContactComponent,
    BlogsComponent,
    WeightlossComponent,
    DietDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
