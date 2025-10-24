import { Box, Typography, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { getNevoTheme } from "./nivoTheme";

const BarChart = () => {
  const appTheme = useTheme();
  const nevotheme = getNevoTheme(appTheme);
  const data = [
    {
      country: "Germany",
      wage: 2000,
      housing: 700,
      food: 400,
      transport: 300,
    },
    {
      country: "France",
      wage: 1900,
      housing: 650,
      food: 380,
      transport: 250,
    },
    {
      country: "Spain",
      wage: 1600,
      housing: 550,
      food: 320,
      transport: 200,
    },
  ];

  return (
    <>
      <Typography variant="h5" color={appTheme.palette.secondary.main}>
        Bar Chart
      </Typography>
      <Typography
        variant="body2"
        mb={3}
        color={appTheme.palette.text.secondary}
      >
        The minimum wage in Germany, France and Spain (EUR/month)
      </Typography>

      <Box sx={{ height: 400 }}>
        <ResponsiveBar
          data={data}
          keys={["wage", "housing", "food", "transport"]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: "paired" }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisBottom={{
            legend: "Country",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            legend: "EUR / month",
            legendPosition: "middle",
            legendOffset: -55,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              translateX: 120,
              itemsSpacing: 3,
              itemWidth: 100,
              itemHeight: 16,
            },
          ]}
          theme={nevotheme}
        />
      </Box>
    </>
  );
};

export default BarChart;
