// Pequenas melhorias de interface compartilhadas entre as paginas.
document.addEventListener("DOMContentLoaded", function () {
  atualizarAno();
  configurarBotaoTopo();
  configurarFiltros();
  configurarFormulario();
});

function atualizarAno() {
  const anoAtual = new Date().getFullYear();

  document.querySelectorAll("[data-current-year]").forEach(function (elemento) {
    elemento.textContent = anoAtual;
  });
}

function configurarBotaoTopo() {
  const botao = document.querySelector("[data-back-to-top]");

  if (!botao) {
    return;
  }

  function atualizarVisibilidade() {
    botao.classList.toggle("show", window.scrollY > 500);
  }

  window.addEventListener("scroll", atualizarVisibilidade, { passive: true });
  atualizarVisibilidade();

  botao.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function configurarFiltros() {
  document.querySelectorAll("[data-filter-group]").forEach(function (grupo) {
    const botoes = grupo.querySelectorAll("[data-filter]");
    const itens = document.querySelectorAll("[data-filter-item]");

    botoes.forEach(function (botao) {
      botao.addEventListener("click", function () {
        const categoria = botao.dataset.filter;

        botoes.forEach(function (outroBotao) {
          const estaAtivo = outroBotao === botao;
          outroBotao.classList.toggle("active", estaAtivo);
          outroBotao.setAttribute("aria-pressed", estaAtivo);
        });

        itens.forEach(function (item) {
          const deveAparecer = categoria === "todos" || item.dataset.filterItem === categoria;
          item.hidden = !deveAparecer;
        });
      });
    });
  });
}

function configurarFormulario() {
  const formulario = document.querySelector("[data-contact-form]");

  if (!formulario) {
    return;
  }

  const confirmacao = formulario.querySelector("[data-form-success]");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    formulario.reset();
    confirmacao.classList.add("show");
    confirmacao.focus();
  });

  formulario.addEventListener("input", function () {
    confirmacao.classList.remove("show");
  });
}
