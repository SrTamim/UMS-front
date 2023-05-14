export default function AddStudentGrade() {
  return (
    <>
      <h2>Add Student Grade</h2>
      <form>
        <div>
          <label htmlFor=" id"> Id</label>
          <input type="text" name=" id" id=" id" />
        </div>
        <div>
          <label htmlFor=" studentId"> Student Id</label>
          <input type="text" name=" studentId" id=" studentId" />
        </div>
        <div>
          <label htmlFor=" courseId"> Course Id</label>
          <input type="text" name=" courseId" id=" courseId" />
        </div>
        <div>
          <label htmlFor=" grade"> Grade</label>
          <input type="text" name=" grade" id=" grade" />
        </div>
        <button type="submit">Add Student Grade</button>
      </form>
    </>
  );
}
