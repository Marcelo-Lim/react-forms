import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root1: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(60),
        width: theme.spacing(40),
        height: theme.spacing(80),
      },
    },

    root2: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(60),
        width: theme.spacing(40),
        height: theme.spacing(30),
      },
    },
    
    paper1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 20px',
        margin: '40px auto',
        width: '300',
        color: '#ffffff',
        background: 'linear-gradient(45deg, #a7e681 30%,#82e645 90%)',
    },

    paper2: {
      display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 10px',
        margin: '100px auto',
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

    avatar: {
     backgroundColor:'#46b4f0',
    },
}));