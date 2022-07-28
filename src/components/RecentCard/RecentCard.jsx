import React from 'react'
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/components/recentCardStyles'

const useStyles = makeStyles(styles)

const RecentCard = (props) => {

  const classes = useStyles()

  const { data, size, handleButton } = props

  const markClasses = clsx(
    classes.mark,
    {
      [classes.art]: data.type === 'Art',
      [classes.sport]: data.type === 'Sport',
      [classes.forGood]: data.type === 'For Good'
    }
  )

  return (
    <Box className={clsx(classes.card, {[classes.smallCard]: size === 'small'})} position='relative'>
      <Box className={clsx(classes.cardHeader, {[classes.smallCardHeader]: size === 'small'})}>
        <Typography variant='h6' color='#0F0E36'>
          {data.title}
        </Typography>
        <Typography variant='body1' color='#777684'>
          {data.username}
        </Typography>
      </Box>
      <Box className={clsx(classes.cardMedia, {[classes.smallCardMedia]: size === 'small'})}>
        <img src={`/images/recently-listed/${data.image}`} alt="" />
      </Box>
      <Box display='flex' className={clsx(classes.content, {[classes.smallCardContent]: size === 'small'})} alignItems='center' justifyContent='space-between'>
        <Box>
          <Typography variant='h6'>
            {`${data.eth} ETH`}
          </Typography>
          <Typography variant='body1' color='#777684'>
            {data.price}
          </Typography>
        </Box>
        <CustomButton dark className={clsx({[classes.smallCardBtn]: size === 'small'})} onClick={handleButton}>
          Buy Now
        </CustomButton>
      </Box>
      {
        data.type && (
          <Typography variant='body1' className={markClasses}>
            {data.type}
          </Typography>
        )
      }
    </Box>
  )
}

export default RecentCard
