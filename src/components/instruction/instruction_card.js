import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export const Instruction_Card = ({ block, ...rest }) => {
  const language = useSelector(state => state.reducer_1.language)
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} {...rest} >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 3 }}>
          <Avatar alt="block" src={block.media} variant="square" />
        </Box>
        <Typography align="center" color="textPrimary" gutterBottom variant="h5">{block['title'][language]}</Typography>
        <Typography align="center" color="textPrimary" variant="body1">{block['description'][language]}</Typography>
        {block.link && <a style={{ display: 'flex', justifyContent: 'center', marginTop: "5px" }} href={block.link}>{block['link_title'][language]}</a>}
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
    </Card>
  )
}

Instruction_Card.propTypes = {
  block: PropTypes.object.isRequired
};
