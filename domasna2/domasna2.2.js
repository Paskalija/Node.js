function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) return grade
        let newGrade = Math.ceil(grade/5)*5
        if ((newGrade + 5) > grade) {
            console.log(newGrade,grade)
            return newGrade - grade < 3 ? newGrade : grade
        } else {
            return ((newGrade + 10) - grade) < 3 ? newGrade : grade
        }
    })
}
