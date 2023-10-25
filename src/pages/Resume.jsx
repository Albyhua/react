//exporting data onto our main jxs later
export default function Resume() {
  // const openResume = () => {
  //   window.open("/Profile.pdf", "_blank", "noopener,noreferrer");
  // };

  return (
    <div className="container mt-5 bg-dark rounded-4 text-light">
      <header className="text-center mb-5">
        <h1 className="display-4">Albert Hua</h1>
      </header>

      <section className="mb-5">
        <h2>Summary</h2>
        <p>For the greater good of humanity.</p>
      </section>

      <section className="mb-5">
        <h2>Education</h2>

        <div className="mb-4">
          <h5>University of Pennsylvania eDX</h5>
          <p>Fullstack Web Development</p>
        </div>

        <div>
          <h5>Drexel University</h5>
          <p>
            Bachelor of Science - BS, Health Services/Allied Health/Health
            Sciences, General
          </p>
          <p>2018 - 2021</p>
        </div>
      </section>

      <section className="mb-5">
        <h2>Experience</h2>

        <div className="mb-4">
          <h5>Thomas Jefferson University Hospitals</h5>
          <p>Medical Laboratory Scientist</p>
          <p>November 2022 - Present (1 year)</p>
          <ul>
            <p>
              Operate using EPIC and perform daily maintenance on clinical
              chemistry instruments (Radiometer, Osmometer, Cobas 8100, Cobas
              e411, Cobas 756, Cobas 602).
            </p>
          </ul>
        </div>

        <div className="mb-4">
          <h5>Penn Medicine, University of Pennsylvania Health System</h5>
          <p>Medical Laboratory Scientist</p>
          <p>May 2021 - October 2022 (1 year 6 months)</p>
          <ul>
            <p>Specialized in Hematology and Chemistry</p>
            <p>
              Knowledge of Beckman Coulter analyzers and automation line
              (DxH900, DxI, Au5800/680, Power Express)
            </p>
            <p>
              Performing thousands of patient samples and upkeep with
              turn-around time.
            </p>
          </ul>
        </div>

        <div className="mb-4">
          <h5>Laboratory Assistant</h5>
          <p>January 2021 - May 2021 (5 months)</p>
          <ul>
            <p>Molecular Pathology's Covid-19 division at Penn Medicine</p>
          </ul>
        </div>
      </section>
    </div>
  );
}
