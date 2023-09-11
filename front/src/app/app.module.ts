import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeuserviewComponent } from './views/homeuserview/homeuserview.component';
import { HomeadminviewComponent } from './views/homeadminview/homeadminview.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderclientComponent } from './shared/headerclient/headerclient.component';
import { HeaderadminComponent } from './shared/headeradmin/headeradmin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeuserviewComponent,
    HomeadminviewComponent,
    BannerComponent,
    FooterComponent,
    HeaderadminComponent,
    HeaderclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
