import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Box, Paper } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

import useStyles from "./styles";
import FavoriteButton from '../favorite-button';
import ChapterList from '../chapter-list';

const ProductDetail = ({ pid }) => {
    const classes = useStyles();

    var product = { name: "Truyện 1", thumb: "https://imagepi.otakuscan.net/Extend3/Manga/12/b555c485-b699-4420-8016-804c8aa91ab1_mini.jpeg", type: "Tiểu thuyết ngắn", genre: "Học đường", status: "Đang tiến hành", athorID: "KnESx6LhyMVCMYHg", author: "tinhto", intro: "My first novel", newest: "zHdJzpZAHbA3MVL1", newestName: "Chương 1", rating: 10, _id: "0BJHH30z9CTqkoQH" };

    return (
        <Grid container justifyContent="center" alignItems="flex-start" spacing={2}>
            <Grid item>
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={product.thumb}
                    />

                    <FavoriteButton title="Click to add favorite" />
                    
                    <CardContent>
                        <Table aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">Other Name</TableCell>
                                    <TableCell align="right">None</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Type</TableCell>
                                    <TableCell align="right">{product.type}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Author</TableCell>
                                    <TableCell align="right">{product.author}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Painter</TableCell>
                                    <TableCell align="right">{product.author}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Status</TableCell>
                                    <TableCell align="right">{product.status}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item direction="column" xs spacing={2}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">{product.name}</Typography>
                        <Box className={classes.flexBox}>
                            <Box className={classes.textCenter}>
                                <Box className={classes.flexBox}>
                                    <StarIcon fontSize="large" color="primary" />
                                    <Typography gutterBottom variant="h5" component="div">10/10</Typography>
                                </Box>
                                <Box className={classes.contentCenter}>
                                    <PersonIcon color="primary" />
                                    <Typography>900 votes</Typography>
                                </Box>
                            </Box>

                            <Box className={classes.textCenter}>
                                <VisibilityIcon fontSize="large" />
                                <Typography>100</Typography>
                            </Box>

                            <Box className={classes.textCenter}>
                                <LocalLibraryIcon fontSize="large" />
                                <Typography>100</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Genre</Typography>
                        <Typography>{product.genre}</Typography>
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Introduction</Typography>
                        <Typography>{product.intro}</Typography>
                    </CardContent>
                </Card>
                <ChapterList />
            </Grid>
        </Grid>
    )
}

export default ProductDetail;