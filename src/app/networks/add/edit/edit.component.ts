import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // postbackurl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  contactForm:FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {

    
  
  this.contactForm = new FormGroup({
    postbackurl: new FormControl(null, [Validators.required]),
    baseurl : new FormControl(null, [Validators.required]),
    networkdescription : new FormControl(null, [Validators.required]),
    networktitle: new FormControl(null, [Validators.required]),
  })}
  onclick(){
this.router.navigate(['network'])
  }
  back(){
    this.router.navigate(['network'])

  }

  onSubmit(){

  }
  
}
