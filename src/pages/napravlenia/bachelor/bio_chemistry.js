
import Head from 'next/head';
import { Box } from '@mui/material';
import { DashboardLayout } from 'src/components/dashboard-layout';
import { useSelector } from 'react-redux';
import Bio_chemistry_kyr from 'src/components/napravlenia/bachelor_napravlenia/bio_chemistry_kyr';
import Bio_chemistry_ru from 'src/components/napravlenia/bachelor_napravlenia/bio_chemistry_ru';

const Bio_chemistry = () => {

   const language = useSelector(state => state.reducer_1.language)
   return <>
      <Head>
         <title>Bio_chemistry</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 5 }}>
         {language == 'кыр' ? <Bio_chemistry_ru /> : <Bio_chemistry_kyr />}
      </Box>
   </>
}
Bio_chemistry.getLayout = (page) => (
   <DashboardLayout>
      {page}
   </DashboardLayout>
);
export default Bio_chemistry