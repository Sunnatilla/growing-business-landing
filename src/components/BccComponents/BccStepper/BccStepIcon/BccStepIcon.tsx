import React from 'react'
import StepIcon from '@material-ui/core/StepIcon'
import { withStyles } from '@material-ui/core/styles'

const BccStepIcon = withStyles({
  root: {
    border: '2px solid',
    borderColor: '#E6E7E8',
    '& > svg': {
      display: 'none',
    },
  },
})((props: any) => <StepIcon icon={0} {...props} />)

export default BccStepIcon
