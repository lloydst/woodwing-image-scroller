import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class FlickrService {

	constructor(private http: HttpClient) { }
	//'https://api.flickr.com/services/rest/?api_key=d6a1aa97224149e56c4040d841545f15&format=json&method=flickr.photos.getRecent&nojsoncallback=1&page=1&per_page=150'
	 search(query) {
		return this.http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d6a1aa97224149e56c4040d841545f15&tags=${query}&per_page=500&format=json&nojsoncallback=1`)
	 	}

}
