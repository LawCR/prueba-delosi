# Prueba Técnica para DELOSI - Ejercicio de Matriz NxN
## Descripción

Esta es una aplicación React/Next.js que permite manipular matrices de números. Los usuarios pueden incrementar o disminuir el tamaño de la matriz y actualizar los valores dentro de ella. La aplicación también muestra una versión rotada de la matriz en sentido antihorario (90 grados).

## Características

- **Incrementar Tamaño de Matriz:** Añade una fila y una columna a la matriz existente.
- **Disminuir Tamaño de Matriz:** Elimina una fila y una columna de la matriz existente.
- **Actualizar Valores de la Matriz:** Permite a los usuarios ingresar valores numéricos en los elementos de la matriz (Input).
- **Rotación de la Matriz:** Muestra una versión rotada en sentido antihorario (-90°) de la matriz actualizada (Output).

## Componentes Principales

- **MatrixContainer:** Contiene y coordina la lógica de la matriz, incluidos los botones, la entrada y la salida de la matriz.
- **MatrixButtons:** Proporciona botones para incrementar o disminuir el tamaño de la matriz.
- **MatrixInput:** Permite al usuario ingresar y actualizar valores en la matriz.
- **MatrixOutput:** Muestra la matriz rotada -90°.
- **MatrixGridWrapper:** Un componente envoltorio para mostrar matrices con un título y diseño consistente.

## Estructura de la Aplicación

La estructura del directorio de la aplicación está basada en features para garantizar una mejor escalabilidad y mantenimiento. Esto significa que los archivos y componentes relacionados con una funcionalidad específica se agrupan en un mismo directorio. Esta organización facilita la navegación y la comprensión del código, así como la incorporación de nuevas funcionalidades o mantenimiento en el futuro, siendo en este caso Matrix uno de los features desarrollados.

### Ventajas de la Estructura Basada en Features

- **Escalabilidad**: La estructura facilita la adición de nuevas funcionalidades sin necesidad de reorganizar el código existente.
- **Mantenimiento**: Es más fácil mantener y actualizar el código cuando todos los archivos relacionados con una característica específica se agrupan en un solo lugar.
- **Colaboración**: Facilita la colaboración entre desarrolladores, ya que cada miembro del equipo puede trabajar en diferentes características de manera aislada sin interferir en el trabajo de otros.

## Pruebas Unitarias

Esta aplicación incluye pruebas unitarias para asegurar la funcionalidad correcta de los componentes. Las pruebas verifican que:

- Los botones de incremento y decremento funcionan correctamente.
- La función de rotación de la matriz se llama cada vez que se actualiza la matriz.
- Los valores ingresados en la matriz se actualizan correctamente.

## Instalación y Ejecución

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/LawCR/prueba-delosi
   cd prueba-delosi
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

2. Crear una copia del ```.env.template```  y renombrarlo a ```.env``` y cambiar las variables de entorno

### Ejecución del Proyecto

Para ejecutar la aplicación en modo de desarrollo:

```bash
npm run dev
```

### Ejecución de pruebas unitarias

Para ejecutar las pruebas unitarias:

```bash
npm run test
npm run test:watch
```
Las pruebas están configuradas con Jest y React Testing Library, y cubren la funcionalidad principal de los componentes de la aplicación.

### Ejecución del Proyecto en Producción

Para ejecutar la aplicación en modo de desarrollo:

```bash
npm run build
npm start
```
