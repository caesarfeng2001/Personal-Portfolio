import { Component, OnInit, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input () introHeight: number;
  faBars = faBars;
  constructor() { }

  ngOnInit(): void {
    this.convertNavbar();
  }


  convertNavbar() {
    var navbar = document.getElementById("navbar");
    var home = document.getElementById("Home")
    var about = document.getElementById("About")
    var experience = document.getElementById("Experience")
    var contact = document.getElementById("Contact")
    var caesarFeng = document.getElementById("caesarFeng")
    window.onscroll = () => {
      if (scrollY > this.introHeight) {
        navbar.id = "navbar-scroll";
        home.id = "home-scroll";
        about.id= "about-scroll";
        experience.id = "experience-scroll";
        contact.id = "contact-scroll";
        caesarFeng.id = "caesarFeng-scroll";
      } else {
        navbar.id = "navbar";
        home.id = "Home";
        about.id= "About";
        experience.id = "Experience";
        contact.id = "Contact";
        caesarFeng.id = "caesarFeng";
      }
    }
  }
  
/*
  stickyFunction() {
    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  */
}

