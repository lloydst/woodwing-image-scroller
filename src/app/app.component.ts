import { Component } from '@angular/core';
import { FlickrService } from './services/flickr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent {
  title = 'image-grid-scroller';
  data
  constructor (private service: FlickrService) {}

  find(query){
	  this.service.search(query).subscribe(result=>{
		  this.data = result;
	  })
  }
}
