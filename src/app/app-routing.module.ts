import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SigninPageComponent} from "./pages/signin-page/signin-page.component";
import {LoginGuard} from "./guards/login.guard";
import {PageNotFaundComponent} from "./pages/page-not-faund/page-not-faund.component";


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'login', component: LoginPageComponent, canActivate: [LoginGuard]},
  {path: 'sign', component: SigninPageComponent, canActivate: [LoginGuard]},
  {path: '**', pathMatch: 'full', component: PageNotFaundComponent,}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
