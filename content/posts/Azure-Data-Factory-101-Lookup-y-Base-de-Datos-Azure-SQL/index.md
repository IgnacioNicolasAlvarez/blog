---
title: "Azure Data Factory 101 - Lookup y Base de Datos Azure SQL"
date: 2021-05-17
slug: "/ADF-101-Lookup-SQL"
canonicalUrl: "https://inalvarez.com/"
tags: 
    - Azure Data Factory
    - SQL
showCopyButton: True
---

La Activity **Lookup** suele utilizarse para recuperar un conjunto de datos o resultado parcial de cualquiera de las fuentes de datos de Azure Data Factory. Suele utilizarse para recuperar datos de configuracion sobre los cuales se va a iterar, chequear la existencia de ciertos datos en un tabla, explorar la estructura de un archivo json almacenado o directamente desde la web, etc.

> Hay que tener en cuenta que **Lookup** se maneja con las siguientes limitaciones:
>
> * Puede devolver 5000 filas como máximo (si el conjunto de resultados contiene más filas, devolverá unicamente las primeras 5000).
>
> * La salida del Lookup permite un tamaño máximo de 4 MB, si esté limite es superado, la actividad fallará.
>
> * La duración máxima permitida de la ejecución es de 24 horas.
>
> * Si se esta utilizando una operación DML SQL o bien, un procedimiento almacenado, este debe devolver obligatoriamente un registro como mínimo. De lo contrario fallará.

Si bien puede utilizarse **Lookup** para interactual con distintas fuentes, vamos a ver que sucede con uno de los origenes mas comunes: **Azure SQL** *(aplicable tambien para Azure Synapse SQL Pools).

Para crear una Activity Lookup basta con arrastrar un elemento "Lookup" del listado izquierdo bajo el tab "General", y dejarlo sobre el canvas ubicado en la sección derecha. Al darle click se deplegarán las opciones de configuración.

Desplegado el primer panel de configuración _"General"_, aparecerán las opciones generales, aplicables para los distintos origenes de datos. Esta configuración es similar para distintas fuentes: Json, SQL, csv, parquet, etc. Vamos a desglozar la configuración:

>
> * **Name**: Nombre descriptivo de la Actividad. No puede finalizar en espacio en blancos, números o caracteres especiales, puede contar con espacios en blanco en el medio.  
>
> * **Description**: Descripción general de la Actividad, usualmente contiene fecha de creación, autor, finalidad o detalles que son necesarios comunicar a un futuro desarrollador por mantenimiento.
> * **Timeout**: Duración máxima de la ejecución, el máximo configurable es de 24 horas.
>
> * **Retry**: Cantidad de veces que va a reinterse la ejeción de una Actividad al fallar. El valor default es cero.
>
> * **Retry Interval**: Cantidad de segundos entre reintentos frente a una falla o error.
>
> * **Secure Output**: Cantidad de segundos entre reintentos frente a una falla o error.
>

![Lookup 1](./lookup1.PNG "IMG Creacion de Lookup")


![Lookup 2](./lookup2.PNG "IMG Seleccionar Dataset")
![Lookup 3](./lookup3.PNG "IMG Creacion de Dataset")
![Lookup 4](./lookup4.PNG "IMG Seleccionar LinkedService")
![Lookup 5](./lookup5.PNG "IMG Creacion de LinkedService")
![Lookup 5-1](./lookup5-1.PNG "IMG Ejemplo Creacion de LinkedService")
![Lookup 6](./lookup6.PNG "IMG Seleccion de LinkedService")
![Lookup 7](./lookup7.PNG "IMG Seleccion Isolation Level")
![Lookup 8](./lookup8.PNG "IMG Opciones Isolation Level")
![Lookup 9](./lookup9.PNG "IMG Query en Lookup")
![Lookup 10](./lookup10.PNG "IMG SP en Lookup")
![Lookup 10-1](./lookup10-1.PNG "IMG Importacion de Parametros en SP Lookup")
