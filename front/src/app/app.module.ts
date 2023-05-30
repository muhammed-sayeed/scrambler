import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './featureModule/user/components/login/login.component';
import { SignUpComponent } from './featureModule/user/components/sign-up/sign-up.component';
import { HomeComponent } from './featureModule/user/components/home/home.component';
import { LayoutComponent } from './featureModule/user/components/layout/layout.component';
import { NavbarComponent } from './coreModule/components/user/navbar/navbar.component';
import { SidebarComponent } from './coreModule/components/user/sidebar/sidebar.component';
import { FooterComponent } from './coreModule/components/user/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
