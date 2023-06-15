import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import api from '../../api';

const Acomodacoes: React.FC = () => {

  const [acomodacoes, setAcomodacoes] = useState([]);

  useEffect(() => {
      async function loadAcomocadoes() {
          const response = await api.get(`/acomodacoes`);
          setAcomodacoes(response.data.data);
          console.log(response.data.data);
      }
      loadAcomocadoes();
  }, []);

  return (
    <>
        <NavBar />

        <div style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: 'relative'
        }}>
            <h1 style={{
              textAlign: 'center'
            }}>Acomodações</h1>
            <ul style={{
              width: "50%"
            }}>
                {acomodacoes ? (
                  acomodacoes.map(item =>
                      <React.Fragment key={item}>
                        <li
                          style={{
                            borderBottom: "1px solid gray",
                            fontSize: "1.7rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                          }}
                        >
                          id: {item["id_acomodacao"]} <br /> 
                          Nome Acomodação: {item["nome_acomodaçao"]} <br /> 
                          Cama Solteiro: {item["cama_solteiro"]} <br /> 
                          Cama Casal: {item["cama_casal"]} <br /> 
                          Suite: {item["suite"]} <br /> 
                          Garagem: {item["garagem"]} <br /> 
                          Climatização: {item["climatizacao"]} 
                        </li>
                      </React.Fragment>
                  )
                ) : (
                  <p>Não existem acomodações</p>
                )}
            </ul>
        </div>

    </>
  );
}

export default Acomodacoes;
