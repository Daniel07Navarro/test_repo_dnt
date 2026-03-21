import React, { useState, useEffect } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CPagination,
  CPaginationItem,
  CInputGroup,
  CInputGroupText,
  CTooltip,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {  cilSearch, cilLockLocked, cilLockUnlocked, cilGroup } from '@coreui/icons';


const mockUsers = [
  { id: 1, name: 'Usuario 1', username: 'user1', email: 'user1@example.com', password: 'password123' },
  { id: 2, name: 'Usuario 2', username: 'user2', email: 'user2@example.com', password: 'secretpassword' },
  { id: 3, name: 'Usuario 3', username: 'user3', email: 'user3@example.com', password: 'password123' },
  { id: 4, name: 'Usuario 4', username: 'user4', email: 'user4@example.com', password: 'secretpassword' },
  { id: 5, name: 'Usuario 5', username: 'user5', email: 'user5@example.com', password: 'password123' },
  { id: 6, name: 'Usuario 5', username: 'user6', email: 'user6@example.com', password: 'secretpassword' },
  { id: 7, name: 'Usuario 6', username: 'user7', email: 'user7@example.com', password: 'password123' },
  { id: 8, name: 'Usuario 7', username: 'user8', email: 'user8@example.com', password: 'secretpassword' },
];


const UserListPage: React.FC = () => {
  const [users] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePasswords, setVisiblePasswords] = useState<Set<number>>(new Set()); 
  const ITEMS_PER_PAGE = 5;

  const togglePasswordVisibility = (userId: number) => {
    setVisiblePasswords(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <CRow style={{justifyContent: 'center', marginTop: '10px'}}>
      <CCol xs={10}>
        <CCard className="mb-4">
          <CCardHeader style={{padding: '18px'}}>
            <CIcon icon={cilGroup} className="me-2" />
            <strong>Lista de usuarios</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-3">
              <CCol md={4}>
                <CInputGroup>
                  <CInputGroupText><CIcon icon={cilSearch} /></CInputGroupText>
                  <CFormInput
                    type="search"
                    placeholder="Buscar por nombre o username..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </CInputGroup>
              </CCol>
              <CCol className="ms-auto" md="auto" >
                {/* <CInputGroup style={{marginRight: '15px'}}>
                  <CButton type="submit" color="primary" style={{ height: '40px;', width: '50px' }}>
                      <strong>+</strong>
                  </CButton>
                </CInputGroup> */}
              </CCol>
            </CRow> 

            {/* Tabla de Usuarios */}
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead>
                <CTableRow className='text-center'>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">Contraseña</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {currentUsers.map((user) => {
                  const isPasswordVisible = visiblePasswords.has(user.id);
                  return (
                    <CTableRow key={user.id} className='text-center'>
                      <CTableHeaderCell scope="row">{user.id}</CTableHeaderCell>
                      <CTableDataCell>{user.name}</CTableDataCell>
                      <CTableDataCell>@{user.username}</CTableDataCell>
                      <CTableDataCell>{user.email}</CTableDataCell>
                      <CTableDataCell className="d-flex align-items-center justify-content-center">
                        <span className="me-3 font-monospace" style={{ minWidth: '120px' }}>
                          {isPasswordVisible ? user.password : '●●●●●●●●'}
                        </span>
                        <CTooltip content={isPasswordVisible ? 'Ocultar' : 'Mostrar'}>
                          <CButton
                            color="light"
                            size="sm"
                            onClick={() => togglePasswordVisibility(user.id)}
                          >
                            <CIcon icon={isPasswordVisible ? cilLockUnlocked : cilLockLocked} />
                          </CButton>
                        </CTooltip>
                      </CTableDataCell>
                    </CTableRow>
                  );
                })}
              </CTableBody>
            </CTable>
            
            {filteredUsers.length === 0 && (
                <div className="text-center p-4">No se encontraron usuarios.</div>
            )}

            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-3">
                <CPagination aria-label="Navegación de usuarios">
                  <CPaginationItem disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    Anterior
                  </CPaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <CPaginationItem key={page} active={currentPage === page} onClick={() => setCurrentPage(page)}>
                      {page}
                    </CPaginationItem>
                  ))}
                  <CPaginationItem disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                    Siguiente
                  </CPaginationItem>
                </CPagination>
              </div>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default UserListPage;