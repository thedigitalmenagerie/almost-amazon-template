const addAuthor = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="author-first-name" placeholder="Enter First Name" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="author-last-name" placeholder="Enter Last Name" required>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="sale">
      <label class="form-check-label" for="sale">Favorite</label>
    </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;
};

export default addAuthor;
