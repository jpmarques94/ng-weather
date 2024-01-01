import { Injectable } from '@angular/core';
import { Action, ActionType } from '@utils/state-utils';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, scan, shareReplay } from 'rxjs/operators';

/**
 * * Service for managing user locations
 */
@Injectable({ providedIn: 'root' })
export class LocationService {
	private initialState = [];
	private actions = new Subject<Action<string>>();
	private state = new BehaviorSubject<string[]>(this.initialState);

	public locations$: Observable<string[]> = this.state
		.asObservable()
		.pipe(distinctUntilChanged(), shareReplay(1));

	constructor() {
		this.actions
			.pipe(
				scan(
					(state, action) => this.reducer(state, action),
					this.initialState
				)
			)
			.subscribe((newState) => this.state.next(newState));
	}

	/**
	 ** Dispatch add action to update state with the new zipcode
	 * @param zipcode The zipcode to add.
	 */
	public addLocation(zipcode: string): void {
		this.actions.next({ type: ActionType.Add, payload: zipcode });
	}

	/**
	 ** Dispatch remove action for a given zipcode
	 * @param zipcode The zipcode to remove.
	 */
	public removeLocation(zipcode: string): void {
		this.actions.next({ type: ActionType.Remove, payload: zipcode });
	}

	/**
	 ** Update state given a specific action
	 * @param state
	 * @param action
	 */
	private reducer(state: string[], action: Action<string>): string[] {
		switch (action.type) {
			case ActionType.Add:
				return !state.includes(action.payload)
					? [...state, action.payload]
					: state; //* avoid duplicated zipcodes
			case ActionType.Remove:
				return state.filter((location) => location !== action.payload);
			default:
				return state;
		}
	}
}
