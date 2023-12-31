import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { ForecastsListComponent } from './components/forecasts-list/forecasts-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';

@NgModule({
	declarations: [
		AppComponent,
		ZipcodeEntryComponent,
		ForecastsListComponent,
		CurrentConditionsComponent,
		MainPageComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		routing,
		ServiceWorkerModule.register('/ngsw-worker.js', {
			enabled: environment.production,
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
