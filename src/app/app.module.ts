import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DynamicTabComponent } from './components/dynamic-tabs/dynamic-tab.directive';
import { DynamicTabContainerComponent } from './components/dynamic-tabs/dynamic-tabs.component';
import { CachingInterceptor } from './core/interceptors/caching.interceptor';
import { CACHE_DURATION } from './core/tokens/app.tokens';
import { CurrentConditionsComponent } from './features/current-conditions/current-conditions.component';
import { ForecastsListComponent } from './features/forecasts-list/forecasts-list.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { ZipcodeEntryComponent } from './features/zipcode-entry/zipcode-entry.component';

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
