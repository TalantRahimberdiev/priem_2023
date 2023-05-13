import { Box, Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const Instruction_Toolbar = () => {
  const language = useSelector(state => state.reducer_1.language)
  return (
    <Box>
      <Typography sx={{ m: 1 }} variant="h4">{language == 'кыр' ? 'Инструкция для абитуриентов' : 'Талапкерлер үчүн нускама'} </Typography>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Typography sx={{ m: 1 }} variant="h6">{language == 'кыр' ? 'пошаговые сведения по подаче документов для зачисления' : 'кабыл алуу үчүн документтерди тапшыруу боюнча кадамдуу маалымат'}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
} 
