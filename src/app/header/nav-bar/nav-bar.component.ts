import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/shared/services/translate.service';
import translationFile from 'src/assets/i18n/app/header/nav-bar'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  readonly i18n = translationFile[this.translateService.lang]

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
  }

}
