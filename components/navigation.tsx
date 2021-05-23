import React, {useState} from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import Link from 'next/link'

export default function Navigation(props){
    const category = props.category;
    const [expanded, setExpanded] = useState(props.expanded)
    const handleClick = () => {
        setExpanded(!expanded);
    }
    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={category.display} />
                { expanded ? <ExpandLess /> : <ExpandMore/> }
            </ListItem>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    { category.items.map((Item) => (
                        <Link key={Item.display} href={Item.link}>
                            <a>
                                <ListItem button className={props.nestedClass} >
                                    <ListItemText primary={Item.display} />
                                </ListItem>
                            </a>
                        </Link>
                    )) }
                </List>
            </Collapse>
        </>

    );
}
