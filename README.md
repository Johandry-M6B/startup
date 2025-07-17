
## Kanban
Este proyecto replica las funcionalidades clave de Azure DevOps Boards con un enfoque en gestión ágil de tareas, mejorado con capacidades de IA.

## Similitudes con Azure DevOps
 Estructura Kanban:

- Columnas similares a Azure: "To Do" (Por Hacer), "Progress"  (En Progreso) y "Done" (Terminado)

- Capacidad para mover items entre columnas (drag & drop)

# Work Items Básicos:

- Sistema de tarjetas de tareas comparable a los Work Items de Azure

- Área de texto para descripción detallada (similar a la sección de descripción en Azure)

# Visualización:

- Diseño de panel similar al Azure Boards

- Scrollable columns como en la vista Kanban de Azure

## Valor Añadido con IA
Característica Azure	Nuestro Plus con IA
Work Items estáticos	Generación automática de tareas con IA
Estimación manual	Predicción de tiempos con IA
Tags básicos	Clasificación automática por categorías
Comentarios manuales	Sugerencias de resolución automática
##  Tecnologías Usadas
- TypeScript
- JavaSript
- CSS 
- HMTL
- Tailwind

## graph TD
     A[Frontend] --> B[Tailwind CSS]
     A --> C[TypeScript]
     D[Backend] --> E[IA Integration]
     E --> F[OpenAI API]
     E --> G[Auto-clasificación]
##  Cómo Usar (Comparativo)
Acción	En Azure DevOps	En Nuestro Sistema
Crear tarea	Nuevo Work Item	Textarea + Generación IA
Mover tarea	Drag & Drop	Drag & Drop + IA sugiere columnas
Priorizar	Manualmente	IA sugiere prioridad
Documentar	Campos descriptivos	Autocompletado con IA
##  Roadmap (vs Azure)
1. Fase Actual:

- Mínimo Producto Viable con columnas básicas

2. Próximas Fases:

- Sprint Planning integrado (como Azure Sprints)

- Tableros personalizables (similar a Azure Team Boards)

- Analytics con IA (superior a los reports estándar de Azure)

## Instalacion
1. Clona el repositorio

2. Instala las dependencias (asumiendo que tienes Node.js instalado):


     npm install
3. Inicia el servidor de desarrollo:

     npm run dev

## Como Usarlo
1. Introduce tareas en el área de texto (panel izquierdo)

2. Las tareas aparecerán en la columna "Por Hacer"

3. Arrastra las tareas entre columnas según su progreso (implementación probable en el código TypeScript)

4. Las funciones de IA pueden ofrecer sugerencias, automatizaciones o análisis (los detalles estarían en la implementación de TypeScript)

## Creadore
Johandry Julio
Isaac Quintero
Miguel Amador
Sebastina Arnache
