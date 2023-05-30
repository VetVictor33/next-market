'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, InputAdornment } from '@mui/material';
import './Form.css'
import { useRouter } from 'next/navigation';

export default function FormPropsTextFields() {
  const router = useRouter();
  const [error, setError] = React.useState(false);
  const [success, setSucess] = React.useState(false);
  const [form, setForm] = React.useState(
    { name: '', price: '', storage: '', description: '', altSrc: '' }
  )

  const handleForm = (e) => {
    if (error) setError(false);
    if (success) setSucess(false);
    const id = e.target.id;
    const value = e.target.value;
    const localForm = { ...form, [id]: value };
    setForm(localForm);
  }

  const handleSubmit = (e) => {
    if (!form.name || !form.price || isNaN(form.price) || !form.estoque || isNaN(form.estoque) || !form.description || !form.altSrc) {
      setError(true);
      return
    }
  }

  return (
    <Box
      className='Form'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='fields'>
        <TextField
          className='single-line'
          required
          id="name"
          label="Nome do produto"
          variant="standard"
          onChange={handleForm}
        />
        <div className='double-field'>
          <TextField
            className='double-line'
            required
            id="price"
            label="Preço"
            type="number"
            variant="standard"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
            onChange={handleForm}
          />
          <TextField
            className='double-line'
            required
            id="storage"
            label="Estoque"
            type="number"
            variant="standard"
            InputProps={{
              startAdornment: <InputAdornment position="start">Un</InputAdornment>,
            }}
            onChange={handleForm}

          />
        </div>
        <TextField
          className='single-line'
          required
          id="description"
          label="Descrição do produto"
          variant="standard"
          onChange={handleForm}

        />
        <TextField
          className='single-line'
          required
          id="altSrc"
          label="Descrição da imagem"
          variant="standard"
          onChange={handleForm}
        />
      </div>
      <div className='buttom-div'>
        <div className='bt-div'>
          <Button variant="text" className='bt'
            onClick={() => router.push('/')}
          >Cancelar</Button>
          <Button variant="contained" className='bt'
            onClick={handleSubmit}
          >Adicionar Produto</Button>
        </div>
        <div className='alert-div'>
          {error &&
            <Alert variant="filled" severity="error">
              Não foi possível adicionar o produto. Verifique os campos obrigatórios!
            </Alert>}
          {success &&
            <Alert variant="filled" severity="success">
              Produto inserido com sucesso!
            </Alert>}
        </div>
      </div>
    </Box>
  );
}