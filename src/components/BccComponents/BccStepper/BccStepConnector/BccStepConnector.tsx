import React from 'react'
import StepConnector from '@material-ui/core/StepConnector'
import { withStyles } from '@material-ui/core/styles'

const BccStepConnector = withStyles({
  root: {},
  line: {
    border: '2px solid',
    borderColor: '#E6E7E8',
  },
  alternativeLabel: {
    top: 7,
    left: 'calc(-50% + 9px)',
    right: 'calc(50% + 9px)',
  },
  completed: {
    '& .MuiStepConnector-line': {
      borderColor: '#27AE60',
    },
  },
})((props: any) => <StepConnector {...props} />)

export default BccStepConnector
