import { Card, CardContent, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

interface ContactSectionComponentProps {

}

export default function ContactSectionComponent(props:React.PropsWithChildren<ContactSectionComponentProps>){

    return (
        <Paper variant='outlined' sx={{paddingTop: '15px', paddingBottom: '15px'}}>
            <Stack rowGap={1}>
                {props.children}
            </Stack>
        </Paper>
    )

}