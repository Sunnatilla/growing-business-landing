import React from 'react'
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles'

const BccSlider = withStyles({
  root: {
    color: '#CCCFD1',
    '& .MuiSlider-mark': {
      width: 8,
      height: 8,
      top: -5,
      marginLeft: -5,
      color: '#27AE60',
      border: '2px solid white',
      borderRadius: '50%',
    },
    '& .MuiSlider-mark.MuiSlider-markActive': {
      backgroundColor: '#27AE60',
      opacity: 1,
    },
    '& .MuiSlider-thumb': {
      width: 14,
      height: 14,
      border: '2px solid white',
      marginTop: -6,
      backgroundColor: '#27AE60',
    },
    '& .MuiSlider-rail': {
      height: 2,
      opacity: 1,
    },
    '& .MuiSlider-track': {
      height: 2,
      backgroundColor: '#27AE60',
    },
    '& .Mui-focusVisible, & .MuiSlider-thumb:hover, & .MuiSlider-active': {
      boxShadow: 'none',
    },
  },
})((props: any) => <Slider {...props} />)

export default BccSlider
