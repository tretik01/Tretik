import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SigninPageComponent} from './pages/signin-page/signin-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { PageNotFaundComponent } from './pages/page-not-faund/page-not-faund.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfilePageComponent,
    NewsPageComponent,
    LoginPageComponent,
    SigninPageComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    PageNotFaundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
