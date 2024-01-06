import { AccountBox, Article, Home, Person, Settings } from "@mui/icons-material";

export const sideBarMenuItems = [
    { icon: <Home />, text: "Homepage", link: "/" },
    { icon: <Article />, text: "Articles", link: "/" },
    { icon: <AccountBox />, text: "Profile", link: "/profile" },
    { icon: <Person />, text: "Friends", link: "/friends" },
    { icon: <Settings />, text: "Settings", link: "/profile/settings" },
  ]