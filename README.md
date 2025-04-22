# 🍔 Kiosco Digital con Next.js

¡Bienvenido al proyecto de un Kiosco de comida digital! 🚀  
Esta aplicación permite a los usuarios seleccionar productos, personalizar pedidos, enviar órdenes a cocina y gestionar productos desde un panel administrativo. Todo construido con tecnologías modernas y buenas prácticas de desarrollo web.

---

## 🧾 Descripción

Este sistema simula el flujo completo de un quiosco de comida rápida:  
1. Los clientes hacen pedidos desde un frontend intuitivo.  
2. La cocina recibe las órdenes en tiempo real.  
3. Los administradores pueden crear, editar y eliminar productos con imágenes.  
4. El sistema notifica cuando una orden está lista para ser recogida.

Ideal para negocios que deseen implementar un sistema automatizado de pedidos. 🎯

---

## 🛠️ Tecnologías Utilizadas

- ⚙️ **Next.js 15** – SSR, rutas modernas, servidor embebido.
- ⚛️ **React** – Componentes reutilizables y estado dinámico.
- 🎨 **Tailwind CSS** – Estilos rápidos y responsivos.
- 🔐 **Prisma ORM** – Acceso a base de datos relacional.
- ☁️ **Cloudinary** – Subida y gestión de imágenes.
- 🧪 **Zod** – Validaciones tanto en cliente como en servidor.
- 🗃️ **PostgreSQL** – Base de datos (según tu configuración).
- 📦 **TypeScript** – Tipado estático para mayor robustez.

---

## 🚀 ¿Cómo ejecutar el proyecto?

### 1️⃣ Clona el repositorio

```bash
git clone https://github.com/afgomezv/kiosko-app.git
cd kiosko-app
```

### 2️⃣ Instala las dependencias

```bash
npm install
```

### 3️⃣ Configura las variables de entorno

```bash
DATABASE_URL=tu_url_de_base_de_datos
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

### 4️⃣ Ejecuta las migraciones de prisma

```bash
npx prisma generate
npx prisma migrate dev
```
### 5️⃣ Inicia el servidor de desarrollo

```bash
npm run dev
```