function DPropiedad(props) {
  return (
    <div className="DPropiedad">
      <div>
        <h2>Descripción</h2>
        <div>
          <span>
            { props?.texto}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DPropiedad;
