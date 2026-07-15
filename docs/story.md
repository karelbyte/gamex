# GameX — El Bosque de las Sombras

## Concepto General

El jugador despierta en el borde de un bosque antiguo y retorcido. La princesa Elara ha sido secuestrada por el Señor de las Sombras y llevada a lo profundo del bosque maldito. El jugador debe explorar 100 locaciones, recoger objetos, resolver puzzles, interactuar con criaturas (hadas, duendes, espíritus) y sobrevivir para llegar a la Torre Oscura donde está prisionera.

**Tono:** Lúgubre, atmosférico, oscuro pero con momentos de belleza siniestra. Niebla constante, luz escasa, sonidos perturbadores.

**Objetivo:** Rescatar a la princesa Elara en la Torre Oscura (locación 100).

---

## Reglas del Juego

- El jugador se mueve entre locaciones usando direcciones (norte, sur, este, oeste)
- Algunas direcciones están bloqueadas y requieren un objeto específico
- Los objetos se recogen automáticamente al interactuar con ellos
- Algunos NPCs dan objetos a cambio de otros (trueque)
- No hay combate, solo exploración y puzzles
- El jugador puede morir en ciertas locaciones si no tiene el objeto correcto (reinicia en la última locación segura)

---

## Objetos del Juego

| # | Objeto | Dónde se encuentra | Para qué sirve |
|---|--------|-------------------|-----------------|
| 1 | Llave Oxidada | Loc 5 - Cabaña del Leñador | Abre la puerta de la Cripta (Loc 22) |
| 2 | Farol de Llama Azul | Loc 12 - Altar del Hada | Ilumina la Cueva Sin Luz (Loc 31) |
| 3 | Amuleto de Hueso | Loc 18 - Tumba Olvidada | Protege del Espíritu del Lago (Loc 35) |
| 4 | Cuerda de Raíces | Loc 24 - Árbol Hueco | Cruzar el Precipicio (Loc 40) |
| 5 | Espejo Roto | Loc 29 - Ruinas del Santuario | Refleja la mirada de la Gorgona (Loc 45) |
| 6 | Flauta de Hueso | Loc 33 - Nido del Cuervo | Calma al Guardián del Puente (Loc 50) |
| 7 | Sangre de Luna | Loc 38 - Claro de la Luna Roja | Abre la Puerta de Sangre (Loc 55) |
| 8 | Corona de Espinas | Loc 42 - Trono Abandonado | Convence al Rey Duende (Loc 60) |
| 9 | Ojo de Cristal | Loc 48 - Fuente Seca | Ve caminos ocultos (Loc 65→70) |
| 10 | Pluma del Búho Negro | Loc 53 - Nido en la Torre | Abre el Sello del Viento (Loc 72) |
| 11 | Raíz de Mandrágora | Loc 58 - Jardín Putrefacto | Cura al Hada Herida (Loc 75) |
| 12 | Llave de Plata | Loc 63 - Cofre del Duende | Abre la Reja de la Torre (Loc 85) |
| 13 | Manto de Sombras | Loc 68 - Altar Oscuro | Pasa invisible ante los Centinelas (Loc 90) |
| 14 | Espada de Cristal | Loc 78 - Forja Abandonada | Rompe las Cadenas de Elara (Loc 100) |
| 15 | Frasco de Lágrimas | Loc 82 - Pozo de los Lamentos | Despierta a Elara del sueño (Loc 100) |

---

## Mapa de Locaciones (100)

### Zona 1: Borde del Bosque (Loc 1-15)

#### Locación 1: El Camino Olvidado
- **Imagen prompt:** Un sendero de tierra agrietada al borde de un bosque denso y oscuro. La niebla se arrastra entre los troncos retorcidos. Un cartel de madera podrida señala hacia la oscuridad. Luz tenue del atardecer moribundo. Estilo lúgubre, gótico.
- **Descripción:** "Un sendero olvidado se pierde entre la niebla. El cartel dice algo, pero las letras están casi borradas por el tiempo. Solo puedes leer: '...no regreses'. El bosque te observa."
- **Norte →** Loc 2 (Entrada del Bosque)
- **Sur →** Bloqueado ("No hay nada detrás de ti. Solo el vacío de donde viniste.")
- **Este →** Loc 3 (Arroyo Turbio)
- **Oeste →** Loc 4 (Muro de Piedra)

#### Locación 2: Entrada del Bosque
- **Imagen prompt:** Una entrada natural formada por dos árboles enormes cuyas ramas se entrelazan como garras. Raíces expuestas cubiertas de musgo negro. Telarañas gruesas entre las ramas. Niebla densa al fondo. Lúgubre y amenazante.
- **Descripción:** "Dos robles ancestrales forman un arco grotesco. Sus ramas se retuercen como dedos huesudos buscando algo que agarrar. Más allá, la oscuridad del bosque es casi sólida."
- **Norte →** Loc 6 (Sendero Bifurcado)
- **Sur →** Loc 1 (El Camino Olvidado)
- **Este →** Loc 7 (Zarzal Espinoso)
- **Oeste →** Loc 5 (Cabaña del Leñador)

#### Locación 3: Arroyo Turbio
- **Imagen prompt:** Un arroyo de agua oscura y turbia que serpentea entre rocas cubiertas de limo verde. Ramas muertas flotan en la superficie. Una neblina baja se eleva del agua. Hongos luminiscentes en las orillas.
- **Descripción:** "El agua negra del arroyo se mueve lenta, como sangre espesa. Algo brilla débilmente bajo la superficie — quizás solo un reflejo, quizás algo que te mira de vuelta."
- **Norte →** Loc 8 (Puente de Troncos)
- **Sur →** Bloqueado ("La corriente se vuelve violenta al sur. No puedes cruzar.")
- **Este →** Loc 9 (Pantano de las Luciérnagas)
- **Oeste →** Loc 1 (El Camino Olvidado)

#### Locación 4: Muro de Piedra
- **Imagen prompt:** Un muro de piedra antigua cubierto de enredaderas secas y musgo oscuro. Grietas profundas recorren la superficie. Un bajo relieve desgastado muestra figuras danzantes. Un búho observa desde arriba.
- **Descripción:** "El muro se extiende hasta donde alcanza la vista, cubierto de cicatrices del tiempo. Los grabados muestran figuras que bailan — o huyen. El búho no te quita los ojos de encima."
- **Norte →** Loc 5 (Cabaña del Leñador)
- **Sur →** Bloqueado ("El muro no tiene fin hacia el sur.")
- **Este →** Loc 1 (El Camino Olvidado)
- **Oeste →** Bloqueado ("El muro es infranqueable.")

#### Locación 5: Cabaña del Leñador
- **Imagen prompt:** Una cabaña pequeña y decrépita con el techo hundido. Hacha oxidada clavada en un tronco afuera. Ventanas rotas con cortinas rasgadas. Humo sutil sale de la chimenea rota. Ambiente de abandono total.
- **Descripción:** "La cabaña cruje con el viento. La puerta está entreabierta. Dentro, un desorden de años: platos rotos, una mesa volcada, y sobre la repisa de la chimenea... una llave oxidada que brilla con un destello apagado."
- **Objeto:** 🔑 Llave Oxidada
- **Norte →** Loc 10 (Claro de los Cuervos)
- **Sur →** Loc 4 (Muro de Piedra)
- **Este →** Loc 2 (Entrada del Bosque)
- **Oeste →** Bloqueado ("Solo hay bosque impenetrable.")

#### Locación 6: Sendero Bifurcado
- **Imagen prompt:** Un sendero que se divide en tres caminos entre árboles con corteza negra. Marcas de garras en los troncos. Hojas muertas cubren el suelo. Un cráneo de ciervo cuelga de una rama como advertencia.
- **Descripción:** "El camino se parte en tres direcciones. En cada tronco, marcas profundas de garras. Algo territorial vive aquí. Un cráneo de ciervo cuelga como advertencia silenciosa."
- **Norte →** Loc 11 (Arboleda de los Ahorcados)
- **Sur →** Loc 2 (Entrada del Bosque)
- **Este →** Loc 12 (Altar del Hada)
- **Oeste →** Loc 10 (Claro de los Cuervos)

#### Locación 7: Zarzal Espinoso
- **Imagen prompt:** Un muro denso de zarzas negras con espinas del tamaño de dedos. Restos de tela rasgada cuelgan de las espinas. Algunas bayas rojas brillan entre la oscuridad. Una abertura estrecha al fondo.
- **Descripción:** "Las espinas son como dientes negros. Trozos de ropa desgarrada hablan de otros que intentaron pasar. Las bayas rojas parecen gotas de sangre congelada."
- **Norte →** Loc 13 (Túnel de Espinas)
- **Sur →** Bloqueado ("Las espinas se cierran. No hay paso.")
- **Este →** Loc 8 (Puente de Troncos)
- **Oeste →** Loc 2 (Entrada del Bosque)

#### Locación 8: Puente de Troncos
- **Imagen prompt:** Un puente rudimentario de troncos podridos sobre un barranco estrecho y profundo. Cuerdas deshilachadas lo sostienen. Niebla sube del fondo del barranco. Huesos visibles entre las rocas abajo.
- **Descripción:** "Los troncos gimen bajo tus pies. Las cuerdas podrían romperse en cualquier momento. Abajo, entre la niebla, ves formas blancas — huesos de los que cayeron antes."
- **Norte →** Loc 14 (Bosque de Piedra)
- **Sur →** Loc 3 (Arroyo Turbio)
- **Este →** Loc 9 (Pantano de las Luciérnagas)
- **Oeste →** Loc 7 (Zarzal Espinoso)

#### Locación 9: Pantano de las Luciérnagas
- **Imagen prompt:** Un pantano con agua estancada verdosa. Luciérnagas de luz azulada flotan erráticamente. Árboles muertos emergen del agua como esqueletos. Burbujas suben a la superficie con un olor pútrido.
- **Descripción:** "Las luciérnagas danzan con una luz enfermiza. El agua burbujea y huele a muerte. Los árboles muertos te observan con sus ramas como brazos suplicantes. Algo se mueve bajo la superficie."
- **Norte →** Loc 15 (Isla del Pantano)
- **Sur →** Bloqueado ("El pantano se vuelve demasiado profundo.")
- **Este →** Bloqueado ("Agua sin fin.")
- **Oeste →** Loc 3 (Arroyo Turbio)

#### Locación 10: Claro de los Cuervos
- **Imagen prompt:** Un claro circular donde cientos de cuervos descansan en las ramas desnudas. El suelo está cubierto de plumas negras. Un espantapájaros destrozado en el centro con una sonrisa pintada desquiciada.
- **Descripción:** "Los cuervos te miran con ojos inteligentes. Son cientos, quizás miles. El espantapájaros en el centro sonríe con una mueca de locura pintada. Nadie espanta a nadie aquí."
- **Norte →** Loc 16 (Senda de las Plumas)
- **Sur →** Loc 5 (Cabaña del Leñador)
- **Este →** Loc 6 (Sendero Bifurcado)
- **Oeste →** Bloqueado ("Los cuervos graznan furiosamente al oeste. No te dejan pasar.")

