import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from 'src/rtk/slice_1';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const language = useSelector(state => state.reducer_1.language)
  const dispatch = useDispatch()

  return (
    <>
      <DashboardNavbarRoot
        sx={{ left: { lg: 280 }, width: { lg: 'calc(100% - 280px)' } }}
        {...other}>
        <Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 2 }}>
          <IconButton onClick={onSidebarOpen} sx={{ display: { xs: 'inline-flex', lg: 'none' } }}>
            <MenuIcon fontSize="small" />
          </IconButton>
          <Typography variant='p' sx={{ color: "black", textAlign: 'start', marginLeft: '5vw', paddingBottom: '7px' }}>
            {language == 'кыр' ? 'ИГУ им. К. Тыныстанова' : 'Ыссык Көл Мамлекеттик Университети'}</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography onClick={() => dispatch(changeLanguage())} variant='h6' sx={{ color: "black", textAlign: 'start', marginRight: '5vw', paddingBottom: '7px', textDecoration: 'underline' }}>{language}</Typography>
          <Avatar sx={{ height: 40, width: 40, ml: 1 }}
            src="/static/igu_logo.jpg"
          >
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};