import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useDispatch, } from 'react-redux';
import { setAddPeople, setAddPlanets, setAddStarships } from '../features/starwars/starwarsSlice';

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

export const AddPeopleModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();



  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedData = {
      name: data.get('Name'),
      gender: data.get('Gender'),
      height: data.get('Height'),
      mass: data.get('Mass'),
      eye_color: data.get('EyeColor'),
    }
    dispatch(setAddPeople(updatedData))
    handleClose()
  };

  return (
    <div>
      <Button color='inherit' onClick={handleOpen}>Add Charecter</Button>
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
              Add Charecter
            </Typography>
            <TextField sx={fieldStyle} id="Name" name="Name" label="Name" variant="outlined" />
            <TextField sx={fieldStyle} id="Gender" name="Gender" label="Gender" variant="outlined" />
            <TextField sx={fieldStyle} id="Height" name="Height" label="Height" variant="outlined" />
            <TextField sx={fieldStyle} id="Mass" name="Mass" label="Mass" variant="outlined" />
            <TextField sx={fieldStyle} id="EyeColor" name="EyeColor" label="Eye Color" variant="outlined" />
            <Button type='submit' sx={fieldStyle} variant="contained">Add</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export const AddStarshipsModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();



  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedData = {
      name: data.get('Name'),
      model: data.get('Model'),
      cargo_capacity: data.get('CargoCapacity'),
      length: data.get('Length'),
      crew: data.get('Crew'),
    }
    dispatch(setAddStarships(updatedData))
    handleClose()
  };

  return (
    <div>
      <Button color={'inherit'} onClick={handleOpen}>Add Starships</Button>
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
              Add Starship
            </Typography>
            <TextField sx={fieldStyle} id="Name" name="Name" label="Name" variant="outlined" />
            <TextField sx={fieldStyle} id="Model" name="Model" label="Model" variant="outlined" />
            <TextField sx={fieldStyle} id="CargoCapacity" name="CargoCapacity" label="CargoCapacity" variant="outlined" />
            <TextField sx={fieldStyle} id="Length" name="Length" label="Length" variant="outlined" />
            <TextField sx={fieldStyle} id="Crew" name="Crew" label="Eye Color" variant="outlined" />
            <Button type='submit' sx={fieldStyle} variant="contained">Add</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export const AddPlanetsModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updatedData = {
      name: data.get('Name'),
      gravity: data.get('Gravity'),
      diameter: data.get('Diameter'),
      population: data.get('Population'),
      terrain: data.get('Terrain'),
    }
    dispatch(setAddPlanets(updatedData))
    handleClose()
  };

  return (
    <div>
      <Button color={'inherit'} onClick={handleOpen}>Add planets</Button>
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
              Add Planet
            </Typography>
            <TextField sx={fieldStyle} id="Name" name="Name" label="Name" variant="outlined" />
            <TextField sx={fieldStyle} id="Gravity" name="Gravity" label="Gravity" variant="outlined" />
            <TextField sx={fieldStyle} id="Diameter" name="Diameter" label="Diameter" variant="outlined" />
            <TextField sx={fieldStyle} id="Population" name="Population" label="Population" variant="outlined" />
            <TextField sx={fieldStyle} id="Terrain" name="Terrain" label="Terrain" variant="outlined" />
            <Button type='submit' sx={fieldStyle} variant="contained">Add</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
