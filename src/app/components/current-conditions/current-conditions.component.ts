import { Component, DestroyRef, inject, OnInit, Signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { findDifferentElements } from '@utils/array-utils';
import { pairwise, startWith, tap } from 'rxjs/operators';
import { ConditionsAndZip } from '../../models/conditions-and-zip.type';
import { LocationService } from '../../services/location.service';
import { WeatherService } from '../../services/weather.service';

@Component({
	selector: 'app-current-conditions',
	templateUrl: './current-conditions.component.html',
	styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent implements OnInit {
	private weatherService = inject(WeatherService);
	private router = inject(Router);
	private destroyRef = inject(DestroyRef);
	protected locationService = inject(LocationService);
	protected currentConditionsByZip: Signal<ConditionsAndZip[]> =
		this.weatherService.getCurrentConditions();

	public ngOnInit(): void {
		this.locationService.state$
			.pipe(
				startWith([]),
				pairwise(),
				takeUntilDestroyed(this.destroyRef),
				tap(([previousLocations, currentLocations]) =>
					this.updateConditionsByZip(
						previousLocations,
						currentLocations
					)
				)
			)
			.subscribe();
	}

	public showForecast(zipcode: string): void {
		this.router.navigate(['/forecast', zipcode]);
	}

	/**
	 ** Updates the weather conditions based on changes in locations service state.
	 ** Determines whether a location is added or removed and updates
	 ** the weather conditions accordingly.
	 *
	 * @param previousLocations - The array of previous locations.
	 * @param currentLocations - The array of current locations.
	 */
	private updateConditionsByZip(
		previousLocations: string[],
		currentLocations: string[]
	) {
		//* Check if a location is being added or removed
		const isAddingLocation =
			currentLocations.length > previousLocations.length;

		//* Find the zipcodes that are different between the two arrays
		const diffZipcodes = findDifferentElements(
			previousLocations,
			currentLocations
		);

		//* Update weather conditions based on the operation (add or remove)
		diffZipcodes.forEach((zipcode) => {
			isAddingLocation
				? this.weatherService.addCurrentConditions(zipcode)
				: this.weatherService.removeCurrentConditions(zipcode);
		});
	}
}
