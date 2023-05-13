import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { instruction_data } from '../__mocks__/instruction_data';
import { Instruction_Toolbar } from '../components/instruction/instruction_toolbar';
import { Instruction_Card } from '../components/instruction/instruction_card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useSelector } from 'react-redux';

const Instruction = () => {
  const language = useSelector(state => state.reducer_1.language)
  return (
    <>
      <Head>
        <title>{language == 'кыр' ? 'Инструкция для поступления' : 'Кабыл алуу нускамалары'}</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth={false}>
          <Instruction_Toolbar />
          <Grid sx={{ pt: 3, justifyContent: 'center' }} container spacing={3}>
            {instruction_data.map((block) => (
              <Grid item key={block.id} lg={4} md={6} xs={12}><Instruction_Card block={block} /></Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

Instruction.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Instruction