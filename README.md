# Rent Cart App

Aplicación front-end para buscar y reservar vehículos de alquiler. Hecha con Next.js, Redux Toolkit y TypeScript.

---

## Cómo Ejecutar el Proyecto

### Prerrequisitos

- Node.js v18+
- npm v9+

### Instalación

```bash
git clone https://github.com/tu-usuario/rent-cart-app.git
cd rent-cart-app
npm install
npm run dev
```

La app corre en [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando           | Descripción                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Servidor de desarrollo           |
| `npm run build`   | Build de producción              |
| `npm run start`   | Servidor de producción           |
| `npm run lint`    | Ejecuta ESLint                   |

---

## Decisiones Técnicas

### ¿Por qué estas tecnologías?

- **Next.js 16**: Lo elegí porque facilita el SSR y ya trae el routing resuelto con el App Router. No tuve que configurar nada extra para las rutas.
- **Redux Toolkit**: Es más sencillo que Redux puro. Con `createSlice` y `createAsyncThunk` me ahorro mucho boilerplate para manejar el estado y las llamadas asíncronas.
- **TypeScript**: Ayuda a detectar errores antes de correr la app. Las interfaces de `Vehicle`, estados del store, etc. quedan bien definidas.
- **CSS Modules**: Vienen incluidos en Next.js, así que no necesité instalar nada. Cada componente tiene sus estilos aislados.

### Estructura del proyecto

```
src/
├── app/              # App Router de Next.js (layout, page, providers)
├── features/         # Slices de Redux, uno por dominio
│   ├── booking/      # Selección de vehículo
│   ├── results/      # Resultados de búsqueda (incluye el thunk)
│   └── search/       # Criterios de búsqueda
├── services/         # Llamadas a API (mock por ahora)
├── store/            # Configuración del store de Redux
└── ui/               # Componentes visuales
    ├── SearchForm/
    ├── VehicleList/
    ├── VehicleCard/
    └── Summary/
```

Separé la app en tres capas: los **componentes visuales** (`ui/`), la **lógica de estado** (`features/`) y los **servicios** (`services/`). La idea es que si mañana conecto una API real, solo tengo que tocar `services/api.ts` sin cambiar los componentes.

Los slices de Redux están divididos por dominio (`search`, `results`, `booking`) para que cada uno maneje su propia parte del estado. Para las llamadas async usé `createAsyncThunk` que ya maneja los estados de loading/error automáticamente.

---

## Integración con Pasarela de Pago

Si tuviera que agregar pagos (por ejemplo con Stripe o MercadoPago), lo haría así:

### Flujo

1. El usuario selecciona un vehículo y ve el resumen con el precio total
2. Al hacer clic en "Continuar al Pago", el frontend envía los datos de la reserva a un endpoint del backend (ej: `POST /api/payments/create-intent`)
3. El backend se comunica con la pasarela y devuelve un token o ID de sesión
4. Con ese token, el frontend abre el formulario de pago seguro de la pasarela (Stripe Elements, checkout de MercadoPago, etc.)
5. La pasarela confirma el pago y notifica al backend vía webhook

### Qué cambiaría en el proyecto

- **Backend**: Necesitaría un endpoint que hable con la API de la pasarela. Las claves secretas van solo del lado del servidor.
- **Nuevo slice `payment`**: Para manejar los estados del pago (`idle`, `processing`, `success`, `failed`), siguiendo el mismo patrón que los otros slices.
- **Componente de checkout**: Un componente que monte el formulario de la pasarela y maneje la confirmación.

### Seguridad

Lo importante es que los datos de tarjeta nunca pasen por nuestro servidor. Usando el formulario embebido de la pasarela (como Stripe Elements), la info va directo a ellos y nosotros solo recibimos un token. El backend confirma el pago con webhooks para no depender solo de la respuesta del frontend.
