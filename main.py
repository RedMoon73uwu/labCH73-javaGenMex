print("Bienvenido a la calculadora");
num1 = float(input("Ingrese el primer número: "));
num2 = float(input("Ingrese el segundo número: "));
result = num1 + num2
print(f"El resultado de la suma es: {result}")
print("\n\nMas operaciones disponibles: \n 1. Suma otro numero mas \n 2. Resta \n 3. Multiplicación \n 4. División");

case = input("Ingrese el numero correspondiente a la operación a realizar: ");
match case:
    case "1":
        num3 = float(input("Ingrese el tercer número: "));
        result = num1 + num2 + num3
        print(f"El resultado de la suma  de tres numeros es: {result}")
    case "2":
        result = num1 - num2
        print(f"El resultado de la resta es: {result}")
    case "3":
        result = num1 * num2
        print(f"El resultado de la multiplicación es: {result}")
    case "4":
        if num2 != 0:
            result = num1 / num2
            print(f"El resultado de la división es: {result}")
        else:
            print("Error: No se puede dividir entre cero.")