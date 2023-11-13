import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-lottie-demo',
  templateUrl: './lottie-demo.component.html',
  styleUrls: ['./lottie-demo.component.scss'],
})
export class LottieDemoComponent implements OnInit {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;

  ngOnInit() {
    if (this.lottieContainer && this.lottieContainer.nativeElement) {
      const animation = lottie.loadAnimation({
        container: this.lottieContainer.nativeElement,
        renderer: 'svg', // Use 'svg' or 'canvas' as per your preference
        loop: true,
        autoplay: true,
        path: '/assets/ux.json', // Path to your Lottie animation file
      });
    } else {
      console.error('Container not found or does not have nativeElement property.');
    }
  }
}
