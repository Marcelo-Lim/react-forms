import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(60),
        width: theme.spacing(40),
        height: theme.spacing(65),
      },
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 20px',
        margin: '40px auto',
        width: '300',
        color: '#ffffff',
        background: 'linear-gradient(45deg, #a7e681 30%,#82e645 90%)',
    },
    button: {
        background: 'linear-gradient(45deg, #1dcc89 30%, #1e8f9c 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgb(29, 114, 204, .3)',
    },
}));