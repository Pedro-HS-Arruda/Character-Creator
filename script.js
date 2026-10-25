let nome = document.querySelector(".nome");
let personagem = document.querySelector(".personagem");

function escolherPersonagem(nomePersonagem, imgPersonagem, corPersonagem) {
  nome.innerHTML = nomePersonagem;
  personagem.src = imgPersonagem;
  nome.style.color = corPersonagem;
}

function lerFoto(foto) {
  let leitor = new FileReader();
  leitor.readAsDataURL(foto.files[0]);
  leitor.onload = async function () {
    puter.quiet = true;

    let resultado = await puter.ai.txt2img(
      "Transforme a pessoa dessa foto em um personagem de video-game: contorno preto grosso, cores vivas, meio  corpo, mantendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombra.",
      {
        model: "replicate:openai/gpt-image-2.5-flare",
        provider: "openai",
        input_image: leitor.result,
        quality: "medium",
        providerOptions: {
          background: "transparent",
        }
      },
    );
    console.log(resultado);

    escolherPersonagem("você", resultado, 'aquamarine');
  };
}
