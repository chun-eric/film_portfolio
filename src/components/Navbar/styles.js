
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';


// // Create your styles
export default StyledToolbar = styled(Toolbar)(({ }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
}));


export default menuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),

}));

