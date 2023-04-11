import { List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";

export interface ListEntryProps {
    listItemText:string
    elevation: number | undefined
}

export default function ListEntryComponent(props:React.PropsWithChildren<ListEntryProps>){

    return (
        <Paper elevation={props.elevation}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        {props.children}
                    </ListItemIcon>
                    <ListItemText>
                        {props.listItemText}
                    </ListItemText>
                </ListItem>
            </List>
        </Paper>
        
    )
}