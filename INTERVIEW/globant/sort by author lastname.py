
_books = [
        {"name": "The Telling", "author": "Ursula K. Le_Guin"},
        {"name": "Harry Potter", "author": "Joanne Rowling"},
        {"name": "Frankenstein; or, The Modern Prometheus", "author": "Mary Shelley"},
        {"name": "The Hunger Games", "author": "Suzanne Collins"},
        {"name": "Warcross", "author": "Marie Lu"},
    ]

def sort_books_desc_by_author_lastname(books):
    

    # Sort by author's last name (descending)
    sorted_books = sorted(books, key=lambda b: b["author"].split()[-1].lower(), reverse=True)

    # Print the sorted books
    for book in sorted_books:
        print(f'{book["author"]}: "{book["name"]}"')

# Run the function
sort_books_desc_by_author_lastname(_books)










