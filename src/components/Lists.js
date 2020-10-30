import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

export default function Lists() {
  return (
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <CloudUploadIcon />
        </ListItemIcon>
        <ListItemText primary="First element" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <EmojiObjectsIcon />
        </ListItemIcon>
        <ListItemText primary="Second element" />
      </ListItem>

      <Divider />
    </List>
  );
}
