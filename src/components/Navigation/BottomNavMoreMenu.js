import React from "react";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import VideocamIcon from "@material-ui/icons/Videocam";

import NextComposedLink from "../NextComposedLink";

const BottomNavMoreMenu = ({ anchorEl, open, setAnchorEl }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem
        onClick={handleClose}
        component={NextComposedLink}
        href="/mytba"
        prefetch
      >
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="myTBA" />
      </MenuItem>
      <MenuItem
        onClick={handleClose}
        component={NextComposedLink}
        href="/gameday"
        prefetch
      >
        <ListItemIcon>
          <VideocamIcon />
        </ListItemIcon>
        <ListItemText primary="GameDay" />
      </MenuItem>
    </Menu>
  );
};

BottomNavMoreMenu.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool,
  setAnchorEl: PropTypes.func
};

export default React.memo(BottomNavMoreMenu);
