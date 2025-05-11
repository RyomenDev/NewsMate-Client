import ChatContainer from "@/components/ChatContainer";
import HomeBg from "@/assests/HomeBg.png";

const Index = () => {
  return (
    <>
      <ChatContainer />
      {/* <header className="flex justify-between items-center px-4 py-3 bg-sky-200 border-b border-gray-200 shadow-sm">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-newsmate-blue">NewsMate</h1>
        </div>
      </header>

      <div
        className="relative min-h-[calc(100vh-60px)]"
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-center text-4xl text-sky-500">HomePage</div>
        <div className="fixed lg:bottom-6 lg:right-6 z-50 h-full w-full lg:h-3/5 lg:w-2/5">
          <ChatContainer />
        </div>
      </div> */}
    </>
  );
};

export default Index;
