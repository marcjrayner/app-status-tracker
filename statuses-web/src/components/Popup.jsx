import {
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import React from "react";

const Popup = ({ open, handleClose, addStatusUpdate }) => {
  const handleAddStatusUpdate = (e) => {
    addStatusUpdate(e);
  };
  return (
    <Dialog maxWidth="sm" open={open} onClose={handleClose} data-cy="popup">
      <DialogTitle>
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6" data-cy="popup-title">
            New Status update
          </Typography>
        </Grid>
      </DialogTitle>
      <DialogContent>INPUTS FOR NEW STATUS GO HERE</DialogContent>
      <DialogActions>
        <Grid container justify="flex-end">
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Grid xs={6} item>
            <Button
              fullWidth
              variant="contained"
              color="success"
              onClick={handleAddStatusUpdate}
            >
              Proceed
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
