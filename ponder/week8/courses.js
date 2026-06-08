const aCourse = {
  code: 'CSE121b',
  name: 'Javascript Language',
  logo: 'images/js-logo.png',
  sections: [
    { sectionNum: 1, roomNum: 'STC 215', enrolled: 37, days: 'MW', instructor: 'Bro A'},
    { sectionNum: 2, roomNum: 'ROM 128', enrolled: 27, days: 'M-F', instructor: 'Bro C'},
    { sectionNum: 3, roomNum: 'STC 361', enrolled: 32, days: 'MW', instructor: 'Sis A'},
    { sectionNum: 4, roomNum: 'TAY 144', enrolled: 28, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 5, roomNum: 'STC 341', enrolled: 11, days: 'TTh', instructor: 'Bro G'},
    { sectionNum: 6, roomNum: 'ONLINE', enrolled: 28, days: 'N/A', instructor: 'Bro G'},
    // { sectionNum: 7, roomNum: 'BYUI 101', enrolled: 3.14159265358, days: 'F', instructor: 'Alvin F. Meredith'},
    // { sectionNum: 7, roomNum: 'The Gospel', enrolled: 8296294606, days: 'Every day', instructor: 'Jesus'}
    ],
  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  }
};

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});