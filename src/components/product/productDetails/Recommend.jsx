const Recommend = ({ recommend }) => {
  const recommendedLength = recommend[0]?.recommend.length;
  return (
    <>
      {recommend.length > 1 ? (
        <div className="flex flex-wrap pr-4">
          {recommend.map((recommended, index) => {
            return (
              <div key={recommended.id} className="w-1/2">
                <h2 className="text-3xl font-semibold py-2">{recommended?.title}</h2>
                {recommend[index]?.recommend.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className="flex gap-5 items-center py-1"
                    >
                      <img className="w-8" src={item?.image} alt={item.title} />
                      <h2>{item.title}</h2>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap">
          <div className="w-1/2">
            {recommend[0]?.recommend
              .slice(0, Math.round(recommendedLength / 2))
              .map((item) => {
                return (
                  <div key={item?.id} className="flex gap-5 items-center py-1">
                    <img className="w-8" src={item?.image} alt={item.title} />
                    <h2>{item.title}</h2>
                  </div>
                );
              })}
          </div>
          <div className="w-1/2">
            {recommend[0]?.recommend
              .slice(Math.round(recommendedLength / 2), recommendedLength)
              .map((item) => {
                return (
                  <div key={item?.id} className="flex gap-5 items-center py-1">
                    <img className="w-8" src={item?.image} alt={item.title} />
                    <h2>{item.title}</h2>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Recommend;
