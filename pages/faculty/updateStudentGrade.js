export default function UpdateStudentGrade() {
  return (
    <>
      <h2>Update Student Grade</h2>
      <form>
        <div>
          <label htmlFor=" id"> Id</label>
          <input type="text" name=" id" id=" id" />
        </div>
        <div>
          <label htmlFor=" grade"> Grade</label>
          <input type="text" name=" grade" id=" grade" />
        </div>
        <button type="submit">Update Student Grade</button>
      </form>
    </>
  );
}
