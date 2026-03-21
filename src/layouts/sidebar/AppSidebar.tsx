/**
 * Sidebar principal de la aplicación.
 * - Usa el componente `CSidebar` de CoreUI para renderizar el menú lateral.
 * - Se conecta a Redux para manejar la visibilidad y estado plegado (`unfoldable`) del sidebar.
 * - Contiene el logo, botón de cerrar, navegación y footer plegable.
 */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import navigation from './_nav'
import logo from '../../assets/img/logo-chatbot.webp'
import { setSidebarShow } from '../slices/sidebarSlice'
import type { RootState } from '../../store'

const AppSidebar: React.FC = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state: RootState) => state.sidebar.sidebarUnfoldable)
  const sidebarShow = useSelector((state: RootState) => state.sidebar.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(val: boolean) => dispatch(setSidebarShow(val))}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand href="/" className="w-100 d-flex justify-content-center align-items-center">
          <div style={{border: '2px solid black', borderRadius: '100%', padding: '8px', backgroundColor: '#ffffff', display: 'inline-block'}}>
            <img
              src={logo}
              alt="Logo"
              style={{ maxHeight: 92, width: "auto", maxWidth: "100%" }}
            />
          </div>
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch(setSidebarShow(false))}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler style={{opacity: '0'}}
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
