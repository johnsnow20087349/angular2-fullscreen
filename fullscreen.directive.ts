import { AfterViewInit, Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[ng2fullscreen]'
})

export class FullscreenDirective implements AfterViewInit {

  fullscreen: any;

  private element: any;

  @Input('fullscreen')
  set setFullscreen(val) {
    if (val) {
      this.launchFullscreen(this.element);
    }
  }

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: any) {
  }

  ngAfterViewInit() {
    this.element = this.el.nativeElement;
  }

  launchFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen();
    }
  }

  exitFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.webkitCancelFullScreen()) {
      this.document.webkitExitFullscreen();
    } else if (this.document.webkitExitFullscreen) {
      this.document.webkitExitFullscreen();
    }
  }
}
