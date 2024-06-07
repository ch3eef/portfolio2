import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
{
    id: 1,
    title: "Commerce Site",
    img: "https://images.pexels.com/photos/18881261/pexels-photo-18881261/free-photo-of-florence-cathedral.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consectetur repellendus quibusdam provident et sed dicta eveniet quisquam veniam voluptas. Non obcaecati omnis quod veniam dicta magni sed assumenda voluptatem?"
},
{
    id: 2,
    title: "Food Ordering Site",
    img: "https://images.pexels.com/photos/310435/pexels-photo-310435.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consectetur repellendus quibusdam provident et sed dicta eveniet quisquam veniam voluptas. Non obcaecati omnis quod veniam dicta magni sed assumenda voluptatem?"
},
{
    id: 3,
    title: "Moxie Website",
    img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consectetur repellendus quibusdam provident et sed dicta eveniet quisquam veniam voluptas. Non obcaecati omnis quod veniam dicta magni sed assumenda voluptatem?"
},
{
    id: 4,
    title: "Tailwind CSS Commerce",
    img: "https://images.pexels.com/photos/3761005/pexels-photo-3761005.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consectetur repellendus quibusdam provident et sed dicta eveniet quisquam veniam voluptas. Non obcaecati omnis quod veniam dicta magni sed assumenda voluptatem?"
},
]

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
