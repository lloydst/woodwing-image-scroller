import { Component } from '@angular/core';
import { FlickrService } from './services/flickr.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'

})
export class AppComponent {
	title = 'image-grid-scroller';
	data;
	photoArray;
	constructor(private service: FlickrService) { }

	find(query) {
		this.service.search(query).subscribe(result => {
			this.data = result;
			this.makeDataGreatAgain()
		})
	}
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
