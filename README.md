
# Superhero Data Organizer

This project organizes superhero data in a web page without relying on any frameworks or libraries like React, Vue, or Svelte. It fetches superhero data from a JSON file and displays it in a table with multiple features such as pagination, searching, and sorting. The focus of the project is on speed and efficiency.

## Features

1. **Fetching Data**: 
   - The data is fetched using JavaScript's `fetch` API, which returns a promise. 
   - The JSON data from the API is parsed and used to display information about superheroes.

2. **Display**: 
   - The data is displayed in a `<table>` element, showing the following fields:
     - Icon (as images)
     - Name
     - Full Name
     - Powerstats (multiple entries)
     - Race
     - Gender
     - Height
     - Weight
     - Place of Birth
     - Alignment
   - The page displays only the necessary information and hides less relevant data for better clarity.

3. **Pagination**:
   - A `<select>` input is provided to choose the page size, with options for 10, 20, 50, 100, or all results.
   - The default page size is 20.

4. **Search**:
   - A search bar is provided to filter the superheroes by their name. 
   - The search is interactive and results are filtered as the user types, without the need for a "search" button.

5. **Sorting**:
   - The table can be sorted by any column, either alphabetically or numerically.
   - Clicking a column header sorts the table by that column in ascending order.
   - Consecutive clicks toggle between ascending and descending sorting.
   - Numerical columns like weight are handled properly, ensuring "78 kg" comes before "100 kg" when sorted.

6. **Handling Missing Values**:
   - Missing values are always sorted last, irrespective of the sorting order.

## Instructions to Run

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.
3. The table will be populated with superhero data fetched from the API.

### Technologies Used:
- HTML
- CSS
- JavaScript

### API Used:
- [Superhero API](https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json)



## 🚀Collaborators

   Thanks to the amazing contributors of this project:

 [![amazighi](https://github.com/amazighii.png?size=70)](https://github.com/amazighii)
[![aminehabchi](https://github.com/aminehabchi.png?size=70)](https://github.com/aminehabchi)
[![AmineS530](https://github.com/AmineS530.png?size=70)](https://github.com/AmineS530)

#


