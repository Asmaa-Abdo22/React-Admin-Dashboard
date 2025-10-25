import { Box, Typography, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { getNevoTheme } from "../BarChart/nivoTheme";

const LineChart = ({ isDashboard }) => {
  const appTheme = useTheme();
  const nivoTheme = getNevoTheme(appTheme);
  const data = [
    {
      id: "Japan",
      color: appTheme.palette.primary.main,
      data: [
        { x: "plane", y: 134 },
        { x: "helicopter", y: 114 },
        { x: "boat", y: 168 },
        { x: "train", y: 142 },
        { x: "subway", y: 284 },
        { x: "bus", y: 202 },
        { x: "car", y: 122 },
        { x: "moto", y: 225 },
        { x: "bicycle", y: 296 },
        { x: "horse", y: 261 },
        { x: "skateboard", y: 21 },
        { x: "others", y: 143 },
      ],
    },
    {
      id: "France",
      color: appTheme.palette.secondary.main,
      data: [
        { x: "plane", y: 124 },
        { x: "helicopter", y: 87 },
        { x: "boat", y: 19 },
        { x: "train", y: 47 },
        { x: "subway", y: 41 },
        { x: "bus", y: 147 },
        { x: "car", y: 139 },
        { x: "moto", y: 153 },
        { x: "bicycle", y: 240 },
        { x: "horse", y: 242 },
        { x: "skateboard", y: 18 },
        { x: "others", y: 88 },
      ],
    },
    {
      id: "USA",
      color: appTheme.palette.success.main,
      data: [
        { x: "plane", y: 210 },
        { x: "helicopter", y: 190 },
        { x: "boat", y: 165 },
        { x: "train", y: 230 },
        { x: "subway", y: 320 },
        { x: "bus", y: 275 },
        { x: "car", y: 295 },
        { x: "moto", y: 180 },
        { x: "bicycle", y: 140 },
        { x: "horse", y: 60 },
        { x: "skateboard", y: 40 },
        { x: "others", y: 110 },
      ],
    },
    {
      id: "Germany",
      color: appTheme.palette.warning.main,
      data: [
        { x: "plane", y: 95 },
        { x: "helicopter", y: 105 },
        { x: "boat", y: 80 },
        { x: "train", y: 120 },
        { x: "subway", y: 155 },
        { x: "bus", y: 135 },
        { x: "car", y: 185 },
        { x: "moto", y: 160 },
        { x: "bicycle", y: 210 },
        { x: "horse", y: 130 },
        { x: "skateboard", y: 25 },
        { x: "others", y: 70 },
      ],
    },
  ];

  return (
    <>
      {isDashboard ? (
        ""
      ) : (
        <>
          <Typography variant="h5" color={appTheme.palette.secondary.main}>
            Line Chart
          </Typography>
          <Typography
            variant="body2"
            mb={3}
            color={appTheme.palette.text.secondary}
          >
            Simple Line Chart Example
          </Typography>
        </>
      )}

      <Box height={500}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          curve="basis"
          axisBottom={{ legend: "transportation", legendOffset: 36 }}
          axisLeft={{ legend: "count", legendOffset: -55 }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "seriesColor" }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 100,
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: "circle",
            },
          ]}
          theme={nivoTheme}
        />
      </Box>
    </>
  );
};

export default LineChart;
