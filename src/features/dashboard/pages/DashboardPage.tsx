import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBullhorn,
  cilEnvelopeClosed,
  cilGroup,
  cilPhone,
  cilUserPlus,
} from '@coreui/icons'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState } from '../../../store'

/**
 * Página principal de dashboard — Temática La Lucha.
 * Muestra un saludo personalizado, tarjetas de acceso rápido
 * y un resumen visual del sistema con el branding de "La Lucha Sanguchería Criolla".
 */
const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.auth.user)

  const displayName = user
    ? `${user.first_name} ${user.last_name}`.trim() || user.username
    : 'Administrador'

  const quickLinks = [
    {
      label: 'Llamadas',
      icon: cilPhone,
      to: '/calls',
      description: 'Historial y gestión de llamadas',
      color: '#c8102e',
    },
    {
      label: 'Campañas',
      icon: cilBullhorn,
      to: '/campaign',
      description: 'Administra tus campañas activas',
      color: '#c8102e',
    },
    {
      label: 'Usuarios',
      icon: cilGroup,
      to: '/users-list',
      description: 'Lista y gestión de usuarios',
      color: '#c8102e',
    },
    {
      label: 'Registrar usuario',
      icon: cilUserPlus,
      to: '/create-users',
      description: 'Agrega un nuevo usuario al sistema',
      color: '#c8102e',
    },
    {
      label: 'Correos',
      icon: cilEnvelopeClosed,
      to: '/email',
      description: 'Historial de correos enviados',
      color: '#c8102e',
    },
  ]

  return (
    <>
      {/* Banner de bienvenida */}
      <CCard className="mb-4 lucha-dashboard-banner">
        <CCardBody className="p-4">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/brand/la-lucha-logo.svg"
              alt="La Lucha"
              style={{ height: 72, width: 'auto' }}
            />
            <div>
              <h2 className="lucha-dashboard-title mb-1">
                Bienvenido, {displayName}
              </h2>
              <p className="lucha-dashboard-subtitle mb-0">
                Panel de administración — La Lucha Sanguchería Criolla
              </p>
            </div>
          </div>
        </CCardBody>
      </CCard>

      {/* Accesos rápidos */}
      <h5 className="lucha-section-heading mb-3">Accesos rápidos</h5>
      <CRow className="g-3 mb-4">
        {quickLinks.map((item) => (
          <CCol key={item.to} xs={12} sm={6} md={4} lg={4}>
            <CCard
              className="h-100 lucha-quick-card"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(item.to)}
            >
              <CCardBody className="d-flex align-items-center gap-3 p-3">
                <div className="lucha-quick-icon-wrap">
                  <CIcon icon={item.icon} size="xl" className="lucha-quick-icon" />
                </div>
                <div>
                  <div className="lucha-quick-label">{item.label}</div>
                  <div className="lucha-quick-desc">{item.description}</div>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      {/* Botón de llamar */}
      <CCard className="lucha-cta-card">
        <CCardBody className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 p-4">
          <div>
            <h5 className="lucha-cta-title mb-1">¿Listo para hacer una llamada?</h5>
            <p className="lucha-cta-desc mb-0">
              Inicia una llamada de salida directamente desde el portal.
            </p>
          </div>
          <CButton
            className="lucha-btn-submit px-4"
            onClick={() => navigate('/call-up')}
            style={{ whiteSpace: 'nowrap' }}
          >
            <CIcon icon={cilPhone} className="me-2" />
            Iniciar llamada
          </CButton>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
