import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CachingService } from '../services/caching.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
	private cachingService = inject(CachingService);

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		// Check if the request is a GET request
		if (request.method === 'GET') {
			const cachedData = this.cachingService.getData(request.url);

			if (cachedData) {
				// If cached data exists, return it as an Observable
				return new Observable((observer) => {
					observer.next(new HttpResponse({ body: cachedData }));
					observer.complete();
				});
			} else {
				// If no cached data, make the HTTP request and cache the response
				return next.handle(request).pipe(
					tap((event) => {
						if (event instanceof HttpResponse) {
							this.cachingService.cacheData(
								request.url,
								event.body
							);
						}
					})
				);
			}
		} else {
			// If it's not a GET request, proceed with the original request
			return next.handle(request);
		}
	}
}
