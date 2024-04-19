import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ApiService  } from '../../service/api.service'
import { Box, Container, Typography,  } from '@mui/material'
import Videos from '../videos/videos'
import { colors } from '../../constants/colors'

const Search = () => {

  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(()=> {
    const getData = async () => {
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        console.log(data);
        setVideos(data.items)
      }catch(err){
        console.log(err);
      }
    }
    getData()
  }, [id])

  return (
    <Box p={2} flexDirection={"row"} width={'100%'}
    direction={'row'}
    justifyContent='start'
    alignItems='start'
    gap={2}>
			<Container maxWidth={'90%'}>
				<Typography variant={'h6'} fontWeight={'bold'} mb={2}>
					Search results from <span style={{ color: colors.secondary }}>{id}</span> videos
				</Typography>
				<Videos videos={videos} />
			</Container>
		</Box>
  )
}

export default Search