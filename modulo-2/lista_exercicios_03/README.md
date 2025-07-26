# Lista de Exercícios 03 - Curso Dev. Full Stack Jr - +Prati & Codifica

Este repositório contém os exercícios da **terceira lista de exercícios** do curso, focada em desenvolvimento web front-end com HTML5, CSS3 e JavaScript. Os exercícios foram desenvolvidos como páginas web completas e podem ser executados localmente em qualquer navegador web.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime Text, ou similar) - opcional para visualizar o código
- Servidor local (opcional) - Live Server do VS Code ou similar para melhor experiência

## Configuração do Ambiente

Siga os passos abaixo para configurar o ambiente e executar os exercícios:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Alan-oliveir/curso_prati_full_stack.git
   ```

2. **Acesse o diretório da lista de exercícios**:
   ```bash
   cd curso_prati_full_stack/modulo-2/lista_exercicios_03
   ```

3. **Abra os arquivos HTML**: Você pode abrir os arquivos HTML diretamente no navegador ou usar um servidor local para melhor experiência de desenvolvimento.

## Como Executar os Exercícios

Cada exercício está implementado como uma página HTML independente. Para visualizar um exercício:

1. **Opção 1 - Abertura direta**:
   - Navegue até a pasta do projeto
   - Clique duas vezes no arquivo HTML desejado
   - O arquivo será aberto no navegador padrão

2. **Opção 2 - Servidor local**:
   - Use a extensão Live Server do VS Code (Recomendado)
   - Ou execute um servidor HTTP simples:
     ```bash
     python -m http.server 8000
     ```
   - Acesse `http://localhost:8000` no navegador

## Lista de Exercícios

### **1. Página Principal (index.html)**
Página de apresentação pessoal com:
- Estrutura semântica HTML5
- Seções bem organizadas (missão, sobre, habilidades)
- Estilização básica com CSS
- Layout responsivo

### **2. Listas e Navegação (listas.html)**
Página demonstrando o uso de:
- **Listas não ordenadas** (hobbies)
- **Listas ordenadas** (receita passo a passo)
- **Links externos** para sites de referência
- Navegação estruturada

### **3. Formulário de Feedback (feedback.html)**
Formulário completo e acessível com:
- **Diferentes tipos de input** (text, email, radio, checkbox, select)
- **Fieldsets e legends** para organização
- **Labels associados** para acessibilidade
- **Validação HTML5** nativa

### **4. Estilização da Pagina Principal (styles.css)**
Estilização da página com:
- **Cores** para o fundo e texto nas seções.
- **Margens, Padding e Bordas** nas seções para evidenciar o contorno

### **5. Seletores e Propriedades (styles.css)**
Uso de seletores e propriedades em:
- **Tags h2** para aumentar o tamanho da fonte e aplicar sublinhado
- **Classe destaque** para deixar o texto em itálico e alterar levemente a cor
- **Identificador importante** para adicionar border-top mais espessa em um parágrafo  

### **6. Galeria de Tecnologias (galeria.html)**
Demonstração de layout moderno com:
- **CSS Grid** para organização de imagens
- **Flexbox** para alinhamento de elementos
- Galeria responsiva de ícones de tecnologias
- Efeitos hover e transições suaves

### **7. Menu Hamburger Responsivo (menu.html)**
Implementação de navegação mobile com:
- **Menu hamburger** funcional
- **JavaScript** para interatividade
- **Design responsivo** para diferentes dispositivos
- Transições suaves e animações CSS

## Estrutura de Arquivos

```
lista_exercicios_03/
├── index.html          # Página principal
├── galeria.html        # Galeria com Grid/Flexbox
├── listas.html         # Demonstração de listas
├── menu.html           # Menu hamburger responsivo
├── feedback.html       # Formulário de feedback
├── styles.css          # Estilos CSS principais
├── menu.js             # JavaScript para menu hamburger
├── images/             # Imagens e ícones SVG
│   ├── html5.svg
│   ├── css3.svg
│   ├── javascript.svg
│   ├── react.svg
│   ├── nodejs.svg
│   ├── mongodb.svg
│   ├── git.svg
│   └── vscode.svg
└── README.md           # Este arquivo
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e formulários
- **CSS3**: Grid, Flexbox, animações e responsividade
- **JavaScript**: Interatividade do menu hamburger
- **SVG**: Ícones escaláveis de tecnologias

## Conceitos Demonstrados

### **HTML5**
- Elementos semânticos (`<header>`, `<main>`, `<section>`, `<figure>`)
- Formulários com validação nativa
- Acessibilidade com labels e fieldsets

### **CSS3**
- **CSS Grid** para layouts bidimensionais
- **Flexbox** para alinhamento e distribuição
- **Media queries** para responsividade
- **Pseudo-classes** e **pseudo-elementos**
- **Animações** e **transições**

### **JavaScript**
- Manipulação do DOM
- Event listeners
- Toggle de classes CSS
- Interatividade responsiva
