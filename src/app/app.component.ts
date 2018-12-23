import { Component } from '@angular/core';
import { FlickrService } from './services/flickr.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'

})
export class AppComponent {
	
	title = 'image-grid-scroller';
	data;
	constructor(private service: FlickrService) { }

	find(query) {
		this.service.search(query).subscribe(result => {
			this.data = result;
			this.makeDataGreatAgain()
		})
	}
	/*
	 * function keeps increasing the items in the array untill the required amount is reached
	 * right now if it overshoots it will showcase those as well
	 *
	 */
	makeDataGreatAgain() {
		let array = this.data.photos.photo
		console.log(array)
		while (array.length < 10000) {
			array.length + this.data.photos.photo.length
			array = array.concat(this.data.photos.photo)
			console.log(array.length, array)
			this.data.photos.photo = array
		}
	}
}
