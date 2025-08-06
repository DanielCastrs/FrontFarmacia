function Home() {
  return (
    <>
      <div className="container flex justify-center min-h-[75vh] w-auto">
        <div className="p-2">
          <div className=" p-2 text-2xl text-amber-50">
            <h2>Gaste bastante para eu ficar rico!</h2>
            <p>Melhores Produtos da região, leve 1 pague 2</p>
          </div>

          <div className="flex justify-end items-end m-2 ">
            <img
              src="https://allianceinstalacoes.com.br/img/palavras-chave/prateleira-para-farmacia.jpg"
              alt="Imagem da Página Home"
              width="400px"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
