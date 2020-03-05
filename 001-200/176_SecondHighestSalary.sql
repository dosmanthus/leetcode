// Solution 1, 380 ms
// SELECT MAX(Salary) FROM Employee 找出第一高 -> 找出其他的最高
SELECT MAX(Salary) AS SecondHighestSalary
FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee)

// Solution 2, 148 ms
// 從高至低排序之後，排除第一行後LIMIT一行

SELECT (
  SELECT DISTINCT Salary
  FROM Employee
  ORDER BY Salary DESC
  LIMIT 1
  OFFSET 1
) AS SecondHighestSalary
