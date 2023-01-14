import { styled } from '@mui/system';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({});

export default styled((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        //style={{ display: 'flex', height: '100%' }}
    },
    content: {},
    // //style={{
    //     height: '80px', display: 'flex', justifyContent: 'space-between', marginLeft: '240px',}}

    //style={{ height: '70px' }} 
    toolbar: {
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '240px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            flexWrap: 'wrap',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));