Nombre de la Práctica: Creación y gestión inicial de un repositorio de software en GitHub para un Sistema E-Commerce de Abarrotes.
Descripción Detallada:
Plataforma web basada en microservicios orientada a la digitalización de comercios y tiendas de abarrotes locales. Desconecta de manera lógica la gestión del catálogo de artículos del control operativo de almacén e inventario, facilitando la escalabilidad individual de cada servicio y permitiendo un despliegue independiente mediante contenedores Docker.
Integrantes: Saldaña Hernandez, Roman Ramirez Santiago, Perez Tapia Erick Antonio,Rodríguez Mendez David Gerardo
Tecnologías Utilizadas
Lenguajes & Frameworks: JavaScript / TypeScript o Java / Python.
Control de Versiones: Git y GitHub con flujo de trabajo basado en GitFlow (main, develop, feature branches).
Integración Continua (CI/CD): GitHub Actions para automatización de build y pruebas.
Virtualización y Contenedores: Docker Bases de Datos: Mysql.
Pruebas Unitarias: Node.js o Java.
Arquitectura y Microservicios:
Microservicio 1:
Productos
Responsables
Ruth Saldaña e Santiago Roman
Operaciones:
• Registrar nuevos productos (POST /productos)
• Consultar catálogo y detalle (GET /productos)
• Actualizar precios y descripción (PUT /productos/:id)
• Eliminar/Desactivar productos (DELETE /productos/:id)
Microservicio 2:
Inventario
Responsables
Erick Perez e David Rodríguez
Operaciones:
• Consultar existencias de stock (GET /inventario)
• Registrar entradas de stock (POST /inventario/entrada)
• Registrar salidas o mermas (POST /inventario/salida)
• Generar alertas automáticas de stock mínimo (GET /inventario/alertas)
Requisitos e Instalación
Clonar el repositorio: git clone https://github.com/tu-organizacion/ecommerce-abarrotes-microservicios.git
Acceder al directorio: cd ecommerce-abarrotes-microservicios
Configurar entorno: cp .env.example .env (Establecer variables de conexión a base de datos)
Instrucciones de Ejecución
Para ejecutar los servicios localmente de manera individual o conjunta:
Ejecución con Docker Compose (Recomendado): docker-compose up --build
Ejecución Manual Microservicio Productos: cd servicio-productos && npm install && npm run dev

Ejecución Manual Microservicio Inventario: cd servicio-inventario && npm install && npm run dev
Evidencias y Estado del Proyecto
Evidencias Solicitadas: Enlace al repositorio remoto, capturas de logs de ejecución, historial de commits por integrante y exportación del cronograma en Excel.

Estado Actual: Fase 1 Finalizada (Repositorio creado, estructura de microservicios configurada, archivo .gitignore establecido y asignación de roles realizada). Próxima etapa: Desarrollo de APIs y Pipeline CI/CD.