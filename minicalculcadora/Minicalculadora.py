
def suma(num1, num2):
    return num1 + num2

def resta(num1, num2):
    return num1 - num2

def multiplicacion(num1, num2):
    return num1 * num2

def division(num1, num2):
    if num2 == 0:
        return "Error: División por cero"
    return num1 / num2
def potencia(num1, num2):
    return num1 ** num2

print("Bienvenido a la Minicalculadora")
num1 = float(input("Ingrese el primer número: "))
num2 = float(input("Ingrese el segundo número: "))

case = input("Ingrese el número correspondiente a la operación a realizar (1: Suma, 2: Resta, 3: Multiplicación, 4: División, 5: Potencia): ")
match case:
    case "1":
        result = suma(num1, num2)
        print(f"El resultado de la suma es: {result}")
    case "2":
        result = resta(num1, num2)
        print(f"El resultado de la resta es: {result}")
    case "3":
        result = multiplicacion(num1, num2)
        print(f"El resultado de la multiplicación es: {result}")
    case "4":
        result = division(num1, num2)
        print(f"El resultado de la división es: {result}")
    case "5":
        result = potencia(num1, num2)
        print(f"El resultado de la potencia es: {result}")
    case _:
        print("Opción no válida. Por favor, ingrese un número del 1 al 5.")