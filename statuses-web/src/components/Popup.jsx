import {
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { useState } from "react";

const Popup = ({ open, handleClose, currentlyDown, addStatusUpdate }) => {
  const [down, setDown] = useState(currentlyDown);
  const [message, setMessage] = useState("");
  const handleAddStatusUpdate = async (e) => {
    await addStatusUpdate(down, message);
    handleClose();
  };
  return (
    <Dialog maxWidth="md" open={open} onClose={handleClose} data-cy="popup">
      <DialogTitle>
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6" data-cy="popup-title">
            New Status update
          </Typography>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">STATUS</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={currentlyDown}
            name="radio-buttons-group"
            onChange={(e) => setDown(e.target.value)}
          >
            <FormControlLabel value={true} control={<Radio />} label="Down" />
            <FormControlLabel value={false} control={<Radio />} label="Up" />
          </RadioGroup>
        </FormControl>
        <InputLabel>MESSAGE</InputLabel>
        <Input
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </DialogContent>
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
              Add
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
