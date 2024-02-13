import React, { useState, useEffect } from "react";
import "./Data.css";
const Data = () => {
    const [title, setTitle] = useState([
        "ID",
        "Name students",
        "Age",
        "Email",
        "",
        "",
    ]);
    const [students, setStudents] = useState([
        {
            _id: 1,
            name: "Huỳnh Vũ Khang",
            age: 17,
            emali: "khang@gmail.com",
        },
        {
            _id: 2,
            name: "Huỳnh Hoàng Anh",
            age: 22,
            emali: "anh@gmail.com",
        },
        {
            _id: 3,
            name: "Đặng Ngọc Chí",
            age: 19,
            emali: "chi@gmail.com",
        },
        {
            _id: 4,
            name: "Phan Thành Đạt",
            age: 17,
            emali: "dat@gmail.com",
        },
    ]);
    const [newId, setNewId] = useState("");
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [editingRow, setEditingRow] = useState("");
    const [darkMode, setDarkMode] = useState(false); // Thêm state cho chế độ tối

    // Thêm useEffect để cập nhật class cho body khi chế độ tối thay đổi
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    const onClickAddStudents = () => {
        let studentsCopy = [...students]; //Tạo một biến mới studentsCopy bằng cách sao chép toàn bộ mảng students hiện tại.
        studentsCopy.push({
            //Sử dụng phương thức push để thêm một object mới vào cuối mảng studentsCopy.
            _id: newId,
            name: newName,
            age: newAge,
            emali: newEmail,
        });
        setStudents(studentsCopy); //Cập nhật state students bằng giá trị mới của studentsCopy. Việc sử dụng spread operator (...) khi sao chép mảng đảm bảo state students được cập nhật đúng cách và kích hoạt việc render lại component với dữ liệu mới.
        setNewId("");
        setNewName("");
        setNewAge("");
        setNewEmail("");
    };
    const onClickUpdateStudents = () => {
        let studentsCopy = [...students];
        let index = students.findIndex((s) => s._id === editingRow); //kiểm tra xem _id của mỗi học sinh có khớp với giá trị editingRow (chính là _id của học sinh đang chỉnh sửa) hay không.
        studentsCopy[index] = {
            _id: newId,
            name: newName,
            age: newAge,
            emali: newEmail,
        };
        setStudents(studentsCopy);
        setNewId("");
        setNewName("");
        setNewAge("");
        setNewEmail("");
    };
    const onChangeNewId = (e) => {
        setNewId(e.currentTarget.value);//này dùng để cập nhật state newId với giá trị mới,
    };
    const onChangeNewName = (e) => {
        setNewName(e.currentTarget.value);
    };
    const onChangeNewAge = (e) => {
        setNewAge(e.currentTarget.value);
    };
    const onChangeNewEmail = (e) => {
        setNewEmail(e.currentTarget.value);
    };
    const onPressEditingRow = (student) => {
        setNewId(student._id);
        setNewName(student.name);
        setNewAge(student.age);
        setNewEmail(student.emali);
        setEditingRow(student._id);
    };
    const onPressDeleteRow = (_id) => {
        let studentsCopy = [...students];
        let index = students.findIndex((s) => s._id === _id);
        studentsCopy.splice(index, 1);
        setStudents(studentsCopy);
    };

    // Hàm để chuyển đổi chế độ giao diện
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <React.Fragment>
            {/* Thêm nút chuyển đổi giữa chế độ sáng và tối */}
            <button onClick={toggleDarkMode}>
                {darkMode ? "Chế độ sáng" : "Chế độ tối"}
            </button>

            {/* Các thành phần khác giữ nguyên */}
            <input
                onChange={onChangeNewId}
                name="id"
                value={newId}
                disabled={editingRow}
                placeholder="Hãy nhập ID"
            />
            <input
                onChange={onChangeNewName}
                name="nameId"
                value={newName}
                placeholder="Hãy nhập tên"
            />
            <input
                onChange={onChangeNewAge}
                name="age"
                value={newAge}
                placeholder="Hãy nhập tuổi"
            />
            <input
                onChange={onChangeNewEmail}
                name="email"
                value={newEmail}
                placeholder="Hãy nhập email"
            />
            {editingRow ? (
                <button onClick={onClickUpdateStudents}>Cập nhật</button>
            ) : (
                <button onClick={onClickAddStudents}>Thêm mới</button>
            )}

            {/* Thêm class "table-dark" khi chế độ tối được kích hoạt */}
            <table className={darkMode ? "table-dark" : ""}>
                <tr>
                    {title.map((t) => {
                        return <th key={t}>{t}</th>;
                    })}
                </tr>
                {students.map((s) => {
                    return (
                        <tr key={s._id}>
                            <td key={s._id}>{s._id}</td>
                            <td key={s.name}>{s.name}</td>
                            <td key={s.age}>{s.age}</td>
                            <td key={s.emali}>{s.emali}</td>
                            <td>
                                <button onClick={(e) => onPressEditingRow(s)}>
                                    Chỉnh sửa
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={(e) => onPressDeleteRow(s._id)}
                                >
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </React.Fragment>
    );
};

export default Data;
