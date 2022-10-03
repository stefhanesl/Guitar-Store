
export default function Formulario({ getDataForm }) {

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      getDataForm(e);

    }}>
      <input type='text' placeholder='Escriba su nombre...' />
      <input type='text' placeholder='Escriba su telefono...' />
      <input type='text' placeholder='Escriba su email...' />
      <button type='submit'>ENVIAR</button>
    </form>
  )
}
