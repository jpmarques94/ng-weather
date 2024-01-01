import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { DynamicTabContainerComponent } from './components/dynamic-tab-container/dynamic-tab-container.component';
import { DynamicTabComponent } from './components/dynamic-tab-container/dynamic-tab.directive';
import { ForecastsListComponent } from './components/forecasts-list/forecasts-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';
import { CachingInterceptor } from './core/interceptors/caching.interceptor';
import { CACHE_DURATION } from './core/tokens/app.tokens';

@NgModule({
	declarations: [
		AppComponent,
		ZipcodeEntryComponent,
		ForecastsListComponent,
		CurrentConditionsComponent,
		MainPageComponent,
	],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		routing,
		DynamicTabContainerComponent,
		DynamicTabComponent,
		ServiceWorkerModule.register('/ngsw-worker.js', {
			enabled: environment.production,
		}),
	],
	providers: [
		{
			provide: CACHE_DURATION,
			useValue: environment.cacheDuration,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CachingInterceptor,
			multi: true,
		},
	],
})
export class AppModule {}
