function InstruccionesCalorias() {
    return (
      <center>
        <div className="bg-slate-800 text-white p-10 m-10">
          <h1 className="text-3xl text-cyan-400">INSTRUCCIONES:</h1>
          <p className="text-2xl">
            El siguiente botón te llevará a un chat con inteligencia artificial
            (IA) dónde podrás crear un plan de entrenamiento en base a tus objetivos. <br />
            <br />
            <b>EJEMPLO:</b>
            <br />
            <br />
            <ul>
              <li>"Plan de entrenamiento Crossfit"</li>
              <br />
              <li>"Plan de entrenamiento musculación"</li>
              <br />
              <li>"Plan de entrenamiento fútbol"</li>
              <br />
              <li className="text-sky-400">Nota: Recuerda que siempre es importante consultar a un profesional antes de cambiar cualquier plan.</li>
            </ul>
            <br />
          </p>
          
          
  
          <a
            href="https://chat.openai.com/chat?__cf_chl_rt_tk=6xJ32.jDgWRcAuLusy7wBUpImp8ZU5Qs9PY0D4lSKC8-1678335307-0-gaNycGzNFpA"
            className="border rounded text-2xl p-3 bg-sky-400 text-slate-800 hover:bg-white"
          >
            <button className="btn p-2 ">Crear plan de entrenamiento</button>
          </a>
        </div>
      </center>
    );
  }
  
  export default InstruccionesCalorias;
  