import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject = [{
    image: 'https://santosh088.github.io/weightloss-images/1.jpeg',
    thumbImage: 'https://santosh088.github.io/weightloss-images/1.jpeg',
}, {
    image: 'https://santosh088.github.io/weightloss-images/2.jpeg',
    thumbImage: 'https://santosh088.github.io/weightloss-images/2.jpeg'
}, {
    image: 'https://santosh088.github.io/weightloss-images/4.jpeg',
    thumbImage: 'https://santosh088.github.io/weightloss-images/4.jpeg',
},{
    image: 'https://santosh088.github.io/weightloss-images/7.jpeg',
    thumbImage: 'https://santosh088.github.io/weightloss-images/7.jpeg',
}, {
    image: 'https://santosh088.github.io/weightloss-images/5.jpeg',
    thumbImage: 'https://santosh088.github.io/weightloss-images/5.jpeg'
}, {
    image: 'https://santosh088.github.io/weightloss-images/8.jpeg',
    thumbImage: 'https://santosh088.github.io/weightloss-images/8.jpeg',
},{
  image: 'https://santosh088.github.io/weightloss-images/1.jpeg',
  thumbImage: 'https://santosh088.github.io/weightloss-images/1.jpeg',
}, {
  image: 'https://santosh088.github.io/weightloss-images/2.jpeg',
  thumbImage: 'https://santosh088.github.io/weightloss-images/2.jpeg'
}, {
  image: 'https://santosh088.github.io/weightloss-images/4.jpeg',
  thumbImage: 'https://santosh088.github.io/weightloss-images/4.jpeg',
},{
  image: 'https://santosh088.github.io/weightloss-images/7.jpeg',
  thumbImage: 'https://santosh088.github.io/weightloss-images/7.jpeg',
}, {
  image: 'https://santosh088.github.io/weightloss-images/5.jpeg',
  thumbImage: 'https://santosh088.github.io/weightloss-images/5.jpeg'
}, {
  image: 'https://santosh088.github.io/weightloss-images/8.jpeg',
  thumbImage: 'https://santosh088.github.io/weightloss-images/8.jpeg',
}
];

}
