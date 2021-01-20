import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <div id="app">
        <div className="box-left">
          <div className="box-left-center">
            <h1>Precisando de Câmeras de Segurança seu Cuzão?<br /></h1>
            <h3>
              Fale com quem realmente entende de Big Brother e monitore hoje mesmo <br />
              até o Cú da sua Vizinha!
            </h3>
            <p>Envie seu Orçamento e entraremos em contato o mais rápido possível </p>
          </div>
        </div>

        <div className="box-right">
          <div className="box-right-center">
            <form action="">
              <h1>Envie Seu Pedido</h1>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
                <input type="text" placeholder="Telefone" />
                <input type="text" placeholder="Email" />
              <button>Enviar</button>
              <p>Ainda Não Está Enviando!</p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;