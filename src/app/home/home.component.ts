import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeInfo } from 'src/model/HomeInfo';

import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarConfig, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


	HomeForm:  FormGroup;
	HomeInfo: HomeInfo | undefined;


	//Location autocomplete

	formattedaddress=" ";
	options = {
		types: ['address'],
		componentRestrictions: { country: ['US'] }
		} as unknown as Options;
		public AddressChange(address: any) {
			//setting address from API to local variable
			 this.formattedaddress=address.formatted_address
		  }
		
	
	

  //Date Picker
  hoveredDate: NgbDate | null = null;

	fromDate: NgbDate | null;
	toDate: NgbDate | null;

  constructor(private formBuilder: FormBuilder,private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, 
	config: NgbProgressbarConfig) {

		this.HomeForm = new FormGroup({});

		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

		// customize default values of progress bars used by this component tree
		config.max = 1000;
		config.striped = true;
		config.animated = true;
		config.type = 'success';
		config.height = '20px';
	}


	ngOnInit(){
		this.HomeForm = this.formBuilder.group(
			{
				PickupLocation: ['', Validators.required],
				DatePicker1: ['', Validators.required],
				DatePicker2: ['', Validators.required],
				PickupTime: ['', Validators.required],
				DropoffLocation: ['', Validators.required],
				DropoffTime: ['', Validators.required]
			}
		)

	}

	onSubmit() {
		this.HomeInfo = {
			PickupLocation: this.HomeForm.value.PickupLocation,
			DatePicker1: this.HomeForm.value.DatePicker1,
			DatePicker2: this.HomeForm.value.DatePicker2,
			PickupTime: this.HomeForm.value.PickupTime,
			DropoffLocation: this.HomeForm.value.DropoffLocation,
			DropoffTime: this.HomeForm.value.DropoffTime
		}

	}

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
		this.HomeForm.patchValue({PickupLocation: 'New York'})
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}
  
}
