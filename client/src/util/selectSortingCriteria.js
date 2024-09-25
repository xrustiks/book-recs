export const selectSortingCriteria = (
  eventKey,
  sortCriteria,
  setSortCriteria,
  setBooks,
  setDropdownTitle,
) => {
  // If the selected sort criteria is the same as the current one, do nothing
  if (eventKey === sortCriteria) return;

  setSortCriteria(eventKey);
  setBooks([]);

  // Update the dropdown title based on the selected eventKey
  let title;
  switch (eventKey) {
    case "rating":
      title = "Rating (default)";
      break;
    case "date":
      title = "Latest uploaded";
      break;
    case "author":
      title = "Author";
      break;
    default:
      title = "Sort By";
  }

  setDropdownTitle(title);
};
