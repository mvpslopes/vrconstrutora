# VR Construtora - Website

Site institucional moderno e responsivo para a VR Construtora, desenvolvido com HTML, CSS e JavaScript puro.

## 🎨 Design

O site foi desenvolvido baseado no sistema de design definido em `design.json`, utilizando as cores do logo da VR Construtora:
- **Laranja Primário**: #FF6B35 (CTAs e elementos interativos)
- **Azul Primário**: #1E3A8A (Seções de destaque e hero)
- **Neutros**: Cinza claro, branco e tons de cinza para texto

## 📁 Estrutura de Arquivos

```
vrconstrutora/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS completos
├── script.js           # JavaScript para interatividade
├── design.json         # Sistema de design e diretrizes
├── README.md           # Este arquivo
└── Logo VR Construtora-2.png  # Logo da empresa
```

## 🚀 Como Usar

1. **Abrir o site**: Simplesmente abra o arquivo `index.html` em um navegador moderno
2. **Servidor local (recomendado)**: Para melhor experiência, use um servidor local:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   
   # Com PHP
   php -S localhost:8000
   ```
3. Acesse `http://localhost:8000` no navegador

## ✨ Funcionalidades

### Navegação
- Menu responsivo com hamburger em mobile
- Scroll suave entre seções
- Destaque automático do link ativo durante o scroll
- Header fixo com sombra ao fazer scroll

### Seções Incluídas
1. **Hero Section**: Seção principal com imagem de fundo e call-to-action
2. **Sobre Nós**: Informações sobre a empresa
3. **Serviços**: Carrossel de serviços oferecidos
4. **Projetos**: Grid de projetos com navegação por categorias
5. **Por Que Escolher**: Benefícios e diferenciais
6. **Processo**: Etapas do processo de trabalho
7. **Contato**: Formulário de contato e informações

### Interatividade
- Animações de scroll (fade-in)
- Efeito ripple em botões
- Carrossel de serviços arrastável
- Troca de imagens ao clicar nas categorias de projetos
- Formulário de contato funcional
- Contador animado nas estatísticas

## 🎯 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🛠️ Personalização

### Cores
As cores podem ser alteradas no arquivo `styles.css` através das variáveis CSS:
```css
:root {
    --primary-orange: #FF6B35;
    --primary-blue: #1E3A8A;
    /* ... outras cores */
}
```

### Conteúdo
Todo o conteúdo pode ser editado diretamente no arquivo `index.html`.

### Imagens
As imagens atualmente usam URLs do Unsplash. Substitua pelos caminhos das suas próprias imagens:
- Imagens de projetos
- Fotos da equipe
- Imagens de serviços

## 📝 Notas

- O logo deve estar no mesmo diretório com o nome `Logo VR Construtora-2.png`
- As imagens do Unsplash são placeholders - substitua pelas imagens reais da empresa
- O formulário de contato atualmente apenas mostra um alerta - integre com seu backend para envio real

## 🌐 Compatibilidade

- Chrome/Edge (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Navegadores mobile modernos

## 📄 Licença

Este projeto foi desenvolvido para a VR Construtora.

---

**Desenvolvido com base no sistema de design definido em `design.json`**

