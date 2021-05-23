import {AppBar, createStyles, CssBaseline, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function Layout({children, title}){
    const useStyles = makeStyles((theme) =>
        createStyles({
            main: {
                marginTop: 84,
                marginLeft: 24,
                marginRight: 24,
                marginBottom: 24,
            }
        })
    )
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className="LayoutTitle" noWrap>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.main}>
                {children}
            </main>
        </>
    );
}