#### Locación 11: Arboleda de los Ahorcados
- **Imagen prompt:** Árboles con ramas bajas de las que cuelgan muñecos de paja con sogas. La luz se filtra débilmente creando sombras alargadas. Marcas rituales en los troncos con tiza blanca.
- **Descripción:** "Muñecos de paja cuelgan de cada rama, meciéndose sin viento. Sus rostros de tela están cosidos con hilo negro. Las marcas en los troncos parecen nombres — o maldiciones."
- **Norte →** Loc 17 (Cementerio de Raíces)
- **Sur →** Loc 6 (Sendero Bifurcado)
- **Este →** Loc 18 (Tumba Olvidada)
- **Oeste →** Loc 16 (Senda de las Plumas)

#### Locación 12: Altar del Hada
- **Imagen prompt:** Un altar de piedra blanca erosionada en un círculo de setas luminiscentes. Un hada diminuta de alas rotas descansa sobre el altar. Pétalos marchitos la rodean. Luz etérea tenue.
- **Descripción:** "El hada te mira con ojos enormes y tristes. Sus alas están rotas, iridiscentes pero inútiles. 'Llevo siglos esperando a alguien', susurra. Te ofrece un farol de llama azul. 'Lo necesitarás donde la luz muere.'"
- **Objeto:** 🔦 Farol de Llama Azul
- **NPC:** Hada de alas rotas (da el farol sin pedir nada)
- **Norte →** Loc 18 (Tumba Olvidada)
- **Sur →** Loc 6 (Sendero Bifurcado)
- **Este →** Loc 19 (Hondonada Silenciosa)
- **Oeste →** Loc 11 (Arboleda de los Ahorcados)

#### Locación 13: Túnel de Espinas
- **Imagen prompt:** Un túnel natural formado por zarzas entrelazadas sobre el sendero. Espinas como agujas por todos lados. Luz mínima se filtra. Telarañas con rocío que parece sangre. Estrecho y claustrofóbico.
- **Descripción:** "El túnel te abraza con espinas. Cada paso requiere cuidado. Las telarañas se pegan a tu rostro como dedos fríos. Al fondo, una luz débil promete salida — o trampa."
- **Norte →** Loc 20 (Jardín Salvaje)
- **Sur →** Loc 7 (Zarzal Espinoso)
- **Este →** Loc 14 (Bosque de Piedra)
- **Oeste →** Bloqueado ("Las espinas son impenetrables.")

#### Locación 14: Bosque de Piedra
- **Imagen prompt:** Árboles petrificados en poses retorcidas, como si hubieran sido convertidos en piedra mientras se retorcían de dolor. Musgo gris los cubre. El suelo es de grava y polvo. Silencio absoluto.
- **Descripción:** "Los árboles son de piedra. Cada uno congelado en una expresión de agonía, como si gritaran cuando la maldición los alcanzó. El silencio aquí es tan denso que puedes escuchar tu propia sangre correr."
- **Norte →** Loc 21 (Fuente Petrificada)
- **Sur →** Loc 8 (Puente de Troncos)
- **Este →** Loc 15 (Isla del Pantano)
- **Oeste →** Loc 13 (Túnel de Espinas)

#### Locación 15: Isla del Pantano
- **Imagen prompt:** Una isla pequeña de tierra firme en medio del pantano. Un sauce llorón muerto en el centro. Velas flotantes apagadas en el agua. Marcas de rituales en la tierra. Huesos de animales apilados.
- **Descripción:** "La isla es apenas un respiro de tierra firme. El sauce muerto llora ramas secas. Alguien hizo rituales aquí — las velas, los huesos, los círculos en la tierra. Algo fue invocado. O liberado."
- **Norte →** Loc 22 (Cripta Hundida) — 🔒 Requiere: Llave Oxidada
- **Sur →** Loc 9 (Pantano de las Luciérnagas)
- **Este →** Bloqueado ("Solo agua negra sin fin.")
- **Oeste →** Loc 14 (Bosque de Piedra)

### Zona 2: Bosque Profundo (Loc 16-30)

#### Locación 16: Senda de las Plumas
- **Imagen prompt:** Un sendero cubierto completamente de plumas negras de cuervo. Los árboles tienen nidos enormes en sus copas. Graznidos distantes resuenan. Sombras de alas cruzan la poca luz disponible.
- **Descripción:** "Caminas sobre un manto de plumas negras que amortiguan cada paso. Los nidos en las copas son del tamaño de una persona. ¿Qué clase de aves necesitan nidos tan grandes?"
- **Norte →** Loc 23 (Nido Gigante)
- **Sur →** Loc 10 (Claro de los Cuervos)
- **Este →** Loc 11 (Arboleda de los Ahorcados)
- **Oeste →** Loc 24 (Árbol Hueco)

#### Locación 17: Cementerio de Raíces
- **Imagen prompt:** Un lugar donde raíces enormes emergen de la tierra formando arcos y lápidas naturales. Hongos venenosos de colores brillantes crecen entre las raíces. Huesos asoman entre la tierra removida.
- **Descripción:** "Las raíces han empujado la tierra, revelando lo que estaba enterrado. Huesos antiguos asoman entre la tierra oscura. Los hongos brillan con colores que gritan 'no me toques'."
- **Norte →** Loc 25 (Claro de los Hongos)
- **Sur →** Loc 11 (Arboleda de los Ahorcados)
- **Este →** Loc 26 (Río Silencioso)
- **Oeste →** Loc 23 (Nido Gigante)

#### Locación 18: Tumba Olvidada
- **Imagen prompt:** Una tumba de piedra abierta, la losa movida. Dentro se ve un esqueleto con un amuleto de hueso en el pecho. Flores muertas esparcidas. Inscripciones ilegibles en la piedra. Ambiente de profanación antigua.
- **Descripción:** "La tumba fue abierta hace mucho. El esqueleto dentro parece sonreír. En su pecho, un amuleto de hueso pulido brilla con una luz tenue y enfermiza. Lo tomas — los dientes del esqueleto parecen apretarse."
- **Objeto:** 💀 Amuleto de Hueso
- **Norte →** Loc 26 (Río Silencioso)
- **Sur →** Loc 12 (Altar del Hada)
- **Este →** Loc 27 (Cascada Negra)
- **Oeste →** Loc 11 (Arboleda de los Ahorcados)

#### Locación 19: Hondonada Silenciosa
- **Imagen prompt:** Una depresión natural en el bosque donde el sonido parece no existir. Árboles inclinados hacia adentro como escuchando. Niebla espesa al fondo. Una estatua erosionada de una mujer llorando.
- **Descripción:** "Aquí el sonido muere. Tus pasos no hacen ruido. Tu respiración es muda. La estatua de la mujer llora lágrimas de musgo verde. El silencio es tan profundo que duele."
- **Norte →** Loc 27 (Cascada Negra)
- **Sur →** Bloqueado ("La hondonada termina en un muro de raíces.")
- **Este →** Loc 28 (Círculo de Piedras)
- **Oeste →** Loc 12 (Altar del Hada)

#### Locación 20: Jardín Salvaje
- **Imagen prompt:** Un jardín que alguna vez fue cuidado, ahora devorado por la naturaleza. Rosales negros con espinas enormes. Una fuente rota con agua estancada verde. Estatuas cubiertas de enredaderas con rostros que asoman.
- **Descripción:** "Alguien cultivó belleza aquí alguna vez. Ahora los rosales son negros y las espinas brillan como obsidiana. La fuente escupe agua verde. Las estatuas debajo de las enredaderas tienen expresiones de terror."
- **Norte →** Loc 28 (Círculo de Piedras)
- **Sur →** Loc 13 (Túnel de Espinas)
- **Este →** Loc 21 (Fuente Petrificada)
- **Oeste →** Loc 29 (Ruinas del Santuario)

#### Locación 21: Fuente Petrificada
- **Imagen prompt:** Una fuente ornamental completamente petrificada, el agua congelada en piedra como una cascada inmóvil. Figuras de ninfas en piedra con expresiones de sorpresa. Todo gris y sin vida. Grietas profundas.
- **Descripción:** "El agua se convirtió en piedra mientras caía. Las ninfas que decoraban la fuente tienen los ojos abiertos de par en par, como si vieran venir la maldición. Todo aquí está muerto — hasta el tiempo."
- **Norte →** Loc 29 (Ruinas del Santuario)
- **Sur →** Loc 14 (Bosque de Piedra)
- **Este →** Loc 22 (Cripta Hundida)
- **Oeste →** Loc 20 (Jardín Salvaje)

#### Locación 22: Cripta Hundida
- **Imagen prompt:** Entrada a una cripta de piedra hundida en la tierra, escaleras descendentes cubiertas de limo. Una puerta de hierro oxidado con una cerradura antigua. Velas derretidas en las paredes. Olor a humedad y muerte.
- **Descripción:** "La cripta se hunde en la tierra como si la tragara. La puerta de hierro gime cuando la llave oxidada gira en la cerradura. Dentro, escalones descendentes se pierden en la oscuridad. El aire frío te golpea como un puño."
- **Requiere:** 🔑 Llave Oxidada (para entrar desde Loc 15)
- **Norte →** Loc 30 (Cámara de los Ecos)
- **Sur →** Loc 15 (Isla del Pantano)
- **Este →** Bloqueado ("Muro de piedra sólida.")
- **Oeste →** Loc 21 (Fuente Petrificada)

#### Locación 23: Nido Gigante
- **Imagen prompt:** Un nido enorme construido con ramas, huesos y telas en la copa de un árbol muerto al que se puede subir. Plumas del tamaño de brazos. Cáscaras de huevos rotos con marcas de garras. Vista panorámica del bosque oscuro.
- **Descripción:** "El nido es monstruoso. Las plumas son tan largas como tu brazo. Los huevos rotos muestran garras por dentro — lo que nació aquí se abrió paso con violencia. Desde arriba, el bosque se extiende como un océano negro."
- **Norte →** Loc 25 (Claro de los Hongos)
- **Sur →** Loc 16 (Senda de las Plumas)
- **Este →** Loc 17 (Cementerio de Raíces)
- **Oeste →** Bloqueado ("Solo hay vacío y ramas frágiles.")

#### Locación 24: Árbol Hueco
- **Imagen prompt:** Un árbol gigantesco con un hueco enorme en su tronco, suficiente para entrar. Dentro hay cuerdas de raíces secas enrolladas, telarañas y marcas de uñas en la madera interior. Luz filtrada por grietas.
- **Descripción:** "El árbol está vacío por dentro. Alguien vivió aquí — las marcas de uñas en la madera lo confirman. Entre las raíces secas encuentras una cuerda fuerte, trenzada con raíces. Puede soportar tu peso."
- **Objeto:** 🪢 Cuerda de Raíces
- **Norte →** Loc 30 (Cámara de los Ecos)
- **Sur →** Loc 16 (Senda de las Plumas)
- **Este →** Loc 23 (Nido Gigante)
- **Oeste →** Loc 31 (Cueva Sin Luz)

