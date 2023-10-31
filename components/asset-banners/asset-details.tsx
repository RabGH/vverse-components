import AssetBlogData from "@/components/asset-banners/asset-data/asset-blog-data";
import AssetNationData from "@/components/asset-banners/asset-data/asset-nation-data";

type AssetDetailsProps = {
  data: any;
  dataType: string;
};

const AssetDetails = ({ data, dataType }: AssetDetailsProps) => {
  return (
    <div>
      {dataType === "blog" && (
        <AssetBlogData
          assetId={data.assetId}
          type={data.type}
          dateStart={data.dateStart}
          dateEnd={data.dateEnd}
          comments={data.comments}
          likes={data.likes}
          shares={data.shares}
          rating={data.rating}
          ratingPoints={data.ratingPoints}
        />
      )}
      {dataType === "nation" && (
        <AssetNationData
          assetId={data.assetId}
          type={data.type}
          date={data.date}
          posts={data.posts}
          likes={data.likes}
          shares={data.shares}
          rating={data.rating}
          ratingPoints={data.ratingPoints}
          followers={data.followers}
        />
      )}
    </div>
  );
};

export default AssetDetails;
