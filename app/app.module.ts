import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoinpageComponent } from './loinpage/loinpage.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { CommandsComponent } from './commands/commands.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterLoginComponent,
    LoinpageComponent,
    ProfileComponent,
    ProfileEditComponent,
    CommandsComponent,

    
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
export class AppModule { }
