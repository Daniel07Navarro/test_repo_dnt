import React, { useState, useEffect } from 'react';
import { useRegistration } from '../hooks/useRegistration';
import RegistrationForm from '../components/organisms/RegistrationForm';
import type { UserRegistrationData } from '../types/userTypes';

const UserRegistrationPage = () => {
  const [formData, setFormData] = useState<UserRegistrationData>({
    username: '',
    fullName: '',
    email: '',
    password: '',
  });

  const { handleRegister, isLoading, isSuccess, error, resetStatus } = useRegistration();

  // Resetear el estado si el usuario sale y vuelve a la página
  useEffect(() => {
    return () => {
      resetStatus();
    }
  }, [resetStatus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegister(formData);
  };
  
  if (isSuccess) {
    return (
        <div>
            <h2>¡Usuario Registrado!</h2>
            <p>El usuario ha sido creado exitosamente.</p>
            {/* Aquí puedes poner un botón para registrar otro o volver a la lista de usuarios */}
        </div>
    );
  }

  return (
    <RegistrationForm 
        onSubmit={handleSubmit}
        onChange={handleChange}
        isLoading={isLoading}
        error={error}
    />
  );
};

export default UserRegistrationPage;