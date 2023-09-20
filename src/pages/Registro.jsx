  //REGISTRASE
  import React, { useState,useEffect } from 'react';
import Autocomplete from "../components/Autocomplete";
import Button from "../components/Button";
import Desplegable from "../components/Desplegable";
import Fecha from "../components/Fecha";
import Input from "../components/Input";
import Politicas from "../components/Politicas";
import Password from "../components/Password";
import miImagen from "./img/Logo.png";
import "./Registro.css";
import { registrarUsuario } from '../api/registro';
import { obtenerFichas } from '../api/ficha'; 
import { obtenerEPS } from '../api/Eps'; 


  //REGISTRASE
  const Registro = () => {
    const handleClick = () => {
      alert('¡Botón clickeado!');
    };
  
    const [formData, setFormData] = useState({
      nombres: '',
      apellidos: '',
      // Agrega otros campos del formulario aquí
    });
    const [fichas, setFichas] = useState([]);

  useEffect(() => {
    obtenerFichas()
      .then((fichasData) => {
        setFichas(fichasData);
      })
      .catch((error) => {
        console.error('Error al obtener las fichas:', error);
      });
  }, []);

  const handleFichaChange = (selectedFicha) => {

    console.log('Ficha seleccionada:', selectedFicha);
  };

  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const responseData = await registrarUsuario(formData);
        console.log('Respuesta del servidor:', responseData);
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
 
 

  return (
    <div>
      <img src={miImagen} alt="Logo de bienestar" />
      <h1>REGISTRO</h1>
      <h6>
      <br />No tienes una cuenta? Regístrate aquí
      </h6>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombres"
          placeholder="Nombres*"
          value={formData.nombres}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos*"
          value={formData.apellidos}
          onChange={handleInputChange}
        />
      <Desplegable
        label="Tipo de Documento*"
        options={[
          { value: "Targeta de identidad", label: "Targeta de identidad" },
          { value: "cedula", label: "Cédula" },
          { value: "otro", label: "Otro" },
        ]}
      />
      <Fecha label="Fecha de Nacimiento" />
      <Input label="Correo Personal" />
      <Input label="Teléfono" />
      <Input label="Correo Institucional" />
      <Password labelText="Contraseña" />
      <Password labelText="Confirmación Contreseña" />
      <Desplegable
      label="Genero*"
        options={[
          { value: "masculino", label: "Masculino" },
          { value: "femenino", label: "Femenino" },
          { value: "otro", label: "Otro" },
        ]}
      />
   

      <Desplegable
      label="Rol*"
        options={[
          { value: "aprendiz", label: "Aprendiz" },
          { value: "instructor", label: "Instructor" },
          { value: "administrador", label: "Administrador" },
        ]}
      />
      <Autocomplete
       nombre="Ficha"
       array={fichas}
       getOptionLabel={(option) => {
         const label = option.nombre || ''; 
         console.debug('getOptionLabel', label);
         return label;
       }}
      />
      <Desplegable
      label="Tipo de Sangre"
        options={[
          { value: "a+", label: "A+ " },
          { value: "o+", label: "O+" },
          { value: "b+", label: "B+" },
        ]}
      />
      <Input label="Dirección" />
      <Button label="Registrar" onClick={handleClick} />
      <Politicas label="Politicas*" />
      </form>
    </div>
  );
};

export default Registro;