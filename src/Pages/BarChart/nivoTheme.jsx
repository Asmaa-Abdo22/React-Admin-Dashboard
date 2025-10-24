export const getNevoTheme = (appTheme) => ({
  textColor: appTheme.palette.text.primary,
  fontSize: 12,
  axis: {
    domain: {
      line: {
        stroke: appTheme.palette.divider,
      },
    },
    ticks: {
      line: {
        stroke: appTheme.palette.divider,
      },
      text: {
        fill: appTheme.palette.text.primary,
      },
    },
    legend: {
      fontSize: 17,
      text: {
        fill: appTheme.palette.text.primary,
      },
    },
  },
  legends: {
    text: {
      fill: appTheme.palette.text.primary,
    },
  },
  labels: {
    text: {
      fontSize: 15,
    },
  },
  tooltip: {
    container: {
      background: appTheme.palette.background.paper,
      color: appTheme.palette.text.primary,
    },
  },
});
