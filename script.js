fetch('grupos.json')
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("grupos");

    const vip = data.filter(g => g.vip);
    const normal = data.filter(g => !g.vip);

    const lista = [...vip, ...normal];

    lista.forEach(g => {

      const div = document.createElement("div");
      div.className = "card " + (g.vip ? "vip" : "");

      div.innerHTML = `
        <h3>${g.nome} ${g.vip ? "🔥 VIP" : ""}</h3>
        <p>${g.descricao}</p>
        <a class="btn" href="${g.link}" target="_blank">Entrar</a>
      `;

      container.appendChild(div);

    });

  });