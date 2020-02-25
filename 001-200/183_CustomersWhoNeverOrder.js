# Solution1, 255ms
SELECT C.Name as Customers
FROM Customers as C
WHERE NOT EXISTS
(SELECT Id
FROM Orders as O
WHERE C.Id = O.CustomerId)

# Solution2, 464ms
SELECT C.Name as Customers
FROM Customers as C
WHERE C.Id NOT IN
(SELECT O.CustomerId
FROM Orders as O)

# Solution3, 252 ms
SELECT C.Name as Customers
FROM Customers as C
LEFT JOIN Orders as O
ON C.Id = O.CustomerId
WHERE O.CustomerId  is NULL
