function Home() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Gaste bastante para eu ficar rico!</h2>
            <p>Melhores Produtos da região, leve 1 pague 2</p>
          </div>

          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <img
              src="https://allianceinstalacoes.com.br/img/palavras-chave/prateleira-para-farmacia.jpg"
              alt="Imagem da Página Home"
              width="400px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