#### Locación 25: Claro de los Hongos
- **Imagen prompt:** Un claro donde hongos gigantes de colores neón crecen en círculos perfectos. Esporas flotan en el aire como polvo brillante. Un duende pequeño duerme sobre un hongo, roncando. Atmósfera psicodélica pero siniestra.
- **Descripción:** "Los hongos brillan con una luz antinatural. Las esporas flotan y hacen que todo se vea borroso. Un duende diminuto ronca sobre un hongo púrpura. Su sueño parece... obligado. Como si algo lo mantuviera dormido."
- **NPC:** Duende Dormido (se despierta más tarde en el juego con un objeto)
- **Norte →** Loc 32 (Laberinto de Raíces)
- **Sur →** Loc 17 (Cementerio de Raíces)
- **Este →** Loc 33 (Nido del Cuervo)
- **Oeste →** Loc 23 (Nido Gigante)

#### Locación 26: Río Silencioso
- **Imagen prompt:** Un río de aguas negras como tinta que fluye sin hacer sonido. La orilla está cubierta de arena gris. Troncos flotantes pasan lentamente. En la otra orilla, sombras que parecen figuras humanas inmóviles.
- **Descripción:** "El río fluye sin sonido, como si estuviera hecho de seda negra. En la otra orilla, figuras oscuras permanecen inmóviles. ¿Personas? ¿Árboles? No se mueven. Pero juras que una giró la cabeza."
- **Norte →** Loc 33 (Nido del Cuervo)
- **Sur →** Loc 18 (Tumba Olvidada)
- **Este →** Loc 34 (Orilla Opuesta)
- **Oeste →** Loc 17 (Cementerio de Raíces)

#### Locación 27: Cascada Negra
- **Imagen prompt:** Una cascada de agua completamente negra que cae desde un acantilado cubierto de musgo oscuro. La poza abajo es impenetrable. Vapor oscuro sube. Rocas afiladas rodean la poza. Mariposas negras revolotean.
- **Descripción:** "El agua cae negra como petróleo. La poza debajo no muestra fondo — es un ojo abierto mirando al cielo. Las mariposas negras beben del vapor. Todo aquí parece invertido, corrupto."
- **Norte →** Loc 34 (Orilla Opuesta)
- **Sur →** Loc 19 (Hondonada Silenciosa)
- **Este →** Loc 35 (Lago del Espíritu) — 🔒 Requiere: Amuleto de Hueso
- **Oeste →** Loc 18 (Tumba Olvidada)

#### Locación 28: Círculo de Piedras
- **Imagen prompt:** Un círculo de megalitos cubiertos de runas brillantes. El suelo dentro del círculo es de tierra quemada. Marcas de rayos en las piedras. El cielo sobre el círculo siempre está despejado mostrando estrellas incluso de día.
- **Descripción:** "Las piedras zumban con energía. Las runas brillan tenues como brasas moribundas. Dentro del círculo, la tierra está quemada y el cielo muestra estrellas — aunque afuera es de día. Este lugar no pertenece a este mundo."
- **Norte →** Loc 35 (Lago del Espíritu)
- **Sur →** Loc 20 (Jardín Salvaje)
- **Este →** Loc 36 (Colina del Vigía)
- **Oeste →** Loc 19 (Hondonada Silenciosa)

#### Locación 29: Ruinas del Santuario
- **Imagen prompt:** Ruinas de un santuario de piedra blanca manchada de negro. Columnas rotas. Un altar partido por la mitad. En el suelo, un espejo roto reflejando un cielo que no es el de arriba. Vegetación muerta alrededor.
- **Descripción:** "El santuario fue destruido con violencia. Las columnas yacen como huesos rotos. En el suelo, entre los escombros, un espejo roto refleja algo — pero no es tu rostro. Ni tu cielo. Lo tomas con cuidado."
- **Objeto:** 🪞 Espejo Roto
- **Norte →** Loc 36 (Colina del Vigía)
- **Sur →** Loc 20 (Jardín Salvaje)
- **Este →** Loc 21 (Fuente Petrificada)
- **Oeste →** Loc 30 (Cámara de los Ecos)

#### Locación 30: Cámara de los Ecos
- **Imagen prompt:** Una cámara subterránea con paredes de piedra húmeda. Estalactitas gotean rítmicamente. Cada sonido se repite mil veces. Grabados primitivos en las paredes de figuras corriendo de algo enorme. Una salida al norte brilla tenuemente.
- **Descripción:** "Cada gota resuena como un trueno aquí. Los grabados muestran personas huyendo — todas en la misma dirección, de algo que el artista no se atrevió a dibujar. Solo dejó un vacío negro donde debería estar la criatura."
- **Norte →** Loc 37 (Paso Subterráneo)
- **Sur →** Loc 22 (Cripta Hundida)
- **Este →** Loc 29 (Ruinas del Santuario)
- **Oeste →** Loc 24 (Árbol Hueco)

### Zona 3: Corazón Oscuro (Loc 31-50)

#### Locación 31: Cueva Sin Luz
- **Imagen prompt:** Entrada de una cueva completamente oscura. Solo la silueta de la boca de la cueva es visible. Si se tiene el farol: interior de cueva con cristales que reflejan la llama azul, estalactitas afiladas, huesos en el suelo.
- **Descripción (sin farol):** "La oscuridad es total. No puedes ver tu propia mano. Algo respira dentro. No puedes avanzar sin luz."
- **Descripción (con farol):** "La llama azul revela cristales en las paredes que reflejan la luz como un cielo estrellado subterráneo. Los huesos en el suelo crujen bajo tus pies. La cueva se extiende más allá de lo que la luz alcanza."
- **Requiere:** 🔦 Farol de Llama Azul (para avanzar al norte)
- **Norte →** Loc 38 (Claro de la Luna Roja) — 🔒 Requiere Farol
- **Sur →** Bloqueado ("Solo roca.")
- **Este →** Loc 24 (Árbol Hueco)
- **Oeste →** Bloqueado ("La cueva se estrecha demasiado.")

#### Locación 32: Laberinto de Raíces
- **Imagen prompt:** Un laberinto natural formado por raíces enormes que se elevan del suelo como muros. Pasadizos estrechos y oscuros. Ojos brillantes observan entre las raíces. Marcas de tiza en algunas raíces (pistas dejadas por otro viajero).
- **Descripción:** "Las raíces forman paredes vivientes que parecen moverse cuando no las miras. Alguien dejó marcas de tiza — un viajero anterior. ¿Encontró la salida, o las marcas son para perderte?"
- **Norte →** Loc 39 (Centro del Laberinto)
- **Sur →** Loc 25 (Claro de los Hongos)
- **Este →** Loc 34 (Orilla Opuesta)
- **Oeste →** Loc 38 (Claro de la Luna Roja)

#### Locación 33: Nido del Cuervo
- **Imagen prompt:** Un nido enorme en lo alto de un árbol muerto. Un cuervo gigante de ojos rojos observa. En el nido hay objetos brillantes robados: monedas, joyas, y una flauta de hueso tallado. Plumas negras llenan el aire.
- **Descripción:** "El cuervo es del tamaño de un perro. Te mira con ojos rojos como rubíes. Su nido está lleno de tesoros robados — entre ellos, una flauta tallada en hueso que brilla con un aura extraña. El cuervo no se opone a que la tomes."
- **Objeto:** 🎵 Flauta de Hueso
- **Norte →** Loc 39 (Centro del Laberinto)
- **Sur →** Loc 26 (Río Silencioso)
- **Este →** Loc 40 (Precipicio) — 🔒 Requiere: Cuerda de Raíces
- **Oeste →** Loc 25 (Claro de los Hongos)

#### Locación 34: Orilla Opuesta
- **Imagen prompt:** La orilla opuesta del río negro. Los árboles aquí son más retorcidos. Las figuras que se veían desde la otra orilla son troncos tallados con rostros humanos agonizantes. Líquenes rojos como sangre seca.
- **Descripción:** "Las figuras no son personas. Son troncos tallados con rostros de agonía tan realistas que te revuelven el estómago. ¿Quién pasó horas tallando sufrimiento en la madera? ¿Y por qué?"
- **Norte →** Loc 40 (Precipicio)
- **Sur →** Loc 27 (Cascada Negra)
- **Este →** Loc 41 (Sendero de Huesos)
- **Oeste →** Loc 26 (Río Silencioso)

#### Locación 35: Lago del Espíritu
- **Imagen prompt:** Un lago de aguas plateadas perfectamente quietas como un espejo. Un espíritu translúcido flota sobre la superficie — una mujer de cabello largo y ojos vacíos. Árboles de sauce rodean el lago. Luz de luna permanente.
- **Descripción:** "El lago es un espejo perfecto. El espíritu te mira sin ojos. 'Otro buscador', dice con voz de viento. 'El último no llevaba protección. Ahora vive en el fondo.' Tu amuleto de hueso brilla — el espíritu asiente y te deja pasar."
- **Requiere:** 💀 Amuleto de Hueso (sin él, el espíritu te arrastra al fondo — muerte)
- **Norte →** Loc 41 (Sendero de Huesos)
- **Sur →** Loc 28 (Círculo de Piedras)
- **Este →** Loc 42 (Trono Abandonado)
- **Oeste →** Loc 27 (Cascada Negra)

#### Locación 36: Colina del Vigía
- **Imagen prompt:** La cima de una colina pelada con una torre de vigilancia en ruinas. Vista panorámica del bosque oscuro extendiéndose en todas direcciones. Un telescopio roto apunta al horizonte. Viento fuerte. Nubes bajas y grises.
- **Descripción:** "Desde aquí ves la extensión del bosque. Es infinito y negro. A lo lejos, una torre oscura se alza sobre las copas — tu destino. El telescopio roto apunta hacia ella, como si alguien la vigilara. O le temiera."
- **Norte →** Loc 42 (Trono Abandonado)
- **Sur →** Loc 29 (Ruinas del Santuario)
- **Este →** Loc 43 (Desfiladero)
- **Oeste →** Loc 28 (Círculo de Piedras)

#### Locación 37: Paso Subterráneo
- **Imagen prompt:** Un túnel subterráneo con paredes de tierra y raíces. Charcos de agua turbia en el suelo. Ratas con ojos brillantes corren por las paredes. Hongos luminosos dan una luz verdosa enfermiza. Telas de araña densas al frente.
- **Descripción:** "El túnel huele a tierra mojada y podredumbre. Las ratas te observan sin huir — acostumbradas a visitantes. O esperando que caigas. Los hongos en las paredes dan apenas luz suficiente para ver el próximo paso."
- **Norte →** Loc 43 (Desfiladero)
- **Sur →** Loc 30 (Cámara de los Ecos)
- **Este →** Loc 44 (Guarida del Troll)
- **Oeste →** Loc 38 (Claro de la Luna Roja)

#### Locación 38: Claro de la Luna Roja
- **Imagen prompt:** Un claro circular donde la luna siempre es roja y llena, sin importar la hora. Flores negras crecen en espiral. En el centro, un cáliz de piedra contiene un líquido rojo brillante. Sombras danzan sin fuente.
- **Descripción:** "La luna roja tiñe todo de sangre. Las flores negras se abren hacia ella como adorándola. El cáliz en el centro contiene Sangre de Luna — un líquido que pulsa con vida propia. Lo tomas y las sombras dejan de bailar."
- **Objeto:** 🩸 Sangre de Luna
- **Norte →** Loc 44 (Guarida del Troll)
- **Sur →** Loc 31 (Cueva Sin Luz)
- **Este →** Loc 32 (Laberinto de Raíces)
- **Oeste →** Loc 37 (Paso Subterráneo)

