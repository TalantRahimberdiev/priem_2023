
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Ekologiya_priroda_kyr from 'src/components/napravlenia/bachelor_napravlenia/ekologiya_priroda_kyr';
import Ekologiya_priroda_ru from 'src/components/napravlenia/bachelor_napravlenia/ekologiya_priroda_ru';

const Ecologiya_priroda = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Ekologiya_priroda</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Ekologiya_priroda_ru /> : <Ekologiya_priroda_kyr />}
      </Box>
   </>
}
Ecologiya_priroda.getLayout = (page) => (
   <DashboardLayout>{page}</DashboardLayout>
)
export default Ecologiya_priroda