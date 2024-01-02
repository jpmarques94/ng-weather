import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LocationService } from '../../services/location.service';
import { WeatherService } from '../../services/weather.service';
import { CurrentConditions } from './current-conditions.type';

@Component({
	selector: 'app-current-conditions',
	templateUrl: './current-conditions.component.html',
	styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {
	private router = inject(Router);
	private weatherService = inject(WeatherService);
	protected locationService = inject(LocationService);

	public vm$ = this.locationService.state$.pipe(
		mergeMap((locationState: string[]) => {
			if (locationState.length === 0) {
				return of([]);
			}

			return combineLatest(
				this.getLocationDataForState(locationState)
			).pipe(
				map((currentConditionsArray: CurrentConditions[]) =>
					currentConditionsArray.map(
						(data: CurrentConditions, index: number) => ({
							zip: locationState[index],
							data,
						})
					)
				)
			);
		})
	);

	public showForecast(zipcode: string): void {
		this.router.navigate(['/forecast', zipcode]);
	}

	// Request each zipcode data (from API or cache) in the locationsState
	private getLocationDataForState(
		locationState: string[]
	): Observable<void | CurrentConditions>[] {
		return locationState.map((zipcode: string, index: number) =>
			this.weatherService
				.addCurrentConditions(zipcode)
				.pipe(
					catchError(() =>
						of(this.locationService.removeLocation(index))
					)
				)
		);
	}
}
