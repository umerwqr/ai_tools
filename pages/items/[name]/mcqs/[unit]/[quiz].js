import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import WebFooter from '@/components/WebFooter'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router';
export default function Quiz() {

  const router = useRouter();
  const { unit_id, program_id, subject_id } = router.query;

  const [mcqs, setMcqs] = useState(null);

  const [question, setQuestion] = useState();
  const [eachMcq, setEachMcq] = useState(null);
  const [check, setCheck] = useState(true);
  const handleEachMcq = () => {
    if (mcqs && mcqs.length > i) {

      setEachMcq(mcqs && mcqs[i])
      setI(i + 1)
    }
    else {
      setCheck(false)

    }
  }
  const [i, setI] = useState(1)

  useEffect((e) => {
    const getData = async () => {
      try {

        const response = await axios.post('/api/get_mcqs', { key: 'Vx0cbjkzfQpyTObY8vfqgN1us', unit_id: unit_id, program_id: program_id, subject_id: subject_id })
        
        setMcqs(response.data.mcqs)

      } catch (error) {
        console.log(error)
      }

    }
    getData();
  }, [])
  const quizData = [
    {
      question: 'After lower premolar extraction patient feels numbness in right side of lower lip. Which nerve is affected?',
      options: [
        'A) Articular cartilage and synovial membrane.',
        'B) Synovial membrane and capsule.',
        'C) Capsule and ligaments.',
        'D) Ligaments and articular discs.',
      ],
      correctAnswer: 'C) Capsule and ligaments.',
    },
    {
      question: 'After lower premolar extraction patient feels numbness in right side of lower lip. Which nerve is affected?',
      options: [
        'A) Articular cartilage and synovial membrane.',
        'B) Synovial membrane and capsule.',
        'C) Capsule and ligaments.',
        'D) Ligaments and articular discs.',
      ],
      correctAnswer: 'C) Capsule and ligaments.',
    },
    {
      question: 'After lower premolar extraction patient feels numbness in right side of lower lip. Which nerve is affected?',
      options: [
        'A) Articular cartilage and synovial membrane.',
        'B) Synovial membrane and capsule.',
        'C) Capsule and ligaments.',
        'D) Ligaments and articular discs.',
      ],
      correctAnswer: 'C) Capsule and ligaments.',
    },
    {
      question: 'After lower premolar extraction patient feels numbness in right side of lower lip. Which nerve is affected?',
      options: [
        'A) Articular cartilage and synovial membrane.',
        'B) Synovial membrane and capsule.',
        'C) Capsule and ligaments.',
        'D) Ligaments and articular discs.',
      ],
      correctAnswer: 'C) Capsule and ligaments.',
    },
    {
      question: 'After lower premolar extraction patient feels numbness in right side of lower lip. Which nerve is affected?',
      options: [
        'A) Articular cartilage and synovial membrane.',
        'B) Synovial membrane and capsule.',
        'C) Capsule and ligaments.',
        'D) Ligaments and articular discs.',
      ],
      correctAnswer: 'C) Capsule and ligaments.',
    },
    {
      question: 'After lower premolar extraction patient feels numbness in right side of lower lip. Which nerve is affected?',
      options: [
        'A) Articular cartilage and synovial membrane.',
        'B) Synovial membrane and capsule.',
        'C) Capsule and ligaments.',
        'D) Ligaments and articular discs.',
      ],
      correctAnswer: 'C) Capsule and ligaments.',
    },
    {
      question: 'After lower premolar extraction patient feels numbness in right side of lower lip. Which nerve is affected?',
      options: [
        'A) Articular cartilage and synovial membrane.',
        'B) Synovial membrane and capsule.',
        'C) Capsule and ligaments.',
        'D) Ligaments and articular discs.',
      ],
      correctAnswer: 'C) Capsule and ligaments.',
    },

  ]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
  const [isTimeUp, setTimeUp] = useState(false);
  const [timer, setTimer] = useState(30 * 60); // 30 minutes in seconds

  // Effect to handle the timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(timerInterval);
        setTimeUp(true);
        message.error("Time's Up!");
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer]);

  const handleOptionClick = (selectedOption) => {
    if (isTimeUp || userAnswers[currentQuestionIndex] !== '') {
      // Prevent answering after time's up or if already answered
      return;
    }

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };


  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSkipQuestion = () => {
    // Mark the current question as skipped
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = 'skipped';
    setUserAnswers(newAnswers);

    // Move to the next question
    handleNextQuestion();
  };

  const skippedQuestions = userAnswers.filter((answer) => answer === 'skipped').length;
  const totalQuestions = quizData.length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === quizData[index].correctAnswer
  ).length;
  const wrongAnswers = totalQuestions - skippedQuestions - correctAnswers;

  return (
    <>
      <div className=' relative'>
        <div className="absolute z-[-10] w-[100%] h-[400px]">
          <Image src="/images/bg.svg" layout="fill" alt='Image' // This tells Next.js to fill the parent container
            objectFit="cover" className="absolute top-0" />
        </div>
        <div className=" w-full z-10 flex flex-col items-center text-white py-[1rem] sm:py-[3rem] px-4">
          <div className="flex flex-wrap justify-center items-center space-y-2 lg:space-y-0 lg:space-x-5 w-full">

            <div className="rounded-md bg-white w-full lg:w-[38%] flex justify-center py-4 px-5">
              <Image src="/images/logo.svg" width={80} height={80} alt="logo" />
            </div>
            <div className="hidden rounded-md border border-[#FFFFFF] py-4 px-5 w-full lg:w-auto  sm:flex sm:flex-col items-center">
              <h1>Skipped</h1>
              <p>{skippedQuestions}</p>
            </div>
            <div className="rounded-md border border-[#FFFFFF] py-4 px-5 w-full lg:w-auto flex flex-col items-end">
              <div className="flex sm:hidden">
                <h1>Skipped</h1>
                <p className="ml-2">{skippedQuestions}</p>
              </div>
              <h1>Total MCQs</h1>
              <p>{mcqs && mcqs.length}</p>
            </div>

          </div>

          <div className="bg-white w-full sm:w-[80%] lg:w-[700px] rounded-lg text-black py-5 px-[1.5rem] my-[3rem] shadow-md ">
            <div className="flex  items-center justify-center w-full space-x-6">
              Question
            </div>
            <div className="my-6  md:mx-[2rem] font-[500] text-[18px]">

              {
                check ?
                  <>{eachMcq ? eachMcq.question : mcqs && mcqs[0].question}</> : <> Questions Ended</>

              }
            </div>
          </div>
          <div className="text-black w-full flex justify-center items-center md:space-x-6 md:px-[2rem]">
            <div className="border border-[#0000001A] w-[200px] rounded-md px-2 hidden lg:flex items-center lg:flex-col">
              <Image src="/images/portrait.svg" width={140} height={140} />
              <div className="flex flex-col items-center text-center">
                <h1 className="font-[600] my-4">Are you an Enterpreneur?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <Link href="#" className="rounded-md my-3 bg-[#16213E] text-white py-2 px-7 font-[500] text-[18px]" >Next Que</Link>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-col ">
                <div className="flex flex-col font-[500] text-[18px] space-y-5 mt-14">
                  {
                    check ?
                      <>
                        {mcqs &&
                          <>


                            <div
                              className={`rounded-lg border py-3 px-3 flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md cursor-pointer ${eachMcq && eachMcq.mcq1 === eachMcq.answer || eachMcq === null && mcqs && mcqs[0].mcq1 === mcqs[0].answer ? "bg-slate-300" : "bg-white"}`}

                            >

                              A) {eachMcq ? eachMcq.mcq1 : mcqs && mcqs[0].mcq1}
                            </div>
                            <div
                              className={`rounded-lg border py-3 px-3 flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md cursor-pointer  ${eachMcq && eachMcq.mcq2 === eachMcq.answer || eachMcq === null && mcqs && mcqs[0].mcq2 === mcqs[0].answer ? "bg-slate-300" : "bg-white"}`}

                            >
                              B) {eachMcq ? eachMcq.mcq2 : mcqs && mcqs[0].mcq2}
                            </div>
                            <div
                              className={`rounded-lg border py-3 px-3 flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md cursor-pointer ${eachMcq && eachMcq.mcq3 === eachMcq.answer || eachMcq === null && mcqs && mcqs[0].mcq3 === mcqs[0].answer ? "bg-slate-300" : "bg-white"}`}

                            >
                              C) {eachMcq ? eachMcq.mcq3 : mcqs && mcqs[0].mcq3}
                            </div>
                            <div
                              className={`rounded-lg border py-3 px-3 flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md cursor-pointer ${eachMcq && eachMcq.mcq4 === eachMcq.answer || eachMcq === null && mcqs && mcqs[0].mcq4 === mcqs[0].answer ? "bg-slate-300" : "bg-white"}`}

                            >
                              D) {eachMcq ? eachMcq.mcq4 : mcqs && mcqs[0].mcq4}
                            </div>
                          </>
                        }
                      </> : <>
                        No Option because Questions Ended
                      </>
                  }


                </div>

                <div className="flex w-full justify-between my-4">
                  <button onClick={handleSkipQuestion} className="bg-[#1F5689] py-2 px-7 rounded-md text-white font-[500] text-[18px] hover:bg-[#268FDA] hover:shadow-md transition duration-300 ease-in-out">Skip</button>
                  <button onClick={handleEachMcq} disabled={currentQuestionIndex === quizData.length - 1} className="bg-[#D7392B] py-2 px-5 rounded-md text-white font-[500] text-[18px] hover:bg-[#FF4D38] hover:shadow-md transition duration-300 ease-in-out" >Next Que</button>
                </div>

              </div>
              <div className="bg-[#146B53] rounded-md py-4 px-4 flex flex-wrap justify-evenly mt-8">
                <div><button className="rounded-full py-4 px-4 bg-white"><Image src="/images/btn1.svg" width={15} height={15} /></button></div>
                <div><button className="rounded-full py-4 px-4 bg-white"><Image src="/images/btn2.svg" width={12} height={12} /></button></div>
                <div><button className="rounded-full py-4 px-4 bg-white"><Image src="/images/btn3.svg" width={15} height={15} /></button></div>
                <div><button className="rounded-full py-4 px-4 bg-white"><Image src="/images/btn4.svg" width={15} height={15} /></button></div>
                <div><button className="rounded-full py-4 px-4 bg-white" ><Image src="/images/btn5.svg" width={15} height={15} /></button></div>
                <div><button className="rounded-full py-4 px-4 bg-white"><Image src="/images/btn6.svg" width={15} height={15} /></button></div>

              </div>
              <div className="rounded-md border border-[#FAD7DD] mt-3">
                <div><p className="bg-[#FAD7DD38]  py-3 px-3 font-[500]">Asked in 2+ papers (in 5 years)</p></div>
                <div className="bg-[#FEE0019E] py-3 px-3"><p>ligaments and articular discs.</p></div>
              </div>
              <button className="bg-[#268FDA0A] py-3 px-3 rounded-md my-3 w-full text-left"><p>Disscus with community</p></button>
            </div>
            <div className="border lg:flex-col lg:flex hidden border-[#0000001A] w-[200px] rounded-md px-2  items-center ">
              <Image src="/images/portrait.svg" width={140} height={140} />
              <div className="flex flex-col items-center text-center">
                <h1 className="font-[600] my-4">Are you an Enterpreneur?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <Link href="#" className="rounded-md my-3 bg-[#16213E] text-white py-2 px-7 font-[500] text-[18px]" >Next Que</Link>
              </div>
            </div>
          </div>
        </div>
        <WebFooter />
      </div>
    </>
  )
}