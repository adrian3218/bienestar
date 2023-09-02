import React from 'react';
import AutoComplete from '../components/AutoComplete';
import Button from '../components/Button';
import Desplegable from '../components/Desplegable';
import Fecha from '../components/Fecha';
import Input from '../components/Input';

const Registro = () => {
  return (
    <div>
      <h2>Registro</h2> 
      <Input label="Nombre" />
      <Input label="Apellidos" />
      <Desplegable
        options={[
          { value: 'dni', label: 'DNI' },
          { value: 'cedula', label: 'Cédula' },
          { value: 'otro', label: 'Otro' },
        ]}
      />
      <Input label="Número de Documento" />
      <Input label="Teléfono" />
      <Input label="Tipo de Sangre" />
      <Input label="EPS" />
      <Input label="Correo Institucional" />
      <Input label="Correo Personal" />
      <Input label="Contraseña" type="password" />
      <Input label="Confirmación de Contraseña" type="password" />
      <Desplegable
        options={[
          { value: 'masculino', label: 'Masculino' },
          { value: 'femenino', label: 'Femenino' },
          { value: 'otro', label: 'Otro' },
        ]}
      />
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
    </div>
  );
};

export default Registro;

