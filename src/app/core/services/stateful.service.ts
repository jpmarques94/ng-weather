import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, scan, shareReplay, tap } from 'rxjs/operators';

export abstract class BaseStatefulService<T> {
	private actions = new Subject<any>();
	private state = new BehaviorSubject<T>(this.getInitialState());

	public state$: Observable<T> = this.state.asObservable().pipe(
		distinctUntilChanged(),
		shareReplay(1),
		tap((s) => this.onStateChange(s))
	);

	constructor() {
		this.actions
			.pipe(
				scan(
					(state, action) => this.reducer(state, action),
					this.getInitialState()
				)
			)
			.subscribe((newState) => this.state.next(newState));
	}

	public dispatch(action: any): void {
		this.actions.next(action);
	}

	protected abstract reducer(state: T, action: any): T;

	protected abstract onStateChange(state: T): void;

	protected abstract getInitialState(): T;
}
