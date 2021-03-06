import React, { useState, useEffect } from 'react';
import QuestionItem from './components/QuestionItem/QuestionItem';
import { useHistory, useLocation } from 'react-router-dom';
import { auth } from './../../Auth/firebase';
import { NavLink } from "react-router-dom";
import { Axios } from './../../api/axios';
import BtnRegisterLogin from "../../components/Navbar/BtnRegisterLogin";
import sortSearchResponse from './searchML';

function NewsFeedPage(props) {
  //----------get Question by URL---------------------------------------
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const q = query.get('q');
  //------------------------------------------------------------
  const [refresh, setRefresh] = useState({});
  const [questionItems, setQuestionItems] = useState();
  //get question
  useEffect(() => {
    Axios.get("/question")
      .then((res) => {
        let _questionItems = res.data;
        if (_questionItems) {
          const _idQuestionSorteds = sortSearchResponse(_questionItems, q);
          const kq = [];
          _idQuestionSorteds.map((_questionSorted) => (
            kq.push(_questionItems.filter(_questionItem => _questionItem._id === _questionSorted.index))
          ))
          setQuestionItems(kq);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, refresh, window.location.href]);
  //------------------------------------------------------------
  const [user, setUser] = useState(true);
  //check user login?
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else setUser(false);
    })
  });
  //------------------------------------------------------------
  const handleQuest = async (e) => {
    if (!user) alert("Bạn chưa login");
    else {
      e.preventDefault();
      const content = document.querySelector("#inputQuestion").value;
      const token = await user.getIdToken();
      Axios.post(
        "/question",
        {
          content: content,
          date: new Date(),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      ).then(() => {
        document.querySelector("#inputQuestion").value = "";
        setRefresh({});
      });
    };
  }
  const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    const content = document.querySelector("#inputQuestion").value;
    if (content) {
      history.push(`/search?q=${content}`);
    }
  }
  //--------------Check new Question-------------------------------
  useEffect(() => {
    const interval = setInterval(() => {
      Axios.get("/question")
        .then((res) => {
          let _questionItems = res.data;
          if (_questionItems) {
            const _idQuestionSorteds = sortSearchResponse(_questionItems, q);
            const kq = [];
            _idQuestionSorteds.map((_questionSorted) => (
              kq.push(_questionItems.filter(_questionItem => _questionItem._id === _questionSorted.index))
            ))
            setQuestionItems(kq);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      {/* navbar */}
      <div className="flex flex-wrap justify-between text-sm text-gray-700 font-bold">
        <div className="flex items-center">
          <NavLink to="/" activeClassName="active-menu" exact>
            <h2 className="text-red-500 font-svn-inter font-bold text-6xl ml-4 cursor-pointer my-3 mr-2">Frientor</h2>
          </NavLink>
        </div>

        <div className="flex items-center ml-5">
          {!user &&
            <BtnRegisterLogin match_path={"user"} />
          }
          {user &&
            <>
              <p className="block">
                <NavLink to="user" activeClassName="active-menu" exact>
                  <p className="block">{user?.displayName || user?.email}</p>

                </NavLink>
              </p>
              <p className="block">
                <img alt=""
                  className="rounded-full block py-3 px-3"
                  src={user?.photoURL || "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg"} width="62" height="62"
                />
              </p>
            </>
          }
        </div>
      </div>

      {/* body */}
      <div className="overflow-x-hidden">

        <div className="px-6 py-8">
          <div className="flex justify-between container mx-auto">
            {/*  */}
            <div className="-mx-8 w-4/12 hidden lg:block">
              <div className="px-8">
                <div className="text-center rounded-none">
                  <input className="text-center text-2xl font-bold focus:outline-none" type="text" placeholder=""></input>
                </div>
                <h1 className="mb-4 text-xl font-bold text-gray-700 ml-8 my-4">Hot Frientor</h1>
                <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
                  <ul className="-mx-4">
                    <li className="flex items-center mt-6"><img src="https://lh3.googleusercontent.com/a-/AOh14Ghv_1jbVXJ4n3lwIwzvEq-S4Z1gMzmeO3JSpqvcog=s96-c" alt="avatar" className="w-10 h-10 object-cover rounded-full mx-4" />
                      <p><p href="#" className="text-gray-700 font-bold mx-1 hover:underline">Khanh Dang</p><span className="text-gray-700 text-sm font-light">Created 73 Posts</span></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-8/12">
              <div className="flex flex-wrap">
                <textarea id="inputQuestion" placeholder="Write down your question here" defaultValue={q} className="mr-5 flex-1 h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline " />
                <div>
                  <button onClick={handleSearch} className="mb-1 mr-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded">
                    Search
                  </button>
                </div>
              </div>
              <button onClick={handleQuest}
                className="my-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded">
                Post Question
              </button>
              <hr />
              {questionItems?.map((questionItem) => (
                <QuestionItem key={questionItem[0]._id} questionItem={questionItem[0]} />
              ))}

              <div className="mt-8">
                <div className="flex">
                  <p href="#" className="mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed">
                    previous
                  </p>
                  <p href="#" className="font-bold mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                    1
                  </p>
                  <p href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                    2
                  </p>
                  <p href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                    3
                  </p>
                  <p href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
                    Next
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---- */}
      </div>

    </div>
  );
}

export default NewsFeedPage;