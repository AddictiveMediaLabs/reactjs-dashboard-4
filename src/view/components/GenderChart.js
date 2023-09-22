import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const colorScheme1 = ["#1F145E", "#FB8DB3", "#566FFE"];
const optionsData = [
  {
    id: 1,
    color: "#1F145E",
    label: "Male",
  },
  {
    id: 2,
    color: "#FB8DB3",
    label: "FeMale",
  },
  {
    id: 3,
    color: "#566FFE",
    label: "Other",
  },
];

export default function GenderChart() {
  const genderData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#1F145E", "#FB8DB3", "#566FFE"],
        borderColor: ["#1F145E", "#FB8DB3", "#566FFE"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box className="border border-[#E7E3F3] px-[30px] pt-[30px] rounded-xl h-full">
      <Grid container spacing={2} className="mb-[16px]">
        <Grid item xs={6} md={4}>
          <Typography className=" text-medium text-20">Gender Ratio</Typography>
          <div className="flex h-[80%]  flex-col justify-center">
            {optionsData.map((item, index) => (
              <Box key={index} className="flex items-center mb-[10px]">
                <Box
                  className="w-[8px] h-[8px] rounded-[8px] mr-[10px]"
                  style={{ backgroundColor: item.color }}
                ></Box>
                <Typography className="label">{item.label}</Typography>
              </Box>
            ))}
          </div>
        </Grid>
        <Grid item xs={6} md={8}>
          <Doughnut data={genderData} />
        </Grid>
      </Grid>
    </Box>
  );
}
