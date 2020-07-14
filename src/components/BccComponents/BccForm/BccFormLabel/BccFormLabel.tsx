import FormLabel from '@material-ui/core/FormLabel'
import { withStyles } from '@material-ui/core/styles'

const BccFormLabel = withStyles({
  root: {
    color: '#4D565F',
    fontSize: 14,
    '&.Mui-error': {
      color: '#C84F4F',
    },
  },
})(FormLabel)

export default BccFormLabel
