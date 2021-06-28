![Nomes do Brasil](#)

# Nomes Brasil

Veja a frequência do registro dos nomes no Brasil, por década. A aplicação consulta a [API de nomes do IBGE](https://servicodados.ibge.gov.br/api/docs/nomes?versao=2) e fornece uma visualização simples para você!

# Stack
- Create React App
- React Hooks
- Material UI

# Perguntas Frequentes

**Quando consulto nomes compostos, por exemplo, Maria dos Anjos, Maria Luiza etc, a API não retorna nenhum resultado. Por quê?**

O Censo Demográfico 2010 não considerou nos questionários nomes compostos, apenas o primeiro nome e o último sobrenome. Por essa razão, esta API não retorna resultados ao consultar nomes compostos.


**Há possibilidade desta API liberar consultas pelo sobrenome?**
Em virtude da proximidade do Censo Demográfico 2020, é provável que essa informação só esteja disponível após a divulgação do referido Censo.


**Consultei pelo meu nome no meu município, mas não obtive nenhum resultado. Por quê?**

Quando a quantidade de ocorrências for suficientemente pequena a ponto de permitir a identificação delas, o IBGE não informa essa quantidade. No caso da API de Nomes, a quantidade mínima de ocorrências para que seja divulgado os resultados é de 10 por município, 15 por Unidade da Federação e 20 no Brasil.


**A API distingue nomes diferenciados somente pelo uso de sinais diacríticos (acento agudo, acento circunflexo, acento grave, cedilha, trema e til) como, por exemplo, Antônio e Antonio?**

A API não considera o uso de sinais diacríticos, de forma que Antônio e Antonio são contabilizados como Antonio.
