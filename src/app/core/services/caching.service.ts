import { Injectable, inject } from '@angular/core';
import { CACHE_DURATION } from '../tokens/app.tokens';

@Injectable({
	providedIn: 'root',
})
export class CachingService {
	private storageKeyPrefix = 'weather-app-cache-';
	private maxAge: number = inject(CACHE_DURATION) ?? 0;

	// Check if data is present in cache and not expired
	getData(key: string): any | null {
		const storageKey = this.getStorageKey(key);
		const cachedData = localStorage.getItem(storageKey);

		try {
			const { data, timestamp } = cachedData
				? JSON.parse(cachedData)
				: { data: null, timestamp: 0 };

			if (Date.now() - timestamp < this.maxAge) {
				return data;
			}
		} catch (error) {
			console.error('Error parsing JSON from localStorage:', error);
		}

		return null;
	}

	// Cache data with a specific key
	cacheData(key: string, data: any): void {
		const storageKey = this.getStorageKey(key);
		const timestamp = Date.now();
		const cacheEntry = { data, timestamp };

		try {
			localStorage.setItem(storageKey, JSON.stringify(cacheEntry));
		} catch (error) {
			console.error('Error storing data in localStorage:', error);
		}
	}

	// Generate a unique storage key for each cache entry
	private getStorageKey(key: string): string {
		return `${this.storageKeyPrefix}${key}`;
	}
}
