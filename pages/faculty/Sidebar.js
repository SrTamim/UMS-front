import { useState } from "react";
import Link from "next/link";
import Login from "../admin/signin";
import Register from "../register";
import AddNotice from "./addnotice";
import UpdateNotice from "./updatenotice";
import AllNotice from "./allNotice";
import DeleteNotice from "./deletenotice";
import RequestRoom from "./Requstroom";
import UpdateRequestRoom from "./updateRequstroom";
import DeleteRequestRoom from "./deleteRequstroom";
import AllRequestRoom from "./allRequstroom";
import AddStudentGrade from "./addStudentGrade";
import UpdateStudentGrade from "./updateStudentGrade";
import DeleteStudentGrade from "./deleteStudentGrade";
import AllStudentGrade from "./allStudentGrade";

function Sidebar({ onButtonClick }) {
  return (
    <div className="sidebar">
      <button onClick={() => onButtonClick(1)}>Add Notice</button>
      <button onClick={() => onButtonClick(2)}>Upadate Notice</button>
      <button onClick={() => onButtonClick(3)}>Delete Notice</button>
      <button onClick={() => onButtonClick(4)}>Show all Notice</button>
      <button onClick={() => onButtonClick(5)}>Request Room</button>
      <button onClick={() => onButtonClick(6)}>Upadate Request Room</button>
      <button onClick={() => onButtonClick(7)}>Delete Request Room</button>
      <button onClick={() => onButtonClick(8)}>Show all Request Room</button>
      <button onClick={() => onButtonClick(9)}>Add Student Grade</button>
      <button onClick={() => onButtonClick(10)}>Update Student Grade</button>
      <button onClick={() => onButtonClick(11)}>Delete Student Grade</button>
      <button onClick={() => onButtonClick(12)}>Show all Student Grade</button>
      <button onClick={() => onButtonClick(13)}>Sing In</button>
      <button onClick={() => onButtonClick(14)}>Sing Up</button>
    </div>
  );
}

function DataDisplay({ selectedButton }) {
  if (selectedButton === null) {
    return <div className="data-display">Select a button</div>;
  }
  if (selectedButton === 1) {
    return <AddNotice />;
  }
  if (selectedButton === 2) {
    return <UpdateNotice />;
  }
  if (selectedButton === 3) {
    return <DeleteNotice />;
  }
  if (selectedButton === 4) {
    return <AllNotice />;
  }
  if (selectedButton === 5) {
    return <RequestRoom />;
  }
  if (selectedButton === 6) {
    return <UpdateRequestRoom />;
  }
  if (selectedButton === 7) {
    return <DeleteRequestRoom />;
  }
  if (selectedButton === 8) {
    return <AllRequestRoom />;
  }
  if (selectedButton === 9) {
    return <AddStudentGrade />;
  }
  if (selectedButton === 10) {
    return <UpdateStudentGrade />;
  }
  if (selectedButton === 11) {
    return <DeleteStudentGrade />;
  }
  if (selectedButton === 12) {
    return <AllStudentGrade />;
  }
  if (selectedButton === 13) {
    return <Login />;
  }
  if (selectedButton === 14) {
    return <Register />;
  }
  return (
    <div className="data-display">
      <h1>Data for Button {selectedButton}</h1>
      <p>This is the data for button {selectedButton}</p>
    </div>
  );
}

export default function Index() {
  const [selectedButton, setSelectedButton] = useState(null);

  const onButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <>
      <Sidebar onButtonClick={onButtonClick} />
      <DataDisplay selectedButton={selectedButton} />
    </>
  );
}
