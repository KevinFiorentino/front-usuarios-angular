import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '@environments/environment';

import { MaterialModule } from '@material/material.module';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { AppConfigService, servicesOnRun } from '@shared/services/app-config/app-config.service';


/* ******************** REDUX ******************** */
import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store';
import { reducers, reducersInitialState } from '@shared/redux/config-store-state.model';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

    // REDUX
    NgRxStoreModule.forRoot(reducers, {
      initialState: reducersInitialState,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: servicesOnRun,
      multi: true,
      deps: [ AppConfigService ]
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
