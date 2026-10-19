#Fizzbuzz

for num in range(1, 1001):
    if num % 3 == 0 and num % 5 == 0:
        print(num, "FizzBuzz")
    elif num % 3 == 0:
        print(num, "Fizz")
    elif num % 5 == 0:
        print(num, "Buzz")
    else:
        print(num)
print("\n Fin del programa. \n")