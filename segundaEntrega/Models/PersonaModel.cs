using System.Security.Permissions;
using System;
using Entidad;

namespace segundaEntrega.Models
{
    public class PersonaInputModel{
        public string Identificacion {get;set;}
        public string Nombres {get;set;}
        public string Apellidos {get;set;}
        public int Edad {get;set;}
        public string Sexo {get;set;}
        public string Telefono {get;set;}
        public string Email {get;set;}
        public string EstadoCivil {get;set;}
        public string PaisProcedencia { get; set; }
        public string NivelEducativo { get; set; }
    }

    
    public class PersonaViewModel : PersonaInputModel
    {
        public PersonaViewModel()
        {

        }
        public PersonaViewModel(Persona persona)
        {
            Identificacion = persona.Identificacion;
            Nombres = persona.Nombres;
            Apellidos = persona.Apellidos;
            Sexo = persona.Sexo;
            Edad = persona.Edad;
            Telefono = persona.Telefono;
            Email = persona.Email;
            EstadoCivil = persona.EstadoCivil;
            PaisProcedencia = persona.PaisProcedencia;
            NivelEducativo=persona.NivelEducativo;
            
        }
    }
}