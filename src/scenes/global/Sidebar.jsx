import { useState ,useEffect} from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MediationIcon from "@mui/icons-material/Mediation";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HelpIcon from "@mui/icons-material/Help";
import AlbumIcon from "@mui/icons-material/Album";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 const isMobile =  useMediaQuery(theme.breakpoints.down('md'));

  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
     
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <AlbumIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}

          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <AlbumIcon />
                </IconButton>

                <Typography variant="h2" color={colors.grey[100]}>
                  Dashboard
                </Typography>
              </Box>
            )}
          </MenuItem>

          <Box
            sx={{ height: "90vh" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            {/* {menu Items} */}
            <Box
              // sx={{ border: "2px solid yellow" }}
              paddingLeft={isCollapsed ? undefined : "10%"}
            >
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              >
                <span style={{ color: "red" }}>just</span>
              </Item>

              <Item
                title="Product"
                to="/product"
                icon={<ProductionQuantityLimitsIcon />}
                selected={selected}
                setSelected={setSelected}
              ></Item>
              <Item
                title="Customer"
                to="/customers"
                icon={<SupportAgentIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Income"
                to="/incomes"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Promote"
                to="/promotes"
                icon={<MediationIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Help"
                to="/help"
                icon={<HelpIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>

            {/* {user profile} */}
            {!isCollapsed && (
              <Box m="20px" mb="25px" display="flex" justifyContent="center">
                <Box display="flex" alignItems="center">
                  <img
                    alt="profile-user"
                    width="70px"
                    height="70px"
                    src="https://img.freepik.com/free-photo/handsome-man-white-shirt-posing-attractive-guy-with-fashion-hairstyle-confident-man-with-short-beard-adult-boy-with-brown-hair-closeup-portrait_186202-8538.jpg"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center" paddingBottom="13px">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Akash
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Product Manager
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
