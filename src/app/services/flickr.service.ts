import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * my flickrService
 */
@Injectable({
	providedIn: 'root'
})
export class FlickrService {
	/**
	 * constructor
	 * @param http angular http client to make http requests
	 */
	constructor(private http: HttpClient) { }
	/**
	 * http call
	 * @param query the query the user is looking for
	 */
	 search(query) {
		return this.http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d6a1aa97224149e56c4040d841545f15&tags=${query}&per_page=500&format=json&nojsoncallback=1`)
		}

}
