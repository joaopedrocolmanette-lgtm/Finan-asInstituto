# Finanças da Clínica

Aplicativo web estático, pensado para publicação no GitHub Pages e uso no iPhone.

## Publicação
1. Crie um repositório no GitHub.
2. Envie `index.html`, `manifest.webmanifest` e `sw.js` para a raiz do repositório.
3. Ative GitHub Pages em Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
4. Abra a URL no Safari do iPhone.
5. Use Compartilhar → Adicionar à Tela de Início.

## Recursos
- Título e foto de perfil editáveis, armazenados localmente por dispositivo.
- Área de configurações protegida pelo botão ⚙ para taxas da maquininha, repasse profissional, backup e restauração.
- Crédito permite escolher "À vista" ou parcelado de 2x a 12x.

## Regras implementadas
- Pix: clínica = valor pago × 1
- Dinheiro: clínica = valor pago × 1
- Débito: taxa padrão de 2,38% (clínica = valor pago × 0,9762)
- Crédito: taxa padrão de 3,5% (clínica = valor pago × 0,965)
- Profissional: repasse padrão de 50% do recebimento líquido da clínica
- Crédito inicia no mês seguinte.
- Parcelas de crédito são lançadas mensalmente.
- Datas inexistentes no mês seguinte são ajustadas para o último dia do mês.
- Busca por nome e filtro por período.
- PDF por impressão do relatório filtrado.
- Backup JSON local para restauração manual, incluindo perfil, configurações e lançamentos.

## Observação
Os dados são locais ao navegador/dispositivo. O GitHub Pages publica o código, mas não armazena os lançamentos. Para não perder dados, use o botão Backup regularmente.

### Versão 8
- Configurações: botão de limpeza total do aparelho (dados + cache + preferências).
- Relatório PDF/Impressão com título e foto do perfil, degradê personalizado no cabeçalho, cabeçalho de colunas e blocos mensais coloridos.
- PDF oculta a coluna Bruto clínica e exibe apenas o total de Líquido dentista, com dados em fonte ampliada e negrito.
- Filtros de período não aparecem no PDF.
- Ícone de instalação configurado para o logotipo do Instituto do Sorriso.
- Os lançamentos do PDF são agrupados por mês em blocos visuais separados, com cores suaves próprias para cada mês.
