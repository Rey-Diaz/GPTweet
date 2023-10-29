import { useState } from 'react';
import { CSidebar, CSidebarBrand, CSidebarNav, CNavGroup, CNavItem, CNavLink, CSidebarToggler } from '@coreui/react';
import '../App.css';

function Sidebar() {
  const [unfoldable, setUnfoldable] = useState(false);

  return (
    <CSidebar position="fixed" size="lg" className="custom-sidebar" unfoldable={unfoldable}>
      <CSidebarBrand className="d-md-down-none" to="/">My Sidebar</CSidebarBrand>
      <CSidebarNav>
        <CNavGroup toggler="CoreUI Components">
          <CNavItem>
            <CNavLink href="#">Component 1</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Component 2</CNavLink>
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarToggler onClick={() => setUnfoldable(!unfoldable)} />
    </CSidebar>
  );
}

export default Sidebar;
