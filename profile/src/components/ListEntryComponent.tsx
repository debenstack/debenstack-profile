import { Box, List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface ListEntryState {
    currentElevation: number
    secondaryAction?: React.ReactNode
}

export interface ListEntryProps {
    listItemText:string,
    elevation?: number,
    onHoverElevation?: number
    url?: string
}

export default class ListEntryComponent extends React.Component<React.PropsWithChildren<ListEntryProps>, ListEntryState>{

    // onHover - set the elevation to onHoverElevation prop value

    constructor(props: ListEntryProps){
        super(props)
        this.state = {
            currentElevation: 1,
            secondaryAction: undefined
        }
    }

    componentDidMount = () => {
        this.setState({
            currentElevation: this.props.elevation ?? 1
        })
    }

    handleOnMouseEnter = () => {
        this.setState({
            currentElevation: this.props.onHoverElevation ?? 5,
            secondaryAction: (
                <ArrowForwardIosIcon/>
            )
        })

    }

    handleOnMouseLeave = () => {
        this.setState({
            currentElevation: this.props.elevation ?? 1,
            secondaryAction: undefined
        })

    }

    handleOnClick = () => {
        console.log(`Attempting To Opening ${this.props.url}`)
        if(this.props.url !== undefined){
            window.open(this.props.url, "_blank", 'noopener,noreferrer')
        }
    }

    render(): React.ReactNode {
        return (

            <Paper elevation={this.state.currentElevation} onMouseOver={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave} onClick={this.handleOnClick}>
                <List>
                    <ListItem
                        secondaryAction={this.state.secondaryAction}
                    >
                    
                        <ListItemIcon>
                            {this.props.children}
                        </ListItemIcon>
                        <ListItemText>
                            {this.props.listItemText}
                        </ListItemText>
                    </ListItem>
                </List>
            </Paper>
        )
    }
    
}