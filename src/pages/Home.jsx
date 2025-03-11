import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ButtonGroup from '@mui/material/ButtonGroup';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import TextField from '@mui/material/TextField';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import SaveIcon from '@mui/icons-material/Save';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';

const FRUITS = [
    '🍏 Apple',
    '🍌 Banana',
    '🍍 Pineapple',
    '🥥 Coconut',
    '🍉 Watermelon',
  ];
  
  function renderItem({ item, handleRemoveFruit }) {
    return (
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => handleRemoveFruit(item)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={item} />
      </ListItem>
    );
  }

const customTheme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
    },
});

const StyledAvatar = styled(Avatar)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
})};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      transform: scale(1.3);
    }
    `}
  `;

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Home = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

    const handleAddFruit = () => {
      const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
      if (nextHiddenItem) {
        setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
      }
    };
  
    const handleRemoveFruit = (item) => {
      setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
    };
  
    const addFruitButton = (
      <Button
        variant="contained"
        disabled={fruitsInBasket.length >= FRUITS.length}
        onClick={handleAddFruit}
      >
        Add fruit to basket
      </Button>
    );

    return (
        <>
            <Container>
                <Row md={12} className="py-2">
                    <Col>
                        <ThemeProvider theme={customTheme}>
                            <StyledAvatar>OP</StyledAvatar>
                        </ThemeProvider>
                    </Col>
                    <Col>
                        <Stack spacing={2} direction="row">
                            <Button variant="text">Text</Button>
                            <Button variant="contained">Contained</Button>
                            <Button variant="outlined">Outlined</Button>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack direction="row" spacing={2}>
                            <Button color="secondary">Secondary</Button>
                            <Button variant="contained" color="success">
                                Success
                            </Button>
                            <Button variant="outlined" color="error">
                                Error
                            </Button>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="fingerprint" color="secondary">
                                <Fingerprint />
                            </IconButton>
                            <IconButton aria-label="fingerprint" color="success">
                                <Fingerprint />
                            </IconButton>
                        </Stack>
                    </Col>
                </Row>
                <Row md={12} className="py-2">
                    <Col>
                        <ButtonGroup variant="outlined" aria-label="Loading button group">
                            <Button>Submit</Button>
                            <Button>Fetch data</Button>
                            <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
                                Save
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col>
                        <Checkbox {...label} defaultChecked />
                        <Checkbox {...label} defaultChecked color="secondary" />
                        <Checkbox {...label} defaultChecked color="success" />
                        <Checkbox {...label} defaultChecked color="default" />
                        <Checkbox
                            {...label}
                            defaultChecked
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                            }}
                        />
                    </Col>
                    <Col>
                        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {addFruitButton}
                        <List sx={{ mt: 1 }}>
                            <TransitionGroup>
                                {fruitsInBasket.map((item) => (
                                    <Collapse key={item}>{renderItem({ item, handleRemoveFruit })}</Collapse>
                                ))}
                            </TransitionGroup>
                        </List>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home