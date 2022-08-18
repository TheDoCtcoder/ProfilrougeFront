// import { Menu } from '@mui/icons-material';
import { IconButton, Toolbar, AppBar, Typography, Button } from '@mui/material';

import MenuIcon from '@mui/icons-material/MenuTwoTone';


const Header = () => {

    return (
        <>
        <header>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr:2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography component='div'
                    variant='h6'>
                        Task List
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            </header>
        
        </>
        
    )
}


export default Header;

