import { ModeNight } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { sideBarMenuItems } from "./utils/SidebarMenu"

const Sidebar = ({ mode, setMode }) => {
    const navigate = useNavigate()
  
    const handleThemeToggle = () => {
      setMode(mode === "light" ? "dark" : "light")
    }
  
    return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            {sideBarMenuItems.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{ mb: 2 }}
                onClick={() => navigate(item.link)}
              >
                <ListItemButton component="a">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mb: 2 }}>
              <ListItemButton component="a">
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={handleThemeToggle} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    )
  }
  
  export default Sidebar
