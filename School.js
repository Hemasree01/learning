class School {
  constructor(
    // Defines parameters:
    name,
    math,
    chemistry,
    gateOpen
  ) {
    // Define properties:
    this.name = name;
    this.subjects = {
      subject1: math,
      subject2: chemistry,
    };
    this.gateOpen = gateOpen;
  }
  // Add methods like normal functions:
  toggleOpen(gateStatus) {
    this.gateOpen = gateStatus;
  }
  newSubjects(math, chemistry) {
    this.subjects.subject1 = math;
    this.subjects.subject2 = chemistry;
  }
}

export default School;
