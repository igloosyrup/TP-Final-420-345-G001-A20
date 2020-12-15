import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HoloMember } from 'src/app/modele/holoMember';
import { HoloMemberService } from '../../services/holo-member.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  applicationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl('', [Validators.required, Validators.max(999)]),
    youtube: new FormControl('', Validators.required),
    profile: new FormControl('', Validators.required),
  });

  invalidFormMessage: string = '';

  constructor(private service: HoloMemberService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      // this.service.post(new HoloMember());
      this.service.post(this.applicationForm.value).subscribe(data => {
        this.invalidFormMessage ='';
        this.applicationForm.reset();
        this.router.navigateByUrl('/home');
      });
    }
    else{
      this.invalidFormMessage = "Please fill out the form before submitting!"
    }
  }

  get form() {
    return this.applicationForm.controls;
  }


}
