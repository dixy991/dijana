import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  visitor: string = '';
  projects: Array<string> = [];
  leftOpen: boolean = false;
  rightOpen: boolean = false;
  http: HttpClient;
  endpoint = 'http://localhost:8000/mail.php';

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.projects = [
      'Vains in the Earth',
      'Sun Dried',
      'Above Sea Level',
      'Coloured Mountains',
    ];
    this.startClock();
    this.changeOnResponsive();
  }

  openLeft() {
    this.leftOpen = !this.leftOpen;
  }

  openRight() {
    this.rightOpen = !this.rightOpen;
  }

  changeOnResponsive() {
    var query = window.matchMedia('(max-width: 1024px)');
    query.addEventListener('change', this.changeOnResponsive);
    console.log(query);

    var content = <HTMLInputElement>(
      document.getElementsByClassName('content-wrap')[0]
    );
    var social = <HTMLInputElement>(
      document.getElementsByClassName('social-links')[0]
    );
    var timer = <HTMLInputElement>document.getElementsByClassName('timer')[0];

    var initialLinks = <HTMLInputElement>(
      document.querySelectorAll('.side-right > .col-xs-12')[0]
    );

    var initialTimer = <HTMLInputElement>(
      document.getElementsByClassName('side-right')[0]
    );

    if (initialLinks.hasChildNodes() && query.matches) {
      content.prepend(social);
      content.prepend(timer);
      // initialLinks.prepend(social);
      // initialTimer.prepend(timer);
    } else {
      initialLinks.prepend(social);
      initialTimer.prepend(timer);
      // content.prepend(social);
      // content.prepend(timer);
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let postVars = {
      email: form.value.inputEmail,
      name: form.value.inputName,
      message: form.value.inputMessage,
      btnSubmit: true,
    };

    this.http.post(this.endpoint, postVars).subscribe(
      (response) => console.log(response),
      (response) => console.log(response)
    );
  }

  startClock() {
    var sec = <HTMLInputElement>document.getElementById('sec');
    var min = <HTMLInputElement>document.getElementById('min');
    var hour = <HTMLInputElement>document.getElementById('hour');
    setInterval(function () {
      function r(el: HTMLInputElement, deg: number) {
        el.setAttribute('transform', 'rotate(' + deg + ' 40.5 40.5)');
      }
      var d = new Date();
      r(sec, 6 * d.getSeconds());
      r(min, 6 * d.getMinutes());
      r(hour, 30 * (d.getHours() % 12) + d.getMinutes() / 2);
    }, 1000);
  }
}
