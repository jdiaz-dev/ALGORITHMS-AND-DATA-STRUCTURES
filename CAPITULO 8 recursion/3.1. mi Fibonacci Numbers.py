
def fibonacciNumbers(total, prevValue = 0, posteriorValue = 1):
    if total == 0: return
    print(prevValue)
    fibonacciNumbers(total -1, posteriorValue, prevValue + posteriorValue)

fibonacciNumbers( 15)
