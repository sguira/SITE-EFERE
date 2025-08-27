import { AfterViewInit, Component, ElementRef, OnInit,HostListener } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AproposComponent implements OnInit, AfterViewInit {

  isDivVisible:boolean=true;

  constructor(private el:ElementRef){

  }

  ngOnInit(): void {
    // this.setupAnimation()
  }

  ngAfterViewInit(): void {
    // this.setupAnimation()
  }

  @HostListener('window.scroll',[])
  onWindowScroll(){
    const scrollPosition=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    // Définir la position à partir de laquelle la div sera visible
    if (scrollPosition > 300) { // par exemple à partir de 300px de scroll
      this.isDivVisible = true;
    } else {
      this.isDivVisible = false;
    }
  }


}
