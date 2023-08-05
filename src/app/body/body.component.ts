import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  imageList: any[] = [
    {
      name: 'Mac Service  T2/M1/M2',
      imageUrl: 'images/gallery/MAc.jpeg',
      link: './cart/group/15/service/imei/groupname/Mac-Service--T2M1M2-'
    },
    {
      name: 'XIAOMI',
      imageUrl: 'images/gallery/mi2.jpeg',
      link: './cart/group/59/service/imei/groupname/XIAOMI'
    },
    // Add more image objects as needed
  ];

}
