import React from 'react'
import clsx from 'clsx'
import { makeStyles } from "@mui/styles";

import Button from '@mui/material/Button'

import styles from 'assets/jss/components/buttonStyles'

const useStyles = makeStyles(styles)

const CustomButton = (props) => {

  const {children, dark, ...others} = props

  const classes = useStyles()

  return (
    <Button {...others} className={clsx(classes.outlineBtn, {[classes.dark]: dark})} variant='outlined'>
      {children}
    </Button>
  )
}

export default CustomButton
