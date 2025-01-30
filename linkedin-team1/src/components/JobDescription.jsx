/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const JobDescription = () => {
  const params = useParams();

  const [selectedJob, setSelectedJob] = useState({});

  const getJob = async () => {
    const URL = `https://strive-benchmark.herokuapp.com/api/jobs?company=${params.company}`;

    try {
      const response = await fetch(URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        const arr = data.data;
        arr.forEach((element) => {
          console.log(element._id);
          if (element._id == params.jobId) {
            setSelectedJob(element);
          }
        });
      } else {
        throw new Error('errore nel recupero dati');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJob();
  }, [params.jobId]);

  return (
    <Container
      className={' bg-white '.concat(selectedJob?._id ? 'd-block' : 'd-none')}
    >
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>
          <img
            src='https://media.licdn.com/dms/image/v2/D4D0BAQGIhX3bWhxh9w/company-logo_100_100/company-logo_100_100/0/1725522409182/selectra_logo?e=1746057600&v=beta&t=gjqQiU10CokbqAXwYwtfn7BmR5SoUtFnOvvcWIn_TXI'
            alt='logoComp'
          />
          <h5>
            <a href={`${selectedJob.url}`} target='_blank'>
              {selectedJob.company_name}
            </a>
          </h5>
        </div>

        <div className='d-flex'>
          <div className=' dropdown '>
            <Button
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
              className=' btn bg-transparent border-0'
            >
              <i className='bi bi-arrow-90deg-right text-black'></i>
            </Button>

            <ul className='dropdown-menu dropdown-menu-end'>
              <li>
                <h6 className='dropdown-header'>Share on LinkenIn</h6>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  <i className='bi bi-pencil'></i>
                  Report to Feed
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  <i className='bi bi-send-fill'></i>
                  Send in a message
                </a>
              </li>
              <li>
                <hr className='dropdown-divider' />
              </li>

              <li>
                <h6 className='dropdown-header'>Other options</h6>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  <i className='bi bi-send-fill'></i>
                  Copy link
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  <i className='bi bi-twitter-x'></i> X, formerly Twitter
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  <i className='bi bi-facebook'></i>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className=' dropdown'>
            <Button
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
              className=' btn bg-transparent border-0'
            >
              <i className='bi bi-three-dots text-black'></i>
            </Button>
            <ul className='dropdown-menu dropdown-menu-end'>
              <li>
                <a className='dropdown-item' href='#'>
                  <i className='bi bi-pencil-square'></i>
                  Send feedback
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  <i className='bi bi-flag-fill'></i>
                  Report this job
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3>{selectedJob.title}</h3>
      {/* TODO importare funzione per calcolare il tempo */}
      {/* TODO inserire numero random nel 100 */}
      <p>
        {selectedJob.candidate_required_location} · Reposted 5d ago · Over 100
        applicants{' '}
      </p>
      <p>
        <i className='bi bi-briefcase-fill'></i>
        {selectedJob.job_type}
      </p>
      <p>
        <i className='bi bi-check-circle'></i>Applicant review time is typically
        3 days <a>Learn more</a>
      </p>
      <p>
        <i className='bi bi-lightbulb'></i> See how you compare to other 100
        other applicants. <a>Try Premium for €0 </a>
      </p>
      <p>
        <i className='bi bi-tags'></i> {selectedJob.category}
      </p>
    </Container>
  );
};

export default JobDescription;
