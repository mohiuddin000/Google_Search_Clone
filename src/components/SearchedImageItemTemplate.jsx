const SearchedImageItemTemplate = ({data}) => {
    return (
        <div className="flex group flex-col py-3 cursor-pointer" onClick={()=>window.open(data.image.contextLink)}>
            <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] lg:h-[140px] group-hover:shadow-c ">
                <img src={data.link} className="h-full w-full object-contain" alt="" />
            </div>
            <div className="text-sm text-[#70757a] pt-2 ">
                {data.displayLink}
            </div>
            <div className="text-sm text-[#3c4043] truncate pt-3 group-hover:underline ">
                {data.title}
            </div>
        </div>
    );
};

export default SearchedImageItemTemplate;
