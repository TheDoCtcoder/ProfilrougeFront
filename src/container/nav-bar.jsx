import { Drawer, Avatar } from '@mui/material'
import abimage from './a.jpg'


const NavBar = ({ isVisible, onCloseMenu }) => {
    return (
        <Drawer
            anchor='left'
            open={isVisible}
            onClose= {onCloseMenu}>
            <Avatar
                sx={{ width: 90, height: 90 }}
                src={abimage} />
        </Drawer>
    )
}

export default NavBar;