function UncontrolledLogin() {
    function handleFormSubmit (event) {
        event.preventDefault()

        /* const username = event.target.elements.namedItem('username').value
        const password = event.target.elements.namedItem('password').value
        const session = event.target.elements.namedItem('session').checked */

        const formData = new FormData(event.target)

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            session: formData.get('session') === 'on' ? true : false, 
        }

        console.log(data)
    }
  
    return (
    <form onSubmit={handleFormSubmit}>
        <h1>My Uncontrolled Form</h1>
      <input name="username" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button type="reset">Reset</button>
      <button>Login</button>
    </form>
  );
}

export default UncontrolledLogin
