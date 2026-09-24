import requests

respuesta = requests.get("https://jsonplaceholder.typicode.com/users/1")

publicacion = respuesta.json()
print(publicacion)