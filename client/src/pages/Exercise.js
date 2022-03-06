import React from 'react'
import ExerciseImg from '../assets/exercise.svg'
import { HiX } from "react-icons/hi";
import { useTranslation } from 'react-i18next'

export const meditationInfo = [
  {
    name: "Guided Meditation for Positive Energy, Relaxation, Peace",
    details: "Guided Meditation for Positive Energy, Relaxation, Peace",
    youTubeUrl: "https://www.youtube.com/embed/86m4RC_ADEY"
  },
  {
    name: "Daily 10 Minutes Meditation",
    details: "Do a daily 10 min. Meditation",
    youTubeUrl: "https://www.youtube.com/embed/syx3a1_LeFo"
  },
];

export default function Exercise() {

  const { t } = useTranslation();

  const [showDetails, setShowDetails] = React.useState(false);
  const [showDetails2, setShowDetails2] = React.useState(false);
  const [showDetails3, setShowDetails3] = React.useState(false);
  const [showDetails4, setShowDetails4] = React.useState(false);

  return (
    <div className='mx-4 pt-8 pb-12'>

      <div className='mx-56 grid place-items-center'>
        <h1 className='text-5xl font-semibold'>{t('navLinkExercise')}</h1>
        <div className="bg-tertiary w-64 h-1 my-2"></div>
      </div>

      <h1 className='text-3xl pl-14 my-4 font-bold'>Meditation</h1>

      <div className="flex flex-wrap justify-around w-full px-6 gap-y-6">

        <div className="flex flex-col justify-center">
          <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto border border-white bg-white">
            <div className="w-full md:w-1/2 grid place-items-center md:drop-shadow-3xl">
              <img src={ExerciseImg} width="600" height="600" alt="img" className="rounded-xl" />
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col p-3">
              <h1 className="font-black text-gray-800 text-2xl">Best exercise for Anxiety and Depression</h1>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg w-36 my-4' onClick={() => setShowDetails2(true)} aria-hidden="false" aria-label="button">View</button>

              {showDetails2 ? (
                <div>
                  <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-24 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative my-6 mx-auto w-screen">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-pink-500 outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-solid rounded-t">
                          <div className="text-2xl font-base tracking-wide cursor-pointer">
                            Best exercise for Anxiety and Depression
                          </div>

                          <button className="absolute right-6" onClick={() => setShowDetails2(false)} aria-hidden="false" aria-label="button">
                            <HiX className="h-7 w-7" aria-hidden="false" />
                          </button>

                        </div>

                        <div className="grid justify-center">
                          <div className="inline-flex w-64 h-1 bg-tertiary rounded-full"></div>
                        </div>

                        <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                        >
                          <iframe src="https://www.youtube.com/embed/sFtP0HWvu0k" height={400} width={700} title="Frame1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                </div>
              ) : null}

            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto border border-white bg-white">
            <div className="w-full md:w-1/2 grid place-items-center md:drop-shadow-3xl">
              <img src={ExerciseImg} width="600" height="600" alt="img" className="rounded-xl" />
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col p-3">
              <h1 className="font-black text-gray-800 text-2xl">Barin exercise to strengthen your mind</h1>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg w-36 my-4' onClick={() => setShowDetails(true)} aria-hidden="false" aria-label="button">View</button>

              {showDetails ? (
                <div>
                  <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-24 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative my-6 mx-auto w-screen">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-pink-500 outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-solid rounded-t">
                          <div className="text-2xl font-base tracking-wide cursor-pointer">
                            Barin exercise to strengthen your mind
                          </div>

                          <button className="absolute right-6" onClick={() => setShowDetails(false)} aria-hidden="false" aria-label="button">
                            <HiX className="h-7 w-7" aria-hidden="false" />
                          </button>

                        </div>

                        <div className="grid justify-center">
                          <div className="inline-flex w-64 h-1 bg-tertiary rounded-full"></div>
                        </div>

                        <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                        >
                          <iframe src="https://www.youtube.com/embed/pCpiteBel8E" height={400} width={700} title="Frame2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                </div>
              ) : null}

            </div>
          </div>
        </div>

      </div>

      <h1 className='text-3xl pl-14 mt-12 mb-4 font-bold'>Body Exercise</h1>

      <div className="flex flex-wrap justify-around w-full px-6 gap-y-6">

        <div className="flex flex-col justify-center">
          <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto border border-white bg-white">
            <div className="w-full md:w-1/2 grid place-items-center md:drop-shadow-3xl">
              <img src={ExerciseImg} width="600" height="600" alt="img" className="rounded-xl" />
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col p-3">
              <h1 className="font-black text-gray-800 text-2xl">Gentel exercise for and relaxation for good health</h1>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg w-36 my-4' onClick={() => setShowDetails3(true)} aria-hidden="false" aria-label="button">View</button>

              {showDetails3 ? (
                <div>
                  <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-24 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative my-6 mx-auto w-screen">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-pink-500 outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-solid rounded-t">
                          <div className="text-2xl font-base tracking-wide cursor-pointer">
                            Gentel exercise for and relaxation for good health
                          </div>

                          <button className="absolute right-6" onClick={() => setShowDetails3(false)} aria-hidden="false" aria-label="button">
                            <HiX className="h-7 w-7" aria-hidden="false" />
                          </button>

                        </div>

                        <div className="grid justify-center">
                          <div className="inline-flex w-64 h-1 bg-tertiary rounded-full"></div>
                        </div>

                        <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                        >
                          <iframe src="https://www.youtube.com/embed/z_JlCQOSI2A" height={400} width={700} title="Frame3" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                </div>
              ) : null}

            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto border border-white bg-white">
            <div className="w-full md:w-1/2 grid place-items-center md:drop-shadow-3xl">
              <img src={ExerciseImg} width="600" height="600" alt="img" className="rounded-xl" />
            </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col p-3">
              <h1 className="font-black text-gray-800 text-2xl">15 min. Daily Workout</h1>
              <button className='bg-secondary py-2 px-8 rounded-md text-lg w-36 my-4' onClick={() => setShowDetails4(true)} aria-hidden="false" aria-label="button">View</button>

              {showDetails4 ? (
                <div>
                  <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-24 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative my-6 mx-auto w-screen">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-pink-500 outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-solid rounded-t">
                          <div className="text-2xl font-base tracking-wide cursor-pointer">
                            15 min. Daily Workout
                          </div>

                          <button className="absolute right-6" onClick={() => setShowDetails4(false)} aria-hidden="false" aria-label="button">
                            <HiX className="h-7 w-7" aria-hidden="false" />
                          </button>

                        </div>

                        <div className="grid justify-center">
                          <div className="inline-flex w-64 h-1 bg-tertiary rounded-full"></div>
                        </div>

                        <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                        >
                          <iframe src="https://www.youtube.com/embed/GS_z6FG_jqE" height={400} width={700} title="Frame4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                </div>
              ) : null}

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
