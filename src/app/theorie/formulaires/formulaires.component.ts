import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../modele/user';
@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent implements OnInit {

  user: User ={
    name: 'TOTO',
    password: '123546',
    emailOffers: false,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'Vendredi 20 novembre 2020'
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form1: NgForm){
    console.log('Data recu: ', form1.valid);
    console.log(form1.value);
  }
}
