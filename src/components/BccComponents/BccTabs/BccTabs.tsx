import Tabs from '@material-ui/core/Tabs'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const BccTabs = withStyles({
  root: {
    '& .MuiTabs-indicator': {
      height: 3,
      backgroundColor: '#27AE60',
    },
  },
})((props: any) => <Tabs {...props} />)

export default BccTabs
