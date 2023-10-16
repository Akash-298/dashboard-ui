import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Header from "../../components/Header";

import BarChart from "../../components/BarChart";

import ProgressCircle from "../../components/ProgressCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Search, ShoppingBag } from "@mui/icons-material";
import StatBox from "../../components/Statbox";
import SmallBlock from "../../components/SmallBlock";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SmallBlock
            title="Earnings"
            subtitle="$277k"
            increase="+14% this month"
            icon={
              <div
                style={{
                  backgroundColor: "rgb(19,27,45)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  height: "80px",
                }}
              >
                <AttachMoneyIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
                />
              </div>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SmallBlock
            title="Orders"
            subtitle="$2.5k"
            increase="+21% this month"
            icon={
              <div
                style={{
                  backgroundColor: "rgb(19,27,45)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  height: "80px",
                }}
              >
                <RequestPageIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
                />
              </div>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SmallBlock
            title="Balance"
            subtitle="$198k"
            increase="+37.8% this month"
            icon={
              <div
                style={{
                  backgroundColor: "rgb(19,27,45)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  height: "80px",
                }}
              >
                <AccountBalanceWalletIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
                />
              </div>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SmallBlock
            title="Total Sales"
            subtitle="$77k"
            increase="+43% this month"
            icon={
              <div
                style={{
                  backgroundColor: "rgb(19,27,45)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  height: "80px",
                }}
              >
                <ShoppingBag
                  sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
                />
              </div>
            }
          />
        </Box>

        {/* ROW 2 */}

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h3" color={colors.grey[100]}>
                Overview
              </Typography>
              <Typography
                variant="h7"
                fontWeight="light"
                color={colors.greenAccent[500]}
              >
                Monthly Earnings
              </Typography>
            </Box>
            <Box>
              {/* <Button variant="contained">Yearly ↓</Button> */}
              <ButtonGroup variant="contained" aria-label="split button">
                <Button>Yearly</Button>
                <Button
                  size="small"
                  aria-controls={open ? "split-button-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h3" color={colors.grey[100]}>
            Customer
          </Typography>
          <Typography
            variant="h7"
            fontWeight="light"
            color={colors.greenAccent[500]}
            sx={{ mt: "15px" }}
          >
            Customer that buy products
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
          </Box>
        </Box>
        {/* ROW 3 */}

        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography color={colors.grey[100]} variant="h3">
                  Product Sales
                </Typography>

                <Box>
                  <Box>
                    <ButtonGroup variant="contained" aria-label="split button">
                      <Button>Last 2 day</Button>
                      <Button
                        size="small"
                        aria-controls={open ? "split-button-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                      >
                        <ArrowDropDownIcon />
                      </Button>
                    </ButtonGroup>
                    {/* {Search field} */}
                    <Search>
                      <SearchIcon
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h7">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
