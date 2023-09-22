import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { TransactionDetailsData } from "../../data/TransactionDetailsData";

export default function TransactionDetails() {
  return (
    <div className="mt-[2.875rem]">
      <Typography className="text-medium text-20">
        Transaction details
      </Typography>
      <Grid container spacing={2} columns={12} className="mt-[1.5rem]">
        {TransactionDetailsData.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <Box
              style={{ backgroundColor: item.bgColor }}
              className="p-9 mt-4 rounded-[10px]"
            >
              <Typography className="text-14">{item.title}</Typography>
              <Typography className="text-[#3E3879] text-medium text-20">
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
