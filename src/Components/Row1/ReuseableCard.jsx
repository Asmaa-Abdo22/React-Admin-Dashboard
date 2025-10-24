import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ResponsivePie } from "@nivo/pie";
import { getNevoTheme } from "../../Pages/BarChart/nivoTheme";
const ReuseableCard = ({ icon, text1, subtitle, scheme, chartTitle }) => {
  const appTheme = useTheme();
  const nivotheme = getNevoTheme(appTheme);
  const data = [
    {
      id: "hack",
      label: "hack",
      value: 74,
      color: "hsl(114, 70%, 50%)",
    },
    {
      id: "python",
      label: "python",
      value: 118,
      color: "hsl(330, 70%, 50%)",
    },
    {
      id: "javascript",
      label: "javascript",
      value: 237,
      color: "hsl(232, 70%, 50%)",
    },
    {
      id: "elixir",
      label: "elixir",
      value: 287,
      color: "hsl(70, 70%, 50%)",
    },
   
  ];
  return (
    <>
      <Paper
        sx={{
          minWidth: "300px",
          display: "flex",
          justifyContent: "space-between",
          padding: 1,
          flexGrow:1
        }}
      >
        <Stack direction={"column"} gap={2}>
          {icon}
          <Typography
            variant="body2"
            sx={{ fontSize: 13, color: appTheme.palette.text.secondary }}
          >
            {text1}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: 13, color: appTheme.palette.text.secondary }}
          >
            {subtitle}
          </Typography>
        </Stack>
        <Stack direction={"column"} gap={2} alignItems={"center"}>
          <Box sx={{ width: "70px", height: "70px" }}>
            <ResponsivePie
              data={data}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              innerRadius={0.5}
              padAngle={0.6}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              enableArcLinkLabels={false}
              enableArcLabels={false}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              colors={{ scheme: scheme }}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
              theme={nivotheme}
            />
          </Box>
          <Typography variant="body2" sx={{ fontSize: 13 }}>
            {chartTitle}
          </Typography>
        </Stack>
      </Paper>
    </>
  );
};

export default ReuseableCard;
