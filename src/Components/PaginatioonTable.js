import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useSelector } from 'react-redux';
import { selectPeople, selectPlanets, selectStarships } from '../features/starwars/starwarsSlice';
import { EditPeopleModal, EditPlanetsModal, EditStarshipsModal } from './EditModal';

const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};



export const CustomPaginationActionsTable = ({ type }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const people = useSelector(selectPeople);
  const starships = useSelector(selectStarships);
  const planets = useSelector(selectPlanets);

  let rowsType;
  if (type === 'people') rowsType = people;
  if (type === 'starships') rowsType = starships;
  if (type === 'planets') rowsType = planets;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsType.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (type === 'people') {
    return (
      <TableContainer component={Paper}>
        <h1>People</h1>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            <>
              <TableRow key={'titlePeople'}>
                <TableCell component="th" scope="row">
                  <h3> Name</h3>
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <h3>Gender</h3>
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <h3>Height</h3>
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <h3>Mass</h3>
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <h3>eye color</h3>
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <h3>Edit</h3>
                </TableCell>
              </TableRow>
            </>

            {(rowsPerPage > 0
              ? people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : people
            ).map((row, index) => (
              <>
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.gender}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.height}cm
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.mass}kg
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.eye_color}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    <EditPeopleModal row={row} index={index} />
                  </TableCell>
                </TableRow>
              </>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rowsType.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    )

  }
  if (type === 'starships') {

    return (<TableContainer component={Paper}>
      <h1>Starships</h1>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          <>
            <TableRow key={'titleStarships'}>
              <TableCell component="th" scope="row">
                <h3> Name</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>Model</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>Cargo Capacity</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>Length</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>Crew</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>Edit</h3>
              </TableCell>
            </TableRow>
          </>
          {(rowsPerPage > 0
            ? starships.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : starships
          ).map((row, index) => (
            <>
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.model}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.cargo_capacity}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.length}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.crew}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <EditStarshipsModal index={index} row={row} />
                </TableCell>
              </TableRow>
            </>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rowsType.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>)
  }
  if (type === 'planets') {

    return (<TableContainer component={Paper}>
      <h1>Planets</h1>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          <>
            <TableRow key={'titlePlanets'}>
              <TableCell component="th" scope="row">
                <h3> Name</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>Gravity</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>Diameter</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>Population</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>terrain</h3>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <h3>Edit</h3>
              </TableCell>
            </TableRow>
          </>

          {(rowsPerPage > 0
            ? planets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : planets
          ).map((row, index) => (
            <>
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.gravity}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.diameter}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.population}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.terrain}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <EditPlanetsModal row={row} index={index} />
                </TableCell>
              </TableRow>
            </>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rowsType.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>)
  }

}
