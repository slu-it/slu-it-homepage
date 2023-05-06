import {Component, Input} from '@angular/core';
import {LinkIcon} from '../../model/model'

@Component({
  selector: 'app-footer-link-element',
  templateUrl: './footer-link-element.component.html',
  styleUrls: ['./footer-link-element.component.css']
})
export class FooterLinkElementComponent {
  @Input() model: LinkIcon | undefined
}
