import React, { useState, useEffect } from 'react';  
import './Formulario.css';  

const Formulario = () => {  
  const [usuario, setUsuario] = useState({  
    nombreUsuario: '',  
    nombre: '',  
    apellido: '',  
    correo: '',  
    rut: '',  
    genero: '',  
  });  

  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);  
  const [usuarioEditado, setUsuarioEditado] = useState(null);  

  useEffect(() => {
    // Intenta obtener los usuarios desde localStorage al cargar el componente
    const storedUsers = JSON.parse(localStorage.getItem('usuariosRegistrados'));
    if (storedUsers) {
      setUsuariosRegistrados(storedUsers);
    }
  }, []);

  useEffect(() => {
    // Guarda usuariosRegistrados en localStorage cada vez que cambie
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
  }, [usuariosRegistrados]);


  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setUsuario({  
      ...usuario,  
      [name]: value,  
    });  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (usuarioEditado !== null) {  
      const updatedUsers = usuariosRegistrados.map((user, index) =>  
        index === usuarioEditado ? usuario : user  
      );  
      setUsuariosRegistrados(updatedUsers);  
      setUsuarioEditado(null);  
    } else {  
      setUsuariosRegistrados([...usuariosRegistrados, usuario]);  
    }  
    setUsuario({  
      nombreUsuario: '',  
      nombre: '',  
      apellido: '',  
      correo: '',  
      rut: '',  
      genero: '',  
    });  
  };  

  const handleEdit = (index) => {  
    setUsuarioEditado(index);  
    setUsuario(usuariosRegistrados[index]);  
  };  

  const handleDelete = (index) => {  
    const updatedUsers = usuariosRegistrados.filter((user, i) => i !== index);  
    setUsuariosRegistrados(updatedUsers);  
  };  

  return (  
    <div className="form-container">  
      <h1>Formulario de registro</h1>  
      <form onSubmit={handleSubmit}>  
        <div className="form-group">  
          <label htmlFor="nombreUsuario">Nombre de Usuario:</label> <br />
          <input type="text" id="nombreUsuario" name="nombreUsuario" value={usuario.nombreUsuario} onChange={handleChange} />  
        </div>  
        <div className="form-group">  
          <label htmlFor="nombre">Nombre:</label><br />          
          <input type="text" id="nombre" name="nombre" value={usuario.nombre} onChange={handleChange} />  
        </div>  
        <div className="form-group">  
          <label htmlFor="apellido">Apellido:</label> <br />
          <input type="text" id="apellido" name="apellido" value={usuario.apellido} onChange={handleChange} />  
        </div>  
        <div className="form-group">  
          <label htmlFor="correo">Correo:</label> <br /> 
          <input type="email" id="correo" name="correo" value={usuario.correo} onChange={handleChange} />  
        </div>  
        <div className="form-group">  
          <label htmlFor="rut">RUT:</label>  <br />
          <input type="text" id="rut" name="rut" value={usuario.rut} onChange={handleChange} />  
        </div>  
        <div className="form-group">  
          <label>Género:</label>  
          <input type="radio" id="masculino" name="genero" value="Masculino" onChange={handleChange} />  
          <label htmlFor="masculino">Masculino</label>  
          <input type="radio" id="femenino" name="genero" value="Femenino" onChange={handleChange} />  
          <label htmlFor="femenino">Femenino</label>  
        </div>  
        <div className="form-group">  
          <button type="submit">Registrar</button>  
        </div>  
      </form>   

      <div className="usuarios-registrados">  
        <h2>Usuarios Registrados</h2>  
        <table>  
          <thead>  
              <tr>  
                <th>Nombre de Usuario</th>  
                <th>Nombre</th>  
                <th>Apellido</th>  
                <th>Correo</th>  
                <th>RUT</th>  
                <th>Género</th>  
                <th>Acciones</th>  
              </tr>  
            </thead>   
          <tbody>  
            {usuariosRegistrados.map((user, index) => (  
              <tr key={index}>  
                {/* Mostrar la lista de usuarios */}  
                <td>{user.nombreUsuario}</td>  
                <td>{user.nombre}</td>  
                <td>{user.apellido}</td>  
                <td>{user.correo}</td>  
                <td>{user.rut}</td>  
                <td>{user.genero}</td>  
                <td>  
                  {/* Botones para Editar y borrar */}  
                  <button onClick={() => handleEdit(index)}>Editar</button>  
                  <button onClick={() => handleDelete(index)}>Eliminar</button>  
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      </div>  
    </div>  
  );  
};  

export default Formulario;