import React from 'react';


const Contacto: React.FC = () => {
  return (
    <div className="contact">
      <table>
        <thead>
          <tr>
            <th>CONTACTANOS</th>              
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soporte</td>
            <td>Lunes a Viernes 8:30 AM - 18:30 PM</td>
            <td>soporte@avsi.cl</td>
          </tr>          
          <tr>
            <td>Teléfono</td>
            <td>+569 9971 00000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contacto;