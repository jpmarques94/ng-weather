import { Injectable } from '@angular/core';
import { BaseStatefulService } from '@core/services/stateful.service';
import { Action, ActionType } from '@utils/state-utils';

const LOCATIONS: string = 'locations';

@Injectable({ providedIn: 'root' })
export class LocationService extends BaseStatefulService<
	string[],
	Action<string | number>
> {
	constructor() {
		super();
	}

	protected reducer(
		state: string[],
		action: Action<string | number>
	): string[] {
		switch (action.type) {
			case ActionType.Add:
				return [...state, action.payload as string];
			case ActionType.Remove:
				return [
					...state.slice(0, action.payload as number),
					...state.slice((action.payload as number) + 1),
				];
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

	public removeLocation(index: number): void {
		this.dispatch({ type: ActionType.Remove, payload: index });
	}

	private updateStorageFn = (locations) =>
		localStorage.setItem(LOCATIONS, JSON.stringify(locations));
}
