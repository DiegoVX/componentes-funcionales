import './App.css';
import FormSingUp from './components/FormSingUp';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
  const handleSubmit = (valores) =>{ //manejar el envio
    console.log('APPJS:', valores);
  };

  return (
    <Container component="section" maxWidth="sm"> 
      <Typography variant='h3' align='center'>Formulario Registro</Typography>
      <FormSingUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
