import React, { useState} from 'react';
// , useHistory

const SignUpForm = ({setUsers}) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    zip_code: '',
    user_name: '',
    password_digest: '',
    current_country: '',
    current_state: '',
    current_city: ''
  });
  // console.log(users)

  // const newUser = {
  //   first_name: first_name,
  //   last_name: last_name,
  //   email: email,
  //   age: age,
  //   zip_code: zip_code,
  //   user_name: user_name,
  //   password: password,
  //   current_country: current_country,
  //   current_state: current_state,
  //   current_city: current_city
  // };

  // const history = useHistory()
  const [errors, setErrors] = useState([])
//   console.log(newUser)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    // console.log(event)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUsers(user);
            // history.push("/login");
          });
        } else {
          res.json().then((json) => setErrors(json.errors));
        }
      });

    // formData(users);
    // use formData to sign up user 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <br />
      <label>
        Zip Code:
        <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} />
      </label>
      <br />
      <label>
        User Name:
        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password_digest" value={formData.password_digest} onChange={handleChange} />
      </label>
      <br />
      <label>
        Current Country:
        <input type="text" name="current_country" value={formData.current_country} onChange={handleChange} />
      </label>
      <br />
      <label>
        Current State:
        <input type="text" name="current_state" value={formData.current_state} onChange={handleChange} />
      </label>
      <br />
      <label>
        Current City:
        <input type="text" name="current_city" value={formData.current_city} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Sign up</button>
      {errors ? errors.map((e) => <div>{e}</div>) : null}
    </form>
  );
}

export default SignUpForm;


