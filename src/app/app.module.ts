import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule,MatSortModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import {UserService} from './user.service';


@NgModule({
  declarations: [
    AppComponent
,
    HomeComponent
,
    TableComponent
],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
