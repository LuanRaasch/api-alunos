# API BIOSINCRONIZA

Esta é a API para o BioSincroniza, ela é responsável pela comunicação com equipamentos de Registro de Ponto Eletronico(REP).

## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **NodeMon**: Ferramenta que ajuda no desenvolvimento, reiniciando a aplicação a cada alteração feita nos diretórios.
- **Net**: Biblioteca nativa do NodeJS para conexões TCP.
- **Crypto**: Biblioteca nativa do NodeJS para encriptação RSA; 

## Configuração do Projeto

### Pré-requisitos

- Node.js (v12 ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-biosincroniza-nodejs.git
   cd api-biosincroniza-nodejs

2. Instale as dependências:
   ```terminal
   npm install

3. Configure as variáveis de ambiente: 
   Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
   ```
   PORT=8000
   JAVA_API_ENCRYPTION_AES_URL=url da api de encriptação aes
   JAVA_API_ENCRYPTION_AES_PORT=porta da api de encriptação aes
   TCP_TIMEOUT=timeout conexão tcp
   AES_KEY_SIZE=tamanho chave aes, (o padrão do projeto é 16)

5. Inicie o servidor:
   ```
   npm run dev

## Rotas da entidade Empresa

### 1. `POST /conn`
**Descrição:** Conecta uma nova empresa ao sistema.

**Corpo da Requisição:**
```json
{
  "cnpj": "string"
}
```
### 2. `POST /desc`
**Descrição:** Remove uma empresa do sistema.

**Corpo da Requisição:**
```json
{
  "cnpj": "string"
}
```
### 3. `GET /empConn`
**Descrição:** Retorna uma lista de empresas conectadas.

**Resposta:**

**Código 200: Lista de empresas conectadas.**
```json
{
  "cnpj": "string",
  "equipamentos": []
}
```
## Rotas da entidade Equipamento

### 1. `POST /sendmsg`
**Descrição:** Envia uma mensagem para um equipamento.

**Corpo da Requisição:**
```json
{
  "cnpj":"string",
  "idColetor":"string",
  "comando":"string",
  "code":"string"
}
```
### 2. `POST /add`
**Descrição:** Adiciona um novo equipamento ao sistema.

**Corpo da Requisição:**
```json
{
   "cnpj":"string",
   "idColetor":"string",
   "idnTipoColetor":"string",
   "numeroSerie":"string",
   "usuario":"string",
   "senha":"string",
   "host":"string",
   "port":"string"
}
```
### 3. `POST /conn`
**Descrição:** Conecta um equipamento ao sistema.

**Corpo da Requisição:**
```json
{
   "cnpj":"string",
   "idColetor":"string"  
}
```
### 4. `POST /desc`
**Descrição:** Desconecta um equipamento do sistema.

**Corpo da Requisição:**
```json
{
   "cnpj":"string",
   "idColetor":"string"  
}
```
