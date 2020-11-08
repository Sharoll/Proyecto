import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService} from '../../services/persona.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  formGroup: FormGroup;
  persona: Persona;

  constructor(private personaService: PersonaService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.persona = new Persona();
    this.buildForm();
  }

  private buildForm(){
    this.persona.identificacion = '';
    this.persona.nombres = '';
    this.persona.apellidos = '';
    this.persona.edad = 0;
    this.persona.sexo = '';
    this.persona.telefono = '';
    this.persona.email = '';
    this.persona.estadoCivil = '';
    this.persona.paisProcedencia = '';
    this.persona.nivelEducativo = '';
    
    this.formGroup = this.formBuilder.group({
      identificacion: [this.persona.identificacion, Validators.required],
      nombres: [this.persona.nombres, Validators.required],
      apellidos: [this.persona.apellidos, Validators.required],
      edad: [this.persona.edad, [Validators.required, Validators.min(1)]],
      sexo: [this.persona.sexo, [Validators.required,  this.validarSexo]],
      telefono: [this.persona.telefono, Validators.required],
      email: [this.persona.email, Validators.required],
      estadoCivil: [this.persona.estadoCivil, Validators.required],
      paisProcedencia: [this.persona.paisProcedencia, Validators.required],
      nivelEducativo: [this.persona.nivelEducativo, Validators.required]
    });
   
  }

  private validarSexo (control: AbstractControl){
    const sexo = control.value;

    if(sexo.toLocaleUpperCase()!== 'M' && sexo.toLocaleUpperCase()!== 'F'){
      return {validarSexo: true, messageSexo: 'Sexo No Valido' };
    }
    return null;
  }

  onSubmit() {

        if (this.formGroup.invalid) {
          return;
        }
        this.add();
  }


  add(){
    this.persona = this.formGroup.value;
    this.personaService.post(this.persona).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent);
        messageBox.componentInstance.title="Resultado Operacion";
        messageBox.componentInstance.message ='Persona Creada!'
        this.persona = p;
      }
      });
    }
    
    get control() { 
      return this.formGroup.controls;
    }
}
