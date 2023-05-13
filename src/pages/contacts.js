import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { contacts_data } from '../__mocks__/contacts_data';
import Contacts_Card from '../components/contacts/contacts_card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const language = useSelector(state => state.reducer_1.language)
  return (
    <>
      <Head>
        <title>{language == 'кыр' ? 'Контакты' : 'Байланыш'}</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth={false}>
          <Typography align='center' sx={{ m: 1 }} variant="h4">{language == 'кыр' ? 'Контакты' : 'Байланыш'}</Typography>
          <Grid sx={{ pt: 3, justifyContent: 'center' }} container spacing={3}>
            {contacts_data.map((block) => (
              <Grid item key={block.id} lg={4} md={6} xs={12}><Contacts_Card block={block} /></Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

Contacts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Contacts;
