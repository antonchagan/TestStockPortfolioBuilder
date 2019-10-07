import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {reducers, metaReducers} from './redux/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    FormsModule,
    HttpClientModule,
    ListboxModule,
    ButtonModule,
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
