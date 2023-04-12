import { Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";

export interface ContactEntryProps {
    text: string
}

export default function ContactEntryComponent(props:React.PropsWithChildren<ContactEntryProps>){

    return (
        <Grid item container columnSpacing={2} justifyContent="center" alignContent={"center"} alignItems={"center"}>
            <Grid container item xs={5} md={4} justifyContent={'flex-end'}>
                {props.children}
            </Grid>
            <Grid item xs={7} md={8}>
                <Typography>
                    {props.text}
                </Typography>
            </Grid>
        </Grid>
        
    )
}