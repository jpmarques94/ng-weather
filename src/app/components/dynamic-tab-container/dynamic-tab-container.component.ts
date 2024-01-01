import {
	AfterContentInit,
	Component,
	ContentChildren,
	OnDestroy,
	QueryList,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { DynamicTabComponent } from './dynamic-tab.directive';

@Component({
	selector: 'dynamic-tab-container',
	standalone: true,
	imports: [BrowserModule],
	templateUrl: './dynamic-tab-container.component.html',
	styleUrl: './dynamic-tab-container.component.css',
})
export class DynamicTabContainerComponent
	implements AfterContentInit, OnDestroy
{
	@ContentChildren(DynamicTabComponent) tabs!: QueryList<DynamicTabComponent>;

	private subscription: Subscription;

	public currentTabIndex = 0;

	ngAfterContentInit(): void {
		this.subscription = this.tabs.changes
			.pipe(
				map((tabs) => tabs.toArray()),
				tap((currentTabs) => {
					if (currentTabs.length === 0) {
						this.currentTabIndex = 0; //* reset index when there are no tabs
					}
				}),
				filter((currentTabs) => currentTabs.length > 0),
				map((currentTabs) =>
					Math.min(this.currentTabIndex, currentTabs.length - 1)
				)
			)
			.subscribe((index) => this.openTab(index));
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	openTab(index: number): void {
		this.currentTabIndex = index;
	}

	closeTab(tab: DynamicTabComponent, index: number): void {
		tab.onClose.emit();
	}
}
