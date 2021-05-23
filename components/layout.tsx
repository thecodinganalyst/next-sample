import {
    AppBar,
    createStyles,
    CssBaseline,
    Drawer,
    IconButton, List, Link,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import Navigation from "./navigation";
import clsx from "clsx";

export default function Layout({children, title, categories}){
    const drawerWidth = 250;
    const useStyles = makeStyles((theme) =>
        createStyles({
            root: {
                display: 'flex',
            },
            appBar: {
                zIndex: 2000,
            },
            title: {

            },
            drawer: {
                width: drawerWidth,
                flexShrink: 0,
            },
            drawerPaper: {
                width: drawerWidth,
            },
            drawerHeader: {
                display: 'flex',
                alignItems: 'center',
                padding: theme.spacing(0, 1),
                // necessary for content to be below app bar
                ...theme.mixins.toolbar,
                justifyContent: 'flex-end',
            },
            main: {
                flexGrow: 1,
                padding: theme.spacing(3),
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                marginLeft: -drawerWidth,
                marginTop: theme.spacing(8),
            },
            mainShift: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            },
            nested: {
                paddingLeft: theme.spacing(4),
            }
        })
    )
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    let nav = [];
    categories.forEach((item, index) => { nav[item.display] = index == 0 });
    const [navOpen, setNavOpen] = React.useState(nav);
    const toggleDrawerOpen = () => {
        setDrawerOpen(!drawerOpen);
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Link href="/" color="inherit">
                        <Typography variant="h6" className="title" noWrap>
                            {title}
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" className={classes.drawer} classes={{paper: classes.drawerPaper}} anchor="left" open={drawerOpen}>
                <div className={classes.drawerHeader}>&nbsp;</div>
                <List component="nav">
                    { categories.map((category) => (
                        <Navigation key={category.display} category={category} expanded={navOpen[category.display]} nestedClass={classes.nested} />
                    ))}
                </List>
            </Drawer>
            <main className={clsx(classes.main, {[classes.mainShift]: drawerOpen,})}>
                {children}
            </main>
        </div>
    );
}