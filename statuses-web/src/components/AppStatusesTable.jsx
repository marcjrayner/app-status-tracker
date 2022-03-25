import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@mui/material";

const AppStatusesTable = ({ allStatuses, formatDate }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>App Status</TableCell>
          <TableCell>Message</TableCell>
          <TableCell>Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {allStatuses.map((status) => {
          const dateTime = new Date(status["updated_at"]);
          const formattedDate = formatDate(dateTime);
          return (
            <TableRow key={status.id}>
              {status.down ? (
                <TableCell color="red">DOWN!</TableCell>
              ) : (
                <TableCell color="green">Up</TableCell>
              )}
              <TableCell>{status.message}</TableCell>
              <TableCell>{formattedDate}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default AppStatusesTable;
