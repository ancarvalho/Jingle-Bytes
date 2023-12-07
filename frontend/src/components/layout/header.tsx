import { Link } from "react-router-dom"
import { routes } from "../../utils/routes"

export default function HeaderComponent() {
  return (
    <>
      <header className="min-h-[7vh] bg-slate-800 w-full h-20">
        <nav className="flex justify-between px-2 items-center h-full">
          <LogoSvg />
          <div className="flex gap-3">
            {
              Object.values(routes).map((l) =>
              (
                <Link to={l.route} key={l.route}>

                  <div className="dark:text-white">
                    {l.name}
                  </div>
                </Link>
              )
              )
            }
          </div>
          <div className="">

          </div>
        </nav>


      </header>


    </>
  )
}


const LogoSvg = () => {
  return (
    <svg
      className="dark:fill-white w-16"
      version="1.1"
      viewBox="0 0 152.05 98.945"
      xmlns="http://www.w3.org/2000/svg">

      <g transform="translate(-30.965 -8.7182)">
        <g transform="matrix(.26458 0 0 .26458 48.787 99.181)">
          <path transform="translate(38.348 22.918)" d="m107.62-136.36c-28.363 26.352-43.592 62.845-41.43 101.68 0.98879 17.236 9.872 46.496 32.348 43.622 8.3702-1.1004 14.154-6.0485 18.117-12.669 5e-3 -2.8e-6 0.0101 0.00271 0.0129 6.113e-4l6.8935-19.073c-0.0144 6.16e-4 -0.0291-0.0021-0.0424-0.0013 1.4348-6.7427 2.1536-13.44 2.7371-18.957 1.9556-19.154 3.0467-38.427 6.8159-57.413 3.8826-19.694 11.271-38.19 22.528-54.756 12.19-17.867 28.679-36.158 49.269-44.272 9.1245-3.5986 19.068-4.4656 28.512-1.5537 4.6804 1.4935 9.0059 3.762 12.91 6.5646-0.0148-3e-3 -0.0296-7e-3 -0.0444-0.0115l4.9082 2.9114c0.19139-0.0887 0.36076-0.17388 0.55271-0.26247-9.4978-11.628-22.687-18.997-38.327-18.248-19.457 1.0399-37.18 12.143-51.414 24.762-26.073 23.216-42.526 53.868-48.849 88.018-3.5359 19.077-4.6332 38.51-6.4382 57.829-0.5082 5.5993-1.0158 11.198-2.5476 16.669-1.1545 4.2215-2.8602 10-6.7832 12.503-3.5011 1.9694-7.4183-3.8444-8.809-6.2087-2.8642-4.6533-4.5847-10.042-5.8303-15.409-9.0504-37.27 4.1178-75.367 24.912-105.73z" />
          <path transform="translate(38.348 22.918)" d="m44.718-31.908q-14.4 16.64-34.88 27.2-20.48 10.56-45.12 13.12-15.36 1.6-28.16-0.32-12.8-1.92-22.08-6.4-9.28-4.16-14.72-10.24-5.12-6.08-5.44-13.12-0.32-5.12 3.52-10.88 3.84-6.08 10.56-11.2 7.04-5.12 16.64-8.96 9.92-4.16 21.44-6.08-15.04-3.2-25.28-9.92t-16-14.4q-5.76-8-7.36-16.32-1.28-8.64 1.28-15.68 4.16-10.88 12.8-20.16 8.96-9.6 21.44-16.32t27.84-10.24 32.32-3.2q21.76 0.64 36.48 7.04 15.04 6.4 18.88 20.16 1.6 5.76-2.24 14.4t-12.16 15.36-20.48 8.96q-11.84 2.24-26.24-4.48 11.84-7.36 19.52-16.64 7.68-9.28 7.36-17.92-0.32-7.36-4.8-12.8-4.16-5.44-16.32-5.44-16 0-29.44 5.76-13.12 5.76-22.08 15.36-2.56 2.56-5.12 8.32-2.24 5.44-3.2 12.16-0.64 6.72 1.28 14.08 1.92 7.36 8 13.76t17.28 11.2q11.2 4.48 29.44 5.76 1.92 0 0.96 2.56-0.96 2.24-3.2 5.12t-5.12 5.44q-2.56 2.56-4.48 3.52-8.32 0.96-17.92 4.16-9.28 2.88-17.28 7.68-7.68 4.48-12.48 10.56-4.48 5.76-2.88 11.84 1.6 7.36 11.84 12.48 10.24 4.8 27.84 3.52 8-0.64 16.96-3.2 9.28-2.56 18.24-6.72 9.28-4.48 17.92-10.24 8.96-6.08 16.32-13.44 5.12-5.76 10.56-12.16 5.76-6.72 10.88-13.44 0 0.32 0.64 1.6 0.96 0.96 1.28 2.88 0.64 1.92 0.32 4.48t-2.56 5.44q-3.2 4.48-6.4 8.64-3.2 3.84-6.4 7.36z" opacity=".99" aria-label="E" />
          <path transform="translate(38.348 22.918)" d="m192.23 5.848q-3.52 1.92-9.92 2.88t-13.44-0.32q-6.72-0.96-13.12-5.12t-9.6-12.8q-4.16-11.2-0.64-25.28 3.52-14.4 12.8-26.24 9.28-12.16 23.36-19.52 14.4-7.36 31.68-5.12 10.88 1.6 14.4 6.72 3.52 4.8 4.16 8 1.28 8.32-4.8 16.64-5.76 8-15.04 14.08t-20.48 8.96q-10.88 2.56-19.84 0.32-2.56 11.2-0.64 18.56 1.92 6.72 6.4 8.96 4.8 1.92 10.88 0.32 6.4-1.6 13.44-6.08 7.36-4.8 14.4-11.2 6.4-5.76 12.8-14.08t12.8-16.32q0 0.32 0.96 1.6 0.96 0.96 1.6 2.88t0 4.48q-0.32 2.56-2.56 5.44-12.8 15.68-24 25.6-11.2 9.92-25.6 16.64zm11.84-84.8q-4.8 1.6-9.28 5.76t-8.64 9.92-7.36 12.8q-3.2 6.72-5.44 13.44 6.72-1.92 13.76-6.08t12.48-8.96q5.76-5.12 8.96-10.56t2.88-10.24q0-2.24-1.28-4.8-0.96-2.88-6.08-1.28zm58.879 34.24q9.28-11.84 16-19.84 7.04-8 12.16-12.8 5.44-4.8 9.28-6.4 3.84-1.92 7.04-1.92 9.92 0 11.84 8.96 0.96 3.52 0.32 8.32t-2.56 11.84q-1.92 6.72-5.12 16.32-2.88 9.6-6.72 23.04-2.24 8.96 0.32 8.64t8-6.4q5.76-6.08 13.44-15.68 8-9.92 16-20.16 0 0.32 0.96 1.6 0.96 0.96 1.6 2.88t0 4.48q-0.32 2.56-2.56 5.44-6.4 7.68-11.2 13.76-4.8 5.76-9.28 10.56-4.48 4.8-9.28 8.96-4.48 4.16-10.56 8.32-3.52 2.56-8 2.88-4.16 0.32-8.32-0.96-3.84-1.28-6.72-4.16-2.56-2.88-2.24-6.72 0.64-10.24 3.52-22.08 3.2-12.16 7.68-25.28 1.28-4.16-0.64-5.12-1.6-0.96-5.12 2.56-5.12 5.12-12.48 13.44-7.04 8.32-12.48 15.36l-3.2 12.16q-3.84 14.08-8.32 17.6t-11.84 3.2q-4.8-0.32-7.36-3.2-2.88-2.88-1.6-8.32 1.6-7.68 3.84-16.96 2.24-9.6 5.12-19.84 3.2-10.24 6.72-20.16 3.52-10.24 7.68-19.52 1.6-3.84 5.44-5.12 4.16-1.6 8.32-1.28 4.48 0.32 7.36 1.6 3.2 1.28 2.88 2.56zm117.76-60.16h16q3.52-0.32 5.12 0.64t1.28 2.24-2.24 2.56q-1.92 0.96-5.76 1.28h-16.32l-22.72 80.96q-2.24 8.96 0.32 8.64t8-6.4q5.76-6.08 13.44-15.68 8-9.92 16-20.16 0 0.32 0.96 1.6 0.96 0.96 1.6 2.88t0 4.48q-0.32 2.56-2.56 5.44-6.4 7.68-11.2 13.76-4.8 5.76-9.28 10.56-4.48 4.8-9.28 8.96-4.48 4.16-10.56 8.32-3.2 2.56-7.68 2.88t-8.32-0.96-6.4-4.16q-2.88-2.88-2.56-6.72 0.64-7.36 2.24-15.36t4.16-17.28q4.48-15.68 9.28-32 5.12-16.32 9.6-29.76h-2.24q-6.4 0-6.72-3.2-0.32-3.2 8-3.52h3.2q2.88-8.96 5.76-15.36 1.6-3.84 5.76-5.12t8.32-0.96q4.16 0 7.04 1.28 3.2 1.28 2.88 2.56zm22.72 98.88q1.28 3.52 4.16 5.12 3.2 1.6 5.76 1.6 5.44 0.32 9.28-2.24t5.44-5.44q3.2-4.16 0.96-8t-7.04-7.68-11.52-7.68q-6.4-4.16-11.84-8.32-5.44-4.48-8.64-9.28t-1.6-10.56q3.52-12.48 14.72-20.16 11.52-8 29.44-8.32 16-0.32 24.64 4.48 8.64 4.48 11.2 13.44 1.92 7.36-2.56 13.12-4.16 5.76-11.2 8.96-6.72 3.2-14.72 2.56-7.68-0.64-12.8-6.4 8.32-1.6 12.8-8 4.8-6.72 5.76-13.12 0.32-6.08-2.88-6.72-3.2-0.96-8 1.28-4.48 2.24-9.28 6.4-4.8 3.84-7.04 7.04-3.52 4.48-2.56 8 1.28 3.52 5.12 6.72 3.84 2.88 9.28 6.08 5.44 2.88 10.56 6.4t8.96 8 4.16 10.24q0.96 11.2-9.28 19.2-9.92 7.68-28.48 7.68-8.64 0-15.68-1.6-7.04-1.92-11.84-5.12-4.8-3.52-6.72-8-2.24-4.48-0.64-9.28 1.28-4.8 5.76-8 4.8-3.2 10.56-3.84 6.08-0.96 12.16 0.96 6.4 1.92 10.88 7.36-8.32 1.6-13.76 5.12-5.12 3.2-3.52 8z" opacity=".99" aria-label="ents" />
          <path transform="translate(-1.5748e-7)" d="m142.29-138.53c-45.161-13.133-80.029-26.117-103.96-38.713-13.983-7.36-29.107-17.205-32.747-21.316-9.1256-10.309-6.6151-25.044 5.6236-33.008 7.381-4.8034 24.374-8.9302 51.459-12.497 64.258-8.462 167.22-0.28307 266.64 21.18 67.498 14.572 135.76 40.442 161.96 61.374 6.4088 5.1216 13.291 15.371 14.039 20.907 1.6699 12.362-13.581 23.214-40.018 28.475-14.964 2.9776-40.712 6.3186-44.311 5.7496l-3.4332-0.54287 4.8898-3.8681c11.748-9.2932 10.285-20.994-4.2599-34.07-14.339-12.892-51.943-28.908-92.349-39.334-21.056-5.4333-72.123-12.888-93.624-13.667-35.472-1.2853-64.112 0.58251-80.642 5.2591-15.624 4.4203-28.687 13.669-29.815 21.11-1.4146 9.3313 4.0946 17.436 19.043 28.017 9.2201 6.5265 9.4416 7.2523 1.5098 4.9458zm-77.277-150.46c3.1301-19.695 4.3529-25.524 5.25-25.006 0.64341 0.37107 10.977 3.9148 22.964 7.8749 30.41 10.046 39.902 14.813 35.652 17.902-0.64911 0.47181-11.87 2.8888-24.935 5.3712-34.373 6.5306-31.255 5.3476-32.35 12.274-1.0191 6.4449-3.1189 8.4582-8.0143 7.6842l-2.6468-0.41852zm109.36-8.9966c2.8555-18.135 5.2941-35.594 5.4216-38.799 0.23095-5.7963 0.24347-5.8181 2.3463-4.2252 7.2623 5.5005 25.484 12.505 46.625 17.922 12.493 3.2013 14.183 3.9384 13.85 6.0417-0.21929 1.3868-10.403 5.003-12.997 4.6153-1.4573-0.21848-41.756 7.6089-45.021 8.7438-2.64 0.91781-3.1158 4.0347-3.6108 23.653-0.32001 12.691-1.9078 15.753-7.9367 15.307l-3.8666-0.28636zm90.187 36.304c1.0656-1.987 2.4884-9.5173 4.0619-21.498l2.4218-18.44 2.865 2.4313c4.7843 4.0599 11.662 7.1499 29.176 13.109 19.902 6.7714 24.174 8.5945 25.544 10.9 2.2325 3.7591-0.92538 4.549-41.32 10.335-12.118 1.7359-13.194 2.0852-13.87 4.5053-0.65928 2.3604-1.2237 2.5779-5.6257 2.1693l-4.8928-0.45421z" />
        </g>
      </g>
    </svg>
  )
}