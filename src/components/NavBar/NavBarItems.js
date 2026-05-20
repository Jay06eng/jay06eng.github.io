import React from 'react';
import { ListItemButton, ListItemText, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import menuConfig from '../../assets/configs/menuConfig';

export default function NavBarItems() {
  const location = useLocation();
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
      {menuConfig.sidebarData.map((item) => {
        const active = !item.external && location.pathname === item.path;
        const linkProps = item.external
          ? { component: 'a', href: item.path, target: '_blank', rel: 'noopener noreferrer' }
          : { component: Link, to: item.path };
        return (
          <ListItemButton
            key={item.id}
            {...linkProps}
            aria-current={active ? 'page' : undefined}
            disableRipple
            sx={(theme) => ({
              px: 1.5,
              py: 1,
              borderRadius: 1.5,
              gap: 1,
              alignItems: 'center',
              transition: 'all .15s ease',
              color: active ? theme.palette.secondary.main : theme.palette.text.secondary,
              borderBottom: '3px solid transparent',
              '&:hover': {
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.action.hover,
                borderBottomColor: theme.palette.secondary.main,
              },
              ...(active && {
                borderBottomColor: theme.palette.secondary.main,
              }),
            })}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 22 }}>
              {item.icon}
            </Box>
            {!item.iconOnly && (
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontWeight: active ? 800 : 600,
                  color: 'inherit',
                  fontSize: 15,
                }}
              />
            )}
          </ListItemButton>
        );
      })}
    </Box>
  );
}



