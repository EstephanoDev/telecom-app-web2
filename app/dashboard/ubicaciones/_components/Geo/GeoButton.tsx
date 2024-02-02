'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { LOCAL_URL, UBIS_API, pb } from '@/lib/db';
import { Button } from '@/components/ui/button';
import { Coordinates } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

const GeoButton = () => {
  const [location, setLocation] = useState({ longitud: 0, latitud: 0 });
  const [descripcion, setDescripcion] = useState('');
  const router = useRouter()

  const handleEnviarUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setLocation({ longitud: longitude, latitud: latitude });

          // Verificar si la descripción está vacía
          const descripcionFinal = descripcion.trim() === '' ? 'Ubicación sin descripción' : descripcion.trim();
          const userId = pb.authStore.model?.id

          // Lógica para enviar la ubicación a través de Axios
          axios.post(`${LOCAL_URL}/${UBIS_API}`, {
            longitud: longitude,
            latitud: latitude,
            Descripcion: descripcionFinal,
            user: userId,
          })
            .then(response => {
              console.log('Ubicación enviada con éxito:', response.data);
              router.push('/Ubicaciones');
              router.refresh()
            })
            .catch(error => {
              console.error('Error al enviar la ubicación:', error);
            });
        },
        (error) => {
          console.error('Error al obtener la geolocalización:', error.message);
        }
      );
    } else {
      alert('Tu navegador no tiene acceso a la Geolocalización');
    }
  };

  return (
    <div className='m-4 pb-2 '>
      {/* Campo de entrada para la descripción */}
      <Input
        className='mb-2'
        placeholder='Descripcion'
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      {/* Botón para enviar la ubicación */}
      <Button color="primary" onClick={handleEnviarUbicacion}>
        Enviar Ubicación
      </Button>
    </div>
  );
}

export default GeoButton;
