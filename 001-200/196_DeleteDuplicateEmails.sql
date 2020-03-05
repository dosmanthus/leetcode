
-- Solution1, 1019 ms
DELETE p1
FROM Person as p1, Person as p2
WHERE p1.Email = p2.Email
AND p1.Id > p2.Id

-- Solution2, 1227 ms
DELETE FROM Person
WHERE Id NOT IN
(SELECT Id FROM
  (SELECT MIN(Id) Id FROM Person GROUP BY Email) as p
  -- 後面必須加alias p
  -- Error: Every derived table must have its own alias
)
