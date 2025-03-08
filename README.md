# API ALUNOS

## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **NodeMon**: Ferramenta que ajuda no desenvolvimento, reiniciando a aplicação a cada alteração feita nos diretórios.
- **bccryptjs**: Biblioteca para fazer o hash de senhas.
- **jsonwebtoken**: Módulo para gerenciamento dos tokens de autênticação dos usuários;
- **multer**: Middleware para upload e manipulação de arquivos.
- **sequelize**: ORM NodeJs que utilizo junto do MySQL. 

## Configuração do Projeto

### Pré-requisitos

- Node.js (v12 ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-alunos.git
   cd api-biosincroniza-nodejs

2. Instale as dependências:
   ```terminal
   npm install

3. Configure as variáveis de ambiente: 
   Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
   ```
   DATABASE=nome do banco de dados
   DATABASE_HOST=endereço do banco
   DATABASE_PORT=porta do banco
   DATABASE_USERNAME=usuário do banco
   DATABASE_PASSWORD=senha do banco
   TOKEN_SECRET=chave secreta do token
   TOKEN_EXPIRATION=expiração do token

5. Inicie o servidor:
   ```
   npm run dev
