import { Injectable } from '@angular/core';
import { BaseStatefulService } from '@core/services/stateful.service';
import { Action, ActionType } from '@utils/state-utils';

const LOCATIONS: string = 'locations';

@Injectable({ providedIn: 'root' })
export class LocationService extends BaseStatefulService<string[]> {
	constructor() {
		super();
	}

	protected reducer(state: string[], action: Action<string>): string[] {
		switch (action.type) {
			case ActionType.Add:
				return !state.includes(action.payload)
					? [...state, action.payload]
					: state;
			case ActionType.Remove:
				return state.filter((location) => location !== action.payload);
			default:
				return state;
		}
	}

	protected onStateChange(state: string[]): void {
		this.updateStorageFn(state);
	}

	protected getInitialState(): string[] {
		return JSON.parse(localStorage.getItem(LOCATIONS)) ?? [];
	}

	// Additional methods specific to LocationService
	public addLocation(zipcode: string): void {
		this.dispatch({ type: ActionType.Add, payload: zipcode });
	}

	public removeLocation(zipcode: string): void {
		this.dispatch({ type: ActionType.Remove, payload: zipcode });
	}

	private updateStorageFn = (locations) =>
		localStorage.setItem(LOCATIONS, JSON.stringify(locations));
}
