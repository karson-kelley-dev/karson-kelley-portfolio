import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon, Close, Description } from '@mui/icons-material';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'rgba(10, 10, 15, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #2a2a40',
          backgroundImage: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 'lg', width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{
              fontWeight: 700,
              color: '#e8e8ed',
              textDecoration: 'none',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '1rem',
            }}
          >
            Karson Kelley
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: '#8888a0',
                  fontSize: '0.85rem',
                  textTransform: 'none',
                  '&:hover': { color: '#00d4aa' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              href="/resume.pdf"
              target="_blank"
              startIcon={<Description />}
              sx={{
                ml: 1,
                color: '#0a0a0f',
                bgcolor: '#00d4aa',
                fontSize: '0.85rem',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': { bgcolor: '#00b894' },
              }}
            >
              Resume
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { md: 'none' }, color: '#e8e8ed' }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: '#141420',
            border: 'none',
            borderLeft: '1px solid #2a2a40',
            width: 260,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#8888a0' }}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setMobileOpen(false)}
                sx={{ '&:hover': { bgcolor: 'rgba(0, 212, 170, 0.05)' } }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ sx: { color: '#8888a0', '&:hover': { color: '#00d4aa' } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ px: 2, mt: 2 }}>
            <Button
              fullWidth
              href="/resume.pdf"
              target="_blank"
              startIcon={<Description />}
              sx={{
                color: '#0a0a0f',
                bgcolor: '#00d4aa',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': { bgcolor: '#00b894' },
              }}
            >
              Resume
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
