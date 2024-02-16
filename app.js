const express = require ('express');
const path = require ('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// Resto de tu código para configurar rutas, middleware, y escuchar en un puerto

const PORT = 3030; // Puedes cambiar el número de puerto según tus preferencias
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});