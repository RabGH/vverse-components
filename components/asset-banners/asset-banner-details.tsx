import AssetBlogData from "@/components/asset-banners/asset-data/asset-blog-data";
import AssetNationData from "@/components/asset-banners/asset-data/asset-nation-data";
import AssetTubeData from "@/components/asset-banners/asset-data/asset-tube-date";
import AssetLanceServiceData from "@/components/asset-banners/asset-data/asset-lance-service-data";
import AssetCollegeData from "@/components/asset-banners/asset-data/asset-college-data";
import AssetLanceProjectData from "@/components/asset-banners/asset-data/asset-lance-project-data";

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
      {dataType === "tube" && (
        <AssetTubeData
          assetId={data.assetId}
          type={data.type}
          date={data.date}
          views={data.views}
          subscribers={data.subscribers}
          channelFollowers={data.channelFollowers}
          likes={data.likes}
          shares={data.shares}
          rating={data.rating}
          ratingPoints={data.ratingPoints}
        />
      )}
      {dataType === "lanceService" && (
        <AssetLanceServiceData
          assetId={data.assetId}
          type={data.type}
          date={data.date}
          sales={data.sales}
          orders={data.orders}
          customers={data.customers}
          likes={data.likes}
          shares={data.shares}
          rating={data.rating}
          ratingPoints={data.ratingPoints}
        />
      )}
      {dataType === "college" && (
        <AssetCollegeData
          assetId={data.assetId}
          type={data.type}
          date={data.date}
          sales={data.sales}
          orders={data.orders}
          customers={data.customers}
          likes={data.likes}
          shares={data.shares}
          rating={data.rating}
          ratingPoints={data.ratingPoints}
        />
      )}
      {dataType === "lanceProject" && (
        <AssetLanceProjectData
          assetId={data.assetId}
          type={data.type}
          date={data.date}
          collaborators={data.collaborators}
          likes={data.likes}
          shares={data.shares}
        />
      )}
    </div>
  );
};

export default AssetDetails;
