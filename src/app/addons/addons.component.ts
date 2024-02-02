import { Component } from '@angular/core';
import { NgbProgressbarConfig, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.scss']
})
export class AddonsComponent {
  
  constructor(config: NgbProgressbarConfig) {
		// customize default values of progress bars used by this component tree
		config.max = 1000;
		config.striped = true;
		config.animated = true;
		config.type = 'success';
		config.height = '20px';
}

}
