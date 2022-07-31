import { Slide, useScrollTrigger, AppBar, Toolbar, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const FavoriteButton = ({ title }) => {
    const handleClick = () => {
        console.log("click");
    }

    return (
        <IconButton onClick={handleClick}>
            <FavoriteBorderIcon />
            {title}
        </IconButton>
    )
}

export default FavoriteButton;