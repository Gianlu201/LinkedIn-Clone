import { useSelector } from 'react-redux';

export default function ExperienceModalEdit() {
  const experiences = useSelector((state) => {
    return state.experience;
  });

  const currentDate = (startDate, endDate) => {
    const data = new Date(startDate.slice(0, 10));
    let data2;
    if (endDate) {
      data2 = new Date(endDate.slice(0, 10));
    } else {
      data2 = new Date();
    }

    const years = Math.floor(
      parseInt(data2 - data) / 1000 / 60 / 60 / 24 / 30 / 12
    );
    const months = Math.floor(
      parseInt(data2 - data) / 1000 / 60 / 60 / 24 / 30 - years * 12
    );

    if (years < 1) {
      return `${months} mos`;
    } else if (months < 1) {
      return `${years} yr`;
    } else {
      return `${years} yr ${months} mos`;
    }
  };

  return (
    <div
      className='modal fade'
      id='ExperienceModalEdit'
      tabIndex='-1'
      aria-labelledby='ExperienceModalEditLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='ExperienceModalEditLabel'>
              Edit experiences
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              id='closeExperienceModal'
            ></button>
          </div>
          <div className='modal-body modalHeight'>
            {experiences.length > 0 ? (
              <div>
                {experiences.map((exp, i) => {
                  return (
                    <div key={exp._id}>
                      <div className='d-flex ms-2'>
                        <div className='pe-0 me-lg-3'>
                          <img
                            src={exp.image}
                            alt=''
                            style={{ width: '48px', height: '50px' }}
                          />
                        </div>
                        <div className=' flex-grow-1 d-flex justify-content-between ps-0 pe-2'>
                          <div>
                            <h4 className='fw-bold fs-6'>{exp.role}</h4>
                            <p className='descriptions'>{exp.company}</p>
                            <p className='descriptions text-secondary'>
                              {exp.startDate.slice(0, 10)} -{' '}
                              {exp.endDate?.slice(0, 10) || 'Present'} ·{' '}
                              {currentDate(exp.startDate, exp.endDate)}
                            </p>
                            <p className='descriptions text-secondary'>
                              {exp.area}
                            </p>
                          </div>
                          <div>
                            <button className='border-0 btn btn-sm'>
                              <i className='bi bi-pencil fs-5'></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      {i < experiences.length - 1 && <hr />}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>No experiences in your profile</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
