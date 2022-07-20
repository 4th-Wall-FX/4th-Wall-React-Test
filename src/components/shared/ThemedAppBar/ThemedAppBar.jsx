import styled from "@emotion/styled";
import { Menu } from "@mui/icons-material";
import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";


const MenuButton = styled(IconButton)({
  marginRight: 2
})

const Title = styled(Typography)({
  flexGrow: 1,
})

const StyledLink = styled(Link)({
  display: "flex",
  justifyContent: "space-between",
  color: "inherit",
  textDecoration: "none",
  alignItems: "center"
})

const ThemedAppBar = ({ menuItems, currentMenuId }) => {

  const [open, setOpen] = useState(false);
  const currentMenu = menuItems.find(item => currentMenuId === item.id);

  const DrawerList = ({ menuItems }) => (
    <Box
      role="presentation"
      onClick={() => setOpen(!open)}
      sx={{ width: 250}}
    >
      <List>
        {
          menuItems.map(({ text, icon, url }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <StyledLink to={url}>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </StyledLink>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )

  return (
    <>
      <AppBar>
        <Toolbar>
          <MenuButton onClick={() => setOpen(!open)} edge='start' color='inherit' aria-label='menu'>
            <Menu  />
          </MenuButton>
          <Title variant='h6'>{currentMenu.text}</Title>
          {
            currentMenu.button && (
              <Button color='inherit' onClick={currentMenu.button.buttonClickHandler}>{currentMenu.button.text}</Button>
            )
          }
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(!open)}>
        { <DrawerList menuItems={menuItems} />}
      </Drawer>
    </>
  )
};

export default ThemedAppBar;