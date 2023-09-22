import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { CategoriesData } from "./CategoriesData";

export default function Top3Categories() {
  return (
    <Box>
      <div className="mb-7">
        <Typography className="text-medium text-20">
          Top 3 Categories
        </Typography>
      </div>
      <Grid container spacing={2}>
        {CategoriesData.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <Box className="rounded-[1rem] p-4 bg-[#F6F4FD] w-full flex items-center flex-col">
              <Box
                className="border rounded-xl flex justify-center w-16 h-16 items-center mb-[48px]"
                sx={{
                  borderColor: item.bColorCode,
                }}
              >
                <img
                  src={item.photo}
                  alt="category"
                  className="w-[40px] h-[30px] mb-4"
                />
              </Box>
              <Typography className="text-regular text-[#3E3879] text-base">
                {item.name}
              </Typography>
              <Box
                className="flex items-center justify-center rounded-xl mt-11 px-[30px] py-[18px]"
                style={{
                  backgroundColor: item.bgCode,
                }}
              >
                <Typography
                  className="text-medium text-[#3E3879]"
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
