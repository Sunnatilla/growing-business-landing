import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React from 'react'

const BccInput = withStyles({
  root: {
    '& .MuiInputBase-root': {
      color: '#000D1A',
      fontSize: '16px',
    },
    '& .MuiFormHelperText-contained': {
      marginLeft: 0,
    },
    '& label.Mui-focused': {
      color: '#27AE60',
    },
    '& .MuiInputLabel-outlined': {
      color: '#4D565F',
      fontSize: 16,
      '&.Mui-focused': {
        color: '#4D565F',
        '&.Mui-error': {
          color: '#C84F4F',
        },
      },
    },
    '& .MuiInputLabel-shrink.MuiInputLabel-filled': {
      fontSize: 13,
      color: '#4D565F',
    },
    '& .MuiInputLabel-filled': {
      color: '#4D565F',
      fontSize: 16,
      '&.Mui-focused': {
        color: '#4D565F',
        '&.Mui-error': {
          color: '#C84F4F',
        },
      },
    },
    '& .MuiInput-underline:hover': {
      '&:before': {
        borderBottomColor: '#27AE60',
      },
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#27AE60',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#27AE60',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E8E8E8',
      },
      '&:hover fieldset': {
        borderColor: '#80868C',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#27AE60',
        borderWidth: 1,
      },
      '&.Mui-disabled fieldset': {
        backgroundColor: '#E6E7E8',
        border: 'none',
      },
      '&.Mui-error fieldset': {
        borderColor: '#C84F4F',
      },
    },
    '& .MuiFilledInput-root': {
      background: 'none',
      border: '1px solid',
      borderRadius: 4,
      borderColor: '#CCCFD1',
      '&:before': {
        border: 'none',
      },
      '&:after': {
        border: 'none',
      },
      '&:hover': {
        borderColor: '#80868C',
      },
      '&.Mui-focused': {
        borderColor: '#27AE60',
      },
      '&.Mui-disabled': {
        backgroundColor: '#E6E7E8',
        border: 'none',
      },
      '&.Mui-error': {
        borderColor: '#C84F4F',
      },
    },
  },
})((props: any) => (
  <TextField variant={props.variant ? props.variant : 'filled'} {...props} />
))

export default BccInput
