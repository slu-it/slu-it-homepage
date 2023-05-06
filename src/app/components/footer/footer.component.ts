import {Component} from '@angular/core';
import {LinkIcon} from "../../model/model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  linkIcons: LinkIcon[] = [
    {name: "GitHub", link: "https://github.slu-it.de", icon: "github.png"} as LinkIcon,
    {name: "LinkedIn", link: "https://linkedin.slu-it.de", icon: "linkedin.png"} as LinkIcon,
    {name: "Xing", link: "https://xing.slu-it.de", icon: "xing.png"} as LinkIcon,
    {name: "PayPal", link: "https://paypal.slu-it.de", icon: "paypal.png"} as LinkIcon,
  ]
}
