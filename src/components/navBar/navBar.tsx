'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import {useTranslations} from "use-intl";

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const t = useTranslations()

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageSelected = (language: 'es' | 'en' | 'pt') => {
        setAnchorEl(null);
        window.location.href = `/${language}`
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => handleLanguageSelected('en')}>EN</MenuItem>
            <MenuItem onClick={() => handleLanguageSelected('es')}>ES</MenuItem>
            <MenuItem onClick={() => handleLanguageSelected('pt')}>PT</MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="transparent" sx={{ backgroundColor: '#C0E0FF' }}>
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  color: 'black'
                }}
              >
                {t('title')}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="translations"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                  sx={{ color: 'black' }} 
                >
                  <TranslateIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMenu}
        </Box>
    );
}
