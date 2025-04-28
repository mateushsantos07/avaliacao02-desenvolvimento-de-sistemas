'use client'
import { Checkbox, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";

type List = {
  id: string;
  text: string;
  checked: Boolean;
}

export default function MarketList() {
  useEffect(() => {
    loadItens();
  }, [])


  async function loadItens() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [listaa, setListaa] = useState([])
    
    try {
    const response = await axios.get("http://localhost:3000");
    const list = await response.data.sort((a: any, b: any) => (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ))
    setListaa(list)
  }   catch (e) {
    alert("erro")
  }   finally {
    setIsLoading(false);
  }
}
    // BUSCA AS INFORMAÇÕES NA API FAKE
    // SALVA O VALOR NO ESTADO
  }

  function handleAddItem() {
    const[pedido, setPedido] = useState([])
    const lista = {
      id: String(pedido.length + 1),
      text: String(pedido.toString),
      confirm: false
  };
  await axios.post("http://localhost:3000", lista);

    loadItens();
    // CRIAR O OBJETO DO ITEM
    // CHAMA A API PARA ADICIONAR O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  function handleRemoveItem(id: string) {
    // FILTRA O ESTADO E REMOVE O ITEM
    // CHAMA A API PARA REMOVER O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  function handleUpdateItem(id: string) {
    // CRIA O OBJETO DO ITEM
    // CHAMA A API PARA ATUALIZAR O ITEM
    // CARREGA OS PRODUTOS NOVAMENTE // loadItens();
  }

  return (
    <div className='container'>
      <h1>Compras</h1>
      <TextField/>
      <Button variant="contained" color="success">
        Adicionar
      </Button>
      <div>
      <Checkbox/>

      <ul id="lista-compras">
        {lista.map(() =>
      await loadItens();
      )}
        </ul>

      <Button variant="outlined" color="error">
          Deletar
      </Button>
      </div>
    </div>


  );



