import { useEffect, useState } from "react";
import LatestAppStatus from "./LatestAppStatus";
import AppStatusesTable from "./AppStatusesTable";
import Popup from "./Popup";

import { Typography, Grid, Button } from "@mui/material";

const AppStatusContainer = () => {
  //   const [allStatuses, setAllStatuses] = useState([]);
  const [open, setOpen] = useState(false);

  //   useEffect(() => {}, []);

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
          <AppStatusesTable />
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
