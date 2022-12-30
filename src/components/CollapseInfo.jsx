const CollapseInfo = ({ ...rest }) => {
  return (
    <>
      <p className="d-flex justify-content-center">
        <button
          {...rest}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Tip
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body text-center">
          <p>
            <strong>pass</strong> = (12.5*2).toString();
          </p>
          <p>
            <strong>password = pass + pass + pass;</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default CollapseInfo;
