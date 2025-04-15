import React from "react";

const UserProfile = () => {
  //dummy data
  const user = {
    name: "Ram Sam",
    email: "ram@gmail.com",
    phone: "9876543210",
    age: 33,
    address: "Kathmandu, Nepal",
    image: "https://avatar.iran.liara.run/public/4",
    history: [
      { id: 1, activity: "Healing Session", startTime:"10:00 AM", endTime:"11:00AM", date: "2025-05-15" },
      { id: 2, activity: "Workshop", startTime:"10:00 AM", endTime:"11:00AM", date: "2025-04-22" },
      { id: 3, activity: "Treatment", startTime:"10:00 AM", endTime:"11:00AM", date: "2023-03-10" },
      { id: 4, activity: "Booking", startTime:"10:00 AM", endTime:"11:00AM", date: "2025-02-28" },
    ],
  };

  return (
    <>
      <div style={{ background: "#FFF7F0", fontFamily: "Poppins" }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="text-center mb-4 fw-bold">User Profile</h1>

              {/* user profile */}
              <div className="card mb-4 shadow-sm border rounded-4">
                <div className="card-body">
                  <div className="row">
                    {/* pp */}
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                      <img
                        src={user.image}
                        className="rounded-circle border img-fluid p-1 mt-4"
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                          background: "#DDA15E",
                        }}
                        alt="Profile"
                      />
                    </div>

                    {/* user details */}
                    <div className="col-md-8">
                      <h2 className="fs-4 fw-bold">{user.name}</h2>
                      <hr />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="fw-bold">Email:</span>
                          <span>{user.email}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="fw-bold">Phone:</span>
                          <span>{user.phone}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="fw-bold">Age:</span>
                          <span>{user.age}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <span className="fw-bold">Address:</span>
                          <span className="text-end">{user.address}</span>
                        </li>
                      </ul>
                      {/* <div className="mt-3 d-flex gap-2">
                    <button className="btn btn-primary">Edit Profile</button>
                    <button className="btn btn-outline-secondary">Change Password</button>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* user histiry */}
              <div className="card shadow-sm border">
                <div className="card-header bg-light">
                  <h3 className="m-2 fs-4 fw-bold d-flex justify-content-center">
                    Activity History
                  </h3>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="ps-4">SN</th>
                          <th>Activity</th>
                          <th>Start Time</th>
                          <th>End Time</th>
                          <th className="">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.history.map((activity, index) => (
                          <tr key={activity.id}>
                            <td className="ps-4">{index + 1}</td>
                            <td>
                              <p className="mb-0 fw-bold">
                                {activity.activity}
                              </p>
                            </td>

                            <td className="">
                              <span className="text-muted">
                                {activity.startTime}
                              </span>
                            </td>
                            <td className="">
                              <span className="text-muted">
                                {activity.endTime}
                              </span>
                            </td>
                            <td className="">
                              <span className="text-muted">
                                {activity.date}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
