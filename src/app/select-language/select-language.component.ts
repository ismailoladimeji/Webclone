import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./../app.component.scss']
})
export class SelectLanguageComponent {
  val:any={
    pix:'fi fi-us',
    name: 'us'
  }
  constructor(public translate: TranslateService) { }
  getClass(x:any):string{
    console.log('fi fi-' + x)
    this.val.pix= 'fi fi-' + x;
    this.val.name=x;
    this.translate.use(x)
    return this.val
  }
}