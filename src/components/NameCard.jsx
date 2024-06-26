import { useSpring, animated } from "react-spring";
import { Image } from "./Image";
import { Icon } from "./Icon";
import clsx from 'clsx';
import axios from "axios";
import { useEffect, useState } from "react";

export const NameCard = ({
  name,
  position,
  transactionAmount,
  rise,
  tasksCompleted,
  imgId,
  token
}) => {
  const { transactions, barPlayhead } = useSpring({
    transactions: transactionAmount,
    barPlayhead: 1,
    from: { transactions: 0, barPlayhead: 0 },
  });

  const [product, setProduct] = useState(0)
  const [user, setUser] = useState(0)

  const getTotalProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v2/product/allproducts');
      setProduct(response.data.length);
      // console.log("productcount", response.data.length);

    } catch (error) {
      console.log(error)

    }
  }
  const getTotalStaff = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v2/user/allusers');
      setUser(response.data.length);
      // console.log("staffcount", response.data.length);

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getTotalProducts();
    getTotalStaff();
  }, [])
  return (
    <div className="flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
      <div className="w-full p-2 lg:w-1/3">
        <div className="rounded-lg bg-card flex justify-between p-3 h-32">
          <div className="">
            <div className="flex items-center">
              <Image path={`mock_faces_${imgId}`} className="w-10 h-10" />
              <div className="ml-2">
                <div className="flex items-center">
                  <div className="mr-2 font-bold text-white">Tasks {token}</div>
                  <Icon path="res-react-dash-tick" />
                </div>
                <div className="text-sm ">500</div>
              </div>
            </div>

            <div className="text-sm  mt-2">{`${tasksCompleted} from 5 tasks completed`}</div>
            <svg
              className="w-44 mt-3"
              height="6"
              viewBox="0 0 200 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="6" rx="3" fill="#2D2D2D" />
              <animated.rect
                width={barPlayhead.interpolate(
                  (i) => i * (500 / 5),
                )}
                height="6"
                rx="3"
                fill="url(#paint0_linear)"
              />
              <rect x="38" width="2" height="6" fill="#171717" />
              <rect x="78" width="2" height="6" fill="#171717" />
              <rect x="118" width="2" height="6" fill="#171717" />
              <rect x="158" width="2" height="6" fill="#171717" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#8E76EF" />
                  <stop offset="1" stopColor="#3912D2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              path={rise ? 'res-react-dash-bull' : 'res-react-dash-bear'}
              className="w-8 h-8"
            />
            <animated.div
            className="text-green-500 text-lg font-bold"
            >
              {transactions.interpolate((i) => `$${i.toFixed(2)}`)}
            </animated.div>
            <div className="text-sm ">Last 6 month</div>
          </div>
        </div>
      </div>
      <div className="w-full p-2 lg:w-1/3">
        <div className="rounded-lg bg-card flex justify-between p-3 h-32">
          <div className="">
            <div className="flex items-center">
              <Image path={`mock_faces_${imgId}`} className="w-10 h-10" />
              <div className="ml-2">
                <div className="flex items-center">
                  <div className="mr-2 font-bold text-white">Total Products</div>
                  <Icon path="res-react-dash-tick" />
                </div>
                <div className="text-sm ">{position}</div>
              </div>
            </div>

            <div className="text-sm  mt-2">{`${tasksCompleted} from 5 tasks completed`}</div>
            <svg
              className="w-44 mt-3"
              height="6"
              viewBox="0 0 200 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="6" rx="3" fill="#2D2D2D" />
              <animated.rect
                width={barPlayhead.interpolate(
                  (i) => i * (tasksCompleted / 5) * 200,
                )}
                height="6"
                rx="3"
                fill="url(#paint0_linear)"
              />
              <rect x="38" width="2" height="6" fill="#171717" />
              <rect x="78" width="2" height="6" fill="#171717" />
              <rect x="118" width="2" height="6" fill="#171717" />
              <rect x="158" width="2" height="6" fill="#171717" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#8E76EF" />
                  <stop offset="1" stopColor="#3912D2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              path='res-react-dash-bear'
              className="w-8 h-8"
            />
            <animated.div
              className="text-green-500 text-lg font-bold"
            >
              {transactions.interpolate((i) => `${product}`)}
            </animated.div>
            <div className="text-sm ">Last 6 month</div>
          </div>
        </div>
      </div>
      <div className="w-full p-2 lg:w-1/3">
        <div className="rounded-lg bg-card flex justify-between p-3 h-32">
          <div className="">
            <div className="flex items-center">
              <Image path={`mock_faces_${imgId}`} className="w-10 h-10" />
              <div className="ml-2">
                <div className="flex items-center">
                  <div className="mr-2 font-bold text-white">Total Users</div>
                  <Icon path="res-react-dash-tick" />
                </div>
                <div className="text-sm ">{position}</div>
              </div>
            </div>

            <div className="text-sm  mt-2">{`${tasksCompleted} from 5 tasks completed`}</div>
            <svg
              className="w-44 mt-3"
              height="6"
              viewBox="0 0 200 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="6" rx="3" fill="#2D2D2D" />
              <animated.rect
                width={barPlayhead.interpolate(
                  (i) => i * (tasksCompleted / 5) * 200,
                )}
                height="6"
                rx="3"
                fill="url(#paint0_linear)"
              />
              <rect x="38" width="2" height="6" fill="#171717" />
              <rect x="78" width="2" height="6" fill="#171717" />
              <rect x="118" width="2" height="6" fill="#171717" />
              <rect x="158" width="2" height="6" fill="#171717" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#8E76EF" />
                  <stop offset="1" stopColor="#3912D2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              path={rise ? 'res-react-dash-bull' : 'res-react-dash-bear'}
              className="w-8 h-8"
            />
            <animated.div
            className="text-green-500 text-lg font-bold"
            >
              {transactions.interpolate((i) => `${user}`)}
            </animated.div>
            <div className="text-sm ">Last 6 month</div>
          </div>
        </div>
      </div>
    </div>
  );
}