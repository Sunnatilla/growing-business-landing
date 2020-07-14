import Tab from '@material-ui/core/Tab'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const BccTab = withStyles({
  root: {
    color: '#000D1A',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    minWidth: 'auto',
    padding: 0,
    marginRight: 30,
    '&.MuiTab-textColorInherit.Mui-selected': {
      opacity: 1,
    },
    '&.MuiTab-textColorInherit': {
      opacity: 0.5,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
})((props: any) => <Tab disableRipple disableFocusRipple {...props} />)

export default BccTab
