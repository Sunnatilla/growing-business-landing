import StepLabel from '@material-ui/core/StepLabel'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import { StepIconProps } from '@material-ui/core/StepIcon'
import './BccStepLabel.css'

const stepIcon = (props: StepIconProps) => {
  const { completed } = props
  return completed ? (
    <div className="stepCircle done"></div>
  ) : (
    <div className="stepCircle"></div>
  )
}

const BccStepLabel = withStyles({
  root: {
    '& .MuiStepLabel-label.MuiStepLabel-active': { opacity: 1 },
    '& .MuiStepLabel-label': { color: '#000D1A', fontSize: 12, opacity: 0.5 },
  },
})((props: any) => <StepLabel StepIconComponent={stepIcon} {...props} />)

export default BccStepLabel
