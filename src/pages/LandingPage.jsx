import Banner from '../components/Banner';
import JobCard from '../components/JobCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearch, fetchJobs } from '../store/actionCreator';
import Loading from '../components/Loading';
import CompaniesBanner from '../components/CompaniesBanner';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.job);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchJobs({ limit: 4 })).finally(() => {
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    dispatch(
      addSearch({
        companyId: '',
        keyword: '',
      })
    );
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div
        className="container-fluid p-5 h-100"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-colorful-shapes-background_361591-2850.jpg?w=1380&t=st=1696237274~exp=1696237874~hmac=9b27af49f27dbd96e13ac3e0bd5a57c20092d486e08d0f1232ca464b956b455a)',
        }}>
        <div>
          <div className="text-center mb-4 mt-3 text-light">
            <h5>Dapatkan pekerjaan yang berarti bagimu</h5>
          </div>
          <Link to={'/job'} className="text-decoration-none">
            <Banner />
          </Link>
        </div>
      </div>

      <div className="container mt-5">
        <div className="bg-white p-3 rounded mb-5">
          <img
            src="https://img.freepik.com/free-vector/3d-cartoon-style-checklist-with-pen-icon-curved-sheet-paper-list-with-completed-tasks-flat-vector-illustration-time-management-planning-organization-concept_778687-984.jpg?w=740&t=st=1696692650~exp=1696693250~hmac=0bd89298c0a172a4a8f0c6e3dc60707bb635f1c5dc8d965ba1bcc36a6696e9e8"
            style={{ maxHeight: '50px', maxWidth: '50px' }}
          />
          <span className="text-primary fw-bold ms-1">Daftar</span> sekarang untuk menemukan lowongan yang dipilih hanya untukmu
        </div>
        <div className="row">
          <div className="col-6 h6 mb-4">Lowongan pekerjaan terbaru</div>
          <div className="col-6 mb-4 text-primary text-end fw-bold pe-4">
            <Link to={'/job'} className="text-decoration-none">
              Lihat semua lowongan &gt;
            </Link>{' '}
          </div>
          <div className="mx-auto row">
            {jobs.map((job, i) => {
              return (
                <div className="col-3" key={i}>
                  <JobCard job={job} />
                </div>
              );
            })}
          </div>
          <div className="bg-white">
            <CompaniesBanner />
          </div>
          <div className="text-center w-100 mt-5">
            <img src="https://tpc.googlesyndication.com/simgad/7314538218235753941?" alt="banner-bottom" style={{ maxWidth: '60vw' }} />
          </div>
        </div>
      </div>
    </>
  );
}
