import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'

const BccRadio = withStyles({
  root: {
    color: '#4D565F',
    '&.Mui-checked': {
      color: '#27AE60',
    },
    '& .MuiSvgIcon-root': {
      fontSize: 24,
    },
    '&.Mui-disabled': {
      '&.Mui-checked': {
        color: '#B3B6BA',
      },
    },
  },
})(Radio)

export default BccRadio
