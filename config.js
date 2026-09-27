// Ligação ao Supabase. Estes valores são públicos por natureza:
// o acesso aos dados é controlado pelo login e pelas regras da base de dados.
window.ACERVO_CONFIG = {
  supabaseUrl: 'https://xisuzmlfrvzdurczyhst.supabase.co',
  supabaseKey: 'sb_publishable_cH_9_3JEEj3gk3edfUeF_A_dc-QPR4a',
  // Opcional: chave gratuita da Google Books API, para a pesquisa por ISBN não falhar
  // quando o Google está sobrecarregado. Deixar vazio se não houver.
  googleBooksKey: '',
};