#### Locación 39: Centro del Laberinto
- **Imagen prompt:** El centro del laberinto de raíces. Un espacio circular con un pozo seco en el medio. Las raíces aquí forman patrones geométricos imposibles. Un duende viejo con barba de musgo sentado en una raíz, fumando una pipa de hueso.
- **Descripción:** "El duende te mira con ojos astutos. 'Te perdiste, ¿eh?', dice soltando humo verde. 'Todos se pierden. Yo conozco todos los caminos... por un precio.' No pide nada ahora, pero recuerda su oferta."
- **NPC:** Duende del Laberinto (más tarde intercambia información por la Corona de Espinas)
- **Norte →** Loc 45 (Gruta de la Gorgona)
- **Sur →** Loc 32 (Laberinto de Raíces)
- **Este →** Loc 33 (Nido del Cuervo)
- **Oeste →** Loc 44 (Guarida del Troll)

#### Locación 40: Precipicio
- **Imagen prompt:** Un precipicio profundo con niebla al fondo. Al otro lado, el bosque continúa más oscuro. Una cuerda atada a un tronco podría servir para cruzar. Sin la cuerda, solo se ve el vacío. Viento frío sopla desde abajo.
- **Descripción:** "El precipicio se abre como una herida en la tierra. El fondo es invisible entre la niebla. Con la cuerda de raíces, atas un extremo al tronco y desciendes al otro lado. Sin ella, no hay forma de cruzar."
- **Requiere:** 🪢 Cuerda de Raíces
- **Norte →** Loc 46 (Bosque Invertido)
- **Sur →** Loc 34 (Orilla Opuesta)
- **Este →** Loc 41 (Sendero de Huesos)
- **Oeste →** Loc 33 (Nido del Cuervo)

#### Locación 41: Sendero de Huesos
- **Imagen prompt:** Un sendero pavimentado con huesos humanos y animales incrustados en la tierra. Cráneos a los lados como marcadores de camino. Velas dentro de los cráneos que se encienden solas al pasar. Árboles muertos a ambos lados.
- **Descripción:** "Cada paso es sobre huesos. Los cráneos te saludan encendiendo sus velas cuando pasas — una procesión macabra de luz guiándote hacia adelante. ¿Hospitalidad? ¿O te guían a una trampa?"
- **Norte →** Loc 47 (Plaza de los Muertos)
- **Sur →** Loc 35 (Lago del Espíritu)
- **Este →** Loc 46 (Bosque Invertido)
- **Oeste →** Loc 34 (Orilla Opuesta)

#### Locación 42: Trono Abandonado
- **Imagen prompt:** Un trono de madera retorcida y hueso en un claro. Corona de espinas oxidadas descansa en el asiento. Tapices podridos cuelgan de ramas. El suelo tiene un patrón de círculos concéntricos grabado. Todo habla de un rey olvidado.
- **Descripción:** "Alguien reinó aquí en el bosque. El trono es de madera viva y hueso. La corona de espinas en el asiento está manchada de sangre antigua. Los tapices muestran un reino que ya no existe. Tomas la corona — pesa más de lo que debería."
- **Objeto:** 👑 Corona de Espinas
- **Norte →** Loc 47 (Plaza de los Muertos)
- **Sur →** Loc 36 (Colina del Vigía)
- **Este →** Loc 48 (Fuente Seca)
- **Oeste →** Loc 35 (Lago del Espíritu)

#### Locación 43: Desfiladero
- **Imagen prompt:** Un paso estrecho entre dos paredes de roca alta. Goteo constante de agua desde arriba. Musgo resbaladizo en el suelo. Marcas de manos en las paredes, como si personas intentaran escalar desesperadamente. Luz escasa desde arriba.
- **Descripción:** "Las paredes se cierran sobre ti. Las marcas de manos en la roca — decenas de ellas — cuentan historias de desesperación. Alguien intentó escalar. Muchos lo intentaron. Las marcas terminan siempre a la misma altura."
- **Norte →** Loc 48 (Fuente Seca)
- **Sur →** Loc 37 (Paso Subterráneo)
- **Este →** Loc 49 (Puente Colgante)
- **Oeste →** Loc 36 (Colina del Vigía)

#### Locación 44: Guarida del Troll
- **Imagen prompt:** Una cueva amplia y sucia con restos de comida, huesos roídos y pieles apiladas. Un troll enorme pero dormido contra la pared. Su ronquido hace vibrar las piedras. Un pasaje estrecho detrás de él lleva más profundo.
- **Descripción:** "El troll es una montaña de carne gris y verrugas. Ronca como un terremoto. Los huesos a su alrededor no son solo de animales. El pasaje detrás de él es tu única salida norte — pero tendrás que ser silencioso."
- **Norte →** Loc 49 (Puente Colgante) — Se puede pasar siempre (el troll duerme)
- **Sur →** Loc 38 (Claro de la Luna Roja)
- **Este →** Loc 39 (Centro del Laberinto)
- **Oeste →** Loc 37 (Paso Subterráneo)

#### Locación 45: Gruta de la Gorgona
- **Imagen prompt:** Una gruta con estatuas de piedra increíblemente detalladas de personas con expresiones de terror. Una figura con serpientes como cabello en las sombras al fondo. Los ojos de la criatura brillan verdes. Espejos rotos en el suelo.
- **Descripción (sin espejo):** "Las estatuas están vivas en su horror. La Gorgona avanza con sus serpientes siseando. Si la miras, serás piedra como los demás. No puedes avanzar sin algo para reflejar su mirada."
- **Descripción (con espejo):** "Levantas el espejo roto. La Gorgona se ve a sí misma y grita — un sonido que rompe más espejos. Se retira a las sombras, furiosa pero impotente. El camino queda libre."
- **Requiere:** 🪞 Espejo Roto (sin él, muerte — petrificación)
- **Norte →** Loc 50 (Puente del Guardián)
- **Sur →** Loc 39 (Centro del Laberinto)
- **Este →** Loc 46 (Bosque Invertido)
- **Oeste →** Bloqueado ("La Gorgona vigila el oeste.")

#### Locación 46: Bosque Invertido
- **Imagen prompt:** Un área donde los árboles crecen al revés — raíces al cielo, copas enterradas en el suelo. La gravedad parece alterada. Hojas caen hacia arriba. Charcos de agua en el techo (cielo). Todo es surreal y perturbador.
- **Descripción:** "Aquí la realidad se invirtió. Los árboles crecen con las raíces al cielo. Las hojas caen hacia arriba. Tu sombra está sobre ti. Caminas sobre copas de árboles y el cielo está bajo tus pies. La locura tiene forma de bosque."
- **Norte →** Loc 50 (Puente del Guardián)
- **Sur →** Loc 40 (Precipicio)
- **Este →** Loc 47 (Plaza de los Muertos)
- **Oeste →** Loc 45 (Gruta de la Gorgona)

#### Locación 47: Plaza de los Muertos
- **Imagen prompt:** Una plaza empedrada en medio del bosque con bancos de piedra y farolas oxidadas. Figuras espectrales translúcidas sentadas en los bancos, leyendo periódicos inexistentes, paseando perros invisibles. Una fuente con agua negra en el centro.
- **Descripción:** "Los fantasmas viven su rutina eterna. Se sientan, caminan, conversan sin sonido. No te ven — o fingen no verte. Es un pueblo fantasma atrapado en un momento que se repite para siempre."
- **Norte →** Loc 51 (Mercado Espectral)
- **Sur →** Loc 41 (Sendero de Huesos)
- **Este →** Loc 42 (Trono Abandonado)
- **Oeste →** Loc 46 (Bosque Invertido)

#### Locación 48: Fuente Seca
- **Imagen prompt:** Una fuente ornamental sin agua. En el fondo seco hay un ojo de cristal grande como un puño que brilla con luz propia. Alrededor, palomas muertas petrificadas en poses de beber. Enredaderas secas envuelven la estructura.
- **Descripción:** "La fuente lleva siglos seca. Las palomas murieron esperando agua que nunca volvió. En el fondo agrietado, un ojo de cristal te mira con una pupila que se dilata. Lo tomas — y por un instante, ves caminos que antes no existían."
- **Objeto:** 👁️ Ojo de Cristal
- **Norte →** Loc 51 (Mercado Espectral)
- **Sur →** Loc 43 (Desfiladero)
- **Este →** Loc 52 (Campanario Roto)
- **Oeste →** Loc 42 (Trono Abandonado)

#### Locación 49: Puente Colgante
- **Imagen prompt:** Un puente colgante largo y frágil sobre un abismo de niebla. Tablas faltantes. Cuerdas deshilachadas. En el medio del puente, un espantapájaros clavado a un poste con un cartel: "ÚLTIMO AVISO". Viento violento.
- **Descripción:** "El puente se balancea con cada ráfaga. Faltan tablas — cada paso es un acto de fe. El espantapájaros en el centro te mira con su cara de arpillera cosida. El cartel dice 'ÚLTIMO AVISO'. ¿Aviso de qué?"
- **Norte →** Loc 52 (Campanario Roto)
- **Sur →** Loc 43 (Desfiladero)
- **Este →** Loc 50 (Puente del Guardián)
- **Oeste →** Loc 44 (Guarida del Troll)

#### Locación 50: Puente del Guardián
- **Imagen prompt:** Un puente de piedra antiguo y robusto sobre un río de lava fría (roca negra con grietas brillantes). Un guardián — una armadura vacía animada con ojos de fuego — bloquea el paso. Runas en el suelo del puente.
- **Descripción (sin flauta):** "El Guardián levanta su espada flamígera. Es una armadura sin cuerpo, sostenida por una voluntad antigua. No puedes pasar por la fuerza."
- **Descripción (con flauta):** "Tocas la flauta de hueso. La melodía es triste, antigua. El Guardián baja la espada lentamente, como recordando algo. Se hace a un lado y la luz de sus ojos se apaga un momento — como lágrimas de fuego."
- **Requiere:** 🎵 Flauta de Hueso
- **Norte →** Loc 53 (Nido en la Torre)
- **Sur →** Loc 45 (Gruta de la Gorgona)
- **Este →** Loc 49 (Puente Colgante)
- **Oeste →** Loc 46 (Bosque Invertido)

### Zona 4: Tierras Malditas (Loc 51-70)

#### Locación 51: Mercado Espectral
- **Imagen prompt:** Puestos de mercado fantasmales con productos etéreos. Fantasmas vendiendo y comprando mercancía invisible. Farolas con fuego azul. Carteles con precios en monedas que no existen. Un puesto tiene objetos reales entre los irreales.
- **Descripción:** "Los fantasmas comercian con el aire. Sus monedas no existen, sus productos se desvanecen al tocarlos. Pero un puesto tiene algo real — un mapa dibujado en cuero viejo que muestra senderos que el Ojo de Cristal podría revelar."
- **Norte →** Loc 55 (Puerta de Sangre)
- **Sur →** Loc 47 (Plaza de los Muertos)
- **Este →** Loc 48 (Fuente Seca)
- **Oeste →** Loc 53 (Nido en la Torre)

