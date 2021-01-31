import { Inject, Injectable } from '@angular/core';
import { Language } from '../models/translation.model';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  lang: Language = 'en'

  constructor() { }
}
