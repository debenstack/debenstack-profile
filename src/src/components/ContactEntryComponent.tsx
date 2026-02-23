import { Grid, Typography } from "@mui/material";

export interface ContactEntryProps {
    text: string
    url?: string
}

export default function ContactEntryComponent(props:React.PropsWithChildren<ContactEntryProps>){

    const handleOnClick = () => {
        if(props.url !== undefined){
            window.open(props.url, "_blank", 'noopener,noreferrer')
        }
    }

    return (
        <Grid item container columnSpacing={2} justifyContent="center" alignContent={"center"} alignItems={"center"} 
            onClick={handleOnClick} 
            sx={{ cursor: props.url !== undefined ? 'pointer' : 'default'}}
        >
            <Grid container item xs={5} md={4} justifyContent={'flex-end'}>
                {props.children}
            </Grid>
            <Grid item xs={7} md={8}>
                {props.url !== undefined ? (
                    <Typography sx={{textDecoration: 'underline'}}>
                        {props.text}
                    </Typography>
                ) : (
                    <Typography>
                        {props.text}
                    </Typography>
                )}
            </Grid>
        </Grid>
        
    )
}