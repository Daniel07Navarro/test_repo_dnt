/**
 * Componente del pie de página para toda la aplicación.
 * Contiene derechos de autor y un enlace externo.
 */

import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter: React.FC = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">&copy; 2025 AGENTE INTELIGENTE.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Todos los derechos reservados. Términos de uso y</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Política de Privacidad
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
