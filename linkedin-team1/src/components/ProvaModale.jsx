import { Form } from "react-bootstrap";
import { useState } from "react";

const ProvaModale = () => {
  const initialExperience = {
    role: "",
    company: "",
    startDate: "",
    endDate: null,
    description: "",
    area: "",
    image:
      "https://demo.studiopress.com/page-builder/gb-square-placeholder.jpg",
  };

  const [experience, setExperience] = useState(initialExperience);

  const [current, setCurrent] = useState(true);

  //   const putProfile = async () => {
  //     try {
  //       const response = await fetch(url, {
  //         method: "PUT",
  //         body: JSON.stringify(user),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (response.ok) {
  //         let data = await getProfile();
  //         dispatch({
  //           type: "GET_PROFILE",
  //           payload: data,
  //         });
  //         props.setModal(false);
  //       } else {
  //         throw new Error("Errore nel recupero dei dati");
  //       }
  //     } catch (error) {
  //       console.log("errore", error);
  //     }
  //   };

  return (
    <div
      className="modal fade"
      id="exampleModal2"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel2">
              Add experience
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body modalHeight">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p className=" text-secondary mb-4 small">
                  {" "}
                  * indicates required
                </p>
                <Form.Label className=" text-secondary">Title*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: retail sales manager"
                  value={experience.role}
                  onChange={(e) => {
                    setExperience({ ...experience, role: e.target.value });
                  }}
                />

                <Form.Label className="mt-1 text-secondary">
                  Company or Oraganization*
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: Microsoft"
                  value={experience.company}
                  onChange={(e) => {
                    setExperience({ ...experience, company: e.target.value });
                  }}
                />
                <div className="mt-3">
                  <input
                    type="checkbox"
                    checked={current}
                    onClick={() => {
                      setCurrent(!current);
                    }}
                  />
                  <Form.Label className="mt-1 ms-2 text-secondary">
                    I am currently working in this role
                  </Form.Label>
                </div>

                <div className=" mb-3">
                  <Form.Label className="mt-1 text-secondary">
                    Start date*
                  </Form.Label>
                  <div className=" d-flex justify-content-between">
                    <select name="Month" className=" w-50 me-2 p-1">
                      <option>Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>

                    <select name="Year" className=" w-50">
                      <option>Year</option>
                      <option value="2000">2000</option>
                      <option value="2001">2001</option>
                      <option value="2002">2002</option>
                      <option value="2003">2003</option>
                      <option value="2004">2004</option>
                      <option value="2005">2005</option>
                      <option value="2006">2006</option>
                      <option value="2007">2007</option>
                      <option value="2008">2008</option>
                      <option value="2009">2009</option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>
                </div>

                {!current && (
                  <div className=" mb-3">
                    <Form.Label className="mt-1 text-secondary">
                      End date*
                    </Form.Label>
                    <div className=" d-flex justify-content-between">
                      <select name="Month" className=" w-50 me-2 p-1">
                        <option>Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>

                      <select name="Year" className=" w-50">
                        <option>Year</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                      </select>
                    </div>
                  </div>
                )}

                <Form.Label className="mt-1 text-secondary">
                  Location*
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: London, United Kingdom"
                  value={experience.area}
                  onChange={(e) => {
                    setExperience({ ...experience, area: e.target.value });
                  }}
                />

                <Form.Label className="mt-1 text-secondary">
                  Description*
                </Form.Label>
                <Form.Control
                  as={"textarea"}
                  placeholder="List your major duties and successes, highlighting specific projects"
                  value={experience.description}
                  onChange={(e) => {
                    setExperience({
                      ...experience,
                      description: e.target.value,
                    });
                  }}
                />

                <h5 className="mt-3">Media</h5>
                <p>Add image</p>
                <Form.Control
                  type="text"
                  placeholder="ex: 'https://demo.studiopress.com/page-builder/gb-square-placeholder.jpg'"
                  value={experience.image}
                  onChange={(e) => {
                    setExperience({ ...experience, image: e.target.value });
                  }}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary rounded-5 btn-sm px-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvaModale;
