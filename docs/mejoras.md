# Mejoras - El Bosque de las Sombras

## Implementadas

### Gameplay
- [x] Fix escena 100: conexión sur para regresar si no tienes los items finales
- [x] Escenas mortales: Gorgona (45) sin Espejo Roto y Lago del Espíritu (35) sin Amuleto te devuelven con mensaje de muerte
- [x] Descripciones dinámicas: 18 textos alternativos en escenas clave según inventario del jugador
- [x] NPCs interactivos: Duende Dormido (tip con Farol), Gato de Tres Ojos (tip gratis del siguiente objeto), Duende del Laberinto (tip por oro), Hada Herida (intercambio Mandrágora → Llave)
- [x] Escena final con decisión moral: perdonar o condenar al Señor de las Sombras (2 finales)
- [x] Textos de revisita: "Ya conoces este lugar..." al volver a escenas visitadas
- [x] Objetos se consumen al usarlos (excepto Espada y Frasco del final)
- [x] Controles de teclado: flechas y WASD para moverse

### UI/UX
- [x] Tooltip en nodos del mapa: hover muestra nombre de escena
- [x] Botones de dirección muestran destino (Norte → nombre de escena)
- [x] Auto-scroll del registro al último mensaje
- [x] Inventario visual con imágenes de items y tooltip de descripción
- [x] Objetos recolectables con imagen sobre la escena
- [x] Mapa muestra nodos bloqueados en rojo
- [x] Animaciones con Framer Motion: transición de escena, mensajes, items
- [x] Fuentes góticas: UnifrakturMaguntia (títulos), Cinzel (nombres de escena)
- [x] Registro persistente de eventos guardado en DB
- [x] Modal de configuración con "Borrar rastro" y confirmación
- [x] Imagen de fondo en landing, login y juego
- [x] Scrollbars finos y oscuros
- [x] Login unificado por nick (sin email)

### Contenido
- [x] 100 locaciones con descripciones lúgubres
- [x] 100 imágenes de escenas (estilo dark fantasy illustration)
- [x] 16 objetos con imágenes de inventario
- [x] 7 NPCs con diálogos e interacciones
- [x] 361 conexiones entre escenas
- [x] Bolsa de Oro como item para intercambio con el Duende del Laberinto

---

## Pendientes

### Deploy
- [ ] Subir a Railway (Dockerfile listo)
- [ ] Configurar volumen persistente en /data para SQLite
- [ ] Variable AUTH_SECRET en producción

### Optimización
- [ ] Convertir imágenes PNG a WebP (reducir ~60% de peso)
- [ ] Headers de caché para assets estáticos
- [ ] Lazy loading de imágenes de escena

### Ideas futuras
- [x] Sonido ambiente y efectos (audio loop lúgubre, SFX al recoger items)
- [x] Animación de item volando al inventario al recogerlo
- [ ] Sistema de logros (explorador: visitar 50 escenas, coleccionista: tener todos los items)
- [ ] Modo oscuro/claro (ya es oscuro, pero toggle por si alguien quiere)
- [ ] Compartir progreso/final en redes sociales
- [x] Timer de juego (cuánto tardaste en completarlo)
- [ ] Ranking de jugadores por tiempo/escenas visitadas
- [ ] Más escenas mortales o trampas
- [ ] Segundo recorrido con enemigos o dificultad extra (New Game+)
