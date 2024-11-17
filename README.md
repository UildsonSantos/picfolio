

# **PicFolio**

PicFolio é uma aplicação de galeria de imagens construída com React, utilizando a API da Unsplash para buscar e exibir imagens de alta qualidade. A interface é responsiva e inclui funcionalidades como busca, exibição de imagens em carrossel, e um modal para visualização ampliada.

## **Demonstração**
- [Link para a Aplicação Online](https://stately-lollipop-78a30a.netlify.app/)

---

## **Características**
- Busca por imagens de alta qualidade usando a [Unsplash API](https://unsplash.com/developers).
- Carrossel de imagens interativo com suporte a múltiplos dispositivos usando **Swiper.js**.
- Modal para visualização de imagens em tamanho ampliado.
- Design responsivo e intuitivo.
- Feedback visual ao usuário para erros e carregamentos.

---

## **Pré-requisitos**
Antes de começar, você precisará ter instalado:
- **Node.js** (v16 ou superior)
- Gerenciador de pacotes como `npm` ou `yarn`
- Uma chave de acesso da API do Unsplash

---

## **Configuração**
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/picfolio.git
   cd picfolio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure sua chave de acesso da Unsplash API:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a variável:
     ```env
     REACT_APP_UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_ACCESS_KEY
     ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
   O projeto estará disponível em `http://localhost:3000`.

---

## **Deploy**
### **Netlify, Vercel ou GitHub Pages**
- Gere o build de produção:
  ```bash
  npm run build
  ```
- Siga as instruções para deploy no [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/) ou [GitHub Pages](https://pages.github.com/).

---

## **Tecnologias Utilizadas**
- **React**: Framework JavaScript para construção da interface.
- **Swiper.js**: Biblioteca para o carrossel de imagens.
- **Unsplash API**: Fonte de imagens de alta qualidade.
- **CSS**: Estilização customizada para design responsivo.

---

## **Como Usar**
1. Digite um termo no campo de busca e clique em **Search**.
2. Navegue pelas imagens exibidas no carrossel.
3. Clique em uma imagem para ampliá-la no modal.
4. Use o botão de fechar para retornar ao carrossel.

---

## **Contribuindo**
Contribuições são bem-vindas! Para contribuir:
1. Fork este repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit de suas alterações:
   ```bash
   git commit -m "Descrição da feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

---

## **Licença**
Este projeto está sob a licença [MIT License](./LICENSE).

---