#### Locación 52: Campanario Roto
- **Imagen prompt:** Una torre de iglesia en ruinas con la campana colgando de un hilo. Sin iglesia debajo — solo la torre emerge del bosque. Murciélagos cuelgan del interior. La campana tiene inscripciones. Escaleras de caracol rotas.
- **Descripción:** "La torre no tiene iglesia. Se alza sola como un dedo acusador apuntando al cielo. La campana pende de un hilo oxidado. Si cae, el sonido despertaría todo lo que duerme en este bosque. Subes con cuidado."
- **Norte →** Loc 55 (Puerta de Sangre)
- **Sur →** Loc 49 (Puente Colgante)
- **Este →** Loc 56 (Jardín de Cenizas)
- **Oeste →** Loc 48 (Fuente Seca)

#### Locación 53: Nido en la Torre
- **Imagen prompt:** Lo alto de una torre en ruinas convertida en nido por un búho negro gigante. Plumas negras como la noche. El búho tiene ojos dorados sabios. Una pluma especialmente grande y brillante destaca entre las demás.
- **Descripción:** "El búho negro es antiguo — sus ojos dorados contienen siglos de conocimiento. Te observa sin hostilidad. Entre sus plumas caídas, una destaca: más larga, más oscura, vibrando con poder. El búho inclina la cabeza — permiso concedido."
- **Objeto:** 🪶 Pluma del Búho Negro
- **Norte →** Loc 56 (Jardín de Cenizas)
- **Sur →** Loc 50 (Puente del Guardián)
- **Este →** Loc 51 (Mercado Espectral)
- **Oeste →** Loc 54 (Pantano Profundo)

#### Locación 54: Pantano Profundo
- **Imagen prompt:** Pantano más profundo y oscuro que el anterior. Árboles sumergidos hasta la mitad. Gases de pantano forman figuras humanoides que se disipan. Un camino de piedras hundidas permite el paso. Silencio mortal.
- **Descripción:** "El agua te llega a las rodillas incluso en las piedras. Los gases forman siluetas que te llaman con gestos. No son fantasmas — son solo gas. ¿Verdad? Las piedras hundidas son el único camino seguro."
- **Norte →** Loc 57 (Isla de los Sauces)
- **Sur →** Bloqueado ("El agua es demasiado profunda.")
- **Este →** Loc 53 (Nido en la Torre)
- **Oeste →** Loc 56 (Jardín de Cenizas)

#### Locación 55: Puerta de Sangre
- **Imagen prompt:** Una puerta enorme de piedra negra con venas rojas pulsantes como un corazón. Sin cerradura visible — solo una depresión en forma de gota. Los árboles alrededor están muertos y retorcidos hacia la puerta, como atraídos por ella.
- **Descripción (sin sangre de luna):** "La puerta pulsa como algo vivo. La depresión en forma de gota pide algo. Los árboles se inclinan hacia ella como adorándola. No hay forma de abrirla sin lo que pide."
- **Descripción (con sangre de luna):** "Viertes la Sangre de Luna en la depresión. La puerta suspira — un sonido orgánico y perturbador. Las venas rojas brillan intensamente y la piedra se abre como una herida. Lo que hay más allá es más oscuro que la noche."
- **Requiere:** 🩸 Sangre de Luna
- **Norte →** Loc 58 (Jardín Putrefacto)
- **Sur →** Loc 51 (Mercado Espectral)
- **Este →** Loc 52 (Campanario Roto)
- **Oeste →** Loc 57 (Isla de los Sauces)

#### Locación 56: Jardín de Cenizas
- **Imagen prompt:** Un jardín donde todo es de ceniza gris. Flores de ceniza, arbustos de ceniza, un banco de ceniza. Al tocarlo, se desintegra. Una lluvia de ceniza cae suavemente. Huellas de alguien que caminó recientemente (no de ceniza).
- **Descripción:** "Todo es ceniza aquí. Un jardín incinerado que se niega a desaparecer. Las flores se deshacen al roce. La ceniza cae como nieve gris. Pero hay huellas frescas — alguien estuvo aquí hace poco. Alguien de carne y hueso."
- **Norte →** Loc 59 (Escalera en Espiral)
- **Sur →** Loc 52 (Campanario Roto)
- **Este →** Loc 54 (Pantano Profundo)
- **Oeste →** Loc 53 (Nido en la Torre)

#### Locación 57: Isla de los Sauces
- **Imagen prompt:** Una isla rodeada de pantano con tres sauces llorones enormes cuyas ramas tocan el agua negra. Luces verdes entre las ramas. Un hada herida descansa contra un tronco, con alas marchitas y piel grisácea.
- **Descripción:** "Los sauces lloran en el agua negra. Un hada agoniza contra el tronco — su piel es gris, sus alas se marchitan. 'La raíz de mandrágora... solo eso me salvaría', murmura con voz débil. Necesitas encontrarla."
- **NPC:** Hada Herida (necesita Raíz de Mandrágora — dará la Llave de Plata a cambio)
- **Norte →** Loc 59 (Escalera en Espiral)
- **Sur →** Loc 54 (Pantano Profundo)
- **Este →** Loc 55 (Puerta de Sangre)
- **Oeste →** Loc 60 (Corte del Rey Duende)

#### Locación 58: Jardín Putrefacto
- **Imagen prompt:** Un jardín donde las plantas crecen retorcidas y enfermas. Frutas podridas en las ramas. En el centro, una planta de mandrágora con raíz visible que tiene forma humana. El suelo es fértil pero apesta a descomposición.
- **Descripción:** "La vida aquí es una parodia enferma. Las frutas supuran. Las flores tienen dientes. Pero en el centro, la mandrágora espera — su raíz tiene forma de persona gritando. La arrancas y juras que escuchas un alarido distante."
- **Objeto:** 🌿 Raíz de Mandrágora
- **Norte →** Loc 61 (Bosque de Telarañas)
- **Sur →** Loc 55 (Puerta de Sangre)
- **Este →** Loc 62 (Lago de Ácido)
- **Oeste →** Loc 59 (Escalera en Espiral)

#### Locación 59: Escalera en Espiral
- **Imagen prompt:** Una escalera de piedra que emerge del suelo del bosque y sube en espiral hacia ninguna parte — termina en el aire. Enredaderas la envuelven. Desde arriba se ve un patrón en el suelo del bosque: un pentagrama natural formado por senderos.
- **Descripción:** "La escalera sube y sube y termina en nada. Pero desde arriba ves lo que no se ve abajo — los senderos del bosque forman un pentagrama. Estás dentro de un ritual del tamaño de kilómetros. Todo el bosque es el conjuro."
- **Norte →** Loc 61 (Bosque de Telarañas)
- **Sur →** Loc 56 (Jardín de Cenizas)
- **Este →** Loc 58 (Jardín Putrefacto)
- **Oeste →** Loc 57 (Isla de los Sauces)

#### Locación 60: Corte del Rey Duende
- **Imagen prompt:** Una sala del trono subterránea iluminada por cristales. Un duende enorme con corona de oro oxidado sentado en un trono de raíces. Duendes menores sirviéndole frutas podridas. Tesoros apilados pero todos oxidados o rotos.
- **Descripción (sin corona):** "El Rey Duende te mira con desprecio. '¿Qué eres tú para presentarte sin tributo ante un rey?' Sus guardias levantan lanzas de hueso. No te dejará pasar sin prueba de respeto."
- **Descripción (con corona):** "Presentas la Corona de Espinas. El Rey Duende se levanta — sus ojos brillan. 'La corona del Rey Antiguo... Entonces eres digno.' Se inclina y te abre el camino. 'Ve. Pero lo que hay más allá no me obedece ni a mí.'"
- **Requiere:** 👑 Corona de Espinas (para pasar al norte)
- **Norte →** Loc 63 (Cofre del Duende) — 🔒 Requiere Corona de Espinas
- **Sur →** Bloqueado ("Los duendes no te dejan retroceder por el sur.")
- **Este →** Loc 57 (Isla de los Sauces)
- **Oeste →** Loc 64 (Catacumbas)

#### Locación 61: Bosque de Telarañas
- **Imagen prompt:** Árboles completamente envueltos en telarañas gruesas y blancas. Capullos del tamaño de personas cuelgan de las ramas. Arañas pequeñas corren por las telas. Una araña gigante observa desde lo alto pero no ataca. Luz difusa filtrada por las telas.
- **Descripción:** "Las telarañas son tan gruesas que parecen tela. Los capullos en las ramas tienen forma humana. La araña gigante te observa — no con hambre, sino con curiosidad. No ataca. Pero te vigila cada segundo."
- **Norte →** Loc 64 (Catacumbas)
- **Sur →** Loc 58 (Jardín Putrefacto)
- **Este →** Loc 65 (Camino Oculto) — 🔒 Requiere: Ojo de Cristal
- **Oeste →** Loc 59 (Escalera en Espiral)

#### Locación 62: Lago de Ácido
- **Imagen prompt:** Un lago de líquido verde burbujeante que disuelve todo lo que toca. Huesos a medio disolver en la orilla. Vapor tóxico sube. Un puente de huesos gigantes (de alguna criatura enorme) cruza el lago.
- **Descripción:** "El líquido verde burbujea y disuelve. Los huesos en la orilla se deshacen lentamente. El único cruce es un puente hecho de los huesos de algo enorme — ¿un dragón? ¿Un dios? Los huesos aguantan el ácido. Tú también lo harás si no caes."
- **Norte →** Loc 65 (Camino Oculto)
- **Sur →** Loc 58 (Jardín Putrefacto)
- **Este →** Loc 66 (Torre de los Susurros)
- **Oeste →** Bloqueado ("El ácido no permite paso.")

#### Locación 63: Cofre del Duende
- **Imagen prompt:** Una cámara pequeña y brillante detrás de la corte del Rey Duende. Un cofre de madera oscura con incrustaciones de plata. Al abrirlo, brilla una llave de plata pura sobre un cojín de terciopelo púrpura desgastado. Guardias duendes a los lados.
- **Descripción:** "El cofre se abre con un clic satisfactorio. Dentro, sobre terciopelo raído, descansa una llave de plata que brilla con luz propia. Los guardias duendes asienten — es tuya. Te la ganaste con la corona."
- **Objeto:** 🔑 Llave de Plata
- **Norte →** Loc 66 (Torre de los Susurros)
- **Sur →** Loc 60 (Corte del Rey Duende)
- **Este →** Loc 64 (Catacumbas)
- **Oeste →** Loc 67 (Bosque Quemado)

#### Locación 64: Catacumbas
- **Imagen prompt:** Túneles estrechos con nichos llenos de cráneos y huesos ordenados en patrones decorativos. Velas encendidas sin razón aparente. Inscripciones en latín en las paredes. Eco de pasos que no son los tuyos.
- **Descripción:** "Los huesos están ordenados con cuidado artístico — cráneos formando flores, fémures en espiral. Alguien pasó décadas aquí abajo decorando con la muerte. Las velas están encendidas. ¿Quién las enciende?"
- **Norte →** Loc 67 (Bosque Quemado)
- **Sur →** Loc 61 (Bosque de Telarañas)
- **Este →** Loc 63 (Cofre del Duende)
- **Oeste →** Loc 60 (Corte del Rey Duende)

