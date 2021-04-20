## Krony (Desenvolvimento)

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
