import React from 'react'
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/components/collectionDetailCardStyles'

const useStyles = makeStyles(styles)

const CollectionDetailCard = (props) => {

  const classes = useStyles()
  const navigate = useNavigate()

  const { data } = props

  const markClasses = clsx(
    classes.mark,
    {
      [classes.art]: data.type === 'Art',
      [classes.sport]: data.type === 'Sport',
      [classes.forGood]: data.type === 'For Good',
      [classes.music]: data.type === 'Music',
      [classes.gaming]: data.type === 'Gaming',
      [classes.utility]: data.type === 'Utility',
      [classes.photography]: data.type === 'Photography',
      [classes.virtualWorld]: data.type === 'Virtual World',
    }
  )

  return (
    <Box className={classes.card} position='relative'>
      <Box className={classes.cardMedia}>
        <img src={`/images/collectibles/${data.image}`} alt="" />
      </Box>
      <Box className={classes.userInfo} display='flex' alignItems='center' sx={{marginTop: '30px'}}>
        <Avatar alt={data.name} src={`/images/collectibles/${data.avatar}`} sx={{width: '48px', height: '48px', marginRight: '15px'}} />
        <Box>
          <Typography variant='h6' color='#0F0E36'>
            {data.name}
          </Typography>
          <Typography variant='body1' color='#777684'>
            {`by ${data.username}`}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.content}>
        <Typography variant='body1' color='#777684' sx={{ marginBottom: '20px' }}>
          {data.text}
        </Typography>
        <CustomButton onClick={() => navigate(`/collections/${data.name}`)} dark>
          View Collection
        </CustomButton>
      </Box>
      <Typography variant='body1' className={markClasses}>
        {data.type}
      </Typography>
    </Box>
  )
}

export default CollectionDetailCard
