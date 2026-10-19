def main():
  print("Bienvenido a Number Quiz.")


def trivia_quiz():
  num=input("elige un numero del menu para obtener un dato curioso...\n 1. \n 3. \n 73 \nElige: ")
  if num == "1":
    print("\n\nEl número 1 es el único número que no tiene un valor definido en matemáticas.")
  
  elif num == "3":
    print("\n\nEl número 3 es considerado un número de la suerte en muchas culturas.")
  
  elif num == "73":
    print("\n\nEl número 73 es un número primo y también es el 21º número primo.\n también es el numero de la cohorte de este curso... y el numero final de mi usuario de github, xbox e instagram.")

if __name__=="__main__":
  main()

  trivia_quiz()