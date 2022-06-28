class Book {
  constructor(
    title,
    author,
    genre,
    numOfPages,
    material,
    yearPublished,
    isFinished
  ) {
    (this.title = title),
      (this.author = author),
      (this.genre = genre),
      (this.numOfPages = numOfPages),
      (this.material = material),
      (this.yearPublished = yearPublished);
    this.isFinished = isFinished;
  }
  isCompleted() {
    return this.isFinished;
  }
  daysSincePublished() {
    let now = new Date();
    let published = new Date(this.yearPublished);
    let elapsed = now - published;
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Book;
