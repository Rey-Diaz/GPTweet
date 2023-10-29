import { useState } from 'react';
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavGroup,
  CNavItem,
  CNavLink,
  CSidebarToggler,
} from '@coreui/react';
import '../app.css';

function Sidebar() {
  const [unfoldable, setUnfoldable] = useState(false);  // State to manage unfoldable

  return (
    <CSidebar
      position="fixed"
      size="lg"
      className="custom-sidebar"
      unfoldable={unfoldable}  // Set unfoldable state
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        My Sidebar
      </CSidebarBrand>
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
      <CSidebarToggler // Toggler to control unfoldable
        onClick={() => setUnfoldable(!unfoldable)}
      />
    </CSidebar>
  );
}

export default Sidebar;
