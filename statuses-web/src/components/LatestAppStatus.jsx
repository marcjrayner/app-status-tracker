import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
const LatestAppStatus = ({ latestStatus, formatDate }) => {
  const dateTime = new Date(latestStatus["updated_at"]);
  const formattedDate = formatDate(dateTime);
  console.log(dateTime);
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        raised
        sx={{
          bgcolor: "white",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
        }}
      >
        <CardContent>
          {latestStatus.down ? (
            <Typography variant="h5" color="red" gutterBottom>
              App is down!!!
            </Typography>
          ) : (
            <Typography variant="h5" color="green" gutterBottom>
              App is ok!!!
            </Typography>
          )}

          <Typography sx={{ fontSize: 14 }} component="div">
            {latestStatus.message}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {formattedDate}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LatestAppStatus;
