// Import statements
import blogImg1 from "../assets/images/blogImg1.svg";
import blogImg2 from "../assets/images/blogImg2.svg";

// Article component
const Article = ({ imageSrc, date, title, description }) => {
  return (
    <div className="py-6    cursor-pointer border-black w-[20rem]  flex justify-center  flex-col px-4">
      <img src={imageSrc} alt="" />
      <p className="py-4 text-secondary4">{date}</p>
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="py-4 text-secondary4">{description}</p>
      <a className="text-[#5236FF] underline" href="">
        Read More
      </a>
    </div>
  );
};

// Blog page component
const Blog = () => {
  const articles = [
    {
      imageSrc: blogImg1,
      title: "10 Top tips for making your Saas product sticky",
      date: "November 15, 2022",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum",
    },
    {
      imageSrc: blogImg2,
      title: "Automate Reports Generation with Saasup",
      date: "November 15, 2022",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum",
    },
  ];

  return (
    <div className="min-h-[100vh] flex justify-center items-center ">
      <div className="bg-secondary1 w-[70%] h-[90vh] flex flex-col justify-evenly items-center">
        <div className="text-white font-bold bg-primary1 px-10 py-4 border rounded-full ml-4">
          Blog
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">Most popular articles</h1>
        </div>
        <div className=" flex flex-wrap w-full justify-evenly">
          {articles.map((article) => (
            <Article
              key={article.title}
              imageSrc={article.imageSrc}
              title={article.title}
              date={article.date}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
