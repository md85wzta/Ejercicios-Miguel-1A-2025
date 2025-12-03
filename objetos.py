#lo mismo pero en python
def AgregarPersonas():
    
    tamaño = int(input("de que tamaño lo harás?"))

    while tamaño <= 0:
        tamaño = int(input("ingresa un numero valido porfa we"))

    contador = 0
    Contactos = []
    
    while (contador < tamaño):
        print(f"===== agrega a la persona {contador+1} ======= ")
        persona = { #diccionario
            "nombre": input("nombre: "),
            "apellido": input("apellido: "),
            "edad": int(input("edad: "))
        }
        
        Contactos.append(persona)
        print(f"haz agregado a: {persona['nombre']}") #mostrar el nombre de la persona agregada
        contador += 1
        
    print("====== tus contactos son: ==============")
    print(Contactos)
    
AgregarPersonas()