// Ligação ao Supabase. Estes valores são públicos por natureza:
// o acesso aos dados é controlado pelo login e pelas regras da base de dados.
window.ACERVO_CONFIG = {
  supabaseUrl: 'COLAR_AQUI_O_PROJECT_URL',
  supabaseKey: 'COLAR_AQUI_A_CHAVE_PUBLICA',
  // Opcional: chave gratuita da Google Books API, para a pesquisa por ISBN não falhar
  // quando o Google está sobrecarregado. Deixar vazio se não houver.
  googleBooksKey: '',
};
