import * as projects from "../assets";
  // A single Project component that will be used multiple times in the Portfolio section
function Project({ project }) {
    const { name, repo, link, description, image } = project;
  
    return (
      <div className="card p-3 mb-4">
        <img
          src={projects[image]}
          alt={name}
          className="card-img-top img-fluid"
          style={{ maxHeight: '200px', objectFit: 'cover' }}  // To ensure consistent size
        />
        <div className="card-body">
          <h3 className="card-title">
            <a href={link} className="mr-2">{name}</a>
            <a href={repo} className="text-muted">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
}

export default Project;
