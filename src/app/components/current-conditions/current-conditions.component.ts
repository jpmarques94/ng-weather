import {
	Component,
	DestroyRef,
	inject,
	Injector,
	OnInit,
	Signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ActionType } from '@utils/state-utils';
import { combineLatest, forkJoin, of } from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';
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
	private injector = inject(Injector);
	protected locationService = inject(LocationService);
	protected currentConditionsByZip: Signal<ConditionsAndZip[]> =
		this.weatherService.getCurrentConditions();

	private readonly currentConditionsByZip$ = toObservable(
		this.currentConditionsByZip,
		{
			injector: this.injector,
		}
	);

	public ngOnInit(): void {
		// Set initial conditions based on the current locations state
		this.setInitialConditions();

		// Subscribe to updates in conditions
		this.listenForConditionsUpdate();
	}

	public showForecast(zipcode: string): void {
		this.router.navigate(['/forecast', zipcode]);
	}

	// Fetch and add current conditions for each initial zip code
	private setInitialConditions(): void {
		combineLatest([
			this.locationService.state$,
			this.currentConditionsByZip$,
		])
			.pipe(
				first(),
				filter(
					([initialState, currentConditions]) =>
						currentConditions.length !== initialState.length
				),
				switchMap(([initialState]) =>
					forkJoin(
						initialState.map((zipcode) =>
							of(
								this.weatherService.addCurrentConditions(
									zipcode
								)
							)
						)
					)
				)
			)
			.subscribe();
	}

	// Listen for changes in locations and update weather service accordingly
	private listenForConditionsUpdate(): void {
		this.locationService.onAction$
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(({ type, payload }) => {
				switch (type) {
					case ActionType.Add: {
						this.weatherService.addCurrentConditions(payload);
						break;
					}
					case ActionType.Remove: {
						this.weatherService.removeCurrentConditions(payload);
						break;
					}
				}
			});
	}
}
