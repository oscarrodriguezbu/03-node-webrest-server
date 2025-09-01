
# Info de la app
Se monta un WebServer con una aplicación corriendo en la web.
Se trabaja con un servidor rest y se crear nuestro API.



# Dev

1. Clonar el .env.template y crear el .env
2. Ejecutar el comando ```docker compose up -d```
3. Reconstruir el prisma client ```npm run prisma:migrate:prod```
   
   ```
    "prisma:migrate:prod": "prisma migrate deploy",
   ```

4. Abrir http://localhost:3000

# Screnshoots:

![alt text](public/assets/screenshoots/Captura%20de%20pantalla%202025-08-30%20211852.png)

![alt text](public/assets/screenshoots/Captura%20de%20pantalla%202025-08-30%20211907.png)

![alt text](public/assets/screenshoots/Captura%20de%20pantalla%202025-08-30%20211918.png)

![alt text](public/assets/screenshoots/Captura%20de%20pantalla%202025-08-30%20211942.png)

![alt text](public/assets/screenshoots/Captura%20de%20pantalla%202025-08-30%20213441.png)

![alt text](public/assets/screenshoots/Captura%20de%20pantalla%202025-08-30%20213451.png)

![alt text](public/assets/screenshoots/Captura%20de%20pantalla%202025-08-30%20213557.png)

![alt text](public/assets/screenshoots/Captura%20de%20pantalla%202025-08-30%20213616.png)

5. Testing: Si la BD no se ha desplegado en un servidor y se quiere correr localmente entonces modificar
    el .env.test y colocarlo con las misma credenciales del archivo .env, luego correr ```npm run test:watch```

![alt text](public/assets/screenshoots/Captura%20de%20pantalla%202025-08-31%20104609.png)
