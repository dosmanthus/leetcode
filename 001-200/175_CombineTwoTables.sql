// http://img.cppcns.com/pic.php?url=/file_images/article/201412/Visual_SQL_JOINS_small.jpg
// LEFT JOIN, 230 ms

SELECT Person.FirstName, Person.LastName, Address.City, Address.State
FROM Person
LEFT JOIN Address
ON Person.PersonId = Address.PersonId
