export interface Action<T> {
	type: ActionType;
	payload?: T;
}

export enum ActionType {
	Init,
	Add,
	Remove,
}
