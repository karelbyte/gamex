# GameX — El Bosque de las Sombras

## Concepto
Juego de aventura/ficción interactiva en 2D. El jugador explora un bosque lúgubre de 100 locaciones, recoge objetos, resuelve puzzles y rescata a la princesa Elara de la Torre Oscura.

## Stack Técnico
- **Frontend + Backend:** Next.js con TypeScript (monolito)
- **Base de datos:** SQLite en volumen persistente
- **ORM:** Prisma
- **Auth:** Auth.js (NextAuth)
- **Estilos:** Tailwind CSS + Framer Motion
- **Imágenes:** Generadas con IA a partir de los prompts en story.md
- **Deploy:** Railway (un servicio Next.js + volumen para SQLite)

## Estructura del Juego
- 100 locaciones organizadas en 6 zonas
- 15 objetos recolectables con usos específicos
- NPCs (hadas, duendes, espíritus)
- Sistema de bloqueos (objetos necesarios para avanzar)
- Registro de usuarios y progreso guardado
- Tono lúgubre/gótico en todas las descripciones

## Documentación
- Historia completa y mapa: `docs/story.md`

## Modelo de Datos
- `User` — registro, auth, sesión
- `Scene` — id, nombre, imagen, descripción, conexiones (N/S/E/O)
- `SceneConnection` — dirección, destino, requiere objeto, texto bloqueado
- `Item` — id, nombre, descripción, escena donde se encuentra
- `PlayerProgress` — usuario, escena actual, objetos recogidos, historial