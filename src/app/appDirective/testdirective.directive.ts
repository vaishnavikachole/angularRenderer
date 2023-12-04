import { Directive, Renderer2 ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private renderer:Renderer2, private element: ElementRef) { 
    this.renderer.setStyle(element.nativeElement,'backgroundColor','yellow')
  }
  changeBg(color:string){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',color)
  }

  @HostListener('click') myClick(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','pink')
  }

  @HostListener('mouseover') myMouseOver(){
    // console.log("mouseOver")
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','lightgray')
  } 
  @HostListener('mouseout') myMouseOut(){
    // console.log("mouseOut")
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white')
  } 



}
