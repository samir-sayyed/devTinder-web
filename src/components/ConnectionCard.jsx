const ConnectionCard = (user) => {
  console.log(user);
  const { firstName, lastName, age, gender, photo, about } = user.user;
  return (
    <div className="card bg-base-300 h-90 w-96 mt-8 shadow-xl">
      <div className="card-body flex flex-row">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-actions">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          <p>{about}</p>
          {age && <p>Age: {age}</p>}
          {gender && <p>Gender: {gender}</p>}
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
