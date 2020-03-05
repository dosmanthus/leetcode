-- Solution1, DATEDIFF, 430 ms
SELECT a.Id FROM Weather as a, Weather as b
WHERE DATEDIFF(a.RecordDate, b.RecordDate) = 1
AND a.Temperature > b.Temperature

-- Solution2, DATE_SUB 相減, 1222 ms
-- INTERVAL 1 DAY 前一天
SELECT a.Id
FROM Weather as a
WHERE (
  SELECT z.Temperature
  FROM Weather as z
  WHERE DATE_SUB(a.RecordDate, INTERVAL 1 DAY) = z.RecordDate
)
< a.Temperature
