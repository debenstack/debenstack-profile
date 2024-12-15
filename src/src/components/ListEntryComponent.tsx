import { List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';

export interface ListEntryState {
    currentElevation: number
    secondaryAction?: React.ReactNode
    visible: boolean
}

export interface ListEntryProps {
    listItemText:string,
    elevation?: number,
    onHoverElevation?: number
    url?: string
    testDomain?: string
}

export default class ListEntryComponent extends React.Component<React.PropsWithChildren<ListEntryProps>, ListEntryState>{

    // onHover - set the elevation to onHoverElevation prop value

    private readonly defaultElevation = 1
    private readonly defaultHoverElevation = 12

    constructor(props: ListEntryProps){
        super(props)
        this.state = {
            currentElevation: 1,
            secondaryAction: undefined,
            visible: true
        }
    }

    componentDidMount = () => {

        // check the url does load something
        if( this.props.testDomain !== undefined && this.state.visible === true){
            axios.get('https://dns.google/resolve?name=' + this.props.testDomain)
            .then((response) => {

                // If the DNS lookup of the testDomain returns no answers, don't show the link
                if(response.data.Answer === undefined || (response.data.Answer !== undefined && response.data.Answer.length == 0)){
                    this.setState({
                        visible: false
                    })
                }
            })
            .catch((err) => {
                this.setState({
                    visible: false
                })
            })
        }
        

        this.setState({
            currentElevation: this.props.elevation ?? this.defaultElevation
        })
    }

    handleOnMouseEnter = () => {
        this.setState({
            currentElevation: this.props.onHoverElevation ?? this.defaultHoverElevation,
            secondaryAction: (
                <ArrowForwardIosIcon/>
            )
        })

    }

    handleOnMouseLeave = () => {
        this.setState({
            currentElevation: this.props.elevation ?? this.defaultElevation,
            secondaryAction: undefined
        })

    }

    handleOnClick = () => {
        if(this.props.url !== undefined){
            window.open(this.props.url, "_blank", 'noopener,noreferrer')
        }
    }

    render(): React.ReactNode {
        if(this.state.visible){
            return (
                <Paper 
                    elevation={this.state.currentElevation} 
                    onMouseOver={this.handleOnMouseEnter} 
                    onMouseLeave={this.handleOnMouseLeave} 
                    onClick={this.handleOnClick}
                >
                    <List>
                        <ListItem secondaryAction={this.state.secondaryAction}>
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
        }else{
            return (null)
        }
        
    }
    
}