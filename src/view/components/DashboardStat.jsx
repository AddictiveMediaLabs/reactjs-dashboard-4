import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { StatsData } from "../../data/StatsData";

export default function DashboardStat() {
  return (
    <Box className="mt-[40px]">
      <Grid container spacing={2} columns={{ xs: 12, lg: 5 }}>
        {StatsData.map((item, index) => (
          <Grid item xs={12} lg={1} key={index}>
            <Card
              className="px-6 py-6 h-full card"
              elevation={0}
              sx={{ backgroundColor: item.bgColor }}
            >
              <Box>
                <Typography className="text-14">
                  {item?.title?.includes("\n")
                    ? item.title.split("\n").map((text, index) => (
                        <span key={index}>
                          {text}
                          <br />
                        </span>
                      ))
                    : item.title}
                </Typography>
                <Typography
                  variant="h4"
                  className="text-[#3E3879] text-medium text-3xl stats-desc"
                >
                  {item.value}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
