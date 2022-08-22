import { useState } from "react";

import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import { Divider } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import useStyles from "./styles";
import GenreItem from "./genre-item";

const GenreFilter = () => {
    const classes = useStyles();

    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Genres: </FormLabel>
                <FormGroup>
                <List component="nav" aria-label="main mailbox folders">
                {
                        [0, 1, 2, 32, 4, 5, 6, 7, 8, 99, 100, 500].map((i) => {
                            return (
                                <GenreItem key={i} name={"Thể loại dài nhất " + i}/>
                                // <Grid item xs={4}>
                                // <FormControlLabel key={i}
                                //     control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                                //     label="Gilad Gray"
                                // />
                                // </Grid>
                            )
                        })
                    }
                </List>
                    {/* <Grid container justifyContent="flex-start" alignItems="center" spacing={1}>
                    {
                        [0, 1, 2, 32, 4, 5, 6, 7, 8, 99, 100].map((i) => {
                            return (
                                <GenreItem key={i} name={"Thể loại dài nhất " + i}/>
                                // <Grid item xs={4}>
                                // <FormControlLabel key={i}
                                //     control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                                //     label="Gilad Gray"
                                // />
                                // </Grid>
                            )
                        })
                    }
                    </Grid> */}
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
            </FormControl>
        </div>
    )
}

export default GenreFilter;