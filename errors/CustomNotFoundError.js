class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = "404";

    this.name = "NoteFoundError";
  }
}


module.exports = CustomNotFoundError;