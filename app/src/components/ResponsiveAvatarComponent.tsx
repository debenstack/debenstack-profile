import { Avatar, Grid } from "@mui/material";

export default function ResponsiveAvatarComponent(props: any){

    return (
        <Grid item container justifyContent="center" alignContent={"center"} alignItems={"center"}>
            <Avatar
                {...props}
            />
        </Grid>
    )
}