#### Locación 65: Camino Oculto
- **Imagen prompt:** Un sendero que solo es visible con luz especial — sin ella, parece un muro de árboles. Con el Ojo de Cristal: un camino brillante entre los árboles, marcado con runas luminosas en el suelo. Ambiente místico y secreto.
- **Descripción:** "El Ojo de Cristal te muestra lo que estaba oculto. Un camino brillante se materializa entre árboles que antes parecían impenetrables. Runas en el suelo te guían — alguien dejó este sendero para quien pudiera verlo."
- **Requiere:** 👁️ Ojo de Cristal
- **Norte →** Loc 68 (Altar Oscuro)
- **Sur →** Loc 62 (Lago de Ácido)
- **Este →** Loc 66 (Torre de los Susurros)
- **Oeste →** Loc 61 (Bosque de Telarañas)

#### Locación 66: Torre de los Susurros
- **Imagen prompt:** Una torre estrecha y alta cubierta de musgo. Ventanas sin vidrio por donde sale un susurro constante. Sombras se mueven dentro. La puerta está abierta pero dentro solo hay escaleras que suben en espiral y voces sin cuerpo.
- **Descripción:** "Los susurros te dicen cosas. Tu nombre. Secretos que nadie debería saber. Promesas. Mentiras. Si escuchas demasiado, olvidarás por qué viniste. Sigue adelante. No les hagas caso."
- **Norte →** Loc 69 (Valle de Cristal)
- **Sur →** Loc 62 (Lago de Ácido)
- **Este →** Loc 63 (Cofre del Duende)
- **Oeste →** Loc 65 (Camino Oculto)

#### Locación 67: Bosque Quemado
- **Imagen prompt:** Árboles carbonizados como esqueletos negros. El suelo es ceniza. Nada vive aquí. El cielo es visible por primera vez — gris y opresivo. Restos de una aldea quemada entre los troncos. Silencio total.
- **Descripción:** "El fuego consumió todo hace mucho. Los árboles son carbón. Entre ellos, los restos de una aldea — muros ennegrecidos, una campana derretida, un pozo colapsado. ¿Quién vivía aquí? ¿Quién los quemó?"
- **Norte →** Loc 69 (Valle de Cristal)
- **Sur →** Loc 64 (Catacumbas)
- **Este →** Loc 63 (Cofre del Duende)
- **Oeste →** Loc 70 (Encrucijada Maldita)

#### Locación 68: Altar Oscuro
- **Imagen prompt:** Un altar de obsidiana negra en un claro sin árboles. Sobre el altar, un manto hecho de sombras materializadas que se mueve solo. Velas negras con llama negra (que absorbe luz). Símbolos oscuros tallados en el suelo.
- **Descripción:** "El altar absorbe la luz. Las velas negras queman oscuridad en vez de luz. El manto sobre el altar está hecho de sombras cosidas — se mueve, respira. Lo tomas y la oscuridad te abraza como un viejo amigo. Te vuelves menos visible."
- **Objeto:** 🧥 Manto de Sombras
- **Norte →** Loc 70 (Encrucijada Maldita)
- **Sur →** Loc 65 (Camino Oculto)
- **Este →** Loc 69 (Valle de Cristal)
- **Oeste →** Loc 71 (Pantano Final)

#### Locación 69: Valle de Cristal
- **Imagen prompt:** Un valle donde todo está cubierto de cristal — árboles de cristal, suelo de cristal, incluso animales congelados en cristal. Todo refleja y refracta la poca luz creando arcoíris oscuros. Es hermoso y aterrador. Frágil.
- **Descripción:** "La belleza aquí es letal. Todo es cristal — delicado, afilado, reflejando un millón de versiones de ti. Los animales atrapados en cristal tienen expresiones de paz. ¿Se cristalizaron felices? ¿O el cristal borró su sufrimiento?"
- **Norte →** Loc 72 (Sello del Viento) — 🔒 Requiere: Pluma del Búho Negro
- **Sur →** Loc 66 (Torre de los Susurros)
- **Este →** Loc 67 (Bosque Quemado)
- **Oeste →** Loc 68 (Altar Oscuro)

#### Locación 70: Encrucijada Maldita
- **Imagen prompt:** Un cruce de cuatro caminos con un poste señalizador retorcido. Las señales apuntan en direcciones imposibles. Un gato negro con tres ojos sentado en el poste. Cadáveres de viajeros perdidos en las cunetas. Niebla espesa.
- **Descripción:** "Las señales mienten — lo sabes porque una apunta al cielo y dice 'sur'. El gato de tres ojos te mira desde el poste. 'Todos se pierden aquí', dice sin mover la boca. 'Pero tú hueles a destino.' Los cadáveres en las cunetas eligieron mal."
- **NPC:** Gato de Tres Ojos (da pistas crípticas sobre el camino correcto)
- **Norte →** Loc 72 (Sello del Viento)
- **Sur →** Loc 67 (Bosque Quemado)
- **Este →** Loc 68 (Altar Oscuro)
- **Oeste →** Loc 71 (Pantano Final)

### Zona 5: Dominios de la Sombra (Loc 71-85)

#### Locación 71: Pantano Final
- **Imagen prompt:** El último pantano — más profundo, más oscuro. Árboles muertos con caras talladas que lloran savia negra. Fuegos fatuos rojos (no azules) guían hacia la perdición. Un camino de lápidas hundidas sirve de puente.
- **Descripción:** "Los fuegos rojos te llaman en la dirección equivocada. Las caras en los árboles lloran savia negra como petróleo. Las lápidas hundidas son tu camino — pisas sobre los muertos para avanzar. Cada una tiene un nombre. Uno se parece al tuyo."
- **Norte →** Loc 73 (Campo de Batalla Antiguo)
- **Sur →** Loc 68 (Altar Oscuro)
- **Este →** Loc 70 (Encrucijada Maldita)
- **Oeste →** Loc 74 (Ciénaga de los Olvidados)

#### Locación 72: Sello del Viento
- **Imagen prompt:** Una puerta circular de piedra con un sello aéreo — grabados de vientos y plumas. El viento aquí es un muro sólido que impide el paso. Hojas y escombros vuelan en círculo perpetuo alrededor del sello.
- **Descripción (sin pluma):** "El viento es un muro invisible. No puedes avanzar — te empuja hacia atrás con fuerza brutal. El sello en la puerta muestra plumas y espirales. Necesitas algo del cielo para romperlo."
- **Descripción (con pluma):** "La pluma del búho negro se levanta de tu mano y vuela hacia el sello. El viento la acepta — los grabados brillan y el muro de aire se disipa como un suspiro. El camino se abre en silencio."
- **Requiere:** 🪶 Pluma del Búho Negro
- **Norte →** Loc 75 (Refugio del Hada)
- **Sur →** Loc 69 (Valle de Cristal)
- **Este →** Loc 73 (Campo de Batalla Antiguo)
- **Oeste →** Loc 70 (Encrucijada Maldita)

#### Locación 73: Campo de Batalla Antiguo
- **Imagen prompt:** Un campo cubierto de armaduras oxidadas, espadas rotas y estandartes raídos. Esqueletos en poses de combate. La tierra está permanentemente roja. Cuervos picotean lo que queda. Un caballo esquelético pasta hierba inexistente.
- **Descripción:** "La batalla terminó hace siglos pero nadie limpió. Los esqueletos siguen luchando — congelados en su último momento. Los estandartes muestran un sol negro. El ejército que portaba ese símbolo... perdió. Todos perdieron."
- **Norte →** Loc 76 (Murallas Derruidas)
- **Sur →** Loc 71 (Pantano Final)
- **Este →** Loc 75 (Refugio del Hada)
- **Oeste →** Loc 72 (Sello del Viento)

#### Locación 74: Ciénaga de los Olvidados
- **Imagen prompt:** Una ciénaga donde rostros humanos emergen del agua turbia — no muertos, no vivos, solo olvidados. Sus bocas abiertas en un grito silencioso. Manos que no agarran. Un barco podrido a medio hundir.
- **Descripción:** "Los rostros en el agua no son fantasmas — son recuerdos olvidados que tomaron forma. Te miran con ojos vacíos, pidiendo que los recuerdes. Pero no conoces a ninguno. El barco se hunde lentamente, llevándose nombres que nadie dirá."
- **Norte →** Loc 76 (Murallas Derruidas)
- **Sur →** Bloqueado ("La ciénaga es impasable al sur.")
- **Este →** Loc 71 (Pantano Final)
- **Oeste →** Loc 77 (Puerta de Hierro)

#### Locación 75: Refugio del Hada
- **Imagen prompt:** Un refugio natural formado por raíces luminiscentes entrelazadas. Dentro, el hada herida (si le diste la mandrágora) está recuperada — alas brillantes, piel dorada. Frascos de pociones en estantes de corteza. Luz cálida y segura.
- **Descripción (con raíz de mandrágora):** "El hada te esperaba. Sus alas brillan restauradas, su piel es dorada. 'Me salvaste', dice. 'Toma esto — la Llave de Plata abrirá la reja que protege la torre. Ve, rescátala.' Sus ojos se llenan de esperanza."
- **Descripción (sin raíz):** "El refugio está vacío. El hada no está. Necesitas encontrar la Raíz de Mandrágora para curarla y obtener su ayuda."
- **Intercambio:** 🌿 Raíz de Mandrágora → 🔑 Llave de Plata (alternativa al cofre del duende)
- **Norte →** Loc 77 (Puerta de Hierro)
- **Sur →** Loc 72 (Sello del Viento)
- **Este →** Loc 73 (Campo de Batalla Antiguo)
- **Oeste →** Loc 78 (Forja Abandonada)

#### Locación 76: Murallas Derruidas
- **Imagen prompt:** Restos de una muralla enorme — piedras del tamaño de casas caídas. Torres de vigilancia colapsadas. Enredaderas gruesas como serpientes cubren todo. Un paso entre dos torres caídas permite avanzar.
- **Descripción:** "Estas murallas protegían algo. O encerraban algo. Las piedras son demasiado grandes para humanos normales — gigantes las construyeron. Ahora solo son ruinas. Lo que protegían — o contenían — está libre."
- **Norte →** Loc 79 (Patio de Armas)
- **Sur →** Loc 73 (Campo de Batalla Antiguo)
- **Este →** Loc 77 (Puerta de Hierro)
- **Oeste →** Loc 74 (Ciénaga de los Olvidados)

#### Locación 77: Puerta de Hierro
- **Imagen prompt:** Una puerta masiva de hierro negro con cadenas gruesas y candados enormes. Marcas de golpes en la superficie — alguien intentó abrirla desde dentro. Sangre seca en los bordes. Un ojo de buey muestra solo oscuridad al otro lado.
- **Descripción:** "La puerta fue golpeada desde dentro. Las marcas de puños — ¿o garras? — en el hierro hablan de desesperación. La sangre seca en los bordes es vieja. Lo que estaba detrás ya salió. La puerta ahora está abierta."
- **Norte →** Loc 79 (Patio de Armas)
- **Sur →** Loc 75 (Refugio del Hada)
- **Este →** Loc 76 (Murallas Derruidas)
- **Oeste →** Loc 78 (Forja Abandonada)

