class CurricularComponents extends React.Component {

  constructor() {
    super();
    this.state = { 
      dictionary: {"Disciplina": "disciplina", "Carga": "carga", "Periodo": "periodo"}
    };
  }

  render(){
    return (
      <div>
        asdas
      </div>
      /*
      <div>
        <ul>
        {Object.keys(dictionary).map(key => (
          <li key={key}>
            <strong>{key}:</strong> {dictionary[key]}
          </li>
        ))}
      </ul>
      </div>
      */
    )
  }
}

ReactDOM.render(<CurricularComponents />,document.getElementById('curricularComponents'));