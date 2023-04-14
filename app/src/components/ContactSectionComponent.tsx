import { Paper, Stack } from "@mui/material";

interface ContactSectionComponentProps {

}

export default function ContactSectionComponent(props:React.PropsWithChildren<ContactSectionComponentProps>){

    return (
        <Paper  sx={{paddingTop: '15px', paddingBottom: '15px'}}>
            <Stack rowGap={1}>
                {props.children}
            </Stack>
        </Paper>
    )

}