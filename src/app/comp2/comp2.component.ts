import { Component,ElementRef,ContentChild ,AfterContentInit,Renderer2,ViewChild} from '@angular/core';
import { TestdirectiveDirective } from '../appDirective/testdirective.directive';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements AfterContentInit{

userName: string="Default Value";
@ContentChild('childCon') childparagraph : ElementRef;

@ViewChild(TestdirectiveDirective) myDir : TestdirectiveDirective;

constructor(private renderer: Renderer2){

}
ngAfterContentInit(){
  console.log(this.childparagraph)
  this.renderer.setStyle(this.childparagraph.nativeElement,'color','red')
}
clickMe(){
  alert(this.userName)
  var text = this.renderer.createText("this text is appended by renderer")
  this.renderer.appendChild(this.childparagraph.nativeElement,text)
}

changeColor(color:string){
this.myDir.changeBg(color)
}
}