#### Locación 78: Forja Abandonada
- **Imagen prompt:** Una forja antigua con un yunque de obsidiana. El fuego se apagó hace mucho pero el yunque aún brilla con calor interno. Herramientas de herrero oxidadas. En un soporte especial, una espada de cristal transparente brilla con luz interna. Chispas fantasmales.
- **Descripción:** "El herrero se fue pero su obra maestra quedó. La espada de cristal parece imposible — transparente, frágil en apariencia, pero al tocarla descubres que es más dura que el acero. Fue forjada para romper algo específico. Algo que encadena."
- **Objeto:** ⚔️ Espada de Cristal
- **Norte →** Loc 80 (Salón del Trono Oscuro)
- **Sur →** Loc 75 (Refugio del Hada)
- **Este →** Loc 77 (Puerta de Hierro)
- **Oeste →** Loc 81 (Jardín de Estatuas)

#### Locación 79: Patio de Armas
- **Imagen prompt:** Un patio de un castillo en ruinas con maniquíes de entrenamiento destrozados. Armas oxidadas en estantes. Un pozo en el centro con cadenas que bajan a la oscuridad. Estandartes del sol negro cuelgan raídos. Cuervos por todas partes.
- **Descripción:** "El castillo entrenaba soldados aquí. Los maniquíes están cortados, quemados, destruidos de mil formas. Las armas en los estantes son inútiles — oxidadas hasta el alma. El pozo central baja muy profundo. Las cadenas vibran como si algo tirara desde abajo."
- **Norte →** Loc 80 (Salón del Trono Oscuro)
- **Sur →** Loc 76 (Murallas Derruidas)
- **Este →** Loc 77 (Puerta de Hierro)
- **Oeste →** Loc 82 (Pozo de los Lamentos)

#### Locación 80: Salón del Trono Oscuro
- **Imagen prompt:** Un salón majestuoso en ruinas. Candelabros caídos, alfombra roja podrida, un trono de hierro y hueso al fondo. Ventanas con vitrales rotos que muestran escenas de conquista. Sombras que se mueven sin fuente de luz.
- **Descripción:** "Este fue el corazón del poder. El trono de hierro y hueso domina la sala — vacío pero no inofensivo. Las sombras aquí tienen voluntad propia. Los vitrales cuentan una historia de un rey que vendió su alma por un bosque eterno."
- **Norte →** Loc 83 (Pasillo de los Espejos)
- **Sur →** Loc 79 (Patio de Armas)
- **Este →** Loc 78 (Forja Abandonada)
- **Oeste →** Loc 82 (Pozo de los Lamentos)

#### Locación 81: Jardín de Estatuas
- **Imagen prompt:** Un jardín con estatuas de personas en poses cotidianas — una madre con un niño, un hombre leyendo, una pareja abrazándose. Todas de piedra gris. Sus rostros muestran un segundo de sorpresa congelado. Rosales negros entre las estatuas.
- **Descripción:** "Estas no son estatuas — son personas. Lo sabes por los detalles: el botón a medio abrir, la página del libro doblada, el cabello al viento congelado. La maldición los atrapó en un instante. Algunos sonríen. No sabían lo que venía."
- **Norte →** Loc 83 (Pasillo de los Espejos)
- **Sur →** Bloqueado ("Un muro de rosales negros impide el paso.")
- **Este →** Loc 78 (Forja Abandonada)
- **Oeste →** Loc 84 (Biblioteca Quemada)

#### Locación 82: Pozo de los Lamentos
- **Imagen prompt:** Un pozo de piedra negra del que emanan llantos y lamentos. Al mirar adentro, se ven reflejos de rostros llorando en el agua oscura. Un frasco vacío cuelga de una cadena junto al brocal. La piedra está mojada de lágrimas.
- **Descripción:** "El pozo llora. Literalmente — lágrimas caen por sus paredes internas. Los rostros en el agua te miran suplicantes. El frasco junto al brocal es la invitación. Lo bajas y lo llenas de lágrimas. El llanto se calma un momento — agradecido de ser escuchado."
- **Objeto:** 💧 Frasco de Lágrimas
- **Norte →** Loc 84 (Biblioteca Quemada)
- **Sur →** Loc 79 (Patio de Armas)
- **Este →** Loc 80 (Salón del Trono Oscuro)
- **Oeste →** Loc 85 (Reja de la Torre)

#### Locación 83: Pasillo de los Espejos
- **Imagen prompt:** Un pasillo largo con espejos a ambos lados. Cada espejo muestra un reflejo diferente de ti — uno viejo, uno niño, uno muerto, uno como sombra. Al fondo del pasillo, tu reflejo real te espera de pie, fuera del espejo.
- **Descripción:** "Los espejos mienten. En uno eres anciano. En otro, eres huesos. En otro, no existes. Al fondo del pasillo, tu reflejo verdadero está fuera del espejo, mirándote. Cuando llegas a él — se desvanece. Eras tú todo el tiempo."
- **Norte →** Loc 85 (Reja de la Torre)
- **Sur →** Loc 80 (Salón del Trono Oscuro)
- **Este →** Loc 81 (Jardín de Estatuas)
- **Oeste →** Loc 84 (Biblioteca Quemada)

#### Locación 84: Biblioteca Quemada
- **Imagen prompt:** Una biblioteca enorme con estantes carbonizados. Algunos libros sobrevivieron — sus páginas brillan con texto dorado. Ceniza flota en el aire como nieve. Una escalera al segundo piso está intacta. Olor a papel quemado permanente.
- **Descripción:** "Miles de libros murieron aquí. Pero algunos resistieron — protegidos por magia o terquedad. Sus páginas brillan con texto que cambia mientras lo miras. Cuentan la historia del Señor de las Sombras. De cómo era humano. De cómo dejó de serlo."
- **Norte →** Loc 85 (Reja de la Torre)
- **Sur →** Loc 82 (Pozo de los Lamentos)
- **Este →** Loc 81 (Jardín de Estatuas)
- **Oeste →** Loc 83 (Pasillo de los Espejos)

#### Locación 85: Reja de la Torre
- **Imagen prompt:** Una reja enorme de hierro y plata que bloquea la entrada a una torre alta y oscura. Cerradura ornamental de plata. Más allá de la reja, escaleras ascienden en espiral. Gárgolas de piedra flanquean la entrada. Relámpagos sin trueno iluminan la torre.
- **Descripción (sin llave):** "La reja no cede. La cerradura de plata brilla burlándose de tus intentos. Las gárgolas te miran con sonrisas pétreas. La torre se alza imposible detrás — la princesa está arriba. Tan cerca y tan lejos."
- **Descripción (con llave):** "La Llave de Plata encaja perfectamente. La reja se abre con un sonido musical — como una nota de arpa. Las gárgolas cierran los ojos, como dándote la bienvenida. Las escaleras suben hacia tu destino."
- **Requiere:** 🔑 Llave de Plata
- **Norte →** Loc 86 (Escaleras de la Torre) — 🔒 Requiere Llave de Plata
- **Sur →** Loc 83 (Pasillo de los Espejos)
- **Este →** Loc 84 (Biblioteca Quemada)
- **Oeste →** Loc 82 (Pozo de los Lamentos)

### Zona 6: La Torre Oscura (Loc 86-100)

#### Locación 86: Escaleras de la Torre
- **Imagen prompt:** Escaleras de piedra en espiral ascendente dentro de la torre. Antorchas con fuego púrpura en las paredes. Cadenas cuelgan del techo. Grabados de prisioneros en las paredes hechos con uñas. El viento aúlla desde arriba.
- **Descripción:** "Las escaleras suben en espiral eterna. Los grabados en la piedra fueron hechos con uñas — mensajes de prisioneros: 'No subas', 'Él te espera', 'La princesa llora'. Las antorchas púrpuras iluminan solo el siguiente escalón. Nunca más allá."
- **Norte →** Loc 87 (Sala de las Cadenas)
- **Sur →** Loc 85 (Reja de la Torre)
- **Este →** Bloqueado ("Solo muros de piedra.")
- **Oeste →** Bloqueado ("Solo muros de piedra.")

#### Locación 87: Sala de las Cadenas
- **Imagen prompt:** Una sala circular con cadenas colgando del techo y las paredes. Algunas tienen grilletes vacíos, otras tienen esqueletos aún encadenados. Un agujero en el suelo muestra las escaleras. Otro en el techo muestra más torre.
- **Descripción:** "Los prisioneros anteriores siguen aquí — encadenados a la pared, reducidos a huesos. Sus grilletes vacíos se balancean con el viento. ¿Cuántos vinieron a rescatar a alguien y terminaron encadenados?"
- **Norte →** Loc 88 (Laboratorio del Señor)
- **Sur →** Loc 86 (Escaleras de la Torre)
- **Este →** Loc 89 (Cámara de Tortura)
- **Oeste →** Bloqueado ("Cadenas bloquean el paso oeste.")

#### Locación 88: Laboratorio del Señor
- **Imagen prompt:** Un laboratorio alquímico oscuro con frascos de líquidos brillantes, libros abiertos con fórmulas imposibles, un caldero burbujeante con líquido negro. Instrumentos de cirugía oxidados. Diagramas del cuerpo humano con anotaciones en lengua muerta.
- **Descripción:** "Aquí el Señor de las Sombras experimentaba. Los frascos contienen cosas que se mueven. Los libros describen cómo extraer la luz de un alma. El caldero burbujea solo — la receta nunca se detuvo. Lleva siglos cocinando oscuridad."
- **Norte →** Loc 90 (Corredor de los Centinelas)
- **Sur →** Loc 87 (Sala de las Cadenas)
- **Este →** Loc 89 (Cámara de Tortura)
- **Oeste →** Loc 91 (Habitación de los Retratos)

#### Locación 89: Cámara de Tortura
- **Imagen prompt:** Instrumentos de tortura medievales oxidados pero intactos. Una silla con correas, un potro, jaulas suspendidas. Manchas oscuras permanentes en el suelo y paredes. Una ventana pequeña muestra el bosque lejano abajo.
- **Descripción:** "Cada instrumento cuenta una historia de dolor. La silla todavía tiene correas tensas, como esperando al siguiente. Las manchas en el suelo no se fueron nunca — ni se irán. La ventana muestra la libertad imposiblemente lejos abajo."
- **Norte →** Loc 91 (Habitación de los Retratos)
- **Sur →** Loc 87 (Sala de las Cadenas)
- **Este →** Bloqueado ("Solo pared.")
- **Oeste →** Loc 88 (Laboratorio del Señor)

#### Locación 90: Corredor de los Centinelas
- **Imagen prompt:** Un corredor largo con armaduras animadas a los lados — ojos de fuego rojo, espadas desenvainadas. Están inmóviles pero sus cabezas siguen tu movimiento. Sin el Manto de Sombras, atacan. Con él, no te ven.
- **Descripción (sin manto):** "Los Centinelas cobran vida al detectarte. Sus ojos se encienden rojos y las espadas apuntan a tu garganta. Son demasiados. No puedes pasar por la fuerza."
- **Descripción (con manto):** "El Manto de Sombras te envuelve en oscuridad. Los Centinelas miran a través de ti — eres invisible, eres sombra, eres nada. Pasas entre ellos como un fantasma. Sus ojos buscan sin encontrar."
- **Requiere:** 🧥 Manto de Sombras
- **Norte →** Loc 92 (Balcón de la Tormenta) — 🔒 Requiere Manto de Sombras
- **Sur →** Loc 88 (Laboratorio del Señor)
- **Este →** Loc 91 (Habitación de los Retratos)
- **Oeste →** Bloqueado ("Centinelas adicionales bloquean el oeste.")

