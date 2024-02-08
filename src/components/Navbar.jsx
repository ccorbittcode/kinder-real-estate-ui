import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import VillaTwoToneIcon from '@mui/icons-material/VillaTwoTone';
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './UserContext';
import { useContext } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ace6f9',
      main: '#24c5f3',
      dark: '#00acf3',
      contrastText: '#000',
    },
    secondary: {
      light: '#fe7047',
      main: '#f35124',
      dark: '#d7431b',
      contrastText: '#fff',
    },
  },
});

const pages = [
  { name: 'Properties', path: '/properties' },
  { name: 'Contact', path: '/contact' },
  { name: 'About Us', path: '/about' },
]

const settings = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Register New Realtor', path: '/signup' },
]

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const { user, setUser, showSnackbar } = useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavClick = (path) => {
    handleCloseNavMenu();
    navigate(path);
    window.scrollTo(0, 0);
  }

  const handleUserClick = (path) => {
    handleCloseUserMenu();
    navigate(path);
    window.scrollTo(0, 0);
  }

  const handleLogout = async () => {
    // Make a GET request to the logout route
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/logout`, { credentials: 'include' });

    if (response.ok) {
      // If the logout was successful, redirect to the home page
      setUser(null);
      showSnackbar('Logout successful');
      setAnchorElUser(null);
      navigate('/');
    } else {
      // Handle any errors
      console.error('Logout failed');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" >
        <Container maxWidth="xl" className='container'>
          <Toolbar disableGutters className='toolbar'>
            <VillaTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
              }}
            >
              <Link to="/" className="homelink" onClick={() => window.scrollTo(0, 0)}>
                KINDER REALTY
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={() => handleNavClick(page.path)}>
                    <Typography textAlign="center">
                      <Link to={page.path} className='navbarmenulink'>
                        {page.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <VillaTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to="/" className="homelink" onClick={() => window.scrollTo(0, 0)}>
                KINDER REALTY
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavClick(page.path)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink to={page.path} className="navbarlink" activeClassName='active' exact>
                    {page.name}
                  </NavLink>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Jay Kinder" src="/jayrealestate.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  user && (
                    <MenuItem
                      key={setting.name}
                      onClick={() => handleUserClick(setting.path)}
                    >
                      <Typography textAlign="center">
                        <Link to={setting.path} className='navbarmenulink'>
                          {setting.name}
                        </Link>
                      </Typography>
                    </MenuItem>
                  )
                ))}
                {!user && (
                  <MenuItem
                    key='login'
                    onClick={() => handleUserClick('/login')}
                  >
                    <Typography textAlign="center">
                      <Link to='/login' className='navbarmenulink'>
                        Realtor Login
                      </Link>
                    </Typography>
                  </MenuItem>
                )}
                {user && (
                  <MenuItem
                    key='logout'
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
