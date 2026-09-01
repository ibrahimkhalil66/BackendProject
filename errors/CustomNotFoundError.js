class CustomNotFoundError extends error {
  constructor(message) {
    super(message);
    this.statusCode = "404";

    this.name = "NoteFoundError";
  }
}


module.exports = CustomNotFoundError;