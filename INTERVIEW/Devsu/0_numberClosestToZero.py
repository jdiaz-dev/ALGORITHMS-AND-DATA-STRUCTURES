def ordenamiento_rapido(array):
    if len(array) < 1:
        return []

    izquierda = []
    derecha = []
    pivote = array[0]

    for x in array[1:]:
        if x < pivote:
            print(x)
            izquierda.append(x)
        else:
            derecha.append(x)

    return ordenamiento_rapido(izquierda) + [pivote] + ordenamiento_rapido(derecha)

