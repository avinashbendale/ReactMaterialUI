import * as React from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Layout() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    return (
        <><AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Av
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/" style={{ textDecoration: "none", color: "white", margin: "10px" }}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/blogs" style={{ textDecoration: "none", color: "white", margin: "10px" }}>Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/contact" style={{ textDecoration: "none", color: "white", margin: "10px" }}>Contact</Nav.Link>
                            </Nav>
                            {/* <nav >
                                <ul>
                                    <li>
                                        <Link to="/" onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/blogs" onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}>Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}>Contact</Link>
                                    </li>
                                </ul>
                            </nav> */}



                            {/* This is existing code */}
                            {/* {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
            </MenuItem>
          ))} */}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
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
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" style={{ textDecoration: "none", color: "white", margin: "10px" }}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs" style={{ textDecoration: "none", color: "white", margin: "10px" }}>Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/contact" style={{ textDecoration: "none", color: "white", margin: "10px" }}>Contact</Nav.Link>
                        </Nav>

                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
            <Outlet />
            <Box
                component="footer"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                    p: 6,
                }}
            style={{bottom:"0",width:"100%",maxHeight:"220px"}}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                About Us
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                We are XYZ company, dedicated to providing the best service to our
                                customers.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                123 Main Street, Anytown, USA
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Email: info@example.com
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Phone: +1 234 567 8901
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                Follow Us
                            </Typography>
                            <Link href="https://www.facebook.com/" color="inherit">
                                <Facebook />
                            </Link>
                            <Link
                                href="https://www.instagram.com/"
                                color="inherit"
                                sx={{ pl: 1, pr: 1 }}
                            >
                                <Instagram />
                            </Link>
                            <Link href="https://www.twitter.com/" color="inherit">
                                <Twitter />
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Typography variant="body2" color="text.secondary" align="center">
                            {"Copyright © "}
                            <Link color="inherit" href="https://your-website.com/">
                                Your Website
                            </Link>{" "}
                            {new Date().getFullYear()}
                            {"."}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>

    );
}
export default Layout;
