import React from 'react';
// Importa los componentes de CoreUI que necesitas
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CRow,
  CSpinner,
  CAlert,
  CInputGroupText,
  CInputGroup
} from '@coreui/react';
import { MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import { CIcon } from '@coreui/icons-react';
import { cilShortText, cilUser, cilUserPlus } from '@coreui/icons';

interface RegistrationFormProps {
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  error: string | null;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit, isLoading, error }) => {
  return (
    <CRow className="justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <CCol md={8} lg={6} xl={5}>
        <CCard className="mx-4">
          <CCardHeader className="p-4">
            <div className="d-flex align-items-center">
              <CIcon icon={cilUserPlus} className="me-2" size="3xl" />
              <div className='ms-2'>
                <h2 className="mb-0">Crear nuevo usuario</h2>
                <p className="text-body-secondary mb-0">Rellena los datos para el registro.</p>
              </div>
            </div>
          </CCardHeader>
          <CCardBody className="p-4">
            <CForm onSubmit={onSubmit}>
              
            {error && <CAlert color="danger">{error}</CAlert>}
            <div className="mb-4">
              <CInputGroup className='mb-4'>
                <CInputGroupText><CIcon icon={cilUser} /></CInputGroupText>
                  <CFormInput
                    type="text"
                    placeholder="Nombre de usuario"
                    required
                  />
              </CInputGroup>
            </div>

            <div className="mb-4">
              <CInputGroup className='mb-4'>
                <CInputGroupText><CIcon icon={cilShortText} /></CInputGroupText>
                  <CFormInput
                    type="text"
                    placeholder="Nombre completo"
                    required
                  />
              </CInputGroup>
            </div>

            <div className="mb-4">
              <CInputGroup className='mb-4'>
                <CInputGroupText><MdOutlineMail /></CInputGroupText>
                  <CFormInput
                    type="email"
                    placeholder="Correo electrónico"
                    required
                  />
              </CInputGroup>
            </div>

            <div className="mb-4">
              <CInputGroup className='mb-4'>
                <CInputGroupText><MdOutlinePassword /></CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Contraseña"
                    required
                  />
              </CInputGroup>
            </div>

              <CInputGroup className='mb-4'>
                <CInputGroupText><MdOutlinePassword /></CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Repetir contraseña"
                    required
                  />
              </CInputGroup>

              {/* <div className="mb-3">
                <CFormLabel htmlFor="username">Nombre de usuario</CFormLabel>
                <CFormInput id="username" name="username" type="text" onChange={onChange} required />
              </div>
              
              <div className="mb-3">
                <CFormLabel htmlFor="fullName">Nombre completo</CFormLabel>
                <CFormInput id="fullName" name="fullName" type="text" onChange={onChange} required />
              </div>
              
              <div className="mb-3">
                <CFormLabel htmlFor="email">Correo electrónico</CFormLabel>
                <CFormInput id="email" name="email" type="email" onChange={onChange} required />
              </div>
              
              <div className="mb-4">
                <CFormLabel htmlFor="password">Contraseña</CFormLabel>
                <CFormInput id="password" name="password" type="password" onChange={onChange} required />
              </div> */}
              
              <div className="d-grid">
                <CButton type="submit" color="primary" disabled={isLoading} style={{ height: '54px' }}>
                  {isLoading ? (
                    <CSpinner size="sm" />
                  ) : (
                    <>
                      Registrar usuario 
                    </>
                  )}
                </CButton>
              </div>

            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default RegistrationForm;