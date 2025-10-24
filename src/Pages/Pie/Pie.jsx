import { Box, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { getNevoTheme } from "../BarChart/nivoTheme";
const Pie = () => {
  const data = [
    {
      id: "javascript",
      label: "javascript",
      value: 112,
      color: "hsl(81, 70%, 50%)",
    },
    {
      id: "rust",
      label: "rust",
      value: 478,
      color: "hsl(249, 70%, 50%)",
    },
    {
      id: "ruby",
      label: "ruby",
      value: 181,
      color: "hsl(74, 70%, 50%)",
    },
    {
      id: "c",
      label: "c",
      value: 568,
      color: "hsl(183, 70%, 50%)",
    },
    {
      id: "make",
      label: "make",
      value: 202,
      color: "hsl(223, 70%, 50%)",
    },
  ];
  const appTheme = useTheme();
  const nevotheme = getNevoTheme(appTheme);

  return (
    <>
      <Typography variant="h5" color={appTheme.palette.secondary.main}>
        Pie Chart
      </Typography>
      <Typography
        variant="body2"
        mb={3}
        color={appTheme.palette.text.secondary}
      >
        Simple Pie Chart
      </Typography>
      <Box height={500}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.6}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={appTheme.palette.secondary.main}
          arcLinkLabelsThickness={4}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={15}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              symbolShape: "circle",
            },
          ]}
          theme={nevotheme}
        />
      </Box>
    </>
  );
};

export default Pie;
