
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import En_den_kyr from 'src/components/napravlenia/bachelor_napravlenia/en_den_kyr';
import En_den_ru from 'src/components/napravlenia/bachelor_napravlenia/en_den_ru';

const En_den = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>En_den</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <En_den_ru /> : <En_den_kyr />}
      </Box>
   </>
}
En_den.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default En_den