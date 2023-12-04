import { Component, ElementRef, OnInit, ViewChild,Renderer2, HostListener} from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';
import { TestdirectiveDirective } from '../appDirective/testdirective.directive';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName ="Anup";
@ViewChild('box')boxs: ElementRef; 
@ViewChild(TestdirectiveDirective) myDir : TestdirectiveDirective;

@ViewChild(Comp2Component)child : Comp2Component;

// view child is not recommened to access DOM element instead of that we can user Renderer in angular
constructor(private renderer:Renderer2){
}

@HostListener('click') myClick(){
// alert('clicked')

}

@HostListener('window:scroll',['$event']) myScroll(){
  console.log("scrolling")
} 

ngOnInit(){
// var num=1;
$(window).scroll(function() {
  // num =num+1;
  // console.log(num)
  console.log("window scrolling")
})
}
ngAfterViewInit(){
  //using view child
  // console.log(this.boxs)
  // this.boxs.nativeElement.style.backgroundColor="blue";
  // this.boxs.nativeElement.classList = "boxblue";
  // this.boxs.nativeElement.innerHTML= "this is modified html";

  //using renderer
  this.renderer.setStyle(this.boxs.nativeElement,'backgroundColor','pink')
  this.renderer.setStyle(this.boxs.nativeElement,'color','black')
  this.renderer.addClass(this.boxs.nativeElement,'myClass')
  this.renderer.setAttribute(this.boxs.nativeElement,'title','this is test title')
}

changeChildProperty(){
this.child.userName = "UxTrendz";
}

callChildMethod(){
 this.child.clickMe();
}

}
