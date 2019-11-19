import React, { useState } from 'react'
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Switch, Typography } from '@material-ui/core';
import ImageAspectRatioIcon from '@material-ui/icons/ImageAspectRatio';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    inline: {
      display: 'block',
      color: 'grey'
    }
  }));

const ListCat = (props) => {
    const [checked, setChecked] = useState(props.checkedVal);

    const toggleChange = () => {
        setChecked(!checked);
        
            props.sendCheckedData(checked, props.width, props.height)
        
    }

    const classes = useStyles();
    return (
        <div>
        <ListItem>
            <ListItemIcon>
                <ImageAspectRatioIcon />
            </ListItemIcon>
            <ListItemText primary={props.deviceName}
                         secondary={
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                    className={classes.inline}
                                >{props.width + " X " + props.height}</Typography>
                         }/>
            <ListItemSecondaryAction>
                <Switch edge="end" checked={checked} onChange={toggleChange}/>
            </ListItemSecondaryAction>
        </ListItem>
        </div>
    )
}

export default ListCat;
