import { Component, inject } from '@angular/core';
import { isValidUSZipCode } from '@utils/string-utils';
import { LocationService } from '../../services/location.service';

@Component({
	selector: 'app-zipcode-entry',
	templateUrl: './zipcode-entry.component.html',
})
export class ZipcodeEntryComponent {
	private locationService = inject(LocationService);

	constructor() {}

	public addLocation(zipcode: string): void {
		if (isValidUSZipCode(zipcode)) {
			this.locationService.addLocation(zipcode);
		}
	}
}
