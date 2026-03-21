import React from 'react'
import { CButton, CCard, CCardBody, CCol, CRow, CTooltip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCopy, cilList, cilPen, cilReload, cilSave, cilSearch, cilTrash, cilUserPlus } from '@coreui/icons'
import { usePermissions } from '../../../shared/hooks/usePermissions'

/**
 * Página principal de dashboard.
 * Presenta un conjunto de botones que se muestran u ocultan en función de los permisos del usuario.
 */
const Dashboard: React.FC = () => {
    const { hasPermission } = usePermissions()

    return (
        <>
            <CCard className="mb-4">
                <CCardBody>
                    <h1>Dashboard - Ejemplo de Permisos</h1>
                    <CRow>
                        <CCol>
                            {/* Condicionales para mostrar botones según permisos */}
                            {hasPermission('users', 'user_account_list', 'show') && (
                                <CTooltip content="Ver usuarios" placement="top">
                                    <CButton color="info" className="me-2 mb-2">
                                        <CIcon icon={cilList} />
                                    </CButton>
                                </CTooltip>
                            )}
                            {hasPermission('users', 'user_account_list', 'filter') && (
                                <CTooltip content="Filtrar usuarios" placement="top">
                                    <CButton color="secondary" className="me-2 mb-2">
                                        <CIcon icon={cilSearch} />
                                    </CButton>
                                </CTooltip>
                            )}
                            {hasPermission('users', 'user_account', 'register') && (
                                <CTooltip content="Crear usuario" placement="top">
                                    <CButton color="success" className="me-2 mb-2">
                                        <CIcon icon={cilUserPlus} />
                                    </CButton>
                                </CTooltip>
                            )}
                            {hasPermission('users', 'user_account', 'modify') && (
                                <CTooltip content="Editar usuario" placement="top">
                                    <CButton color="warning" className="me-2 mb-2">
                                        <CIcon icon={cilPen} />
                                    </CButton>
                                </CTooltip>
                            )}
                            {hasPermission('users', 'user_account', 'duplicate_user') && (
                                <CTooltip content="Duplicar usuario" placement="top">
                                    <CButton color="info" className="me-2 mb-2">
                                        <CIcon icon={cilCopy} />
                                    </CButton>
                                </CTooltip>
                            )}
                            {hasPermission('users', 'user_account', 'save') && (
                                <CTooltip content="Guardar usuario" placement="top">
                                    <CButton color="primary" className="me-2 mb-2">
                                        <CIcon icon={cilSave} />
                                    </CButton>
                                </CTooltip>
                            )}
                            {hasPermission('users', 'user_account', 'migrate') && (
                                <CTooltip content="Migrar usuario" placement="top">
                                    <CButton color="dark" className="me-2 mb-2">
                                        <CIcon icon={cilReload} />
                                    </CButton>
                                </CTooltip>
                            )}
                            {hasPermission('users', 'user_account', 'delete') && (
                                <CTooltip content="Eliminar usuario" placement="top">
                                    <CButton color="danger" className="me-2 mb-2">
                                        <CIcon icon={cilTrash} />
                                    </CButton>
                                </CTooltip>
                            )}
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </>
    )
}

export default Dashboard
