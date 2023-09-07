import React from 'react';
import Autocomplete from "../components/Autocomplete";
import Button from '../components/Button';
import Desplegable from '../components/Desplegable';
import Fecha from '../components/Fecha';
import Input from '../components/Input';
import Politicas from '../components/Politicas';

const Registro = () => {
  return (
    <div>

      <h1>Registro<h6>No tienes una cuenta? Registrate aquí</h6></h1> 
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
      <Input label="Correo Institucional" />
      <Fecha label="Fecha de Nacimiento" />
      <Input label="Número de Documento" />
      <Input label="Correo Personal" />
      <Desplegable
        options={[
          { value: 'aprendiz', label: 'Aprendiz' },
          { value: 'instructor', label: 'Instructor' },
          { value: 'administrador', label: 'Administrador' },
        ]} 
      />
      <Input label="Teléfono" />
      <Input label="Contraseña" type="password" />
      <Autocomplete nombre= 'Ficha' array={[
      { label: 2712267, programa: 'Programación de software'},
      {label: 2812267, programa: 'Programación de software'},
      {label: 2912267, programa: 'Programación de software' }
      ]}/>
      <Desplegable
        options={[
          { value: 'a+', label: 'A' },
          { value: 'o+', label: 'O+' },
          { value: 'b+', label: 'B+' },
        ]} 
      />
      <Input label="Confirmación de Contraseña" type="password" />
      <Input label="Dirección" />
      <Button label="Registrarse" />
      <Politicas label="Politicas"/>
    </div>
  );
};

export default Registro;