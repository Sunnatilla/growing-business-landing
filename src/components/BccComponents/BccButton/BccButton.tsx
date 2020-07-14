import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import React from 'react'

const BccButton = withStyles({
  root: {
    borderRadius: 4,
    fontWeight: 'normal',
    color: 'white',
    textTransform: 'none',
    boxShadow: 'none',
    height: 56,
    fontSize: 16,
    padding: '0 24px',
    lineHeight: '56px',
    letterSpacing: 0,
    '&.Mui-focusVisible': {
      boxShadow: 'none',
    },
    '&.MuiButton-containedPrimary': {
      color: 'white',
      backgroundColor: '#27AE60',
      '&.Mui-focusVisible': {
        '&::before': {
          content: '" "',
          border: '1px solid',
          borderColor: 'white',
          position: 'absolute',
          left: 5,
          right: 5,
          bottom: 5,
          top: 5,
          borderRadius: 4,
        },
      },
    },
    '&.MuiButton-containedSecondary': {
      color: '#1F7042',
      backgroundColor: '#E9F7EF',
      '&:hover': {
        backgroundColor: '#BEEBD1',
      },
      '&:active': {
        backgroundColor: '#7DCEA0',
      },
      '&.Mui-focusVisible': {
        '&::before': {
          content: '" "',
          border: '1px solid',
          borderColor: '#7DCEA0',
          position: 'absolute',
          left: 5,
          right: 5,
          bottom: 5,
          top: 5,
          borderRadius: 4,
        },
      },
    },
    '&.MuiButton-sizeSmall': {
      height: 48,
      fontSize: 16,
      lineHeight: '48px',
    },
    '&.MuiButton-sizeLarge': {
      height: 64,
      fontSize: 18,
      lineHeight: '64px',
    },
    '&:focus': {
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#7DCEA0',
      boxShadow: 'none',
    },
    '&.Mui-disabled': {
      backgroundColor: '#F3F3F3',
      color: '#B3B6BA',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#1F7042',
    },
    '&.MuiButton-text': {
      textTransform: 'uppercase',
      color: '#27AE60',
      '&:hover': {
        background: 'none',
        color: '#1F7042',
      },
      '&:active': {
        boxShadow: 'none',
        background: 'none',
      },
      '&.Mui-focusVisible': {
        background: '#F3F3F3',
      },
      '&.Mui-disabled': {
        background: 'none',
        color: '#CCCFD1',
      },
    },
    '&.MuiButton-outlined': {
      '&.Mui-disabled': {
        backgroundColor: '#F3F3F3',
        color: '#B3B6BA',
        border: 'none',
      },
    },
    '&.MuiButton-outlinedPrimary': {
      backgroundColor: '#F3F3F3',
      border: 'none',
      color: '#000D1A',
      '&:hover': {
        backgroundColor: '#CCCFD1',
      },
      '&:active': {
        backgroundColor: '#B3B6BA',
      },
      '&.Mui-focusVisible': {
        '&::before': {
          content: '" "',
          border: '1px solid',
          borderColor: '#CCCFD1',
          position: 'absolute',
          left: 5,
          right: 5,
          bottom: 5,
          top: 5,
          borderRadius: 4,
        },
      },
    },
    '&.MuiButton-outlinedSecondary': {
      color: '#000D1A',
      border: '1px solid',
      borderColor: '#CCCFD1',
      background: 'none',
      '&:hover': {
        borderColor: '#000D1A',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      '&:active': {
        backgroundColor: '#F3F3F3',
      },
      '&.Mui-focusVisible': {
        '&::before': {
          content: '" "',
          border: '1px solid',
          borderColor: '#CCCFD1',
          position: 'absolute',
          left: 5,
          right: 5,
          bottom: 5,
          top: 5,
          borderRadius: 4,
        },
      },
    },
  },
})((props: any) => <Button disableRipple color="primary" {...props} />)

export default BccButton
