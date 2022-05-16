import {
  Drawer,
  DrawerList,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import Link from 'next/link';

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/shop">Shop</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/about">Faq</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton sx={{marginLeft: 'auto', color: 'white'}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
