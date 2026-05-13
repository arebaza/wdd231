const byuiCourse = {
  code: "WDD 231",
  name: "Web Frontend Development I",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Brother Smith"
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sister Jones"
    }
  ],

  changeEnrollment(sectionNum, add = true) {
    const section = this.sections.find(
      (section) => section.sectionNum === sectionNum
    );

    if (section) {
      if (add) {
        section.enrolled++;
      } else if (section.enrolled > 0) {
        section.enrolled--;
      }
    }
  }
};

export default byuiCourse;