## Framework Http feito sobe o ExpressJS

## Exemplo

Exemplo de uso dos decorators ('Controller','GET','Redirect','Header')

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

## Funcionalidades
- Auto import dos controllers
- Uso de decorators para uma sintaxe mais limpa
- Adição de caches


## Features
- Cache
- Worker
- Etc..

