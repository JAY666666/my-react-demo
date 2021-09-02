import loadable from "../utils/loadable";

const test1 = loadable(() => import("../views/Test"));
const test2 = loadable(() => import("../views/Test2"));

const routes = [
  {
    path: "/test1",
    name: "实验1",
    key: 'test1',
    exact: true,
    component: test1,
  },
  {
    path: "/test2",
    name: "实验2",
    key: 'test2',
    exact: false,
    component: test2,
  },
];

export default routes
