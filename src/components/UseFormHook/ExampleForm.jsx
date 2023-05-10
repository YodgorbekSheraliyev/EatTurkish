import useFormHook from "./useFormHook";

const ExampleForm = () => {
    const [formValues, handleChange] = useFormHook({
        name:'',
        email:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
        <label >
            Name: <input type="text" name='name' value={formValues.name} onChange={handleChange} />
        </label>
        <label >
            Email: <input type="email" name='email' value={formValues.email} onChange={handleChange}  />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

export default ExampleForm