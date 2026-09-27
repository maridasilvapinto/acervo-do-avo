# Acervo do Avô

App de telemóvel para catalogar, fotografar, avaliar e vender os livros da biblioteca da família.

- **App:** https://maridasilvapinto.github.io/acervo-do-avo/
- **Dados e fotografias:** Supabase (tabelas `acervo_livros` e `acervo_membros`, pasta `acervo-fotos`)

## Como funciona

- Cada pessoa entra com o seu email e palavra-passe. Só entram emails que estejam em
  **Resumo › Pessoas com acesso**. A primeira pessoa a entrar fica autorizada automaticamente.
- Cada exemplar físico é um registo, com número (Nº 0001…), estado, fotos e preço.
- O ISBN pode ser escrito ou lido com a câmara; os dados são procurados no Google Livros e no Open Library.
- Em **Resumo** há backups (.zip com fotos, .json, .csv) e restauro.

## Ficheiros

| Ficheiro | Para quê |
|---|---|
| `index.html` | A app inteira |
| `config.js` | Endereço e chave pública do Supabase; chave opcional do Google Books |
| `supabase/setup.sql` | Cria as tabelas, as regras de acesso e a pasta das fotos. Correr uma vez no SQL Editor |
| `manifest.webmanifest`, `icon-*.png` | Ícone quando se adiciona ao ecrã principal do telemóvel |

## Se alguém se esquecer da palavra-passe

No Supabase: **Authentication › Users**, apagar o utilizador. A pessoa volta a criar o acesso
na app com o mesmo email (continua autorizada, porque a lista de pessoas com acesso não muda).
