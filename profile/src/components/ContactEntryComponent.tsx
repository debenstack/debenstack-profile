import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";

export interface ContactEntryProps {
    listItemText:string
}

export default function ContactEntryComponent(props:React.PropsWithChildren<ContactEntryProps>){

    return (
        <ListItem>
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
            <ListItemText>
                <Typography>
                    {props.listItemText}
                </Typography>
            </ListItemText>
        </ListItem>
        
    )
}