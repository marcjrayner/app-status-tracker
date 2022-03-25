import { useEffect, useState } from "react";
import axios from "axios";
import LatestAppStatus from "./LatestAppStatus";
import AppStatusesTable from "./AppStatusesTable";
import { format } from "date-fns";
import Popup from "./Popup";

import { Typography, Grid, Button } from "@mui/material";

const AppStatusContainer = () => {
  const [allStatuses, setAllStatuses] = useState();
  const [latestStatus, setLatestStatus] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getStatusList();
  }, []);

  const handleOpenPopup = () => {
    setOpen(true);
  };
  const handleClosePopup = () => {
    setOpen(false);
  };

  const getStatusList = () => {
    axios
      .get(" http://localhost:5002/app_statuses")
      .then((response) => {
        console.log(response);
        setAllStatuses(response.data);
        setLatestStatus(response.data[0]);
      })
      .catch((error) => console.log(error));
  };

  const handleAddStatus = async (down, message) => {
    const data = {
      down,
      message,
    };
    axios.post(" http://localhost:5002/app_statuses", data).then((response) => {
      console.log(response);
      setLatestStatus(response.data);
      getStatusList();
    });
  };

  const formatDate = (date) => {
    console.log(format(date, "PPpp"));
    return format(date, "PPpp");
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h6" lineHeight={3}>
            Current App Status:
          </Typography>

          {latestStatus && (
            <LatestAppStatus
              formatDate={formatDate}
              latestStatus={latestStatus}
            />
          )}
          <Typography variant="h6" lineHeight={3}>
            App Status History:
          </Typography>
          {allStatuses && (
            <AppStatusesTable
              allStatuses={allStatuses}
              formatDate={formatDate}
            />
          )}
          <Button onClick={handleOpenPopup}>Add Status Update</Button>
          {latestStatus && (
            <Popup
              open={open}
              handleClose={handleClosePopup}
              currentlyDown={latestStatus.down}
              addStatusUpdate={handleAddStatus}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default AppStatusContainer;
