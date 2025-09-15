# 📘 Métodos de JavaScript — Caja de Herramientas

En JavaScript, cada tipo de dato tiene sus propios métodos y propiedades.  
Es como si cada tipo trajera una **"caja de herramientas"** distinta 🧰.

---

## 🔤 STRING (cadenas de texto: `"Hola"`)

**Propiedades y métodos útiles:**

- `.length` → Devuelve la cantidad de caracteres.  
- `.toUpperCase()` → Convierte a mayúsculas.  
- `.toLowerCase()` → Convierte a minúsculas.  
- `.trim()` → Elimina espacios al inicio y al final.  
- `.trimStart()` → Elimina espacios al inicio.  
- `.trimEnd()` → Elimina espacios al final.  
- `.includes("txt")` → Verifica si contiene cierto texto.  
- `.startsWith("txt")` → Verifica si empieza con cierto texto.  
- `.endsWith("txt")` → Verifica si termina con cierto texto.  
- `.indexOf("txt")` → Devuelve la posición de la primera coincidencia.  
- `.lastIndexOf("txt")` → Posición de la última coincidencia.  
- `.charAt(0)` → Devuelve el carácter en esa posición.  
- `.charCodeAt(0)` → Devuelve el código Unicode del carácter.  
- `.at(-1)` → Devuelve el carácter en esa posición (acepta negativos).  
- `.slice(2, 5)` → Extrae una parte del texto.  
- `.substring(2, 5)` → Extrae caracteres (no acepta índices negativos).  
- `.substr(2, 5)` → Extrae caracteres (antiguo, no recomendado).  
- `.split(" ")` → Divide en un array usando un separador.  
- `.replace("a", "b")` → Reemplaza la primera coincidencia.  
- `.replaceAll("a", "b")` → Reemplaza todas las coincidencias.  
- `.repeat(3)` → Repite el texto varias veces.  
- `.padStart(5, "0")` → Rellena al inicio hasta la longitud dada.  
- `.padEnd(5, ".")` → Rellena al final hasta la longitud dada.  
- `.concat("texto")` → Une varios textos.  
- `.match(/regex/)` → Busca coincidencias con una expresión regular.  
- `.search(/regex/)` → Devuelve posición de la coincidencia.  
- `.localeCompare("txt")` → Compara cadenas según idioma.  
- `.normalize()` → Normaliza caracteres Unicode.  
- `.toString()` → Convierte a string (generalmente innecesario).  

---

## 🔢 NUMBER (números: `42`, `3.14`)

**Métodos y funciones útiles:**

- `.toFixed(2)` → Fija el número de decimales.  
- `.toExponential(2)` → Notación científica.  
- `.toPrecision(3)` → Fija la precisión total.  
- `.toString()` → Convierte el número a texto.  
- `Number.isInteger(5)` → Verifica si es entero.  
- `Number.isNaN(x)` → Verifica si es NaN.  
- `parseInt("123")` → Convierte a entero.  
- `parseFloat("3.14")` → Convierte a decimal.  
- `isFinite(x)` → Verifica si es un número finito.  

**Objeto `Math` (herramientas matemáticas):**

- `Math.round(x)` → Redondea al entero más cercano.  
- `Math.floor(x)` → Redondea hacia abajo.  
- `Math.ceil(x)` → Redondea hacia arriba.  
- `Math.abs(x)` → Valor absoluto.  
- `Math.max(a, b, c)` → Devuelve el mayor.  
- `Math.min(a, b, c)` → Devuelve el menor.  
- `Math.random()` → Número aleatorio [0, 1).  
- `Math.pow(a, b)` → Potencia (a^b).  
- `Math.sqrt(x)` → Raíz cuadrada.  
- `Math.trunc(x)` → Elimina decimales.  

---

## 📦 ARRAY (listas: `[1, 2, 3]`)

**Métodos de modificación:**

- `.push(x)` → Agrega al final.  
- `.pop()` → Elimina el último.  
- `.shift()` → Elimina el primero.  
- `.unshift(x)` → Agrega al inicio.  
- `.splice(i, n)` → Agrega o elimina elementos.  
- `.fill(x)` → Rellena con un valor.  
- `.copyWithin()` → Copia dentro del mismo array.  

**Métodos de búsqueda y verificación:**

- `.includes(x)` → Verifica si contiene.  
- `.indexOf(x)` → Devuelve la posición de la primera coincidencia.  
- `.lastIndexOf(x)` → Última coincidencia.  
- `.find(fn)` → Devuelve el primer elemento que cumpla la condición.  
- `.findIndex(fn)` → Devuelve el índice del primer elemento que cumpla.  
- `.some(fn)` → Verifica si al menos uno cumple.  
- `.every(fn)` → Verifica si todos cumplen.  

**Métodos de transformación:**

- `.map(fn)` → Crea un nuevo array transformando cada elemento.  
- `.filter(fn)` → Crea un nuevo array con los que cumplen.  
- `.forEach(fn)` → Ejecuta una función por cada elemento.  
- `.reduce(fn, inicial)` → Acumula valores en uno solo.  
- `.reduceRight(fn, inicial)` → Igual pero de derecha a izquierda.  
- `.flat()` → Aplana arrays anidados.  
- `.flatMap(fn)` → Mapea y aplana en un paso.  

**Métodos de ordenación y unión:**

- `.sort()` → Ordena el array.  
- `.reverse()` → Invierte el orden.  
- `.join(", ")` → Une elementos en un string.  
- `.concat(arr)` → Une arrays.  
- `.slice(i, j)` → Crea una copia parcial.  

---

## 📆 DATE (fechas con `new Date()`)

**Obtener datos de la fecha:**

- `.getFullYear()` → Año.  
- `.getMonth()` → Mes (0–11).  
- `.getDate()` → Día del mes.  
- `.getDay()` → Día de la semana (0–6).  
- `.getHours()` → Hora.  
- `.getMinutes()` → Minutos.  
- `.getSeconds()` → Segundos.  
- `.getMilliseconds()` → Milisegundos.  
- `.getTime()` → Milisegundos desde 1970.  

**Formato:**

- `.toDateString()` → Texto legible.  
- `.toTimeString()` → Solo hora.  
- `.toISOString()` → Estándar ISO.  
- `.toLocaleDateString()` → Fecha en formato local.  
- `.toLocaleTimeString()` → Hora en formato local.  
- `.toUTCString()` → En formato UTC.  

---

## 🧠 OBJECT (datos estructurados: `{nombre: "Ana"}`)

**Herramientas útiles:**

- `Object.keys(obj)` → Devuelve las claves.  
- `Object.values(obj)` → Devuelve los valores.  
- `Object.entries(obj)` → Devuelve pares clave/valor.  
- `Object.assign(dest, src)` → Copia propiedades.  
- `Object.freeze(obj)` → Congela (no se puede modificar).  
- `Object.seal(obj)` → Se puede modificar, pero no agregar/eliminar propiedades.  
- `Object.create(proto)` → Crea un objeto con un prototipo dado.  
- `hasOwnProperty("clave")` → Verifica si tiene esa propiedad.  

---

## ⚠️ BONUS: Tipos sin muchos métodos propios

- **Boolean** (`true`, `false`) → Se usan en lógica (&&, ||, !).  
- **Null / Undefined** → No tienen métodos propios.  
