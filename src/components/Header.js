import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import DangerousTwoToneIcon from "@mui/icons-material/DangerousTwoTone";
import { Box } from "@mui/system";
import ModeIcon from "@mui/icons-material/Mode";
import logo from "./Google_Meet-Logo.png";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, doNH) {
  return { name, calories, fat, doNH };
}

const rows = [
  createData("Frozen yoghurt", 0, 1, 0),
  createData("Ice cream sandwich", 1, 0, 1),
  createData("Eclair", 0, 1, 0),
  createData("Cupcake", 0, 1, 1),
  createData("Gingerbread", 0, 1, 1),
];

export default function CustomizedTables() {
  return (
    <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          rowGap: "4vmin",
          columnGap: "4vmin",
        }}
      >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          rowGap: "4vmin",
          columnGap: "4vmin",
        }}
      >
        <Typography gutterBottom variant="h5" component="div" color="#006699">
            Compare
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Whether you are teaching a class or working with a team, pencil space has the tool to help you work better.
        </Typography>
      </Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Properties</StyledTableCell>
              <StyledTableCell align="right">
                <Tooltip title="Google Meet">
                  <Box
                    component="img"
                    sx={{
                      height: 40,
                      width: 55,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={logo}
                  />
                </Tooltip>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Tooltip title="Pencil Spaces">
                  <ModeIcon />
                </Tooltip>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}{" "}
                  {row.doNH ? (
                    <Tooltip title="Add">
                      <IconButton>
                        <HelpOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  ) : null}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.calories ? <CheckCircleOutlineIcon /> : <DangerousTwoToneIcon />}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.fat ? <CheckCircleOutlineIcon /> : <DangerousTwoToneIcon />}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          rowGap: "4vmin",
          columnGap: "4vmin",
        }}
      >
        <Typography gutterBottom variant="h5" component="div" color="#006699">
            Features
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero distinctio nemo eaque veritatis reprehenderit, minus libero cupiditate voluptates soluta.
        </Typography>
        <Button variant ="contained" size="small" color="primary" endIcon={<ArrowForwardIcon/>}>
              Try Spaces Now
            </Button>
      </Container>
    </ Container >
  );
}
