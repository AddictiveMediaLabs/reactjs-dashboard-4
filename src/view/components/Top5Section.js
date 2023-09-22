import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Top5Section({ title, rows, values, seller }) {
  return (
    <div>
      <div className="mb-[24px] md:mb-[46px]">
        <Typography className="text-medium text-20">{title}</Typography>
      </div>
      <div className={`${!seller && "md:border-r border-r-[#E7E3F3] "}`}>
        <div className={`${seller ? "" : "md:w-[95%]"}`}>
          <div className="pb-3">
            <Grid container>
              {rows.map((row, index) => (
                <Grid item xs={row.col} key={index}>
                  <Typography
                    className={` ${row.id !== 1 && "text-center"}
                    ${seller && index == 1 && "ms-2"}
                    text-14 text-[#646D72]`}
                  >
                    {row.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </div>
          {values.map((value) => (
            <div className="bg-[#F6F4FD] rounded-[0.625rem] items-center flex mb-4 h-[55px]">
              <Grid container key={value.id} alignItems={"center"}>
                <Grid item xs={seller ? 6 : 5}>
                  <div
                    className={`${seller ? "ps-2" : "ps-4"} flex items-center`}
                  >
                    {seller && (
                      <div>
                        <img
                          className="w-[40px] h-[40px] me-3"
                          src="https://i.ibb.co/pKnXghN/DP.png"
                        />
                      </div>
                    )}
                    <p className="text-regular text-[#3E3879] text-[12px] md:text-[16px]">
                      {value.collegeName}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={seller ? 2 : 3}>
                  <Typography className="text-regular text-center text-[#3E3879] text-base">
                    {value.userCount}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography className="text-regular text-center text-[#3E3879] text-base">
                    {value.ml}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography className="text-regular text-center text-[#646D72] text-base">
                    {value.rl}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
