import { FilterBox } from "@/components/filters/filter-box";
import { categories } from "@/constants";

const FilterPage = () => {
  return (
    <div className="flex flex-col items-center h-full space-y-5 p-10">
      <div className="flex flex-row space-x-5 ">
        <FilterBox
          categories={categories}
          selectCategoryPlaceholder={"Category"}
          searchCategoryPlaceholder={"Search Categories"}
          noCategoryFoundMessage={"No category found"}
        />
        <FilterBox
          categories={categories}
          selectCategoryPlaceholder={"Sub-Category"}
          searchCategoryPlaceholder={"Search Sub-Categories"}
          noCategoryFoundMessage={"No category found"}
        />
      </div>
      <div className="flex flex-row space-x-5 ">
        <FilterBox
          categories={categories}
          selectCategoryPlaceholder={"Branch"}
          searchCategoryPlaceholder={"Search Branches"}
          noCategoryFoundMessage={"No branches found"}
        />
        <FilterBox
          categories={categories}
          selectCategoryPlaceholder={"Sub-Category"}
          searchCategoryPlaceholder={"Search Sub-Categories"}
          noCategoryFoundMessage={"No category found"}
        />
      </div>
    </div>
  );
};

export default FilterPage;
