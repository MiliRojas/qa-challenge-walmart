# QA Automation Challenge

## Descripción

Este proyecto implementa la automatización de pruebas funcionales sobre la plataforma Your Store:

* https://opencart.abstracta.us/

---

## ⚙️ Stack Tecnológico

* **Playwright** 
* **Cucumber (BDD)** 
* **TypeScript** 
* **Page Object Model (POM)** 
* **Faker**
* **cucumber-html-reporter** 

---

## Casos de Prueba Seleccionados y Justificación

### Registro y Login de usuario

**Descripción:**
Flujo de creación de cuenta y posterior inicio de sesión.

**Justificación:**
Elegí automatizar el flujo de registro, cierre de sesión y posterior login porque representa el ciclo completo de gestión de cuenta del usuario, que es fundamental en cualquier plataforma, con eso compruebo:

* La cuenta se crea correctamente en el sistema
* La sesión se maneja de forma adecuada
* El usuario puede volver a autenticarse sin problemas
* Las credenciales generadas son persistentes
Desde el punto de vista de negocio, es crítico porque cualquier fallo en este proceso impacta directamente en la adquisición y retención de usuarios

---

### Actualización del carrito

**Descripción:**
Usuario agrega un producto al carrito y modifica su cantidad.

**Justificación:**
Elegí automatizar la actualización del carrito porque es un punto crítico donde se unen la interacción del usuario y lógica de negocio sensible como el cálculo del precio.
Al modificar la cantidad de un producto, no solo se actualiza un valor en la interfaz, sino que el sistema debe recalcular correctamente el total considerando el precio unitario. Este tipo de operación suele involucrar lógica en backend o en servicios intermedios, por lo que es propensa a errores, con eso compruebo:

* El cambio de cantidad impacta correctamente el total
* El cálculo es consistente (precio unitario × cantidad)
* La UI refleja el valor correcto después de la actualización
* No existen inconsistencias entre valores mostrados
Desde el punto de vista del negocio, cualquier error en este cálculo afecta directamente los ingresos y la confianza del usuario, por lo que es un flujo de alto riesgo.

---

### Checkout completo

**Descripción:**
Usuario realiza una compra completa hasta confirmar la orden.

**Justificación:**
Elegí automatizar el flujo completo de checkout porque es el proceso más crítico en una plataforma de ventas, ya que concentra múltiples componentes del sistema y culmina en la generación de ingresos.
Este flujo no solo valida una secuencia de pasos, sino la correcta integración entre distintos módulos como carrito, gestión de direcciones y confirmación de la orden, Desde el punto de vista del negocio, cualquier falla en este flujo impacta directamente en la conversión y en los ingresos, por lo que es uno de los escenarios de mayor prioridad.

---

## Instrucciones de Ejecución

### Requisitos previos

* Node.js (versión 18 o superior)
* npm

### Instalación

```bash
npm install
```

### Ejecutar pruebas

```bash
npm test
```

### Generar reporte HTML

```bash
npm run test:report
```

---

## 📁 Estructura del Proyecto

```bash
src/
 ├── pages/
 ├── steps/
 ├── hooks/
 ├── support/
 ├── utils/
 ├── types/
features/
reports/
```

---

## Evidencias

* Screenshots automáticos en fallos
* Reporte HTML con resultados de ejecución

---

## 🧠 Decisiones Técnicas

* Uso de **Playwright** por su manejo moderno de asincronía
* Uso de **Cucumber** para facilitar la legibilidad
* Implementación de **POM** para escalabilidad
* Uso de **esperas explícitas** debido a AJAX
* Validaciones de lógica de negocio