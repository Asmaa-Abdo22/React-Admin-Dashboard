import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, Typography, useTheme } from "@mui/material";
import { getNevoTheme } from "../BarChart/nivoTheme";
import { worldCountries } from "./world_countries.js";

const Geography = () => {
  const appTheme = useTheme();
  const nivoTheme = getNevoTheme(appTheme);
  const data = [
    {
      id: "AFG",
      value: 693344,
    },
    {
      id: "AGO",
      value: 415803,
    },
    {
      id: "ALB",
      value: 14462,
    },
    {
      id: "ARE",
      value: 27779,
    },
    {
      id: "ARG",
      value: 230437,
    },
    {
      id: "ARM",
      value: 526624,
    },
    {
      id: "ATA",
      value: 858435,
    },
    {
      id: "ATF",
      value: 874374,
    },
    {
      id: "AUT",
      value: 542500,
    },
    {
      id: "AZE",
      value: 885386,
    },
    {
      id: "BDI",
      value: 412566,
    },
    {
      id: "BEL",
      value: 514134,
    },
    {
      id: "BEN",
      value: 645969,
    },
    {
      id: "BFA",
      value: 208458,
    },
    {
      id: "BGD",
      value: 518439,
    },
    {
      id: "BGR",
      value: 731137,
    },
    {
      id: "BHS",
      value: 148699,
    },
    {
      id: "BIH",
      value: 989646,
    },
    {
      id: "BLR",
      value: 736690,
    },
    {
      id: "BLZ",
      value: 132240,
    },
    {
      id: "BOL",
      value: 835370,
    },
    {
      id: "BRN",
      value: 962297,
    },
    {
      id: "BTN",
      value: 133074,
    },
    {
      id: "BWA",
      value: 265443,
    },
    {
      id: "CAF",
      value: 775636,
    },
    {
      id: "CAN",
      value: 132323,
    },
    {
      id: "CHE",
      value: 586207,
    },
    {
      id: "CHL",
      value: 705883,
    },
    {
      id: "CHN",
      value: 756199,
    },
    {
      id: "CIV",
      value: 334150,
    },
    {
      id: "CMR",
      value: 387417,
    },
    {
      id: "COG",
      value: 124320,
    },
    {
      id: "COL",
      value: 119454,
    },
    {
      id: "CRI",
      value: 264110,
    },
    {
      id: "CUB",
      value: 704849,
    },
    {
      id: "-99",
      value: 364059,
    },
    {
      id: "CYP",
      value: 672745,
    },
    {
      id: "CZE",
      value: 500230,
    },
    {
      id: "DEU",
      value: 625695,
    },
    {
      id: "DJI",
      value: 952825,
    },
    {
      id: "DNK",
      value: 609370,
    },
    {
      id: "DOM",
      value: 536262,
    },
    {
      id: "DZA",
      value: 256857,
    },
    {
      id: "ECU",
      value: 890584,
    },
    {
      id: "EGY",
      value: 750841,
    },
    {
      id: "ERI",
      value: 306350,
    },
    {
      id: "ESP",
      value: 457552,
    },
    {
      id: "EST",
      value: 733437,
    },
    {
      id: "ETH",
      value: 400471,
    },
    {
      id: "FIN",
      value: 600372,
    },
    {
      id: "FJI",
      value: 292465,
    },
    {
      id: "FLK",
      value: 841744,
    },
    {
      id: "FRA",
      value: 971224,
    },
    {
      id: "GAB",
      value: 256814,
    },
    {
      id: "GBR",
      value: 169394,
    },
    {
      id: "GEO",
      value: 405250,
    },
    {
      id: "GHA",
      value: 958707,
    },
    {
      id: "GIN",
      value: 140889,
    },
    {
      id: "GMB",
      value: 206203,
    },
    {
      id: "GNB",
      value: 638733,
    },
    {
      id: "GNQ",
      value: 532574,
    },
    {
      id: "GRC",
      value: 5721,
    },
    {
      id: "GTM",
      value: 3574,
    },
    {
      id: "GUY",
      value: 570232,
    },
    {
      id: "HND",
      value: 320036,
    },
    {
      id: "HRV",
      value: 92714,
    },
    {
      id: "HTI",
      value: 140200,
    },
    {
      id: "HUN",
      value: 275706,
    },
    {
      id: "IDN",
      value: 734764,
    },
    {
      id: "IND",
      value: 416906,
    },
    {
      id: "IRL",
      value: 392251,
    },
    {
      id: "IRN",
      value: 633026,
    },
    {
      id: "IRQ",
      value: 171913,
    },
    {
      id: "ISL",
      value: 807127,
    },
    {
      id: "ISR",
      value: 314214,
    },
    {
      id: "ITA",
      value: 680596,
    },
    {
      id: "JAM",
      value: 928716,
    },
    {
      id: "JOR",
      value: 508993,
    },
    {
      id: "JPN",
      value: 437136,
    },
    {
      id: "KAZ",
      value: 814181,
    },
    {
      id: "KEN",
      value: 663924,
    },
    {
      id: "KGZ",
      value: 267439,
    },
    {
      id: "KHM",
      value: 241070,
    },
    {
      id: "OSA",
      value: 587636,
    },
    {
      id: "KWT",
      value: 384940,
    },
    {
      id: "LAO",
      value: 964397,
    },
    {
      id: "LBN",
      value: 13965,
    },
    {
      id: "LBR",
      value: 857515,
    },
    {
      id: "LBY",
      value: 52790,
    },
    {
      id: "LKA",
      value: 170863,
    },
    {
      id: "LSO",
      value: 359124,
    },
    {
      id: "LTU",
      value: 485793,
    },
    {
      id: "LUX",
      value: 102617,
    },
    {
      id: "LVA",
      value: 983829,
    },
    {
      id: "MAR",
      value: 288457,
    },
    {
      id: "MDA",
      value: 560738,
    },
    {
      id: "MDG",
      value: 270466,
    },
    {
      id: "MEX",
      value: 995351,
    },
    {
      id: "MKD",
      value: 516070,
    },
    {
      id: "MLI",
      value: 962276,
    },
    {
      id: "MMR",
      value: 339728,
    },
    {
      id: "MNE",
      value: 465621,
    },
    {
      id: "MNG",
      value: 666838,
    },
    {
      id: "MOZ",
      value: 147676,
    },
    {
      id: "MRT",
      value: 833044,
    },
    {
      id: "MWI",
      value: 960547,
    },
    {
      id: "MYS",
      value: 997938,
    },
    {
      id: "NAM",
      value: 279152,
    },
    {
      id: "NCL",
      value: 38516,
    },
    {
      id: "NER",
      value: 679844,
    },
    {
      id: "NGA",
      value: 983533,
    },
    {
      id: "NIC",
      value: 426698,
    },
    {
      id: "NLD",
      value: 351814,
    },
    {
      id: "NOR",
      value: 471947,
    },
    {
      id: "NPL",
      value: 648241,
    },
    {
      id: "NZL",
      value: 271246,
    },
    {
      id: "OMN",
      value: 688175,
    },
    {
      id: "PAK",
      value: 507282,
    },
    {
      id: "PAN",
      value: 348800,
    },
    {
      id: "PER",
      value: 517305,
    },
    {
      id: "PHL",
      value: 681990,
    },
    {
      id: "PNG",
      value: 969767,
    },
    {
      id: "POL",
      value: 786672,
    },
    {
      id: "PRI",
      value: 917926,
    },
    {
      id: "PRT",
      value: 497576,
    },
    {
      id: "PRY",
      value: 11669,
    },
    {
      id: "QAT",
      value: 2814,
    },
    {
      id: "ROU",
      value: 228168,
    },
    {
      id: "RUS",
      value: 168318,
    },
    {
      id: "RWA",
      value: 161694,
    },
    {
      id: "ESH",
      value: 200030,
    },
    {
      id: "SAU",
      value: 688462,
    },
    {
      id: "SDN",
      value: 646667,
    },
    {
      id: "SDS",
      value: 272016,
    },
    {
      id: "SEN",
      value: 811700,
    },
    {
      id: "SLB",
      value: 372123,
    },
    {
      id: "SLE",
      value: 281621,
    },
    {
      id: "SLV",
      value: 630822,
    },
    {
      id: "ABV",
      value: 55219,
    },
    {
      id: "SOM",
      value: 175786,
    },
    {
      id: "SRB",
      value: 735935,
    },
    {
      id: "SUR",
      value: 394870,
    },
    {
      id: "SVK",
      value: 183572,
    },
    {
      id: "SVN",
      value: 133382,
    },
    {
      id: "SWZ",
      value: 410397,
    },
    {
      id: "SYR",
      value: 580951,
    },
    {
      id: "TCD",
      value: 10782,
    },
    {
      id: "TGO",
      value: 284980,
    },
    {
      id: "THA",
      value: 228155,
    },
    {
      id: "TJK",
      value: 875203,
    },
    {
      id: "TKM",
      value: 760531,
    },
    {
      id: "TLS",
      value: 422169,
    },
    {
      id: "TTO",
      value: 323651,
    },
    {
      id: "TUN",
      value: 789131,
    },
    {
      id: "TUR",
      value: 639747,
    },
    {
      id: "TWN",
      value: 683231,
    },
    {
      id: "TZA",
      value: 99504,
    },
    {
      id: "UGA",
      value: 721410,
    },
    {
      id: "UKR",
      value: 102315,
    },
    {
      id: "URY",
      value: 305521,
    },
    {
      id: "USA",
      value: 79153,
    },
    {
      id: "UZB",
      value: 770827,
    },
    {
      id: "VEN",
      value: 990604,
    },
    {
      id: "VNM",
      value: 794695,
    },
    {
      id: "VUT",
      value: 944368,
    },
    {
      id: "PSE",
      value: 542615,
    },
    {
      id: "YEM",
      value: 157018,
    },
    {
      id: "ZAF",
      value: 677008,
    },
    {
      id: "ZMB",
      value: 360358,
    },
    {
      id: "ZWE",
      value: 793688,
    },
    {
      id: "KOR",
      value: 340267,
    },
  ];
  return (
    <>
      <Typography variant="h5" color={appTheme.palette.secondary.main}>
        Geography Chart
      </Typography>
      <Typography
        variant="body2"
        mb={5}
        color={appTheme.palette.text.secondary}
      >
        Simple Geography Chart Example
      </Typography>
      <Box
        height={500}
        sx={{
          border: `1px solid ${appTheme.palette.divider}`,
          padding: 3,
          borderRadius: "15px",
        }}
      >
        {" "}
        <ResponsiveChoropleth
          data={data}
          features={worldCountries.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="spectral"
          domain={[0, 1000000]}
          unknownColor={appTheme.palette.primary.main}
          label="properties.name"
          valueFormat=".2s"
          enableGraticule={false}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -20,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: appTheme.palette.text.primary,
              itemOpacity: 0.85,
              symbolSize: 18,
            },
          ]}
          theme={nivoTheme}
          projectionScale={150}
        />
      </Box>
    </>
  );
};

export default Geography;
