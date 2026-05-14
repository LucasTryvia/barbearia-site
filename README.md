# Yurizin Du Corte — Estrutura do Projeto

```
yurizin-du-corte/
│
├── index.html              ← Página principal (abra no VS Code)
│
├── css/
│   └── style.css           ← Todo o CSS (mova o style.css pra cá)
│
├── js/
│   └── script.js           ← Todo o JS (mova o script.js pra cá)
│
├── assets/
│   ├── video/
│   │   └── video.mp4       ← Vídeo do hero (o <source src=""> aponta pra cá)
│   │
│   ├── img/
│   │   ├── hero-fallback.jpg     ← Foto estática caso o vídeo não carregue (opcional)
│   │   ├── barbeiros/
│   │   │   ├── rafael.jpg
│   │   │   ├── lucas.jpg
│   │   │   └── diego.jpg
│   │   └── instagram/
│   │       ├── post-1.jpg        ← Fotos manuais da seção do Instagram
│   │       ├── post-2.jpg
│   │       ├── post-3.jpg
│   │       ├── post-4.jpg
│   │       ├── post-5.jpg
│   │       └── post-6.jpg
│   │
│   └── logo/
│       └── favicon.png           ← Ícone da aba do navegador (opcional)
│
└── README.md               ← Este arquivo
```

---

## Como atualizar os caminhos no index.html

Depois de mover os arquivos, atualize as referências no `index.html`:

```html
<!-- CSS -->
<link rel="stylesheet" href="css/style.css" />

<!-- JS (no final do body) -->
<script src="js/script.js"></script>

<!-- Vídeo -->
<source src="assets/video/video.mp4" type="video/mp4">

<!-- Fotos dos barbeiros (substitua as divs .barbeiro-foto-inner) -->
<img src="assets/img/barbeiros/rafael.jpg" alt="Rafael" />

<!-- Fotos do Instagram (substitua as divs .ig-placeholder) -->
<img src="assets/img/instagram/post-1.jpg" alt="Post Instagram" class="ig-post-img" />
```

---

## Dicas no VS Code

- Instale a extensão **Live Server** (ritwickdey.LiveServer)
  → Clique direito no `index.html` → "Open with Live Server"
  → O site abre no navegador e atualiza sozinho enquanto você edita

- Instale **Prettier** para formatar o código automaticamente

- Use **Ctrl + Shift + P** → "Format Document" para indentar tudo direitinho

---

## Para o vídeo do hero

O vídeo ideal para o hero deve ser:
- Formato: **MP4** (H.264) — compatível com todos os celulares
- Resolução: **1080p** é ótimo, não precisa de mais
- Duração: **10–30 segundos** em loop
- Tamanho: tente manter **abaixo de 10MB** para carregamento rápido no celular
- Dica: use o site **handbrake.fr** (gratuito) para comprimir sem perder qualidade

---

## Para as fotos do Instagram

Adicione as fotos reais em `assets/img/instagram/` e substitua os
placeholders no HTML:

```html
<!-- Antes (placeholder) -->
<div class="ig-post-img ig-placeholder ig-p1"></div>

<!-- Depois (foto real) -->
<img src="assets/img/instagram/post-1.jpg" alt="" class="ig-post-img" />
```
