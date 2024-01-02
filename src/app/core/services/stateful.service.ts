import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, scan, shareReplay, tap } from 'rxjs/operators';

export abstract class BaseStatefulService<TValue, TAction> {
	private readonly initialState = this.getInitialState();
	private actions = new Subject<TAction>();
	private state = new BehaviorSubject<TValue>(this.initialState);

	public onAction$ = this.actions.asObservable();

	public state$: Observable<TValue> = this.state.asObservable().pipe(
		distinctUntilChanged(),
		shareReplay(1),
		tap((s) => this.onStateChange(s))
	);

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

	public dispatch(action: TAction): void {
		this.actions.next(action);
	}

	protected abstract reducer(state: TValue, action: TAction): TValue;

	protected abstract onStateChange(state: TValue): void;

	protected abstract getInitialState(): TValue;
}
