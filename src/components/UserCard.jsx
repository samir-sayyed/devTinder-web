const UserCard = ({user}) => {
    console
    const {firstName, lastName, age, gender, photo, about } = user
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-8">
      <figure>
        <img
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName} {lastName}</h2>
        <p>{about}</p>
        {age && <p>Age: {age}</p>}
        {gender && <p>Gender: {gender}</p>}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
