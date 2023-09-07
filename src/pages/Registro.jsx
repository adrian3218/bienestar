import React from 'react';
import AutoComplete from '../components/AutoComplete';
import Button from '../components/Button';
import Desplegable from '../components/Desplegable';
import Fecha from '../components/Fecha';
import Input from '../components/Input';
import miImagen from './img/Logo.png'

const Registro = () => {
  return (
    <div>
      <img src={miImagen} alt="Descripción de la imagen" />
      <h1>REGISTRO<h6>No tienes una cuenta? Registrate aquí</h6></h1> 
      <Input label="Nombres y Apellidos" />
      <Desplegable  
        options={[
          { value: 'Cosalud', label: 'Cosalud' },
          { value: 'Salud total', label: 'Salud total' },
          { value: 'otro', label: 'Otro' },
        ]}
      />
       <Desplegable
        options={[
          { value: 'masculino', label: 'Masculino' },
          { value: 'femenino', label: 'Femenino' },
          { value: 'otro', label: 'Otro' },
        ]}
      />
      <Desplegable
        options={[
          { value: 'Targeta de identidad', label: 'Targeta de identidad' },
          { value: 'cedula', label: 'Cédula' },
          { value: 'otro', label: 'Otro' },
        ]}
      />
      <Input label="Número de Documento" />
      <Input label="Teléfono" />
      <Desplegable
        options={[
          { value: 'a+', label: 'A' },
          { value: 'o+', label: 'O+' },
          { value: 'b+', label: 'B+' },
        ]} 
      />
      <Input label="Correo Institucional" />
      <Input label="Correo Personal" />
      <Input label="Contraseña" type="password" />
      <Input label="Confirmación de Contraseña" type="password" />
     
      <Fecha label="Fecha de Nacimiento" />
      <Desplegable
        options={[
          { value: 'aprendiz', label: 'Aprendiz' },
          { value: 'instructor', label: 'Instructor' },
          { value: 'administrador', label: 'Administrador' },
        ]} 
      />
      <Input label="Número de Ficha" />
      <Input label="Dirección" />
      <Button label="Registrarse" />
      <div className="politicas-privacidad">
        <p>Al registrarte, aceptas nuestras <a href="#">Políticas de Privacidad</a>.</p>
      </div>
    </div>
  );
};

export default Registro;
