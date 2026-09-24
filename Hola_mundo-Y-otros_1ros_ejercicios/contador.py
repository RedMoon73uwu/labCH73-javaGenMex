#Programa contador. 
#Objetivo: Contar de 1 a 10 y mostrar el resultado en pantalla. si el numero es < 5, mostrar el mensaje "Numero pequeño", si es igual a 5, mostrar "numero pequeño", si es igual a 5, mostrar "llegamos a 5" y si es mayor que 5, mostrar "numero grande".
numero = 1
print("Contando...")
for numero in range (1, 11):
    print("\n El numero es:", numero)
    if numero < 5:
        print("Es un Numero pequeño ")
    elif numero == 5:
        print("llegamos a 5")
    else:
        print("Es un Numero grande")

print("\n Contando hacia atras...")
for numero in range (10, -2, -1):
    print("\n El numero es:", numero)
    if numero < 5:
        print("Es un Numero pequeño")
    elif numero == 5:
        print("llegamos a 5")
    elif numero < 0:
        print("Es un Numero negativo")
    else:
        print("Es un Numero grande")
print("\n Fin del programa \n")