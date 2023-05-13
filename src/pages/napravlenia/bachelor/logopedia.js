
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Logopedia_kyr from 'src/components/napravlenia/bachelor_napravlenia/logopedia_kyr';
import Logopedia_ru from 'src/components/napravlenia/bachelor_napravlenia/logopedia_ru';

const Logopedia = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Logopedia</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Logopedia_ru /> : <Logopedia_kyr />}
      </Box>
   </>
}
Logopedia.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Logopedia