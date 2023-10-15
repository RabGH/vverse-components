import { FilterFilledCheckbox } from "@/components/filters/checkbox-filled-filter";
import { FilterOutlineCheckbox } from "@/components/filters/checkbox-outline-filter";
import { FilterFilledLarge } from "@/components/filters/lg-filled-filter";
import { FilterOutlineLarge } from "@/components/filters/lg-outline-filter";
import { FilterFilledSmall } from "@/components/filters/sm-filled-filter";
import { FilterOutlineSmall } from "@/components/filters/sm-outline-filter";

import { categories } from "@/constants";

const FilterPage = () => {
  return (
    <div className="flex flex-col items-center h-full space-y-5 pt-3">
      <div className="flex flex-row space-x-5 ">
        <FilterOutlineLarge
          categories={categories}
          selectCategoryPlaceholder={"Category"}
          searchCategoryPlaceholder={"Search..."}
          noCategoryFoundMessage={"Non Found"}
        />
        <FilterFilledLarge
          categories={categories}
          selectCategoryPlaceholder={"Category"}
          searchCategoryPlaceholder={"Search..."}
          noCategoryFoundMessage={"Non Found"}
        />
      </div>
      <div className="flex flex-row space-x-5 ">
        <FilterFilledSmall
          categories={categories}
          selectCategoryPlaceholder={"Category"}
          searchCategoryPlaceholder={"Search..."}
          noCategoryFoundMessage={"Non Found"}
        />
        <FilterOutlineSmall
          categories={categories}
          selectCategoryPlaceholder={"Category"}
          searchCategoryPlaceholder={"Search..."}
          noCategoryFoundMessage={"Non Found"}
        />
      </div>
      <div className="flex flex-row space-x-5 ">
        <FilterOutlineCheckbox
          categories={categories}
          selectCategoryPlaceholder={"Category"}
          searchCategoryPlaceholder={"Search..."}
          noCategoryFoundMessage={"Non Found"}
        />
        <FilterFilledCheckbox
          categories={categories}
          selectCategoryPlaceholder={"Category"}
          searchCategoryPlaceholder={"Search..."}
          noCategoryFoundMessage={"Non Found"}
        />
      </div>
    </div>
  );
};

export default FilterPage;
