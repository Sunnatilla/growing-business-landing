import TableCell from '@material-ui/core/TableCell'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const BccTableCell = withStyles({
  root: {
    fontSize: 14,
  },
})((props: any) => <TableCell {...props} />)

export default BccTableCell
