import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const SmallBlock = ({ title, subtitle, icon, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" alignItems="center" justifyContent="space-evenly">
        <Box>{icon}</Box>

        <Box display="flex" flexDirection="column" >
          <Box>
            <Typography
              variant="h7"
              fontWeight="light"
              sx={{ color: colors.grey[100] }}
            >
              {title}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              fontWeight="bold"
            
              sx={{ color: colors.grey[100] }}
            >
              {subtitle}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h7"
              fontWeight="light"
              sx={{ color: colors.grey[100] }}
            >
              {increase} 
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SmallBlock;
