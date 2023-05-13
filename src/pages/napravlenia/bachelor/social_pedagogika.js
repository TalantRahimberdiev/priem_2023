
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Social_pedagogika_kyr from 'src/components/napravlenia/bachelor_napravlenia/social_pedagogika_kyr';
import Social_pedagogika_ru from 'src/components/napravlenia/bachelor_napravlenia/social_pedagogika_ru';

const Social_pedagogika = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Social_pedagogika</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Social_pedagogika_ru /> : <Social_pedagogika_kyr />}
      </Box>
   </>
}
Social_pedagogika.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Social_pedagogika