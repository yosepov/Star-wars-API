import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useDispatch, } from 'react-redux';
import { setDeletedPeople, setDeletedPlanets, setDeletedStarships, setUpdatedPeople, setUpdatedPlanets, setUpdatedStarships } from '../features/starwars/starwarsSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #00f',
  boxShadow: 24,
  p: 4,
};
const fieldStyle = {
  margin: 2,
  display: 'block',
};

export const EditPeopleModal = ({ row, index }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleDeletePeople = () => {
    dispatch(setDeletedPeople(index))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedData = {
      name: data.get('Name'),
      gender: data.get('Gender'),
      height: data.get('Height'),
      mass: data.get('Mass'),
      eye_color: data.get('EyeColor'),
      index: index,
    }
    dispatch(setUpdatedPeople(updatedData))
    handleClose()
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box component="form" onSubmit={handleSubmit} sx={style}>
            <Typography id="transition-modal-title" color={'info.light'} variant="h6" component="h2">
              Edit Charecter
            </Typography>
            <TextField sx={fieldStyle} id="Name" name="Name" label="Name" defaultValue={row.name} variant="outlined" />
            <TextField sx={fieldStyle} id="Gender" name="Gender" label="Gender" defaultValue={row.gender} variant="outlined" />
            <TextField sx={fieldStyle} id="Height" name="Height" label="Height" defaultValue={row.height} variant="outlined" />
            <TextField sx={fieldStyle} id="Mass" name="Mass" label="Mass" defaultValue={row.mass} variant="outlined" />
            <TextField sx={fieldStyle} id="EyeColor" name="EyeColor" label="Eye Color" defaultValue={row.eye_color} variant="outlined" />
            <Button type='submit' sx={fieldStyle} variant="contained">Submit</Button>
            <Button sx={fieldStyle} onClick={handleDeletePeople} variant="contained">Delete</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export const EditStarshipsModal = ({ row, index }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleDeleteStarships = () => {
    dispatch(setDeletedStarships(index))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedData = {
      name: data.get('Name'),
      model: data.get('Model'),
      cargo_capacity: data.get('CargoCapacity'),
      length: data.get('Length'),
      crew: data.get('Crew'),
      index: index,
    }
    dispatch(setUpdatedStarships(updatedData))
    handleClose()
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box component="form" onSubmit={handleSubmit} sx={style}>
            <Typography id="transition-modal-title" color={'info.light'} variant="h6" component="h2">
              Edit Starship
            </Typography>
            <TextField sx={fieldStyle} id="Name" name="Name" label="Name" defaultValue={row.name} variant="outlined" />
            <TextField sx={fieldStyle} id="Model" name="Model" label="Model" defaultValue={row.model} variant="outlined" />
            <TextField sx={fieldStyle} id="CargoCapacity" name="CargoCapacity" label="CargoCapacity" defaultValue={row.cargo_capacity} variant="outlined" />
            <TextField sx={fieldStyle} id="Length" name="Length" label="Length" defaultValue={row.length} variant="outlined" />
            <TextField sx={fieldStyle} id="Crew" name="Crew" label="Eye Color" defaultValue={row.crew} variant="outlined" />
            <Button type='submit' sx={fieldStyle} variant="contained">Submit</Button>
            <Button sx={fieldStyle} onClick={handleDeleteStarships} variant="contained">Delete</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export const EditPlanetsModal = ({ row, index }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleDeletePlanets = () => {
    dispatch(setDeletedPlanets(index))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedData = {
      name: data.get('Name'),
      gravity: data.get('Gravity'),
      diameter: data.get('Diameter'),
      population: data.get('Population'),
      terrain: data.get('Terrain'),
      index: index,
    }
    dispatch(setUpdatedPlanets(updatedData))
    handleClose()
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box component="form" onSubmit={handleSubmit} sx={style}>
            <Typography id="transition-modal-title" color={'info.light'} variant="h6" component="h2">
              Edit Planet
            </Typography>
            <TextField sx={fieldStyle} id="Name" name="Name" label="Name" defaultValue={row.name} variant="outlined" />
            <TextField sx={fieldStyle} id="Gravity" name="Gravity" label="Gravity" defaultValue={row.gravity} variant="outlined" />
            <TextField sx={fieldStyle} id="Diameter" name="Diameter" label="Diameter" defaultValue={row.diameter} variant="outlined" />
            <TextField sx={fieldStyle} id="Population" name="Population" label="Population" defaultValue={row.population} variant="outlined" />
            <TextField sx={fieldStyle} id="Terrain" name="Terrain" label="Terrain" defaultValue={row.terrain} variant="outlined" />
            <Button type='submit' sx={fieldStyle} variant="contained">Submit</Button>
            <Button sx={fieldStyle} onClick={handleDeletePlanets} variant="contained">Delete</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
