### Express Azure

## O que é este repo?

Eu criei este repo porque quando me iniciei no Azure não sabia como por uma app em node.js / express a trabalhar no Azure, eu fazia deploy mas nunca funcionava, mais tarde descobri um repo parecido no git onde tinha um "sample" de como fazer, então peguei e alterei para algo que sirva para o que preciso, e para poder documentar o processo em portugues.

## Como usar?

Para usar este repo basta fazer os seguintes comandos no Terminal ou CMD

```
git clone https://github.com/carlosteixeiraa/express-azure
```

Depois fazer
```
cd express-azure
```

Se quiser exprimentar para ver se funciona ou fazer alterações
```
npm install
```

```
npm start
```

Se apenas quiser fazer deploy para o azure basta criar uma Web APP em portal.azure.com e depois em Deployment Options escolher LocalGitHubRepo ou algo do genero, configurar as credenciais
```
git remote add origin LINK QUE VAI ESTAR NO AZURE
```

```
git add .
```

```
git commit -m "Upload ficheiros"
```

## Como fazer alterações

Se quiser alterar a aplicação em si, as portas, os links etc.. é nos ficheiros .js se quiser mudar algo na aparencia é mudar os ficheiros .css e .jade