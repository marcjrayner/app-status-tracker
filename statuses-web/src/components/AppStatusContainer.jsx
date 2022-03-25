import { useEffect, useState } from "react";
import axios from "axios";
import LatestAppStatus from "./LatestAppStatus";
import AppStatusesTable from "./AppStatusesTable";
import Popup from "./Popup";

import { Typography, Grid, Button } from "@mui/material";

const AppStatusContainer = () => {
  const [allStatuses, setAllStatuses] = useState([]);
  const [latestStatus, setLatestStatus] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(" http://localhost:5002/app_statuses")
      .then((response) => {
        console.log(response);
        setAllStatuses(response.data);
        setLatestStatus(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleOpenPopup = () => {
    setOpen(true);
  };
  const handleClosePopup = () => {
    setOpen(false);
  };

  const handleAddStatus = (e) => {};

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            Basic Structure
          </Typography>

          <LatestAppStatus />
          <AppStatusesTable allStatuses={allStatuses} />
          <Button onClick={handleOpenPopup}>Hello</Button>
          <Popup
            open={open}
            handleClose={handleClosePopup}
            addStatusUpdate={handleAddStatus}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AppStatusContainer;
