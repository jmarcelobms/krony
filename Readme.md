## Krony (Desenvolvimento) 

(Módulo ainda não criado, caso queira usar terá que utilizar o próprio repositório)

## Porque usar o krony?

O krony foi criado para simplificar o modo que trabalhamos com rotas no express, como a sintaxe de decorators acaba sendo um pouco mais legível e de fácil escrita.

Uma das grandes vantagens é que após a iniciação do projeto, temos simples rotas express como se fosses escritas usando a seguinte sintaxe:
```javascript
const {Router} =  require('express')
const router = Router()

router.get('/',(req,res)=>{
  return res.send('Hello world')
})
```

Destá forma no final teremos cerca de 99% dos códigos feitos, pois faremos a criação das rotas em express de acordo com o decorators nos controllers. 

Com exeção de decorators auxiliares que são:
- **@Header('','')**: Este decorator é toda vez que chamarmos a rota ele irá passar neste "middleware" para adicionar um novo **header**.


### Vantagens
- Sintaxe limpa.
- Mais produtividade.
- No final teremos o express então podemos usar ainda módulos compatíveis.  
- Velocidade do express.
- Funcionalidades que irão ajudar muito na produtividade.

### Desvantagens
- Terá que aprender sobre a sintaxe de decorators.
- Terá módulos específicos do krony que serão diferentes do express.

# Exemplo 

## Configuração
Para iniciar projeto precisamos passar uma configuração, que nela irá informar onde irá conter todos controllers da aplicação.

```javascript
const config = {
    controllers: path.resolve(__dirname, 'controllers')
}
```

Iniciando projeto.
```javascript
import { krony } from 'krony'
import path from 'path'
import express from 'express'

const app = async () => {
  const config = {
    controllers: path.resolve(__dirname, 'controllers')
  }
  
  const app = await krony(config)

  const http = app.init(express())

  http.use(express.json())

  http.listen(5050, () => {
    console.log('http://localhost:5050')
  })
}

app()
```

Exemplo Controller
```javascript
@Controller('/Clientes')
class Cliente {

  @GET('/')
  @Header('Cache-Control', 'public, max-age=31557600')
  async getOne(req: Request, res: Response) {
    try {
      await func()
      return res.json({ redirect: [] })
    } catch (error) {
      return res.json({ redirect: error })
    }
  }

  @GET('/all')
  @Redirect("/Clientes", 301)
  getAll(req: Request, res: Response) {
    return res.json([{ nome: 'Matheus' }])
  }
}
```


## Decorators
- Controller 
- GET,POST ... (Inclui todos métodos suportados pelo express).
- Redirect 
- Header
