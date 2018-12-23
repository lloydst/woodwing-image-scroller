import { Component } from '@angular/core';
import { FlickrService } from './services/flickr.service';

/**
 * grid scroller component
 */
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'

})
export class AppComponent {
	/**
	 * title just a random string to put in the h1 tag
	 */
	title = 'image-grid-scroller';
	/**
	 * data displayed by template, retrived from FlickrService, and added too by make data great again
	 */
	data;
	/**
	 * visual rep. that the images are being loaded
	 */
	loading: boolean = false;
	/**
	 * constructor
	 * @param service Flickerservice
	 */
	constructor(private service: FlickrService) { }

	/**
	 * retrieves the data the user asks for
	 * @param query user query, example: cats
	 */
	find(query) {
		this.loading = true;
		this.service.search(query).subscribe(result => {
			this.data = result;
			this.makeDataGreatAgain()
		})
	}
	/**
	 * function keeps increasing the items in the array untill the required amount is reached
	 * right now if it overshoots it will showcase those as well
	 */
	makeDataGreatAgain() {
		let array = this.data.photos.photo
		console.log(array)
		if (array.length < 10000){
			while (array.length < 10000) {
				array.length + this.data.photos.photo.length
				array = array.concat(this.data.photos.photo)
				console.log(array.length, array)
				this.data.photos.photo = array
			}this.loading=false;
		}
		
	}
}
