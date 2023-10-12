import React, { Component, useState } from 'react';
import CryptoJS from 'crypto-js';

function App() {
  const [mensaje, setMensaje] = useState(''); // El mensaje a cifrar o descifrar
  const [resultado, setResultado] = useState(''); // El resultado del cifrado o descifrado
  const [cifrado, setCifrado] = useState(false); // Indica si el mensaje está cifrado

  const cifrar = () => {
    const mensajeCifrado = CryptoJS.AES.encrypt(mensaje, 'clave').toString();
    setResultado(mensajeCifrado);
    setCifrado(true);
  }

  const descifrar = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(mensaje, 'clave');
      const mensajeDescifrado = bytes.toString(CryptoJS.enc.Utf8);
      setResultado(mensajeDescifrado);
      setCifrado(false);
    } catch (error) {
      setResultado('Error al desencriptar');
    }
  }

  return (
    <div className="App">
      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <input
          type="text"
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>
      <button onClick={cifrar}>Cifrar</button>
      <button onClick={descifrar}>Descifrar</button>
      <p>Nota: Para descifrar, copia el texto cifrado y pegalo en mensaje</p>
      <p>Resultado: {resultado}</p>
      <p>{cifrado ? 'Texto cifrado' : 'Texto descifrado'}</p>
    </div>
  );
}

export default App;
