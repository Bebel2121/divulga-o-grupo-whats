document.addEventListener("DOMContentLoaded", () => {
  fetch("grupos.json") // tira o ./ pra evitar erro no GitHub Pages
    .then(res => {
      if (!res.ok) {
        throw new Error("Erro ao carregar JSON");
      }
      return res.json();
    })
    .then(grupos => {
      const container = document.getElementById("lista-grupos");

      if (!container) {
        console.error("Elemento #lista-grupos não encontrado!");
        return;
      }

      container.innerHTML = "";

      grupos.forEach(grupo => {
        const div = document.createElement("div");
        div.classList.add("card");

        if (grupo.vip) {
          div.classList.add("vip");
        }

        // Se não tiver link, não cria botão
        const botao = grupo.link
          ? `<a href="${grupo.link}" target="_blank" class="btn">
               ${grupo.vip ? "🔥 Entrar VIP" : "Entrar no WhatsApp"}
             </a>`
          : `<span style="color:red;">Link indisponível</span>`;

        div.innerHTML = `
          <h2>
            ${grupo.vip ? "🔥" : "😂"} ${grupo.nome || "Sem nome"}
            ${grupo.vip ? '<span class="vip-tag">VIP</span>' : ""}
          </h2>
          <p>${grupo.descricao || ""}</p>
          ${botao}
        `;

        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Erro ao carregar grupos:", err);
    });
});