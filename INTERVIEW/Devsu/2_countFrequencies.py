def countFrecuency(arrWords):
    amount_index = 0
    word_index = 1
    words = {}

    for x in arrWords:
        if x not in words:
            words[x] = 1
        else:
            words[x] = words[x] + 1 

    words_counted = [[key, value] for key, value in words.items()]
    words_counted.sort(key=lambda item:item[word_index])

    return [item[amount_index] for item in words_counted]

words = ['the', 'the', 'dog', 'got', 'the', 'bone', 'bone']
res = countFrecuency(words)
print(res)