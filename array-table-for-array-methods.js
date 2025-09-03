
// Array Methods 

// | Method            | Purpose / Use Case                                                            | Returns                           | Key Notes / Example Use Case                                                                                 |
// | ----------------- | ----------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
// | **`.map()`**      | Transform each element of an array into something new                         | **New array** same length         | Example: convert employee objects to strings `"Alice (HR)"`. Does **not mutate original array**.             |
// | **`.filter()`**   | Select elements that satisfy a condition                                      | **New array** (subset)            | Example: all employees in Engineering. Only keeps items where condition is `true`.                           |
// | **`.find()`**     | Locate **first element** that satisfies a condition                           | Single element (object/primitive) | Example: find the department object where `name === "Sales"`. Stops searching after first match.             |
// | **`.some()`**     | Check if **at least one element** satisfies a condition                       | Boolean (`true` / `false`)        | Example: check if any employee works in Sales. Stops iterating after first match.                            |
// | **`.reduce()`**   | Combine all elements into a **single value** (sum, max, object, string, etc.) | Single value (depends on use)     | Example: find employee with highest salary. Can also sum salaries or build custom objects.                   |
// | **`.forEach()`**  | Loop through array to **perform side effects** (logging, updating)            | `undefined`                       | Example: log all employee names. Does **not return a new array**.                                            |
// | **`.every()`**    | Check if **all elements** satisfy a condition                                 | Boolean (`true` / `false`)        | Example: check if all employees earn above \$4000. Returns false on first failure.                           |
// | **`.includes()`** | Check if array contains a specific **value**                                  | Boolean (`true` / `false`)        | Example: check if an array of department names contains `"HR"`. Works with primitives, not objects directly. |
