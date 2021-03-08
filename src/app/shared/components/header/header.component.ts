import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public appLanguage = '';

  constructor() { }

  ngOnInit(): void {
    this.appLanguage = localStorage.getItem('app-language') || 'en';
  }

  setAppLanguage(language: string): void {
    localStorage.setItem('app-language', language);
    window.location.reload();
  }

}
