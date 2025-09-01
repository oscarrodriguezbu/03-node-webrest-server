import fs from 'fs';
import http2 from 'http2';

//http2 puede interpretarse como una conexion no segura pero es como https
const server = http2.createSecureServer({ //http2 debe tener el createSecureServer para que funcione y sea compatible
  key: fs.readFileSync('./keys/server.key'), // necesarios para el createSecureServer
  cert: fs.readFileSync('./keys/server.crt'), // necesarios para el createSecureServer
  // los /keys hay que generarlos, en windows escribir openssl, si no sirve entonces toca instalarlo pero eso viene con git,
  // puede requerir otras configuraciones adicionales en los env de windows
  // pegar el comando: openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
  // configurar los pasos de la consola, se genera el key y pegarlo en la carpeta keys/server.crt
}, (req, res) => {

  console.log(req.url);
  //? esto es server side rendering:

  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write(`<h1>URL ${ req.url }</h1>`);
  // res.end();

  // const data = { name: 'John Doe', age: 30, city: 'New York' };
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.end( JSON.stringify(data) );
  

  //! todo lo que sigue se puede hacer mas rapidio con Express, Fastify => Nest.js

  if (req.url === '/') {
    const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlFile);
    return;
  }

  if (req.url?.endsWith('.js')) {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
  } else if (req.url?.endsWith('.css')) {
    res.writeHead(200, { 'Content-Type': 'text/css' });
  }

  try {
    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
    res.end(responseContent);

  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end();
  }

});



server.listen(8080, () => {
  console.log('Server running on port 8080');
})



