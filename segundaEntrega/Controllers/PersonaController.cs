using System.Runtime.ExceptionServices;
using System.ComponentModel;
using System.IO.Pipes;
using System.Security.Permissions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using segundaEntrega.Models;
using Datos;

namespace segundaEntrega.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController :  ControllerBase
    {
        private readonly PersonaService _personaService;
        public PersonaController(PersonaContext context){
    
            _personaService = new PersonaService(context);
        }

        // GET: api/Persona
        [HttpGet()]
        public IEnumerable<PersonaViewModel> Gets(){
            var personas = _personaService.ConsultarTodos().Select(p=> new PersonaViewModel(p));
            return personas;
        }

        // POST: api/Persona
        [HttpPost]
        public ActionResult<PersonaViewModel> Post(PersonaInputModel personaInput){
            Persona persona = MapearPersona(personaInput);
            var response = _personaService.Guardar(persona);

            if (response.Error)
            {
            return BadRequest(response.Mensaje);
            }
            return Ok(response.Persona);
        }

        private Persona MapearPersona(PersonaInputModel personaInput){
            var persona = new Persona();
            
                persona.Identificacion = personaInput.Identificacion;
                persona.Nombres = personaInput.Nombres;
                persona.Apellidos = personaInput.Apellidos;
                persona.Sexo = personaInput.Sexo;
                persona.Edad = personaInput.Edad; 
                persona.Telefono=personaInput.Telefono;   
                persona.Email = personaInput.Email;
                persona.EstadoCivil=personaInput.EstadoCivil;
                persona.PaisProcedencia = personaInput.PaisProcedencia;
                persona.NivelEducativo=personaInput.NivelEducativo;
            return persona;
        }
    }
}