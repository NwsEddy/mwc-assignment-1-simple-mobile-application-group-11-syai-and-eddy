import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Component({
  selector: 'app-about-us2',
  templateUrl: './about-us2.page.html',
  styleUrls: ['./about-us2.page.scss'],
})
export class ABoutUs2Page implements OnInit {


  
  public buttonClicked: boolean = false; //Whatever you want to initialise it as

  public onButtonClick() {

      this.buttonClicked = !this.buttonClicked;
  }

  constructor(public photoViewer: PhotoViewer) 
  { 
    this.photoViewer.show('../assets/MWC images/map3.png');
    this.photoViewer.show('../assets/MWC images/map3.png', 'My image title', {share: false});

  }

  public imgClick(imageData)
  {
    this.photoViewer.show(imageData);
  }
//   zoomImage(imageData) {
    
// }

  ngOnInit() {


    
  }
  hide:boolean = true;
  ngIfCtrl(){
    this.hide = !this.hide;
  }
  
}

