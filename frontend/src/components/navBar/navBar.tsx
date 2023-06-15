import React from 'react';

function NavBar() {
  return (
    <>
        <div style={{
            margin: "50px",
            display: "flex",
            justifyContent: 'space-around',
            fontSize: "1.5rem",
        }}>
            <a href="/">Clientes</a>
            <a href="/dependentes">Dependentes</a>
            <a href="/acomodacoes">Acomodações</a>
            <a href="/hospedagens">Hospedagens</a>
        </div>
    </>
  );
}

export default NavBar;
