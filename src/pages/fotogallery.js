import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import { Fotogallery_list } from '../components/fotogallery/fotogallery_list';
import { DashboardLayout } from '../components/dashboard-layout';
import { fotogallery_data } from '../__mocks__/fotogallery_data';
import { useSelector } from 'react-redux';

const Fotogallery = () => {
  const language = useSelector(state => state.reducer_1.language)
  return (
    <>
      <Head><title>{language == 'кыр' ? 'Фото Галлерея' : 'Сүрөт галерея'}</title></Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
        <Typography sx={{ mb: 3 }} variant="h4">{language == 'кыр' ? 'Фото галлерея' : 'Сүрөт галлерея'}</Typography>
        <Fotogallery_list fotogallery_data={fotogallery_data} />
      </Box>
    </>
  )
}
Fotogallery.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default Fotogallery;
