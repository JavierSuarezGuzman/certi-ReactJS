## Descripción del proyecto

Este proyecto es un diccionario de inglés (ya que la API ya no soporta otros idiomas) y fue realizado con la idea más minimalista de un diccionario, realizando busquedas sin botón, ya que al finalizar de escribir la palabra de manera correcta, esta es buscada por el sistema en tiempo real. Muestra la palabra buscada en minúsculas (lower caps) y un botón de un parlante para escuchar su pronunciación en inglés. A demás consta con la definición más usada según la API y de estar disponibles, sus sinónimos y antónimos. Todo esto con una interfaz en inglés, exceptuando la descripción de la certificación "About certification" y el footer, que es un guiño a lo realizado en clases.


### Patrón de arquitectura utilizado

Se utiliza api context, hooks y custom hooks, a demás de algunos childs (para el consumo de la API) y algunas props, todas estas señalizadas en los archivos .js que las contienen.

### Patrones de diseño utilizados

El patrón de diseño preponderante es High Order Component (HOC) y también ha sido señalado o indicado en los archivos que las contienen.

### Deployment

El deploy fue realizado 100% en Vercel web, mientras que la carga de data en GitHub. Fue testeado como CI/CD funcionando desde el primer commit.

