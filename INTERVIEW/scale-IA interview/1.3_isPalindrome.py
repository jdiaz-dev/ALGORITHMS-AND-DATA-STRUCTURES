
_linkedList = {
  "value": 0,
  "next": {
    "value": 1,
    "next": {
      "value": 2,
      "next": {
        "value": 3,
        "next": {
          "value": 2,
          "next": {
            "value": 1,
            "next": { "value": 0, "next": "null" },
          },
        },
      },
    },
  },
};

def isPalindrome(linkedList):
    
  slow = linkedList
  fast = linkedList["next"]
  while fast != "null":
    slow = slow["next"]
    fast = fast["next"]["next"] 

  prev = "null"
  curr = slow
  while curr != "null":
    tempNext = curr["next"]

    curr["next"] = prev
    prev = curr

    curr = tempNext

  while prev != "null":
    if linkedList["value"] != prev["value"]: return False

    prev = prev["next"]
    linkedList = linkedList["next"]

  return True  

res = isPalindrome(_linkedList)