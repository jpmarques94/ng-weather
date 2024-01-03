import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CurrentConditions } from '../../models/current-conditions.type';
import { LocationService } from '../../services/location.service';
import { WeatherService } from '../../services/weather.service';

interface LocationWeatherViewModel {
	zipcode: string;
	title: string;
	data?: CurrentConditions;
	errorMessage?: string;
}

@Component({
	selector: 'app-current-conditions',
	templateUrl: './current-conditions.component.html',
	styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {
	private weatherService = inject(WeatherService);
	protected locationService = inject(LocationService);

	// Observable to store the combined data for all locations
	public readonly locationsData$: Observable<LocationWeatherViewModel[]> =
		this.locationService.state$.pipe(
			mergeMap((locationState: string[]) => {
				// Check if there are any stored zip code inputs
				if (locationState.length === 0) {
					// If no zip codes, stop the chain to avoid unnecessary operations
					return of([]);
				}

				// For each stored location, fetch the corresponding weather data
				// Map it to an array of objects containing zip and corresponding data or error message
				return combineLatest(
					this.getLocationDataForState(locationState)
				);
			})
		);

	// Request data for each zipcode in the locationsState using the weatherService
	// If there is no data for a certain zipcode, return an object with an error message and no data
	private getLocationDataForState(
		locationState: string[]
	): Observable<LocationWeatherViewModel>[] {
		return locationState.map((zipcode: string) =>
			this.weatherService.addCurrentConditions(zipcode).pipe(
				map((data: CurrentConditions) => ({
					zipcode,
					data,
					title: `${data.name} (${zipcode})`,
				})),
				catchError((errorResponse: HttpErrorResponse) => {
					return of({
						zipcode: zipcode,
						title: zipcode,
						errorMessage:
							errorResponse.error.message || 'An error occurred',
					});
				})
			)
		);
	}
}
