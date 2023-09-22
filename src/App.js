import {
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DashboardStat from "./view/components/DashboardStat";
import Top5Section from "./view/components/Top5Section";
import TransactionDetails from "./view/components/TransactionDetails";
import GenderChart from "./view/components/GenderChart";
import Top3Categories from "./view/components/Top3Categories";
import { useState } from "react";
import {
  SellersRows,
  SellersValues,
  UniversitiesRows,
  UniversitiesValues,
} from "./data/Top5SectionData";

function App() {
  const [date, setDate] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };
  return (
    <Box className="bg-[#F4F6F9] py-[90px]">
      <Container className="p-[40px] bg-white rounded-[20px]">
        <div className="flex items-center justify-between">
          <Typography className="text-20 text-medium">
            Rummy App Analytics
          </Typography>
          <FormControl
            sx={{
              minWidth: 166,
              ".MuiOutlinedInput-notchedOutline": {
                border: "1px solid #E7E3F3",
              },
            }}
            size="small"
          >
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={date}
              onChange={handleChange}
              displayEmpty
              inputProps={{
                "aria-label": "Without label",
                className: "menu_item",
              }}
              // default value
              defaultValue={10}
            >
              <MenuItem value={10}>Today</MenuItem>
              <MenuItem value={20}>Yesterday</MenuItem>
              <MenuItem value={30}>Last 7 days</MenuItem>
              <MenuItem value={40}>Last 30 days</MenuItem>
            </Select>
          </FormControl>
        </div>
        <DashboardStat />
        <div className="mt-[60px]">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Top5Section
                title={"Top 5 Universities By User Count"}
                rows={UniversitiesRows}
                values={UniversitiesValues}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Top5Section
                title="Top 5 Sellers"
                rows={SellersRows}
                values={SellersValues}
                seller={true}
              />
            </Grid>
          </Grid>
        </div>
        <div className="mt-[60px]">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <GenderChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <Top3Categories />
            </Grid>
          </Grid>
        </div>
        <TransactionDetails />
      </Container>
    </Box>
  );
}

export default App;