#### Locación 91: Habitación de los Retratos
- **Imagen prompt:** Una habitación con retratos al óleo de personas — cada retrato muestra la misma persona envejeciendo: joven, adulto, anciano, esqueleto, sombra. El último retrato es solo un vacío negro con ojos. Los marcos son de hueso tallado.
- **Descripción:** "Los retratos cuentan la historia del Señor de las Sombras. Fue humano. Fue joven. Fue hermoso. Cada cuadro lo muestra más viejo, más oscuro, hasta que solo quedan ojos en la negrura. La tragedia de un hombre que temía morir y eligió algo peor."
- **Norte →** Loc 92 (Balcón de la Tormenta)
- **Sur →** Loc 89 (Cámara de Tortura)
- **Este →** Loc 88 (Laboratorio del Señor)
- **Oeste →** Loc 90 (Corredor de los Centinelas)

#### Locación 92: Balcón de la Tormenta
- **Imagen prompt:** Un balcón exterior de la torre. Tormenta permanente con relámpagos constantes. Vista del bosque entero abajo — un mar negro. Viento que casi te tira. Gárgolas en los bordes escupen agua de lluvia. La cima de la torre está cerca arriba.
- **Descripción:** "La tormenta nunca termina aquí. Los relámpagos iluminan el bosque entero — ves todo tu camino, cada locación que cruzaste, diminuta abajo. El viento empuja con rabia. La torre sigue arriba. Estás cerca."
- **Norte →** Loc 93 (Escalera Final)
- **Sur →** Loc 90 (Corredor de los Centinelas)
- **Este →** Loc 91 (Habitación de los Retratos)
- **Oeste →** Bloqueado ("Solo el vacío y la tormenta.")

#### Locación 93: Escalera Final
- **Imagen prompt:** Los últimos escalones de la torre. La piedra aquí es más oscura, casi viva. Las paredes laten como un corazón. Sangre seca en cada escalón. Arriba, una puerta de madera negra con un ojo tallado que se mueve.
- **Descripción:** "Estos son los últimos escalones. La torre late como si tuviera corazón. La sangre en los escalones es de otros que llegaron hasta aquí. La puerta arriba tiene un ojo tallado que te sigue. Estás donde él quiere que estés."
- **Norte →** Loc 94 (Antecámara del Señor)
- **Sur →** Loc 92 (Balcón de la Tormenta)
- **Este →** Bloqueado
- **Oeste →** Bloqueado

#### Locación 94: Antecámara del Señor
- **Imagen prompt:** Una sala circular oscura. El suelo es un espejo negro que refleja un cielo estrellado (no el techo). Pilares de humo sólido sostienen el techo. En el centro, un círculo de runas brillantes pulsa. Dos puertas: una al este, una al norte.
- **Descripción:** "El suelo refleja estrellas que no existen. Los pilares son humo que puedes tocar — frío como hielo. Las runas en el suelo pulsan como un corazón. Dos puertas: una lleva a él. La otra, a ella. Elige bien."
- **Norte →** Loc 96 (Cámara del Señor de las Sombras)
- **Sur →** Loc 93 (Escalera Final)
- **Este →** Loc 95 (Capilla Corrompida)
- **Oeste →** Bloqueado ("Humo sólido bloquea el paso.")

#### Locación 95: Capilla Corrompida
- **Imagen prompt:** Una capilla pequeña con un altar profanado. Cruces invertidas. Vitrales que muestran ángeles con rostros borrados. Cirios negros encendidos. Un libro en el altar escrito en sangre. Agua bendita convertida en tinta negra.
- **Descripción:** "Esto fue un lugar sagrado antes de que él lo corrompiera. Los ángeles de los vitrales perdieron sus caras. El agua bendita es tinta ahora. El libro en el altar cuenta la profecía: 'Solo las lágrimas de los olvidados y el cristal de la verdad romperán su dominio.'"
- **Norte →** Loc 96 (Cámara del Señor de las Sombras)
- **Sur →** Loc 94 (Antecámara del Señor)
- **Este →** Bloqueado
- **Oeste →** Loc 94 (Antecámara del Señor)

#### Locación 96: Cámara del Señor de las Sombras
- **Imagen prompt:** Una cámara enorme y oscura. Un trono de sombras materializadas flota en el centro. El Señor de las Sombras — una figura sin rostro, solo ojos blancos en la oscuridad — sentado en su trono. Tentáculos de sombra se extienden por la sala.
- **Descripción:** "Él está aquí. No tiene cuerpo — es ausencia de luz con ojos. 'Viniste', dice sin boca. 'Todos vienen. Ninguno se va.' Los tentáculos de sombra se extienden hacia ti. Pero no ataca — te estudia. Te deja pasar. Quiere que veas lo que hizo."
- **NPC:** Señor de las Sombras (no pelea, solo observa y habla)
- **Norte →** Loc 97 (Pasaje Secreto)
- **Sur →** Loc 94 (Antecámara del Señor)
- **Este →** Loc 98 (Jardín Superior)
- **Oeste →** Loc 95 (Capilla Corrompida)

#### Locación 97: Pasaje Secreto
- **Imagen prompt:** Un pasaje estrecho detrás del trono. Las paredes son de cristal negro que muestra memorias — imágenes del Señor cuando era humano, de la princesa siendo capturada, del bosque antes de la maldición. Hermoso y triste.
- **Descripción:** "Las paredes de cristal muestran memorias. El Señor fue un príncipe que amó a Elara. Cuando ella lo rechazó, vendió su alma al bosque por poder eterno. La capturó para que nadie más la tuviera. No es maldad pura — es amor podrido."
- **Norte →** Loc 99 (Puerta Final)
- **Sur →** Loc 96 (Cámara del Señor de las Sombras)
- **Este →** Loc 98 (Jardín Superior)
- **Oeste →** Bloqueado

#### Locación 98: Jardín Superior
- **Imagen prompt:** Un jardín imposible en lo alto de la torre. Flores que brillan con luz propia — pero sus colores son tristes: azul hielo, púrpura moribundo, blanco hueso. Un columpio vacío se mece solo. Vista de la tormenta rodeando la torre.
- **Descripción:** "El Señor construyó este jardín para ella. Las flores son hermosas pero tristes — como un regalo de alguien que no entiende el amor. El columpio se mece solo, esperándola. Ella nunca vino aquí por voluntad propia."
- **Norte →** Loc 99 (Puerta Final)
- **Sur →** Loc 96 (Cámara del Señor de las Sombras)
- **Este →** Bloqueado ("Solo cielo tormentoso.")
- **Oeste →** Loc 97 (Pasaje Secreto)

#### Locación 99: Puerta Final
- **Imagen prompt:** Una puerta blanca — la única cosa blanca en toda la torre. Simple, sin adornos. Una cerradura dorada. Detrás se escucha un llanto suave. Luz cálida se filtra por debajo de la puerta. Es la puerta de la prisión de Elara.
- **Descripción:** "La puerta es blanca. Después de tanta oscuridad, el blanco duele a los ojos. Detrás escuchas un llanto suave — Elara. La cerradura no necesita llave — se abre con un toque. Él nunca la encerró con llave. La prisión es el bosque entero."
- **Norte →** Loc 100 (Prisión de Elara — Final)
- **Sur →** Loc 97 (Pasaje Secreto)
- **Este →** Loc 98 (Jardín Superior)
- **Oeste →** Bloqueado

#### Locación 100: Prisión de Elara — Final
- **Imagen prompt:** Una habitación circular en la cima de la torre. Ventanas que muestran cielo estrellado (no la tormenta). Una cama con doseles blancos. Elara sentada en el borde — hermosa, pálida, dormida con los ojos abiertos. Cadenas de sombra la atan. Un halo de tristeza.
- **Descripción (sin espada y frasco):** "Elara está aquí. Dormida con los ojos abiertos — un sueño maldito. Cadenas de sombra la atan a la torre. No puedes romperlas con las manos. Necesitas algo que corte la oscuridad y algo que despierte un alma dormida."
- **Descripción (con espada, sin frasco):** "La Espada de Cristal corta las cadenas de sombra como si fueran humo. Se desintegran. Pero Elara no despierta. Sus ojos abiertos no te ven. El sueño es más profundo que las cadenas."
- **Descripción (con espada y frasco — FINAL):** "Cortas las cadenas con la Espada de Cristal. Viertes las Lágrimas de los Olvidados sobre sus labios. Elara parpadea — sus ojos te encuentran. 'Viniste', susurra. La tormenta afuera se detiene. La torre tiembla. El bosque empieza a despertar. El Señor de las Sombras grita en algún lugar abajo — un grito que es también un llanto. Has ganado. Has perdido. Has terminado."
- **Requiere:** ⚔️ Espada de Cristal + 💧 Frasco de Lágrimas (para completar el juego)

---

## Resumen de Progresión

1. **Zona 1 (1-15):** Exploración inicial, recoger Llave Oxidada y Farol
2. **Zona 2 (16-30):** Profundización, obtener Amuleto, Cuerda y Espejo
3. **Zona 3 (31-50):** Puzzles principales, usar objetos para avanzar, obtener Flauta y Sangre de Luna
4. **Zona 4 (51-70):** Tierras peligrosas, Corona, Ojo, Pluma y Manto
5. **Zona 5 (71-85):** Acercamiento a la Torre, Espada, Frasco y Llave de Plata
6. **Zona 6 (86-100):** La Torre, usar Manto y los dos objetos finales para el rescate

## Objetos Críticos para Completar el Juego (en orden necesario)

1. 🔑 Llave Oxidada → Abre Cripta (progresión)
2. 🔦 Farol de Llama Azul → Cueva Sin Luz (progresión)
3. 💀 Amuleto de Hueso → Lago del Espíritu (evita muerte)
4. 🪢 Cuerda de Raíces → Precipicio (progresión)
5. 🪞 Espejo Roto → Gorgona (evita muerte)
6. 🎵 Flauta de Hueso → Puente del Guardián (progresión)
7. 🩸 Sangre de Luna → Puerta de Sangre (progresión)
8. 👑 Corona de Espinas → Rey Duende (progresión)
9. 👁️ Ojo de Cristal → Camino Oculto (progresión)
10. 🪶 Pluma del Búho Negro → Sello del Viento (progresión)
11. 🌿 Raíz de Mandrágora → Hada Herida → 🔑 Llave de Plata (progresión)
12. 🔑 Llave de Plata → Reja de la Torre (progresión)
13. 🧥 Manto de Sombras → Centinelas (progresión)
14. ⚔️ Espada de Cristal → Cadenas de Elara (final)
15. 💧 Frasco de Lágrimas → Despertar a Elara (final)
