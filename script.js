fetch("/divulga-o-grupo-whats/grupos.json")
  .then(res => res.json())
  .then(grupos => {
    const container = document.getElementById("lista-grupos");
    container.innerHTML = "";

    grupos.forEach(grupo => {
      const div = document.createElement("div");
      div.classList.add("card");

      if (grupo.vip) {
        div.classList.add("vip");
      }

      div.innerHTML = `
        <h2>
          ${grupo.vip ? "🔥" : "😂"} ${grupo.nome}
          ${grupo.vip ? '<span class="vip-tag">VIP</span>' : ""}
        </h2>
        <p>${grupo.descricao}</p>
        <a href="${botao}" target="_blank">
          ${botao.vip ? "Entrar VIP" : "Entrar no WhatsApp"}
        </a>
      `;

      container.appendChild(div);
    });
  });