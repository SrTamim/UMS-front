export default function DeleteStudentGrade() {
  return (
    <>
      <h2>Delete Student Grade</h2>
      <form>
        <div>
          <label htmlFor=" id"> Id</label>
          <input type="text" name=" id" id=" id" />
        </div>
        <button type="submit">Delete Student Grade</button>
      </form>
    </>
  );
}
