import {
	AfterContentInit,
	Component,
	ContentChildren,
	DestroyRef,
	QueryList,
	inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BrowserModule } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { DynamicTabComponent } from './dynamic-tab.directive';

@Component({
	selector: 'dynamic-tabs',
	standalone: true,
	imports: [BrowserModule],
	templateUrl: './dynamic-tabs.component.html',
	styleUrl: './dynamic-tabs.component.css',
})
export class DynamicTabContainerComponent implements AfterContentInit {
	@ContentChildren(DynamicTabComponent)
	public tabs!: QueryList<DynamicTabComponent>;
	public currentIndex = 0;
	private destroyRef = inject(DestroyRef);

	public ngAfterContentInit(): void {
		// Listen for changes in the list of tabs and update the current tab index accordingly.
		// This ensures the active tab's style is applied and the correct template is displayed.
		this.tabs.changes
			.pipe(
				takeUntilDestroyed(this.destroyRef),
				map(
					(tabs) =>
						tabs.length === 0
							? 0
							: Math.min(this.currentIndex, tabs.length - 1) // Ensure that removing tabs updates to the index of the last available tab.
				)
			)
			.subscribe((index) => (this.currentIndex = index));
	}
}
